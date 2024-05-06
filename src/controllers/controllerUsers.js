const models = require('../Models/modelUsers')

const getAll = async(req,res) => {

    try {
        const User = await models.getAll();
        return res.status(200).json(User);
    } catch (error) {
        return res.status(500).json({ status: 7});
    }
};

const createUser = async(req, res) => {

    try {
        
        const createdUser = await models.createUser(req.body);
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json({ status: 4 , error: error.message});
    }
    
};

const getAllInfoUser = async (req, res) => {

    const usu_Id = req.user.usu_Id; 
    const UserData = req.body;
    UserData.ID_Aluno = usu_Id;

    const InfoUserList = await models.getAllInfoUser(usu_Id);

    if(!InfoUserList.length){
        return res.status(500).json({ erro: "erro ao buscar por suas informações" });
    }
    const firstUser = InfoUserList[0]
    return res.status(200).json(firstUser);
};

module.exports = {
    getAll,
    createUser
};
