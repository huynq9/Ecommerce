const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDisliked: {
        type: Boolean,
        default: false
    },
    likes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ] ,
    isDislikes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ],
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/922745190/vi/anh/vi%E1%BA%BFt-blog-%C3%BD-t%C6%B0%E1%BB%9Fng-kh%C3%A1i-ni%E1%BB%87m-blog-v%E1%BB%9Bi-b%C3%A0n-l%C3%A0m-vi%E1%BB%87c.jpg?s=612x612&w=0&k=20&c=eb8f1uY0RKo9mK1_9k8rsh8xZ130YZhda9kIclk2qZg="
    },
    author: {
        type: String,
        default: "Admin"
    },
    
},
    {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);