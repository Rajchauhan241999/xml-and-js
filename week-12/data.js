const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};
  
const renderTable = () => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    let data = [
        {
          "id": 1,
          "first_name": "Zerk",
          "last_name": "Collelton",
          "email": "zcollelton0@usa.gov",
          "gender": "Male",
          "ip_address": "58.151.235.207",
          "contact_number": "805-894-1060",
          "city": "Ouanaminthe",
          "state": "null",
          "code": "null",
          "uni": "Universidad Tecnológica del Peru"
        },
        
        {
          "id": 2,
          "first_name": "Gamaliel",
          "last_name": "Dacks",
          "email": "gdacks1@fotki.com",
          "gender": "Male",
          "ip_address": "27.116.70.117",
          "contact_number": "835-163-5870",
          "city": "Sañgay",
          "state": "null",
          "code": "8006",
          "uni": "University of Detroit Mercy"
        },
        {
          "id": 3,
          "first_name": "Bonni",
          "last_name": "Carik",
          "email": "bcarik2@ocn.ne.jp",
          "gender": "Female",
          "ip_address": "138.244.250.224",
          "contact_number": "533-970-1982",
          "city": "München",
          "state": "Bayern",
          "code": "80804",
          "uni": "Fachhochschule für Wirtschaft Berlin"
        },
        {
          "id": 4,
          "first_name": "Saraann",
          "last_name": "Bessant",
          "email": "sbessant3@taobao.com",
          "gender": "Bigender",
          "ip_address": "193.123.218.195",
          "contact_number": "196-898-0476",
          "city": "Mohale’s Hoek",
          "state": "null",
          "code": "null",
          "uni": "University of Namibia"
        },
        {
          "id": 5,
          "first_name": "Rudolf",
          "last_name": "Durrett",
          "email": "rdurrett4@forbes.com",
          "gender": "Non-binary",
          "ip_address": "23.110.12.177",
          "contact_number": "456-425-3853",
          "city": "Evinayong",
          "state": "null",
          "code": "null",
          "uni": "Cape Peninsula University of Technology"
        },
        {
          "id": 6,
          "first_name": "Enrico",
          "last_name": "Buffey",
          "email": "ebuffey5@economist.com",
          "gender": "Male",
          "ip_address": "26.245.23.48",
          "contact_number": "895-418-8737",
          "city": "Carvalhais",
          "state": "Coimbra",
          "code": "3040-662",
          "uni": "Universidad Católica del Uruguay"
        },
        {
          "id": 7,
          "first_name": "Sadye",
          "last_name": "Toth",
          "email": "stoth6@yolasite.com",
          "gender": "Female",
          "ip_address": "235.34.76.12",
          "contact_number": "759-967-8771",
          "city": "Dengzhuang",
          "state": "null",
          "code": "null",
          "uni": "Seton Hall University"
        },
        {
          "id": 8,
          "first_name": "Nester",
          "last_name": "Row",
          "email": "nrow7@buzzfeed.com",
          "gender": "Male",
          "ip_address": "161.146.117.239",
          "contact_number": "762-916-5633",
          "city": "Andalucía",
          "state": "null",
          "code": "763008",
          "uni": "Webber College"
        },
        {
          "id": 9,
          "first_name": "Mavra",
          "last_name": "Dunsford",
          "email": "mdunsford8@reverbnation.com",
          "gender": "Feale",
          "ip_address": "43.146.72.39",
          "contact_number": "958-535-6566",
          "city": "Wuxi",
          "state": "null",
          "code": "null",
          "uni": "Institut Teknologi Adhi Tama Surabaya"
        },
        {
          "id": 10,
          "first_name": "Mona",
          "last_name": "Gregorio",
          "email": "mgregorio9@delicious.com",
          "gender": "Female",
          "ip_address": "39.124.166.69",
          "contact_number": "500-926-4902",
          "city": "Neftegorsk",
          "state": "null",
          "code": "352685",
          "uni": "Ecole pour les Etudes et la Recherche en Informatique et Electronique"
        }
    ]
  
    const withFilters = Boolean(window.location.search);
  
    if (withFilters) {
      const params = new URLSearchParams(window.location.search);
      const valueTerm = params.get(`value`).toLowerCase();
      const inputControl = document.getElementById(`input-term`);
      const filterName = params.get(`filters`).toLowerCase();
      inputControl.value = valueTerm;
  
      switch(filterName) {
        case 'first':
            data = data.filter(({ first_name }) => first_name.toLowerCase().includes(valueTerm));
            break;
        case 'last':
            data = data.filter(({ last_name }) => last_name.toLowerCase().includes(valueTerm));
            break;
        case 'mail':
            data = data.filter(({ email }) => email.toLowerCase().includes(valueTerm));
            break;
        case 'gender':
            data = data.filter(({ gender }) => gender.toLowerCase().includes(valueTerm));
            break;
        case 'ip_address':
            data = data.filter(({ ip_address }) => ip_address.toLowerCase().includes(valueTerm));
            break;
        case 'contact':
                data = data.filter(({ contact }) => contact.toLowerCase().includes(valueTerm));
                break;
        case 'city':
                data = data.filter(({ city }) => city.toLowerCase().includes(valueTerm));
                break;
        case 'state':
                data = data.filter(({ state }) => state.toLowerCase().includes(valueTerm));
                break;
        case 'code':
                data = data.filter(({ code }) => code.toLowerCase().includes(valueTerm));
                break;
        case 'uni':
                data = data.filter(({ uni }) => uni.toLowerCase().includes(valueTerm));
                break;
      }
    
    }
  
    const rows = data.map(({ id, first_name, last_name, email, gender, ip_address,contact, city, state, postal_code, university }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ip_address}</td>
            <td>${contact}</td>
            <td>${city}</td>
            <td>${state}</td>
            <td>${postal_code}</td>
            <td>${university}</td>
          </tr>`
        )
      )
    );
}
  
renderTable();

const resetTable = () => {

    const table = document.getElementById("table-main");
    table.innerHTML = "";
    const inputControl = document.getElementById(`input-term`);
    inputControl.value = "";
    window.location = 'http://127.0.0.1:5500/week-12/data.html'

    let data = [
        {
          "id": 1,
          "first_name": "Zerk",
          "last_name": "Collelton",
          "email": "zcollelton0@usa.gov",
          "gender": "Male",
          "ip_address": "58.151.235.207",
          "contact_number": "805-894-1060",
          "city": "Ouanaminthe",
          "state": "null",
          "code": "null",
          "uni": "Universidad Tecnológica del Peru"
        },
        
        {
          "id": 2,
          "first_name": "Gamaliel",
          "last_name": "Dacks",
          "email": "gdacks1@fotki.com",
          "gender": "Male",
          "ip_address": "27.116.70.117",
          "contact_number": "835-163-5870",
          "city": "Sañgay",
          "state": "null",
          "code": "8006",
          "uni": "University of Detroit Mercy"
        },
        {
          "id": 3,
          "first_name": "Bonni",
          "last_name": "Carik",
          "email": "bcarik2@ocn.ne.jp",
          "gender": "Female",
          "ip_address": "138.244.250.224",
          "contact_number": "533-970-1982",
          "city": "München",
          "state": "Bayern",
          "code": "80804",
          "uni": "Fachhochschule für Wirtschaft Berlin"
        },
        {
          "id": 4,
          "first_name": "Saraann",
          "last_name": "Bessant",
          "email": "sbessant3@taobao.com",
          "gender": "Bigender",
          "ip_address": "193.123.218.195",
          "contact_number": "196-898-0476",
          "city": "Mohale’s Hoek",
          "state": "null",
          "code": "null",
          "uni": "University of Namibia"
        },
        {
          "id": 5,
          "first_name": "Rudolf",
          "last_name": "Durrett",
          "email": "rdurrett4@forbes.com",
          "gender": "Non-binary",
          "ip_address": "23.110.12.177",
          "contact_number": "456-425-3853",
          "city": "Evinayong",
          "state": "null",
          "code": "null",
          "uni": "Cape Peninsula University of Technology"
        },
        {
          "id": 6,
          "first_name": "Enrico",
          "last_name": "Buffey",
          "email": "ebuffey5@economist.com",
          "gender": "Male",
          "ip_address": "26.245.23.48",
          "contact_number": "895-418-8737",
          "city": "Carvalhais",
          "state": "Coimbra",
          "code": "3040-662",
          "uni": "Universidad Católica del Uruguay"
        },
        {
          "id": 7,
          "first_name": "Sadye",
          "last_name": "Toth",
          "email": "stoth6@yolasite.com",
          "gender": "Female",
          "ip_address": "235.34.76.12",
          "contact_number": "759-967-8771",
          "city": "Dengzhuang",
          "state": "null",
          "code": "null",
          "uni": "Seton Hall University"
        },
        {
          "id": 8,
          "first_name": "Nester",
          "last_name": "Row",
          "email": "nrow7@buzzfeed.com",
          "gender": "Male",
          "ip_address": "161.146.117.239",
          "contact_number": "762-916-5633",
          "city": "Andalucía",
          "state": "null",
          "code": "763008",
          "uni": "Webber College"
        },
        {
          "id": 9,
          "first_name": "Mavra",
          "last_name": "Dunsford",
          "email": "mdunsford8@reverbnation.com",
          "gender": "Feale",
          "ip_address": "43.146.72.39",
          "contact_number": "958-535-6566",
          "city": "Wuxi",
          "state": "null",
          "code": "null",
          "uni": "Institut Teknologi Adhi Tama Surabaya"
        },
        {
          "id": 10,
          "first_name": "Mona",
          "last_name": "Gregorio",
          "email": "mgregorio9@delicious.com",
          "gender": "Female",
          "ip_address": "39.124.166.69",
          "contact_number": "500-926-4902",
          "city": "Neftegorsk",
          "state": "null",
          "code": "352685",
          "uni": "Ecole pour les Etudes et la Recherche en Informatique et Electronique"
        }
    ]

    table.append(
        htmlToElement(
            `<tr id="table-main">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>IP Address</th>
                <th>contact</th>
                <th>city</th>
                <th>state</th>
                <th>postal_code</th>
                <th>university</th>
          </tr>`
        )
    );
    
    const rows = data.map(({ id, first_name, last_name, email, gender, ip_address,contact, city, state, postal_code, university  }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ip_address}</td>
            <td>${contact}</td>
            <td>${city}</td>
            <td>${state}</td>
            <td>${postal_code}</td>
            <td>${university}</td>
          </tr>`
        )
      )
    );
}