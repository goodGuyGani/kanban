/*
PORT=5000
MONGODB_URL=mongodb+srv://kanban-app:oldspeeddemon112408kiankie123@kanbancluster.jsyqjnx.mongodb.net/?retryWrites=true&w=majority
PASSWORD_SECRET_KEY=GK255jx8HDZhxCSu
TOKEN_SECRET_KEY=ockas@SSSNCA$1231
*/

const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  schemaOptions
);

module.exports = mongoose.model("User", userSchema);
