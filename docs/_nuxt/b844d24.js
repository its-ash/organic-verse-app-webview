(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{315:function(t,e,n){t.exports=n.p+"img/OrganicVerseLogo.afaa595.png"},320:function(t,e,n){"use strict";n.r(e);var o=n(300),r=(n(301),n(303),n(304),n(302),{name:"index",methods:{goToHome:function(){var t=this;localStorage.clear();var e=new o.k;this.$fire.auth.signInWithPopup(e).then((function(e){t.$store.dispatch("setUser",JSON.parse(JSON.stringify(e.user))),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("user",JSON.stringify(e.user)),t.$router.push({name:"Home"})}))}},created:function(){}}),c=n(27),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-content-center justify-content-center"},[e("img",{attrs:{src:n(315),alt:""}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"pt-5 col-6"},[e("button",{staticClass:"btn btn-success mt-4 w-100",on:{click:t.goToHome}},[t._v("Let's Eat")])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center h1 text-dark fw-bold"},[t._v("\n    Welcome to the "),e("br"),t._v(" "),e("br"),t._v(" Organic Verse\n  ")])}],!1,null,null,null);e.default=component.exports}}]);