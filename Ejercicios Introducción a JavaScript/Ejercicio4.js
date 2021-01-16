var arregloObjetos = [
    {nombre: "Luis", email: "luis@gmail.com", edad: "18"},
    {nombre: "Estefany", email: "estefany@gmail.com", edad: "21"},
    {nombre: "Jose", email: "jose@gmail.com", edad: "43"},
    {nombre: "Galilea", email: "galilea@gmail.com", edad: "23"},
    {nombre: "Lalo", email: "lalo@gmail.com", edad: "53"}
];

var tamano = arregloObjetos.length;
var correos = [tamano];

    for(var i = 0; i < tamano ; i++)
    {
        correos[i] = arregloObjetos[i].email;
        console.log(correos[i]);
    }

