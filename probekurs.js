const courses = {
    web: {
        name: 'Webentwicklung', icon: '>_', file: 'index.html', visual: ['HTML', 'CSS', 'JS'],
        intro: '',
        challenges: [
    { title: 'Aufbau von HTML-Elemente', explanation: 'HTML gibt einer Website ihre Struktur. Überschriften werden mit dem Element <h1> erstellt, normale Texte mit dem Element <p>. Ein HTML-Element besteht aus einem öffnenden Tag <element>, dem Inhalt und einem schließenden Tag </element>. Erstelle eine große Überschrift mit dem Text "Meine Website“ gefolgt von einem Textelement "kleine Beschreibung".', hint: 'Ordne die Bausteine in der richtigen Reihenfolge.', pieces: ['<p>', 'Meine Website', '</h1>', '</p>', '<h1>', 'kleine Beschreibung'], solution: [4, 1, 2, 0, 5, 3] },
    { title: 'Ein Link mit HTML erstellen', explanation: 'Mit HTML kannst du Verbindungen zu anderen Webseiten erstellen. Dafür benutzt du das <a>-Element. Der Text zwischen dem öffnenden und schließenden Tag wird als anklickbarer Link angezeigt. Das Attribut href bestimmt, zu welcher Adresse der Link führt. Erstelle einen Link, der "Google öffnen" anzeigt und auf "https://google.com" verweist.', hint: 'Der sichtbare Text eines Links steht zwischen dem Start- und End-Tag.', pieces: ['<a href="https://google.com">', 'Google öffnen', '</a>'], solution: [0, 1, 2] },
    { title: 'CSS direkt in HTML verwenden', explanation: 'CSS verändert das Aussehen von HTML-Elementen. Eine Möglichkeit ist das style-Attribut. Damit kannst du direkt im HTML-Tag Eigenschaften wie Farben festlegen. Erstelle eine Überschrift, deren Text blau dargestellt wird.', hint: 'Der HTML-Code bleibt gleich, nur das Aussehen der Überschrift wird verändert.', pieces: ['<h1 style="color: blue;">', 'Meine Website', '</h1>'], solution: [0, 1, 2] },
    { title: 'Eine CSS Regel schreiben', explanation: 'Mit CSS kannst du mehrere Elemente gleichzeitig gestalten. Eine CSS-Regel besteht aus einem Selektor, der bestimmt welches Element verändert wird, und geschweiften Klammern mit den Eigenschaften. Erstelle eine CSS-Regel, die alle Absätze mit grauer Schrift darstellt.', hint: 'Der Selektor entscheidet, welches HTML-Element verändert wird.', pieces: ['p', '{', 'color: gray;', '}'], solution: [0, 1, 2, 3] },
    { title: 'JavaScript Code ausführen', explanation: 'JavaScript macht Webseiten interaktiv und kann Informationen verarbeiten. Mit console.log() kannst du einen Text in der Entwicklerkonsole des Browsers anzeigen. Erstelle einen JavaScript-Befehl, der "Hallo Welt!" ausgibt.', hint: 'Eine Funktion führt eine Aktion aus. Der Wert, mit dem sie arbeitet, steht innerhalb der Klammern.', pieces: ['console.log(', '"Hallo Welt!"', ');'], solution: [0, 1, 2] },
    { title: 'JavaScript Variablen erstellen', explanation: 'Variablen speichern Informationen, damit du sie später wiederverwenden kannst. Mit let erstellst du eine neue Variable. Danach kommt der Name der Variable und mit einem Gleichheitszeichen wird ihr ein Wert zugewiesen. Erstelle eine Variable namens "name", die den Text "Max" speichert.', hint: 'Überlege, welche Reihenfolge man beim Erstellen einer Variable braucht: Erstellen → Benennen → Wert speichern.', pieces: ['let', 'name', '=', '"Max";'], solution: [0, 1, 2, 3] }
]
    },
    game: {
        name: 'Game Development', icon: '⌘', file: 'Player.cs', visual: ['Scene', 'C#', 'Play'],
        intro: '',
        challenges: [
            { title: 'Grundstruktur eines Unity-Skripts', explanation: 'Jedes C#-Skript in Unity braucht drei Dinge: "using UnityEngine;" importiert Unity-Funktionen, eine Klasse mit Klassenname und ": MonoBehaviour" (damit es an GameObjects gehört), und geschweifte Klammern {} um alles zu umhüllen. Das ist die Grundlage für alles!', hint: 'Ein Skript nutzt UnityEngine und enthält eine Klasse.', pieces: ['using UnityEngine;', 'public class Player : MonoBehaviour', '{', '}'], solution: [0, 1, 2, 3] },
            { title: 'Die Start-Methode', explanation: 'Start() ist eine spezielle Methode (Funktion) in Unity, die einmal beim Spielstart aufgeführt wird. Mit Debug.Log() können wir Nachrichten in der Console ausgeben – sehr praktisch zum Testen! void bedeutet, dass die Methode keinen Wert zurückgibt.', hint: 'Start wird einmal ausgeführt. Debug.Log druckt eine Nachricht.', pieces: ['void Start()', '{', '  Debug.Log("Spiel gestartet!");', '}'], solution: [0, 1, 2, 3] },
            { title: 'Die Update-Methode', explanation: 'Update() läuft in jedem Frame (ca. 60x pro Sekunde). Sie ist perfekt für Bewegungen und Inputs. Time.deltaTime ist super wichtig – es ist die Zeit seit dem letzten Frame. Mit Time.deltaTime wird Bewegung smooth und gleich schnell auf jedem PC!', hint: 'Update für jeden Frame. Time.deltaTime für smooth Bewegung.', pieces: ['void Update()', '{', '  transform.Translate(Vector3.right * Time.deltaTime);', '}'], solution: [0, 1, 2, 3] },
            { title: 'Variablen mit SerializeField', explanation: '[SerializeField] macht private Variablen im Unity-Inspector sichtbar – du kannst Werte dort einstellen ohne Code zu ändern! float ist ein Dezimalzahl-Typ, = 5f setzt Startwert auf 5. Das ist super für Game Designer!', hint: '[SerializeField] macht Variablen im Inspector anpassbar.', pieces: ['[SerializeField]', 'private float jumpForce = 5f;'], solution: [0, 1] },
            { title: 'Kollisionen erkennen', explanation: 'OnCollisionEnter() wird aufgerufen, wenn zwei Physics-Objekte kollidieren. Der Parameter "Collision collision" enthält Infos über das getroffene Objekt (collision.gameObject.name z.B.). Das ist die Basis für Spielmechaniken wie Treffer, Punkte, Explosionen!', hint: 'OnCollisionEnter für Kollisionserkennung nutzen.', pieces: ['void OnCollisionEnter(Collision collision)', '{', '  Debug.Log("Treffer!");', '}'], solution: [0, 1, 2, 3] },
            { title: 'Input mit GetKeyDown', explanation: '"Input.GetKeyDown(KeyCode.Space)" prüft, ob eine Taste gerade gedrückt wurde. Das ist anders als GetKey() das prüft, ob eine Taste gehalten wird. Mit if-Bedingungen reagieren wir auf Eingaben – so entsteht die Spielersteuerung!', hint: 'Input.GetKeyDown prüft einen Tastendruck.', pieces: ['if (Input.GetKeyDown(KeyCode.Space))', '{', '  Debug.Log("Jump!");', '}'], solution: [0, 1, 2, 3] },
            { title: 'Kraft anwenden mit Rigidbody', explanation: 'Ein Rigidbody ist die Physics-Komponente. Mit rigidbody.velocity ändern wir die Geschwindigkeit direkt. Mit AddForce() fügen wir eine Kraft hinzu – das sieht natürlicher aus! new Vector3(0, jumpForce, 0) bedeutet: Kraft nach oben.', hint: 'Rigidbody.velocity oder AddForce für Bewegung.', pieces: ['Rigidbody rb = GetComponent<Rigidbody>();', 'rb.velocity = new Vector3(0, jumpForce, 0);'], solution: [0, 1] }
        ]
    },
    ios: {
        name: 'iOS App Development', icon: '', file: 'ContentView.swift', visual: ['SwiftUI', 'View', 'iPhone'],
        intro: '',
        challenges: [
            { title: 'SwiftUI-Framework importieren', explanation: '"import SwiftUI" ist die erste Zeile in einer iOS-App. Sie sagt: "Ich möchte SwiftUI benutzen". Import gibt uns Zugriff auf alle SwiftUI-Komponenten – Text, Button, Image usw. Ohne import funktioniert nichts!', hint: 'import SwiftUI gibt dir Zugriff auf alle SwiftUI-Tools.', pieces: ['import SwiftUI'], solution: [0] },
            { title: 'Eine View-Struktur erstellen', explanation: '"struct" bedeutet Struktur – das ist ein Blueprint. "ContentView" ist der Name. ": View" bedeutet, diese Struktur folgt dem View-Protokoll – SwiftUI versteht jetzt, dass es eine grafische Oberfläche ist. Die geschweiften Klammern {} enthalten den gesamten Code der View.', hint: 'struct mit : View, dann body property.', pieces: ['struct ContentView: View {', 'var body: some View {', '}', '}'], solution: [0, 1, 2, 3] },
            { title: 'Text auf dem Bildschirm anzeigen', explanation: '"var body: some View {" ist eine spezielle Eigenschaft in SwiftUI. Sie definiert, was angezeigt wird. "Text("Hallo, iOS!")" ist ein Text-Element. Alles zwischen den geschweiften Klammern wird auf dem Bildschirm sichtbar. Das ist das Herzstück jeder Oberfläche!', hint: 'body enthält was angezeigt wird.', pieces: ['var body: some View {', '  Text("Hallo, iOS!")', '}'], solution: [0, 1, 2] },
            { title: 'Zustand mit @State speichern', explanation: '"@State" ist ein "Property Wrapper" – ein magisches Präfix, das SwiftUI sagt: "Dies ist eine Variable, die sich ändern kann, und wenn sie sich ändert, update die Oberfläche!" "private" bedeutet nur diese View kann es sehen. "var count = 0" deklariert eine Zahl-Variable mit Startwert 0. State ist das Gehirn der View!', hint: '@State private var speichert veränderbare Werte.', pieces: ['@State private var count = 0'], solution: [0] },
            { title: 'Button mit Aktion', explanation: '"Button("Plus") {" erstellt einen Button mit Text "Plus" und geschweifte Klammern {} enthalten die Aktion. "count += 1" erhöht den Zähler um 1. Der Code in {} läuft, wenn der Button geklickt wird. Das verbindet Oberfläche mit Logik!', hint: 'Button mit Text und Aktion in Klammern.', pieces: ['Button("Plus") {', '  count += 1', '}'], solution: [0, 1, 2] },
            { title: 'Text mit Variablen kombinieren', explanation: 'Text("Count: \\(count)") ist super clever! Der Backslash-Klammer-Syntax (\\()) lässt dich Variablen in Strings einbauen. Jedes Mal wenn count sich ändert (mit @State), aktualisiert sich der Text automatisch – das ist reaktives Programmieren!', hint: 'Mit \\(variable) Werte in Text einbauen.', pieces: ['Text("Count: \\(count)")'], solution: [0] },
            { title: 'VStack für vertikale Anordnung', explanation: '"VStack {" bedeutet "Vertical Stack" – ordnet Elemente von oben nach unten. Alles zwischen den Klammern wird vertikal gestapelt. Es gibt auch HStack (horizontal) und ZStack (übereinander). Mit Stacks baust du komplexe Layouts!', hint: 'VStack ordnet Elemente vertikal.', pieces: ['VStack {', '  Text("Titel")', '  Button("Klick") {}', '}'], solution: [0, 1, 2, 3] }
        ]
    }
};

