<template>
  <div class="flex flex-col min-h-screen">
    <router-view/>
    <div class="w-full bg-gray-400 flex flex-row items-center px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 mt-auto">
        <div class="w-full pb-6 pt-6 text-center">
            <p>Submit work under a <a target="_blank" href="https://creativecommons.org/licenses/" class="text-blue-700">Creative Commons license</a> or under <a class="text-blue-700" href="https://en.wikipedia.org/wiki/Open_access" target="_blank">Open Access</a>, original work under a <a class="text-blue-700" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> license</p>
            <p>Powered by <a class="text-blue-700 font-semibold" href="https://walletconnect.com">WalletConnect</a></p>
        </div>
    </div> 
  </div>
</template>
<script>
export default {}
</script>