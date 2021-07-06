"use strict";var e=require("vue");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}function l(e,n){var l;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(l=function(e,n){if(e){if("string"==typeof e)return t(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){l&&(e=l);var a=0,u=function(){};return{s:u,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,i=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){i=!0,o=e},f:function(){try{r||null==l.return||l.return()}finally{if(i)throw o}}}}var a={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},inputName:{required:!0},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(n,t){var l=n.inputName,a=e.ref(null);return e.onMounted((function(){n.autofocus&&a.value.focus()})),e.onUpdated((function(){n.autofocus&&a.value.focus()})),{handleInput:function(e){t.emit("input",e),t.emit("update:modelValue",l,e.target.value)},handleChange:function(e){t.emit("change",e),t.emit("update:modelValue",l,e.target.value)},handleFocus:function(e){t.emit("focus",e)},handleBlur:function(e){t.emit("blur",e)},inputName:l,input:a,handleEscape:function(e){a.value.blur(),t.emit("escape",e)}}}},u={class:"vue-input"};a.render=function(n,t,l,a,o,r){return e.openBlock(),e.createBlock("div",u,[e.renderSlot(n.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,name:a.inputName,onInput:t[1]||(t[1]=function(){return a.handleInput&&a.handleInput.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.handleChange&&a.handleChange.apply(a,arguments)}),onFocus:t[3]||(t[3]=function(){return a.handleFocus&&a.handleFocus.apply(a,arguments)}),onBlur:t[4]||(t[4]=function(){return a.handleBlur&&a.handleBlur.apply(a,arguments)}),onKeyup:t[5]||(t[5]=e.withKeys(e.withModifiers((function(){return a.handleEscape&&a.handleEscape.apply(a,arguments)}),["exact"]),["esc"])),tabindex:l.tabindex,autofocus:l.autofocus},null,40,["modelValue","placeholder","disabled","name","tabindex","autofocus"]),e.renderSlot(n.$slots,"append")])},a.__file="src/components/input.vue";var o={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==n(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},collapseTags:{type:Boolean}},emits:["click"],setup:function(n,t){return{dataAttrs:e.inject("dataAttrs"),handleClick:function(e){t.emit("click",e)}}}};o.render=function(n,t,l,a,u,o){return e.openBlock(),e.createBlock("ul",e.mergeProps({class:["vue-tags",{collapsed:l.collapseTags}],onMousedown:t[1]||(t[1]=e.withModifiers((function(){}),["prevent"])),tabindex:"-1",onClick:t[2]||(t[2]=function(){return a.handleClick&&a.handleClick.apply(a,arguments)})},a.dataAttrs),[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,(function(t){return e.openBlock(),e.createBlock(e.Fragment,{key:t.key},[t.group?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createBlock("li",{key:0,class:["vue-tag",{selected:t.selected}]},[e.renderSlot(n.$slots,"default",{option:t},(function(){return[e.createVNode("span",null,e.toDisplayString(t.label),1)]}))],2))],64)})),128))],16)},o.__file="src/components/tags.vue";var r={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==n(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},headerHeight:{required:!0,type:String}},emits:["click-item","mousemove"],setup:function(n,t){return{dataAttrs:e.inject("dataAttrs"),handleClickItem:function(e,n){n.disabled||t.emit("click-item",e,n)},handleMousemove:function(e,n){t.emit("mousemove",e,n)}}}};r.render=function(n,t,l,a,u,o){return e.openBlock(),e.createBlock("ul",e.mergeProps({class:"vue-dropdown",onMousedown:t[1]||(t[1]=e.withModifiers((function(){}),["prevent"])),style:{top:l.headerHeight}},a.dataAttrs),[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,(function(t){return e.openBlock(),e.createBlock(e.Fragment,{key:t.key},[t.visible&&!1===t.hidden?(e.openBlock(),e.createBlock("li",{key:0,onClick:function(e){return a.handleClickItem(e,t)},class:["vue-dropdown-item",{selected:t.selected,disabled:t.disabled,highlighted:t.highlighted,group:t.group}],onMousemove:function(e){return a.handleMousemove(e,t)}},[e.renderSlot(n.$slots,"default",{option:t},(function(){return[e.createVNode("span",null,e.toDisplayString(t.label),1)]}))],42,["onClick","onMousemove"])):e.createCommentVNode("v-if",!0)],64)})),128))],16)},r.__file="src/components/dropdown.vue";var i=function(e,n,t){var l=t.valueBy;return l(e)===l(n)},c=function(e,n,t){var l=t.valueBy;return e.some((function(e){return i(e,n,{valueBy:l})}))},d=function(e,n,t){var l=t.valueBy;return e.find((function(e){return l(e)===n}))},p=function(e,n,t){var l=t.max,a=t.valueBy;return c(e,n,{valueBy:a})||e.length>=l?e:e.concat(n)},s=function(e,n,t){var l=t.min,a=t.valueBy;return!1===c(e,n,{valueBy:a})||e.length<=l?e:e.filter((function(e){return!1===i(e,n,{valueBy:a})}))},v=function(n){return e.computed((function(){return"function"==typeof n.value?n.value:"string"==typeof n.value?function(e){return n.value.split(".").reduce((function(e,n){return e[n]}),e)}:function(e){return e}}))},f={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{default:null},inputName:{required:!0},initialValue:{type:[Array,String]},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},groupBy:{default:"group",type:[String,Function]}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(n,t){var a=function(n){var t=v(e.toRef(n,"labelBy")),l=v(e.toRef(n,"valueBy")),a=v(e.toRef(n,"disabledBy")),u=v(e.toRef(n,"groupBy")),o=n.initialValue,r=n.inputName;return{labelBy:t,valueBy:l,disabledBy:a,groupBy:u,min:e.computed((function(){return n.multiple?n.min:Math.min(1,n.min)})),max:e.computed((function(){return n.multiple?n.max:1})),options:e.isRef(n.options)||e.isReactive(n.options)?e.toRef(n,"options"):e.ref(n.options),inputName:r,initialValue:o}}(n),u=a.labelBy,o=a.valueBy,r=a.disabledBy,i=a.groupBy,f=a.min,h=a.max,m=a.options,g=a.inputName,y=a.initialValue;e.getCurrentInstance();var b=e.ref(),B=e.ref(),w=e.ref(),I=e.computed((function(){var e;return null===(e=w.value)||void 0===e?void 0:e._.refs.input})),V=e.ref(!1);e.watch((function(){return V.value}),(function(){V.value?(t.emit("opened"),n.searchable?(I.value!==document.activeElement&&I.value.focus(),t.emit("search:focus")):b.value.focus()):(n.searchable?(I.value===document.activeElement&&I.value.blur(),n.clearOnClose&&P(),t.emit("search:blur")):b.value.blur(),t.emit("closed"))}));var k=function(){n.disabled||(V.value=!0)},M=function(){V.value=!1};e.watch((function(){return n.disabled}),(function(){return M()}));var N,S,x,F,C=e.ref(),O=(N=C,S=function(){return n.modelValue},x=e.ref("0"),F=function(){e.nextTick((function(){N.value&&(x.value=window.getComputedStyle(N.value).height)}))},e.watch(S,F),e.onMounted(F),x),D=e.computed((function(){return n.searchable&&n.multiple&&n.taggable?"22px":"0px"})),A=e.computed((function(){return parseFloat(O.value)+parseFloat(D.value)+"px"})),T=e.ref(""),E=e.computed((function(){return new RegExp(T.value,"i")})),L=e.computed((function(){return T.value?m.value.filter((function(e){return E.value.test(u.value(e))})):void 0})),j=e.ref([]),z=function(){if(n.multiple){if(!1===Array.isArray(n.modelValue))return!1;if(j.value.length!==n.modelValue.length)return!1;if(Object.keys(j.value).some((function(e){return j.value[e]!==d(m.value,n.modelValue[e],{valueBy:o.value})})))return!1}else{if(0===j.value.length&&n.modelValue!==n.emptyModelValue)return!1;if(1===j.value.length&&n.modelValue===n.emptyModelValue)return!1;if(j.value[0]!==d(m.value,n.modelValue,{valueBy:o.value}))return!1}return!0},_=function(){if(!z()){j.value=[];var e,t=l(n.multiple?n.modelValue:n.modelValue===n.emptyModelValue?[]:[n.modelValue]);try{for(t.s();!(e=t.n()).done;){var a=e.value,u=d(m.value,a,{valueBy:o.value});!1!==c(m.value,u,{valueBy:o.value})&&(j.value=p(j.value,u,{max:1/0,valueBy:o.value}))}}catch(e){t.e(e)}finally{t.f()}}};_(),e.watch((function(){return n.modelValue}),(function(){return _()}),{deep:!0});e.watch((function(){return j}),(function(){return function(){if(!z()){var e=j.value.map((function(e){return o.value(e)}));n.multiple?t.emit("update:modelValue",n,e):e.length?t.emit("update:modelValue",n,e[0]):t.emit("update:modelValue",n,n.emptyModelValue)}}()}),{deep:!0}),e.watch((function(){return m.value}),(function(){var e=new Set(j.value.map((function(e){return o.value(e)})));j.value=m.value.filter((function(n){return e.has(o.value(n))}))}),{deep:!0});var R=function(e,l){(l=l.originalOption).value.every((function(e){var n=d(m.value,e,{valueBy:o.value});return c(j.value,n,{valueBy:o.value})}))?l.value.forEach((function(e){var l=d(m.value,e,{valueBy:o.value});j.value=s(j.value,l,{min:f.value,valueBy:o.value}),t.emit("removed",n,l)})):l.value.forEach((function(e){var l=d(m.value,e,{valueBy:o.value});c(j.value,l,{valueBy:o.value})||(j.value=p(j.value,l,{max:h.value,valueBy:o.value}),t.emit("selected",n,l))})),!0===n.closeOnSelect&&(V.value=!1),!0===n.clearOnSelect&&T.value&&(w.value._.refs.input.value="",w.value._.refs.input.dispatchEvent(new Event("input")),w.value._.refs.input.dispatchEvent(new Event("change")))},$=function(e,l){if(l=l.originalOption,c(j.value,l,{valueBy:o.value}))j.value=s(j.value,l,{min:f.value,valueBy:o.value}),t.emit("removed",n,l);else{if(!n.multiple){var a=j.value[0];j.value=s(j.value,j.value[0],{min:0,valueBy:o.value}),t.emit("removed",n,a)}j.value=p(j.value,l,{max:h.value,valueBy:o.value}),t.emit("selected",n,l)}},P=function(){I.value.value="",I.value.dispatchEvent(new Event("input")),I.value.dispatchEvent(new Event("change"))},q=e.computed((function(){var e,t;return null!==(e=null!==(t=n.visibleOptions)&&void 0!==t?t:L.value)&&void 0!==e?e:m.value})),Z=e.ref(0),W=e.computed((function(){var e,t=new Set(j.value.map((function(e){return o.value(e)}))),a=new Set(q.value.map((function(e){return o.value(e)}))),c=m.value.map((function(e,l){var c={key:o.value(e),label:u.value(e),group:i.value(e),highlighted:l===Z.value,originalIndex:l,originalOption:e};return c.selected=c.group?e.value.every((function(e){return t.has(e)})):t.has(o.value(e)),c.disabled=c.group?r.value(e)||e.value.every((function(e){var n=d(m.value,e,{valueBy:o.value});return r.value(n)})):r.value(e),c.visible=c.group?e.value.some((function(e){return a.has(e)})):a.has(o.value(e)),c.hidden=!!n.hideSelected&&(c.group?e.value.every((function(e){return t.has(e)})):t.has(o.value(e))),c})),p=l(c);try{for(p.s();!(e=p.n()).done;){var s=e.value;!1!==s.group&&(s.disabled&&function(){var e=new Set(s.originalOption.value);c.filter((function(n){return e.has(o.value(n.originalOption))})).forEach((function(e){return e.disabled=!0}))}())}}catch(e){p.e(e)}finally{p.f()}return c})),U=function(n,t){var l=function(e){var l=n.value.find((function(n){return n.originalIndex===e}));return void 0!==l&&!1!==a(l)&&(t.value=e,!0)},a=function(e){return!e.disabled&&!e.hidden&&e.visible},u=e.computed((function(){return n.value.some((function(e){return a(e)}))}));return e.watchEffect((function(){if(!1===u.value&&(t.value=null),n.value.length<=t.value)for(var e=0,o=n.value.reverse();e<o.length;e++){var r=o[e];if(l(r.originalIndex))break}if(null===t.value||!1===a(n.value[t.value]))for(var i=0,c=n.value;i<c.length&&(r=c[i],!l(r.originalIndex));i++);})),{pointerForward:function(){if(!1!==u.value&&null!==t.value)for(var e=t.value+1;e!==t.value&&(n.value.length<=e&&(e=0),!l(e));)++e},pointerBackward:function(){if(!1!==u.value&&null!==t.value)for(var e=t.value-1;e!==t.value&&(e<0&&(e=n.value.length-1),!l(e));)--e},pointerSet:l}}(W,Z),H=U.pointerForward,G=U.pointerBackward,K=U.pointerSet,Q=function(){var e,n=null===(e=b.value)||void 0===e?void 0:e.querySelector(".highlighted");if(n&&B.value){for(var t=getComputedStyle(n);n.offsetTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)>B.value.$el.clientHeight+B.value.$el.scrollTop;)B.value.$el.scrollTop=B.value.$el.scrollTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom);for(;n.offsetTop<B.value.$el.scrollTop;)B.value.$el.scrollTop=B.value.$el.scrollTop-parseFloat(t.height)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)}},Y=e.computed((function(){return{"data-initial-value":y,"data-is-focusing":V.value,"data-visible-length":W.value.filter((function(e){return e.visible&&!1===e.hidden})).length,"data-not-selected-length":m.value.length-W.value.filter((function(e){return e.selected})).length,"data-selected-length":W.value.filter((function(e){return e.selected})).length,"data-addable":W.value.filter((function(e){return e.selected})).length<h.value,"data-removable":W.value.filter((function(e){return e.selected})).length>f.value,"data-total-length":m.value.length,"data-multiple":n.multiple}}));e.provide("dataAttrs",Y);var J=e.computed((function(){var e=W.value.filter((function(e){return e.selected})).filter((function(e){return!e.group}));return n.multiple?0===e.length?n.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?n.placeholder:e[0].label+""}));return{isFocusing:V,inputName:g,initialValue:y,wrapper:b,dropdown:B,input:w,focus:k,blur:M,toggle:function(){V.value?M():k()},header:C,headerAndInputHeight:A,searchingInputValue:T,handleInputForInput:function(e){t.emit("search:input",e,n)},handleChangeForInput:function(e){t.emit("search:change",e,n)},handleFocusForInput:function(e){k()},handleBlurForInput:function(e){M()},optionsWithInfo:W,addOrRemoveOption:function(e,t){n.disabled||(t.group&&n.multiple?R(e,t):$(e,t),!0===n.closeOnSelect&&(V.value=!1),!0===n.clearOnSelect&&T.value&&P())},dataAttrs:Y,innerPlaceholder:J,highlightedOriginalIndex:Z,pointerForward:function(){H.apply(void 0,arguments),e.nextTick(Q)},pointerBackward:function(){G.apply(void 0,arguments),e.nextTick(Q)},pointerSet:K}},components:{VInput:a,VTags:o,VDropdown:r},__VERSION__:"2.1.2"},h={ref:"header",class:"vue-select-header"},m={key:0,class:"vue-input"},g={class:"icon loading"},y=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1),w={class:"icon loading"},I=e.createVNode("div",null,null,-1),V=e.createVNode("div",null,null,-1),k=e.createVNode("div",null,null,-1);f.render=function(n,t,l,a,u,o){var r=e.resolveComponent("v-tags"),i=e.resolveComponent("v-input"),c=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",e.mergeProps({ref:"wrapper",class:["vue-select",{disabled:n.disabled}],tabindex:n.isFocusing?-1:n.tabindex,onFocus:t[10]||(t[10]=function(){return n.focus&&n.focus.apply(n,arguments)}),onBlur:t[11]||(t[11]=function(){return!n.searchable&&n.blur()})},n.dataAttrs,{onKeypress:t[12]||(t[12]=e.withKeys((function(){return null!==n.highlightedOriginalIndex&&n.addOrRemoveOption(n.$event,n.optionsWithInfo[n.highlightedOriginalIndex])}),["enter"])),onKeydown:[t[13]||(t[13]=e.withKeys(e.withModifiers((function(){return n.pointerForward&&n.pointerForward.apply(n,arguments)}),["prevent"]),["down"])),t[14]||(t[14]=e.withKeys(e.withModifiers((function(){return n.pointerBackward&&n.pointerBackward.apply(n,arguments)}),["prevent"]),["up"]))]}),[e.createVNode("div",h,[n.multiple&&n.taggable&&0===n.modelValue.length||!1===n.searchable&&!1===n.taggable?(e.openBlock(),e.createBlock("div",m,[e.createVNode("input",{placeholder:n.innerPlaceholder,value:n.modelValue,"data-initial":n.initialValue,name:n.inputName,readonly:"",onClick:t[1]||(t[1]=function(){return n.focus&&n.focus.apply(n,arguments)})},null,8,["placeholder","value","data-initial","name"])])):e.createCommentVNode("v-if",!0),n.multiple&&n.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:1},[e.createVNode(r,{modelValue:n.optionsWithInfo,"collapse-tags":n.collapseTags,tabindex:"-1",onClick:n.focus},{default:e.withCtx((function(t){var l=t.option;return[e.renderSlot(n.$slots,"tag",{option:l},(function(){return[e.createVNode("span",null,e.toDisplayString(l.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:e.withModifiers((function(){return n.addOrRemoveOption(n.$event,l)}),["prevent","stop"])},null,8,["onClick"])]}))]})),_:1},8,["modelValue","collapse-tags","onClick"]),e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[2]||(t[2]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onMousedown:t[3]||(t[3]=e.withModifiers((function(){}),["prevent","stop"]))},[e.renderSlot(n.$slots,"icon")],34)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:2},[n.searchable?(e.openBlock(),e.createBlock(i,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.searchingInputValue=e}),disabled:n.disabled,placeholder:n.isFocusing?n.searchPlaceholder:n.innerPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,"input-name":n.inputName,"data-initial":n.initialValue,autofocus:n.autofocus||n.taggable&&n.searchable,tabindex:n.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","input-name","data-initial","autofocus","tabindex"])):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode("span",g,[y,b,B],512),[[e.vShow,n.loading]]),e.withDirectives(e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[5]||(t[5]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onMousedown:t[6]||(t[6]=e.withModifiers((function(){}),["prevent","stop"]))},[e.renderSlot(n.$slots,"icon")],34),[[e.vShow,!1===n.loading]])],64))],512),n.multiple&&n.taggable&&n.searchable?e.withDirectives((e.openBlock(),e.createBlock(i,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.searchingInputValue=e}),disabled:n.disabled,placeholder:n.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,"input-name":n.inputName,"data-initial":n.initialValue,tabindex:n.tabindex,autofocus:n.autofocus||n.taggable&&n.searchable},{append:e.withCtx((function(){return[e.withDirectives(e.createVNode("span",w,[I,V,k],512),[[e.vShow,n.loading]])]})),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","input-name","data-initial","tabindex","autofocus"])),[[e.vShow,n.isFocusing]]):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode(c,{ref:"dropdown",modelValue:n.optionsWithInfo,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.optionsWithInfo=e}),onClickItem:n.addOrRemoveOption,onMousemove:t[9]||(t[9]=function(e,t){return n.pointerSet(t.originalIndex)}),"header-height":n.headerAndInputHeight},{default:e.withCtx((function(t){var l=t.option;return[e.renderSlot(n.$slots,"dropdown-item",{option:l.originalOption},(function(){return[e.createVNode("span",null,e.toDisplayString(l.label),1)]}))]})),_:1},8,["modelValue","onClickItem","header-height"]),[[e.vShow,n.isFocusing]])],16,["tabindex"])},f.__file="src/index.vue",module.exports=f;
