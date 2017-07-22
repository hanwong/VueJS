## JSON Server

[json-server](https://github.com/typicode/json-server) 모듈

#### 1-1. 전역 설치

```sh
$ npm i -g json-server
```

#### 1-2. 도움말 확인

```sh
$ json-server -h

json-server [options] <source>

옵션:
  --config, -c       Path to config file              [기본: "json-server.json"]
  --port, -p         Set port                                       [기본: 3000]
  --host, -H         Set host                                  [기본: "0.0.0.0"]
  --watch, -w        Watch file(s)                                        [여부]
  --routes, -r       Path to routes file
  --middlewares, -m  Paths to middleware files                            [배열]
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                              [여부]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing                [여부]
  --no-gzip, --ng    Disable GZIP Content-Encoding                        [여부]
  --snapshots, -S    Set snapshots directory                         [기본: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)            [기본: "id"]
  --quiet, -q        Suppress log messages from output                    [여부]
  --help, -h         도움말을 보여줍니다                                  [여부]
  --version, -v      버전 넘버를 보여줍니다                               [여부]

예시:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server
```

#### 2-1. JSON Server 실행

```sh
$ json-server --watch <json-file>
```

#### 2-2. JSON Server에 요청

웹 브라우저 화면에 결과 값 표시.

```sh
# id 값으로 데이터 결과 반환
http://localhost:3000/music-list/1

# artist 값으로 데이터 결과 반환
http://localhost:3000/music-list?artist=Rihanna

# 질의(query) 값으로 데이터 결과 반환
http://localhost:3000/music-list?q=rihanna
```

-

### POSTMAN

RESTfull API 개발을 손쉽게 만들어 주는 서비스 - [포스트맨](https://www.getpostman.com/)

#### 1. Faker 설치

```sh
$ npm i faker
```

#### 2. Faker.js 사용

`employees.js` 생성

```js
const faker = require('faker');

// faker.locale = 'ko';

let count = 10;

function generateEmployees() {
  let employees = [];
  for ( let id=1; id<=count; id++ ) {
    employees.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: {
        city: faker.address.city(),
        country: faker.address.country()
      },
      company: faker.company.companyName(),
      image: faker.image.avatar(),
      phone: faker.phone.phoneNumber()
    });
  }
  return { employees };
}

module.exports = generateEmployees;
```

-

### jQuery 라이브러리 - Ajax 메서드

#### 1. GET - 데이터 가져오기

```js
$.get('url', function(data) {
  console.dir(data);
});
```

#### 2. POST - 데이터 전송하기

```js
$('form').submit(function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.post('url', formData, function(data) {
    console.log(data);
  });
});
```

#### 3. PUT - 데이터 수정하기

```js
$.ajax({
  url: 'url',
  data: data_string,
  type: 'PUT'
}).then(function(data) {
  // debugger;
  console.log(data);
});
```

#### 4. DELETE - 데이터 제거하기

```js
$.ajax({
  url: 'url',
  type: 'DELETE'
}).then(function(data){
  console.log(data);
});
```

-

### Axios 라이브러리

프로미스(Promise) 기반 HTTP 클라이언트 Ajax 라이브러리

- [axios](https://github.com/mzabriskie/axios)
- [axios, Config Defaults](https://github.com/mzabriskie/axios#config-defaults)
- [axios, Request Method Aliases](https://github.com/mzabriskie/axios#request-method-aliases)

#### 설치

```sh
$ npm i axios
```

#### [GET] 데이터 요청

```js
axios.get('https://jsonplaceholder.typicode.com/todos')
     .then(function(response){
        console.log(response);
        // response.status
        // response.statusText
        // response.headers     JSON.stringify(response.headers, null, '\t')
        // response.data        JSON.stringify(response.data, null, '\t')
     })
     .catch(function(error)){
        console.error(error);
     });
```

#### [GET] 매개변수를 전달하여 데이터 요청

```js
var todoId = 2;
axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          id: todoId
        }
      })
      .then(function(response){})
      .catch(function(error){});
```

#### [POST] 데이터에 새로운 아이템 추가 요청

```js
var todoTitle = 'axios 스터디';
axios.post('https://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitle,
        completed: false
      })
      .then(function(response){})
      .catch(function(error){});
```

-

### [JSON vs JSONP](http://json-jsonp-tutorial.craic.com/index.html)

`JSONP`는 [크로스 도메인 보안 정책(Same Origin Policy)](https://en.wikipedia.org/wiki/Same-origin_policy)을 우회하는 방법.

월드 와이드 웹은 동일한 도메인상의 요청만 가능하도록 제한하였지만, 도메인 간 데이터 통신으로부터 다이나믹한 웹 구현을 위한 방법으로 JSONP가 나오게 되었다. 외부 도메인(Open Web API 이용 시)으로 `Ajax` 요청을 할 때는 `json`이 아닌, `jsonp`를 사용해야 한다. 함수 `callback`을 이용하여 서버로부터 받은 JSON 데이터를 감싼다는 점 외에는 동일하다.

```js
// json
{"key1" : "value1",  "key2" : "value2"}

// jsonp
callback( {"key1" : "value1",  "key2" : "value2"} );
```

#### JSONP를 구현하는 방법

요청 URL 뒤에 `?callback=?`를 추가하여 `jsonp` 요청 구현

<!-- http://stackoverflow.com/questions/2887209/what-are-the-differences-between-json-and-jsonp -->

__JavaScript 예__

```js
//JSON
{"name":"yamoo9", "id":9};

//JSONP
jsonCallback( {"name":"yamoo9", "id":9} );

// ------------------------------------------------

function jsonCallback(json){
  alert(json.name);
}

var script = document.createElement('script');
script.getAttribute('src', 'http://example.com/jsonp?jsonCallback');
document.body.appendChild(script);
```

__jQuery 예제__

```js
jsonCallback({
  "sites":
  [
    {
      "siteName": "JQUERY4U",
      "domainName": "http://www.jquery4u.com",
      "description": "#1 jQuery Blog for your Daily News, Plugins, Tuts/Tips &amp; Code Snippets."
    },
    {
      "siteName": "BLOGOOLA",
      "domainName": "http://www.blogoola.com",
      "description": "Expose your blog to millions and increase your audience."
    },
    {
      "siteName": "PHPSCRIPTS4U",
      "domainName": "http://www.phpscripts4u.com",
      "description": "The Blog of Enthusiastic PHP Scripters"
    }
  ]
});

(function($) {

  var url = 'http://www.jquery4u.com/scripts/jquery4u-sites.json?callback=?';

  $.ajax({
    type:          'GET',
    url:           url,
    async:         false,
    contentType:   "application/json",

    dataType:      'jsonp',
    jsonpCallback: 'jsonCallback',

    success: function(json) {
      console.dir(json.sites);
    },
    error: function(e) {
      console.error(e.message);
    }
  });

})(jQuery);
```

-

### 참고 자료

- [jQuery CDN](https://code.jquery.com/)
- [jQuery, $.get()](https://api.jquery.com/jquery.get/)
- [jQuery, $.post()](https://api.jquery.com/jquery.post/)
- [jQuery, $.ajax()](http://api.jquery.com/jquery.ajax/)

-

### JSON 테스트

- [myjson.com](http://myjson.com/)
- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- [json-server](https://github.com/typicode/json-server)

-

### API 테스트

- [randomuser.me](http://randomuser.me)
- [designskilz.com/random-users](http://www.designskilz.com/random-users/)
- [restcountries.eu](https://restcountries.eu/)
- [mockaroo.com](http://mockaroo.com/)
- [randomapi.com](https://randomapi.com/)
- [Faker.js](https://github.com/marak/Faker.js/)
- [The Open Movie Database](http://omdbapi.com/) | [Demo](http://codepen.io/nax3t/pen/vxNYbz)
- [Public APIs](https://github.com/toddmotto/public-apis)
