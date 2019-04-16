import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    email: String,
    cnpj: String,
    address: {
        street: String,
        number: String,
        city: String,
        state: String,
        postalCode: String,
    },
    password: String,
});

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.senha, 2);
        next();
    }
    next();
});

UserSchema.methods.validatePass = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, res) => {
            resolve(res);
        });
    });
};
