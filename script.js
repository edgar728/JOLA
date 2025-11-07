// Preguntas (40)
const questions = [
  "¿Cuál es la función primordial de los organismos reguladores en el Sistema Bursátil Mexicano?",
  "¿Qué organismo gubernamental es la máxima autoridad financiera y tiene la facultad de planear, coordinar, evaluar y vigilar el sistema financiero en México?",
  "Menciona dos facultades clave de la Secretaría de Hacienda y Crédito Público en relación con el mercado de valores.",
  "¿Cuál es el objetivo prioritario del Banco de México y cómo influye en la estabilidad del Sistema Bursátil?",
  "¿Qué organismo supervisa y regula a las entidades financieras para proteger los intereses del público inversionista?",
  "¿A qué organismo le corresponde autorizar, regular y supervisar a las Casas de Bolsa?",
  "¿Cuál es el principal objetivo de la Comisión Nacional del Sistema de Ahorro para el Retiro?",
  "¿Qué tipo de entidades supervisa la CONSAR?",
  "¿Cuál es la misión de la Comisión Nacional para la Defensa de los Usuarios de los Servicios Financieros?",
  "Si un usuario tiene una controversia con una Casa de Bolsa, ¿a qué organismo debe acudir?",
  "¿Cuál es el papel del Instituto para la Protección al Ahorro Bancario (IPAB) y qué depósitos protege?",
  "¿Por qué se considera al IPAB un elemento de estabilidad y confianza para el sistema bancario?",
  "¿Cuáles son las dos principales Bolsas de Valores que operan en México?",
  "¿Qué es la Bolsa Mexicana de Valores y cuál es su rol?",
  "¿Qué significa BIVA y qué papel busca desempeñar como segunda bolsa de valores?",
  "¿Cuál es la función esencial de las Calificadoras de Valores?",
  "¿Qué aspecto evalúan las calificadoras al emitir una opinión sobre un instrumento de deuda?",
  "¿Qué son y cuál es la función de las Casas de Bolsa?",
  "¿Qué servicio proporcionan los Asesores de Inversión a sus clientes?",
  "¿Qué significa INDEVAL y cuál es su función en la liquidación y custodia de valores?",
  "¿Qué beneficio aporta INDEVAL al mercado al reducir el riesgo de liquidación?",
  "¿Cuál es el rol principal de los Formadores de Mercado en las bolsas?",
  "¿Qué son y por qué son importantes los Proveedores de Precios en el mercado bursátil?",
  "¿Qué es el Mercado Mexicano de Derivados?",
  "Menciona un ejemplo de instrumento que se negocie en MEXDER.",
  "¿Qué función desempeña la Cámara de Compensación en el mercado de derivados?",
  "¿Por qué es fundamental ASIGNA para garantizar el cumplimiento de las operaciones en MEXDER?",
  "¿Quiénes son las Emisoras en el contexto bursátil?",
  "¿Cuál es el principal beneficio que obtienen las empresas al volverse Emisoras?",
  "¿Qué figura legal se utiliza para las empresas que listan sus acciones en la bolsa?",
  "¿Qué significan las siglas SAB y cuál es su característica distintiva?",
  "¿Qué significan las siglas SAPI y cuál es su propósito?",
  "¿Cuál es la diferencia entre una SAPI y una SAB en cuanto a su régimen de valores?",
  "¿Qué figura legal es una etapa intermedia entre la SAPI y la SAB?",
  "¿Qué significa SAPIB?",
  "¿Para qué tipo de empresas se diseñó la figura SAPIB?",
  "¿Qué institución registra los valores para su colocación en el mercado?",
  "¿Qué rol juegan los Inversionistas en el Sistema Bursátil?",
  "¿Cuál es la principal normativa que rige la operación del mercado de valores en México?",
  "Menciona un riesgo clave que buscan mitigar los organismos reguladores del Sistema Bursátil."
];

