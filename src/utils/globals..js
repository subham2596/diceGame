export const removeSelection = () => {
    let numbersContainer = document.querySelector(".numbersContainer");
    let alreadySelectedNumber = numbersContainer.querySelector(".bg-black")
    if(alreadySelectedNumber) {
        alreadySelectedNumber.classList.remove("bg-black", "text-white")
    }
}