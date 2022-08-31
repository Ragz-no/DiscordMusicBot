const Discord = require("discord.js"); // Discord.js
const config = require("./config.json"); // Config file

const client = new Discord.Client({ intents: [
    "GUILDS",  // guilds
    "GUILD_MESSAGES", // guild messages
    "DIRECT_MESSAGES" // direct messages
    ] });
    
const prefix = "!"; // prefix for commands


client.once("ready", () => {
    console.log("Ragz on the beat er pålogget"); // when the bot is ready
});


client.on("message", message => { // when a message is sent
    if (!message.content.startsWith(prefix) || !message.guild) return;  // if the message doesn't start with the prefix or if the message is not in a guild

    let args = message.content.substring(prefix.length).split(" "); // get the arguments

    switch (args[0]) { // switch the command
        case "ping": // ping command
            message.channel.send("pong"); // send a message
            break; // break the switch
        
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
        
});




// gjemmer token i en fil for å unngå at den blir vist på github
client.login(config.token);