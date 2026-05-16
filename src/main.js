import {
  bacPractice,
  courseCoverage,
  courseCatalog,
  examDates,
  grandOral,
  frequentErrors,
  methodAdvice,
  officialReferences,
  navigation,
  ficheSummaries,
  priorityCards,
  priorityChecklist,
  quickRevision,
  oralTraining,
  planning,
  physiqueChimie,
  maths,
  sti2d,
  tests,
} from './data.js';

import katex from 'katex';
import 'katex/dist/katex.min.css';
import './styles.css';

const markdownModules = import.meta.glob('../cours/**/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});
const markdownByPath = new Map(
  Object.entries(markdownModules).map(([key, content]) => [key.replace(/^\.\./, ''), content]),
);

const STORAGE_KEY = 'bac-sti2d-revision-v1';
const app = document.querySelector('#app');
const nav = document.querySelector('#nav');
let renderSeq = 0;

function loadState() {
  const fallback = {
    sessions: {},
    checklist: {},
    tests: {},
    courseFilter: 'all',
    courseSubject: courseCatalog[0]?.id ?? 'mathematiques',
    courseChapter: courseCatalog[0]?.chapters[0]?.id ?? 'maths-index',
    ficheSubject: ficheSummaries[0]?.subject ?? 'mathematiques',
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      sessions: parsed.sessions ?? {},
      checklist: parsed.checklist ?? {},
      tests: parsed.tests ?? {},
      courseFilter: parsed.courseFilter ?? 'all',
      courseSubject: parsed.courseSubject ?? courseCatalog[0]?.id ?? 'mathematiques',
      courseChapter: parsed.courseChapter ?? courseCatalog[0]?.chapters[0]?.id ?? 'maths-index',
      ficheSubject: parsed.ficheSubject ?? ficheSummaries[0]?.subject ?? 'mathematiques',
    };
  } catch {
    return fallback;
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setCourseFilter(filter) {
  state.courseFilter = filter;
  saveState();
}

function setCourseSubject(subjectId) {
  state.courseSubject = subjectId;
  const subject = courseCatalog.find((item) => item.id === subjectId) ?? courseCatalog[0];
  if (subject && !subject.chapters.some((chapter) => chapter.id === state.courseChapter)) {
    state.courseChapter = subject.chapters[0]?.id ?? state.courseChapter;
  }
  saveState();
}

function setCourseChapter(chapterId) {
  state.courseChapter = chapterId;
  saveState();
}

function setFicheSubject(subjectId) {
  state.ficheSubject = subjectId;
  saveState();
}

function setSessionDone(id, checked) {
  state.sessions[id] = checked;
  saveState();
}

function setChecklistDone(id, checked) {
  state.checklist[id] = checked;
  saveState();
}

function setTestResult(testId, result) {
  state.tests[testId] = result;
  saveState();
}

function resetState() {
  state = {
    sessions: {},
    checklist: {},
    tests: {},
    courseFilter: 'all',
    courseSubject: courseCatalog[0]?.id ?? 'mathematiques',
    courseChapter: courseCatalog[0]?.chapters[0]?.id ?? 'maths-index',
    ficheSubject: ficheSummaries[0]?.subject ?? 'mathematiques',
  };
  saveState();
  render();
}

function formatDate(dateStr) {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(`${dateStr}T12:00:00`));
}

function formatShortDate(dateStr) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(`${dateStr}T12:00:00`));
}

function countAllSessions() {
  return planning.reduce((total, week) => total + week.sessions.length, 0);
}

function countAllChecklistItems() {
  const collections = [maths, physiqueChimie, sti2d];
  const dailyPriorityItems = priorityChecklist.reduce((sum, day) => sum + day.tasks.length, 0);
  return collections.reduce(
    (total, subject) =>
      total +
      subject.reduce((sum, notion) => sum + notion.checklist.length, 0),
    dailyPriorityItems,
  );
}

function countCompletedSessions() {
  return Object.values(state.sessions).filter(Boolean).length;
}

function countCompletedChecklistItems() {
  return Object.values(state.checklist).filter(Boolean).length;
}

function countCompletedTests() {
  return Object.values(state.tests).filter(Boolean).length;
}

function allSessionsFlat() {
  return planning.flatMap((week) => week.sessions.map((session) => ({ ...session, week: week.label })));
}

function upcomingSessions(limit = 4) {
  return allSessionsFlat()
    .filter((session) => !state.sessions[session.id])
    .slice(0, limit);
}

function subjectStats() {
  const groups = [
    { label: 'Mathématiques', data: maths },
    { label: 'Physique-chimie', data: physiqueChimie },
    { label: '2I2D / STI2D', data: sti2d },
  ];

  return groups.map((group) => {
    const totalChecklist = group.data.reduce((sum, notion) => sum + notion.checklist.length, 0);
    const completedChecklist = group.data.reduce(
      (sum, notion) =>
        sum + notion.checklist.filter((_, index) => state.checklist[`${notion.id}-${index}`]).length,
      0,
    );

    const totalSessions = allSessionsFlat().filter((session) => session.subject === group.label).length;
    const completedSessions = allSessionsFlat().filter(
      (session) => session.subject === group.label && state.sessions[session.id],
    ).length;

    const total = totalChecklist + totalSessions;
    const done = completedChecklist + completedSessions;

    return {
      label: group.label,
      total,
      done,
      percent: total ? Math.round((done / total) * 100) : 0,
    };
  });
}

function overallProgress() {
  const total = countAllSessions() + countAllChecklistItems() + tests.length;
  const done = countCompletedSessions() + countCompletedChecklistItems() + countCompletedTests();
  return total ? Math.round((done / total) * 100) : 0;
}

