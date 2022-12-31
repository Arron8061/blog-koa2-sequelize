const ENV = process.env.NODE_ENV; //环境参数

//配置
let MYSQL_CONF;
let REDIS_CONF;

if (ENV === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "myblog",
    database_seq: "myblog_sequelize",
  };
  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}
//远程服务器的设置（线上模式）现在先用这个模拟
if (ENV === "production") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "myblog",
    database_seq: "myblog_sequelize",
  };
  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
};
