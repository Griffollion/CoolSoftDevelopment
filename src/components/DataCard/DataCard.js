import styles from "./DataCard.css";
import { DataCardTemplate } from "./DataCardTemplate";

export function DataCard(obj) {
  this.component = DataCardTemplate.content
    .querySelector("div")
    .cloneNode(true);
  this.component.querySelector(".input__date").value =
    document.querySelector(".myDate").value;
  if (obj.position != "todo") {
    this.component.querySelector(".input__date").setAttribute("disabled", true);
  }
  this.render = function () {
    const body = document.querySelector(".container-global");
    body.append(this.component);
  };
}

export function getInputDataValue(obj) {
  const inputValue = document.querySelector(".input__date");
  const inputCardValue = document.querySelector(".myDate");
  inputValue.addEventListener("change", () => {
    inputCardValue.value = inputValue.value;
    const getKey = JSON.parse(localStorage.getItem("tasksArray"));
    getKey.forEach((ele) => {
      if (ele.id === obj.id) {
        ele.data = inputValue.value;
      }
    });
    localStorage.setItem("tasksArray", JSON.stringify(getKey));
  });
}
