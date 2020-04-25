// función que guarda el nombre del usuario y lo muestra en saludo
function welcomeGreetings() {
    let textValue = document.getElementById("text_value").value; //capture name
    let responseGreetings = document.getElementById("response_greetings");
    /* If the name value is empty, greets with a default msj*/
    textValue === ""
      ? (responseGreetings.innerHTML = "Bienvenido Invitado")
      : (responseGreetings.innerHTML = "Bienvenido " + textValue);
    document.getElementById("home").style.display = "none";
  }
  
  // funcion que muestra u oculta categorías
  
  function selectCategories() {
    let firstCat = document.getElementById("first_cat");
    let secondCat = document.getElementById("second_cat");
    let selection = document.querySelector('input[name="check"]:checked').value;
  
    if (selection == "first_cat"){
      secondCat.style.display="none"
      firstCat.style.display="block"
    } else if  ( selection == "second_cat"){
      firstCat.style.display="none"
      secondCat.style.display="block"
    } 
  
  }
  
  // Array de respuestas correctas:
  
  
  function results(){
    let correctAnswers= ["Betty", "Nicolás", "Roberto", "Marce", "Patricia", "Michelle"]
    let correct=0;
    let incorrect=0;
    let check_1 = document.querySelector('input[name="check_1"]:checked').value;
    let check_2 = document.querySelector('input[name="check_2"]:checked').value;
    let check_3 = document.querySelector('input[name="check_3"]:checked').value;

    
    correctAnswers.includes(check_1) ? correct++ : incorrect++;
    correctAnswers.includes(check_2) ? correct++ : incorrect++;
    correctAnswers.includes(check_3) ? correct++ : incorrect++;

    // if(correctAnswers.includes(check_1)){
    //   correct++
      
    // } else {
    //     incorrect++
    // }
    return document.getElementById("counter").innerHTML= "Correctas " + correct + "  Incorrectas " + incorrect ;
  }