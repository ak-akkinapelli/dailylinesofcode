const data = document.getElementById("ShowNumberofLines");
const current = document.getElementById("currentValue");
let total = 0;
window.onload = () => {
    total = parseInt(localStorage.getItem("currentTotal"))
    if (!total)
    total =0
  data.innerText = `Current line count is ${total}`;
};
function computeLines() {
  total += parseInt(current.value);
  data.innerText = `Current line count is ${total}`;
 
  localStorage.setItem('currentTotal', total)
  return;
}
current.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && parseInt(current.value)) {
    computeLines();
  }
});
