<template>
    <modal name="profile" :width="320" :height="460">
        <div class="p-5">
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-3" role="alert">
                <p><span class="font-bold">Important: </span> Kindly provide the below information to proceed</p>
            </div>
            <ValidationObserver ref="savekitabuprofile" tag="form" v-slot="{ invalid }" @submit.prevent="saveProfile()" class="w-full flex flex-col sm:flex-row sm:flex-wrap text-left">
                <div class="flex flex-col px-1 w-full mb-3">
                    <label class="tracking-wide text-gray-700 font-bold mb-2" for="profilefullname">
                        Full name
                    </label>
                    <ValidationProvider name="Full name" rules="required" v-slot="{ errors, classes }">
                        <input type="text" required  name="profilefullname" v-model="profilefullname" placeholder="Full name" :class="{ 'bg-gray-200 appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white': true, 'border-blue-500': classes.untouched, 'text-gray-700 border-blue-500 focus:border-blue-700': classes.valid, 'text-red-700 border-red-500 focus:border-red-700': classes.invalid }">
                        <span class="text-sm text-red-500">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="flex flex-col px-1 w-full mb-3">
                    <label class="tracking-wide text-gray-700 font-bold mb-2" for="profilelocation">
                        Location
                    </label>
                    <ValidationProvider name="Full name" rules="required" v-slot="{ errors, classes }">
                        <input type="text" required name="profilelocation" v-model="profilelocation" placeholder="Location" :class="{ 'bg-gray-200 appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white': true, 'border-blue-500': classes.untouched, 'text-gray-700 border-blue-500 focus:border-blue-700': classes.valid, 'text-red-700 border-red-500 focus:border-red-700': classes.invalid }">
                        <span class="text-sm text-red-500">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>

                <div class="flex flex-col px-1 w-full mb-3">
                    <label class="tracking-wide text-gray-700 font-bold mb-2" for="profilemployer">
                        Employer
                    </label>
                    <ValidationProvider name="Full name" rules="required" v-slot="{ errors, classes }">
                        <input type="text" required name="profilemployer" v-model="profilemployer" placeholder="Employer" :class="{ 'bg-gray-200 appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white': true, 'border-blue-500': classes.untouched, 'text-gray-700 border-blue-500 focus:border-blue-700': classes.valid, 'text-red-700 border-red-500 focus:border-red-700': classes.invalid }">
                        <span class="text-sm text-red-500">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                                       
                <div class="flex flex-col px-1 w-full mb-5">
                    <button type="submit" :class="{ 'bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded inline-flex justify-center items-center sm:float-right cursor-pointer': true, 'opacity-50 cursor-not-allowed': invalid | waitfortransaction }">
                        <span class="text-lg mr-2" v-html="buttontext"></span>                    
                        <svg class="fill-current w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                        </svg>
                    </button>
                </div>
            </ValidationObserver>
        </div>        
    </modal>
</template>
<script>
const Box = require('3box')
const IdentityWallet = require('identity-wallet')
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
export default {
    data(){
        return{
            profilefullname: '',
            profilelocation: '',
            profilemployer: '',
            waitfortransaction: false,
            buttontext : 'Update profile'
        }
    },
    mounted(){},
    methods: {
        saveProfile() {
            if (walletConnector.connected) {

                this.buttontext = 'Updating your profile'                

                const t = async () => {                   

                    // const authSecret = walletConnector.accounts[0]
                    // const ethereumAddress = walletConnector.accounts[0]
                    // const idWallet = new IdentityWallet({ authSecret, ethereumAddress })

                    // const seed = walletConnector.accounts[0] // a hex encoded seed

                    // const idWallet = new IdentityWallet(getConsent, { seed })

                    // const threeIdProvider = idWallet.get3idProvider()
                    // const box = await Box.openBox(null, threeIdProvider)

                    // console.log(box);
                    

                    //const box = await Box.openBox(walletConnector.accounts[0])
                    // const boxSyncPromise = await new Promise((resolve, reject) => box.onSyncDone(resolve))
                    // let livepeerSpace
                    // const spaceSyncPromise = new Promise((resolve, reject) => {
                    // livepeerSpace = await box.openSpace('muyabox', { onSyncDone: resolve })
                    // })
                    // await boxSyncPromise
                    // await spaceSyncPromise

                    // const box = await Box.openBox(walletConnector.accounts[0], '3box')
                    // console.log(box);
                    // const livepeerProfile = await Box.getSpace(walletConnector.accounts[0], 'muyabox')
                    // console.log(livepeerProfile.defaultProfile)
                    this.buttontext = 'Update profile'
                }
                t()

                
                
                // this.buttontext = 'Updating your profile'
                // const fields = ['name', 'location', 'employer']
                // const values = [this.profilefullname, this.profilelocation, this.profilemployer]
                // const t = async () => {
                //     const updateprofile = await Box.public.set('name', this.profilefullname)
                //     this.buttontext = 'Update profile'                
                //     this.$modal.hide('profile')
                //     location.reload(true);
                // }
                // t()
            }           
        }
    }
}
</script>