const course = courses[new URLSearchParams(location.search).get('kurs')] || courses.web;
const $ = (selector) => document.querySelector(selector);
const elements = {
    name: $('.trial-course-name'), icon: $('.trial-course-icon'), step: $('.trial-step-number'),
    question: $('.trial-question'), hint: $('.trial-hint'), file: $('.trial-file-name'), slots: $('.code-slots'),
    bank: $('.code-bank'), feedback: $('.trial-feedback-box .trial-feedback'), progress: $('.trial-progress-bar'), score: $('.trial-score'),
    next: $('.trial-next'), prev: $('.trial-prev'), steps: $('.trial-steps'), explainer: $('.trial-explainer'),
    explainerText: $('.trial-explainer-text'), visual: $('.trial-concept-visual'),
    builder: $('.code-builder'), actions: $('.trial-actions'), result: $('.trial-result'), resultCode: $('.trial-result code'),
    feedbackBox: $('.trial-feedback-box')
};

let challengeIndex = 0;
let score = 0;
let activeSlot = null;
let draggedPiece = null;
let completed = false;
let currentState = 'explain'; // 'explain' or 'task'
let taskAnswered = false;

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
    elements.hint.textContent = "Tipp: " + challenge.hint;
    elements.file.textContent = course.file;
    elements.explainerText.textContent = challenge.explanation || challenge.title;
    elements.visual.replaceChildren(...course.visual.map((label, index) => {
        const part = document.createElement('span'); part.textContent = label; part.style.animationDelay = `${index * 0.12}s`; return part;
    }));
    elements.feedback.textContent = '';
    elements.feedback.className = 'trial-feedback';
    elements.feedbackBox.hidden = true;
    elements.progress.style.width = `${(challengeIndex / course.challenges.length) * 100}%`;
    elements.explainer.hidden = false;
    elements.builder.hidden = true;
    elements.actions.hidden = false;
    elements.result.hidden = true;
    currentState = 'explain';
    taskAnswered = false;
    elements.next.textContent = 'Weiter →';
    elements.next.disabled = false;
    elements.prev.disabled = challengeIndex === 0;
    renderSteps();
};