// Múltiple elección (cada subarray: opciones; la PRIMERA opción es la correcta — se barajará)
const multipleChoice = [
  ["Supervisar y regular el correcto funcionamiento del mercado", "Emitir acciones", "Otorgar préstamos"],
  ["Secretaría de Hacienda y Crédito Público", "Banco de México", "IPAB"],
  ["Regular intermediarios y autorizar valores", "Vigilar las bolsas y emitir dinero", "Aprobar créditos bancarios"],
  ["Mantener la estabilidad de precios y controlar la inflación", "Emitir acciones", "Administrar fondos de retiro"],
  ["CNBV", "CONSAR", "CONDUSEF"],
  ["CNBV", "Banxico", "SHCP"],
  ["Regular y proteger el ahorro para el retiro", "Emitir deuda", "Controlar la inflación"],
  ["AFORES y SIEFORES", "Casas de Bolsa", "Bancos internacionales"],
  ["Defender los derechos de los usuarios financieros", "Emitir bonos", "Vigilar la inflación"],
  ["CONDUSEF", "CNBV", "SHCP"],
  ["Proteger depósitos bancarios", "Emitir billetes", "Autorizar créditos"],
  ["Porque garantiza los ahorros", "Porque emite moneda", "Porque otorga préstamos"],
  ["BMV y BIVA", "CNBV y Banxico", "IPAB y MEXDER"],
  ["Lugar donde se compran y venden valores", "Banco de emisión", "AFORE nacional"],
  ["Bolsa Institucional de Valores", "Banco Internacional de Valores", "Base Industrial de Valores"],
  ["Evaluar la solvencia de emisores", "Comprar acciones", "Regular el mercado"],
  ["La capacidad de pago y solvencia del emisor", "El valor de las acciones", "El monto de capital"],
  ["Intermediarios entre inversionistas y emisores", "Reguladores", "Aseguradores"],
  ["Brindar asesoría personalizada", "Emitir bonos", "Controlar tasas"],
  ["Instituto para el Depósito de Valores (INDEVAL)", "Banco Central", "Casa de Bolsa"],
  ["Mayor rapidez y seguridad en la liquidación", "Más riesgo", "Más costos"],
  ["Proveer liquidez y mantener cotizaciones", "Emitir moneda", "Calificar empresas"],
  ["Publicar precios de referencia y ofrecer transparencia", "Emitir acciones", "Conceder créditos"],
  ["Mercado donde se negocian futuros y opciones", "Bolsa de valores", "Banco Central"],
  ["Futuros sobre tipo de cambio o IPC", "Acciones bancarias", "Depósitos"],
  ["Actuar como contraparte central y garantizar liquidación", "Emitir bonos", "Proteger depósitos"],
  ["Porque es la cámara de compensación que asegura cumplimiento", "Porque fija precios", "Porque otorga préstamos"],
  ["Empresas o entidades que colocan valores en el mercado", "Inversionistas", "Gobierno"],
  ["Obtener financiamiento y visibilidad", "Evitar regulaciones", "Comprar acciones"],
  ["Sociedad Anónima Bursátil (S.A.B.)", "Banco", "AFORE"],
  ["Sociedad Anónima Bursátil; sus acciones cotizan públicamente", "Sistema de Ahorro Bancario", "Sociedad de Acciones Bursátiles"],
  ["Sociedad Anónima Promotora de Inversión (SAPI)", "Sistema de Apoyo Público", "Secretaría de Inversión"],
  ["SAPI no cotiza; SAB sí cotiza y tiene mayores obligaciones de información", "Nivel de regulación", "Tamaño del capital"],
  ["SAPIB", "SAPI", "SAB"],
  ["Sociedad Anónima Promotora de Inversión Bursátil", "Sociedad de Apoyo Bancario", "Servicio de Análisis Público"],
  ["Empresas que buscan cotizar en bolsa", "Casas de Bolsa", "Instituciones públicas"],
  ["CNBV", "IPAB", "MEXDER"],
  ["Aportar capital comprando valores", "Emitir bonos", "Vigilar el mercado"],
  ["Ley del Mercado de Valores (LMV)", "Ley de Instituciones Bancarias", "Constitución"],
  ["El fraude y la manipulación de mercado", "La inflación", "La liquidez"]
];

