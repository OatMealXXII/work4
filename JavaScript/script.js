let dogScore = 0;
let catScore = 0;

let questionNumber = 1;

function answerDog() {
  dogScore = dogScore + 1;

  nextQuestion();
}

function answerCat() {
  catScore = catScore + 1;

  nextQuestion();
}

function nextQuestion() {
  questionNumber = questionNumber + 1;

  if (questionNumber == 2) {
    document.getElementById("question").innerHTML =
      "เมื่อเจอคนแปลกหน้าคุณจะทำอย่างไร?";

    document.getElementById("btn1").innerHTML = "เข้าไปทักทายอย่างเป็นมิตร";

    document.getElementById("btn2").innerHTML = "อยู่ห่างๆ และสังเกตก่อน";
  } else if (questionNumber == 3) {
    document.getElementById("question").innerHTML =
      "คุณชอบอยู่กับคนอื่นหรืออยู่คนเดียว?";

    document.getElementById("btn1").innerHTML = "ชอบอยู่กับเพื่อนหลายๆ คน";

    document.getElementById("btn2").innerHTML = "ชอบอยู่คนเดียว";
  } else if (questionNumber == 4) {
    document.getElementById("question").innerHTML =
      "ถ้าเพื่อนชวนไปเที่ยวคุณจะ?";

    document.getElementById("btn1").innerHTML = "ตอบตกลงและออกไปทันที";

    document.getElementById("btn2").innerHTML = "ขออยู่บ้านดีกว่า";
  } else if (questionNumber == 5) {
    document.getElementById("question").innerHTML =
      "คุณคิดว่าตัวเองเป็นคนแบบไหน?";

    document.getElementById("btn1").innerHTML = "ร่าเริง ชอบเข้าสังคม";

    document.getElementById("btn2").innerHTML = "รักความสงบ มีโลกส่วนตัว";
  } else {
    showResult();
  }

  if (questionNumber <= 5) {
    document.getElementById("progress").innerHTML =
      "คำถามข้อ " + questionNumber + " / 5";
  }
}

function showResult() {
  document.getElementById("questionBox").classList.add("hidden");

  document.getElementById("result").classList.remove("hidden");

  if (dogScore > catScore) {
    document.getElementById("resultTitle").innerHTML = "คุณเหมือนสุนัข!";

    document.getElementById("resultImage").src = "../img/golden.jpg";

    document.getElementById("resultText").innerHTML =
      "คุณเป็นคนร่าเริง เข้ากับคนง่าย ชอบเข้าสังคม";
  } else if (catScore > dogScore) {
    document.getElementById("resultTitle").innerHTML = "คุณเหมือนแมว!";

    document.getElementById("resultImage").src = "../img/persia.jpg";

    document.getElementById("resultText").innerHTML =
      "คุณเป็นคนรักความสงบ มีโลกส่วนตัว และชอบอิสระ";
  } else {
    document.getElementById("resultTitle").innerHTML =
      " คุณเป็นส่วนผสมของหมาและแมว!";

    document.getElementById("resultImage").src = "../img/corgi.jpg";

    document.getElementById("resultText").innerHTML =
      "คุณมีบุคลิกทั้งสองแบบผสมผสานกัน";
  }
}

function restartQuiz() {
  dogScore = 0;
  catScore = 0;

  questionNumber = 1;

  document.getElementById("questionBox").classList.remove("hidden");

  document.getElementById("result").classList.add("hidden");

  document.getElementById("question").innerHTML = "คุณชอบทำอะไรในวันหยุด?";

  document.getElementById("btn1").innerHTML = "ออกไปเที่ยวกับเพื่อน";

  document.getElementById("btn2").innerHTML = "อยู่บ้านพักผ่อน";

  document.getElementById("progress").innerHTML = "คำถามข้อ 1 / 5";
}
