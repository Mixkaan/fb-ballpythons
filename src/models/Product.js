const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    morph: {type: String, required: true},
    price: {type: Number, required: true},
    gender: {type: String, required: true},
    age: {type: String, required: true},
    category: {type: String, required: true},

    imageURL: {type: String, required: true},
    public_id: {type: String, required: true}
});

module.exports = model('Product', productSchema);