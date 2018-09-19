promise:
1.含义:Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大,所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。]
2.特点:(1)对象的状态不受外界影响。
      （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果
3.状态:(1)pending 未定状态   (2)fulfilled 接收状态   (3)rejected  拒绝状态
4.状态改变:(1)从pending变为fulfilled  (2)从pending变为rejected
5.缺点:(1)无法取消Promise，一旦新建它就会立即执行，无法中途取消
       (2)如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
       (3)当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
6.基本用法:Promise对象是一个构造函数
  注意:如果当前函数里没有 success 或 error, 这个promise对象始终处于未定义状态
  onst promise = new Promise(function(success, error) {
  // ... some code

  if (/* 异步操作成功 */){
    success();
  } else {
    error();
  }
});
打印时:[[PromiseStatus]] : "状态",[[PromiseValue]] : "所处状态是传的值"
参数作用:这两个参数是控制promise的状态的 ,给.then的回调函数注入参数 j决定promise最终的value的值
7.Promise.prototype.then()
 (1)then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数
 (2)参数:then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
 (3)写法: .then(
            (val) => {
                console.log(val);
                console.log('我接受了!!');
                // then是有返回指的，它返回一个新的Promise !== promise
                return '1'
            },
            (error) => {
                console.log(error);
                console.log('我拒绝了!!');
                // 哈哈哈哈
                return 20
            }
        )
 (4)注意:修改完promise的状态 => .then方法 里面的函数会自动对应执行,并且一旦改变就不会再变
    then是有返回指的，它返回一个新的Promise !== promise
    // 返回的这个Promise对象的状态主要是根据promise1.then()方法返回的值，大致分为以下几种情况：
        //
        // 如果then()方法中返回了一个参数值，那么返回的Promise将会变成接收状态。
        // 如果then()方法中抛出了一个异常，那么返回的Promise将会变成拒绝状态。
        // 如果then()方法调用resolve()方法，那么返回的Promise将会变成接收状态。
        // 如果then()方法调用reject()方法，那么返回的Promise将会变成拒绝状态。
        // 如果then()方法返回了一个未知状态(pending)的Promise新实例，那么返回的新Promise就是未知状态。
        // 如果then()方法没有明确指定的resolve(data)/reject(data)/return data时，那么返回的新Promise就是接收状态，可以一层一层地往下传递。
 (5)then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法
8.Promise.prototype.catch()
(1)Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
(2)写法: .catch(
             (error)=>{
                console.log(error);
                return '某一个.then方法报错了'
            }
       	 )
(3)上面例子返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
(4)验证:catch 是针对上面的.then体内的代码的error侦测,也会返回一个新的promise对象
9.Promise.prototype.finally()
(1)inally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
(2)写法: .finally(
        () => {
            console.log('无论你做了什么我都会执行')
        }
     );
10.解决上来不执行的问题 => 封装函数
function promise_wyq(num) {
        // num 参数是 根据上一步的.then方法return 返回值,去决定这一步到底是成功还是失败
        return new Promise((success,error)=>{
            if (num > 30) {
                success(num)
            }else{
                error(num)
            }
        })
    }
11.Promise.all()
(1)Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
(2)写法:Promise.all([a1,a2,a3]).then((val) =>{
        console.log(val);
    },(error) => {
        console.log(error);
    })
(3)状态:（1）只有a1、a2、a3的状态都变成fulfilled，p的状态才会变成fulfilled，此时a1、a2、a3的返回值组成一个数组，传递给p的回调函数。

（2）只要a1、a2、a3之中有一个被rejected，Promise.all的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给Promise.all的回调函数。

axios:
1.介绍:Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
2.安装:(1)使用 npm:$ npm install axios
	(2)使用 bower:$ bower install axios
	(3)使用 cdn:<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
3.(1)执行 GET 请求:// 为给定 ID 的 user 创建请求
axios.get('https://cnodejs.org/api/v1/topics?page:1&limit:20')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
另一种写法:// 可选地，上面的请求可以这样做
axios.get('https://cnodejs.org/api/v1/topics', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
(2)执行 POST 请求:axios.post('https://cnodejs.org/api/v1/topics', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
(3)执行多个并发请求:function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
4.axios API:可以通过向 axios 传递相关配置来创建请求
(1)// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
(2)创建实例:可以使用自定义配置新建一个 axios 实例
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
5.拦截器:在请求或响应被 then 或 catch 处理前拦截它们。
(1)写法:// 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        console.log(response);
        return response.data.success;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    instance.get('v1/topics',{
        params:{
            page:1,
            limit:20
        }
    })
      .then(function (response) {
        console.log(response);
      })
(2)移除拦截器:var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
(3)为自定义 axios 实例添加拦截器:var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});

变量的解构赋值
定义:ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
1.数组的解构
写法:let [a, b, c] = [1, 2, 3];
     let [foo, [[bar], baz]] = [1, [[2], 3]];
     如果前面两个值 不想要的话
     let [ , , third] = ["foo", "bar", "baz"];
     ... => 扩展运算符:扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。主要用于函数调用。
     let [head, ...tail] = [1, 2, 3, 4];
     //数组的拷贝
     let Arr = [1,2,3,4,5]
     //数组的扩展运算符 适用于简单一维深拷贝
     let [...arr] = Arr;
     //默认值
     let [foo = true] = [];
     let [x = 1] = [undefined];
     // x // 1
     let [x = 1] = [null];
     // x // null
2.对象的解构
写法:let { fo, bar } = { foo: "11", bar: "bbb" };
     let brr = ['wyq','ldx','yt','err'];
     let Brr = [...brr,'瘦','肥','严']
注意:对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
与数组一样，解构也可以用于嵌套结构的对象
写法: let obj = {
     p: [
     'Hello',
       { y: 'World' }
     ]
   };
   let { p: [x, { y }] } = obj;
3.字符串的解构赋值:字符串被转换成了一个类似数组的对象。
写法:const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
写法:let {length : len} = 'hello';
    len // 5
4.数值和布尔值的解构赋值:解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
写法:let {toString: s} = 123;
    s === Number.prototype.toString // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
5.函数参数的解构赋值
(1)function add([x, y]){
  return x + y;
}
add([1, 2]); // 3
(2)map:[[1, 2], [3, 4]].map(([a, b]) => a + b);
   // [ 3, 7 ]
(3)函数参数的解构也可以使用默认值。
function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
(4)function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
(5)undefined就会触发函数参数的默认值:[1, undefined, 3].map((x = 'yes') => x);
 				 // [ 1, 'yes', 3 ]
6.圆括号问题:ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。
以下三种解构赋值不得使用圆括号。
(1)变量声明语句:// 全部报错
let [(a)] = [1];
let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};
let { o: ({ p: p }) } = { o: { p: 2 } };
(2)函数参数:函数参数也属于变量声明，因此不能带有圆括号。
// 报错
function f([(z)]) { return z; }
// 报错
function f([z,(x)]) { return x; }
(3)赋值语句的模式
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
可以使用圆括号的情况:赋值语句的非模式部分，可以使用圆括号
7.用途
（1）交换变量的值:let x = 1;
		let y = 2;
		[x, y] = [y, x];
(2)从函数返回多个值
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
（3）函数参数的定义
function f([x, y, z]) { ... }
f([1, 2, 3]);
(4)提取 JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;
(5)函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
（6）遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
}
（7）输入模块的指定方法:加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");
