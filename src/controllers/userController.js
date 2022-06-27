const userRepository = require("../repositories/user");


resource = {
  getAll: async (req, res) => {
    try {
      const users = await userRepository.getAll();

      return res.send({ users });
    } catch (err) {
      return res.status(400).send({ error: "Falha no Registro", err: err });
    }
  },
  insertUser: async(req, res) => {
    try {

      const created = await userRepository.create(req.body);

      if (!created) {
        throw new Error("Não foi possível criar o usuário");
      }

      return res.status(201).send({ created });
      
    } catch (e) {
      console.log(e)
      return res.status(400).send({ error: "Falha no Registro", err: e.message });
    }
  },
  deleteUser: async (req,res) => {
    try{
      const deleted = await userRepository.delete(req.params);

      if (!deleted) {
        throw new Error('Usuário não existe');
      }
      
      res.send({sucesso:"Usuário Deletado"})
      
    }catch(e){
      return res.status(400).send({error: "Falha ao deletar usuário", err: e.message});
    }
  },
  updateUser: async (req,res) => {
    try{
      const {id} = req.params
      const find = await userRepository.findById(id);
      
      if(!find){
        throw new Error('Usuário não existe');
      }
      const updated = await userRepository.update(id , req.body);

      res.send({ updated });
      
    }catch (e){
      console.log(e)
      return res.status(400).send({error : "Falha ao atualizar usuário" , err: e.message})
    }
  },
};

module.exports = resource;
