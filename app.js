const data = document.getElementById("ShowNumberofLines");
const current = document.getElementById("currentValue");
const timestamp = document.getElementById("timestamp");
//const table = document.getElementById("table");
let total = 0;
let timeArray = [];

function logEntry() {

    let storageArray = localStorage.getItem("storageArray")
  total = parseInt(localStorage.getItem("currentTotal")) || 0;
  data.innerText = `Current line count is ${total}`;
  timeArray = JSON.parse(storageArray) || [];
  timestamp.innerText = storageArray;

  var html = "<table border='1|1'>";
  html+="<td>"+"Lines of code"+"</td>";
    html+="<td>"+"Date"+"</td>";
for (var i = 0; i < timeArray.length; i++) {
    html+="<tr>";
    html+="<td>"+timeArray[i].lines+"</td>";
    html+="<td>"+timeArray[i].time+"</td>";
    
    html+="</tr>";

}
html+="</table>";
timestamp.innerHTML = html;


}

function computeLines() {
  let timeObj = {
    lines: current.value,
    time: Date(),
  };
  timeArray.push(timeObj);
  total += parseInt(current.value);
  data.innerText = `Current line count is ${total}`;
  localStorage.setItem("currentTotal", total);
  localStorage.setItem("storageArray", JSON.stringify(timeArray));
  logEntry();
}

window.onload = () => logEntry();
current.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && parseInt(current.value)) {
    computeLines();
  }
});
