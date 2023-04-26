(function(){
    const titleQuestions=[...document.querySelectorAll(".questions__title")];/*creo un arreglo con los archivos que tengan la clase .questions__title*/
    console.log(titleQuestions);
    titleQuestions.forEach(question =>{ /**para obtener las preguntas individualment */
        question.addEventListener('click',()=>{
            // alert("me diste clic");
            let height=0;
            let answer=question.nextElementSibling; /*para obtener el siguiente elemento que es el parrafo*/
            let addPadding=question.parentElement.parentElement;/**el elemento padre del elemento padre de cada pregunta, que es questions__padding */
            addPadding.classList.toggle("questions__padding--add")/**toggle: si la clase existe la elimina y devuelve false, si no, la añade y devuelve true*/
            question.children[0].classList.toggle("questions__arrow--rotate");
            // console.log(answer.clientHeight);
            if(answer.clientHeight===0){
                height=answer.scrollHeight;/**scrollHeight nos da el alto minimo para q un elemento se muestre, no incluye padding y borde */
            }
            answer.style.height=`${height}px`;
        });
    });

})();