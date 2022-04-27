const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    author: { type: Types.ObjectId, ref: 'User' },
    owner: { type: String },
    date:{type: Date}
});
module.exports = model('Searched', schema);