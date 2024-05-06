const connection = require('./connection');
const bcrypt = require('bcrypt')

class user{
    constructor(usu_nome , usu_email , usu_senha , usu_tel , faculdade){
        this.usu_nome = usu_nome,
        this.usu_email = usu_email,
        this.usu_senha = usu_senha,
        this.usu_tel = usu_tel,
        this.faculdade = faculdade
    }
};

const createUser = async (infoUser) => {
    const {usu_nome , usu_email , usu_senha , usu_telefone , faculdade} = infoUser;
    const query = 'INSERT INTO Usuarios (usu_nome , usu_email , usu_senha , usu_telefone , faculdade) VALUES (?, ?, ?, ?, ?)'
    const newUser = new User(usu_nome , usu_email , usu_senha , usu_telefone , faculdade)

    const salt = await bcrypt.genSalt(12)
    const SenhaHash = await bcrypt.hash(senha,salt)

    const [createdUser] = await connection.execute (query, [newUser.usu_nome , newUser.usu_email , SenhaHash , newUser.Usu_tel , newUser.faculdade])

    return createUser;
};

const getAllInfoUser = async (usu_id) =>{
    const query = 'SELECT usu_nome, usu_email , usu_tel , faculdade FROM Usuarios WHERE id = ?'

    const [InfoUser] = await connection.execute(query, [usu_id]);
        return InfoUser;    
};

const getAll = async() => {

    try {
        const query = ('SELECT * FROM Usuariios');

        const [User] = await connection.execute(query);
        return user;
    } catch (error) {
        return res.status(500).json({ status: 7 });
    }

}; 

module.exports = {
    getAll,
    createUser
};
