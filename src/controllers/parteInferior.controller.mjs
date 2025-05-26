import parteInferiorModel from "../schemas/parteInferior.schema.mjs";

const crearParteInferior = async (req, res) => {
    const inputData = req.body;


    
    // CONTROLA LAS EXCEPCIONES DE LA CONSULTA A LA BASE DE DATOS

    try{

    const registeredparteInferior = await parteInferiorModel.create( inputData); 

    console.log(registeredparteInferior);  //imprime en la consola
    res.status(201).json(registeredparteInferior); //Enviando la respuesta al cliente(

    }

    catch(error){
        console.error(error);
        res.status( 500 ).json({msg:'Error : No se pudo registar el producto'});
    }
}


const getAllParteInferior = async (req, res) => {
    
    try{

    
    const data = await parteInferiorModel.find({});
    res.json( data );
    }
    catch(error){
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de producto'})
    }
}

export {
    crearParteInferior,
    getAllParteInferior
}

