//merubah celcius menjadi faranheaid
let c = 20;
let f = c * 1.8 + 32;
console.log(f);
//tuliskan code untuk memeriksa apakah ganjil atau genap
let number = 13;
for (let i = 0; i <= 13; i++){
    
    if(i % 2 == 0){
        console.log("ini angka genap");
    }else{
        console.log("ini angka ganjil");
    }
}
//menentukan bilangan prima
const apakahPrima = (angka) => {
    let pembagi = 0;
    for (let i = 1; i <= angka; i++ ){
        if(angka%i == 0){
            pembagi++
        }
    }
    if(pembagi == 2){
        console.log("prima")
    }else{
        console.log("bukan prima");
    }
}

apakahPrima(2);//prima
apakahPrima(3);//prima
apakahPrima(4);//bukan prima
apakahPrima(9);//bukan prima


//menemukan jumlah angka 1 hingga N
let number1 = 3;
let N = 0;
for (i = 0 ; i <= number1; i++){
    N += i
}

console.log(N);

//faktorial

let number2 = 5;
let n2 = 1;
for (i = 1 ; i <= number2; i++){
    n2 *= i
}
console.log(n2);
//angka fibanaci
let a = 0;
let b = 1;
let not =  a+b;
let not1 = 10;

console.log(a);

for(i = 1 ; i <= not1 ; i++){
    console.log(not);
not = a+b;
a = b;
b = not;
}
//fibanaci fungscion





