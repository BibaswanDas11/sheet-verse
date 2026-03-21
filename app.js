let fileName = "Untitled";

document.addEventListener("DOMContentLoaded", () => {

  const saved = localStorage.getItem("sheetVerseData");

  luckysheet.create({
    container: 'luckysheet',
    showinfobar: false,
    data: saved ? JSON.parse(saved) : [{}]
  });

  // Auto save
  setInterval(() => {
    const data = luckysheet.getAllSheets();
    localStorage.setItem("sheetVerseData", JSON.stringify(data));
  }, 2000);

});

// MENU
function toggleMenu(){
  document.getElementById("menu").style.display="block";
}

function closeMenu(e){
  if(e.target.id==="menu"){
    document.getElementById("menu").style.display="none";
  }
}

// ABOUT
function showAbout(){
  document.getElementById("about").style.display="block";
}

function closeAbout(e){
  if(e.target.id==="about"){
    document.getElementById("about").style.display="none";
  }
}

// FILE ACTIONS
function newFile(){
  if(confirm("Clear sheet?")){
    luckysheet.destroy();
    luckysheet.create({ container:'luckysheet', data:[{}] });
  }
}

function saveLocal(){
  const data = luckysheet.getAllSheets();
  localStorage.setItem("sheetVerseData", JSON.stringify(data));
  alert("Saved!");
}

function renameFile(){
  let name = prompt("Enter file name:", fileName);
  if(name) fileName = name;
}

// DARK MODE
function toggleDark(){
  document.body.classList.toggle("dark");
}
