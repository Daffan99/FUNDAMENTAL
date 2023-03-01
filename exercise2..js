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


