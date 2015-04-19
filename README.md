# node-sms-luosimao

node发送短信模块，后台服务采用的是luosimao.com的服务

[![npm version](https://badge.fury.io/js/node-sms-luosimao.svg)](http://badge.fury.io/js/node-sms-luosimao)


## demo

 
```
var sms = require("./index");

sms.key = process.env.LSM_KEY

sms.send('18612189317', '测试1~~【小斑马货栈】', function(error, res, body){
  console.log(body);
});
``` 

说明

- sms.key是https://sms-my.luosimao.com/api里的API KEY


## luosimao测试

- 收到短信时间，大约8到12秒
- 价格也还凑合，http://luosimao.com/service/sms#sms-price


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).