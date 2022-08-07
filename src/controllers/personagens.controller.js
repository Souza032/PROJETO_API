const personagensService = require('../services/personagens.service');

const findAllpersonagensController = (req, res) => {
  const allpersonagens = personagensService.findAllpersonagensService();
  res.send(allpersonagens);
};

const findByIdpersonagemController = (req, res) => {
  const id = Number(req.params.id);
  const personagem = personagensService.findByIdpersonagemService(id);
  res.send(personagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const novoPersonagem = personagensService.createPersonagemService(personagem);
  res.send(novoPersonagem);
};

const updatePersonagemController = (req, res) => {
  const id = Number(req.params.id);
  const personagemEdit = req.body;
  const updatedPersonagem = personagensService.updatePersonagemService(
    id,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
  const id = Number(req.params.id);
  personagensService.deletePersonagemService(id);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllpersonagensController,
  findByIdpersonagemController,
  createPersonagemController,
  deletePersonagemController,
  updatePersonagemController,
};
