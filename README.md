# leezon

JavaScript functional library.

JavaScript 函数工具库。

## Start

```bash
git clone git@github.com:Leezon/fetool.git
npm install
npm run dev
npm run build
```

## Usage

```bash
npm i leezon
// or
yarn add leezon
```

### 1.node

```javascript
const lee = require("leezon");
lee.debounce(fn, delay);
```

### 2.esm

```javascript
import lee from "leezon";
lee.debounce(fn, delay);
```

### 3.broswer

```html
<body>
  <script src="./leezon/dist/index.js"></script>
  <script>
    function handle() {
      console.log("debounce");
    }
    window.onresize = leezon.debounce(handle, 300);
  </script>
</body>
```
