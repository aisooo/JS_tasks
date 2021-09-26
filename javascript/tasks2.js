//_________ВОПРОС№3_________
var a = document.getElementById("openMycolor");
var btns_mycolor = document.getElementById("Mycolor");
var hidden_answer = document.getElementById("closeMycolor");

myColor = ["Red", "Green", "White", "Black"];

a.onclick = function () {
  btns_mycolor.innerHTML = myColor.join() + myColor.join("+");
};
hidden_answer.onclick = function () {
  btns_mycolor.innerHTML = "Ответ скрыт";
};
//_________ВОПРОС№3_________MONTH
var btn = document.getElementById("OpenAnswerID");
var btns = document.getElementById("OpenMonth");
var hide = document.getElementById("OpenAnswerID");

var month = function (a) {
  listOFmonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return listOFmonth[a.getMonth()];
};
console.log(month(new Date("10/11/2009")));
console.log(month(new Date("11/13/2014")));

btn.onclick = function () {
  "October";
  "November";
};
hide.onclick = function () {
  btns.innerHTML = "Ответ скрыт";
};

//_________ВОПРОС№4.2_________

var colorOfelement = document.getElementsById("colorElem");
var btns_changeColor = document.getElementsByClassName(".item-btn");

btns_changeColor.onclick = function color() {
  for (let i = 0; i < 3; i++) {
    colorOfelement[i].style.color = "red";
  }
  for (let index = 3; index < colorOfelement; index++) {
    colorOfelement[index].style.color = "green";
  }
};