// Respuestas canónicas / palabras clave para modo abierto (breves)
const canonicalAnswers = [
  "garantizar funcionamiento transparencia protección inversionista",
  "secretaría de hacienda y crédito público shcp",
  "regular autorizar coordinar políticas financieras",
  "estabilidad del poder adquisitivo inflación control precios",
  "comisión nacional bancaria y de valores cnbv",
  "cnbv",
  "regular y supervisar el sistema de ahorro para el retiro proteger trabajadores",
  "afores siefores",
  "proteger defender derechos usuarios servicios financieros condusef asesoría conciliación",
  "condusef",
  "proteger depósitos bancarios asegurados",
  "asegura depósitos evita corridas confianza",
  "bolsa mexicana de valores bmv y bolsa institucional de valores biva",
  "bolsa mexicana de valores facilita negociación de valores transparencia",
  "bolsa institucional de valores ofrecer competencia modernizar mercado",
  "evaluar riesgo crediticio solvencia emisores",
  "capacidad de pago solvencia emisor riesgo crédito",
  "intermediarios que facilitan compra venta de valores casas de bolsa",
  "asesoría de inversión recomendaciones según perfil",
  "instituto para el depósito de valores indeval custodio liquidación",
  "reduce riesgo de liquidación asegura operaciones seguras eficientes",
  "mantener liquidez y precios facilitar negociación",
  "proveedores de precios referencias transparencia valoración",
  "plataforma para negociar derivados futuros opciones",
  "futuros sobre tipo de cambio o futuros sobre el ipc",
  "actuar como contraparte central garantizar liquidación",
  "cámara de compensación garantiza cumplimiento operaciones",
  "empresas emisoras colocan valores",
  "obtener capital financiamiento visibilidad",
  "sociedad anónima bursátil sab",
  "sociedad anónima bursátil acciones cotizan públicamente",
  "sociedad anónima promotora de inversión sapi",
  "sapi no cotiza sab si cotiza obligaciones información",
  "sapib",
  "sociedad anónima promotora de inversión bursátil",
  "empresas en crecimiento que buscan cotizar",
  "cnbv registro de valores",
  "aportan capital comprando valores",
  "ley del mercado de valores lmv",
  "fraude manipulación mercado insolvencia"
];

// --- helpers ---
const $ = id => document.getElementById(id);
const total = questions.length;

let mode = null;          // "open" or "choice"
let index = 0;
let score = 0;
let currentShuffledOptions = []; // track current options (for choice mode)
let currentCorrectOption = null; // actual correct text for choice mode

// UI elements
const modePanel = $('mode-panel');
const quizPanel = $('quiz-panel');
const resultPanel = $('result-panel');
const questionEl = $('question');
const textInput = $('textAnswer');
const choiceArea = $('choice-area');
const submitBtn = $('submitBtn');
const nextBtn = $('nextBtn');
const feedback = $('feedback');
const currentEl = $('current');
const totalEl = $('total');
const scoreEl = $('score');
const restartBtn = $('restartBtn');

totalEl.textContent = total;
currentEl.textContent = 1;
scoreEl.textContent = 0;

// normalize helper: lowercase, remove accents & punctuation
function normalize(str){
  if(!str) return '';
  const a = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return a.replace(/[^\w\s]/g,'').trim();
}

// shuffle array (Fisher-Yates)
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// start game with mode
$('openMode').addEventListener('click', ()=>start('open'));
$('choiceMode').addEventListener('click', ()=>start('choice'));

function start(selectedMode){
  mode = selectedMode;
  modePanel.classList.add('hidden');
  quizPanel.classList.remove('hidden');
  index = 0;
  score = 0;
  scoreEl.textContent = score;
  currentEl.textContent = index+1;
  showQuestion();
}

// render a question
function showQuestion(){
  const q = questions[index];
  questionEl.textContent = q;
  feedback.textContent = '';
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'inline-block';

  if(mode === 'open'){
    choiceArea.classList.add('hidden');
    textInput.style.display = 'block';
    textInput.value = '';
    textInput.focus();
  } else {
    // multiple choice
    textInput.style.display = 'none';
    choiceArea.classList.remove('hidden');
    choiceArea.innerHTML = '';
    // get options and mark the first as correct (per data), then shuffle
    const opts = multipleChoice[index].slice(); // copy
    const correct = opts[0]; // first is correct per our data
    const shuffled = shuffle(opts);
    currentShuffledOptions = shuffled;
    currentCorrectOption = correct;
    // render
    shuffled.forEach(optText=>{
      const d = document.createElement('div');
      d.className = 'choice';
      d.textContent = optText;
      d.onclick = ()=> selectChoice(d, optText);
      choiceArea.appendChild(d);
    });
  }
  currentEl.textContent = index+1;
}

