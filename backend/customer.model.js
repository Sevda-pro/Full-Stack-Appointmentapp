module.exports=(sequelize, Sequelize) => {
    const customers=sequelize.define('customer',{
        name:{
            type:Sequelize.STRING
        },
        phone:{
            type:Sequelize.INTEGER
        },
        email:{
            type:Sequelize.STRING,
            primaryKey:true
        }
    });
    return customers
}

