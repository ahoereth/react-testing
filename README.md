[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

# Solarlux Web App Testing Repository 

## To use

A simple server implementations is included with static Javascript variable or dynamic Json loading. They serve static files from `public/` and handle requests to `/api/products` to fetch or add data. Start a server with one of the following:

### Node

```sh
npm install
node server.js
```
And visit <http://localhost:3000/>. Try opening multiple tabs!
 
## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
### Screenshot
![alt tag](https://raw.githubusercontent.com/slx-dev/react-testing/masteer/screenshot.png)
