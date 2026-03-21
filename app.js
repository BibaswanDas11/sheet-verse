document.addEventListener("DOMContentLoaded", () => {

  const saved = localStorage.getItem("sheetVerseData");

  luckysheet.create({
    container: 'luckysheet',
    showinfobar: false,
    data: saved ? JSON.parse(saved) : [{}]
  });

  // Auto save
  setInterval(() => {
    localStorage.setItem("sheetVerseData",
      JSON.stringify(luckysheet.getAllSheets()));
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

// FILE
function newFile(){
  if(confirm("Clear sheet?")){
    luckysheet.destroy();
    luckysheet.create({ container:'luckysheet', data:[{}] });
  }
}

function saveLocal(){
  localStorage.setItem("sheetVerseData",
    JSON.stringify(luckysheet.getAllSheets()));
  alert("Saved!");
}

function renameFile(){
  let name = prompt("File name:");
}

// DARK
function toggleDark(){
  document.body.classList.toggle("dark");
}

// TOOLBAR FUNCTIONS
function format(type){
  if(type==="bold") luckysheet.setRangeFormat("bl", true);
  if(type==="italic") luckysheet.setRangeFormat("it", true);
  if(type==="underline") luckysheet.setRangeFormat("un", true);
}

function setFont(size){
  luckysheet.setRangeFormat("fs", size);
}

function mergeCells(){
  luckysheet.setRangeFormat("mc", { r:0,c:0,rs:1,cs:2 });
}

function clearCell(){
  luckysheet.clearRange();
      }
