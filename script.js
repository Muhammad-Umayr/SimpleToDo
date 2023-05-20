function getValue() {
    var userValue = document.getElementById("Input").value;
    var listItem = document.createElement("li");
    listItem.innerText = userValue;
    document.getElementById("listOfTask").style.listStyle="none";
    document.getElementById("listOfTask").appendChild(listItem);
  }