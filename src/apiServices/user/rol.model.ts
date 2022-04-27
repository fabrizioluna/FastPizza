const { Schema, model } = require('mongoose');

const roleSchema = Schema({
    role_userAssociate: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
    },
    role_id: {
        type: Number
    },
    role_name: {
        type: String,
    }
});

export const Role = model('role', roleSchema);