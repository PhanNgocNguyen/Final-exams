const mongoose = require('mongoose');

const connectMongoDB = () => {
    const URI = "mongodb+srv://phanngocnguyen123:2hEozP1dZ9xbIXm5@store.ax9bh97.mongodb.net/?retryWrites=true&w=majority&appName=Store"
    mongoose.connect(URI).then(() => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log('Error connecting to MongoDB', error)
    })
}

module.exports = connectMongoDB;
