import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User, ];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.conection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.conection));
    }
}

export default new DataBase();