const showBuilder = () => {
    elements.explainer.hidden = true;
    elements.builder.hidden = false;
    elements.actions.hidden = false;
    elements.feedbackBox.hidden = true;
    currentState = 'task';
    taskAnswered = false;
    elements.next.textContent = 'Code prüfen';
    elements.next.disabled = false;
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
    elements.feedbackBox.hidden = false;
    if (!correct) {
        elements.feedback.textContent = complete ? '🧐 Fast! Dein Code ist nah dran.' : '🚧 Fast vollständig! Verwende alle Teile, um den Code abzuschließen.';
        elements.feedback.className = 'trial-feedback wrong';
        elements.feedbackBox.style.borderColor = '#e05a62';
        elements.feedbackBox.style.background = 'rgb(224 90 98 / 0.1)';
        elements.next.textContent = 'Erneut versuchen';
        elements.next.disabled = false;
        return;
    }
    taskAnswered = true;
    score += 20;
    elements.score.textContent = score;
    elements.feedback.textContent = '💚 Perfekt! Dein Code funktioniert.';
    elements.feedback.className = 'trial-feedback correct';
    elements.feedbackBox.style.borderColor = '#2ecc71';
    elements.feedbackBox.style.background = 'rgb(46 204 113 / 0.1)';
    elements.next.textContent = challengeIndex === course.challenges.length - 1 ? 'Weiter →' : 'Weiter →';
    elements.next.disabled = false;
    elements.progress.style.width = `${((challengeIndex + 1) / course.challenges.length) * 100}%`;
};

const finish = () => {
    completed = true;
    elements.question.textContent = 'Du hast den Probekurs abgeschlossen!';
    elements.hint.textContent = `Du hast ${score} Punkte gesammelt und wichtige Grundlagen aus der ${course.name} gelernt.`;
    elements.builder.hidden = true;
    elements.explainer.hidden = true;
    elements.result.hidden = true;
    elements.feedback.textContent = 'Du hast Interesse, Programmieren praxisnah zu lernen und deine eigenen Projekte mit persönlichem Coaching umzusetzen?';
    elements.feedback.className = 'trial-feedback correct';
    elements.next.textContent = 'Kurs anfragen';
    elements.reset.hidden = true;
    renderSteps();
};

elements.next.addEventListener('click', () => {
    if (completed) { location.href = 'kontakt.html'; return; }
    
    if (currentState === 'explain') {
        showBuilder();
    } else if (currentState === 'task') {
        if (taskAnswered) {
            challengeIndex += 1;
            challengeIndex < course.challenges.length ? renderChallenge() : finish();
        } else {
            checkAnswer();
        }
    }
});

elements.prev.addEventListener('click', () => {
    if (challengeIndex > 0) {
        challengeIndex -= 1;
        renderChallenge();
    }
});

renderChallenge();
