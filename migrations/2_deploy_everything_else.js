const ExampleToken = artifacts.require("./ExampleToken.sol")
const ExampleTokenCrowdSale = artifacts.require("./ExampleTokenCrowdsale.sol")


const etherToWei = x => new web3.utils.BN(web3.utils.toWei(x.toString(), 'ether'))

module.exports = async function(deployer, network, accounts) {
	await deployer.deploy(ExampleToken, "ExampleToken", "EXT", "10")
	const deployedToken = await ExampleToken.deployed()
	await deployer.deploy(
		ExampleTokenCrowdSale,
		500,
		accounts[0],
		deployedToken.address,
		etherToWei(100)
	)
}
