const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', function (message) {
    if (message.content == 'bonjour') {
        message.reply('bonjour') 
    }
    if (message.content == 'salut') {
        message.reply('salut')
    }
} )

bot.on('message', function (message){
    if (message.content == '!information') {
        message.reply('Tout d abord bienvenu a toi ! si tu as remarqué il y a plusieur élément qui sont l Eau, la Terre, le Feu, le Vent et la Foudre pour les obtenir c est trés simple il suffi de taper "!" suivi de l élément en minuscule le tout coller donc dès maintenant tu peux essayer ça dans le salon (général-🐥), exemple : { "!eau" Attribut l élément Eau💧 } { "!feu" Attribut l élément Feu 🔥 } { "!foudre" Attribut l élément Foudre ⚡️} { "!terre" Attribut l élément Terre 🌳} { "!vent" Attribut l élément Vent 💨 }')
    }
})

bot.login('NDM5Mjc0NDg5Nzc2NDM5MzA2.DcQx6Q.MdcSPHLNeaYX6xfqbYmOcSGzTrY')
