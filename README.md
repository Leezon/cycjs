# cycjs

a javaScript functional library.

### why cyc?

contribute your code.

## Usage

```bash
npm i cycjs
```

### 1. commonjs

```javascript
const cycjs = require('cycjs');
cycjs.debounce(fn, delay);
```

### 2. esm

```javascript
import cycjs from 'cycjs';
cycjs.debounce(fn, delay);
```

### 3. broswer

```html
<body>
  <script src="./dist/index.js"></script>
  <script>
    function handle() {
      console.log('debounce');
    }
    window.onresize = cycjs.debounce(handle, 300);
  </script>
</body>
```
