(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{309:function(t,c,r){t.exports=r.p+"img/organicVerse.85101bc.png"},310:function(t,c,r){"use strict";var n=r(2),e=r(79).find,o=r(136),d="find",l=!0;d in[]&&Array(1).find((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o(d)},321:function(t,c,r){"use strict";r.r(c);r(31);var n=[function(){var t=this._self._c;return t("div",{staticClass:"row justify-content-center"},[t("img",{staticClass:"w-50 text-center",attrs:{src:r(309),alt:""}})])}],e=(r(310),r(10),{name:"Home",computed:{products:function(){return this.$store.state.products},cart:function(){return this.$store.state.cart}},methods:{addToCart:function(t){this.cart.find((function(c){return c.id===t.id}))?this.$toast.success("Product already in cart").goAway(1500):(this.$toast.success("Product Added to cart").goAway(1e3),this.$store.dispatch("addToCart",t))}}}),o=r(27),component=Object(o.a)(e,(function(){var t=this,c=t._self._c;return c("section",{staticClass:"py-2 pt-5"},[t._m(0),t._v(" "),c("h2",{staticClass:"text-center py-2"},[t._v("Our Vegetables")]),t._v(" "),c("div",{staticClass:"products-area"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row px-4"},t._l(t.products,(function(r){return c("div",{staticClass:"col-6"},[c("div",{staticClass:"grid-product space-mb--20"},[c("div",{staticClass:"grid-product__image"},[c("img",{staticClass:"img-fluid",staticStyle:{height:"140px"},attrs:{src:r.img,alt:""}})]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-9 px-0 ps-3"},[c("h3",{staticClass:"title"},[t._v("\n                  "+t._s(r.name)+"\n                ")]),t._v(" "),c("div",{staticClass:"price"},[c("span",{staticClass:"discounted-price"},[t._v("₹"+t._s(r.price))])])]),t._v(" "),c("div",{staticClass:"col-1 px-0 pe-4 mt-4"},[c("button",{staticClass:"btn btn-primary btn-block px-2 py-0",on:{click:function(c){return t.addToCart(r)}}},[t._v("+")])])])])])})),0)])])])}),n,!1,null,null,null);c.default=component.exports}}]);