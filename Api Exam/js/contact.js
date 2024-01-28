

$(".some-icons .close .fa-x").on("click",function(){
    $("#Home .some-icons .close .fa-list").removeClass("d-none")
    $("#Home .some-icons .close .fa-x").addClass("d-none")
    $("#Home .linkoflink").hide(1000)
})
$("#Home .some-icons .close .fa-list").on("click",function(){
    $("#Home .some-icons .close .fa-list").addClass("d-none")
    $("#Home .some-icons .close .fa-x").removeClass("d-none")
    $("#Home .linkoflink").show(1000)
})



let inputOne=document.getElementById("in-1")
let inputTwo=document.getElementById("in-2")
let inputThree=document.getElementById("in-3")
let inputFour=document.getElementById("in-4")
let inputFive=document.getElementById("in-5")
let inputSix=document.getElementById("in-6")
let button=document.getElementById("btn")
let Namevalid=document.getElementById("Name")
let Emailvalid=document.getElementById("Email")
let Passwordvalid=document.getElementById("password")
let PhoneValid=document.getElementById("phone")
let ageValid=document.getElementById("age")
console.log(button)



function validationName(){
    var regex=/^[A-Z][a-z]{3,14}$/
    var test=inputOne.value
    if(regex.test(test)==true){
        Namevalid.classList.add("d-none")
        button.setAttribute("disabled",true)
        return true
    }else{
        Namevalid.classList.remove("d-none")
        button.setAttribute("disabled",true)
        return false
    }
}
function validationEmail(){
    var regexTwo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var testTwo=inputTwo.value
    if(regexTwo.test(testTwo)==true){
        Emailvalid.classList.add("d-none")
        button.setAttribute("disabled",true)
        return true
    }else{
       Emailvalid.classList.remove("d-none")
        button.setAttribute("disabled",true)
        return false
    }
}
function validaionPassword() {
    var regexThree = /^\d{6}$/
    var testThree = inputThree.value;
    if(regexThree.test(testThree) === true) {
        Passwordvalid.classList.add("d-none")
        button.setAttribute("disabled",true)
        return true;
    } else {
        Passwordvalid.classList.remove("d-none")
        button.setAttribute("disabled",true)
        return false;
    }
}
function validaionPhone() {
    var regexFour = /^01[0-2]{1}[0-9]{8}$/
    var testFour = inputFive.value;
    if(regexFour.test(testFour) === true) {
        PhoneValid.classList.add("d-none")
        button.setAttribute("disabled",true)
        return true;
    } else {
        PhoneValid.classList.remove("d-none")
        button.setAttribute("disabled",true)
        return false;
    }
}
function validaionAge() {
    var regexFour = /^(1[89]|[2-9]\d)$/
    var testFour = inputSix.value;
    if(regexFour.test(testFour) === true) {
        ageValid.classList.add("d-none")

        button.removeAttribute("disabled")
        return true;
    } else {
        ageValid.classList.remove("d-none")
        button.setAttribute("disabled",true)
        return false;
    }
}




