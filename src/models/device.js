const { Schema, model } = require('mongoose');

const schemaDevice = Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    macAddress: {
        type: String,
        required: true
    },
    ipAssigned: {
        type: Number,
        required: true
    },
    typeDevice: {
        type: String,
        required: true
    }
});

module.exports = model('device', schemaDevice);