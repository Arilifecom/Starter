// member data
const members = [
  {
    id: 0,
    name: "Shimeji",
    job: "シメジ科シロタモギタケ属",
    img: "img/Shimeji.PNG",
    text:
      "はじめまして。しめじと申します。私は食物繊維が豊富に含んでおり、生活習慣病予防に役立ちます。(肥満予防、便秘解消、動脈硬化の予防　etc…)味噌汁や炊き込みご飯、パスタやシチューなど様々な場面で活躍できます。1日の稼働(摂取)量は100g（一袋分）程でお願いします。",
  },
  {
    id: 1,
    name: "Tomato",
    job: "ナス科ナス属",
    img: "img/Tomato.PNG",
    text:
      "はじめまして。とまとと申します。私は低カロリーでリコピンを含んでおり、抗酸化作用が高いです。油に溶けやすいため、オリーブオイルなどと相性がいいです。また、加熱により吸収率が高まるので、トマトソースやスープがおすすめです。1日の稼働(摂取)量は２個程でお願いします。",
  },
  {
    id: 2,
    name: "Cupsicum",
    job: "ナス科トウガラシ属",
    img: "img/Cupsicum.PNG",
    text:
      "はじめまして。ピーマンと申します。英語ではカプシカムと呼ばれています。私はビタミンＡとＣを豊富に含んでおり、細胞の働きを活性化し、疲労回復に役立ちます。肉詰めや、焼き浸しなどの油で炒める調理法がいいです。1日の稼働(摂取)量は中４個程でお願いします。",
  },
  {
    id: 3,
    name: "Go-ya",
    job: "ウリ科ツルレイシ属",
    img: "img/Go-ya.PNG",
    text:
      "はじめまして。ゴーヤと申します。私は食物繊維やカリウム、葉酸、ビタミンCを含んでおり、高血圧やむくみ予防にも役立ちます。熱に溶けやすいので加熱はサッとでお願いします。推奨する(稼働)摂取量はありませんが、摂取しすぎは体調を崩すので程々でお願いします。",
  }
];

//select item
const img = document.getElementById("member-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//select btn
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const romdomBtn = document.querySelector(".ramdom-btn");

//set start item
let currentItem = 0;

//load intial item
window.addEventListener("DOMContentLoaded",function () {
  showPerson(currentItem);
});

//show person based on item

function showPerson(person) {
  const item = members[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next member
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > members.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0){
    currentItem = members.length - 1;
  }
  showPerson(currentItem);
});

// show random person
romdomBtn.addEventListener("click", function () {
 currentItem = Math.floor(Math.random() * members.length);
 showPerson(currentItem);
});
