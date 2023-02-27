function AddItem() {
  var inputText = document.getElementById("textbox").value;
  var grid = document.getElementById("grid");
  var newDiv = document.createElement("div");
  if (inputText == "") {
    alert("Please enter a value");
    return;
  } else {
    newDiv.innerHTML = inputText;
    newDiv.classList.add("grid-item");
    grid.appendChild(newDiv);
    document.getElementById("textbox").value = "";
  }

}

function RemoveItems() {
  var grid = document.getElementById("grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}