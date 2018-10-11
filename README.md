# cKey - A dotenv plugin.
Simple and easy way to access dotenv file secrets and use it anywhere in your sub-directory.

# ▶️ Installation

```shell
npm install cKey
```

### 📝 Usage

  - .env file from main directory.
```
# dotenv sample content
USER=yortrosal
PASSWORD=iampassword123
```

  - some js file from sub-directory
```js
const ck = require('cKey');

const userName = ck.USER; // yortrosal
const password = ck.PASSWORD //iampassword123
```

### 🎩 Authors
  - Jorge Rosal - [GitHub](https://github.com/yortrosal)

### 📜 License
  The MIT License (MIT) Jorge Rosal
