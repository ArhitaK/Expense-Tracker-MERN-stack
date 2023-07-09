const Trasaction = require('../models/Transaction');

//@desc   get all transactions
//@route  GET/api/v1/transactions
//@access Public
exports.getTransactions = async(req, res, next) => {
    try {
        const transactions = await Trasaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
    });
        
    } catch (error) {
        if(error=='ValidationError'){
            const messages = object.values(error.errors).map(val => val.message);

            return res.status(400),json({
                success: false,
                error: messages
            });
        }
        else{
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

//@desc   add transaction
//@route  POST/api/v1/transactions
//@access Public
exports.addTransactions = async(req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
    });
        
    } catch (error) {
        console.log(error);
    }    
}

//@desc   delete transaction
//@route  DELETE/api/v1/transactions/:id
//@access Public
exports.deleteTransaction = async(req, res, next) => {
    try {
        const transaction = await Trasaction.findById(req.params.id);

        if(!transaction){
            return req.status(400).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        
    }
}

