import mongoose from "mongoose"

export const connectDb = async() => {
  await mongoose.connect('mongodb+srv://swagattalukdar007:tOzeFG7pFTRvPvOs@cluster0.bfwoyqw.mongodb.net/food-del').then(() => console.log("DB Connected"))
}