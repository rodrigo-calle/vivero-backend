const fs = require('fs');
const cloudinary = require("cloudinary").v2;

async function uploadSingleHandler(req, res) {
    const { file } = req;

    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'images',
        })
        res.status(200).json(result);
    } catch (error) {
        console.log("🚀 ~ file: uploadMedia.js ~ line 16 ~ uploadMedia ~ error", error)
        console.log("error", JSON.stringify(error, null, 2));
    } finally {
        fs.unlinkSync(file.path);
    }
}

module.exports = {
    uploadSingleHandler,
}
