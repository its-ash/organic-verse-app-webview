(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{307:function(t,e,c){var content=c(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(67).default)("e58109a2",content,!0,{sourceMap:!1})},311:function(t,e,c){"use strict";c(307)},312:function(t,e,c){var r=c(66)(!1);r.push([t.i,".checkout{position:absolute;bottom:100px;width:100%}",""]),t.exports=r},322:function(t,e,c){"use strict";c.r(e);c(31),c(10),c(37);var r={name:"Payment",computed:{products:function(){return this.$store.state.cart},wallet:function(){return this.$store.state.wallet},totalPrice:function(){return this.$store.state.cart.map((function(t){return t.price*t.quantity})).reduce((function(a,b){return a+b}),0)}},methods:{}},n=(c(311),c(27)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-5 w-100"},[t._m(0),t._v(" "),e("div",{staticClass:"cart-product-area"},t._l(t.products,(function(c){return e("div",{staticClass:"cart-product border-bottom--medium"},[e("div",{staticClass:"cart-product__image"},[e("img",{staticClass:"img-fluid",attrs:{src:c.img,alt:""}})]),t._v(" "),e("div",{staticClass:"cart-product__content"},[e("h3",{staticClass:"title"},[t._v(t._s(c.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"discounted-price"},[t._v("₹"+t._s(c.price))])])]),t._v(" "),e("div",{staticClass:"cart-product__counter text-end"},[t._v("\n        "+t._s(c.quantity)+" x ₹"+t._s(c.price)+" = ₹"+t._s(c.quantity*c.price)+"\n      ")])])})),0),t._v(" "),e("div",{staticClass:"grand-total space-mt--20 checkout"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"title-wrap"},[e("h4",{staticClass:"grand-total-title text-success"},[t._v("Wallet Balance "),e("span",[t._v("₹"+t._s(t.wallet))])])]),t._v(" "),e("h4",{staticClass:"grand-total-title"},[t._v("Grand Total "),e("span",[t._v("₹"+t._s(t.totalPrice))])]),t._v(" "),t.totalPrice<=t.wallet?e("a",{attrs:{href:"#"}},[t._v("Proceed to Pay")]):e("nuxt-link",{staticClass:"text-light",attrs:{to:{name:"Profile-Wallet"}}},[t._v("Click to add\n            "),e("span",{staticClass:"text-white"},[e("strong",[t._v("₹"+t._s(t.totalPrice-t.wallet))])])])],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row d-flex justify-content-center"},[t("h2",{staticClass:"text-center fw-bold"},[this._v("Payment")])])}],!1,null,null,null);e.default=component.exports}}]);