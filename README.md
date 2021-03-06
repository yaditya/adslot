#Frontend Exercise Adslot

This simple exercise is using below front end technologies:

1. Zurb Foundation 5
2. Angular JS
3. CSS



## Prerequisites

#### Node.js

Get [Node.js][node-download].

#### npm
Install npm

`curl https://npmjs.org/install.sh | sh`

#### http-server

We need to run a local web server for the ajax call in order to load the json data.

Install npm http-server by running:

`npm install http-server -g`

For more installation information, please visit [http-server-download]

Note: in Mac, you can use `python -m SimpleHTTPServer`, save your time downloading from npm :)

## Run the app

###Get the package

Download the ZIP file or clone the repo.

For this step onwards, let's assume the destination location is:

*C:/adslot*

###Run local web server

Run `http-server` from command line

If successful, you should see these notes:

`Starting up http-server, serving ./ on: http://0.0.0.0:8082`

_Note: Port number may be different depending on the available port_

_Note: Alternatively, on Mac run `python -m SimpleHTTPServer` from Terminal_


###Load the app

Open web browser and type:

`http://localhost:8082`

Note: use the port number you see when running http-server or python.

[node-download]: http://nodejs.org/download/
[http-server-download]: https://www.npmjs.org/package/http-server
