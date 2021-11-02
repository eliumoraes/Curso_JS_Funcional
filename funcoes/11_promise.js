console.clear()
setTimeout(() => {
    console.log("Executando callback...")
    
    setTimeout(() => {
        console.log("Executando callback...")
        
        setTimeout(() => {
            console.log("Executando callback...")
            
        }, 2000);        
    }, 2000);
}, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(
        function (resolve) {
            setTimeout(() => {
                console.log("Executando promise...")
                resolve('Vish....')
            }, tempo);
        }
    )
}

let p = esperarPor(3000)
  .then(esperarPor)
  .then(esperarPor)
  .then(esperarPor(10000))
  .then(esperarPor(10000));