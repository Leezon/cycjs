# fetool

开发中常用函数工具库

## 开始

```bash
npm install
npm run build
```

## 使用

```bash
npm i fetool
or
yarn add fetool
```

node

```javascript
const fetool = require("fetool");
fetool.debounce(fn, delay);
```

esm

```javascript
import fetool from "fetool";
fetool.debounce(fn, delay);
```

broswer

```javascript
  <body>
    <script src="./fetool/dist/index.js"></script>
    <script>
      function handle() {
        console.log("debounce");
      }
      window.onresize = fetool.debounce(handle, 300);
    </script>
  </body>
```
