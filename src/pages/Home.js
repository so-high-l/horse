import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import "../styles/Home.css";
import logo from "../assets/LOGO3D.png";
function Home() {
  const contractAdress = "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949";
  const contractAbi = [
    {
      inputs: [
        { internalType: "address", name: "_azukiAddress", type: "address" },
        { internalType: "uint256", name: "_maxSupply", type: "uint256" },
        { internalType: "address", name: "_vrfCoordinator", type: "address" },
        { internalType: "address", name: "_linkToken", type: "address" },
        { internalType: "string", name: "initialName", type: "string" },
        { internalType: "string", name: "initialSymbol", type: "string" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "AddressAlreadyWonOrOwner", type: "error" },
    { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
    { inputs: [], name: "ApproveToCaller", type: "error" },
    { inputs: [], name: "AzukiNotOwnedLongEnough", type: "error" },
    { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
    { inputs: [], name: "BeanCannotBeClaimed", type: "error" },
    { inputs: [], name: "ChunkHasBeenAirdropped", type: "error" },
    { inputs: [], name: "ClaimWindowNotOpen", type: "error" },
    { inputs: [], name: "InvalidChunk", type: "error" },
    { inputs: [], name: "MaxSupplyReached", type: "error" },
    { inputs: [], name: "MintToZeroAddress", type: "error" },
    { inputs: [], name: "MintZeroQuantity", type: "error" },
    { inputs: [], name: "MismatchedTokenOwner", type: "error" },
    {
      inputs: [
        { internalType: "address", name: "have", type: "address" },
        { internalType: "address", name: "want", type: "address" },
      ],
      name: "OnlyCoordinatorCanFulfill",
      type: "error",
    },
    { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "RaffleWinnerIsContract", type: "error" },
    { inputs: [], name: "TokenAlreadyWon", type: "error" },
    { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
    {
      inputs: [],
      name: "TransferToNonERC721ReceiverImplementer",
      type: "error",
    },
    { inputs: [], name: "TransferToZeroAddress", type: "error" },
    { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "winningTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "winningAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTokenId",
          type: "uint256",
        },
      ],
      name: "RaffleWinner",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "BATCH_SIZE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MIN_OWNERSHIP_TIME_FOR_CLAIM",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "receivers", type: "address[]" },
        {
          internalType: "uint256[]",
          name: "numAzukiTokens",
          type: "uint256[]",
        },
        { internalType: "uint256", name: "chunkNum", type: "uint256" },
      ],
      name: "airdrop",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "azuki",
      outputs: [{ internalType: "contract Azuki", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "azukiCanClaim",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "clRequestConfig",
      outputs: [
        { internalType: "bytes32", name: "keyHash", type: "bytes32" },
        { internalType: "uint64", name: "subscriptionId", type: "uint64" },
        {
          internalType: "uint16",
          name: "requestConfirmations",
          type: "uint16",
        },
        { internalType: "uint32", name: "callbackGasLimit", type: "uint32" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256[]", name: "azukiTokenIds", type: "uint256[]" },
      ],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimWindow",
      outputs: [
        { internalType: "uint128", name: "startTime", type: "uint128" },
        { internalType: "uint128", name: "endTime", type: "uint128" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "numAzukiTokens", type: "uint256" },
      ],
      name: "devClaim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "requestId", type: "uint256" },
        { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
      ],
      name: "rawFulfillRandomWords",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "realOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "requestRaffleWinner",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "baseURI", type: "string" }],
      name: "setBaseURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256[]", name: "azukiIds", type: "uint256[]" },
      ],
      name: "setCanClaim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "_keyHash", type: "bytes32" },
        { internalType: "uint64", name: "_subscriptionId", type: "uint64" },
        {
          internalType: "uint16",
          name: "_requestConfirmations",
          type: "uint16",
        },
        { internalType: "uint32", name: "_callbackGasLimit", type: "uint32" },
      ],
      name: "setClRequestConfig",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "_startTime", type: "uint128" },
        { internalType: "uint128", name: "_endTime", type: "uint128" },
      ],
      name: "setClaimWindow",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_newName", type: "string" },
        { internalType: "string", name: "_newSymbol", type: "string" },
      ],
      name: "setNameAndSymbol",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "tokenHasWonRaffle",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferLowerOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "newRealOwner", type: "address" },
      ],
      name: "transferRealOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "winningAddresses",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ];

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet !");
  const [currentContractVal, setCurrentContractVal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Connected  ✓");
          if (window.ethereum.networkVersion !== "43114") {
            window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xA86A",
                  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                  chainName: "Avalanche Network",
                  nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://snowtrace.io/"],
                },
              ],
            });
          }
        });
    } else {
      setErrorMessage("Need to install Metamask !");
    }
  };
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };
  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);
    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);
    let tempContract = new ethers.Contract(
      contractAdress,
      contractAbi,
      tempSigner
    );
    setContract(tempContract);
  };

  return (
    <div className="Home">
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>

      <div className="hero">
        <h1 className="hero--title">
          An inventive POLAR fork on the Avalanche Blockchain
        </h1>
        <p className="hero--desc">
          HORSE protocol, the innovative project many didnt know they needed,
          inspired by POLAR and its long-term stability
        </p>
        <div className="hero--buttons">
          <button className="hero--btn">
            <a href="">Buy Horse</a>
          </button>
          <button className="hero--btn btn2" onClick={connectWalletHandler}>
            {connButtonText}
          </button>
        </div>
        <div className="hero--stats">
          <div className="stat">
            <p className="stat--number">12K</p>
            <p className="stat--name">Players</p>
          </div>
          <div className="stat">
            <p className="stat--number">25K</p>
            <p className="stat--name">Horses</p>
          </div>
          <div className="stat">
            <p className="stat--number">$1,7</p>
            <p className="stat--name">$HORSE price</p>
          </div>
        </div>
      </div>
      <div className="rightsection">
        <div>
          <img src={logo} alt="Logo Horse" className="logo3d" />
        </div>
        <div className="rectangle7">
          <p> Remaining time</p>
          <p>15D : 12H : 45M</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
