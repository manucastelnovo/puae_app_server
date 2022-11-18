import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/test", {})
  .then((db) => console.log("Data base connected"))
  .catch((err) => console.log(err));
