const btns = document.querySelectorAll('button');

btns.forEach((element,index) => {
    element.addEventListener('click', () => {
        if(index !== 1){
           console.log('Incorrecto')
        } else{
            console.log('correcto')
        }
    })
})