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

var createList = document.getElementById("ToDoid");

createList.onclick = function () {
  var list = document.getElementById("todo-ol");
  var listOfitems = [
    "Buy lemonade",
    "Make toasts",
    "Repair car",
    "Play games",
    "Pet a cat",
  ];

  for (var i = 0; i < listOfitems.length; i++) {
    var li = listOfitems[i];
    var li = document.createElement("li");
    li.className = "question-item";
    li.innerHTML = listOfitems[i];
    list.appendChild(li);
  }
};
var p_element = document.querySelectorAll(".set-hr");
var button_hr = document.getElementById("btn-hr");

button_hr.onclick = function () {
  var hr = createElement("hr");
  for (let i = 0; i < p_element.length; i++) {
    let ls = p_element[i];
    hr.appendChild(ls);
    console.log(hr);
  }
};

//_________ВОПРОС№5_________
var lastQua = document.querySelectorAll(".item");
var lastQua2 = document.getElementById("last_btns");

lastQua2.addEventListener("click", (e) => {
  lastQua.forEach((item) => {
    if (item.innerHTML === "Cola 1.5 l. x 1") {
      item.remove();
    }
    if (item.innerHTML === "Chocolate bar x 3") {
      item.innerHTML = "Canned Fish x 4";
    }
  });
});
