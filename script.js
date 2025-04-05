function clickSubmitButton(event){
    event.preventDefault();
    const Username=document.getElementById("Username").value;
    const WelcomeMessage=document.getElementById("WelcomeMessage");
    WelcomeMessage.textContent="Welcome, " +Username + '!';
    WelcomeMessage.style.display="block";

}