'use strict'

const natural = require('natural');
const classifier = new natural.BayesClassifier();

classifier.addDocument('Eso es todo!!', 'positivo'); // Miguel
classifier.addDocument('Este es un buen dia', 'positivo');
classifier.addDocument('El clima es bueno hoy', 'positivo');
classifier.addDocument('Este es un mal dia no aguanto el dolor de cabeza', 'negativo');
classifier.addDocument('El trafico fue terrible hoy', 'negativo');
classifier.addDocument('El sol es muy obscuro', 'negativo');
classifier.addDocument('chale esta muy bueno', 'positivo');
classifier.addDocument('chale que mal nimodo', 'negativo');
classifier.addDocument('El día está lluvioso', 'negativo'); //Anahi
classifier.train()

console.log('1.- ', classifier.classify('hoy es un dia maravilloso'))

console.log('2.- ', classifier.classify('El sol esta apagado'))

console.log('3.- ', classifier.classify('Me fue mal hoy'))

console.log('4.- ', classifier.classify('chale eso que te paso esta mal'))

console.log('5.- ', classifier.classify('chale nimodo'))

// Agregar console.logs O/Y addDocument con cualquier 
// cosa que se les ocurra dejen su nombre en un comentario

console.log('Yo soy Daniel ', classifier.classify('chale que chido'))
console.log('Hola Soy Miguel ', classifier.classify('esto esta interesante')) // Miguel
console.log('6.- ', classifier.classify('hoy está lloviendo')) //Anahi

