console.log("Script started");

function processForm(event) {
    console.log("click");
    event.preventDefault();

    // get name in element
    let fnameInput = document.getElementById("firstname");
    let firstName = fnameInput.value;
    console.log(firstName)
}