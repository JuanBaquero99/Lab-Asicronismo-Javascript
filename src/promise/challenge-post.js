import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST', //Tipo POST para acceder al contenido
        mode: 'cors', 
        credentials: 'same-origin', //Si no hay autenticación no sucede nada
        headers: {
            'Content-type': 'application/json' //Commo es por la consola se le explica que el valor que se envía viene de json. Depende del elemento
            
        },
        body: JSON.stringify(data) //Se recibe como objeto y pasa a texto

    });
    return response;
}

const data = {
        "title": "212",
        "price": 212,
        "description": "A description",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data) //Estamos invocando la función
    .then(response => response.json()) //Cuando nos trae el response lo convierte en JSON
    .then(data => console.log(data)); //Esa data en JSON la muestra

