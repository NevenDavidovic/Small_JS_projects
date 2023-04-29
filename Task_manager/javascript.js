// Declaring variables so we can use them

const btnAddButton = document.querySelector("button");
const inputEl = document.querySelector("input");
const elList = document.querySelector("ul");

btnAddButton.addEventListener("click", function () {
  //value of the input element stored in variable called inputValue
  const inputValue = inputEl.value;
  // Creating new list item and the variable listItemEl points to it
  const listItemEl = document.createElement("li");
  // davanje vrijednosti elementu tako da se vrijednost očita u htmlu
  listItemEl.textContent = inputValue;
  // dodavanje listi elList(<ul></ul>)
  elList.appendChild(listItemEl);
  inputEl.value = "";
});

// RESET FUNCTION

btnReset = document.querySelector(".reset");

btnReset.addEventListener("click", function () {
  while (elList.firstChild != "") {
    elList.removeChild(elList.firstChild);
  }
});

// export button
// export button
const exportButton = document.querySelector("#exportButton");

exportButton.addEventListener("click", function () {
  // Convert the list items to a plain text string
  const items = Array.from(elList.children).map((item) => item.textContent);
  const plainText = items.join("\n");

  // Create a Blob object with the plain text data
  const blob = new Blob([plainText], { type: "text/plain" });

  // Create a download link and click it programmatically to download the text file
  const link = document.createElement("a");
  link.download = "tasks.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
});
