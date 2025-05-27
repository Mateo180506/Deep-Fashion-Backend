import userModel from "../schemas/user.schema.mjs";

const createuser = async (req,res)=>{
    const inputData =req.body;//entrega el objeto enviado
    //try:Controla las excepciones de la consulata a la base de datos
    try{
    const registeredUser=await userModel.create(inputData);
    console.log(registeredUser)//imprime en la consola
    res.status(201).json(registeredUser);//enviamos la respuesta al cliente
    }
    catch(error){//catch: Captura el error producido por la excepcion
    console.error(error);
    res.status(500).json({msg:'Error: No se puedo Registrar el Usuario'});
    }

}

const getallusers= async(req,res)=>{

    try{
    const data= await userModel.find({});
    res.json(data)
    }
    catch(error){
    console.error(error);
    res.json({msg:'Error: No se puedo Obtener la lista de  Usuarios'});
    }
    
}

const getuserbyId= async(req,res)=>{
    const UserId=req.params.id;
    try{
    const data= await userModel.findById(UserId);
    if(!data){
        return res.json({msg:'Este usuario no se encuentra registrado  '})
    }
    res.json(data); 
    }
    catch(error){
    console.error(error);
    res.json({msg:'Error: Este usuario no se pudo encontrar '});
    }
    
}

const deleteuserById= async(req,res)=>{
    const UserId=req.params.id;
    try{
    const data= await userModel.findByIdAndDelete(UserId);
    if(!data){
        return res.json({msg:'Este usuario no existe '})
    }
    res.json(data); 
    }
    catch(error){
    console.error(error);
    res.json({msg:'Error: Este usuario no se pudo encontrar '});
    }
    
}
export {
    createuser,
    getallusers,
    getuserbyId,
    deleteuserById
}