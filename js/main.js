// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*--------------
    FUNZIONI
----------------*/
// GENERA NUMERI RANDOMICI 
function randomInteger(min,max){
    return Math.floor(Math.random()* (max - min + 1)) +1 ;
}

function countDown(){
    let y = 5;
    const container = document.querySelector(".container");
    const countNumber = document.createElement("div");
    let countdown = setInterval(function(){
            console.log(y);
            countNumber.classList.add("countdown_box");
            countNumber.innerHTML= y;
            container.append(countNumber);
            
            if (y == 0){
                countNumber.style.display = "none";
                clearInterval(countdown);
                createInput();
            } 
            y--;
            
    },1000)
}

function createInput(){
    
    submit.classList.remove("display_none");
    submit.classList.add("btn_custom")
    let boxInput = document.querySelector(".box_input");
    const result = document.querySelector(".result");
    let guessed = 0;
    for (i=0; i<5 ;i++){
        let userInput = document.createElement("input");
        userInput.classList.add("user_input");
        userInput.setAttribute("type","number");
        boxInput.append(userInput);
        
        
        submit.addEventListener("click", function(){
            let x = userInput.value;
            x = parseFloat(x);
            userNumbers.push(x);
            console.log("array utente",userNumbers);
            if (numbers.includes(x)){
                userInput.style.background = "lightgreen";
                guessed ++ ;
                console.log("numero uguale");
            } else {
                userInput.style.background = "red";
            }
        })  
        
    }
    // console.log("array utente",userNumbers);
    // confronto();
}

function confronto(){
    for (i=0; i < n ;i++){
        x = userNumbers;
       
    }
}




/*--------------
    MAIN
----------------*/
let numbers = [];
let i = 0 ;
const n = 5;
let userNumbers = [];
const submit = document.getElementById("submit");
submit.classList.add("display_none");
const btn = document.querySelector(".btn_custom");
const btnBox = document.querySelector(".box_btn")
let numberList = document.querySelector(".numberlist");
numberList.classList.add("display_none")


// 1-genero dei numeri casuali (passandoli in un array)
while( numbers.length < n){
    let number = randomInteger(1,20);
    if ( numbers.includes(number) === false ){
        numbers.push(number);
    } 
}
console.log(numbers)
// 2-visualizzo i seguenti numeri su schermo per un tot di secondi e assegno display none ; 
btn.addEventListener("click",function(){
    btn.classList.add("display_none");
    btnBox.classList.add("display_none");
    numberList.classList.remove("display_none");
    for (i=0; i<numbers.length ;i++){
        const boxNumber = document.createElement("div");
        boxNumber.classList.add("box_style");
        boxNumber.innerHTML = numbers[i];
        numberList.append(boxNumber);
    }
    i = 0;
    const timerNumber = setInterval(function(){
        console.log(i);
        i++;
        if(i == 2){
            clearInterval(timerNumber);
            numberList.classList.add("display_none");
            
            // 3-countdown 30 secondi 
            countDown();
        }
},1000)

})



