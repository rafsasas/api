const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', {
	dialect: 'sqlite',
	storage: './database.sqlite',
	define: {
		timestamps: false,
		underscored: false,
		underscoredAll: false,
		defaultScope: {
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at'],
			},
		},
	},
})

const connection = async () => {
	try {
		await sequelize.authenticate();
			console.log('Connection has been established successfully.');
	} catch (error) {
			console.error('Unable to connect to the database:', error);
	}      
}

connection();


module.exports = sequelize;
