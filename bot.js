const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Mehdi");


client.on("ready", () => {
let channel =     client.channels.get("565498507377770510")
setInterval(function() {
channel.send("SpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpam");
}, 30)
})

client.on('message', message => {
    if(message.content === '-كريدت'){
        message.channel.send('#daily')
    }
});
client.on('message', message => {
    if(message.content === '-رصيد'){
        message.channel.send('#credits')
    }
});

client.login(process.env.BOT_TOKEN);