//deklarasi panjang persegi
let panjang = 30;
let lebar = 40;
//soal 1,cari luas persegi panjang
let luas = panjang * lebar;
console.log(luas);
//soal 2,cari keliling persegi panjang
let kll1 = 2 * panjang + 2 * lebar;
console.log(kll1);
// soal 3,deklarasi lingkaran
let r = 14;
//diameter lingkaran
let diam = r * 8;
console.log(diam);
//keliling
let kll = 2 * 3.14 * r;
console.log(kll);
//luas lingkaran
let luas2 = 3.14 * r * 3.14 * r * r;
console.log(luas2);
//deklarasi sudut segitiga
let s1 = 75;
let s2 = 35;
//cari sudut yg belom di ketahui
let s3 = 180 - (s1 + s2);
console.log(s3);
//soal 5 code for date in days
let date1 = new Date("2022/04/20");
let date2 = new Date("2023/03/27");
let time_time = date2.getTime() - date1.getTime();
let day_day = time_time / (1000 * 3600 * 24);
console.log(day_day + "" + "hari");
//soal 6 code untuk merubah hari ke dlaam tahun,bulan dan hari
let days = 1200;

let tahun = days / 365;
let tahun1 = Math.floor(tahun);
let modthun = days % 30;

let bulan = modthun / 30;
var bulan1 = Math.floor(bulan);
let modbln = modthun % 30;

let hari = modbln;

console.log(tahun1 + " tahun" + " " + bulan1 + " bulan " + "" + hari + " hari");