function renderNav() {
  nav.innerHTML = navigation
    .map(
      (item) =>
        `<a class="nav-link ${location.hash.replace('#', '') === item.hash || (!location.hash && item.hash === 'accueil') ? 'active' : ''}" href="#${item.hash}">${item.label}</a>`,
    )
    .join('');
}

function progressBar(value) {
  return `
    <div class="progress">
      <div class="progress-fill" style="width:${value}%"></div>
    </div>
    <div class="progress-label">${value}%</div>
  `;
}

function badge(text, tone = 'neutral') {
  return `<span class="badge badge-${tone}">${text}</span>`;
}

function courseSubjectLabel(subject) {
  const labels = {
    sti2d: 'STI2D',
    pc: 'Physique-chimie',
    maths: 'Maths',
    resources: 'Ressources',
  };

  return labels[subject] ?? 'Cours';
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function inlineMarkdown(text) {
  const escaped = escapeHtml(text);
  return escaped
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="link-plain" href="$2" target="_blank" rel="noreferrer noopener">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\$(.+?)\$/g, (_, formula) => renderInlineMath(formula));
}

function renderInlineMath(formula) {
  try {
    return katex.renderToString(formula, {
      throwOnError: false,
      strict: 'ignore',
      output: 'html',
    });
  } catch {
    return `<code>${escapeHtml(`$${formula}$`)}</code>`;
  }
}

function renderBlockMath(formula) {
  try {
    return katex.renderToString(formula, {
      displayMode: true,
      throwOnError: false,
      strict: 'ignore',
      output: 'html',
    });
  } catch {
    return `<pre class="diagram">${escapeHtml(`$$${formula}$$`)}</pre>`;
  }
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let paragraph = [];
  let listType = null;
  let mathBlock = [];
  let inMathBlock = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushMathBlock = () => {
    if (!mathBlock.length) return;
    html.push(renderBlockMath(mathBlock.join(' ')));
    mathBlock = [];
  };

  const closeList = () => {
    if (!listType) return;
    html.push(listType === 'ul' ? '</ul>' : '</ol>');
    listType = null;
  };

  for (const line of lines) {
    const trimmed = line.trimEnd();
    const raw = trimmed.trim();

    if (!raw) {
      if (inMathBlock) {
        mathBlock.push('');
        continue;
      }
      flushParagraph();
      closeList();
      continue;
    }

    if (raw === '$$') {
      if (inMathBlock) {
        flushMathBlock();
        inMathBlock = false;
      } else {
        flushParagraph();
        closeList();
        inMathBlock = true;
      }
      continue;
    }

    if (inMathBlock) {
      if (raw.endsWith('$$')) {
        const content = raw.replace(/\$\$$/, '').trim();
        if (content) mathBlock.push(content);
        flushMathBlock();
        inMathBlock = false;
      } else {
        mathBlock.push(raw);
      }
      continue;
    }

    const singleLineMath = raw.match(/^\$\$(.*)\$\$$/);
    if (singleLineMath) {
      flushParagraph();
      closeList();
      html.push(renderBlockMath(singleLineMath[1].trim()));
      continue;
    }

    const heading = raw.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length + 1;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = raw.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      flushParagraph();
      if (listType !== 'ul') {
        closeList();
        listType = 'ul';
        html.push('<ul>');
      }
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    const ordered = raw.match(/^\d+\.\s+(.*)$/);
    if (ordered) {
      flushParagraph();
      if (listType !== 'ol') {
        closeList();
        listType = 'ol';
        html.push('<ol>');
      }
      html.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      continue;
    }

    if (raw.startsWith('> ')) {
      flushParagraph();
      closeList();
      html.push(`<blockquote>${inlineMarkdown(raw.slice(2))}</blockquote>`);
      continue;
    }

    paragraph.push(raw);
  }

  flushParagraph();
  closeList();
  return html.join('\n');
}

async function fetchMarkdown(path) {
  const content = markdownByPath.get(path);
  if (typeof content !== 'string') {
    throw new Error(`Impossible de charger ${path}`);
  }
  return content;
}

function getCourseSubject(subjectId) {
  return courseCatalog.find((item) => item.id === subjectId) ?? courseCatalog[0];
}

function getCourseChapter(subjectId, chapterId) {
  const subject = getCourseSubject(subjectId);
  return subject?.chapters.find((chapter) => chapter.id === chapterId) ?? subject?.chapters[0];
}

function getFiche(subjectId) {
  return ficheSummaries.find((item) => item.subject === subjectId) ?? ficheSummaries[0];
}

