// Ganjil atau Genap?
// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.

const prompt = require('prompt');
prompt.start()
prompt.get('Number',(err,input)=>{
    if(input.Number % 2 === 0){console.log('Genap')}
    else if(input.Number % 2 ===1){console.log('Ganjil')}
    else{
        console.log(err)
    }
})