const Space = require('../models/space');
const serviceCtrl = {};

serviceCtrl.getSpaces = async (req, res) => {
    const spaces = await Space.find(); 
    res.json({respuesta: spaces});
}

serviceCtrl.getSpace = async (req, res) => {
    const space = await Space.findById(req.params.id);
    res.json(space);
}

serviceCtrl.postSpace = async (req, res) => {
    const space = new Space({
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice,
    });
    await space.save();
    res.json({Space: 'Creado'});
}

serviceCtrl.putSpace = async (req, res) => {
    const { id } = req.params;
    const space = {
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice
        
    };
    await Space.findByIdAndUpdate(id, {$set: space}, {new: true});
    res.json({Space: 'Editado'});
}

serviceCtrl.deleteSpace = async (req, res) => {
    await Space.findByIdAndRemove(req.params.id);
    res.json({Space: 'Eliminado'})
}

module.exports = serviceCtrl;