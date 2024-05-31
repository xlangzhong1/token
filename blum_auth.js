// 将所有请求头的键名转换为小写的函数
function ObjectKeys2LowerCase(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
}

// 获取Authorization
function GetAuthorization() {
  const headers = ObjectKeys2LowerCase($request.headers); // 将头信息的键名转换为小写

  if (/gateway\.blum\.codes/.test($request.url)) { // 检查URL是否匹配
    const authorization = headers['authorization']; // 获取authorization头

    if (authorization) {
      console.log(`获取到的Authorization: ${authorization}`);
      $persistentStore.write(authorization, 'BLUM_AUTHORIZATION'); // 存储Authorization
      $notification.post('Blum Authorization', '', '🎉 数据获取成功'); // 发送通知
    } else {
      console.log("❌ 获取Authorization失败");
    }
  }
}

// 调用函数
GetAuthorization();
