(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{316:function(t,e,o){t.exports=o.p+"img/OrganicVerseLogo.afaa595.png"},321:function(t,e,o){"use strict";o.r(e);o(300),o(301),o(303),o(304),o(302);var n={name:"index",methods:{goToHome:function(){localStorage.setItem("isLoggedIn","true"),this.$router.push({name:"Home"})}},created:function(){"true"===localStorage.getItem("isLoggedIn")&&(this.$store.commit("setUser",JSON.parse(localStorage.getItem("user"))),this.$router.push({name:"Home"}))}},r=o(27),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-content-center justify-content-center"},[e("img",{attrs:{src:o(316),alt:""}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"pt-5 col-6"},[e("button",{staticClass:"btn btn-success mt-4 w-100",on:{click:t.goToHome}},[t._v("Let's Eat")])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center h1 text-dark fw-bold"},[t._v("\n    Welcome to the "),e("br"),t._v(" "),e("br"),t._v(" Organic Verse\n  ")])}],!1,null,null,null);e.default=component.exports}}]);