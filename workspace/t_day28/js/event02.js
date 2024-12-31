const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#over-out");

// console.log(boxClick);
// console.log(boxOver);
// console.log(boxOut);
// console.log(boxOverOut);

function changeBgGreen(){
  boxClick.setAttribute("style", "background-color:green");
  // 속성을 추가한다
  console.log(this);
  //this를 사용해서 확인한다 this는 현재 이벤트가 걸린 자기 자신
  this.setAttribute("style", "background-color:yellow");
  
}

boxClick.addEventListener("click", changeBgGreen);
//  함수명을 그대로 써줘야 실행이 된다   changeBgGreen 자리에 콜백함수가 올 수 있다
boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style", "background-color:skyblue");
});

function changeBgPink(){
  this.setAttribute("style", "background-color:pink");
  console.log(this);
}

boxOut.addEventListener("mouseout",  changeBgPink);
boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgPink);
