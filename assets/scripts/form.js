const btnNext = document.querySelector(".form__btn");

btnNext.addEventListener("click", () => {
    const firstName = document.querySelector("#firstName");
    const age = document.querySelector("#age");
    const address = document.querySelector("#address");
    const cell = document.querySelector("#cell");
    const email = document.querySelector("#email");
    const urgent = document.querySelector("#urgent");
    const message = document.querySelector("#message");

    const errorMessage = document.querySelector("#errorMessage");
    message.innerHTML = "";

    //form validation
    if (!isFormValid(firstName, age, address, cell, email, message)) {
        errorMessage.innerHTML +=
            "Oops! your are missing something! Please make sure all the info is provided";
    } else {
        Swal.fire({
            title: "Awesome!",
            text: `${firstName.value} Thank you!`,
            imageUrl: "https://images.unsplash.com/photo-1600986600826-aa5b82e73a65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "image",
        });
    }
});

function isValidEntry(info) {
    return info.value.trim() !== "";
}

function isFormValid(firstName, age, address, cell, email, message) {
    return (
        isValidEntry(firstName) &&
        isValidEntry(age) &&
        isValidEntry(address) &&
        isValidEntry(cell) &&
        isValidEntry(email) &&
        isValidEntry(message)
    );
}