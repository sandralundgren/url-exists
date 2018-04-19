# url-exists-async-await

A simple node library to determine if a url exists with async await


## Usage
  

```javascript

const urlExists = require('url-exists-async-await');
 
const urlVal = async(data) => {
  try {
    const result = await urlExists(data);
    console.log(`Result for ${data} is ${result}`);
  } catch(err) {
    console.log(err);
  }
}

urlVal('https://www.google.com'); // true

urlVal('https://www.fakeurl.notreal'); // false

```
