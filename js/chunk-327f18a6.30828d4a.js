(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-327f18a6"],{"0546":function(e,t,r){"use strict";r.r(t);var s,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"swap-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.bityExitToFiat,expression:"!bityExitToFiat"}]},[r("swap-confirmation-modal",{ref:"swapConfirmation",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("swap-send-to-modal",{ref:"swapSendTo",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("div",{staticClass:"title-block"},[r("interface-container-title",{attrs:{title:e.$t("common.swap")}})],1),r("div",{staticClass:"form-content-container"},[r("div",{staticClass:"send-form"},[r("div",{staticClass:"form-block amount-to-address"},[r("div",{staticClass:"amount"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$t("common.from")))]),e.tokenBalances[e.fromCurrency]>0?r("p",{staticClass:"all-button prevent-user-select",on:{click:e.swapAll}},[e._v("\n                "+e._s(e.$t("common.totalBalance"))+"\n              ")]):e._e()]),r("swap-currency-picker",{attrs:{currencies:e.fromArray,"override-currency":e.overrideFrom,"from-source":!0,page:"SwapContainerFrom"},on:{selectedCurrency:e.setFromCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fromValue,expression:"fromValue"}],attrs:{type:"number",name:"",value:"",step:"any",placeholder:"Deposit Amount"},domProps:{value:e.fromValue},on:{input:[function(t){t.target.composing||(e.fromValue=t.target.value)},function(t){return e.amountChanged("from")}]}})]),r("div",{staticClass:"error-message-container"},[e.fromBelowMinAllowed?r("p",[e._v(e._s(e.fromBelowMinAllowed))]):e._e(),e.hasEnough||e.fromBelowMinAllowed?e._e():r("p",[e._v("\n                "+e._s(e.$t("common.dontHaveEnough"))+"\n              ")]),e.fromAboveMaxAllowed?r("p",[e._v(e._s(e.fromAboveMaxAllowed))]):e._e()])],1),r("div",{staticClass:"exchange-icon",on:{click:e.flipCurrencies}},[r("img",{attrs:{src:e.images.swap,alt:""}})]),r("div",{staticClass:"amount"},[r("div",{staticClass:"title"},[r("h4",[e._v(e._s(e.$t("common.to")))])]),r("swap-currency-picker",{attrs:{currencies:e.toArray,"override-currency":e.overrideTo,"from-source":!1,page:"SwapContainerTo"},on:{selectedCurrency:e.setToCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.toValue,expression:"toValue"}],attrs:{type:"number",name:"",value:"",step:"any",placeholder:"Received Amount"},domProps:{value:e.toValue},on:{input:[function(t){t.target.composing||(e.toValue=t.target.value)},function(t){return e.amountChanged("to")}]}})]),r("div",{staticClass:"error-message-container"},[e.toBelowMinAllowed?r("p",[e._v(e._s(e.toBelowMinAllowed))]):e._e(),e.toAboveMaxAllowed?r("p",[e._v(e._s(e.toAboveMaxAllowed))]):e._e()])],1)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isExitToFiat,expression:"!isExitToFiat"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.toCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("common.toAddress")},on:{toAddress:e.setToAddress,validAddress:function(t){e.validAddress=t},unableToValidate:function(t){e.unableToValidate=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validAddress,expression:"!validAddress"}],staticClass:"error-message-container"},[r("p",[e._v(e._s(e.$t("interface.notValidAddr",{currency:e.toCurrency})))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.unableToValidate,expression:"unableToValidate"}],staticClass:"warn-message-container"},[r("p",[e._v("\n            "+e._s(e.$t("interface.unableToValidateAddress",{currency:e.toCurrency}))+"\n          ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isExitToFiat&&e.fromCurrency!==e.baseCurrency,expression:"isExitToFiat && fromCurrency !== baseCurrency"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("interface.fromAddr")},on:{toAddress:e.setExitFromAddress,validAddress:function(t){e.validExitAddress=t},unableToValidate:function(t){e.unableToValidateExit=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validExitAddress,expression:"!validExitAddress"}],staticClass:"error-message-container"},[r("p",[e._v("\n            "+e._s(e.$t("interface.notValidAddrSrc",{currency:e.fromCurrency}))+"\n          ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.unableToValidateExit,expression:"unableToValidateExit"}],staticClass:"warn-message-container"},[r("p",[e._v("\n            "+e._s(e.$t("interface.unableToValidateAddress",{currency:e.toCurrency}))+"\n          ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefundAddress,expression:"showRefundAddress"}],staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("drop-down-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("interface.refund",{currency:e.fromCurrency})},on:{toAddress:e.setRefundAddress,validAddress:function(t){e.validRefundAddress=t},unableToValidate:function(t){e.unableToValidateRefund=t}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.validRefundAddress,expression:"!validRefundAddress"}],staticClass:"error-message-container"},[r("p",[e._v("\n            "+e._s(e.$t("interface.notValidAddr",{currency:e.fromCurrency}))+"\n          ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.unableToValidateRefund,expression:"unableToValidateRefund"}],staticClass:"warn-message-container"},[r("p",[e._v("\n            "+e._s(e.$t("interface.unableToValidateAddress",{currency:e.toCurrency}))+"\n          ")])])]),r("div",{staticClass:"send-form"},[r("div",{staticClass:"title-container"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$t("interface.providers")))])])]),r("providers-radio-selector",{attrs:{"loading-provider-error":e.loadingError,"loading-provider-rates":!e.haveProviderRates,"provider-data":e.providerList,"from-value":+e.fromValue,"to-value":+e.toValue,"no-providers-pair":e.noProvidersPair,"loading-data":e.loadingData,"providers-found":e.providersFound,"provider-selected":e.selectedProvider,"switch-currency-order":e.switchCurrencyOrder,"all-supported-providers":e.supportedProviders},on:{selectedProvider:e.setSelectedProvider}})],1),r("div",{staticClass:"submit-button-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.finalizingSwap,expression:"finalizingSwap"}],staticClass:"disabled submit-button large-round-button-green-filled clickable"},[r("i",{staticClass:"fa fa-spinner fa-spin"}),e._v("\n          "+e._s(e.$t("interface.swapButtonLoading"))+"\n        ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.finalizingSwap,expression:"!finalizingSwap"}],class:[e.validSwap?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.swapConfirmationModalOpen}},[e._v("\n          "+e._s(e.$t("common.continue"))+"\n          "),r("i",{staticClass:"fa fa-long-arrow-right",attrs:{"aria-hidden":"true"}})]),r("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1),e.bityExitToFiat?r("swap-exit-to-fiat",{attrs:{"swap-details":e.swapDetails,"exit-from-address":e.exitSourceAddress,"exit-to-fiat-callback":e.exitToFiatCallback},on:{backButtonClick:e.exitToFiatAbort}}):e._e()],1)},a=[],n=(r("8e6e"),r("456d"),r("ac6a"),r("5df3"),r("6b54"),r("96cf"),r("3b8d")),o=(r("6762"),r("2fdb"),r("75fc")),d=(r("7514"),r("bd86")),c=(r("7f7f"),r("901e")),u=r.n(c),l=r("34eb"),h=r.n(l),m=r("2f62"),f=r("ce96"),p=r("16c6"),v=r("12fd"),w=r("539d"),y=r("55c1"),b=r("979e"),C=r.n(b),A=r("6822"),x=r.n(A),V=r("458a"),g=r.n(V),k=r("b8b3"),T=r.n(k),E=r("ba84"),R=r("3d8e"),F=r("5766"),P=r("aeba"),_=r("b643");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach(function(t){Object(d["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var $=h()("v5:swapContainer"),D={components:{"interface-bottom-text":w["a"],"interface-container-title":y["a"],"swap-currency-picker":E["a"],"drop-down-address-selector":v["a"],"providers-radio-selector":p["a"],"swap-confirmation-modal":R["a"],"swap-exit-to-fiat":F["a"],"swap-send-form":F["a"],"swap-send-to-modal":P["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}}},data:function(){return{baseCurrency:_["a"],toAddress:"",currentAddress:"",refundAddress:"",exitFromAddress:"",fromCurrency:"ETH",toCurrency:"ETH",displayToValue:1,displayFromValue:1,fromValue:1,toValue:1,invalidFrom:"none",lastBestRate:0,selectedProvider:{},swapDetails:{},currencyDetails:{},swap:new _["e"](_["m"],{network:this.$store.state.network.type.name,web3:this.$store.state.web3,getRateForUnit:!1},{tokensWithBalance:this.tokensWithBalance}),images:{kybernetowrk:x.a,bity:g.a,visaMaster:T.a,swap:C.a},toArray:[],fromArray:[],providerData:[],tokenBalances:{},providerRatesRecieved:[],noProvidersPair:{},providersFound:[],tempStatuses:[],overrideFrom:{},overrideTo:{},providerNames:_["l"],supportedProviders:_["o"],fiatCurrenciesArray:_["h"].map(function(e){return e.symbol}),finalizingSwap:!1,validAddress:!0,validRefundAddress:!0,validExitAddress:!0,ratesRetrived:!1,issueRecievingRates:!1,loadingData:!0,haveProviderRates:!1,loadingError:!1,switchCurrencyOrder:!1,bityExitToFiat:!1,exitToFiatCallback:function(){},debounceUpdateEstimate:{},debounceDoThing:{},unableToValidate:!1,unableToValidateExit:!1,unableToValidateRefund:!1}},computed:S({},Object(m["b"])(["account","ens","gasPrice","web3","network"]),{bestRate:function(){var e=this;try{return this.providerData.length>0?this.selectedProvider.provider?this.providerList.find(function(t){return t.provider===e.selectedProvider.provider}).rate:Object(_["g"])(Object(o["a"])(this.providerList),this.fromValue):this.lastBestRate}catch(t){$(t)}},fromBelowMinAllowed:function(){return new u.a(_["d"]).gt(new u.a(this.fromValue))?"".concat(this.$t("interface.belowMin")," ").concat(_["d"]):!!new u.a(this.selectedProvider.minValue).gt(new u.a(this.fromValue))&&this.$t("interface.belowMin",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},fromAboveMaxAllowed:function(){return this.selectedProvider.provider===this.providerNames.bity?!!this.checkBityMax&&this.$t("interface.aboveMax",{value:this.selectedProvider.maxValue,currency:this.fromCurrency}):!(!new u.a(this.fromValue).gt(new u.a(this.selectedProvider.maxValue))||!new u.a(this.selectedProvider.maxValue).gt(new u.a(0)))&&this.$t("interface.aboveMaxSwap",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},toBelowMinAllowed:function(){return!!new u.a(0).gte(new u.a(this.toValue))&&this.$t("interface.belowMinGeneral")},toAboveMaxAllowed:function(){return!!this.checkBityMax&&this.$t("interface.aboveMaxGeneral")},providerList:function(){return this.providerData.length>0?Object(_["f"])(Object(o["a"])(this.providerData),this.fromValue):[]},isExitToFiat:function(){return this.fiatCurrenciesArray.includes(this.toCurrency)},validSwap:function(){var e=!this.isExitToFiat||this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress;return this.hasEnough&&(""!==this.toAddress||e)&&this.allAddressesValid&&this.selectedProvider.minValue<=+this.fromValue&&(+this.fromValue<=this.selectedProvider.maxValue||0===this.selectedProvider.maxValue)},checkBityMax:function(){return!!this.swap.isProvider(this.providerNames.bity)&&(!this.swap.getProvider(this.providerNames.bity).maxCheck(this.fromCurrency,this.fromValue,this.toCurrency,this.toValue)&&this.selectedProvider.provider===this.providerNames.bity)},showRefundAddress:function(){return!_["e"].isToken(this.fromCurrency)&&this.selectedProvider.provider===this.providerNames.changelly},allAddressesValid:function(){var e=""!==this.toAddress&&this.validAddress;if(this.isExitToFiat)return this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress&&this.validExitAddress;if(this.showRefundAddress){if(this.fromCurrency===this.baseCurrency||_["e"].isToken(this.fromCurrency)){var t=""===this.refundAddress&&this.validRefundAddress;return e&&t}return _["e"].checkAddress(this.refundAddress,this.fromCurrency)}return e},hasEnough:function(){if(_["e"].isToken(this.fromCurrency)&&this.fromCurrency!==this.baseCurrency){var e=this.swap.convertToTokenWei(this.fromCurrency,this.fromValue);return new u.a(this.tokenBalances[this.fromCurrency]).gte(new u.a(e))}if(this.fromCurrency===this.baseCurrency){var t=this.swap.convertToTokenWei(this.fromCurrency,this.fromValue);return new u.a(this.account.balance).gt(new u.a(t))}return!0},exitSourceAddress:function(){return this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress}}),watch:(s={},Object(d["a"])(s,"this.network.type.name",function(){this.swap.updateNetwork(this.network.type.name)}),Object(d["a"])(s,"swap.updateProviderRates",function(){var e=this.swap.initialCurrencyLists,t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r}),Object(d["a"])(s,"swap.haveProviderRates",function(){this.haveProviderRates=this.swap.ratesRetrieved;var e=this.swap.buildInitialCurrencyArrays(),t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r,this.lastBestRate=Object(_["g"])(Object(o["a"])(this.providerList),this.fromValue),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from")}),Object(d["a"])(s,"network",function(e){this.providerData=[],this.haveProviderRates=!1,this.loadingData=!1,this.swap=new _["e"](_["m"],{network:e.type.name,web3:this.web3})}),s),mounted:function(){var e=this.swap.initialCurrencyLists,t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r,this.currentAddress=this.account.address,this.debounceUpdateEstimate=this.web3.utils._.debounce(this.updateEstimate,300),this.debounceReviseRateEstimate=this.web3.utils._.debounce(this.updateRateEstimate,2e3)},methods:{reset:function(){this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from"),this.finalizingSwap=!1,this.validAddress=!0,this.issueRecievingRates=!1,this.loadingError=!1,this.switchCurrencyOrder=!1,this.bityExitToFiat=!1},flipCurrencies:function(){this.switchCurrencyOrder=!0;var e=this.toValue;this.fromCurrency=this.currencyDetails.to.symbol,this.toCurrency=this.currencyDetails.from.symbol,this.overrideFrom=this.currencyDetails.to,this.overrideTo=this.currencyDetails.from,this.updateRateEstimate(this.fromCurrency,this.toCurrency,e,"from"),this.switchCurrencyOrder=!1},setSelectedProvider:function(e){this.selectedProvider=this.providerList.find(function(t){return t.provider===e}),this.updateEstimate("from")},setToAddress:function(e){this.toAddress=e},setRefundAddress:function(e){this.refundAddress=e},setExitFromAddress:function(e){this.exitFromAddress=e},swapAll:function(){this.fromValue=this.swap.convertToTokenBase(this.fromCurrency,this.tokenBalances[this.fromCurrency]),this.amountChanged("from")},setFromCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"from";this.currencyDetails.from=e,this.fromCurrency=e.symbol,this.getBalance(this.fromCurrency),this.toArray=this.swap.setToCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},setToCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"to";this.currencyDetails.to=e,this.toCurrency=e.symbol,this.fromArray=this.swap.setFromCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},getBalance:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!_["e"].isToken(t)||t===this.baseCurrency){e.next=5;break}return e.next=3,new this.web3.eth.Contract(_["b"],this.swap.getTokenAddress(t)).methods.balanceOf(this.currentAddress).call();case 3:r=e.sent,this.$set(this.tokenBalances,t,r);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),amountChanged:function(e){if(Object(_["j"])(this.fromValue)&&"from"===e||Object(_["j"])(this.toValue)&&"to"===e)if(this.swap.getProvider(this.providerNames.simplex).currencies.fiat[this.fromCurrency])this.debounceUpdateEstimate(this.providerNames.simplex+e);else{this.debounceUpdateEstimate(e);var t=this.fromCurrency,r=this.toCurrency,s=this.fromValue;this.debounceReviseRateEstimate(t,r,s,e)}},updateEstimate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,s,i,a,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.simplexUpdate){e.next=3;break}return this.simplexUpdate=!1,e.abrupt("return");case 3:e.t0=t,e.next="to"===e.t0?6:"from"===e.t0?8:e.t0==="".concat(this.providerNames.simplex,"to")?10:e.t0==="".concat(this.providerNames.simplex,"from")?26:42;break;case 6:return this.fromValue=this.swap.calculateFromValue(this.toValue,this.bestRate,this.fromCurrency),e.abrupt("break",47);case 8:return this.toValue=this.swap.calculateToValue(this.fromValue,this.bestRate,this.toCurrency),e.abrupt("break",47);case 10:if(this.simplexUpdate=!0,i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=20;break}return e.next=15,i.updateDigital(this.fromCurrency,this.toCurrency,this.toValue);case 15:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=25;break;case 20:return e.next=22,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 22:a=e.sent,n=new u.a(a.toValue).div(a.fromValue).toString(10),this.fromValue=this.swap.calculateFromValue(this.toValue,n,this.fromCurrency);case 25:return e.abrupt("break",47);case 26:if(this.simplexUpdate=!0,i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=36;break}return e.next=31,i.updateFiat(this.fromCurrency,this.toCurrency,this.fromValue);case 31:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=41;break;case 36:return e.next=38,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 38:a=e.sent,o=new u.a(a.toValue).div(a.fromValue).toString(10),this.toValue=this.swap.calculateToValue(this.fromValue,o);case 41:return e.abrupt("break",47);case 42:return s=this.swap.calculateToValue(this.fromValue,this.bestRate),r=this.swap.calculateFromValue(this.toValue,this.bestRate),this.toValue=s,this.fromValue=r,e.abrupt("break",47);case 47:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateRateEstimate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,s,i){var a,n,o,d,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.haveProviderRates){e.next=16;break}return this.loadingData=!0,this.noProvidersPair={fromCurrency:t,toCurrency:r},this.selectedProvider={},this.providerData=[],e.next=7,this.swap.updateRateEstimate(t,r,s,this.toValue);case 7:return a=e.sent,n=a.providersFound,o=a.callsToMake,this.providersFound=n,e.next=13,Promise.all(o.map(function(e){return e(t,r,s,c.toValue)}));case 13:d=e.sent,this.loadingData=!1,d.every(function(e){return e.fromCurrency===c.fromCurrency&&e.toCurrency===c.toCurrency})&&(this.providerData=Object(_["f"])(d.map(function(e){if(+e.rate>0)return{provider:e.provider,fromCurrency:t,fromValue:c.fromValue,toCurrency:r,rate:+e.rate,minValue:e.minValue||0,maxValue:e.maxValue||0,computeConversion:function(e){return new u.a(e).times(this.rate).toFixed(6).toString(10)}}}),s),this.updateEstimate(i));case 16:case"end":return e.stop()}},e,this)}));function t(t,r,s,i){return e.apply(this,arguments)}return t}(),swapConfirmationModalOpen:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.validSwap){e.next=10;break}return this.finalizingSwap=!0,t=this.providerList.find(function(e){return e.provider===s.selectedProvider.provider}),r={providerDetails:t,fromValue:this.fromValue,toValue:this.toValue,toAddress:this.toAddress||this.currentAddress,fromAddress:this.currentAddress,refundAddress:_["e"].isToken(t.fromCurrency)?this.currentAddress:this.refundAddress,exitFromAddress:this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress},e.next=7,this.swap.startSwap(r);case 7:this.swapDetails=e.sent,this.finalizingSwap=!1,this.swapDetails.isExitToFiat?(this.bityExitToFiat=!0,this.exitToFiatCallback=function(e){s.bityExitToFiat=!1,s.swapDetails=e,s.openConfirmModal(s.swapDetails)}):this.openConfirmModal(this.swapDetails);case 10:e.next=22;break;case 12:if(e.prev=12,e.t0=e["catch"](0),"abort"!==e.t0.message){e.next=17;break}return this.finalizingSwap=!1,e.abrupt("return");case 17:this.$refs.swapConfirmation.$refs.swapconfirmation.hide(),this.$refs.swapSendTo.$refs.swapconfirmation.hide(),this.finalizingSwap=!1,$(e.t0),f["d"].responseHandler(e.t0,!1);case 22:case"end":return e.stop()}},e,this,[[0,12]])}));function t(){return e.apply(this,arguments)}return t}(),openConfirmModal:function(e){if(e.dataForInitialization&&e.maybeToken)this.$refs.swapConfirmation.$refs.swapconfirmation.show();else{if(!e.dataForInitialization||e.maybeToken)throw Error("Error while requesting finalized details from provider");this.$refs.swapSendTo.$refs.swapconfirmation.show()}},exitToFiatAbort:function(){this.bityExitToFiat=!this.bityExitToFiat},resetSwapState:function(){this.reset()}}},j=D,B=(r("af5d"),r("2877")),M=Object(B["a"])(j,i,a,!1,null,"4cf9888a",null),N=M.exports;r.d(t,"default",function(){return N})},7754:function(e,t,r){},af5d:function(e,t,r){"use strict";var s=r("7754"),i=r.n(s);i.a}}]);
//# sourceMappingURL=chunk-327f18a6.30828d4a.js.map