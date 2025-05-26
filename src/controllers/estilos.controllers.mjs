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

const getAllEstilos = async ( req, res ) => {

    try{
        const data = await estiloModel.find({});
    res.json( data );
    }
    catch ( error ){
        console.error( error );
        res.json({msg: "Error: No se pudo obtener el listado de estilos" });
    }

    
}

// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createEstilos,
    getAllEstilos
}