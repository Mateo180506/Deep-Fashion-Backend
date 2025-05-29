

import outfitIAModel from '../schemas/outfitIA.schemas.mjs';

const createOutfitIA = async (req, res) => {
    const inputData = req.body;

    try {
        const newOutfit = await outfitIAModel.create(inputData);
        console.log(newOutfit);
        res.status(201).json(newOutfit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo registrar el outfit generado por IA.' });
    }
};

const getAllOutfitIA = async (req, res) => {
    try {
        const outfits = await outfitIAModel.find({});
        res.json(outfits);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo obtener la lista de outfits generados.' });
    }
};

const getOutfitIAById = async (req, res) => {
    const outfitId = req.params.id;

    try {
        const outfit = await outfitIAModel.findById(outfitId);
        if (!outfit) {
            return res.status(404).json({ msg: 'El outfit no se encuentra registrado.' });
        }
        res.json(outfit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo obtener el outfit solicitado.' });
    }
};

const deleteOutfitIAById = async (req, res) => {
    const outfitId = req.params.id;

    try {
        const deletedOutfit = await outfitIAModel.findByIdAndDelete(outfitId);
        if (!deletedOutfit) {
            return res.status(404).json({ msg: 'El outfit no existe o ya fue eliminado.' });
        }
        res.json(deletedOutfit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo eliminar el outfit.' });
    }
};

export {
    createOutfitIA,
    getAllOutfitIA,
    getOutfitIAById,
    deleteOutfitIAById
};
