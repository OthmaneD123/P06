//Importation d'express
const express = require('express');

//Création du routeur
const router = express.Router();



//Importation du controller
const userCtrl = require('../controllers/user');

//Création des routes 
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Exportation du routeur
module.exports = router;