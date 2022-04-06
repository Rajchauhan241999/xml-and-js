(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const products = require("../data/MOCK_DATA.json");
    
    const getAll = ({ id, name, description, price } = {}) =>
      new Promise((resolve) => {
        let result = Array.from(products);
    
        if (id) {
          result = result.filter((item) => item.id === id);
        }
    
        if (name) {
          result = result.filter((item) => item.name === name);
        }
    
        if (description) {
          result = result.filter((item) => item.description === description);
        }
    
        if (price) {
          result = result.filter((item) => item.price === Number(price));
        }
    
        resolve({ code: 200, data: result });
      });
    
    const getById = (id) =>
      new Promise((resolve) => {
        const product = products.find((product) => product.id === id);
    
        if (product) {
          resolve({ code: 200, data: product });
        } else {
          resolve({
            code: 404,
            data: { message: `No product found for id ${id}` },
          });
        }
      });
    
    module.exports = {
      getAll,
      getById,
    };
    
    },{"../data/MOCK_DATA.json":2}],2:[function(require,module,exports){
    module.exports=[
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
    
    },{}],3:[function(require,module,exports){
    const { getAll } = require("../api/assignment.js");
    
    const renderTable = (data, nameTerm) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
    
      let source = data;
    
      if (nameTerm) {
        source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
      }
    
      const rows = source.reduce(
        (acc, { id, name, description, price }) =>
          acc +
          `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${description}</td><td>${price}</td></tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    getAll().then(({ data }) => renderTable(data));
    
    const onSubmit = (event) => {
      event.preventDefault();
    
      const term = event.target.name.value;
    
      getAll().then(({ data }) => renderTable(data, term));
    };
    
    const onReset = () => {
      getAll().then(({ data }) => renderTable(data));
    };
    
    },{"../assignment/":1}]},{},[3]);
    