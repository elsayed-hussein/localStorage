let cName = document.getElementById("curseName");
let cVal = document.getElementById("curseVal");
let cTime = document.getElementById("cursTime");
let saveBtn = document.getElementById("saveAll");
let editBtn = document.getElementById("editAll");
let showData = document.getElementById("showData");
let key = localStorage.length;

saveBtn.addEventListener("click", saveItem);

function check() {
  if (!cName.value) {
    alert("plz but name");
    return false;
  }
  if (!cVal.value) {
    alert("plz but Value");
    return false;
  }
  if (!cTime.value) {
    alert("plz but Time");
    return false;
  }
}

for (let i = 0; i < key; i++) {
  let key = i + 1;
  let show = localStorage.getItem(localStorage.key(i)).split(",");
  showData.innerHTML += `<div id="showText" class="showText" ><span>${key}:</span>  <span> <span>Curs Name:</span>  ${show[0]}.</span>    <span><span>Curs Price:</span>  ${show[1]} EGP.</span>   <span> <span>Curs Time:</span>  ${show[2]} Days.</span> <span><button id="edit" class="edit" >Edit</button></span> <span><button id="Delete" class="Delete" >Delete</button></span> </div>`;
}

let Delete = Array.from(document.querySelectorAll(".Delete"));
Delete.forEach((del) => {
  del.addEventListener("click", () => {
    let rem = Delete.indexOf(del);
    localStorage.removeItem(localStorage.key(rem));
    location.reload();
  });
});

let edit = Array.from(document.querySelectorAll(".edit"));
edit.forEach((edi) => {
  edi.addEventListener("click", () => {
    let edt = edit.indexOf(edi);
    let show = localStorage.getItem(localStorage.key(edt)).split(",");
    cName.value = show[0];
    cVal.value = show[1];
    cTime.value = show[2];

    saveBtn.classList.add("hide");
    editBtn.classList.remove("hide");
    edit.forEach((btn) => {
      btn.classList.add("hide");
    });
    let delBtn = Array.from(document.querySelectorAll(".Delete"));
    delBtn.forEach((dbtn) => {
      dbtn.classList.add("hide");
    });
    editBtn.addEventListener("click", () => {
      let Items = [cName.value, cVal.value, cTime.value];
      localStorage.setItem(localStorage.key(edt), Items);
      saveBtn.classList.remove("hide");
      editBtn.classList.add("hide");
      location.reload();
    });
  });
});
function saveItem() {
  check();
  let Items = [cName.value, cVal.value, cTime.value];
  if (cName.value && cVal.value && cTime.value) {
    localStorage.setItem(key + 1, Items);
    location.reload();
  }
}
