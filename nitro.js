const request = require('request');
const Discord = require("discord.js")
const client = new Discord.Client();
const web = new Discord.WebhookClient('785194919752761415', 'DcT46i0Xwtwg7cvqGfBIoQNWBijWNM3LIrSk5MUp-5xapgOgH_WUsbB2BlF0RKBLiv-l');
  for (let step = 0; step < 9; step++) {
    setInterval(() => {
      let code = '';
      let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      for(var i = 0; i < 16; i++){
          code = code + dict.charAt(Math.floor(Math.random() * dict.length));
      }
       request("https://discordapp.com/api/v6/entitlements/" + code, function (error, response, body){
        if(body = `{"message": "Unknown Gift Code", "code": 10038}`){
            return
        }else{
            web.send("http://discord.gift/" + code)
        }
       });
    }, 100);
  }
