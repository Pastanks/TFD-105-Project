//  三花喵老全選

let check_all = document.getElementById("check_all");
check_all.addEventListener("click", function () {
  let main_check = check_all;
  let all_items = document.querySelectorAll(".three_cat");
  all_items.forEach(function (item, i) {
    item.checked = check_all.checked;
  });
});
let all_items = document.querySelectorAll(".three_cat");
all_items.forEach(function (item, i) {
  item.addEventListener("click", function () {
    let checked_length = document.querySelectorAll(".three_cat:checked").length;
    let all_length = document.querySelectorAll(".three_cat").length;
    if (checked_length == all_length) {
      check_all.checked = true;
    } else {
      check_all.checked = false;
    }
  });
});

// 選單判斷
let datesent = document.getElementById("submitin");
submitin.addEventListener("click", function (e) {
  e.preventDefault();
  let date = document.getElementById("date").value;
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  let datecheck = JSON.parse(localStorage.getItem("date"));
  let task = date;
  let form = JSON.parse(localStorage.getItem("form"));
  if (name1 == "") {
    return alert("姓名未填寫");
  } else if (name2 == "") {
    return alert("電話未填寫");
  }
  if (form) {
    let isExisted = form.includes(date);
    if (isExisted) {
      return alert("您已預約此日期，請重新選擇");
    } else {
      form.unshift(task);
    }
  } else {
    form = [task];
  }
  localStorage.setItem("form", JSON.stringify(form));
});
