const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("DATABASE connected");
    } catch (error) {
        console.log("DATABASE error", error);
    }
}

module.exports = dbConnect