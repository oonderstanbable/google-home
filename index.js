const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Google Home is at your service!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = 'ok google';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `{prefix}what is the weather like`){
    message.channel.send("https://www.google.com/search?q=world+weather&rlz=1CAASUJ_enUS823&oq=world+weather&aqs=chrome..69i57j0j69i60j0l3.4051j1j4&sourceid=chrome&ie=UTF-8&safe=active&ssui=on");
  }
});

bot.login(process.env.NTIzNTI2MDI2NzE0Njc3MjUz.DvdsUg.VefjpGPO5N-LLXZ2L-bws2qGDHY);
