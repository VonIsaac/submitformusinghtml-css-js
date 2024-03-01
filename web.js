//adding Variable 
const inputText = document.querySelector('.input-text');
const inputEmail = document.querySelector('.input-email');
const inputSubject = document.querySelector('.input-subject');
const inputMessage = document.querySelector('.input-message')
const inputBtn = document.querySelector('.input-btn')

//calling the container
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.container-2')

//creating event

inputBtn.addEventListener('click', function(e){
    e.preventDefault();


    if(inputText.value === '' || inputEmail.value === '' || inputSubject.value === '' || inputMessage.value === ''){
        alert(" Message Invalid")
    }else{
        container1.classList.remove('container1');
        container1.classList.add('container2');
        container2.style.display = 'block'
        container1.style.display = 'none'
    }
   



})
