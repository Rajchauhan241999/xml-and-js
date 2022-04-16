const dealers = require("../data/mock_data.json");

const getAllDealers = (term, stay, department, valueTerm) =>
  new Promise((resolve) => {
    let data = dealers;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((dealer) => dealer.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((dealer) => dealer.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((dealer) => dealer.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((dealer) => dealer.email.toLowerCase().includes(valueTerm));
                break;
            case "phone":
                data = data.filter((dealer) => dealer.phone.toLowerCase().includes(valueTerm));
                break;
            case "salary":
                data = data.filter((dealer) => dealer.salary.toLowerCase().includes(valueTerm));
                break;  
            case "department":
                data = data.filter((dealer) => dealer.department.toLowerCase().includes(valueTerm));
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
        data = data.filter((dealer) => dealer.comapny.toLowerCase() === department);
    }
    
    resolve({ code: 200, data: data });
  });

const getDealerById = (id) =>
  new Promise((resolve) => {
    const dealer = dealers.find((dealer) => dealer.id === Number(id.trim()));

    if (dealer) {
        resolve({ code: 200, data: Array(dealer) });
    } else {
        resolve({
            code: 404,
            data: { message: `No car found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllDealers,
  getDealerById,
};