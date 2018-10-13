# Networking


## Using
- Fetch
- Axios
- Promise


# Fetch

React Native provides the Fetch API for your networking needs. Fetch will seem familiar if you have used XMLHttpRequest or other networking APIs before. You may refer to MDN's guide on Using Fetch for additional information.

```
fetch('https:api.example.com/api/v1/login');
```
Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:

```
fetch('https:api.example.com/api/v1/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Token: 'example token'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});

```