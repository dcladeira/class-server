import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            requeride: true
        },
        email: {
            type: String,
            unique: true,
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            lowercase: true
        },
        role: {
            type: String,
            enum: ["TI", "Marketing", "People", "CEO", "Intern"]
        },
        age: {
            type: Number
        },
        active: {
            type: Boolean,
            default: true
        },
        address: {
            city: { type: String },
            state: { type: String }
        }
    },
    {
        timestamp: true
    }
);

// O primeiro argumento tem que ser no singular, o mongoose cria a colection com o mesmo nome no plural (na verdade, adiciona um S)
const UserModel = model("User", userSchema);

export default UserModel;

