function number(n) {
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(`${n} x ${i} = ${result}`);
  }
}
number(2);

function pk(k) {
  const pk = k.length;
  let i;
  for (let i = 0; i <= pk / 2; i++) {}
  if (k[i] == k[pk - 1 - i]) {
    console.log(`${k} kata ini adalah polindrome`);
  } else {
    console.log(`${k} kata ini bukan polindrom`);
  }
}

pk("kasur rusak");

function daru(cm) {
  let km = cm / 100000;
  return console.log(`${cm} = ${km}`);
}
daru(100000);

function duit(pp) {
  return console.log(`${pp} -> " Rp." ${pp}",00" `);
}
duit(20000);

//cara pertama
let app = 10000000000000;

console.log(app.toLocaleString());


//cara pertama2
let dif = 20000000000000000000;
console.log(dif.toLocaleString());


let perkt = "dengan siapa"
let perkut = perkt.split( " " );
for(let i = 0 ; i < perkut.length; i++){
    perkut[i] = perkut [i].toUpperCase() + perkut[i].slice[1];

}
let final = perkut.join(" ");
console.log(final);


const number99 = 15;
 for(let i = 0;i <=  number99 ; i++)
 {
  let s = "  ";
  for (let j = 1; j <= i; j++ )
  {
    s += j + " ";
  }
  console.log(s);

 }


 let main = "hellow world";
 let main2 = "ell";
 let sudahmodif = main.replace(main2, " ");

 console.log(sudahmodif);

 let hapuskata2 = "l ";
 let modif2 = main.split("l");

 console.log(modif2);

