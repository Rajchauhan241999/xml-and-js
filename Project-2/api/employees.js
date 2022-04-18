const employees = require("../data/mock_data.json");

const getAllemployees = (term, stay, department, valueTerm) =>
  new Promise((resolve) => {
    let data = employees;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((employees) => employees.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((employees) => employees.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((employees) => employees.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((employees) => employees.email.toLowerCase().includes(valueTerm));
                break;
            case "phone":
                data = data.filter((employees) => employees.phone.toLowerCase().includes(valueTerm));
                break;
            case "salary":
                data = data.filter((employees) => employees.salary.toLowerCase().includes(valueTerm));
                break;  
            case "department":
                data = data.filter((employees) => employees.department.toLowerCase().includes(valueTerm));
                break;
            default:
                //Pass it empty
                break;
        }
    }

    // check status
    if(stay && stay != "none") {
        stay = (stay == "stay") ? true : false;
        data = data.filter(({is_stay}) => stay === is_stay);
      }
    
    
    if(department && department != "all") {
        data = data.filter((employees) => employees.comapny.toLowerCase() === department);
    }
    
    resolve({ code: 200, data: data });
  });

const getemployeesById = (id) =>
  new Promise((resolve) => {
    const employees = employees.find((employees) => employees.id === Number(id.trim()));

    if (employees) {
        resolve({ code: 200, data: Array(dealer) });
    } else {
        resolve({
            code: 404,
            data: { message: `No emp found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllemployees,
  getemployeeById,
};