var request = require('request');


var app = {
  key: '',
  send: function(tel, msg, cb){
    if(this.key == ''){
      return console.log("在send()之前，请先sms.key='xxxx'");
    }
    var opt = {
      uri:'http://sms-api.luosimao.com/v1/send.json',
      method:'POST',
      form: {                  
        mobile: tel,
        message: msg
      },
      headers: {               
        'Authorization': 'Basic ' + new Buffer("api:key-" + this.key).toString('base64')                  
      }
    }; 

    request(opt, cb);
  }
}

module.exports = app;