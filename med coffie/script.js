function orderNow(message){
    alert(message +", thank you.");


}


document.getElementById("form").addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(!name.value || name.value.trim().length < 3){
        return alert("name required");
    }

    if(!email.value || email.value.trim().length <= 3){
        return alert("email required");
    }
    if(!message.value || message.value.trim().length <= 5){
        return alert("Message must be more than 5 characters");
    }


    let successMessage = document.getElementById("successMessage");
    successMessage.style.display = "flex";


    successMessage.textContent = "sending...";

    setTimeout(() => {
                 successMessage.textContent = "message sent successfully, thank you.";

    }, 1000);



    setTimeout(() => {
        successMessage.style.display = "none";

    }, 2000);

})