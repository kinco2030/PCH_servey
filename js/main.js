// 0점 ~ 20점: 위험 추구형
// 21점 ~ 35점: 중립형
// 36점 ~ 50점: 위험 회피형

const quizData = [
    {
      question: "새로운 활동이나 경험을 시도하는 것이 두려운 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "계획되지 않은 갑작스러운 변화를 받아들이기 힘들다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "안전하고 익숙한 환경을 선호하는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "결정을 내릴 때 신중하게 생각하고 정보를 수집하는 편이다.",
      a: { text: "매우 아니다", score: 5 },
      b: { text: "조금 아니다", score: 4 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 2 },
      e: { text: "매우 그렇다", score: 1 },
    },
    {
      question: "불확실한 상황보다는 확실한 결과를 선호하는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "새로운 것을 배우는 걸 꺼리는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "위험을 감수하기보다는 안전한 방법을 선택하는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "실패에 대한 두려움 때문에 새로운 도전을 망설이는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
    {
      question: "계획 없이 즉흥적으로 행동하는 것을 좋아하는 편이다.",
      a: { text: "매우 아니다", score: 5 },
      b: { text: "조금 아니다", score: 4 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 2 },
      e: { text: "매우 그렇다", score: 1 },
    },
    {
      question: "새로운 사람들을 만나는 것을 꺼리는 편이다.",
      a: { text: "매우 아니다", score: 1 },
      b: { text: "조금 아니다", score: 2 },
      c: { text: "보통이다", score: 3 },
      d: { text: "조금 그렇다", score: 4 },
      e: { text: "매우 그렇다", score: 5 },
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a.text;
    b_text.innerText = currentQuizData.b.text;
    c_text.innerText = currentQuizData.c.text;
    d_text.innerText = currentQuizData.d.text;
    e_text.innerText = currentQuizData.e.text;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        score += quizData[currentQuiz][answer].score;

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            console.log(score)
            const resultHTML = (score, type) => `
            <div style="text-align: center;"> 
                <h2>당신의 위험 회피 성향은 <strong style="color: red;">${type}</strong>입니다.</h2>
                <p>결과를 기억해주시고 다음 설문을 계속해주세요.</p>
                <button onclick="location.href='https://docs.google.com/forms/d/e/1FAIpQLSdINnqWrQpn0X28pqxHMaYkw8wlSdAmnZnTYnB1sScP9gQNFg/viewform?usp=header'">Google Forms로 이동</button>
            </div>
            `;

            if (score <= 20) {
                quiz.innerHTML = resultHTML(score, "위험 추구형");
            } else if (score > 20 && score <= 35) {
                quiz.innerHTML = resultHTML(score, "중립형");
            } else if (score > 35 && score <= 50) {
                quiz.innerHTML = resultHTML(score, "위험 회피형");
            }
        }
    }
});