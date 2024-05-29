import mongoose from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
      type:String,
      required:true
    }
});

//Export the model
const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);

export default foodModel;