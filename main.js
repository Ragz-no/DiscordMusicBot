const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({ intents: [
    "GUILDS", 
    "GUILD_MESSAGES", 
    "DIRECT_MESSAGES"
    ] });
    
const prefix = "!";


client.once("ready", () => {
    console.log("Ragz on the beat er pålogget");
});


client.on("message", message => {
    if (!message.content.startsWith(prefix) || !message.guild) return; 

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "ping":
            message.channel.send("pong");
            break;
        
        case "github":
            message.channel.send("https://github.com/Ragz-no");   
            break;
             
        case "creator": 
            message.channel.send("My creator is Ragz");
            break;
        
        case "commands":
            message.channel.send("Her er mine kommandoer");
            break;

        case "clear":
            if(!args[1]) return message.reply("Error plis definer andre tall, som f.eks !clear 5")  
            message.channel.bulkDelete(args[1]);
            break;

        default:
            message.reply("Invalid kommando, bruk !commands for å se alle kommandoer.")    

    }
        // må lage en case for kommandoer som ikke finnes
});





client.login(config.token);