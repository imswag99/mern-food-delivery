import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false, // this makes empty attributes not to be deleted 
  }
);

//Export the model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
