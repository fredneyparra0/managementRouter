const { connect } = require('mongoose');

async function connectDb() {
    try {
        await connect(process.env.URI);
        console.log('connected to database');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;