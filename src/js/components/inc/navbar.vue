<template>
    <div id="navbarwalletconnect"
        class="fixed t-0 text-white h-16 z-40 w-full t-0 flex items-center justify-between px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-3 lg:py-2 shadow">
        <div class="w-40 sm:w-56">
            <router-link to="/" class="block">
                <h1 class="px-6 hover:text-blue-400 flex flex-row items-center">
                    <span class="text-4xl font-extrabold mr-1">TikoW</span>
                    <svg class="fill-current w-6 h-6 mt-3 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" />
                    </svg>
                </h1>
            </router-link>
        </div>
        <div class="flex justify-center items-center">
            <ul class="hidden sm:hidden lg:flex lg:flex-row lg:items-center pt-3 uppercase">
                <li class="px-3 font-medium"><a class="cursor-pointer hover:text-blue-600" v-scroll-to="'#wc-about'">About</a></li>
                <li class="px-3 font-medium"><a class="cursor-pointer hover:text-blue-600"
                        v-scroll-to="'#wc-speakers'">Speakers</a></li>
                <li class="px-3 font-medium"><a class="cursor-pointer hover:text-blue-600" v-scroll-to="'#wc-schedule'">Schedule</a></li>
                <li class="px-3 font-medium"><router-link to="/buy" class="cursor-pointer hover:text-blue-600" v-scroll-to="'#wc-schedule'">Purchase</router-link></li>                  
                <li v-if="loggedin" class="px-3 font-medium">
                    <button @click.prevent="logOutUser()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Disconnect</button>
                </li>
                <li class="px-3 font-medium" v-else>
                    <router-link to="/buy" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</router-link>
                </li>
            </ul>
            <a href="#"
                class="bg-blue-600 block md:hidden border border-gray-900 text-gray-300 text-xs px-2 py-1 rounded uppercase cursor-pointer">
                Sign in
            </a>
        </div>
    </div>
</template>
<script>
const Box = require('3box');
var Web3 = require('web3');
import WalletConnect from "@walletconnect/browser";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

// Create a walletConnector
const walletConnector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org" // Required
});
export default {
    data(){
        return {
            loggedin: false
        }
    },
    mounted(){
        if (walletConnector.connected) {
            this.loggedin = true            
        } else {
            this.loggedin = false
        }
    },
    methods: {
        logOutUser(){            
            walletConnector.killSession()
            window.location = '/';
        }
    }
}
</script>