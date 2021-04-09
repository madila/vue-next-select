this.VueNextSelect=function(e){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}function l(e,n){var l;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(l=function(e,n){if(e){if("string"==typeof e)return t(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){l&&(e=l);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,r=!0,i=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){i=!0,u=e},f:function(){try{r||null==l.return||l.return()}finally{if(i)throw u}}}}var a={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(n,t){var l=e.ref(null);return e.onMounted((function(){n.autofocus&&l.value.focus()})),e.onUpdated((function(){n.autofocus&&l.value.focus()})),{handleInput:function(e){t.emit("input",e),t.emit("update:modelValue",e.target.value)},handleChange:function(e){t.emit("change",e),t.emit("update:modelValue",e.target.value)},handleFocus:function(e){t.emit("focus",e)},handleBlur:function(e){t.emit("blur",e)},input:l,handleEscape:function(e){l.value.blur(),t.emit("escape",e)}}}},o={class:"vue-input"};a.render=function(n,t,l,a,u,r){return e.openBlock(),e.createBlock("div",o,[e.renderSlot(n.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:t[1]||(t[1]=function(){return a.handleInput&&a.handleInput.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.handleChange&&a.handleChange.apply(a,arguments)}),onFocus:t[3]||(t[3]=function(){return a.handleFocus&&a.handleFocus.apply(a,arguments)}),onBlur:t[4]||(t[4]=function(){return a.handleBlur&&a.handleBlur.apply(a,arguments)}),onKeyup:t[5]||(t[5]=e.withKeys(e.withModifiers((function(){return a.handleEscape&&a.handleEscape.apply(a,arguments)}),["exact"]),["esc"])),tabindex:l.tabindex,autofocus:l.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),e.renderSlot(n.$slots,"append")])},a.__file="src/components/input.vue";var u={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==n(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},collapseTags:{type:Boolean}},emits:["click"],setup:function(n,t){return{dataAttrs:e.inject("dataAttrs"),handleClick:function(e){t.emit("click",e)}}}};u.render=function(n,t,l,a,o,u){return e.openBlock(),e.createBlock("ul",e.mergeProps({class:["vue-tags",{collapsed:l.collapseTags}],onMousedown:t[1]||(t[1]=e.withModifiers((function(){}),["prevent"])),tabindex:"-1",onClick:t[2]||(t[2]=function(){return a.handleClick&&a.handleClick.apply(a,arguments)})},a.dataAttrs),[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,(function(t){return e.openBlock(),e.createBlock(e.Fragment,{key:t.key},[t.group?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createBlock("li",{key:0,class:["vue-tag",{selected:t.selected}]},[e.renderSlot(n.$slots,"default",{option:t},(function(){return[e.createVNode("span",null,e.toDisplayString(t.label),1)]}))],2))],64)})),128))],16)},u.__file="src/components/tags.vue";var r={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==n(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},headerHeight:{required:!0,type:String}},emits:["click-item","mousemove"],setup:function(n,t){return{dataAttrs:e.inject("dataAttrs"),handleClickItem:function(e,n){n.disabled||t.emit("click-item",e,n)},handleMousemove:function(e,n){t.emit("mousemove",e,n)}}}};r.render=function(n,t,l,a,o,u){return e.openBlock(),e.createBlock("ul",e.mergeProps({class:"vue-dropdown",onMousedown:t[1]||(t[1]=e.withModifiers((function(){}),["prevent"])),style:{top:l.headerHeight}},a.dataAttrs),[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,(function(t){return e.openBlock(),e.createBlock(e.Fragment,{key:t.key},[t.visible&&!1===t.hidden?(e.openBlock(),e.createBlock("li",{key:0,onClick:function(e){return a.handleClickItem(e,t)},class:["vue-dropdown-item",{selected:t.selected,disabled:t.disabled,highlighted:t.highlighted,group:t.group}],onMousemove:function(e){return a.handleMousemove(e,t)}},[e.renderSlot(n.$slots,"default",{option:t},(function(){return[e.createVNode("span",null,e.toDisplayString(t.label),1)]}))],42,["onClick","onMousemove"])):e.createCommentVNode("v-if",!0)],64)})),128))],16)},r.__file="src/components/dropdown.vue";var i=function(e,n,t){var l=t.valueBy;return l(e)===l(n)},c=function(e,n,t){var l=t.valueBy;return e.some((function(e){return i(e,n,{valueBy:l})}))},d=function(e,n,t){var l=t.valueBy;return e.find((function(e){return l(e)===n}))},p=function(e,n,t){var l=t.max,a=t.valueBy;return c(e,n,{valueBy:a})||e.length>=l?e:e.concat(n)},s=function(e,n,t){var l=t.min,a=t.valueBy;return!1===c(e,n,{valueBy:a})||e.length<=l?e:e.filter((function(e){return!1===i(e,n,{valueBy:a})}))},v=function(n){return e.computed((function(){return"function"==typeof n.value?n.value:"string"==typeof n.value?function(e){return n.value.split(".").reduce((function(e,n){return e[n]}),e)}:function(e){return e}}))},f={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{default:null},inputName:{default:"",type:String},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},groupBy:{default:"group",type:[String,Function]}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(n,t){var a=function(n){return{labelBy:v(e.toRef(n,"labelBy")),valueBy:v(e.toRef(n,"valueBy")),disabledBy:v(e.toRef(n,"disabledBy")),groupBy:v(e.toRef(n,"groupBy")),min:e.computed((function(){return n.multiple?n.min:Math.min(1,n.min)})),max:e.computed((function(){return n.multiple?n.max:1})),options:e.isRef(n.options)||e.isReactive(n.options)?e.toRef(n,"options"):e.ref(n.options)}}(n),o=a.labelBy,u=a.valueBy,r=a.disabledBy,i=a.groupBy,f=a.min,h=a.max,g=a.options;e.getCurrentInstance();var m=e.ref(),y=e.ref(),b=e.ref(),B=e.computed((function(){var e;return null===(e=b.value)||void 0===e?void 0:e._.refs.input})),w=e.ref(!1);console.log(B,b),e.watch((function(){return w.value}),(function(){w.value?(t.emit("opened"),n.searchable?(B.value!==document.activeElement&&B.value.focus(),t.emit("search:focus")):m.value.focus()):(n.searchable?(B.value===document.activeElement&&B.value.blur(),n.clearOnClose&&$(),t.emit("search:blur")):m.value.blur(),t.emit("closed"))}));var I=function(){n.disabled||(w.value=!0)},V=function(){w.value=!1};e.watch((function(){return n.disabled}),(function(){return V()}));var k,M,S,N,x=e.ref(),F=(k=x,M=function(){return n.modelValue},S=e.ref("0"),N=function(){e.nextTick((function(){k.value&&(S.value=window.getComputedStyle(k.value).height)}))},e.watch(M,N),e.onMounted(N),S),C=e.computed((function(){return n.searchable&&n.multiple&&n.taggable?"22px":"0px"})),O=e.computed((function(){return parseFloat(F.value)+parseFloat(C.value)+"px"})),D=e.ref(""),A=e.computed((function(){return new RegExp(D.value,"i")})),T=e.computed((function(){return D.value?g.value.filter((function(e){return A.value.test(o.value(e))})):void 0})),E=e.ref([]),L=function(){if(n.multiple){if(!1===Array.isArray(n.modelValue))return!1;if(E.value.length!==n.modelValue.length)return!1;if(Object.keys(E.value).some((function(e){return E.value[e]!==d(g.value,n.modelValue[e],{valueBy:u.value})})))return!1}else{if(0===E.value.length&&n.modelValue!==n.emptyModelValue)return!1;if(1===E.value.length&&n.modelValue===n.emptyModelValue)return!1;if(E.value[0]!==d(g.value,n.modelValue,{valueBy:u.value}))return!1}return!0},j=function(){if(!L()){E.value=[];var e,t=l(n.multiple?n.modelValue:n.modelValue===n.emptyModelValue?[]:[n.modelValue]);try{for(t.s();!(e=t.n()).done;){var a=e.value,o=d(g.value,a,{valueBy:u.value});!1!==c(g.value,o,{valueBy:u.value})&&(E.value=p(E.value,o,{max:1/0,valueBy:u.value}))}}catch(e){t.e(e)}finally{t.f()}}};j(),e.watch((function(){return n.modelValue}),(function(){return j()}),{deep:!0});e.watch((function(){return E}),(function(){return function(){if(!L()){var e=E.value.map((function(e){return u.value(e)}));n.multiple?t.emit("update:modelValue",n.inputName,e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",n.inputName,n.emptyModelValue)}}()}),{deep:!0}),e.watch((function(){return g.value}),(function(){var e=new Set(E.value.map((function(e){return u.value(e)})));E.value=g.value.filter((function(n){return e.has(u.value(n))}))}),{deep:!0});var z=function(e,n){(n=n.originalOption).value.every((function(e){var n=d(g.value,e,{valueBy:u.value});return c(E.value,n,{valueBy:u.value})}))?n.value.forEach((function(e){var n=d(g.value,e,{valueBy:u.value});E.value=s(E.value,n,{min:f.value,valueBy:u.value}),t.emit("removed",n)})):n.value.forEach((function(e){var n=d(g.value,e,{valueBy:u.value});c(E.value,n,{valueBy:u.value})||(E.value=p(E.value,n,{max:h.value,valueBy:u.value}),t.emit("selected",n))}))},R=function(e,l){if(l=l.originalOption,c(E.value,l,{valueBy:u.value}))E.value=s(E.value,l,{min:f.value,valueBy:u.value}),t.emit("removed",l);else{if(!n.multiple){var a=E.value[0];E.value=s(E.value,E.value[0],{min:0,valueBy:u.value}),t.emit("removed",a)}E.value=p(E.value,l,{max:h.value,valueBy:u.value}),t.emit("selected",l)}},$=function(){B.value.value="",B.value.dispatchEvent(new Event("input")),B.value.dispatchEvent(new Event("change"))},P=e.computed((function(){var e,t;return null!==(e=null!==(t=n.visibleOptions)&&void 0!==t?t:T.value)&&void 0!==e?e:g.value})),_=e.ref(0),Z=e.computed((function(){var e,t=new Set(E.value.map((function(e){return u.value(e)}))),a=new Set(P.value.map((function(e){return u.value(e)}))),c=g.value.map((function(e,l){var c={key:u.value(e),label:o.value(e),group:i.value(e),highlighted:l===_.value,originalIndex:l,originalOption:e};return c.selected=c.group?e.value.every((function(e){return t.has(e)})):t.has(u.value(e)),c.disabled=c.group?r.value(e)||e.value.every((function(e){var n=d(g.value,e,{valueBy:u.value});return r.value(n)})):r.value(e),c.visible=c.group?e.value.some((function(e){return a.has(e)})):a.has(u.value(e)),c.hidden=!!n.hideSelected&&(c.group?e.value.every((function(e){return t.has(e)})):t.has(u.value(e))),c})),p=l(c);try{for(p.s();!(e=p.n()).done;){var s=e.value;!1!==s.group&&(s.disabled&&function(){var e=new Set(s.originalOption.value);c.filter((function(n){return e.has(u.value(n.originalOption))})).forEach((function(e){return e.disabled=!0}))}())}}catch(e){p.e(e)}finally{p.f()}return c})),W=function(n,t){var l=function(e){var l=n.value.find((function(n){return n.originalIndex===e}));return void 0!==l&&!1!==a(l)&&(t.value=e,!0)},a=function(e){return!e.disabled&&!e.hidden&&e.visible},o=e.computed((function(){return n.value.some((function(e){return a(e)}))}));return e.watchEffect((function(){if(!1===o.value&&(t.value=null),n.value.length<=t.value)for(var e=0,u=n.value.reverse();e<u.length;e++){var r=u[e];if(l(r.originalIndex))break}if(null===t.value||!1===a(n.value[t.value]))for(var i=0,c=n.value;i<c.length&&(r=c[i],!l(r.originalIndex));i++);})),{pointerForward:function(){if(!1!==o.value&&null!==t.value)for(var e=t.value+1;e!==t.value&&(n.value.length<=e&&(e=0),!l(e));)++e},pointerBackward:function(){if(!1!==o.value&&null!==t.value)for(var e=t.value-1;e!==t.value&&(e<0&&(e=n.value.length-1),!l(e));)--e},pointerSet:l}}(Z,_),U=W.pointerForward,q=W.pointerBackward,H=W.pointerSet,G=function(){var e,n=null===(e=m.value)||void 0===e?void 0:e.querySelector(".highlighted");if(n&&y.value){for(var t=getComputedStyle(n);n.offsetTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)>y.value.$el.clientHeight+y.value.$el.scrollTop;)y.value.$el.scrollTop=y.value.$el.scrollTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom);for(;n.offsetTop<y.value.$el.scrollTop;)y.value.$el.scrollTop=y.value.$el.scrollTop-parseFloat(t.height)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)}},K=e.computed((function(){return{"data-is-focusing":w.value,"data-visible-length":Z.value.filter((function(e){return e.visible&&!1===e.hidden})).length,"data-not-selected-length":g.value.length-Z.value.filter((function(e){return e.selected})).length,"data-selected-length":Z.value.filter((function(e){return e.selected})).length,"data-addable":Z.value.filter((function(e){return e.selected})).length<h.value,"data-removable":Z.value.filter((function(e){return e.selected})).length>f.value,"data-total-length":g.value.length,"data-multiple":n.multiple}}));e.provide("dataAttrs",K);var Q=e.computed((function(){var e=Z.value.filter((function(e){return e.selected})).filter((function(e){return!e.group}));return n.multiple?0===e.length?n.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?n.placeholder:e[0].label+""}));return{isFocusing:w,wrapper:m,dropdown:y,input:b,focus:I,blur:V,toggle:function(){w.value?V():I()},header:x,headerAndInputHeight:O,searchingInputValue:D,handleInputForInput:function(e){t.emit("search:input",e)},handleChangeForInput:function(e){t.emit("search:change",e)},handleFocusForInput:function(e){I()},handleBlurForInput:function(e){V()},optionsWithInfo:Z,addOrRemoveOption:function(e,t){n.disabled||(t.group&&n.multiple?z(e,t):R(e,t),!0===n.closeOnSelect&&(w.value=!1),!0===n.clearOnSelect&&D.value&&$())},dataAttrs:K,innerPlaceholder:Q,highlightedOriginalIndex:_,pointerForward:function(){U.apply(void 0,arguments),e.nextTick(G)},pointerBackward:function(){q.apply(void 0,arguments),e.nextTick(G)},pointerSet:H}},components:{VInput:a,VTags:u,VDropdown:r},__VERSION__:"2.1.1"},h={ref:"header",class:"vue-select-header"},g={key:0,class:"vue-input"},m={class:"icon loading"},y=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1),w={class:"icon loading"},I=e.createVNode("div",null,null,-1),V=e.createVNode("div",null,null,-1),k=e.createVNode("div",null,null,-1);return f.render=function(n,t,l,a,o,u){var r=e.resolveComponent("v-tags"),i=e.resolveComponent("v-input"),c=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",e.mergeProps({ref:"wrapper",class:["vue-select",{disabled:n.disabled}],tabindex:n.isFocusing?-1:n.tabindex,onFocus:t[10]||(t[10]=function(){return n.focus&&n.focus.apply(n,arguments)}),onBlur:t[11]||(t[11]=function(){return!n.searchable&&n.blur()})},n.dataAttrs,{onKeypress:t[12]||(t[12]=e.withKeys((function(){return null!==n.highlightedOriginalIndex&&n.addOrRemoveOption(n.$event,n.optionsWithInfo[n.highlightedOriginalIndex])}),["enter"])),onKeydown:[t[13]||(t[13]=e.withKeys(e.withModifiers((function(){return n.pointerForward&&n.pointerForward.apply(n,arguments)}),["prevent"]),["down"])),t[14]||(t[14]=e.withKeys(e.withModifiers((function(){return n.pointerBackward&&n.pointerBackward.apply(n,arguments)}),["prevent"]),["up"]))]}),[e.createVNode("div",h,[n.multiple&&n.taggable&&0===n.modelValue.length||!1===n.searchable&&!1===n.taggable?(e.openBlock(),e.createBlock("div",g,[e.createVNode("input",{placeholder:n.innerPlaceholder,readonly:"",onClick:t[1]||(t[1]=function(){return n.focus&&n.focus.apply(n,arguments)})},null,8,["placeholder"])])):e.createCommentVNode("v-if",!0),n.multiple&&n.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:1},[e.createVNode(r,{modelValue:n.optionsWithInfo,"collapse-tags":n.collapseTags,tabindex:"-1",onClick:n.focus},{default:e.withCtx((function(t){var l=t.option;return[e.renderSlot(n.$slots,"tag",{option:l.originalOption},(function(){return[e.createVNode("span",null,e.toDisplayString(l.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:e.withModifiers((function(){return n.addOrRemoveOption(n.$event,l)}),["prevent","stop"])},null,8,["onClick"])]}))]})),_:1},8,["modelValue","collapse-tags","onClick"]),e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[2]||(t[2]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onMousedown:t[3]||(t[3]=e.withModifiers((function(){}),["prevent","stop"]))},[e.renderSlot(n.$slots,"icon")],34)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:2},[n.searchable?(e.openBlock(),e.createBlock(i,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.searchingInputValue=e}),disabled:n.disabled,placeholder:n.isFocusing?n.searchPlaceholder:n.innerPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,autofocus:n.autofocus||n.taggable&&n.searchable,tabindex:n.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode("span",m,[y,b,B],512),[[e.vShow,n.loading]]),e.withDirectives(e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[5]||(t[5]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onMousedown:t[6]||(t[6]=e.withModifiers((function(){}),["prevent","stop"]))},[e.renderSlot(n.$slots,"icon")],34),[[e.vShow,!1===n.loading]])],64))],512),n.multiple&&n.taggable&&n.searchable?e.withDirectives((e.openBlock(),e.createBlock(i,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.searchingInputValue=e}),disabled:n.disabled,placeholder:n.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,tabindex:n.tabindex,autofocus:n.autofocus||n.taggable&&n.searchable},{append:e.withCtx((function(){return[e.withDirectives(e.createVNode("span",w,[I,V,k],512),[[e.vShow,n.loading]])]})),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[e.vShow,n.isFocusing]]):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode(c,{ref:"dropdown",modelValue:n.optionsWithInfo,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.optionsWithInfo=e}),onClickItem:n.addOrRemoveOption,onMousemove:t[9]||(t[9]=function(e,t){return n.pointerSet(t.originalIndex)}),"header-height":n.headerAndInputHeight},{default:e.withCtx((function(t){var l=t.option;return[e.renderSlot(n.$slots,"dropdown-item",{option:l.originalOption},(function(){return[e.createVNode("span",null,e.toDisplayString(l.label),1)]}))]})),_:1},8,["modelValue","onClickItem","header-height"]),[[e.vShow,n.isFocusing]])],16,["tabindex"])},f.__file="src/index.vue",f}(Vue);
