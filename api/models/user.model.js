import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    avatar: {
        type: String,
        default: "https://www.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_7074311.htm#query=profile%20avatar&position=9&from_view=keyword&track=ais&uuid=4f213559-b9ac-40d3-8886-339c1afe1ce8"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;