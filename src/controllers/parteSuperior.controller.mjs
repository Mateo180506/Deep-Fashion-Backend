
import parteSuperiorModel from "../schemas/parteSuperior.schema.mjs";

const crearParteSuperior = async (req, res) => {
    const inputData = req.body;


    // CONTROLA LAS EXCEPCIONES DE LA CONSULTA A LA BASE DE DATOS
    try{

    const registeredparteSuperior = await parteSuperiorModel.create( inputData); 

    console.log(registeredparteSuperior);  //imprime en la consola
    res.json(registeredparteSuperior); //Enviando la respuesta al cliente
    }

    catch (error){
        console.error(error);
        res.json({msg:'Error: No se pudo registrar el producto'})
    }
}

export {
    crearParteSuperior,
}


