//Controller: Controlar el flujo de peticiones y respuestas del cliente 



const crearMiArmario = ( req, res ) => {
    const inputData = req.body;

    console.log(inputData);
    res.send( inputData);
}

const eliminarMiArmario = ( req, res ) => {
    res.send( ' Eliminar mi armario');
}

//Exponiendo las funcionalidades de este archivo usando el export

export { 
    crearMiArmario,
    eliminarMiArmario
}
