//Importation de multer
const multer = require('multer');

//Dictionnaire 
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};
/*
Iphone_13_pro_1.jpg1642625190972.jpg 
Iphone_13_pro_1.jpg1642625190972.jpg*/

//Configuration du chemin et nom de fichier
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

//Exportation de multer
module.exports = multer({ storage }).single('image');