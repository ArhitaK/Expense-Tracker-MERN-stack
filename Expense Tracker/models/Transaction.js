const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Field required']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('Trasaction', TransactionSchema);