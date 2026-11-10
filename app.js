(() => {
  "use strict";

  // De tolv måder at bruge AI i dit arbejde – fra workshoppen den 11. november 2026.
  // Feltet "example" (E01–E12) i prompts.js er valgfrit pr. prompt.
  const EXAMPLES = [
    { id: "E01", num: "01", label: "Sparringspartner" },
    { id: "E02", num: "02", label: "Skriveblokering" },
    { id: "E03", num: "03", label: "Fokusgruppe" },
    { id: "E04", num: "04", label: "Praktikant" },
    { id: "E05", num: "05", label: "Excel" },
    { id: "E06", num: "06", label: "Alle sprog" },
    { id: "E07", num: "07", label: "Møder" },
    { id: "E08", num: "08", label: "Researcher" },
    { id: "E09", num: "09", label: "Slides" },
    { id: "E10", num: "10", label: "Programmør" },
    { id: "E11", num: "11", label: "Ny kollega" },
    { id: "E12", num: "12", label: "Kreativ makker" }
  ];

  // Fagområder – rækkefølgen her bestemmer filterknapperne.
  const FIELDS = [
    "På tværs",
    "Kunderådgivning",
    "Kredit",
    "Investering & pension",
    "Jura & compliance",
    "Back-office & økonomi",
    "IT",
    "Kommunikation",
    "Ledelse & HR"
  ];

  const TYPES = ["micro", "quick", "deep"];
  const TYPE_LABELS = { micro: "MIKRO", quick: "KORT", deep: "RKM" };

  const prompts = Array.isArray(window.PROMPTS) ? window.PROMPTS : [];
  const catalogPrompts = interleaveByType(prompts);
  const exampleById = Object.fromEntries(EXAMPLES.map(example => [example.id, example]));
  const state = { search: "", type: "all", examples: [], categories: [], fields: [] };
  const expanded = new Set();

  const searchInput = document.getElementById("search");
  const grid = document.getElementById("grid");
  const resultsCount = document.getElementById("results-count");
  const clearAllButton = document.getElementById("clear-all");
  const panel = document.getElementById("filter-panel");
  const backdrop = document.getElementById("panel-backdrop");
  const toolbar = document.getElementById("toolbar");
  const toolbarInner = document.getElementById("toolbar-inner");
  const activeChips = document.getElementById("active-chips");
  const infoButton = document.getElementById("info-btn");
  const infoPanel = document.getElementById("info-panel");
  const mobileQuery = window.matchMedia("(max-width: 720px)");
  let panelOpener = null;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return String(value)
      .toLocaleLowerCase("da-DK")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // Blander de tre typer (MIKRO, KORT, RKM), så de skifter i gitteret.
  // Rækkefølgen i prompts.js bevares inden for hver type – dagens prompts ligger først.
  function interleaveByType(items) {
    const buckets = TYPES.map(type => items.filter(item => item.type === type));
    const longest = Math.max(...buckets.map(bucket => bucket.length), 0);
    const ordered = [];
    for (let index = 0; index < longest; index += 1) {
      buckets.forEach(bucket => {
        if (bucket[index]) ordered.push(bucket[index]);
      });
    }
    return ordered;
  }

  function exampleLabel(id, long = false) {
    const example = exampleById[id];
    if (!example) return "";
    return long ? `${example.num} · ${example.label}` : `${example.num} ${example.label}`;
  }

  function renderPromptBody(text) {
    let html = escapeHtml(text);
    html = html.replace(/\[([^\]]+)\]/g, "<em>[$1]</em>");
    html = html.replace(
      /^(Rolle|Kontekst|Metode|Format|Tone|Råmateriale|Opgave|Input|Output|Kontrol):/gm,
      "<b>$1:</b>"
    );
    return html;
  }

  function withoutUsePrefix(value) {
    return String(value).replace(/^Brug den/i, "");
  }

  function searchableText(prompt) {
    return normalize([
      prompt.title,
      prompt.category,
      prompt.example || "",
      exampleLabel(prompt.example, true),
      prompt.field,
      prompt.when,
      prompt.prompt,
      prompt.safety,
      prompt.avoid || "",
      ...(prompt.tags || [])
    ].join(" "));
  }

  function matchesFilters(prompt, options = {}) {
    const { ignoreType = false } = options;
    if (!ignoreType && state.type !== "all" && prompt.type !== state.type) return false;
    if (state.examples.length && !state.examples.includes(prompt.example)) return false;
    if (state.categories.length && !state.categories.includes(prompt.category)) return false;
    if (state.fields.length && !state.fields.includes(prompt.field)) return false;
    if (state.search && !searchableText(prompt).includes(normalize(state.search))) return false;
    return true;
  }

  function countValues(key) {
    return prompts.reduce((counts, prompt) => {
      const value = prompt[key];
      if (value === undefined || value === null || value === "") return counts;
      counts[value] = (counts[value] || 0) + 1;
      return counts;
    }, {});
  }

  function renderExampleFilters(focusValue) {
    const container = document.getElementById("example-filters");
    if (!container) return;
    const counts = countValues("example");
    container.innerHTML = EXAMPLES.map(example => {
      const active = state.examples.includes(example.id);
      return `<button class="ex-btn${active ? " active" : ""}" type="button" data-example="${example.id}" aria-pressed="${active}" aria-label="${example.num} ${escapeHtml(example.label)}, ${counts[example.id] || 0} prompts"><span class="ex-num" aria-hidden="true">${example.num}</span><span class="ex-label" aria-hidden="true">${escapeHtml(example.label)}</span><span class="ex-count" aria-hidden="true">${counts[example.id] || 0}</span></button>`;
    }).join("");

    container.querySelectorAll("[data-example]").forEach(button => {
      button.addEventListener("click", () => {
        toggleSelection(state.examples, button.dataset.example);
        render(button.dataset.example, "example");
      });
    });

    if (focusValue) container.querySelector(`[data-example="${focusValue}"]`)?.focus();
  }

  function renderCategoryFilters(focusValue) {
    const container = document.getElementById("category-filters");
    const counts = countValues("category");
    const categories = Object.keys(counts).sort((a, b) => a.localeCompare(b, "da"));
    container.innerHTML = categories.map(category => {
      const active = state.categories.includes(category);
      return `<button class="cat-btn${active ? " active" : ""}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${active}">${escapeHtml(category)} <span class="cat-count">${counts[category]}</span></button>`;
    }).join("");

    container.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        toggleSelection(state.categories, button.dataset.category);
        render(button.dataset.category, "category");
      });
    });

    if (focusValue) {
      Array.from(container.querySelectorAll("[data-category]"))
        .find(button => button.dataset.category === focusValue)
        ?.focus();
    }
  }

  function renderFieldFilters(focusValue) {
    const container = document.getElementById("field-filters");
    if (!container) return;
    const counts = countValues("field");
    container.innerHTML = FIELDS.filter(field => counts[field]).map(field => {
      const active = state.fields.includes(field);
      return `<button class="cat-btn${active ? " active" : ""}" type="button" data-field="${escapeHtml(field)}" aria-pressed="${active}">${escapeHtml(field)} <span class="cat-count">${counts[field]}</span></button>`;
    }).join("");

    container.querySelectorAll("[data-field]").forEach(button => {
      button.addEventListener("click", () => {
        toggleSelection(state.fields, button.dataset.field);
        render(button.dataset.field, "field");
      });
    });

    if (focusValue) {
      Array.from(container.querySelectorAll("[data-field]"))
        .find(button => button.dataset.field === focusValue)
        ?.focus();
    }
  }

  function toggleSelection(list, value) {
    const index = list.indexOf(value);
    if (index >= 0) list.splice(index, 1);
    else list.push(value);
  }

  function renderTypeCounts() {
    const base = prompts.filter(prompt => matchesFilters(prompt, { ignoreType: true }));
    document.querySelectorAll('[data-count="all"]').forEach(target => { target.textContent = base.length; });
    TYPES.forEach(type => {
      const n = base.filter(prompt => prompt.type === type).length;
      document.querySelectorAll(`[data-count="${type}"]`).forEach(target => { target.textContent = n; });
    });

    document.querySelectorAll(".type-btn").forEach(button => {
      const active = button.dataset.type === state.type;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderCards() {
    const filtered = catalogPrompts.filter(prompt => matchesFilters(prompt));
    resultsCount.textContent = filtered.length;
    document.querySelectorAll('[data-count="results"]').forEach(target => { target.textContent = filtered.length; });

    if (!filtered.length) {
      grid.innerHTML = `<div class="empty" style="grid-column:1/-1"><div class="empty-mark" aria-hidden="true">—</div><div class="empty-text">Ingen match</div><div class="empty-sub">Prøv et andet søgeord eller ryd filtrene.</div></div>`;
      return;
    }

    grid.innerHTML = filtered.map(prompt => {
      const isExpanded = expanded.has(prompt.id);
      const contentId = `content-${prompt.id}`;
      const titleId = `title-${prompt.id}`;
      const example = prompt.example && exampleById[prompt.example]
        ? `<button class="example-tag" type="button" data-pick-example="${escapeHtml(prompt.example)}" title="Vis alle prompts fra ${escapeHtml(exampleLabel(prompt.example, true))}">${escapeHtml(exampleLabel(prompt.example))}</button>`
        : "";
      const field = prompt.field && prompt.field !== "På tværs"
        ? `<span class="card-field">${escapeHtml(prompt.field)}</span>`
        : "";
      const avoid = prompt.avoid
        ? `<p class="control-note avoid-note"><strong>Brug ikke til:</strong> ${escapeHtml(prompt.avoid)}</p>`
        : "";
      return `<article class="card card-${prompt.type}" data-id="${escapeHtml(prompt.id)}" aria-labelledby="${titleId}">
        <div class="card-head">
          <span class="badge badge-${prompt.type}">${TYPE_LABELS[prompt.type] || ""}</span>
          ${example}
          <span class="card-cat">${escapeHtml(prompt.category)}</span>
          ${field}
        </div>
        <h2 class="card-title" id="${titleId}">${escapeHtml(prompt.title)}</h2>
        <p class="card-when"><strong>Brug den</strong>${escapeHtml(withoutUsePrefix(prompt.when))}</p>
        <div class="card-content${isExpanded ? " expanded" : ""}" id="${contentId}" aria-hidden="${!isExpanded}">
          <div class="card-body">${renderPromptBody(prompt.prompt)}</div>
          <div class="control-notes">
            <p class="control-note"><strong>Kontrollér:</strong> ${escapeHtml(prompt.safety)}</p>
            ${avoid}
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary btn-copy" type="button" data-id="${escapeHtml(prompt.id)}" aria-label="Kopiér prompten ${escapeHtml(prompt.title)}">${copyIcon()} Kopiér</button>
          <button class="btn btn-expand btn-toggle" type="button" data-id="${escapeHtml(prompt.id)}" aria-expanded="${isExpanded}" aria-controls="${contentId}">${isExpanded ? "Skjul ↑" : "Vis hele ↓"}</button>
        </div>
      </article>`;
    }).join("");

    grid.querySelectorAll(".card").forEach(card => {
      const content = card.querySelector(".card-content");
      const toggle = card.querySelector(".btn-toggle");
      if (!content || !toggle || content.classList.contains("expanded")) return;
      if (content.scrollHeight <= 230) {
        content.classList.add("short");
        content.setAttribute("aria-hidden", "false");
        toggle.remove();
      }
    });

    grid.querySelectorAll(".btn-copy").forEach(button => {
      button.addEventListener("click", () => copyPrompt(button));
    });
    grid.querySelectorAll(".btn-toggle").forEach(button => {
      button.addEventListener("click", () => togglePrompt(button));
    });
    grid.querySelectorAll("[data-pick-example]").forEach(button => {
      button.addEventListener("click", () => {
        state.examples = [button.dataset.pickExample];
        render();
        scrollToResults();
      });
    });
  }

  async function copyPrompt(button) {
    const prompt = prompts.find(item => item.id === button.dataset.id);
    if (!prompt) return;
    const copied = await copyText(prompt.prompt);
    if (!copied) {
      expanded.add(prompt.id);
      renderCards();
      document.querySelector(`[data-id="${prompt.id}"] .card-body`)?.scrollIntoView({ block: "center" });
      showToast("Kunne ikke kopiere automatisk. Markér prompten manuelt.", true);
      return;
    }

    button.classList.add("copied");
    button.innerHTML = `${checkIcon()} Kopieret`;
    showToast(`Kopieret: ${prompt.title}`);
    window.setTimeout(() => {
      if (!button.isConnected) return;
      button.classList.remove("copied");
      button.innerHTML = `${copyIcon()} Kopiér`;
    }, 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const successful = document.execCommand("copy");
        textarea.remove();
        return successful;
      } catch (fallbackError) {
        return false;
      }
    }
  }

  function togglePrompt(button) {
    const id = button.dataset.id;
    const content = document.getElementById(`content-${id}`);
    if (!content) return;
    const open = !expanded.has(id);
    if (open) expanded.add(id);
    else expanded.delete(id);
    content.classList.toggle("expanded", open);
    content.setAttribute("aria-hidden", String(!open));
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Skjul ↑" : "Vis hele ↓";
  }

  function copyIcon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  }

  function checkIcon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
  }

  let toastTimer;
  function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-text").textContent = message;
    toast.classList.toggle("error", isError);
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
  }

  const GROUP_STATE = { example: "examples", category: "categories", field: "fields" };

  function updateFilterSummary() {
    const groupCounts = {
      example: state.examples.length,
      category: state.categories.length,
      field: state.fields.length
    };
    const typeActive = state.type !== "all" ? 1 : 0;
    // På mobil ligger typevalget i arket, så det tæller med dér
    groupCounts.all = groupCounts.example + groupCounts.category + groupCounts.field + (mobileQuery.matches ? typeActive : 0);

    document.querySelectorAll("[data-n]").forEach(badge => {
      const n = groupCounts[badge.dataset.n] || 0;
      badge.textContent = n;
      badge.hidden = !n;
      badge.closest(".dd-btn")?.classList.toggle("har-valg", n > 0);
    });

    const chips = [];
    if (typeActive) chips.push({ kind: "type", value: state.type, label: TYPE_LABELS[state.type] });
    state.examples.forEach(value => chips.push({ kind: "example", value, label: exampleLabel(value, true) }));
    state.categories.forEach(value => chips.push({ kind: "category", value, label: value }));
    state.fields.forEach(value => chips.push({ kind: "field", value, label: value }));
    activeChips.innerHTML = chips.map((chip, index) =>
      `<button class="chip-x" type="button" data-chip="${index}" aria-label="Fjern filteret ${escapeHtml(chip.label)}">${escapeHtml(chip.label)}<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`
    ).join("");
    activeChips.querySelectorAll("[data-chip]").forEach(button => {
      button.addEventListener("click", () => {
        const chip = chips[Number(button.dataset.chip)];
        if (chip.kind === "type") state.type = "all";
        else toggleSelection(state[GROUP_STATE[chip.kind]], chip.value);
        render();
        (activeChips.querySelector("[data-chip]") || searchInput).focus();
      });
    });

    clearAllButton.hidden = !(chips.length || state.search);
  }

  function render(focusValue, focusKind) {
    renderExampleFilters(focusKind === "example" ? focusValue : undefined);
    renderCategoryFilters(focusKind === "category" ? focusValue : undefined);
    renderFieldFilters(focusKind === "field" ? focusValue : undefined);
    renderTypeCounts();
    renderCards();
    updateFilterSummary();
  }

  function updateSearch(event) {
    state.search = event.target.value;
    render();
  }

  ["input", "search", "change"].forEach(eventName => {
    searchInput.addEventListener(eventName, updateSearch);
  });

  document.querySelectorAll(".type-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.type = button.dataset.type;
      render();
      button.focus({ preventScroll: true });
    });
  });

  clearAllButton.addEventListener("click", () => {
    state.search = "";
    state.type = "all";
    state.examples = [];
    state.categories = [];
    state.fields = [];
    searchInput.value = "";
    render();
    searchInput.focus();
  });

  // Rul til starten af resultaterne – men kun hvis man er rullet forbi dem
  function scrollToResults() {
    const main = document.getElementById("bibliotek");
    const top = main.getBoundingClientRect().top + window.scrollY - toolbar.offsetHeight;
    if (window.scrollY > top) window.scrollTo({ top });
  }

  // ---- Foldede filtre: ét panel, der viser den gruppe, man klikker på ----
  function placePanel(opener) {
    if (mobileQuery.matches) { panel.style.left = ""; return; }
    const group = panel.dataset.show;
    if (group === "all") { panel.style.left = ""; return; }
    const box = toolbarInner.getBoundingClientRect();
    const btn = opener.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(toolbarInner).paddingLeft) || 0;
    const max = box.width - pad - panel.offsetWidth;
    panel.style.left = `${Math.max(pad, Math.min(btn.left - box.left, max))}px`;
  }

  function openPanel(opener) {
    const group = opener.dataset.group;
    closeInfo();
    document.querySelectorAll(".dd-btn").forEach(button => button.setAttribute("aria-expanded", "false"));
    panel.dataset.show = group;
    panel.hidden = false;
    backdrop.hidden = !mobileQuery.matches;
    document.body.style.overflow = mobileQuery.matches ? "hidden" : "";
    opener.setAttribute("aria-expanded", "true");
    panelOpener = opener;
    placePanel(opener);
    const visible = Array.from(panel.querySelectorAll(".panel-group")).find(section => getComputedStyle(section).display !== "none");
    (visible?.querySelector("button.active") || visible?.querySelector("button"))?.focus({ preventScroll: true });
  }

  function closePanel(returnFocus) {
    if (panel.hidden) return;
    panel.hidden = true;
    backdrop.hidden = true;
    document.body.style.overflow = "";
    document.querySelectorAll(".dd-btn").forEach(button => button.setAttribute("aria-expanded", "false"));
    if (returnFocus && panelOpener) panelOpener.focus();
    panelOpener = null;
  }

  document.querySelectorAll(".dd-btn").forEach(button => {
    button.addEventListener("click", () => {
      const isOpen = !panel.hidden && panel.dataset.show === button.dataset.group;
      if (isOpen) closePanel(false);
      else openPanel(button);
    });
  });
  panel.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      closePanel(true);
      scrollToResults();
    });
  });
  backdrop.addEventListener("click", () => closePanel(false));
  document.getElementById("panel-clear").addEventListener("click", () => {
    const group = panel.dataset.show;
    if (GROUP_STATE[group]) state[GROUP_STATE[group]] = [];
    else { state.examples = []; state.categories = []; state.fields = []; if (mobileQuery.matches) state.type = "all"; }
    render();
  });

  // ---- "Sådan"-boksen ----
  function closeInfo() {
    infoPanel.hidden = true;
    infoButton.setAttribute("aria-expanded", "false");
  }
  infoButton.addEventListener("click", () => {
    const open = infoPanel.hidden;
    if (open) closePanel(false);
    infoPanel.hidden = !open;
    infoButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", event => {
    const target = event.target;
    if (!target.isConnected) return;   // knappen blev tegnet om
    if (!panel.hidden && !panel.contains(target) && !target.closest(".dd-btn") && !mobileQuery.matches) closePanel(false);
    if (!infoPanel.hidden && !infoPanel.contains(target) && !infoButton.contains(target)) closeInfo();
  });
  window.addEventListener("resize", () => {
    if (!panel.hidden && panelOpener) {
      if (!panelOpener.getClientRects().length) closePanel(false);
      else placePanel(panelOpener);
    }
    updateFilterSummary();
  });

  // Skygge under værktøjslinjen, når den klæber
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      toolbar.classList.toggle("stuck", !entry.isIntersecting);
    }).observe(document.querySelector(".masthead"));
  }

  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && !panel.hidden) { closePanel(true); return; }
    if (event.key === "Escape" && !infoPanel.hidden) { closeInfo(); infoButton.focus(); return; }
    if (event.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      state.search = "";
      render();
      searchInput.blur();
    }
  });

  // Kortere pladsholder på mobil
  const fullPlaceholder = searchInput.placeholder;
  function setPlaceholder() {
    searchInput.placeholder = mobileQuery.matches ? "Søg, fx mail …" : fullPlaceholder;
  }
  mobileQuery.addEventListener?.("change", () => { setPlaceholder(); closePanel(false); });
  setPlaceholder();

  document.getElementById("total-count").textContent = prompts.length;
  render();
})();
