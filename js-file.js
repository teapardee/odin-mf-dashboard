/* Populate Table */

const fundDetails = [
  {
    detailType: "Fund Inception",
    value: "01/31/1990",
  },
  {
    detailType: "Category",
    value: "Aggressive Growth",
  },
  {
    detailType: "Management Style",
    value: "Passive",
  },
  {
    detailType: "Shares Outstanding",
    value: "860,977,443.60",
  },
  {
    detailType: "Price to Earnings Ratio",
    value: 12.8,
  },
  {
    detailType: "Price to Cash Flow",
    value: "8.14%",
  },
  {
    detailType: "Return to Equity",
    value: "23.07%",
  },
  {
    detailType: "Price to Book Ratio",
    value: 2.1,
  },
  {
    detailType: "Weighted Average Market Capitalization",
    value: "$271.92B",
  },
];

var details = document.querySelector(".fund-details");
var table = document.createElement("table");
var tbody = document.createElement("tbody");

details.appendChild(table);
table.appendChild(tbody);

for (i = 0; i < 9; i++) {
  var tableRow = document.createElement("tr");
  var cellDetailType = document.createElement("td");
  var cellValue = document.createElement("td");

  cellDetailType.innerHTML = `${fundDetails[i].detailType}`;
  cellValue.innerHTML = `${fundDetails[i].value}`;

  tbody.appendChild(tableRow);
  tableRow.appendChild(cellDetailType);
  tableRow.appendChild(cellValue);
}
