var btn_text = document.getElementById("textIDopen");
//_________ВОПРОС№4_________
var hide_answer = document.getElementById("textIDclose");

btn_text.onclick = function () {
  prompt("Ответ в консоли");
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].concat());
  }
};
//_________ВОПРОС№4.3_________

var list = document.getElementById("todo-ol");
var createList = document.getElementById("ToDoid");

btnCreate.onclick = function () {
  var listOfitems = [
    "Buy lemonade",
    "Make toasts",
    "Repair car",
    "Play games",
    "Pet a cat",
  ];

  for (var i = 0; i < listOfitems.length; i++) {
    var listOfitems = listOfitems[i];
    var li = document.createElement("li");
    li.innerHTML = listOfitems;
    ol.append(li);
  }
};
