<template>
    <div>
        <div class="z-0 relative min-h-screen" style="background-image: url('img/publication.jpg'); background-size: cover; background-position: center center;">
            <div class="z-10 absolute h-full w-full t-0 r-0" style="background-color: rgba(11, 15, 41, 0.55);"></div>
            <div class="flex flex-col">
                <wc-navbar></wc-navbar>
                <div class="z-10 pb-4 min-h-full w-full text-white w-full px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 pt-24 mt-0 sm:mt-1 md:mt-3">
                    <div class="flex flex-col justify-center items-center text-center">
                        <wc-logo></wc-logo>
                        <div class="pb-3">
                            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold">Experience DappCon All Around the World</h1>
                        </div>
                        <div class="pb-5">
                            <p class="text-2xl">Purchase your ticket now before tickets get finished.</p>
                        </div>
                        <router-link to="/buy" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Buy ticket now 0.00003 Ether</router-link>
                    </div>
                </div>            
            </div>        
        </div>
        <div id="wc-about" class="min-h-full w-full text-gray-900 w-full px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-5">
            <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 pb-2 sm:p-2">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold">About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero amet rem, corporis quos alias itaque distinctio molestias sed ipsum totam dolorum iusto asperiores fuga iste maiores quasi dolore ad.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero amet rem, corporis quos alias itaque distinctio molestias sed ipsum totam dolorum iusto asperiores fuga iste maiores quasi dolore ad.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero amet rem, corporis quos alias itaque distinctio molestias sed ipsum totam dolorum iusto asperiores fuga iste maiores quasi dolore ad.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero amet rem, corporis quos alias itaque distinctio molestias sed ipsum totam dolorum iusto asperiores fuga iste maiores quasi dolore ad.</p>
                </div>
                <div class="w-full sm:w-1/2 sm:p-2">
                    <img class="sm:mt-10" src="img/publication.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const Box = require('3box')
import WalletConnect from "@walletconnect/browser";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

// Create a walletConnector
const walletConnector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org" // Required
});
walletConnector.on("disconnect", (error, payload) => {
    if (error) {
        throw error;
    }
    window.location = '/'          
    // Delete walletConnector
});
import walletConnectNav from "../../inc/navbar";
import walletConnectLogo from "../../inc/logo";
export default {
    data(){
      return {}
    },
    components: {
        'wc-navbar': walletConnectNav,
        'wc-logo': walletConnectLogo
    },
    mounted(){
        if (walletConnector.connected) {
            const t = async () => {
                const profile = await Box.getProfile(walletConnector.accounts[0], {
                    useCacheService: true
                })
                console.log(profile);                
            }
            t()
        }
    },
    methods: {}
}
</script>