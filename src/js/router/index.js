import Vue from 'vue';
import VueRouter from 'vue-router'
//import {store} from '../store'
Vue.use(VueRouter)

import WalletConnect from "@walletconnect/browser";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

// Create a walletConnector
const walletConnector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org" // Required
});

const ifAuthenticated = (to, from, next) => {
    if (walletConnector.connected) {
        next()
        return
    }    
    // create new session
    walletConnector.createSession().then(() => {
        // get uri for QR Code modal
        const uri = walletConnector.uri;

        // display QR Code modal
        WalletConnectQRCodeModal.open(uri, () => {
            console.log("QR Code Modal closed");
        });
    });
    
    walletConnector.on("connect", (error, payload) => {
        if (error) {
            next('/')
            throw error;
        }
        // Close QR Code Modal
        WalletConnectQRCodeModal.close();
        window.location.reload(true)
        // next()
        // return
        // Get provided accounts and chainId
        //const { accounts, chainId } = payload.params[0];    
    });
}


import WallectConnectHome from '../components/frontend/home/index.vue'
import WallectConnectBuy from '../components/frontend/home/buy.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'wc-home',
            component: WallectConnectHome
        },
        {
            path: '/buy',
            name: 'wc-buy',
            component: WallectConnectBuy,
            beforeEnter: ifAuthenticated
        }
    ]    
})

export default router