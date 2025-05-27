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

const getEstilosById = async ( req, res ) => {
    const estiloId = req.params.id;   //El nombre final dependera del nombre del parametro de la ruta
    try{
        const data = await estiloModel.findById( estiloId );
        //Verifica si el producto No existe

        if( ! data ){
            return res.json({msg: "El estilo no se encuentra registrado"});
        }
        res.json( data );
    
    }
    catch( error ){
        console.error( error );
        res.json({msg: "Error: No se pudo eliminar el producto"});
    }
    
}

const removeEstilosById = async ( req, res ) => {
    const estiloId = req.params.id;

    try { 
    const data = await estiloModel.findByIdAndDelete ( estiloId );
    // const data = await estiloModel.findOneAndDelete ({ _id: estiloId} );

    if( ! data ){
            return res.json({msg: "El estilo no existe"});
        }

    res.json( data );
    }
    catch ( error ) {
        console.error( error );
        res.json({msg: "Error: Este estilo no se pudo encontrar"});
    }
}

const updateEstilosById = async ( req, res ) => {
    const estiloId = req.params.id; //Obtenemos el ID de la parametrizacion de la ruta
    const inputData = req.body; //Obtenemos el body de la peticion

    try{
    const data = await estiloModel.findByIdAndUpdate( estiloId, inputData, {new:
        true
    } );

    res.json ( data );
    }
    catch ( error ){
        console.error( error );
        res.json({msg: "Error: No se pudo actualizar el producto"});
    }
}
// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createEstilos,
    getAllEstilos,
    getEstilosById,
    removeEstilosById,
    updateEstilosById

}