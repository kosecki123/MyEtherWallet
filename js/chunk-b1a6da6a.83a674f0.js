(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1a6da6a"],{"90e9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"already-owned-container"},[a("h3",[t._v(t._s(t.fullDomainName)+" "+t._s(t.$t("dapps.alreadyOwned"))+".")]),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.labelHash"))+"("+t._s(t.hostName)+"):")]),a("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.nameHash"))+"("+t._s(t.fullDomainName)+"):")]),a("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.owner"))+":")]),a("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.resolverAddr"))+":")]),a("p",{staticClass:"content"},[t._v(t._s(t.resolverAddress))])]),a("div",{staticClass:"owner-options"},[t.owner.toLowerCase()===t.account.address.toLowerCase()?a("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v("\n      "+t._s(t.$t("dapps.manage"))+"\n    ")]):t._e()]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("539d"),c=a("2f62");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p={components:{"interface-bottom-text":o["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},resolverAddress:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""}},data:function(){return{}},computed:l({},Object(c["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},u=p,d=(a("d5c1"),a("2877")),f=Object(d["a"])(u,n,s,!1,null,"c31b5c9e",null),b=f.exports;a.d(e,"default",function(){return b})},aae1:function(t,e,a){},d5c1:function(t,e,a){"use strict";var n=a("aae1"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-b1a6da6a.83a674f0.js.map