function renderFiches() {
  const activeFicheId = state.ficheSubject ?? ficheSummaries[0]?.subject ?? 'mathematiques';
  const activeFiche = getFiche(activeFicheId);
  const ficheButtons = ficheSummaries.map((subject) => {
    const active = subject.subject === activeFiche.subject ? 'active' : '';
    return `
      <button type="button" class="fiche-select ${active}" data-fiche-subject="${subject.subject}">
        <div class="fiche-select-top">
          <strong>${subject.label}</strong>
          <span class="badge badge-neutral">${subject.essentials.length} points</span>
        </div>
        <p>${subject.summary}</p>
        <div class="eyebrow">
          ${subject.keywords.map((keyword) => badge(keyword, 'neutral')).join('')}
        </div>
      </button>
    `;
  }).join('');

  const activeCourse = courseCatalog.find((item) => item.id === activeFiche.courseSubject);
  const activeChapter = activeCourse?.chapters.find((chapter) => chapter.id === activeFiche.courseChapter) ?? activeCourse?.chapters[0];

  return `
    <section class="page-head">
      <h2>Fiches</h2>
      <p>Les fiches sont des super-résumés. Elles gardent uniquement ce qu’il faut savoir par cœur. Pour les explications complètes, passe par la section Cours.</p>
      <div class="filter-bar" role="tablist" aria-label="Choisir une fiche">
        ${ficheSummaries.map((subject) => {
          const active = subject.subject === activeFiche.subject ? 'active' : '';
          return `<button type="button" class="filter-chip ${active}" data-fiche-subject="${subject.subject}">${subject.label} <span>${subject.essentials.length}</span></button>`;
        }).join('')}
      </div>
    </section>

    <section class="fiches-layout">
      <aside class="card fiche-sidebar">
        <div class="card-head">
          <h3>Choix rapide</h3>
          <span class="badge badge-accent">${ficheSummaries.length} matières</span>
        </div>
        <div class="fiche-select-list">
          ${ficheButtons}
        </div>
      </aside>

      <article class="card fiche-detail">
        <div class="card-head">
          <div>
            <h3>${activeFiche.label}</h3>
            <p class="muted">Version ultra-condensée pour réviser vite, avec l’essentiel à connaître.</p>
          </div>
          <span class="badge badge-accent">Essentiel</span>
        </div>
        <div class="stack">
          <p class="fiche-summary">${activeFiche.summary}</p>
          <div>
            <strong>À retenir absolument</strong>
            <ul class="bullet-list fiche-bullets">
              ${activeFiche.essentials.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="grid fiche-grid">
            <section class="mini-week fiche-box">
              <strong>Définitions clés</strong>
              <ul class="bullet-list">
                ${activeFiche.definitions.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </section>
            <section class="mini-week fiche-box">
              <strong>Formules à connaître</strong>
              <ul class="bullet-list">
                ${activeFiche.formulas.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </section>
          </div>
          <div>
            <strong>Méthode type</strong>
            <ol class="ordered-list">
              ${activeFiche.method.map((item) => `<li>${item}</li>`).join('')}
            </ol>
          </div>
          <section class="mini-week fiche-box fiche-focus">
            <strong>Ce qu’on attend au bac</strong>
            <p>${activeFiche.bacFocus}</p>
          </section>
          <div class="grid fiche-grid">
            <section class="mini-week fiche-box">
              <strong>Exemple simple</strong>
              <p>${activeFiche.example}</p>
            </section>
            <section class="mini-week fiche-box">
              <strong>Erreurs fréquentes</strong>
              <ul class="bullet-list">
                ${activeFiche.mistakes.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </section>
          </div>
          <div>
            <strong>Mots-clés</strong>
            <div class="eyebrow">
              ${activeFiche.keywords.map((keyword) => badge(keyword, 'neutral')).join('')}
            </div>
          </div>
          <div class="fiche-actions">
            <button
              type="button"
              class="button button-secondary"
              data-course-subject="${activeFiche.courseSubject}"
              data-course-chapter="${activeFiche.courseChapter}"
            >
              Ouvrir le cours complet${activeChapter ? `: ${activeChapter.title}` : ''}
            </button>
            <span class="muted">La fiche ne garde que l’essentiel. Le cours donne les explications complètes.</span>
          </div>
        </div>
      </article>
    </section>
  `;
}

function shellCard(title, body, extra = '') {
  return `
    <section class="card">
      <div class="card-head">
        <h2>${title}</h2>
        ${extra}
      </div>
      <div class="card-body">${body}</div>
    </section>
  `;
}

function preparePrint(targetId = null) {
  if (!targetId) {
    window.print();
    return;
  }

  const source = document.querySelector(`[data-print-id="${targetId}"]`);
  if (!source) {
    window.print();
    return;
  }

  const popup = window.open('', '_blank', 'width=900,height=1200');
  if (!popup) {
    window.print();
    return;
  }

  const title = source.querySelector('h3')?.textContent ?? 'Fiche de révision';
  const content = source.outerHTML;
  popup.document.open();
  popup.document.write(`<!doctype html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          :root { color-scheme: light; }
          body {
            margin: 0;
            padding: 24px;
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            color: #1f2b2c;
            background: #fff;
          }
          h1 {
            margin: 0 0 18px;
            font-size: 26px;
          }
          .print-note {
            margin: 0 0 18px;
            color: #5c6667;
          }
          .card {
            border: 1px solid #d9d9d9;
            border-radius: 18px;
            padding: 20px;
          }
          .card-head {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: center;
            margin-bottom: 14px;
          }
          .card-head-actions,
          .button,
          .site-header,
          .site-footer,
          input,
          .page-head-actions {
            display: none !important;
          }
          .checkline {
            display: flex;
            gap: 8px;
            align-items: flex-start;
          }
          .stack {
            display: grid;
            gap: 12px;
          }
          .bullet-list {
            margin: 0;
            padding-left: 20px;
          }
          .diagram {
            padding: 12px;
            border-radius: 12px;
            background: #f3f6f6;
            white-space: pre-wrap;
          }
          p { line-height: 1.5; }
          @media print {
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p class="print-note">Fiche de révision imprimable - BAC STI2D SIN</p>
        ${content}
      </body>
    </html>`);
  popup.document.close();
  popup.focus();
  popup.print();
}

