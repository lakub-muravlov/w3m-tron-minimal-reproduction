# DESCRIPTION OF APP

there are 3 routes <br><br>
/tron - contains lazy loaded component with WalletConnectAdapter from @tronweb3/tronwallet-adapters <br><br>
/ethers - contains lazy loaded component with Web3Modal for handling evm connection <br><br>
/combined - contains both components <br><br>

Reproduction scenarios (note that this is related to modules load order, so reproducing each scenario requires a reload)

1. in one session modules loaded simultaneously (from /combined route)
   in this case ethers module works fine, it seems it's defined in DOM first, but when trying to connect to via tron adapter, we get error

```
ERROR DOMException: CustomElementRegistry.define: 'w3m-button' has already been defined as a custom element
```

2. first loaded module is component handling ethers connection, then one that handles tron connection (going to /ethers route, then to /tron route)
   in this case we get same Error when trying to connect via tron connector as in case (1)
3. first loaded module is component handling tron connection, then one that handles ethers connection (going to /tron route, then to /ethers route)
   in this case connection via tron works fine, but ethers's one stops working
