const rows=20, cols=10;
let sheets = [[]];
let currentSheet = 0;

function createGrid() {
  const grid=document.getElementById("grid");
  grid.innerHTML="";
  for(let i=0;i<rows*cols;i++){
    let cell=document.createElement("div");
    cell.contentEditable=true;
    cell.className="cell";

    cell.oninput=()=>updateData(i, cell.innerText);

    grid.appendChild(cell);
  }
}

function updateData(i,val){
  sheets[currentSheet][i]=val;
}

function loadSheet(index){
  currentSheet=index;
  const cells=document.querySelectorAll(".cell");
  sheets[index].forEach((v,i)=>cells[i].innerText=v||"");
  renderTabs();
}

function addSheet(){
  sheets.push([]);
  renderTabs();
}

function renderTabs(){
  const tabs=document.getElementById("tabs");
  tabs.innerHTML="";
  sheets.forEach((_,i)=>{
    let t=document.createElement("div");
    t.className="tab"+(i===currentSheet?" active":"");
    t.innerText="Sheet "+(i+1);
    t.onclick=()=>loadSheet(i);
    tabs.appendChild(t);
  });
}

function newFile(){
  sheets=[[]];
  currentSheet=0;
  createGrid();
  renderTabs();
}

createGrid();
renderTabs();

// Local Save
function saveLocal(){
  localStorage.setItem("sv",JSON.stringify(sheets));
  alert("Saved!");
}

function loadLocal(){
  let data=JSON.parse(localStorage.getItem("sv"));
  if(data){ sheets=data; loadSheet(0); }
}

// CSV
function downloadCSV(){
  let cells=document.querySelectorAll(".cell");
  let csv="";
  for(let i=0;i<rows;i++){
    let row=[];
    for(let j=0;j<cols;j++){
      row.push(cells[i*cols+j].innerText);
    }
    csv+=row.join(",")+"\n";
  }
  let blob=new Blob([csv]);
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="sheetverse.csv";
  a.click();
}

// Menu
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("open");
}

// Overlay
function showAbout(){ document.getElementById("overlay").style.display="block"; }
function closeOverlay(){ document.getElementById("overlay").style.display="none"; }
