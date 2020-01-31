import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize
            }
        );

        this.addHook('beforeSave', async (User) => {
            if (User.password) {
                User.password_hash = await bcrypt.hash(User.password, 8);
            }
        });

        return this;
    }
}

export default User;