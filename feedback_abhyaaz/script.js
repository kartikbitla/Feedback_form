let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let emailEl = document.getElementById("email");
let contactEl = document.getElementById("contact");
let studentIdEl = document.getElementById("student_id");
let feedbackEl = document.getElementById("feedback");
let submitEl = document.getElementById("submit");
let formsEl = document.getElementById("forms");
let headEl = document.getElementById("head");
let another_feedbackEl = document.getElementById("another_feedback");
let errorMsgEl = document.getElementById("errorMsg");
another_feedbackEl.style.display = "none";

submitEl.addEventListener("click", function(){
    if(fnameEl.textContent == "" || lnameEl.textContent == "" || emailEl.textContent=="" || contactEl.textContent=="" || studentIdEl.textContent=="" ||
    feedbackEl.textContent==""){
        errorMsgEl.style.display = "block";
    }else{
        errorMsgEl.style.display = "none";
        formsEl.style.display = "none";
        another_feedbackEl.style.display = "block";
        headEl.textContent = "Thank you for your Valuable Feedback";    

        another_feedbackEl.addEventListener("click", function(){
            formsEl.style.display = "block";
            another_feedbackEl.style.display = "none";
            headEl.textContent = "Help us Improve";
        })
    }



    
})