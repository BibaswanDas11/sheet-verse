document.addEventListener("DOMContentLoaded", () => {

  const saved = localStorage.getItem("sheetVerseData");

  luckysheet.create({
    container: 'luckysheet',

    /* 🔥 IMPORTANT: enable full toolbar */
    showtoolbar: true,
    showinfobar: false,

    data: saved ? JSON.parse(saved) : [{}]
  });

  // Auto Save
  setInterval(() => {
    localStorage.setItem("sheetVerseData",
      JSON.stringify(luckysheet.getAllSheets()));
  }, 2000);

});

// MENU
function openMenu(){
  document.getElementById("menu").classList.add("open");
}

document.addEventListener("click", function(e){
  const menu = document.getElementById("menu");

  if(menu.classList.contains("open")){
    if(!e.target.closest(".menu-content") && !e.target.closest(".menu-btn")){
      menu.classList.remove("open");
    }
  }
});

// ABOUT
function showAbout(){
  document.getElementById("about").style.display="block";
}

function closeAbout(){
  document.getElementById("about").style.display="none";
}

// FILE
function newFile(){
  if(confirm("Clear sheet?")){
    luckysheet.destroy();
    luckysheet.create({
      container:'luckysheet',
      showtoolbar:true,
      data:[{}]
    });
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
