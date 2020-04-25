let correctAnswers= ["Betty", "Nicolás", "Roberto", "Marce", "Patricia", "Michelle"]

function welcomeGreetings() { 
    let textValue = document.getElementById("text_value").value; 
    let responseGreetings = document.getElementById("response_greetings");
    /* If the name value is empty, greets with a default msj*/
    textValue === ""
      ? (responseGreetings.innerHTML = "Bienvenido Invitado")
      : (responseGreetings.innerHTML = "Bienvenido " + textValue);
    document.getElementById("home").style.display = "none";
  }
  
  
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
  
  // Refactor this:
  
  
  function resultsFirstCat(){
    let correct=0;
    let incorrect=0;
    let check_1 = document.querySelector('input[name="check_1"]:checked').value;
    let check_2 = document.querySelector('input[name="check_2"]:checked').value;
    let check_3 = document.querySelector('input[name="check_3"]:checked').value;
    correctAnswers.includes(check_1) ? correct++ : incorrect++;
    correctAnswers.includes(check_2) ? correct++ : incorrect++;
    correctAnswers.includes(check_3) ? correct++ : incorrect++;
    
    return document.getElementById("counter_first").innerHTML= "Correctas " + correct + "  Incorrectas " + incorrect ;
  }

  function resultsSecondCat(){
    let correct=0;
    let incorrect=0;
    let check_4 = document.querySelector('input[name="check_4"]:checked').value;
    let check_5 = document.querySelector('input[name="check_5"]:checked').value;
    let check_6 = document.querySelector('input[name="check_6"]:checked').value;
    correctAnswers.includes(check_4) ? correct++ : incorrect++;
    correctAnswers.includes(check_5) ? correct++ : incorrect++;
    correctAnswers.includes(check_6) ? correct++ : incorrect++;
    return document.getElementById("counter_second").innerHTML= "Correctas " + correct + "  Incorrectas " + incorrect ;
  }