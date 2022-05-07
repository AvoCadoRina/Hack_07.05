const btnNext = document.querySelector(".form__btn");
let data = [];

btnNext.addEventListener("click", () => {
    const firstName = document.querySelector("#firstName");
    const age = document.querySelector("#age");
    const address = document.querySelector("#address");
    const cell = document.querySelector("#cell");
    const email = document.querySelector("#email");
    const urgent = document.querySelector("#urgent").checked;
    const message = document.querySelector("#message");

    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.innerHTML = "";

    // form validation
    if (!isFormValid(firstName, age, address, cell, email, message)) {
        errorMessage.innerHTML +=
            "Oops! your are missing something! Please make sure all the info is provided";
    } else {
        firstName.value = "";
        age.value = "";
        message.value = "";
        urgent.checked = false;
        address.value = "";
        cell.value = "";
        email.value = "";

        Swal.fire({
            title: "Awesome!",
            text: `${firstName.value} Thank you!`,
            imageUrl: "https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhhbmslMjB5b3V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "image",
        });

        //adding data to the object:
        data = [
            ...data,
            {
                name: firstName,
                age: age,
                text: message,
                time: new Date(),
                urgently: urgent,
                address: address,
                phone: cell,
                email: email,
            },
        ];

        console.log(data);
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