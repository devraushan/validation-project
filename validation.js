const email = document.getElementById("email");
email.addEventListener("input",()=>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please Enter a Valid Email Address \n \"@\" should be there in a valid email");
        email.reportValidity();
    }
    else{
        email.setCustomValidity("")
    }
})
const zipcode = document.getElementById("zipcode")
zipcode.addEventListener('input',()=>{
    if(zipcode.value.length>6){
        zipcode.setCustomValidity("Zip Code must be 6 characters long")
        zipcode.reportValidity()
    }
    else {
        zipcode.setCustomValidity("")
    }
})

const pass1 = document.getElementById("pass1");
pass1.addEventListener("input",()=>{
    let validationArr = "";
    if(!/(?=.*[0-9])/.test(pass1.value)){
       validationArr+="Password Must Contain atleast one Number \n";
    }
    if(!/(?=.*[A-Z])/.test(pass1.value)){
        validationArr+="Password Must Contain atleast One Uppercase Letter\n";
    }
    if(!/(?=.*\W)/.test(pass1.value)){
        validationArr+="Password Must Contain atleast One Special Character\n";
    }
    if(!/(?=.*[a-z])/.test(pass1.value)){
        validationArr+="Password Must Contain atleast One Lowercase Letter\n";
    }
    if(!/(?=.{8,}$)/.test(pass1.value)){
        validationArr+="Password Must be 8 Character long";
    }
    pass1.setCustomValidity(validationArr);
    pass1.reportValidity();
});
const country = document.getElementById("country");
const pass2 = document.getElementById("pass2");
const btn = document.getElementById("submitbtn");
btn.addEventListener("click",(e)=>{
    if(!email.validity.valid){
        email.setCustomValidity("Please Enter Email Correctly");
        email.reportValidity();
        e.preventDefault();
    }
    else{
        email.setCustomValidity("");
    }
    ;
    if(zipcode.value.length!==6){
        zipcode.setCustomValidity("Zipcode Must be 6 Character Long");
        zipcode.reportValidity();
        e.preventDefault();
    }
    else{
        zipcode.setCustomValidity("");
    }
    ;
    if(!pass1.validity.valid){
        pass1.setCustomValidity("Please Enter password correctly");
        pass1.reportValidity();
        e.preventDefault();
    }else if(pass2.value !== pass1.value){
        pass2.setCustomValidity("password did not matched.");
        pass2.reportValidity();
        e.preventDefault();
    }
    else{
        pass1.setCustomValidity("");
        pass2.setCustomValidity("");
    }
    
})