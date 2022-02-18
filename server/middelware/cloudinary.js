const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.uploadsingle = (locaFilepath, name) => {
  if (name === "employeepic") {
    console.log(locaFilepath)
    return cloudinary.uploader
      .upload(locaFilepath, { folder: "/employee" })
      .then((value) => {
        return value.url;
      });
  }
  else{
    console.log(locaFilepath)
    return cloudinary.uploader
      .upload(locaFilepath, { folder: "/admin" })
      .then((value) => {
        return value.url;
      });
  }
};
