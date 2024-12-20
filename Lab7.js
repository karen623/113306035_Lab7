function addRow() {
  const mathInput = document.getElementById("math");
  const englishInput = document.getElementById("english");
  // store values in math or english
  const tableBody = document.querySelector("#scoresTable tbody");
  // store in tbody
  const mathScore = Number(mathInput.value);
  const englishScore = Number(englishInput.value);
  // transfer stored values into numbers
  if (isNaN(mathScore) || isNaN(englishScore)) {
    alert("請問分數不是填數字還能填什麼？蛤？");
    return;
  // isNaN: is not a number
  }
  const average = ((mathScore + englishScore) / 2).toFixed(2);
  // toFixed(2): 保留小數點後兩位
  const newRow = document.createElement("tr");
  // create a new row
  newRow.innerHTML = `
    <td>${tableBody.children.length + 1}</td>
    <td>${mathScore}</td>
    <td>${englishScore}</td>
    <td>${average}</td>
  `;
  // `:mostly used in the condition of 多行字串 and 字串插值
  tableBody.appendChild(newRow);
  // add newRow into tbody
  updateAverages();
  mathInput.value = "";
  englishInput.value = "";
}

function updateAverages() {
  const rows = document.querySelectorAll("#scoresTable tbody tr");
  let mathSum = 0, englishSum = 0;

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    mathSum += Number(cells[1].textContent);
    englishSum += Number(cells[2].textContent);
    // 累加英文和數學的分數
  })
  const mathAvg = (mathSum / rows.length).toFixed(2);
  const englishAvg = (englishSum / rows.length).toFixed(2);
  const totalAvg = ((Number(mathAvg) + Number(englishAvg)) / 2).toFixed(2);

  document.getElementById("mathAvg").textContent = mathAvg;
  document.getElementById("englishAvg").textContent = englishAvg;
  document.getElementById("totalAvg").textContent = totalAvg;
}
