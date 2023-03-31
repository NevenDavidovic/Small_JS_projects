let count = 0;

const plusButton = document.getElementById("plus");
const initializeCount = document.getElementById("count");
const minusButton = document.getElementById("min");

initializeCount.innerHTML = count;


plusButton.addEventListener("click", () => {
    count++;
    initializeCount.innerText = count;
})

minusButton.addEventListener("click", () => {
    count--;
    initializeCount.innerText = count;
})