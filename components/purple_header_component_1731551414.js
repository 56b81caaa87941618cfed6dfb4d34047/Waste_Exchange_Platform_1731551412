<!--
INSTRUCTION: Summary: HTML file that describes the header section including:
INSTRUCTION: 1. Site branding with a logo on the left.
INSTRUCTION: 2. Desktop navigation menu with links to different pages in the middle.
INSTRUCTION: 3. Desktop sign-in and sign-up links on the right.
-->

<template>
  <
  <header id="header-section-container" class="w-full z-30 bg-gradient-to-r from-pink-500 to-purple-600" data-mwf="true" style="border: 2px solid green;"><div class="max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg" style=""><div class="flex items-center justify-between h-16 md:h-20" style="" data-mf-new="true"><div id="site-branding" class="flex-1"><a id="logo-link" href="index.html" aria-label="Cruip" class="inline-flex"><img id="logo-image" src="https://makeinfinite-mentat-prod.azurewebsites.net/get_image/Waste_Exchange_Platform_1731551412/logo.svg" width="38" height="38" alt="Stellar" class="max-w-none"></a></div> <nav id="desktop-navigation" class="hidden md:flex md:grow"><ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center"><li><a id="Home-link" href="Home.html" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200">
                Home
              </a></li> <li><a id="Marketplace-link" href="Marketplace.html" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200">
                Marketplace
              </a></li> <li><a id="Services-link" href="Services.html" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200">
                Services
              </a></li> <li style=""><a id="About Us-link" href="About Us.html" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200">
                About Us
              </a></li> <li style=""><a id="Contact-link" href="Contact.html" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200" style="">
                Contact
              </a></li></ul></nav> <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center" style=""><li style=""><a id="sign-in-link" href="signin.html" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-pink-200" style="">
              Sign in
            </a></li> <li class="ml-6"><a id="sign-up-link" href="signup.html" class="btn-sm transition duration-150 ease-in-out w-full group relative text-white hover:text-pink-200 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg" style=""><span class="relative inline-flex items-center" style=""> Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-200">-&gt;</span></span></a></li></ul> <div class="md:hidden flex items-center ml-4"><button id="hamburger-button" aria-controls="mobile-nav" class="hamburger"><span class="sr-only">Menu</span> <svg id="hamburger-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-pink-200"><rect y="2" width="20" height="2" rx="1"></rect> <rect y="9" width="20" height="2" rx="1"></rect> <rect y="16" width="20" height="2" rx="1"></rect></svg></button> <nav id="mobile-nav" x-ref="mobileNav" x-cloak="" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0px; opacity: 0.8;"><ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-70 backdrop-filter backdrop-blur-lg"><li><a id="mobile-Home-link" href="Home.html" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200">Home</a></li> <li><a id="mobile-Marketplace-link" href="Marketplace.html" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200">Marketplace</a></li> <li><a id="mobile-Services-link" href="Services.html" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200">Services</a></li> <li><a id="mobile-About Us-link" href="About Us.html" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200">About Us</a></li> <li><a id="mobile-Contact-link" href="Contact.html" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200">Contact</a></li></ul></nav></div></div></div></header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
