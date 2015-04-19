var sms = require("./index");

sms.key = process.env.LSM_KEY

sms.send('18612189317', '测试1~~【node发送短信模块】', function(error, res, body){
  console.log(body);
});