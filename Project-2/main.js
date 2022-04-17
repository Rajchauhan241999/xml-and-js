const { getAllemployees, getDealerById } = require("./api/employees");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, email, gender, phone, salary, department}) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${phone}</td>
        <td>${salary}</td>
        <td>${department}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};



getAllemployees().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;
  const department = event.target.department.value;
  const valueTerm = event.target.input.value;
  const stay = event.target.stay.value;
  
  if(term === `id`) {
    getDealerById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllemployees(term,stay, department.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllemployees().then(({ data }) => renderTable(data));
};

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);