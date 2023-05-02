const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const prompt = require("prompt-sync")();

const serverUrl = 'http://localhost:1225';

async function main() {
  
  const merkleTree = new MerkleTree(niceList);
  const root = merkleTree.getRoot();
  
  console.log("Are you on the NICE LIST? Type the name you want to check");
  const name = prompt(">");
  
  const nameIndex = niceList.findIndex(x => x === name);
  const merkleProof = merkleTree.getProof(nameIndex);


  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
       name,
       merkleProof
  });

  console.log({ gift });
}

main();