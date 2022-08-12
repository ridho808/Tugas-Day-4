// Kabisat

// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

const prompt = require('prompt');
prompt.start();

prompt.get('Year',(NotKabisat,Input)=>{
    if(Input.Year % 400 == 0 || Input.Year % 4 ==0 && Input.Year % 100 !=0){
        console.log('Tahun Kabisat');
    }else{
        console.log('Bukan Tahun Kabisat')
    }
})