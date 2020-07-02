// 画像の配列、初期の配列のindexの設定
const images = ['neru-finish.png', 'okiru.png', 'neru1.png', 'neru2.png', 'neru3.png'];
let currentIndex = 0;

//クリックすると目が覚める、currentIndexに1を足す
function getOut() {
  document.getElementById("image").onclick = function() {
    if(currentIndex === 0) {
      currentIndex += 1;
      document.getElementById("image").src = images[currentIndex];
      setTimeout(sleep1, 1500);
    }
  }
};

//寝る（パートワン）
function sleep1() {
    if(currentIndex  === 1) {
      currentIndex += 1;
      document.getElementById("image").src = images[currentIndex];
      setTimeout(sleep2, 2000);
    }
}

//寝る（パートツー）
function sleep2() {
    if(currentIndex  === 2) {
      currentIndex += 1;
      document.getElementById("image").src = images[currentIndex];
      setTimeout(sleep3, 2000);
    }
}

//寝る（パートスリー）
function sleep3() {
    if(currentIndex === 3) {
      currentIndex += 1;
      document.getElementById("image").src = images[currentIndex];
      setTimeout(sleepFinish, 2000);
    }
}

//寝てから最初の画像に戻る
function sleepFinish() {
  if(currentIndex === 4) {
    currentIndex -=4;
    document.getElementById("image").src = images[currentIndex];
    //ここからjquery
    $('p').addClass('show').delay(4000).queue(function(next){
      $(this).removeClass('show');
      next();;
    })
  }
}

getOut();

//クリックすると起きる
document.getElementById("image").onclick = function() {
  currentIndex = 1;
  document.getElementById("image").src = images[currentIndex];
  setTimeout(sleep1, 1500);
  //ここからjquery
  $('p').removeClass('show');
}
