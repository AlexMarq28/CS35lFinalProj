import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true },
    password: { type: String, required: true},
    selectedFile: selectedFile,
    bio: String,
    categories: String,
    id: { type: String }
});

export default mongoose.model("User", userSchema);