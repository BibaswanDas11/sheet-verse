document.addEventListener("input", e=>{
  if(e.target.classList.contains("cell")){
    let val=e.target.innerText;
    if(val.startsWith("=")){
      try{
        let expr=val.substring(1)
          .replace(/A1/g,1) // simple demo mapping
          .replace(/B1/g,2);

        e.target.innerText=eval(expr);
      }catch{}
    }
  }
});
