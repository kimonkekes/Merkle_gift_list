## Merkle Gift List

This project is a basic application of creating a Merkle Tree out of a list of names and checking whether a user input is included on the list.

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the dependencies.


There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server. The client takes a `name` input. It proves to the server that the `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request. The server verifies that the `name` passed by the client is in the `MERKLE_ROOT`.

## Utils

The `niceList.json` contains all the names in the NICE LIST, the people who deserve a gift this year (this has been randomly generated). You can add new names to this list, as long as you calculate the `MERKLE_ROOT` of the new list and add it accordingly in the `index.js` file, inside the `server` folder.

