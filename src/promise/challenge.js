import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) { //Definiendo el fetchdata para acceder a la UrlApi
    return fetch(urlApi); //Se recibe y retorna a la función

};

//fetchData(`${API}/products`)
//.then(response => response.json()) //then para saber que hay en la respuesta y sea asignado en response en json
//.then(products => {
//   console.log(products); //El siguiente the para mostrar
//})
//.then (() => {
//   console.log('Hola')
//})
//.catch(error => console.log(error)); //En caso de recibir un error y mostrarlo en la consola
//Then es un tipo de promesa

//Hay que agregar el type al json para que pueda ser interpretado el Fetch. El cual normalmente funciona normalmente directamente en el navegador
//Asi ya determina que es un modulo por lo tanto ejecutara sin problema 

fetchData(`${API}/product`)
    .then(response => response.json())
    .then(products =>{
        return fetchData(`${API}/product/${products[0].id}`) //Traer el primer elemento de la solicitud
    })
    .then(response => response.json())
    .then(product => {
        console.log(console.log(product.title))
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'))