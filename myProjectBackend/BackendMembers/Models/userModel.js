const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Email: {
      type: string,
      required: [true, "Please Type your Email!"],
      unique: true,
    },
    Password: {
      type: string,
      required: [true, "Please Type your Password!"],
    },
    role: {
      type: Number,
      default: 0, //0  = user , 1 = admin
    },
    avatar: {
      default:
        "https://www.google.com/search?client=firefox-b-e&sxsrf=AOaemvJ0lBj7ms5GJxW1UbEj5Y64QFDl5g:1639147007608&q=avatar+png&tbm=isch&chips=q:avatar+png,g_1:login:D8uz4tzoygs%3D&usg=AI4_-kRSx1s9DUnz3Cj45zx7esQK-_Gmgw&sa=X&ved=2ahUKEwiE9Py4utn0AhUCQ_EDHYi3DWgQgIoDKAV6BAgCEBM&biw=638&bih=715&dpr=1#imgrc=OmyLfgFTjuk_qM",
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "users",
  }
);

const userModel = mongoose.userModel("usersSchema", userSchema);

module.exports = userModel;
