09 - Web Sockets
=================

09_01 - Creating a WebSocket Server
------------------------------------

### Install the WS module using the following command

* `npm install ws --save`

09_02 - Broadcasting messages with WebSockets
---------------------------------------------

### Install the WS module using the following command

* `npm install ws --save`

09_03 - Creating WebSockets with Socket.IO
---------------------------------------------

You can create websockets with native Javascript for most browsers but not all browsers support websockets. 
Go to the following URL to find out which browsers support websockets natively:

https://caniuse.com/#search=websockets

Socket.IO will fall back on using long polling if the browser does not support websockets natively. 

### Install the socket.io and express modules using the following commands

* `npm install socket.io --save`
* `npm install express --save`


In order to use the socket.io we need the socket.io-client.js file. The minified version of this file is located under public folder in the js folder. 

You can install the socket.io client by running the following command

* `npm install socket.io-client`

Run the following command in the terminal to start the socket server

* `node sio-server`