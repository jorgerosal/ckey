## ckey - a dotenv plugin.
Simple and easy way to access dotenv file secrets and use it anywhere in your sub-directory.

### ▶️ Installation

```shell
npm install ckey
```

### 📝 Usage
Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

  - .env file from main directory.
```
# dotenv sample content

USER=your_email@gmail.com
PASSWORD=iampassword123

API_KEY=1234567890
```

  - some js file from sub-directory
```js
const ck = require('ckey');

const userName = ck.USER;     // your_email@gmail.com
const password = ck.PASSWORD; // iampassword123
const apiKey   = ck.API_KEY;  // 1234567890
```

### 📜 License
  The MIT License (MIT) Jorge Rosal
