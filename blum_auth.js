const $ = new Env('抓取Authorization');

// 主函数
!(async () => {
  if ($request && $request.headers) {
    const authorization = $request.headers['Authorization'] || $request.headers['authorization'];
    if (authorization) {
      $.setdata(authorization, 'blum_authorization');
      $.msg($.name, '获取Authorization成功', authorization);
    } else {
      $.msg($.name, '获取Authorization失败', '未找到Authorization头');
    }
  }
})()
  .catch((e) => {
    $.msg($.name, '获取Authorization失败', e);
  })
  .finally(() => {
    $.done();
  });

// 环境类
function Env(t, e) {
  // 定义各种方法和环境相关的逻辑
  // ...
}
