<template>
    <div>
        <profile-modal></profile-modal>
        <div class="z-0 relative h-16" style="background-image: url('img/publication.jpg'); background-size: cover; background-position: center center;">
            <div class="z-10 absolute h-full w-full t-0 r-0" style="background-color: rgba(11, 15, 41, 0.95);"></div>
            <div class="flex flex-col">
                <wc-navbar></wc-navbar>
            </div>
        </div>
        <div id="wc-about" class="min-h-full w-full text-gray-900 w-full px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-5">
            <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:w-1/2 pb-2 sm:p-2">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold">Work in progress</h1>                   
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
import profileModal from '../../modals/profile'
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
});
import walletConnectNav from "../../inc/navbar";
export default {
    data(){
      return {
          profile: null
      }
    },
    created() {
        
    },
    components: {
        'wc-navbar': walletConnectNav,
        'profile-modal': profileModal
    },
    mounted(){
        if (walletConnector.connected) {
            const t = async () => {
                const boxprofile = await Box.getProfile(walletConnector.accounts[0], {
                    useCacheService: true
                })
                this.$modal.show('profile')              
            }
            t()
        }     
    },
    methods: {}
}
</script>