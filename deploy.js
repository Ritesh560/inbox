const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require("web3")
const { interface, bytecode } = require("./compile")

const provider = new HDWalletProvider("boat rude recall bargain food barrel latin salon isolate today stool project", "https://rinkeby.infura.io/v3/1b9a291e00f3413e97032668df774345")

const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log("attempting to deploy from account", accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: ["Hi there!"] }).send({ gas: "1000000", from: accounts[0] })

  console.log("Contract deployed to", result.options.address)
}

deploy()
