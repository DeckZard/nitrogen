const request = require('request');
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
            console.log("Codigo Encontrado! http://discord.gift/" + code)
        }
       });
    }, 100);
  }
