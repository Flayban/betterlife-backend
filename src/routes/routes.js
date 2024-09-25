const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');
const taxonomiaController = require('../controllers/taxonomiaController');
const animalController = require('../controllers/animalController');
const imagemController = require('../controllers/imagensController');
const somController = require('../controllers/somController');
const categoriaForumController = require('../controllers/categoriaForumController')
const forumController = require('../controllers/forumController')
const comunidadeContrller = require('../controllers/comunidadeController')
const enderecoController = require('../controllers/enderecoController')

const auth = require('../middlewares/authMiddleware');
const cors = require('cors');

router.use(cors());
router.options('*', cors());

// Rotas para usuários
router.post('/api/register', userController.registerUser);
router.post('/api/login', userController.loginUser);
router.post('/api/sendEmailReset', userController.sendEmailReset);
router.post('/api/resetPassword', userController.resetPasswordUser);
router.put('/api/updateUser/:id', userController.updateUser);
router.put('/api/deleteUser/:id', userController.deleteUser);
router.get('/api/consultCep/:cep', userController.consultCep);

// Rotas para taxonomia
router.post('/api/taxonomia', taxonomiaController.createTaxonomia);
router.put('/api/deleteTaxonomia/:id', taxonomiaController.deleteTaxonomia);
router.put('/api/updateTaxonomia/:id', taxonomiaController.updateTaxonomia);
router.get('/api/getAllTaxonomia', taxonomiaController.getAllTaxonomia);

// Rotas para animal
router.post('/api/registerAnimal', animalController.addAnimal);
router.put('/api/updateAnimal/:id', animalController.editAnimal);
router.put('/api/deleteAnimal/:id', animalController.deleteAnimal);
router.get('/api/getAllAnimals', animalController.getAllAnimals);

//Definindo a rota para registrar uma nova imagem
router.post('/api/registerImagem', imagemController.salvarFotos);
router.put('/api/updateImagem/:id', imagemController.editaImagem);
router.delete('/api/deleteImagem/:id', imagemController.deletaImagem);

//Rotas para registrar som de um animal
router.post('/api/registerSom', somController.salvarSom);
router.put('/api/updateSom/:id', somController.updateSom);
router.delete('/api/deleteSom/:id', somController.deleteSom);

//Rotas para categorias de fóruns
router.post('/api/registerCategoryForum', categoriaForumController.createCategoriaForum);
router.get('/api/getAllCategoriaForum', categoriaForumController.getAllCategoriaForum);
router.put('/api/updateCategoriaForum/:id', categoriaForumController.updateCategoriaForum);
router.put('/api/deleteCategoriaForum/:id', categoriaForumController.deleteCategoriaForum);

//Rotas para post do fóruns
router.post('/api/registerForum', forumController.cadastrarPost);
router.get('/api/getAllForum', forumController.listarPosts);
router.put('/api/updateForum/:id', forumController.editarPost);
router.put('/api/deleteForum/:id', forumController.deletarPost);
router.get('/api/getAllRespondForum/:id', forumController.listarRespostasForum);
router.get('/api/getAllForumByUser/:id', forumController.listarPostsPorUsuario);
router.get('/api/getAllForumByPostId/:id', forumController.buscarPostPorId);
router.get('/api/posts/:id/respostas', forumController.listarRespostasPorPost);
router.post('/api/posts/:id/respostas', forumController.addRespostaToPost);


//Rotas para comunidade 
router.post('/api/registerComunidade' , comunidadeContrller.cadastrarComunidade);
router.put('/api/updateComunidade/:id', comunidadeContrller.atualizarComunidade);
router.put('/api/deletarComunidade/:id' , comunidadeContrller.deletarComunidade);
router.get('/api/getAllComunidade' , comunidadeContrller.listarComunidades);
router.get('/api/getAllComunidadePorUser/:id' , comunidadeContrller.listarComunidadesCriadaPorUsuario);

// Rotas para endereço
router.post('/api/registerAddress', enderecoController.addEndereco);
router.put('/api/updateAddress/:id', enderecoController.editEndereco);
router.put('/api/deleteAddress/:id', enderecoController.deleteEndereco);

module.exports = router;
