const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
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
          "first_name": "Raj",
          "last_name": "Chauhan",
          "email": "raj@odnoklassniki.ru",
          "gender": "Male",
          "ip_address": "143.237.191.245",
          "city": "scarborough",
          "state":"ON",
          "country":"Canada"
        },
        {
            "id": 2,
            "first_name": "mohini",
            "last_name": "patel",
            "email": "mohini@paginegialle.it",
            "gender": "Male",
            "ip_address": "144.2.126.19",
            "city": "etobicoke",
            "state":"ON",
            "country":"Canada"
          },
          {
            "id": 3,
            "first_name": "Mirul",
            "last_name": "Patel",
            "email": "mirul@fastcompany.com",
            "gender": "Male",
            "ip_address": "147.85.27.165",
            "city": "scarborough",
            "state":"ON",
            "country":"Canada"
            

          },
          {
            "id": 4,
            "first_name": "vidhi",
            "last_name": "Patel",
            "email": "vidhi@ox.ac.uk",
            "gender": "Male",
            "ip_address": "22.201.167.239",
            "city": "etobicoke",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 5,
            "first_name": "Alida",
            "last_name": "Macias",
            "email": "amacias4@slate.com",
            "gender": "Female",
            "ip_address": "166.62.41.24",
            "city": "toronto",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 6,
            "first_name": "Tess",
            "last_name": "Sainte Paul",
            "email": "tsaintepaul5@xinhuanet.com",
            "gender": "Female",
            "ip_address": "58.80.74.111",
            "city": "etobicoke",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 7,
            "first_name": "Germaine",
            "last_name": "Winnett",
            "email": "gwinnett6@parallels.com",
            "gender": "Genderqueer",
            "ip_address": "224.15.42.167",
            "city": "brampton",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 8,
            "first_name": "Mei",
            "last_name": "Swansbury",
            "email": "mswansbury7@uol.com.br",
            "gender": "Female",
            "ip_address": "191.235.203.177",
            "city": "brampton",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 9,
            "first_name": "Brietta",
            "last_name": "Greenfield",
            "email": "bgreenfield8@qq.com",
            "gender": "Male",
            "ip_address": "72.108.253.70",
            "city": "scarborough",
            "state":"ON",
            "country":"Canada"

          },
          {
            "id": 10,
            "first_name": "Guinna",
            "last_name": "Dagnan",
            "email": "gdagnan9@thetimes.co.uk",
            "gender": "Female",
            "ip_address": "108.233.202.64",
            "city": "north york",
            "state":"ON",
            "country":"Canada"

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
        case 'fname':
            data = data.filter(({ first_name }) => first_name.toLowerCase().includes(valueTerm));
            break;
        case 'lname':
            data = data.filter(({ last_name }) => last_name.toLowerCase().includes(valueTerm));
            break;
        case 'email':
            data = data.filter(({ email }) => email.toLowerCase().includes(valueTerm));
            break;
        case 'gender':
            data = data.filter(({ gender }) => gender.toLowerCase().includes(valueTerm));
            break;
        case 'ip_address':
            data = data.filter(({ ip_address }) => ip_address.toLowerCase().includes(valueTerm));
            break;
            case 'city':
            data = data.filter(({ city }) => city.toLowerCase().includes(valueTerm));
            break;
            case 'state':
            data = data.filter(({ state }) => state.toLowerCase().includes(valueTerm));
            break;
            case 'country':
            data = data.filter(({ country }) => country.toLowerCase().includes(valueTerm));
            break;

      }
    
    }
  
    const rows = data.map(({ id, first_name, last_name, email, gender, ip_address, city, state, country  }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ip_address}</td>
            <td>${city}</td>
            <td>${state}</td>
            <td>${country}</td>
          </tr>`
        )
      )
    );
};
  
renderTable();

const resetTable = () => {

    const table = document.getElementById("table-main");
    table.innerHTML = "";
    const inputControl = document.getElementById(`input-term`);
    inputControl.value = "";
    window.location = 'http://127.0.0.1:5500/week-12/index1.html'

    let data = [
      {
        "id": 1,
        "first_name": "Raj",
        "last_name": "Chauhan",
        "email": "raj@odnoklassniki.ru",
        "gender": "Male",
        "ip_address": "143.237.191.245",
        "city": "scarborough",
        "state":"ON",
        "country":"Canada"
      },
      {
          "id": 2,
          "first_name": "mohini",
          "last_name": "patel",
          "email": "mohini@paginegialle.it",
          "gender": "Male",
          "ip_address": "144.2.126.19",
          "city": "etobicoke",
          "state":"ON",
          "country":"Canada"
        },
        {
          "id": 3,
          "first_name": "Mirul",
          "last_name": "Patel",
          "email": "mirul@fastcompany.com",
          "gender": "Male",
          "ip_address": "147.85.27.165",
          "city": "scarborough",
          "state":"ON",
          "country":"Canada"
          

        },
        {
          "id": 4,
          "first_name": "vidhi",
          "last_name": "Patel",
          "email": "vidhi@ox.ac.uk",
          "gender": "Male",
          "ip_address": "22.201.167.239",
          "city": "etobicoke",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 5,
          "first_name": "Alida",
          "last_name": "Macias",
          "email": "amacias4@slate.com",
          "gender": "Female",
          "ip_address": "166.62.41.24",
          "city": "toronto",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 6,
          "first_name": "Tess",
          "last_name": "Sainte Paul",
          "email": "tsaintepaul5@xinhuanet.com",
          "gender": "Female",
          "ip_address": "58.80.74.111",
          "city": "etobicoke",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 7,
          "first_name": "Germaine",
          "last_name": "Winnett",
          "email": "gwinnett6@parallels.com",
          "gender": "Genderqueer",
          "ip_address": "224.15.42.167",
          "city": "brampton",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 8,
          "first_name": "Mei",
          "last_name": "Swansbury",
          "email": "mswansbury7@uol.com.br",
          "gender": "Female",
          "ip_address": "191.235.203.177",
          "city": "brampton",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 9,
          "first_name": "Brietta",
          "last_name": "Greenfield",
          "email": "bgreenfield8@qq.com",
          "gender": "Male",
          "ip_address": "72.108.253.70",
          "city": "scarborough",
          "state":"ON",
          "country":"Canada"

        },
        {
          "id": 10,
          "first_name": "Guinna",
          "last_name": "Dagnan",
          "email": "gdagnan9@thetimes.co.uk",
          "gender": "Female",
          "ip_address": "108.233.202.64",
          "city": "north york",
          "state":"ON",
          "country":"Canada"

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
                <th>city</th>
                <th>state</th>
                <th>country</th>
          </tr>`
        )
    );
    
    const rows = data.map(({ id, first_name, last_name, email, gender, ip_address, city, state, country  }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ip_address}</td>
            <td>${city}</td>
            <td>${state}</td>
            <td>${country}}</td>
          </tr>`
        )
      )
    );
}