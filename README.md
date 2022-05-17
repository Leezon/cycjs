# cycjs

what is cycjs ?

a javascript functional library.

why cyc ?

contributing your code.

## Usage

```bash
npm i cycjs
```

### 1. commonjs

```javascript
const cycjs = require('cycjs');
const { debounce } = require('cycjs');
const debounce = require('cycjs/lib/debounce');
```

### 2. esm

```javascript
import cycjs from 'cycjs';
import { debounce } from 'cycjs';
import debounce from 'cycjs/lib/debounce';
```

### 3. broswer

```html
<body>
  <script src="./lib/index.js"></script>
  <script>
    window.onresize = cycjs.debounce(handle, 300);
  </script>
</body>
```

```html
<body>
  <script src="./lib/debounce.js"></script>
  <script>
    window.onresize = debounce(handle, 300);
  </script>
</body>
```
