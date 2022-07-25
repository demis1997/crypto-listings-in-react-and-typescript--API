import { Button, ButtonGroup, Image } from '@chakra-ui/react'
import { useState } from 'react';
import { ethers } from 'ethers';



export const MetamaskWallet =() =>{


  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions

  // Requests access to the user's META MASK WALLET


  async function requestAccount() {
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
        alert('error connecting');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      provider.getBalance(walletAddress).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance)
        console.log(`balance: ${balanceInEth} ETH`)
       })
    }
  }

  return (

    <div className="App">
        
      <header className="App-header">
      <Image src='/public/../metamask.png'/>
      <Button colorScheme='green'    onClick={connectWallet}>Connect Wallet</Button>
        
      <h3>{walletAddress}</h3>


      </header>
    </div>
  );

  
}