import estiloModel from "../schemas/estilo.schema.mjs";

const createEstilos =async ( req, res ) => {
    const inputData = req.body;  //Extraigo el objeto enviado

    //try-catch: controla todas las execepciones de las consultas a la base de datos
    try {
        const registeredProduct = await estiloModel.create( inputData );

    console.log( registeredProduct )    //Imprime en la consola
    res.status( 201 ).json( registeredProduct );     //Enviando la respuesta al cliente
    }
    catch (error){
        console.error ( error );
        res.status( 500 ).json({ msg: "Error: No se pudo registrar el producto" });
    }

    
}

export {
    createEstilos
}