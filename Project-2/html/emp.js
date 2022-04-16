(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const dealers = require("../data/mock_data.json");
    
    const getAllDealers = (term,stay, department, valueTerm) =>
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
                case "email":
                    data = data.filter((dealer) => dealer.email.toLowerCase().includes(valueTerm));
                    break;
                case "gender":
                    data = data.filter((dealer) => dealer.gender.toLowerCase() === valueTerm.toLowerCase());
                    break;
                
                case "contact":
                    data = data.filter((dealer) => dealer.contact.toLowerCase().includes(valueTerm));
                    break;
                case "salary":
                    data = data.filter((dealer) => dealer.salary.toLowerCase().includes(valueTerm));
                    break;
                case "department":
                        data = data.filter((dealer) => dealer.department.toLowerCase().includes(valueTerm));
                        break;
                default:
                    // do nothing
                    break;
            }
        }
          // check status
          if(stay && stay != "none") {
            stay = (stay == "stay") ? true : false;
            data = data.filter(({is_stay}) => stay === is_stay);
          }
        if(department && department != "all") {
            data = data.filter((dealer) => dealer.company.toLowerCase() === department);
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
                data: { message: `No Car found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllDealers,
      getDealerById,
    };
    
    // build : browerift main.js -o dist/bundle.js
    },{"../data/mock_data.json":2}],2:[function(require,module,exports){
    module.exports=
    
    [{"id":1,"first_name":"Kylie","last_name":"Shaddock","email":"kshaddock0@tmall.com","gender":"Female","phone":"947-974-4970","salary":"$80156.09","department":"Management"},
{"id":2,"first_name":"Davy","last_name":"Giacovazzo","email":"dgiacovazzo1@mit.edu","gender":"Male","phone":"453-486-9847","salary":"$40857.66","department":"Engineering"},
{"id":3,"first_name":"Mattias","last_name":"Oldknow","email":"moldknow2@ow.ly","gender":"Male","phone":"346-228-8962","salary":"$64803.89","department":"Accounting"},
{"id":4,"first_name":"Gal","last_name":"Shackle","email":"gshackle3@printfriendly.com","gender":"Male","phone":"530-433-8980","salary":"$61169.95","department":"RandD"},
{"id":5,"first_name":"Neale","last_name":"Rubinowitch","email":"nrubinowitch4@nature.com","gender":"Male","phone":"776-718-3294","salary":"$48979.48","department":"Accounting"},
{"id":6,"first_name":"Irina","last_name":"Bradnum","email":"ibradnum5@facebook.com","gender":"Agender","phone":"798-909-3160","salary":"$85321.25","department":"Training"},
{"id":7,"first_name":"Moria","last_name":"Bettington","email":"mbettington6@japanpost.jp","gender":"Female","phone":"573-829-4497","salary":"$81336.42","department":"Business_Development"},
{"id":8,"first_name":"Wyatan","last_name":"Kochel","email":"wkochel7@exblog.jp","gender":"Male","phone":"615-870-2788","salary":"$47694.47","department":"RandD"},
{"id":9,"first_name":"Lian","last_name":"Denton","email":"ldenton8@devhub.com","gender":"Female","phone":"794-186-5302","salary":"$51571.78","department":"Support"},
{"id":10,"first_name":"Clayton","last_name":"Biagini","email":"cbiagini9@4shared.com","gender":"Male","phone":"883-344-9985","salary":"$46355.51","department":"Training"},
{"id":11,"first_name":"Cassey","last_name":"Levesque","email":"clevesquea@ocn.ne.jp","gender":"Female","phone":"858-927-0420","salary":"$79473.86","department":"Business_Development"},
{"id":12,"first_name":"Alfons","last_name":"Capini","email":"acapinib@addtoany.com","gender":"Male","phone":"122-152-1655","salary":"$73303.65","department":"Business_Development"},
{"id":13,"first_name":"Whitaker","last_name":"Kimberly","email":"wkimberlyc@ihg.com","gender":"Male","phone":"563-649-4104","salary":"$85936.23","department":"Support"},
{"id":14,"first_name":"Lulita","last_name":"Kelso","email":"lkelsod@weather.com","gender":"Female","phone":"262-255-5186","salary":"$87858.24","department":"Sales"},
{"id":15,"first_name":"Britte","last_name":"Ince","email":"bincee@ask.com","gender":"Female","phone":"218-504-2525","salary":"$81553.32","department":"HR"},
{"id":16,"first_name":"Merell","last_name":"Doudny","email":"mdoudnyf@printfriendly.com","gender":"Male","phone":"632-380-4406","salary":"$82865.21","department":"Business_Development"},
{"id":17,"first_name":"Chickie","last_name":"Gellibrand","email":"cgellibrandg@latimes.com","gender":"Male","phone":"357-387-5649","salary":"$77068.71","department":"RandD"},
{"id":18,"first_name":"Ezequiel","last_name":"Eastes","email":"eeastesh@cpanel.net","gender":"Polygender","phone":"209-609-3144","salary":"$20614.48","department":"Sales"},
{"id":19,"first_name":"Wandis","last_name":"Rumming","email":"wrummingi@sakura.ne.jp","gender":"Female","phone":"505-338-1938","salary":"$89156.97","department":"Engineering"},
{"id":20,"first_name":"Jeremie","last_name":"Yaakov","email":"jyaakovj@thetimes.co.uk","gender":"Male","phone":"537-180-8200","salary":"$39782.11","department":"Training"},
{"id":21,"first_name":"Verna","last_name":"Gosnold","email":"vgosnoldk@thetimes.co.uk","gender":"Female","phone":"818-841-2782","salary":"$70033.45","department":"Sales"},
{"id":22,"first_name":"Desdemona","last_name":"Dooman","email":"ddoomanl@nhs.uk","gender":"Female","phone":"673-854-9839","salary":"$47199.48","department":"Legal"},
{"id":23,"first_name":"Simon","last_name":"Bruntjen","email":"sbruntjenm@earthlink.net","gender":"Male","phone":"112-114-8682","salary":"$28583.96","department":"HR"},
{"id":24,"first_name":"Cordula","last_name":"Thal","email":"cthaln@networkadvertising.org","gender":"Female","phone":"879-429-0074","salary":"$78540.39","department":"Sales"},
{"id":25,"first_name":"Mattias","last_name":"Cauldwell","email":"mcauldwello@imdb.com","gender":"Male","phone":"148-741-2218","salary":"$21392.93","department":"Services"},
{"id":26,"first_name":"Ernest","last_name":"Peverell","email":"epeverellp@slate.com","gender":"Male","phone":"950-853-0521","salary":"$43694.01","department":"Services"},
{"id":27,"first_name":"Jodee","last_name":"Spaughton","email":"jspaughtonq@tripadvisor.com","gender":"Polygender","phone":"507-532-7458","salary":"$20790.97","department":"HR"},
{"id":28,"first_name":"Zacharia","last_name":"Nanninini","email":"znannininir@linkedin.com","gender":"Male","phone":"585-806-8739","salary":"$81030.59","department":"Services"},
{"id":29,"first_name":"Desiri","last_name":"Caulket","email":"dcaulkets@cisco.com","gender":"Female","phone":"677-568-2962","salary":"$76937.29","department":"Management"},
{"id":30,"first_name":"Taryn","last_name":"Devers","email":"tdeverst@bloomberg.com","gender":"Female","phone":"810-190-7581","salary":"$89336.81","department":"Accounting"},
{"id":31,"first_name":"Franky","last_name":"Sunshine","email":"fsunshineu@google.ca","gender":"Male","phone":"677-369-9475","salary":"$51903.98","department":"Marketing"},
{"id":32,"first_name":"Nona","last_name":"Swansbury","email":"nswansburyv@github.com","gender":"Female","phone":"298-183-6575","salary":"$42453.28","department":"Management"},
{"id":33,"first_name":"Sonnnie","last_name":"Lownie","email":"slowniew@mail.ru","gender":"Bigender","phone":"581-677-8546","salary":"$20908.74","department":"Engineering"},
{"id":34,"first_name":"Kean","last_name":"Suggitt","email":"ksuggittx@ebay.co.uk","gender":"Male","phone":"138-487-3624","salary":"$56674.21","department":"Engineering"},
{"id":35,"first_name":"Justus","last_name":"Craney","email":"jcraneyy@alexa.com","gender":"Male","phone":"835-643-8899","salary":"$84504.84","department":"Legal"},
{"id":36,"first_name":"Willie","last_name":"McEnteggart","email":"wmcenteggartz@howstuffworks.com","gender":"Female","phone":"493-573-2785","salary":"$63921.79","department":"HR"},
{"id":37,"first_name":"Toddie","last_name":"Grubey","email":"tgrubey10@squidoo.com","gender":"Male","phone":"228-577-0702","salary":"$77687.28","department":"Training"},
{"id":38,"first_name":"Bennett","last_name":"Dall","email":"bdall11@pbs.org","gender":"Male","phone":"115-820-4720","salary":"$42657.41","department":"HR"},
{"id":39,"first_name":"Colene","last_name":"Waterfall","email":"cwaterfall12@cnn.com","gender":"Female","phone":"973-756-2643","salary":"$75123.12","department":"Business_Development"},
{"id":40,"first_name":"Schuyler","last_name":"Vahl","email":"svahl13@arstechnica.com","gender":"Male","phone":"281-673-4999","salary":"$87671.71","department":"Accounting"},
{"id":41,"first_name":"Fairfax","last_name":"Mingard","email":"fmingard14@weibo.com","gender":"Male","phone":"746-382-7577","salary":"$22787.24","department":"Accounting"},
{"id":42,"first_name":"Hastings","last_name":"Durrett","email":"hdurrett15@cloudflare.com","gender":"Non-binary","phone":"203-244-2574","salary":"$38891.19","department":"Accounting"},
{"id":43,"first_name":"Genna","last_name":"Dibnah","email":"gdibnah16@digg.com","gender":"Female","phone":"757-768-9165","salary":"$81141.42","department":"Services"},
{"id":44,"first_name":"Anatole","last_name":"Grestye","email":"agrestye17@behance.net","gender":"Male","phone":"696-366-6908","salary":"$77838.04","department":"Engineering"},
{"id":45,"first_name":"Dorian","last_name":"Reeme","email":"dreeme18@theatlantic.com","gender":"Female","phone":"803-776-5507","salary":"$64395.16","department":"Support"},
{"id":46,"first_name":"Nikoletta","last_name":"Laphorn","email":"nlaphorn19@nbcnews.com","gender":"Female","phone":"955-870-8273","salary":"$64525.60","department":"Services"},
{"id":47,"first_name":"Lorraine","last_name":"Christofle","email":"lchristofle1a@de.vu","gender":"Female","phone":"857-151-1122","salary":"$29643.48","department":"Training"},
{"id":48,"first_name":"Honey","last_name":"Itzchaki","email":"hitzchaki1b@shutterfly.com","gender":"Female","phone":"870-334-5392","salary":"$88796.92","department":"Legal"},
{"id":49,"first_name":"Maiga","last_name":"Seakin","email":"mseakin1c@hexun.com","gender":"Female","phone":"481-799-2141","salary":"$70407.03","department":"Business_Development"},
{"id":50,"first_name":"Rosie","last_name":"Tranfield","email":"rtranfield1d@bloglovin.com","gender":"Female","phone":"521-228-9135","salary":"$67183.49","department":"Legal"},
{"id":51,"first_name":"Hamlin","last_name":"Cregg","email":"hcregg1e@disqus.com","gender":"Male","phone":"295-802-4264","salary":"$63158.24","department":"Legal"},
{"id":52,"first_name":"Darrel","last_name":"Pepon","email":"dpepon1f@squarespace.com","gender":"Male","phone":"141-885-4493","salary":"$23282.45","department":"RandD"},
{"id":53,"first_name":"Giorgi","last_name":"Webber","email":"gwebber1g@jiathis.com","gender":"Male","phone":"957-182-1083","salary":"$45758.91","department":"Support"},
{"id":54,"first_name":"Stinky","last_name":"Frostick","email":"sfrostick1h@myspace.com","gender":"Male","phone":"318-427-4257","salary":"$61525.07","department":"Business_Development"},
{"id":55,"first_name":"Forbes","last_name":"Hanna","email":"fhanna1i@gov.uk","gender":"Male","phone":"337-974-7396","salary":"$39985.48","department":"Training"},
{"id":56,"first_name":"Dorris","last_name":"Daltrey","email":"ddaltrey1j@twitpic.com","gender":"Bigender","phone":"415-771-1231","salary":"$42676.33","department":"HR"},
{"id":57,"first_name":"Artemas","last_name":"Dabney","email":"adabney1k@tinyurl.com","gender":"Male","phone":"711-966-7813","salary":"$70204.99","department":"Business_Development"},
{"id":58,"first_name":"Lauritz","last_name":"Nobbs","email":"lnobbs1l@artisteer.com","gender":"Male","phone":"560-660-0072","salary":"$66010.18","department":"Marketing"},
{"id":59,"first_name":"Theodore","last_name":"Wapple","email":"twapple1m@usgs.gov","gender":"Male","phone":"215-549-8595","salary":"$54606.30","department":"Engineering"},
{"id":60,"first_name":"Duncan","last_name":"Stansby","email":"dstansby1n@scribd.com","gender":"Male","phone":"533-833-4612","salary":"$64965.21","department":"Engineering"},
{"id":61,"first_name":"Boony","last_name":"Samms","email":"bsamms1o@dedecms.com","gender":"Male","phone":"886-447-7471","salary":"$47357.48","department":"Accounting"},
{"id":62,"first_name":"Saraann","last_name":"Hubert","email":"shubert1p@paypal.com","gender":"Polygender","phone":"448-967-5764","salary":"$47537.52","department":"Management"},
{"id":63,"first_name":"Magdalena","last_name":"Paule","email":"mpaule1q@mozilla.com","gender":"Agender","phone":"350-183-3210","salary":"$51803.78","department":"Marketing"},
{"id":64,"first_name":"Madison","last_name":"Ughi","email":"mughi1r@wikimedia.org","gender":"Male","phone":"718-145-3009","salary":"$56835.41","department":"RandD"},
{"id":65,"first_name":"Sacha","last_name":"Hiley","email":"shiley1s@wix.com","gender":"Non-binary","phone":"418-874-7407","salary":"$80491.92","department":"Training"},
{"id":66,"first_name":"Othello","last_name":"Acory","email":"oacory1t@sina.com.cn","gender":"Polygender","phone":"408-571-6910","salary":"$43252.28","department":"Management"},
{"id":67,"first_name":"Corey","last_name":"Manifould","email":"cmanifould1u@eepurl.com","gender":"Male","phone":"980-707-7639","salary":"$55561.24","department":"Training"},
{"id":68,"first_name":"Ulysses","last_name":"Christensen","email":"uchristensen1v@bing.com","gender":"Male","phone":"589-416-4104","salary":"$31013.50","department":"Accounting"},
{"id":69,"first_name":"Marybelle","last_name":"Debenham","email":"mdebenham1w@vimeo.com","gender":"Female","phone":"425-701-1360","salary":"$32381.54","department":"Marketing"},
{"id":70,"first_name":"Stanly","last_name":"Parlot","email":"sparlot1x@state.tx.us","gender":"Male","phone":"202-780-1570","salary":"$83567.23","department":"Training"},
{"id":71,"first_name":"Christy","last_name":"Spens","email":"cspens1y@hatena.ne.jp","gender":"Female","phone":"962-666-3942","salary":"$83473.98","department":"Legal"},
{"id":72,"first_name":"Aubrie","last_name":"Siggery","email":"asiggery1z@creativecommons.org","gender":"Polygender","phone":"753-846-7196","salary":"$49313.26","department":"Legal"},
{"id":73,"first_name":"Emilie","last_name":"Glyde","email":"eglyde20@blogtalkradio.com","gender":"Female","phone":"324-863-9999","salary":"$72993.79","department":"Business_Development"},
{"id":74,"first_name":"Merrill","last_name":"De la Barre","email":"mdelabarre21@shop-pro.jp","gender":"Male","phone":"631-375-3771","salary":"$60249.60","department":"HR"},
{"id":75,"first_name":"Gage","last_name":"Twitching","email":"gtwitching22@canalblog.com","gender":"Male","phone":"148-837-8258","salary":"$43146.79","department":"Management"},
{"id":76,"first_name":"Merrick","last_name":"Bristow","email":"mbristow23@wikia.com","gender":"Male","phone":"866-548-5599","salary":"$69282.90","department":"Management"},
{"id":77,"first_name":"Catharina","last_name":"Kubasiewicz","email":"ckubasiewicz24@google.com.au","gender":"Female","phone":"789-803-3516","salary":"$48567.23","department":"Management"},
{"id":78,"first_name":"Kirk","last_name":"O'Donnelly","email":"kodonnelly25@friendfeed.com","gender":"Male","phone":"625-379-4238","salary":"$74203.99","department":"Support"},
{"id":79,"first_name":"Noak","last_name":"Wolffers","email":"nwolffers26@rediff.com","gender":"Male","phone":"967-289-3268","salary":"$69472.74","department":"Accounting"},
{"id":80,"first_name":"Aharon","last_name":"Loughnan","email":"aloughnan27@marriott.com","gender":"Male","phone":"818-927-8597","salary":"$47034.10","department":"Services"},
{"id":81,"first_name":"Brennan","last_name":"Nials","email":"bnials28@geocities.com","gender":"Male","phone":"178-765-7728","salary":"$83265.60","department":"Engineering"},
{"id":82,"first_name":"Jessalin","last_name":"Ludford","email":"jludford29@tuttocitta.it","gender":"Female","phone":"924-955-1796","salary":"$84553.90","department":"RandD"},
{"id":83,"first_name":"Jeannette","last_name":"Mizen","email":"jmizen2a@amazon.co.uk","gender":"Female","phone":"609-319-9432","salary":"$43765.03","department":"Training"},
{"id":84,"first_name":"Maury","last_name":"Netley","email":"mnetley2b@wikia.com","gender":"Male","phone":"335-388-7937","salary":"$72604.96","department":"Business_Development"},
{"id":85,"first_name":"Leicester","last_name":"Coole","email":"lcoole2c@nih.gov","gender":"Male","phone":"364-444-2650","salary":"$31227.86","department":"Accounting"},
{"id":86,"first_name":"Karlie","last_name":"Coalbran","email":"kcoalbran2d@blog.com","gender":"Female","phone":"752-547-0960","salary":"$40808.10","department":"Engineering"},
{"id":87,"first_name":"Gregory","last_name":"Gouth","email":"ggouth2e@comcast.net","gender":"Male","phone":"671-936-5330","salary":"$62738.45","department":"Business_Development"},
{"id":88,"first_name":"Ewen","last_name":"Britton","email":"ebritton2f@foxnews.com","gender":"Male","phone":"126-932-6980","salary":"$25937.78","department":"Sales"},
{"id":89,"first_name":"Roseann","last_name":"Gjerde","email":"rgjerde2g@jimdo.com","gender":"Female","phone":"674-818-2167","salary":"$46644.69","department":"Support"},
{"id":90,"first_name":"Filberto","last_name":"Harteley","email":"fharteley2h@economist.com","gender":"Male","phone":"509-131-7902","salary":"$58171.30","department":"Legal"},
{"id":91,"first_name":"Demetris","last_name":"Bullman","email":"dbullman2i@globo.com","gender":"Male","phone":"898-895-6799","salary":"$70498.10","department":"HR"},
{"id":92,"first_name":"Diannne","last_name":"Brownell","email":"dbrownell2j@cdc.gov","gender":"Female","phone":"994-234-1731","salary":"$67823.59","department":"Engineering"},
{"id":93,"first_name":"Josephina","last_name":"Covotto","email":"jcovotto2k@posterous.com","gender":"Female","phone":"551-784-2780","salary":"$70909.80","department":"Marketing"},
{"id":94,"first_name":"Estevan","last_name":"Bruckstein","email":"ebruckstein2l@ebay.co.uk","gender":"Male","phone":"281-901-6594","salary":"$68199.06","department":"Engineering"},
{"id":95,"first_name":"Seward","last_name":"Vanyukov","email":"svanyukov2m@tripod.com","gender":"Male","phone":"111-562-0163","salary":"$33644.97","department":"Services"},
{"id":96,"first_name":"Gretel","last_name":"Auty","email":"gauty2n@reddit.com","gender":"Female","phone":"156-273-1475","salary":"$39472.85","department":"Management"},
{"id":97,"first_name":"Dominick","last_name":"Abramovitch","email":"dabramovitch2o@sfgate.com","gender":"Male","phone":"382-575-8683","salary":"$70560.41","department":"Business_Development"},
{"id":98,"first_name":"Blanch","last_name":"Caris","email":"bcaris2p@rediff.com","gender":"Female","phone":"829-523-6199","salary":"$29020.47","department":"Business_Development"},
{"id":99,"first_name":"Chrystal","last_name":"Stygall","email":"cstygall2q@xrea.com","gender":"Female","phone":"871-322-4456","salary":"$71739.69","department":"Accounting"},
{"id":100,"first_name":"Mohammed","last_name":"Fennell","email":"mfennell2r@businesswire.com","gender":"Male","phone":"880-847-7851","salary":"$84941.79","department":"Legal"},
{"id":101,"first_name":"Maude","last_name":"Jindra","email":"mjindra2s@liveinternet.ru","gender":"Female","phone":"295-242-1152","salary":"$22763.88","department":"Sales"},
{"id":102,"first_name":"Bent","last_name":"Tilio","email":"btilio2t@usgs.gov","gender":"Male","phone":"376-568-3022","salary":"$21690.92","department":"Services"},
{"id":103,"first_name":"Loutitia","last_name":"Sherme","email":"lsherme2u@ning.com","gender":"Female","phone":"538-743-5258","salary":"$38721.92","department":"Engineering"},
{"id":104,"first_name":"Thadeus","last_name":"Metzig","email":"tmetzig2v@dyndns.org","gender":"Male","phone":"743-584-3408","salary":"$24443.80","department":"Sales"},
{"id":105,"first_name":"Otto","last_name":"Boag","email":"oboag2w@posterous.com","gender":"Male","phone":"869-409-9055","salary":"$53302.49","department":"Accounting"},
{"id":106,"first_name":"Wynn","last_name":"Dumberell","email":"wdumberell2x@ustream.tv","gender":"Non-binary","phone":"642-345-8868","salary":"$32317.43","department":"Business_Development"},
{"id":107,"first_name":"Angele","last_name":"Instrell","email":"ainstrell2y@adobe.com","gender":"Female","phone":"330-790-8261","salary":"$44878.64","department":"Management"},
{"id":108,"first_name":"Holly-anne","last_name":"Goult","email":"hgoult2z@freewebs.com","gender":"Female","phone":"299-464-4306","salary":"$61165.41","department":"HR"},
{"id":109,"first_name":"Stafani","last_name":"Ianni","email":"sianni30@pagesperso-orange.fr","gender":"Female","phone":"413-885-1878","salary":"$28025.49","department":"Engineering"},
{"id":110,"first_name":"Dorrie","last_name":"Gradly","email":"dgradly31@tumblr.com","gender":"Polygender","phone":"544-378-2483","salary":"$30834.54","department":"Business_Development"},
{"id":111,"first_name":"Jehanna","last_name":"Chasier","email":"jchasier32@intel.com","gender":"Female","phone":"255-518-3825","salary":"$36833.13","department":"Legal"},
{"id":112,"first_name":"Leta","last_name":"Rakes","email":"lrakes33@goo.gl","gender":"Female","phone":"211-184-5824","salary":"$45615.83","department":"Sales"},
{"id":113,"first_name":"Forrest","last_name":"Whodcoat","email":"fwhodcoat34@digg.com","gender":"Male","phone":"120-285-5062","salary":"$81380.91","department":"Business_Development"},
{"id":114,"first_name":"Horatius","last_name":"Westney","email":"hwestney35@merriam-webster.com","gender":"Male","phone":"293-112-6436","salary":"$78845.11","department":"Services"},
{"id":115,"first_name":"Shell","last_name":"Coverly","email":"scoverly36@yahoo.com","gender":"Non-binary","phone":"570-919-3278","salary":"$49810.68","department":"Management"},
{"id":116,"first_name":"Shanta","last_name":"Juschka","email":"sjuschka37@examiner.com","gender":"Female","phone":"136-703-6808","salary":"$77717.11","department":"Services"},
{"id":117,"first_name":"Chrystel","last_name":"Borrett","email":"cborrett38@cnn.com","gender":"Female","phone":"710-515-8322","salary":"$65641.97","department":"Services"},
{"id":118,"first_name":"Blake","last_name":"Raynor","email":"braynor39@zimbio.com","gender":"Male","phone":"445-448-0434","salary":"$43848.53","department":"Accounting"},
{"id":119,"first_name":"Renard","last_name":"Mc Andrew","email":"rmcandrew3a@ebay.co.uk","gender":"Male","phone":"350-652-6659","salary":"$51369.88","department":"Legal"},
{"id":120,"first_name":"Wallace","last_name":"Cumming","email":"wcumming3b@ft.com","gender":"Male","phone":"579-282-9214","salary":"$48054.49","department":"Support"},
{"id":121,"first_name":"Kevon","last_name":"Hukin","email":"khukin3c@booking.com","gender":"Male","phone":"935-167-6245","salary":"$32643.73","department":"Legal"},
{"id":122,"first_name":"Kaleb","last_name":"Karlsen","email":"kkarlsen3d@cyberchimps.com","gender":"Male","phone":"243-770-2741","salary":"$48483.41","department":"Legal"},
{"id":123,"first_name":"Tandie","last_name":"Panner","email":"tpanner3e@phpbb.com","gender":"Agender","phone":"580-911-5938","salary":"$74821.44","department":"Management"},
{"id":124,"first_name":"Quinton","last_name":"Basten","email":"qbasten3f@baidu.com","gender":"Male","phone":"258-161-9517","salary":"$48100.14","department":"Engineering"},
{"id":125,"first_name":"Shaine","last_name":"Biasioni","email":"sbiasioni3g@netlog.com","gender":"Female","phone":"501-561-3863","salary":"$83909.42","department":"Business_Development"},
{"id":126,"first_name":"Berrie","last_name":"Westmorland","email":"bwestmorland3h@admin.ch","gender":"Female","phone":"274-274-6914","salary":"$31459.64","department":"Support"},
{"id":127,"first_name":"Faun","last_name":"Edmeads","email":"fedmeads3i@bbc.co.uk","gender":"Female","phone":"886-815-3233","salary":"$64513.17","department":"HR"},
{"id":128,"first_name":"Baudoin","last_name":"Di Matteo","email":"bdimatteo3j@ezinearticles.com","gender":"Male","phone":"806-566-7369","salary":"$51816.49","department":"Management"},
{"id":129,"first_name":"Wilton","last_name":"Flook","email":"wflook3k@sciencedirect.com","gender":"Male","phone":"949-372-0239","salary":"$36656.85","department":"Marketing"},
{"id":130,"first_name":"Jo-ann","last_name":"Espasa","email":"jespasa3l@java.com","gender":"Female","phone":"656-894-5492","salary":"$35682.82","department":"Management"},
{"id":131,"first_name":"Robin","last_name":"Seater","email":"rseater3m@bigcartel.com","gender":"Male","phone":"651-609-3105","salary":"$32232.30","department":"Business_Development"},
{"id":132,"first_name":"Rica","last_name":"Gleadhall","email":"rgleadhall3n@blogtalkradio.com","gender":"Female","phone":"378-258-2997","salary":"$76641.02","department":"Services"},
{"id":133,"first_name":"Agosto","last_name":"Blencoe","email":"ablencoe3o@dailymotion.com","gender":"Male","phone":"937-910-6195","salary":"$75412.40","department":"Management"},
{"id":134,"first_name":"Jacquelyn","last_name":"Wisby","email":"jwisby3p@ucla.edu","gender":"Polygender","phone":"819-932-2808","salary":"$20319.94","department":"Legal"},
{"id":135,"first_name":"Cissy","last_name":"Chansonne","email":"cchansonne3q@hatena.ne.jp","gender":"Female","phone":"529-345-1402","salary":"$60523.72","department":"Accounting"},
{"id":136,"first_name":"Elisabeth","last_name":"Beckhurst","email":"ebeckhurst3r@ca.gov","gender":"Female","phone":"248-585-3019","salary":"$34572.13","department":"Legal"},
{"id":137,"first_name":"Griffin","last_name":"McKnish","email":"gmcknish3s@cocolog-nifty.com","gender":"Male","phone":"336-652-0086","salary":"$48694.56","department":"Training"},
{"id":138,"first_name":"Eldridge","last_name":"Schistl","email":"eschistl3t@exblog.jp","gender":"Male","phone":"390-573-3504","salary":"$78284.27","department":"HR"},
{"id":139,"first_name":"Lenore","last_name":"Glander","email":"lglander3u@google.it","gender":"Female","phone":"298-748-1353","salary":"$84338.28","department":"Accounting"},
{"id":140,"first_name":"Lorine","last_name":"Tiffin","email":"ltiffin3v@mysql.com","gender":"Polygender","phone":"952-791-6640","salary":"$56237.01","department":"RandD"},
{"id":141,"first_name":"Nikki","last_name":"McCaughan","email":"nmccaughan3w@fema.gov","gender":"Female","phone":"374-923-1473","salary":"$29740.86","department":"Accounting"},
{"id":142,"first_name":"Kev","last_name":"Waskett","email":"kwaskett3x@ihg.com","gender":"Male","phone":"593-606-0824","salary":"$48427.08","department":"Accounting"},
{"id":143,"first_name":"Sibel","last_name":"Tidd","email":"stidd3y@scribd.com","gender":"Female","phone":"354-421-3710","salary":"$76765.48","department":"Sales"},
{"id":144,"first_name":"Shell","last_name":"Spiteri","email":"sspiteri3z@virginia.edu","gender":"Genderqueer","phone":"362-715-3863","salary":"$35249.70","department":"Business_Development"},
{"id":145,"first_name":"Eileen","last_name":"Kiddy","email":"ekiddy40@chron.com","gender":"Female","phone":"279-305-7267","salary":"$69932.38","department":"Marketing"},
{"id":146,"first_name":"Isidor","last_name":"Scafe","email":"iscafe41@blogger.com","gender":"Male","phone":"635-847-3602","salary":"$32314.36","department":"Sales"},
{"id":147,"first_name":"Windham","last_name":"Orford","email":"worford42@opera.com","gender":"Male","phone":"414-645-9946","salary":"$47320.83","department":"Legal"},
{"id":148,"first_name":"Phylys","last_name":"Pallant","email":"ppallant43@seattletimes.com","gender":"Female","phone":"930-858-8734","salary":"$72508.91","department":"RandD"},
{"id":149,"first_name":"Margalit","last_name":"Aglione","email":"maglione44@typepad.com","gender":"Female","phone":"587-969-3101","salary":"$37376.79","department":"Engineering"},
{"id":150,"first_name":"Sissie","last_name":"Blanque","email":"sblanque45@hc360.com","gender":"Female","phone":"503-714-0895","salary":"$49384.38","department":"HR"},
{"id":151,"first_name":"Doloritas","last_name":"Bett","email":"dbett46@chron.com","gender":"Female","phone":"577-356-7469","salary":"$66218.43","department":"Accounting"},
{"id":152,"first_name":"Jobyna","last_name":"Hardage","email":"jhardage47@de.vu","gender":"Female","phone":"465-818-0083","salary":"$21725.39","department":"Management"},
{"id":153,"first_name":"Gifford","last_name":"Hearsey","email":"ghearsey48@phpbb.com","gender":"Male","phone":"480-460-4119","salary":"$81291.63","department":"Sales"},
{"id":154,"first_name":"Alia","last_name":"Bramelt","email":"abramelt49@mapquest.com","gender":"Female","phone":"817-976-0842","salary":"$20127.43","department":"HR"},
{"id":155,"first_name":"Bastien","last_name":"Conry","email":"bconry4a@etsy.com","gender":"Male","phone":"721-445-5105","salary":"$72106.91","department":"Accounting"},
{"id":156,"first_name":"Viole","last_name":"Duddan","email":"vduddan4b@amazon.co.uk","gender":"Female","phone":"663-178-5501","salary":"$80061.04","department":"Sales"},
{"id":157,"first_name":"Munroe","last_name":"Bloxsom","email":"mbloxsom4c@theguardian.com","gender":"Male","phone":"360-256-1901","salary":"$74607.49","department":"Marketing"},
{"id":158,"first_name":"Cristi","last_name":"Baylie","email":"cbaylie4d@nymag.com","gender":"Female","phone":"982-629-2411","salary":"$37189.22","department":"Accounting"},
{"id":159,"first_name":"Hunfredo","last_name":"Tindley","email":"htindley4e@washington.edu","gender":"Genderfluid","phone":"343-330-0068","salary":"$20767.64","department":"Support"},
{"id":160,"first_name":"Fancy","last_name":"Deetch","email":"fdeetch4f@ftc.gov","gender":"Female","phone":"485-341-6175","salary":"$66655.82","department":"HR"},
{"id":161,"first_name":"Udell","last_name":"Ammer","email":"uammer4g@digg.com","gender":"Male","phone":"437-655-8336","salary":"$69345.93","department":"Business_Development"},
{"id":162,"first_name":"Terra","last_name":"Sturney","email":"tsturney4h@behance.net","gender":"Female","phone":"811-148-8318","salary":"$20047.04","department":"Management"},
{"id":163,"first_name":"Natalie","last_name":"Abisetti","email":"nabisetti4i@hexun.com","gender":"Female","phone":"742-389-1435","salary":"$31237.60","department":"Training"},
{"id":164,"first_name":"Lesley","last_name":"Foot","email":"lfoot4j@ft.com","gender":"Male","phone":"982-310-7830","salary":"$33508.26","department":"Sales"},
{"id":165,"first_name":"Corrina","last_name":"Good","email":"cgood4k@nymag.com","gender":"Female","phone":"787-217-9231","salary":"$87927.56","department":"Marketing"},
{"id":166,"first_name":"Rudyard","last_name":"Redborn","email":"rredborn4l@t.co","gender":"Male","phone":"416-998-4740","salary":"$61788.00","department":"Sales"},
{"id":167,"first_name":"Zorana","last_name":"Newark","email":"znewark4m@weibo.com","gender":"Female","phone":"879-156-3237","salary":"$27368.95","department":"Training"},
{"id":168,"first_name":"Iona","last_name":"Vasiliev","email":"ivasiliev4n@economist.com","gender":"Female","phone":"181-336-7945","salary":"$50162.93","department":"Support"},
{"id":169,"first_name":"Jobyna","last_name":"Allingham","email":"jallingham4o@tinyurl.com","gender":"Female","phone":"827-101-5453","salary":"$82692.43","department":"Legal"},
{"id":170,"first_name":"Antone","last_name":"Pitone","email":"apitone4p@desdev.cn","gender":"Male","phone":"703-898-8974","salary":"$74820.52","department":"HR"},
{"id":171,"first_name":"Bernita","last_name":"Apps","email":"bapps4q@jigsy.com","gender":"Female","phone":"605-835-0393","salary":"$40884.33","department":"RandD"},
{"id":172,"first_name":"Micah","last_name":"MacIllrick","email":"mmacillrick4r@howstuffworks.com","gender":"Male","phone":"404-346-4121","salary":"$68007.51","department":"Marketing"},
{"id":173,"first_name":"Victoria","last_name":"Vacher","email":"vvacher4s@bing.com","gender":"Female","phone":"618-620-6689","salary":"$78898.78","department":"Legal"},
{"id":174,"first_name":"Reinald","last_name":"Chancelier","email":"rchancelier4t@wikia.com","gender":"Male","phone":"365-999-2809","salary":"$30890.19","department":"Sales"},
{"id":175,"first_name":"Dud","last_name":"Tarbath","email":"dtarbath4u@mayoclinic.com","gender":"Male","phone":"214-958-6985","salary":"$80154.53","department":"HR"},
{"id":176,"first_name":"Karla","last_name":"Twatt","email":"ktwatt4v@irs.gov","gender":"Female","phone":"702-218-6991","salary":"$58060.25","department":"Business_Development"},
{"id":177,"first_name":"Terra","last_name":"Rosser","email":"trosser4w@eepurl.com","gender":"Female","phone":"345-813-1377","salary":"$25881.49","department":"HR"},
{"id":178,"first_name":"Maye","last_name":"Aland","email":"maland4x@nytimes.com","gender":"Female","phone":"700-164-9720","salary":"$46126.24","department":"Management"},
{"id":179,"first_name":"Callean","last_name":"Diamond","email":"cdiamond4y@go.com","gender":"Male","phone":"295-649-9500","salary":"$60134.52","department":"RandD"},
{"id":180,"first_name":"Goran","last_name":"Ennals","email":"gennals4z@nytimes.com","gender":"Male","phone":"248-348-2353","salary":"$59895.72","department":"Engineering"},
{"id":181,"first_name":"Carole","last_name":"Roderick","email":"croderick50@europa.eu","gender":"Female","phone":"170-877-2574","salary":"$26567.44","department":"HR"},
{"id":182,"first_name":"Lowrance","last_name":"Loche","email":"lloche51@oracle.com","gender":"Male","phone":"870-319-8993","salary":"$32228.65","department":"Engineering"},
{"id":183,"first_name":"Jefferey","last_name":"Cunnington","email":"jcunnington52@wikia.com","gender":"Male","phone":"797-809-7776","salary":"$20009.65","department":"RandD"},
{"id":184,"first_name":"Cal","last_name":"Sawtell","email":"csawtell53@is.gd","gender":"Male","phone":"522-992-1023","salary":"$74048.17","department":"Services"},
{"id":185,"first_name":"Camilla","last_name":"Fleming","email":"cfleming54@theglobeandmail.com","gender":"Genderqueer","phone":"477-519-1301","salary":"$46076.01","department":"RandD"},
{"id":186,"first_name":"Solomon","last_name":"Letteresse","email":"sletteresse55@salon.com","gender":"Male","phone":"567-202-7058","salary":"$47178.77","department":"RandD"},
{"id":187,"first_name":"Ev","last_name":"Dovermann","email":"edovermann56@wordpress.com","gender":"Male","phone":"312-817-9548","salary":"$86644.40","department":"Business_Development"},
{"id":188,"first_name":"Gunter","last_name":"Sawkin","email":"gsawkin57@amazon.co.uk","gender":"Male","phone":"405-743-7251","salary":"$28455.46","department":"Services"},
{"id":189,"first_name":"Caesar","last_name":"Brunroth","email":"cbrunroth58@pagesperso-orange.fr","gender":"Male","phone":"210-370-4849","salary":"$52950.98","department":"Business_Development"},
{"id":190,"first_name":"Hasty","last_name":"Jeanequin","email":"hjeanequin59@techcrunch.com","gender":"Male","phone":"889-808-3919","salary":"$44583.17","department":"Engineering"},
{"id":191,"first_name":"Shelia","last_name":"Andrejs","email":"sandrejs5a@exblog.jp","gender":"Female","phone":"553-545-8464","salary":"$50402.49","department":"RandD"},
{"id":192,"first_name":"Katharyn","last_name":"Cow","email":"kcow5b@amazon.com","gender":"Female","phone":"752-626-4388","salary":"$63893.21","department":"Training"},
{"id":193,"first_name":"Ebenezer","last_name":"Beyn","email":"ebeyn5c@slideshare.net","gender":"Male","phone":"216-740-9186","salary":"$83268.76","department":"Business_Development"},
{"id":194,"first_name":"Maxim","last_name":"Mielnik","email":"mmielnik5d@twitter.com","gender":"Male","phone":"400-650-5928","salary":"$72834.22","department":"RandD"},
{"id":195,"first_name":"Bree","last_name":"Galier","email":"bgalier5e@ucoz.com","gender":"Female","phone":"656-190-8897","salary":"$47932.87","department":"Engineering"},
{"id":196,"first_name":"Wald","last_name":"Klicher","email":"wklicher5f@icio.us","gender":"Male","phone":"210-936-5047","salary":"$45485.94","department":"HR"},
{"id":197,"first_name":"Nicholas","last_name":"Mattiassi","email":"nmattiassi5g@wunderground.com","gender":"Male","phone":"383-747-2546","salary":"$89369.69","department":"RandD"},
{"id":198,"first_name":"Ruthy","last_name":"Attrey","email":"rattrey5h@free.fr","gender":"Female","phone":"883-926-4470","salary":"$21625.88","department":"Accounting"},
{"id":199,"first_name":"Mahmoud","last_name":"Zecchii","email":"mzecchii5i@amazon.de","gender":"Male","phone":"707-263-7490","salary":"$76980.65","department":"Engineering"},
{"id":200,"first_name":"Geoffrey","last_name":"Mucklow","email":"gmucklow5j@bloomberg.com","gender":"Male","phone":"555-301-0997","salary":"$64528.63","department":"Engineering"}]

    },{}],3:[function(require,module,exports){
    const { getAllDealers, getDealerById } = require("./api/dealer");
    
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
    
    
   
    getAllDealers().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const department = event.target.department.value;
      const valueTerm = event.target.input.value;
      const stay = event.target.stay.value;

      if(term === `id`) {
        getDealerById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllDealers(term,stay, department.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllDealers().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"./api/dealer":1}]},{},[3]);