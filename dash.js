const objYear = 2023;
const objYearCurrent = 2024;
const objY = {"t2023":[{"month":"Jan","rate":"719132000.00"},{"month":"Feb","rate":"739297000.00"},{"month":"Mar","rate":"806595000.00"},{"month":"Apr","rate":"786483000.00"},{"month":"May","rate":"820784000.00"},{"month":"Jun","rate":"622888000.00"},{"month":"Jul","rate":"979481000.00"},{"month":"Agt","rate":"908036000.00"},{"month":"Sep","rate":"841228000.00"},{"month":"Oct","rate":"896510000.00"},{"month":"Nov","rate":"858857000.00"},{"month":"Dec","rate":"781214000.00"}],"t2024":[{"month":"Jan","rate":"882916000.00"},{"month":"Feb","rate":"794519000.00"},{"month":"Mar","rate":"195547000.00"}]};
var datay = [];
var bulany = [];
var tahunLalu = [];
var tahunBerjalan = [];

//console.log(data);
Object.keys(objY["t" + objYear]).forEach(function (key) {
    //console.log(obj["t2023"][key].month);
    //bulan.push(obj["t2023"][key].month);
    console.log(objY["t" + objYear][key].month);
    bulany.push(objY["t" + objYear][key].month);
});
Object.keys(objY["t" + objYear]).forEach(function (key) {
    console.log(objY["t" + objYear][key].rate);
    tahunLalu.push(objY["t" + objYear][key].rate);
});
Object.keys(objY["t" + objYearCurrent]).forEach(function (key) {
    console.log(objY["t" + objYearCurrent][key].rate);
    tahunBerjalan.push(objY["t" + objYearCurrent][key].rate);
});
console.log(tahunLalu);
console.log(tahunBerjalan);
