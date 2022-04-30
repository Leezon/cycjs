# leezon

JavaScript functional library.

JavaScript 函数工具库。

## Usage

```bash
npm i leezon
```

### 1. commonjs

```javascript
const lee = require('leezon');
lee.debounce(fn, delay);
```

### 2. esm

```javascript
import lee from 'leezon';
lee.debounce(fn, delay);
```

### 3. broswer

```html
<body>
  <script src="./dist/index.js"></script>
  <script>
    function handle() {
      console.log('debounce');
    }
    window.onresize = leezon.debounce(handle, 300);
  </script>
</body>
```