function renderHome() {
  const progress = overallProgress();
  const subjects = subjectStats();
  const todayTasks = upcomingSessions(4);

  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">${badge('Terminale STI2D SIN', 'accent')} ${badge('Bac le 15 juin 2026', 'warning')}</div>
        <h2>Un site simple pour réviser sans te perdre.</h2>
        <p>
          Tout est organisé pour travailler les maths, la physique-chimie et la STI2D en priorité,
          puis préparer le Grand Oral du 30 juin 2026 avec des fiches claires et un suivi local.
        </p>
      </div>
      <div class="hero-panel">
        <div class="date-card">
          <span class="date-label">Bac</span>
          <strong>${formatDate(examDates.bac)}</strong>
        </div>
        <div class="date-card">
          <span class="date-label">Grand Oral</span>
          <strong>${formatDate(examDates.grandOral)}</strong>
        </div>
        <div class="hero-message">
          <p>Tu n’as pas besoin de tout savoir. Tu dois surtout sécuriser les points simples et gagner en régularité.</p>
        </div>
      </div>
    </section>

    ${shellCard('Accès rapide', `
      <div class="stack">
        <p>Retrouve les fiches de cours essentielles avec définitions, formules et méthode de rédaction.</p>
        <div>
          <a class="button button-secondary" href="#cours">Ouvrir la section Cours</a>
        </div>
      </div>
    `)}

    <section class="grid two-up">
      ${shellCard('Progression globale', `
        ${progressBar(progress)}
        <p class="muted">Suivi local basé sur les séances cochées, les checklists et les mini-tests.</p>
      `)}
      ${shellCard('Répartition par matière', `
        <div class="stack">
          ${subjects.map((subject) => `
            <div class="subject-line">
              <div>
                <strong>${subject.label}</strong>
                <div class="muted">${subject.done}/${subject.total} éléments</div>
              </div>
              <div class="subject-percent">${subject.percent}%</div>
            </div>
            ${progressBar(subject.percent)}
          `).join('')}
        </div>
      `)}
    </section>

    <section class="grid two-up">
      ${shellCard('Tâches à faire', `
        <div class="stack">
          ${todayTasks.length ? todayTasks.map((task) => `
            <article class="task-card">
              <div class="task-top">
                <strong>${task.day} - ${formatShortDate(task.date)}</strong>
                ${badge(task.subject, task.subject === 'Rattrapage' ? 'warning' : 'accent')}
              </div>
              <p>${task.objective}</p>
              <div class="muted">${task.duration} - ${task.notion}</div>
            </article>
          `).join('') : '<p>Tout est coché. Reviens sur les fiches les plus fragiles ou fais un mini-test.</p>'}
        </div>
      `)}
      ${shellCard('Message du jour', `
        <p class="quote">Travaille petit mais tous les jours. Une séance simple, bien faite, vaut mieux qu’une grande séance mal tenue.</p>
        <ul class="bullet-list">
          <li>Commence par les matières difficiles.</li>
          <li>Corrige immédiatement tes erreurs.</li>
          <li>Garde une demi-journée légère chaque semaine.</li>
        </ul>
      `)}
    </section>

    ${shellCard('Ce qu’il reste à faire', `
      <div class="stack">
        ${planning.map((week) => `
          <div class="mini-week">
            <strong>${week.label}</strong>
            <div class="muted">${week.focus}</div>
          </div>
        `).join('')}
      </div>
    `)}
  `;
}

function renderPlanning() {
  return `
    <section class="page-head">
      <h2>Planning de révision jusqu’au 15 juin</h2>
      <p>Les séances sont courtes en semaine, plus longues le week-end, avec une séance légère et du rattrapage prévu.</p>
    </section>
    <div class="stack">
      ${planning.map((week) => {
        const done = week.sessions.filter((session) => state.sessions[session.id]).length;
        const percent = Math.round((done / week.sessions.length) * 100);
        return `
          <details class="week-card" open>
            <summary>
              <div>
                <strong>${week.label}</strong>
                <div class="muted">${week.focus}</div>
              </div>
              <div class="week-meta">
                <span>${done}/${week.sessions.length}</span>
                <span>${percent}%</span>
              </div>
            </summary>
            <div class="week-progress">${progressBar(percent)}</div>
            <div class="session-grid">
              ${week.sessions.map((session) => `
                <article class="session-card ${state.sessions[session.id] ? 'done' : ''}">
                  <div class="task-top">
                    <div>
                      <h3>${session.day}</h3>
                      <div class="muted">${formatShortDate(session.date)} - ${session.duration}</div>
                    </div>
                    <label class="checkline">
                      <input type="checkbox" data-session-id="${session.id}" ${state.sessions[session.id] ? 'checked' : ''} />
                      <span>Fait</span>
                    </label>
                  </div>
                  <div class="stack">
                    <div>${badge(session.subject, session.subject === 'Rattrapage' ? 'warning' : 'accent')}</div>
                    <p><strong>Objectif :</strong> ${session.objective}</p>
                    <p><strong>Notion :</strong> ${session.notion}</p>
                    <p><strong>Tâche :</strong> ${session.task}</p>
                    <p><strong>Résultat attendu :</strong> ${session.expected}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </details>
        `;
      }).join('')}
    </div>
  `;
}

async function renderCours() {
  const activeSubjectId = state.courseSubject ?? courseCatalog[0]?.id ?? 'mathematiques';
  const activeSubject = getCourseSubject(activeSubjectId);
  const activeChapter = getCourseChapter(activeSubject.id, state.courseChapter ?? activeSubject.chapters[0]?.id);
  const chapterList = activeSubject.chapters;
  const filterOptions = courseCatalog.map((item) => ({
    id: item.id,
    label: item.label,
    count: item.chapters.length,
  }));

  let markdown = '';
  let errorMarkup = '';

  try {
    markdown = await fetchMarkdown(activeChapter.path);
  } catch (error) {
    errorMarkup = `<p class="muted">Impossible de charger le cours pour le moment.</p>`;
  }

  const introText = `
    <div class="stack">
      <p>Les cours sont les versions complètes: explications, définitions, méthodes, exemples et liens utiles. Choisis une matière, puis un chapitre, pour lire la leçon entière sans quitter la page.</p>
      <div class="filter-bar" role="tablist" aria-label="Choisir la matière">
        ${filterOptions.map((option) => {
          const active = activeSubject.id === option.id ? 'active' : '';
          return `<button type="button" class="filter-chip ${active}" data-course-subject="${option.id}">${option.label} <span>${option.count}</span></button>`;
        }).join('')}
      </div>
    </div>
  `;

  const chapterNav = chapterList.map((chapter) => {
    const active = chapter.id === activeChapter.id ? 'active' : '';
    return `<button type="button" class="course-chapter-btn ${active}" data-course-chapter="${chapter.id}">${chapter.title}</button>`;
  }).join('');

  return `
    <section class="page-head">
      <h2>Cours</h2>
      ${introText}
    </section>

    <section class="course-layout">
      <aside class="course-sidebar card">
        <div class="card-head">
          <h3>${activeSubject.label}</h3>
          <span class="badge badge-accent">${chapterList.length} chapitres</span>
        </div>
        <p class="muted">${activeSubject.intro}</p>
        <div class="course-chapter-list">
          ${chapterNav}
        </div>
      </aside>

      <article class="course-content card printable-card" data-print-id="${activeChapter.id}">
        <div class="card-head">
          <div>
            <h3>${activeChapter.title}</h3>
            <p class="muted">${activeSubject.label}</p>
          </div>
          <button type="button" class="button button-secondary button-small" data-print-fiche="${activeChapter.id}">
            Imprimer
          </button>
        </div>
        <div class="course-markdown">
          ${errorMarkup || markdownToHtml(markdown)}
        </div>
      </article>
    </section>
  `;
}

function renderAnnexe() {
  return `
    <section class="page-head">
      <h2>Annexe</h2>
      <p>Références officielles utilisées pour structurer les cours et vérifier le contenu au regard du programme de terminale STI2D.</p>
    </section>

    ${shellCard('Correspondance cours / programme', `
      <div class="stack">
        ${courseCoverage.map((section) => `
          <article class="mini-week">
            <strong>${section.title}</strong>
            <ul class="bullet-list">
              ${section.items.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    `)}

    ${shellCard('Références officielles', `
      <div class="stack">
        ${officialReferences.map((reference) => `
          <article class="mini-week">
            <div class="eyebrow">
              <strong>${reference.title}</strong>
              <span class="badge badge-neutral">Officiel</span>
            </div>
            <p>${reference.summary}</p>
            <p class="muted">${reference.usage}</p>
            <a class="link-plain" href="${reference.url}" target="_blank" rel="noreferrer noopener">${reference.url}</a>
          </article>
        `).join('')}
      </div>
    `)}
  `;
}

function renderNotionCollection(title, intro, items, subjectPrefix) {
  const introMarkup = typeof intro === 'string' && intro.includes('<')
    ? intro
    : `<p>${intro}</p>`;

  return `
    <section class="page-head">
      <div class="page-head-actions">
        <div>
          <h2>${title}</h2>
          ${introMarkup}
        </div>
        <button type="button" class="button button-secondary" data-print-all="${subjectPrefix}">
          Imprimer toutes les fiches
        </button>
      </div>
    </section>
    <div class="stack">
      ${items.map((item) => `
        <article class="card printable-card" data-print-id="${item.id}">
          <div class="card-head">
            <h3>${item.title}</h3>
            <div class="card-head-actions">
              ${badge(item.subject ? courseSubjectLabel(item.subject) : subjectPrefix, 'accent')}
              <button type="button" class="button button-secondary button-small" data-print-fiche="${item.id}">
                Imprimer
              </button>
            </div>
          </div>
          <div class="card-body stack">
            <p>${item.summary}</p>
            <p><strong>Exemple corrigé :</strong> ${item.example}</p>
            <p><strong>Exercice :</strong> ${item.exercise}</p>
            ${item.formula ? `<p><strong>Formule essentielle :</strong> ${item.formula}</p>` : ''}
            ${item.diagram ? `
              <div>
                <strong>Schéma simple</strong>
                <pre class="diagram">${item.diagram.join('\n')}</pre>
              </div>
            ` : ''}
            <div>
              <strong>Erreurs fréquentes</strong>
              <ul class="bullet-list">
                ${(item.errors ?? []).map((error) => `<li>${error}</li>`).join('')}
              </ul>
            </div>
            <div>
              <strong>Checklist de maîtrise</strong>
              <div class="checklist">
                ${item.checklist.map((check, index) => {
                  const id = `${item.id}-${index}`;
                  return `
                    <label class="checkline">
                      <input type="checkbox" data-checklist-id="${id}" ${state.checklist[id] ? 'checked' : ''} />
                      <span>${check}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderMaths() {
  return renderNotionCollection(
    'Mathématiques',
    'Les notions prioritaires sont sélectionnées pour sécuriser les points rentables au bac.',
    maths,
    'Maths',
  );
}

function renderPhysics() {
  return renderNotionCollection(
    'Physique-chimie',
    'Objectif: revoir les notions de base utiles dans les exercices techniques et les sujets de bac.',
    physiqueChimie,
    'PC',
  );
}

function renderSti2d() {
  return renderNotionCollection(
    '2I2D / STI2D',
    'Les fiches sont centrées sur la spécialité SIN, les systèmes embarqués et l’analyse de projets techniques.',
    sti2d,
    'STI2D',
  );
}

function renderBacPractice() {
  return `
    <section class="page-head">
      <h2>Sujets type bac corrigés</h2>
      <p>Entraîne-toi sur des situations courtes qui ressemblent aux questions rapportant des points en scientifiques.</p>
    </section>
    <div class="stack">
      ${bacPractice.map((item) => `
        <article class="card">
          <div class="card-head">
            <h3>${item.title}</h3>
            ${badge(item.subject, 'accent')}
          </div>
          <div class="card-body stack">
            <p><strong>Contexte :</strong> ${item.context}</p>
            <div>
              <strong>Questions type bac</strong>
              <ol class="ordered-list">
                ${item.questions.map((question) => `<li>${question}</li>`).join('')}
              </ol>
            </div>
            <div>
              <strong>Correction guidée</strong>
              <ol class="ordered-list">
                ${item.correction.map((step) => `<li>${step}</li>`).join('')}
              </ol>
            </div>
            <div>
              <strong>Erreurs fréquentes sur ce type de sujet</strong>
              <ul class="bullet-list">
                ${item.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join('')}
              </ul>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderPriorities() {
  const dailyTotal = priorityChecklist.reduce((sum, day) => sum + day.tasks.length, 0);
  const dailyDone = priorityChecklist.reduce(
    (sum, day, index) =>
      sum + day.tasks.filter((_, taskIndex) => state.checklist[`priority-${index}-${taskIndex}`]).length,
    0,
  );
  const dailyPercent = dailyTotal ? Math.round((dailyDone / dailyTotal) * 100) : 0;

  return `
    <section class="page-head">
      <h2>Fiches ultra-prioritaires</h2>
      <p>Si tu manques de temps, commence ici. Ce sont les thèmes les plus rentables pour remonter la note en scientifique.</p>
    </section>
    <div class="stack">
      <article class="card">
        <div class="card-head">
          <h3>Checklist quotidienne du matin</h3>
          ${badge('30 min par matin', 'warning')}
        </div>
        <div class="card-body">
          <div class="stack">
            ${progressBar(dailyPercent)}
            <p class="muted">${dailyDone}/${dailyTotal} tâches du matin cochées.</p>
          </div>
          <div class="daily-checklist">
            ${priorityChecklist.map((day, dayIndex) => `
              <details class="daily-card" open>
                <summary>
                  <div>
                    <strong>${day.day}</strong>
                    <div class="muted">${day.subject} - ${day.title}</div>
                  </div>
                </summary>
                <div class="stack">
                  ${day.tasks.map((task, taskIndex) => {
                    const id = `priority-${dayIndex}-${taskIndex}`;
                    return `
                      <label class="checkline">
                        <input type="checkbox" data-checklist-id="${id}" ${state.checklist[id] ? 'checked' : ''} />
                        <span>${task}</span>
                      </label>
                    `;
                  }).join('')}
                </div>
              </details>
            `).join('')}
          </div>
        </div>
      </article>

      <div class="grid two-up">
        ${priorityCards.map((card) => `
          <article class="card">
            <div class="card-head">
              <h3>${card.subject}</h3>
              ${badge(card.title, 'warning')}
            </div>
            <div class="card-body stack">
              <div>
                <strong>À savoir absolument</strong>
                <ul class="bullet-list">
                  ${card.items.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </div>
              <div>
                <strong>Comment réviser</strong>
                <ul class="bullet-list">
                  ${card.method.map((step) => `<li>${step}</li>`).join('')}
                </ul>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExpressRevision() {
  return `
    <section class="page-head">
      <h2>Révision express 30 minutes</h2>
      <p>Quand tu n’as pas beaucoup de temps, utilise cette version courte: un rappel, un exercice, puis une correction active.</p>
    </section>
    <div class="stack">
      ${quickRevision.map((plan) => `
        <article class="card">
          <div class="card-head">
            <h3>${plan.title}</h3>
            ${badge(plan.subject, 'accent')}
          </div>
          <div class="card-body stack">
            <ol class="ordered-list">
              ${plan.blocks.map((block) => `<li>${block}</li>`).join('')}
            </ol>
            <p class="muted">Objectif: rester concentré, finir le bloc et noter une seule erreur à ne pas refaire.</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderErrors() {
  return `
    <section class="page-head">
      <h2>Erreurs fréquentes par matière</h2>
      <p>Cette page sert à éviter les points bêtement perdus. Lis-la avant un entraînement ou après une copie ratée.</p>
    </section>
    <div class="stack">
      ${frequentErrors.map((subject) => `
        <article class="card">
          <div class="card-head">
            <h3>${subject.subject}</h3>
            ${badge('À corriger', 'danger')}
          </div>
          <div class="card-body stack">
            ${subject.errors.map((error) => `
              <div class="correction-item">
                <p><strong>${error.title}</strong></p>
                <p class="muted">${error.fix}</p>
              </div>
            `).join('')}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderOralTopic(topic) {
  return `
    <article class="card oral-card">
      <div class="card-head">
        <h3>${topic.title}</h3>
        ${badge('Grand Oral', 'warning')}
      </div>
      <div class="card-body stack">
        <p><strong>Problématique :</strong> ${topic.problem}</p>
        <p><strong>Introduction :</strong> ${topic.intro}</p>
        <div>
          <strong>Plan</strong>
          <ol class="ordered-list">
            ${topic.plan.map((part) => `<li>${part}</li>`).join('')}
          </ol>
        </div>
        <div class="grid two-up">
          <div>
            <strong>Notions STI2D / SIN</strong>
            <ul class="bullet-list">
              ${topic.sti2d.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div>
            <strong>Notions scientifiques</strong>
            <ul class="bullet-list">
              ${topic.sciences.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div>
          <strong>Lien avec le réel</strong>
          <ul class="bullet-list">
            ${topic.impacts.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <p><strong>Conclusion :</strong> ${topic.conclusion}</p>
        <p><strong>Ouverture :</strong> ${topic.opening}</p>
        <div class="grid two-up">
          <div>
            <strong>Version 2 minutes</strong>
            <p>${topic.twoMinutes}</p>
          </div>
          <div>
            <strong>Version 5 minutes</strong>
            <p>${topic.fiveMinutes}</p>
          </div>
        </div>
        <div>
          <strong>Fiche mémo</strong>
          <ul class="bullet-list">
            ${topic.memo.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div>
          <strong>Questions possibles du jury</strong>
          <div class="stack">
            ${topic.jury.map((q) => `
              <div class="qna">
                <p><strong>Question :</strong> ${q.q}</p>
                <p class="muted"><strong>Réponse possible :</strong> ${q.a}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderGrandOral() {
  return `
    <section class="page-head">
      <h2>Préparation Grand Oral - 30 juin 2026</h2>
      <p>Deux sujets sont structurés avec problématique, plan, version courte, version longue et entraînement jour par jour du 16 au 30 juin.</p>
    </section>
    <div class="stack">
      ${grandOral.map(renderOralTopic).join('')}
      ${shellCard('Programme d’entraînement oral', `
        <div class="training-list">
          ${oralTraining.map((step) => `
            <div class="training-item">
              <strong>${formatShortDate(step.date)}</strong>
              <span>${step.goal}</span>
            </div>
          `).join('')}
        </div>
      `)}
    </div>
  `;
}

function testScoreAdvice(score) {
  if (score >= 80) {
    return {
      tone: 'success',
      text: 'Très bon score. Continue avec des révisions courtes et un entraînement oral régulier.',
    };
  }
  if (score >= 60) {
    return {
      tone: 'warning',
      text: 'Score correct mais fragile. Revois les erreurs et refais les questions ratées sans regarder la correction.',
    };
  }
  return {
    tone: 'danger',
    text: 'Il faut revenir aux bases. Reprends la fiche, puis refais les questions une par une avec calme.',
  };
}

function renderTestResult(test, result) {
  if (!result) {
    return `<p class="muted">Aucune tentative enregistrée pour le moment.</p>`;
  }

  const advice = testScoreAdvice(result.score);
  return `
    <div class="result-box result-${advice.tone}">
      <strong>Score : ${result.score}%</strong>
      <p>${advice.text}</p>
    </div>
    <div class="stack">
      ${test.questions.map((question, index) => {
        const userAnswer = result.answers[index];
        const correct = question.answer;
        const isRight = userAnswer === correct;
        return `
          <div class="correction-item ${isRight ? 'right' : 'wrong'}">
            <p><strong>${question.prompt}</strong></p>
            <p>Ta réponse : ${question.choices[userAnswer] ?? 'non répondue'}</p>
            <p>Bonne réponse : ${question.choices[correct]}</p>
            <p class="muted">${question.correction}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderTests() {
  return `
    <section class="page-head">
      <h2>Mini-tests hebdomadaires</h2>
      <p>Chaque test est simple, interactif et corrigé immédiatement. Le résultat est stocké localement.</p>
    </section>
    <div class="stack">
      ${tests.map((test) => {
        const result = state.tests[test.id];
        const advice = result ? testScoreAdvice(result.score) : null;
        return `
          <article class="card">
            <div class="card-head">
              <h3>${test.title}</h3>
              ${badge(test.focus, 'accent')}
            </div>
            <div class="card-body stack">
              <p>${test.focus}</p>
              <form class="test-form" data-test-form data-test-id="${test.id}">
                <div class="stack">
                  ${test.questions.map((question, index) => `
                    <fieldset class="question-box">
                      <legend>${index + 1}. ${question.prompt}</legend>
                      <div class="options">
                        ${question.choices.map((choice, choiceIndex) => `
                          <label class="option">
                            <input type="radio" name="${test.id}-${index}" value="${choiceIndex}" ${result ? (result.answers[index] === choiceIndex ? 'checked' : '') : ''} />
                            <span>${choice}</span>
                          </label>
                        `).join('')}
                      </div>
                    </fieldset>
                  `).join('')}
                </div>
                <div class="form-actions">
                  <button type="submit" class="button">Corriger le test</button>
                </div>
              </form>
              ${result ? `
                <div class="result-meta">
                  <div class="result-box result-${advice.tone}">
                    <strong>Dernier score: ${result.score}%</strong>
                    <p>${advice.text}</p>
                  </div>
                  ${renderTestResult(test, result)}
                </div>
              ` : ''}
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function renderSuivi() {
  const progress = overallProgress();
  const subjects = subjectStats();
  const testsSummary = tests.map((test) => ({
    title: test.title,
    result: state.tests[test.id],
  }));
  const weakPoints = subjects
    .filter((subject) => subject.percent < 70)
    .map((subject) => subject.label);

  return `
    <section class="page-head">
      <h2>Tableau de bord</h2>
      <p>Le suivi reste local au navigateur. Tu peux cocher, tester, revenir en arrière et réinitialiser si nécessaire.</p>
    </section>
    <div class="grid two-up">
      ${shellCard('Progression globale', `
        ${progressBar(progress)}
        <p class="muted">${countCompletedSessions()} séances terminées, ${countCompletedChecklistItems()} items de checklist cochés et ${countCompletedTests()} mini-tests tentés.</p>
      `)}
      ${shellCard('Répartition des progrès', `
        <div class="stack">
          ${subjects.map((subject) => `
            <div class="subject-line">
              <div>
                <strong>${subject.label}</strong>
                <div class="muted">${subject.done}/${subject.total}</div>
              </div>
              <div class="subject-percent">${subject.percent}%</div>
            </div>
            ${progressBar(subject.percent)}
          `).join('')}
        </div>
      `)}
    </div>

    <div class="grid two-up">
      ${shellCard('Mini-tests réalisés', `
        <div class="stack">
          ${testsSummary.map((test) => {
            if (!test.result) {
              return `<div class="mini-week"><strong>${test.title}</strong><div class="muted">Pas encore tenté</div></div>`;
            }
            return `<div class="mini-week"><strong>${test.title}</strong><div class="muted">Score: ${test.result.score}% - ${new Date(test.result.date).toLocaleDateString('fr-FR')}</div></div>`;
          }).join('')}
        </div>
      `)}
      ${shellCard('Points faibles à retravailler', `
        ${weakPoints.length ? `
          <ul class="bullet-list">
            ${weakPoints.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        ` : '<p>Rien d’inquiétant pour le moment. Continue à consolider régulièrement.</p>'}
        <button type="button" class="button button-secondary" data-reset-state>Réinitialiser les données</button>
      `)}
    </div>
  `;
}

function renderMethod() {
  return `
    <section class="page-head">
      <h2>Méthode de révision</h2>
      <p>Des conseils courts, concrets et adaptés à un élève qui a besoin de structure et de confiance.</p>
    </section>
    <div class="stack">
      ${methodAdvice.map((advice) => `
        <article class="card">
          <div class="card-head">
            <h3>${advice.title}</h3>
          </div>
          <div class="card-body">
            <p>${advice.body}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function currentRoute() {
  const hash = location.hash.replace('#', '');
  return hash || 'accueil';
}

async function render() {
  const seq = ++renderSeq;
  renderNav();
  const route = currentRoute();
  const views = {
    accueil: renderHome,
    planning: renderPlanning,
    cours: renderCours,
    fiches: renderFiches,
    annexe: renderAnnexe,
    maths: renderMaths,
    physique: renderPhysics,
    sti2d: renderSti2d,
    'sujets-bac': renderBacPractice,
    priorites: renderPriorities,
    'revision-express': renderExpressRevision,
    erreurs: renderErrors,
    'grand-oral': renderGrandOral,
    tests: renderTests,
    suivi: renderSuivi,
    methode: renderMethod,
  };

  if (route === 'cours') {
    app.innerHTML = `
      <section class="page-head">
        <h2>Cours</h2>
        <p>Chargement du corpus de cours...</p>
      </section>
    `;
    const html = await renderCours();
    if (seq !== renderSeq || currentRoute() !== route) return;
    app.innerHTML = html;
    return;
  }

  app.innerHTML = (views[route] ?? renderHome)();
}

app.addEventListener('change', (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement && target.matches('[data-session-id]')) {
    setSessionDone(target.dataset.sessionId, target.checked);
    render();
  }

  if (target instanceof HTMLInputElement && target.matches('[data-checklist-id]')) {
    setChecklistDone(target.dataset.checklistId, target.checked);
    render();
  }
});

app.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.matches('[data-test-form]')) {
    return;
  }

  event.preventDefault();
  const testId = form.dataset.testId;
  const test = tests.find((item) => item.id === testId);
  if (!test) return;

  const answers = test.questions.map((_, index) => {
    const value = new FormData(form).get(`${test.id}-${index}`);
    return value === null ? -1 : Number(value);
  });

  const score = Math.round(
    (answers.filter((answer, index) => answer === test.questions[index].answer).length / test.questions.length) * 100,
  );

  setTestResult(testId, {
    score,
    answers,
    date: new Date().toISOString(),
  });

  render();
});

app.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.matches('[data-print-fiche]')) {
    preparePrint(target.dataset.printFiche);
    return;
  }

  if (target.matches('[data-print-all]')) {
    preparePrint();
    return;
  }

  if (target.matches('[data-reset-state]')) {
    resetState();
    return;
  }

  const courseLink = target.closest('[data-course-subject][data-course-chapter]');
  if (courseLink instanceof HTMLElement) {
    setCourseSubject(courseLink.dataset.courseSubject ?? courseCatalog[0]?.id ?? 'mathematiques');
    setCourseChapter(courseLink.dataset.courseChapter ?? state.courseChapter);
    if (location.hash !== '#cours') {
      location.hash = 'cours';
    } else {
      void render();
    }
    return;
  }

  const ficheButton = target.closest('[data-fiche-subject]');
  if (ficheButton instanceof HTMLElement) {
    setFicheSubject(ficheButton.dataset.ficheSubject ?? ficheSummaries[0]?.subject ?? 'mathematiques');
    void render();
    return;
  }

  const subjectButton = target.closest('[data-course-subject]');
  if (subjectButton instanceof HTMLElement) {
    setCourseSubject(subjectButton.dataset.courseSubject ?? courseCatalog[0]?.id ?? 'mathematiques');
    void render();
    return;
  }

  const chapterButton = target.closest('[data-course-chapter]');
  if (chapterButton instanceof HTMLElement) {
    setCourseChapter(chapterButton.dataset.courseChapter ?? state.courseChapter);
    void render();
    return;
  }

  const filterButton = target.closest('[data-course-filter]');
  if (filterButton instanceof HTMLElement) {
    setCourseFilter(filterButton.dataset.courseFilter ?? 'all');
    render();
  }
});

window.addEventListener('hashchange', render);

render();
