const User = require('../models/user');


const repository = {
  getAll: async () => await User.findAll(),
  create: async ({name, email, password}) => {
    try {
      
      const users = await User.create({name,email,password, createAt: new Date()});

      return users

    }catch (e) {
      console.log(e);
      
      return false; 
    }
},
  delete: async ({id}) => {
  try{
    const users = await User.destroy({
      where:{id}
    });

    return users;
    
  }catch (e) {
    console.log(e);
    return false;
  } 
},
  update: async (id,{name, password, email, active}) => {
    try{
      
      const users = await User.update({name, password, email, active, updateAt: new Date()}, {
        where: {id}
      });
      return users;

  } catch (e){
    console.log(e)
    return false;
  } 
},
  findById: async (id) => {
    try{ 
      return await User.findByPk(id);
    }catch (e){
      return false;
    } 
  },
}
  
module.exports = repository;
