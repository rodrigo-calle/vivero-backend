require("dotenv").config();

const cloudinary = require("cloudinary").v2;

console.log(cloudinary.config());

async function uploadMedia(file) {
    console.log("🚀 ~ file: uploadMedia.js ~ line 8 ~ uploadMedia ~ file", file)
    await cloudinary.uploader
    .upload(file, {
        resource_type: "image",
        folder: 'images',
    })
    .then((result) => {
        console.log("success", JSON.stringify(result, null, 2));
    })
    .catch((error) => {
        console.log("🚀 ~ file: uploadMedia.js ~ line 16 ~ uploadMedia ~ error", error)        
        console.log("error", JSON.stringify(error, null, 2));
    }); 
}


module.exports = uploadMedia;
