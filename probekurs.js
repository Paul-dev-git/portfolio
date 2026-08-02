const courses = {
    web: {
        name: 'Webentwicklung', icon: '</>', file: 'index.html', visual: ['HTML', 'CSS', 'JS'],
        intro: 'Webseiten bestehen aus Struktur, Gestaltung und Interaktion. HTML beschreibt Inhalte, CSS gestaltet sie und JavaScript reagiert auf Nutzereingaben.',
        challenges: [
            { title: 'Erstelle die HTML-Grundstruktur.', hint: 'Ordne die äußeren Elemente eines Dokuments von oben nach unten.', pieces: ['<!DOCTYPE html>', '<html>', '<body>', '</body>', '</html>'], solution: [0, 1, 2, 3, 4] },
            { title: 'Baue einen Hauptbereich mit Inhalt.', hint: 'In einem main-Element liegen Überschrift und Beschreibung.', pieces: ['<h1>Mein Portfolio</h1>', '<p>Willkommen auf meiner Seite.</p>', '<main>', '</main>'], solution: [2, 0, 1, 3] },
            { title: 'Gestalte einen Button mit CSS.', hint: 'Eine CSS-Regel beginnt mit dem Selektor und endet mit einer schließenden Klammer.', pieces: ['button {', 'background: royalblue;', 'color: white;', '}'], solution: [0, 1, 2, 3] },
            { title: 'Reagiere auf einen Button-Klick.', hint: 'Zuerst wird das Element gesucht, dann wird ein click-Event registriert.', pieces: ["const button = document.querySelector('button');", "button.addEventListener('click', () => {", "  alert('Hallo!');", '});'], solution: [0, 1, 2, 3] },
            { title: 'Mache ein Bild responsiv.', hint: 'Das Bild darf nicht breiter als sein Container werden.', pieces: ['img {', 'max-width: 100%;', 'height: auto;', '}'], solution: [0, 1, 2, 3] }
        ]
    },
    game: {
        name: 'Game Development', icon: '⌘', file: 'Player.cs', visual: ['Scene', 'C#', 'Play'],
        intro: 'In Unity baust du Szenen aus GameObjects. Mit C#-Skripten gibst du ihnen Verhalten – beim Start, in jedem Frame oder bei einer Kollision.',
        challenges: [
            { title: 'Erstelle ein Unity-Skript.', hint: 'Ein Skript nutzt UnityEngine und enthält eine Klasse mit geschweiften Klammern.', pieces: ['using UnityEngine;', 'public class Player : MonoBehaviour', '{', '}'], solution: [0, 1, 2, 3] },
            { title: 'Starte dein Spiel mit einer Nachricht.', hint: 'Start wird einmal ausgeführt, wenn das GameObject aktiviert wird.', pieces: ['void Start()', '{', '  Debug.Log("Spiel gestartet!");', '}'], solution: [0, 1, 2, 3] },
            { title: 'Bewege den Spieler nach rechts.', hint: 'Update läuft in jedem Frame. Time.deltaTime macht die Bewegung gleichmäßig.', pieces: ['void Update()', '{', '  transform.Translate(Vector3.right * Time.deltaTime);', '}'], solution: [0, 1, 2, 3] },
            { title: 'Lege eine Sprungkraft an.', hint: 'Mit SerializeField ist die Variable im Unity Inspector sichtbar.', pieces: ['[SerializeField]', 'private float jumpForce = 5f;'], solution: [0, 1] },
            { title: 'Prüfe eine Kollision.', hint: 'OnCollisionEnter erhält Informationen über das getroffene Objekt.', pieces: ['void OnCollisionEnter(Collision collision)', '{', '  Debug.Log("Treffer!");', '}'], solution: [0, 1, 2, 3] }
        ]
    },
    ios: {
        name: 'iOS App Development', icon: '', file: 'ContentView.swift', visual: ['SwiftUI', 'View', 'iPhone'],
        intro: 'SwiftUI baut Oberflächen aus kleinen Views. Ein State speichert Werte, und Buttons ändern diese Werte durch Aktionen.',
        challenges: [
            { title: 'Importiere das SwiftUI-Framework.', hint: 'SwiftUI stellt die Bausteine für moderne iPhone-Oberflächen bereit.', pieces: ['import SwiftUI'], solution: [0] },
            { title: 'Erstelle deine erste View.', hint: 'Eine SwiftUI-Ansicht ist eine Struktur, die das View-Protokoll erfüllt.', pieces: ['struct ContentView: View {', 'var body: some View {', '}', '}'], solution: [0, 1, 2, 3] },
            { title: 'Zeige einen Text in deiner App an.', hint: 'Text ist ein SwiftUI-Baustein innerhalb von body.', pieces: ['var body: some View {', '  Text("Hallo, iOS!")', '}'], solution: [0, 1, 2] },
            { title: 'Lege einen Zähler-Zustand an.', hint: 'Mit @State merkt sich deine View einen veränderbaren Wert.', pieces: ['@State private var count = 0'], solution: [0] },
            { title: 'Erhöhe den Zähler beim Tippen.', hint: 'Ein Button erhält einen Titel und eine Aktion in geschweiften Klammern.', pieces: ['Button("Plus") {', '  count += 1', '}'], solution: [0, 1, 2] }
        ]
    }
};

