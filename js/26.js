'use strict';

/*6. Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor 
en tres tipus de monedes. Utilitza les funcions de callBack, (és a dir funcions com expressions)*/

//1.00 Euro = 1.1589293 US Dollars
//1.00 Euro = 0.8586883 British Pounds
//1.00 Euro = 129.26119 Japanese Yen

//declarem
const USD = 1.1589293;
const GBP = 0.8586883;
const JPY = 129.26119;
let euros = 1;

//funcions expressió

const euro_dollar = euros => euros * USD;
const euro_pound = euros => euros * GBP;
const euro_yen = euros => euros * JPY;

document.write("<h3>" + euros + " EUR = </h3>");
document.write("<h3>" + euro_dollar(euros) + " USD</h3>");
document.write("<h3>" + euro_pound(euros) + " GBP</h3>");
document.write("<h3>" + euro_yen(euros) + " YEN</h3>");

