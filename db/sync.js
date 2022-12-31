const seq = require("./seq");

//引入需要同步的模型
require("./model/blog");
require("./model/user");

//测试连接
seq
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch(() => {
    console.error("failed...");
  });

//同步数据
seq.sync({ force: true }).then(() => {
  process.exit(); //退出进程
});
