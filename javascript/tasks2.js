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

btn.onclick = function () {
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
  var date = prompt();
  var date2 = prompt();
  var firstNumdate = new Date(date);
  var firstNumdate2 = new Date(date2);
  for (var i = 0; i <= listOFmonth.length; i++) {
    if (i == firstNumdate.getMonth()) {
      var month = "";
      month += listOFmonth[i];
    }
    if (i == firstNumdate2.getMonth()) {
      var month1 = "";
      month1 += listOFmonth[i];
      alert('""' + month + '""' + " " + '"' + month1 + '"');
    }
  }
};

//_________ВОПРОС№4.2_________

// var colorOfelement = document.getElementsById("colorElem");
var colorOfelement = document.querySelector(".item-question .colorElem");
var btns_changeColor = document.querySelectorAll(".item-question .items li");
colorOfelement.onclick = function () {
  for (var i = 0; i < 3; i++) {
    btns_changeColor[i].style.color = "green";
  }
  for (var index = 3; index < btns_changeColor.length; index++) {
    btns_changeColor[index].style.color = "red";
  }
};
