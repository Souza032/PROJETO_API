const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');

route.get(
  '/todosPersonagens',
  controllerPersonagens.findAllpersonagensController,
);
route.get(
  '/personagen/:id',
  controllerPersonagens.findByIdpersonagemController,
);
route.post('/create', controllerPersonagens.createPersonagemController);

route.put('/update/:id', controllerPersonagens.updatePersonagemController);

route.delete('/delete/:id', controllerPersonagens.deletePersonagemController);

module.exports = route;