const course = courses[new URLSearchParams(location.search).get('kurs')] || courses.web;
const $ = (selector) => document.querySelector(selector);
const elements = {
    name: $('.trial-course-name'), icon: $('.trial-course-icon'), step: $('.trial-step-number'),
    question: $('.trial-question'), hint: $('.trial-hint'), file: $('.trial-file-name'), slots: $('.code-slots'),
    bank: $('.code-bank'), feedback: $('.trial-feedback'), progress: $('.trial-progress-bar'), score: $('.trial-score'),
    next: $('.trial-next'), reset: $('.trial-reset'), steps: $('.trial-steps'), explainer: $('.trial-explainer'),
    explainerText: $('.trial-explainer-text'), visual: $('.trial-concept-visual'), start: $('.trial-start'),
    builder: $('.code-builder'), actions: $('.trial-actions'), result: $('.trial-result'), resultCode: $('.trial-result code')
};

let challengeIndex = 0;
let score = 0;
let activeSlot = null;
let draggedPiece = null;
let completed = false;

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const syntaxClass = (text) => {
    if (/^<\/?|^<!/.test(text)) return 'syntax-tag';
    if (/^\}|^\{$/.test(text) || /\{$/.test(text)) return 'syntax-bracket';
    if (/^(import|using|public|private|void|const|struct|var|@State|\[)/.test(text.trim())) return 'syntax-keyword';
    if (/".*"|'.*'/.test(text)) return 'syntax-string';
    if (/:/.test(text)) return 'syntax-property';
    return 'syntax-function';
};

const makePiece = (index, text) => {
    const piece = document.createElement('button');
    piece.type = 'button';
    piece.className = `code-piece ${syntaxClass(text)}`;
    piece.draggable = true;
    piece.dataset.index = index;
    piece.textContent = text;
    piece.addEventListener('dragstart', () => { draggedPiece = piece; });
    piece.addEventListener('click', () => {
        if (piece.parentElement === elements.bank) {
            placePiece(piece, activeSlot || [...elements.slots.children].find((slot) => !slot.querySelector('.code-piece')));
        } else moveToBank(piece);
    });
    return piece;
};

const prepareSlot = (slot) => {
    slot.addEventListener('dragover', (event) => event.preventDefault());
    slot.addEventListener('drop', (event) => { event.preventDefault(); if (draggedPiece) placePiece(draggedPiece, slot); });
    slot.addEventListener('click', () => { activeSlot?.classList.remove('active'); activeSlot = slot; slot.classList.add('active'); });
};

const moveToBank = (piece) => { elements.bank.append(piece); piece.classList.remove('placed', 'answer-correct', 'answer-wrong'); };
const placePiece = (piece, slot) => {
    if (!slot) return;
    const occupied = slot.querySelector('.code-piece');
    if (occupied) moveToBank(occupied);
    slot.append(piece);
    piece.classList.add('placed');
    activeSlot?.classList.remove('active');
    activeSlot = null;
};

const renderSteps = () => elements.steps.replaceChildren(...course.challenges.map((challenge, index) => {
    const item = document.createElement('div');
    item.className = `trial-step-item ${index === challengeIndex ? 'current' : ''} ${index < challengeIndex ? 'done' : ''}`;
    item.innerHTML = `<span>${index < challengeIndex ? '✓' : index + 1}</span><p>${index + 1}. ${challenge.title}</p>`;
    return item;
}));

const renderBuilder = () => {
    const challenge = course.challenges[challengeIndex];
    activeSlot = null;
    elements.result.hidden = true;
    elements.next.dataset.ready = '';
    elements.next.textContent = 'Code prüfen';
    elements.slots.replaceChildren(...challenge.solution.map((_, index) => {
        const slot = document.createElement('div');
        slot.className = 'code-slot';
        slot.innerHTML = `<span class="code-line-number">${index + 1}</span><span class="code-slot-placeholder">Baustein hier ablegen</span>`;
        prepareSlot(slot);
        return slot;
    }));
    elements.bank.replaceChildren(...shuffle(challenge.pieces.map((text, index) => makePiece(index, text))));
};

const renderChallenge = () => {
    const challenge = course.challenges[challengeIndex];
    elements.name.textContent = course.name;
    elements.icon.textContent = course.icon;
    elements.step.textContent = challengeIndex + 1;
    elements.question.textContent = challenge.title;
    elements.hint.textContent = challenge.hint;
    elements.file.textContent = course.file;
    elements.explainerText.textContent = course.intro;
    elements.visual.replaceChildren(...course.visual.map((label, index) => {
        const part = document.createElement('span'); part.textContent = label; part.style.animationDelay = `${index * 0.12}s`; return part;
    }));
    elements.feedback.textContent = '';
    elements.feedback.className = 'trial-feedback';
    elements.progress.style.width = `${(challengeIndex / course.challenges.length) * 100}%`;
    elements.explainer.hidden = false;
    elements.builder.hidden = true;
    elements.actions.hidden = true;
    elements.result.hidden = true;
    renderSteps();
};

const showBuilder = () => {
    elements.explainer.hidden = true;
    elements.builder.hidden = false;
    elements.actions.hidden = false;
    renderBuilder();
};

const showResult = () => {
    const lines = [...elements.slots.children].map((slot) => slot.querySelector('.code-piece')?.textContent || '// fehlender Baustein');
    elements.resultCode.textContent = lines.join('\n');
    elements.result.hidden = false;
};

const checkAnswer = () => {
    const challenge = course.challenges[challengeIndex];
    const slots = [...elements.slots.children];
    const placed = slots.map((slot) => Number(slot.querySelector('.code-piece')?.dataset.index));
    const complete = placed.every(Number.isInteger);
    const correct = complete && placed.every((pieceIndex, position) => pieceIndex === challenge.solution[position]);
    slots.forEach((slot, position) => {
        const piece = slot.querySelector('.code-piece');
        if (piece) piece.classList.add(Number(piece.dataset.index) === challenge.solution[position] ? 'answer-correct' : 'answer-wrong');
    });
    showResult();
    if (!correct) {
        elements.feedback.textContent = complete ? 'Fast! Vergleiche die Reihenfolge mit der Erklärung und probiere es erneut.' : 'Dein Ergebnis zeigt noch fehlende Bausteine. Ergänze sie und prüfe erneut.';
        elements.feedback.className = 'trial-feedback wrong';
        return;
    }
    score += 20;
    elements.score.textContent = score;
    elements.feedback.textContent = 'Perfekt! Das ist genau der Code, den du gerade gebaut hast.';
    elements.feedback.className = 'trial-feedback correct';
    elements.next.textContent = challengeIndex === course.challenges.length - 1 ? 'Probekurs abschließen' : 'Nächste Challenge';
    elements.next.dataset.ready = 'true';
    elements.progress.style.width = `${((challengeIndex + 1) / course.challenges.length) * 100}%`;
};

const finish = () => {
    completed = true;
    elements.question.textContent = 'Du hast den Probekurs geschafft! 🎉';
    elements.hint.textContent = `Du hast ${score} Punkte gesammelt und wichtige Grundlagen aus ${course.name} ausprobiert.`;
    elements.builder.hidden = true;
    elements.explainer.hidden = true;
    elements.result.hidden = true;
    elements.feedback.textContent = 'Bereit, dein eigenes Projekt zu bauen?';
    elements.feedback.className = 'trial-feedback correct';
    elements.next.textContent = 'Kurs anfragen';
    elements.reset.hidden = true;
    renderSteps();
};

elements.start.addEventListener('click', showBuilder);
elements.reset.addEventListener('click', renderBuilder);
elements.next.addEventListener('click', () => {
    if (completed) { location.href = 'kontakt.html'; return; }
    if (elements.next.dataset.ready === 'true') {
        challengeIndex += 1;
        challengeIndex < course.challenges.length ? renderChallenge() : finish();
    } else checkAnswer();
});
renderChallenge();
