instalar node
nm init -yes

express
npm i express

nodemon
npm i nodemon

mysql
npm i mysql

pug(template engine para html)
npm i pug

creo mi rachivo index.js, q es el archivo principal que tengo en el package.json, creo debajo del index: type:module, con esto no tengo q importra con la palabra "require", puedo usar "import from".
en "scripts": {
debajo de test escribimos:
"dev": "nodemon.js".
luego para correr el nodemon en la consola escribo:
"npm rum dev"
