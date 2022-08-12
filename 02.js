// Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

// Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
// Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.

const prompt = require('prompt');
prompt.start();
prompt.get('Number',(err,input)=>{
    if(input.Number >= 90){console.log('A');}
    else if(input.Number >=80){console.log('B')}
    else if(input.Number >=70){console.log('C')}
    else if(input.Number >=60){console.log("D")}
    else if(input.Number <=59){console.log("E")}
    else{
        console.log(err)
    }
});