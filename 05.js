// Film Rating

// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

//     Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
//     Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
//     Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
//     Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.


const prompt = require('prompt');
prompt.start();
prompt.get('Age',(err,input)=>{
    if(input.Age >= 21){console.log('DEWASA');}
    else if(input.Age >=13){console.log('REMAJA')}
    else if(input.Age >=9){console.log('BIMBINGAN ORANG TUA')}
    else if(input.Age <=9){console.log("SEMUA USIA")}
    else{
        console.log(err)
    }
});