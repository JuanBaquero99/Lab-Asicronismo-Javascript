function sum(num1, num2) {
    return num1 + num2;
}
//Función original de suma de valores

function call(num1, num2, callback) {
    return callback(num1, num2);
}
//Aquie la función esta recibiendo de parametro la otra función
//El return es la función con num1, num2

console.log(call(2, 2, sum));

setTimeout(function ()  {
    console.log('Hola');
}, 2000)

//setTimeout puede definir un tiempo para que se ejecute el código

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Juan');

