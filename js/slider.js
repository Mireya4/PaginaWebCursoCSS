(function(){
  const sliders=[...document.querySelectorAll(".testimony__body")];
  const buttonNext=document.querySelector("#next");
  const buttonBefore=document.querySelector("#before");
  let value;
  buttonNext.addEventListener('click',()=>{
    changePosition(1);
  });
  buttonBefore.addEventListener('click',()=>{
    changePosition(-1);
  });
  const changePosition=(add)=>{
    const currenTestimony=document.querySelector(".testimony__body--show").dataset.id;
    value=Number(currenTestimony);
    // console.log(value);
    value+=add;
 
    sliders[Number(currenTestimony)-1].classList.remove("testimony__body--show")
    if(value===sliders.length+1 || value===0){
      value=value===0 ? sliders.length : 1; /*si value = 0(que cuando regreso desde el primer testimonio) entonces hago que valga 4(sliders.length) para que se vaya al ultimo testimonio, caso contario(:) valdrá 1(ptimer testimonio)*/ 
    }
    // console.log(value);
    sliders[value-1].classList.add("testimony__body--show");

  }
})();
