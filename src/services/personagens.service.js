const personagens = [
  {
    id: 1,
    nome: 'Goku',
    descricao:
      'Alegre, corajoso, e também um pouco ingênuo, Goku é um Saiyajin originalmente enviado à Terra quando criança com a missão de destruí-la. Porém, um acidente altera sua memória, fazendo-o crescer com um coração puro e depois se torna o maior defensor da Terra, e também o líder informal dos Guerreiros Z. Através da sua vida, ele treina duro e deseja ser o melhor guerreiro possível, e ao mesmo tempo usando sua força incrível para manter a paz.',
    imagem: './assets/images/Goku_29.webp',
    forca: 10.0,
  },
  {
    id: 2,
    nome: 'Vegeta',
    descricao:
    'Vegeta IV, ou Príncipe Vegeta é o príncipe da raça Saiyajin e arqui-rival de Goku. Ele é o filho mais velho de Vegeta III, o irmão mais velho de Tarble, o marido de Bulma, o pai de Trunks e Bra, e tataravô de Vegeta Jr. Junto com Goku, Gohan, e Piccolo, ele é facilmente um dos personagens mais prominentes da série, recebendo mais desenvolvimento após ser introduzido do que vários personagens. Régio, egoísta e cheio de orgulho, Vegeta foi antes um cruel guerreiro e mercenário, mas depois abandona seu papel no Exército Galáctico de Freeza, mas opta a ficar e morar na Terra, lutando junto aos Guerreiros Z; enquanto tenta ser o melhor guerreiro do universo, especificamente com a missão de derrotar e ultrapassar Goku em poder. Seu personagem evolui de vilão para anti-herói, e depois protagonista ao decorrer da série.',
    imagem: './assets/images/Vegeta.webp',
    forca: 10.0,
  },
  {
    id: 3,
    nome: 'Gohan',
    descricao:
    'Gohan é o primeiro filho do protagonista da série Goku e sua esposa Chichi, o mais irmão mais velho de Goten, o esposo de Videl e pai de Pan. Gohan é o primeiro híbrido (meio terráqueo, meio Saiyajin) a aparecer nas séries. Ele é nomeado após o avô adotivo de Goku, Gohan. Diferente de seu pai, Gohan não tem paixão por lutas e prefere fazê-lo apenas quando precisa defender seus amigos. Porém, Gohan luta com os Guerreiros Z para defesa da Terra durante grande parte da sua vida. Ele eventualmente estabelece uma família ao fim de Dragon Ball Z, optando pela vida de cientista.',
    imagem: '../assets/images/Gohan.webp',
    forca: 7.0,
  },
];

const findAllpersonagensService = () => {
  return personagens;
};

const findByIdpersonagemService = (id) => {
  return personagens.find((personagem) => personagem.id == id);
};

const createPersonagemService = (novoPersonagem) => {
  const newId = personagens.length + 1;
  novoPersonagem.id = newId;
  personagens.push(novoPersonagem);
  return novoPersonagem;
};

const updatePersonagemService = (id, personagemEdited) => {
  personagemEdited['id'] = id;
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  personagens[personagemIndex] = personagemEdited;
  return personagemEdited;
};

const deletePersonagemService = (id) => {
  const PersonagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  return personagens.splice(PersonagemIndex, 1);
};

module.exports = {
  findAllpersonagensService,
  findByIdpersonagemService,
  createPersonagemService,
  deletePersonagemService,
  updatePersonagemService,
};
