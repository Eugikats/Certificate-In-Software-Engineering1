console.log("Wooooo")
const Validate = ()=>{
    //picking inputs
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let gender = document.register.gender
    let state = document.register.state
    let Town = document.register.Town


    //picking error sections
    let firstNameError = document.getElementById("fnameErr")
    let lastNameError = document.getElementById("lnameErr")
    let genderError = document.getElementById("genderErr")
    let TownError = document.getElementById("townErr")

    // validating first name emptiness
    if(firstName.value==""){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please, first name can not be empty"
        firstNameError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
      }
      // validating first name min length
      else if(firstName.value.length < 2) {
        firstName.style.border = "1px solid red"
          firstNameError.innerHTML = "Please the first name must be atleast 2 letters"
          firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          return false;
      }
      // validating firstname max length
      else if(firstName.value.length > 255) {
        firstName.style.border = "2px solid red"
        firstNameError.innerHTML = "First Name must be below 255 characters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
      } else{
        firstName.style.border = "2px solid green"
        firstNameError.innerHTML = ""
      }
  
      //validating last name emptiness
      if(lastName.value == ""){
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please last name can not be empty"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          return false;
      }
      // validating last name min length
    else if(lastName.value.length < 2)
      {
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please the last name must be atleast 2 letters"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          return false;
      }
      // validating last name for maximum length
      else if(lastName.value.length > 255){
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please the last name must be less than 255 letters"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          return false;
      }
     else{
      lastName.style.border = "2px solid green"
      lastNameError.innerHTML = ""
    }

  if(state.value==""){
    state.style.border = "1px solid red"
    stateError.innerHTML = "Please, first name can not be empty"
    stateError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  else{
    state.style.border = "2px solid green"
    stateError.innerHTML = ""
  }

  if(Town.value==""){
    Town.style.border = "1px solid red"
    TownError.innerHTML = "Please, first name can not be empty"
    TownError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  else{
    Town.style.border = "2px solid green"
    TownError.innerHTML = ""
  }
  return true;
}

const success = ()=>{
 alert("FORM HAS BEEN SUCCESSFULLY SUBMITTED")
}