// when user selects an option
function selectChoice(element, optionText){
  // disable further clicks
  document.querySelectorAll('.choice').forEach(c => c.style.pointerEvents = 'none');
  // mark chosen
  if(normalize(optionText) === normalize(currentCorrectOption)){
    element.classList.add('correct');
    feedback.innerHTML = `<strong>Correcto ✅</strong>`;
    score++;
    scoreEl.textContent = score;
  } else {
    element.classList.add('incorrect');
    // highlight correct one
    const choices = document.querySelectorAll('.choice');
    choices.forEach(c=>{
      if(normalize(c.textContent) === normalize(currentCorrectOption)) c.classList.add('correct');
    });
    feedback.innerHTML = `<strong>Incorrecto ❌</strong> La opción correcta está marcada en verde.`;
  }
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
}

// submit handler for open mode
submitBtn.addEventListener('click', ()=>{
  if(mode === 'open'){
    const user = textInput.value.trim();
    if(user === ''){
      feedback.textContent = '❗ Escribe una respuesta antes de enviar.';
      feedback.style.color = '#f87171';
      return;
    }
    // check using keywords in canonicalAnswers
    const cand = canonicalAnswers[index];
    const userN = normalize(user);
    const candN = normalize(cand);

    // strategy: consider correct if the user's normalized answer contains at least one of the important keywords from canonical answer
    const keywords = candN.split(/\s+/).filter(Boolean);
    // choose important words (ignore short words)
    const important = keywords.filter(w=>w.length>3);
    let matched = 0;
    important.forEach(k=>{
      if(userN.includes(k)) matched++;
    });

    // acceptance rule: at least 1 match OR exact substring of a short canonical answer
    const accept = (matched >= 1) || userN.includes(candN) || candN.includes(userN);

    if(accept){
      feedback.innerHTML = `<strong>Correcto ✅</strong>`;
      score++;
      scoreEl.textContent = score;
    } else {
      feedback.innerHTML = `<strong>Incorrecto ❌</strong> Revisa tu respuesta o consulta tus apuntes.`;
      // Note: not showing the correct answer now to respect "learn by practice" — user can review at end if wanted.
    }
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
  } else {
    // in choice mode, user should click an option; do nothing if they hit submit
    feedback.textContent = 'Selecciona una opción haciendo clic en ella.';
  }
});

// next question
nextBtn.addEventListener('click', ()=>{
  if(index < total-1){
    index++;
    showQuestion();
  } else {
    // finished
    showResult();
  }
});

// show final result and option to review (we display total correct)
function showResult(){
  quizPanel.classList.add('hidden');
  resultPanel.classList.remove('hidden');
  $('result-title').textContent = '🎉 ¡Has terminado!';
  $('result-text').textContent = `Acertaste ${score} de ${total} preguntas.`;
}

// restart
restartBtn.addEventListener('click', ()=>{
  resultPanel.classList.add('hidden');
  modePanel.classList.remove('hidden');
  index = 0;
  score = 0;
  scoreEl.textContent = 0;
  // reset UI
  $('feedback').textContent = '';
});

// init: create missing result elements to avoid errors
(function initResultElements(){
  if(!$('result-panel')){
    const rp = document.createElement('section');
    rp.id = 'result-panel';
    rp.className = 'panel hidden';
    rp.innerHTML = `
      <h2 id="result-title"></h2>
      <p id="result-text"></p>
      <div class="actions">
        <button id="restartBtn" class="btn primary">Reiniciar</button>
      </div>
    `;
    document.querySelector('.container').appendChild(rp);
    // wiring the new restart button
    const rb = $('restartBtn');
    rb.addEventListener('click', ()=>{
      rp.classList.add('hidden');
      modePanel.classList.remove('hidden');
      index = 0; score = 0; scoreEl.textContent = 0;
      $('feedback').textContent = '';
    });
  }
})();
