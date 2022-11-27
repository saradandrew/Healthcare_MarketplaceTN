const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("");
  
    data.forEach((dataRow) => {
      
      let row = tbody.append("tr");
  
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }

var filters = {};

function updateFilters() {

    let modElement = d3.select(this);

    let modValue = modElement.property("value");

    let modId = modElement.attr("id");
  
    if (modValue) = {
        filters[modId] = modValue;
    }
    else {
        delete filters[modId]
    }
  
    filterTable();
  
  }

  function filterTable() {

    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    buildTable(filteredData);
  }

  d3.selectAll("input").on("change", updateFilters);

  buildTable(tableData);