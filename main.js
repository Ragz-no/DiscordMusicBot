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
   
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "ping":
            message.channel.send("pong");
            break;
        
        case "github":
            message.channel.send("https://github.com/Ragz-no");   
            break;
    }
        // må lage en case for kommandoer som ikke finnes
});





client.login(config.token);