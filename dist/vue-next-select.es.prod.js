import{ref as e,onMounted as n,onUpdated as t,openBlock as l,createBlock as a,renderSlot as u,createVNode as o,withKeys as i,withModifiers as r,inject as d,mergeProps as c,Fragment as p,renderList as v,toDisplayString as s,createCommentVNode as f,toRef as h,computed as m,isRef as g,isReactive as y,watch as b,watchEffect as I,nextTick as B,getCurrentInstance as w,provide as M,resolveComponent as V,withDirectives as x,vShow as S,withCtx as F}from"vue";function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}function k(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var l=0,a=function(){};return{s:a,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){i=!0,u=e},f:function(){try{o||null==t.return||t.return()}finally{if(i)throw u}}}}var A={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},inputName:{required:!0},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(l,a){var u=l.inputName,o=e(null);return n((function(){l.autofocus&&o.value.focus()})),t((function(){l.autofocus&&o.value.focus()})),{handleInput:function(e){a.emit("input",e),a.emit("update:modelValue",u,e.target.value)},handleChange:function(e){a.emit("change",e),a.emit("update:modelValue",u,e.target.value)},handleFocus:function(e){a.emit("focus",e)},handleBlur:function(e){a.emit("blur",e)},inputName:u,input:o,handleEscape:function(e){o.value.blur(),a.emit("escape",e)}}}},T={class:"vue-input"};A.render=function(e,n,t,d,c,p){return l(),a("div",T,[u(e.$slots,"prepend"),o("input",{ref:"input",modelValue:t.modelValue,placeholder:t.placeholder,disabled:t.disabled,name:d.inputName,onInput:n[1]||(n[1]=function(){return d.handleInput&&d.handleInput.apply(d,arguments)}),onChange:n[2]||(n[2]=function(){return d.handleChange&&d.handleChange.apply(d,arguments)}),onFocus:n[3]||(n[3]=function(){return d.handleFocus&&d.handleFocus.apply(d,arguments)}),onBlur:n[4]||(n[4]=function(){return d.handleBlur&&d.handleBlur.apply(d,arguments)}),onKeyup:n[5]||(n[5]=i(r((function(){return d.handleEscape&&d.handleEscape.apply(d,arguments)}),["exact"]),["esc"])),tabindex:t.tabindex,autofocus:t.autofocus},null,40,["modelValue","placeholder","disabled","name","tabindex","autofocus"]),u(e.$slots,"append")])},A.__file="src/components/input.vue";var C={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==N(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},collapseTags:{type:Boolean}},emits:["click"],setup:function(e,n){return{dataAttrs:d("dataAttrs"),handleClick:function(e){n.emit("click",e)}}}};C.render=function(e,n,t,i,d,h){return l(),a("ul",c({class:["vue-tags",{collapsed:t.collapseTags}],onMousedown:n[1]||(n[1]=r((function(){}),["prevent"])),tabindex:"-1",onClick:n[2]||(n[2]=function(){return i.handleClick&&i.handleClick.apply(i,arguments)})},i.dataAttrs),[(l(!0),a(p,null,v(t.modelValue,(function(n){return l(),a(p,{key:n.key},[n.group?f("v-if",!0):(l(),a("li",{key:0,class:["vue-tag",{selected:n.selected}]},[u(e.$slots,"default",{option:n},(function(){return[o("span",null,s(n.label),1)]}))],2))],64)})),128))],16)},C.__file="src/components/tags.vue";var D={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==N(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},headerHeight:{required:!0,type:String}},emits:["click-item","mousemove"],setup:function(e,n){return{dataAttrs:d("dataAttrs"),handleClickItem:function(e,t){t.disabled||n.emit("click-item",e,t)},handleMousemove:function(e,t){n.emit("mousemove",e,t)}}}};D.render=function(e,n,t,i,d,h){return l(),a("ul",c({class:"vue-dropdown",onMousedown:n[1]||(n[1]=r((function(){}),["prevent"])),style:{top:t.headerHeight}},i.dataAttrs),[(l(!0),a(p,null,v(t.modelValue,(function(n){return l(),a(p,{key:n.key},[n.visible&&!1===n.hidden?(l(),a("li",{key:0,onClick:function(e){return i.handleClickItem(e,n)},class:["vue-dropdown-item",{selected:n.selected,disabled:n.disabled,highlighted:n.highlighted,group:n.group}],onMousemove:function(e){return i.handleMousemove(e,n)}},[u(e.$slots,"default",{option:n},(function(){return[o("span",null,s(n.label),1)]}))],42,["onClick","onMousemove"])):f("v-if",!0)],64)})),128))],16)},D.__file="src/components/dropdown.vue";var E=function(e,n,t){var l=t.valueBy;return l(e)===l(n)},L=function(e,n,t){var l=t.valueBy;return e.some((function(e){return E(e,n,{valueBy:l})}))},j=function(e,n,t){var l=t.valueBy;return e.find((function(e){return l(e)===n}))},z=function(e,n,t){var l=t.max,a=t.valueBy;return L(e,n,{valueBy:a})||e.length>=l?e:e.concat(n)},_=function(e,n,t){var l=t.min,a=t.valueBy;return!1===L(e,n,{valueBy:a})||e.length<=l?e:e.filter((function(e){return!1===E(e,n,{valueBy:a})}))},$=function(e){return m((function(){return"function"==typeof e.value?e.value:"string"==typeof e.value?function(n){return e.value.split(".").reduce((function(e,n){return e[n]}),n)}:function(e){return e}}))},P={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{default:null},inputName:{required:!0},initialValue:{type:[Array,String]},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},groupBy:{default:"group",type:[String,Function]}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(t,l){var a=function(n){var t=$(h(n,"labelBy")),l=$(h(n,"valueBy")),a=$(h(n,"disabledBy")),u=$(h(n,"groupBy")),o=n.initialValue,i=n.inputName;return{labelBy:t,valueBy:l,disabledBy:a,groupBy:u,min:m((function(){return n.multiple?n.min:Math.min(1,n.min)})),max:m((function(){return n.multiple?n.max:1})),options:g(n.options)||y(n.options)?h(n,"options"):e(n.options),inputName:i,initialValue:o}}(t),u=a.labelBy,o=a.valueBy,i=a.disabledBy,r=a.groupBy,d=a.min,c=a.max,p=a.options,v=a.inputName,s=a.initialValue;w();var f=e(),V=e(),x=e(),S=m((function(){var e;return null===(e=x.value)||void 0===e?void 0:e._.refs.input})),F=e(!1);b((function(){return F.value}),(function(){F.value?(l.emit("opened"),t.searchable?(S.value!==document.activeElement&&S.value.focus(),l.emit("search:focus")):f.value.focus()):(t.searchable?(S.value===document.activeElement&&S.value.blur(),t.clearOnClose&&J(),l.emit("search:blur")):f.value.blur(),l.emit("closed"))}));var N=function(){t.disabled||(F.value=!0)},O=function(){F.value=!1};b((function(){return t.disabled}),(function(){return O()}));var A,T,C,D,E=e(),P=(A=E,T=function(){return t.modelValue},C=e("0"),b(T,D=function(){B((function(){A.value&&(C.value=window.getComputedStyle(A.value).height)}))}),n(D),C),Z=m((function(){return t.searchable&&t.multiple&&t.taggable?"22px":"0px"})),q=m((function(){return parseFloat(P.value)+parseFloat(Z.value)+"px"})),W=e(""),R=m((function(){return new RegExp(W.value,"i")})),U=m((function(){return W.value?p.value.filter((function(e){return R.value.test(u.value(e))})):void 0})),H=e([]),G=function(){if(t.multiple){if(!1===Array.isArray(t.modelValue))return!1;if(H.value.length!==t.modelValue.length)return!1;if(Object.keys(H.value).some((function(e){return H.value[e]!==j(p.value,t.modelValue[e],{valueBy:o.value})})))return!1}else{if(0===H.value.length&&t.modelValue!==t.emptyModelValue)return!1;if(1===H.value.length&&t.modelValue===t.emptyModelValue)return!1;if(H.value[0]!==j(p.value,t.modelValue,{valueBy:o.value}))return!1}return!0},Q=function(){if(!G()){H.value=[];var e,n=k(t.multiple?t.modelValue:t.modelValue===t.emptyModelValue?[]:[t.modelValue]);try{for(n.s();!(e=n.n()).done;){var l=e.value,a=j(p.value,l,{valueBy:o.value});!1!==L(p.value,a,{valueBy:o.value})&&(H.value=z(H.value,a,{max:1/0,valueBy:o.value}))}}catch(e){n.e(e)}finally{n.f()}}};Q(),b((function(){return t.modelValue}),(function(){return Q()}),{deep:!0});b((function(){return H}),(function(){return function(){if(!G()){var e=H.value.map((function(e){return o.value(e)}));t.multiple?l.emit("update:modelValue",t,e):e.length?l.emit("update:modelValue",t,e[0]):l.emit("update:modelValue",t,t.emptyModelValue)}}()}),{deep:!0}),b((function(){return p.value}),(function(){var e=new Set(H.value.map((function(e){return o.value(e)})));H.value=p.value.filter((function(n){return e.has(o.value(n))}))}),{deep:!0});var Y=function(e,n){(n=n.originalOption).value.every((function(e){var n=j(p.value,e,{valueBy:o.value});return L(H.value,n,{valueBy:o.value})}))?n.value.forEach((function(e){var n=j(p.value,e,{valueBy:o.value});H.value=_(H.value,n,{min:d.value,valueBy:o.value}),l.emit("removed",t,n)})):n.value.forEach((function(e){var n=j(p.value,e,{valueBy:o.value});L(H.value,n,{valueBy:o.value})||(H.value=z(H.value,n,{max:c.value,valueBy:o.value}),l.emit("selected",t,n))})),!0===t.closeOnSelect&&(F.value=!1),!0===t.clearOnSelect&&W.value&&(x.value._.refs.input.value="",x.value._.refs.input.dispatchEvent(new Event("input")),x.value._.refs.input.dispatchEvent(new Event("change")))},K=function(e,n){if(n=n.originalOption,L(H.value,n,{valueBy:o.value}))H.value=_(H.value,n,{min:d.value,valueBy:o.value}),l.emit("removed",t,n);else{if(!t.multiple){var a=H.value[0];H.value=_(H.value,H.value[0],{min:0,valueBy:o.value}),l.emit("removed",t,a)}H.value=z(H.value,n,{max:c.value,valueBy:o.value}),l.emit("selected",t,n)}},J=function(){S.value.value="",S.value.dispatchEvent(new Event("input")),S.value.dispatchEvent(new Event("change"))},X=m((function(){var e,n;return null!==(e=null!==(n=t.visibleOptions)&&void 0!==n?n:U.value)&&void 0!==e?e:p.value})),ee=e(0),ne=m((function(){var e,n=new Set(H.value.map((function(e){return o.value(e)}))),l=new Set(X.value.map((function(e){return o.value(e)}))),a=p.value.map((function(e,a){var d={key:o.value(e),label:u.value(e),group:r.value(e),highlighted:a===ee.value,originalIndex:a,originalOption:e};return d.selected=d.group?e.value.every((function(e){return n.has(e)})):n.has(o.value(e)),d.disabled=d.group?i.value(e)||e.value.every((function(e){var n=j(p.value,e,{valueBy:o.value});return i.value(n)})):i.value(e),d.visible=d.group?e.value.some((function(e){return l.has(e)})):l.has(o.value(e)),d.hidden=!!t.hideSelected&&(d.group?e.value.every((function(e){return n.has(e)})):n.has(o.value(e))),d})),d=k(a);try{for(d.s();!(e=d.n()).done;){var c=e.value;!1!==c.group&&(c.disabled&&function(){var e=new Set(c.originalOption.value);a.filter((function(n){return e.has(o.value(n.originalOption))})).forEach((function(e){return e.disabled=!0}))}())}}catch(e){d.e(e)}finally{d.f()}return a})),te=function(e,n){var t=function(t){var a=e.value.find((function(e){return e.originalIndex===t}));return void 0!==a&&!1!==l(a)&&(n.value=t,!0)},l=function(e){return!e.disabled&&!e.hidden&&e.visible},a=m((function(){return e.value.some((function(e){return l(e)}))}));return I((function(){if(!1===a.value&&(n.value=null),e.value.length<=n.value)for(var u=0,o=e.value.reverse();u<o.length;u++){var i=o[u];if(t(i.originalIndex))break}if(null===n.value||!1===l(e.value[n.value]))for(var r=0,d=e.value;r<d.length&&(i=d[r],!t(i.originalIndex));r++);})),{pointerForward:function(){if(!1!==a.value&&null!==n.value)for(var l=n.value+1;l!==n.value&&(e.value.length<=l&&(l=0),!t(l));)++l},pointerBackward:function(){if(!1!==a.value&&null!==n.value)for(var l=n.value-1;l!==n.value&&(l<0&&(l=e.value.length-1),!t(l));)--l},pointerSet:t}}(ne,ee),le=te.pointerForward,ae=te.pointerBackward,ue=te.pointerSet,oe=function(){var e,n=null===(e=f.value)||void 0===e?void 0:e.querySelector(".highlighted");if(n&&V.value){for(var t=getComputedStyle(n);n.offsetTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)>V.value.$el.clientHeight+V.value.$el.scrollTop;)V.value.$el.scrollTop=V.value.$el.scrollTop+parseFloat(t.height)+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom);for(;n.offsetTop<V.value.$el.scrollTop;)V.value.$el.scrollTop=V.value.$el.scrollTop-parseFloat(t.height)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)}},ie=m((function(){return{"data-initial-value":s,"data-is-focusing":F.value,"data-visible-length":ne.value.filter((function(e){return e.visible&&!1===e.hidden})).length,"data-not-selected-length":p.value.length-ne.value.filter((function(e){return e.selected})).length,"data-selected-length":ne.value.filter((function(e){return e.selected})).length,"data-addable":ne.value.filter((function(e){return e.selected})).length<c.value,"data-removable":ne.value.filter((function(e){return e.selected})).length>d.value,"data-total-length":p.value.length,"data-multiple":t.multiple}}));M("dataAttrs",ie);var re=m((function(){var e=ne.value.filter((function(e){return e.selected})).filter((function(e){return!e.group}));return t.multiple?0===e.length?t.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?t.placeholder:e[0].label+""}));return{isFocusing:F,inputName:v,initialValue:s,wrapper:f,dropdown:V,input:x,focus:N,blur:O,toggle:function(){F.value?O():N()},header:E,headerAndInputHeight:q,searchingInputValue:W,handleInputForInput:function(e){l.emit("search:input",e,t)},handleChangeForInput:function(e){l.emit("search:change",e,t)},handleFocusForInput:function(e){N()},handleBlurForInput:function(e){O()},optionsWithInfo:ne,addOrRemoveOption:function(e,n){t.disabled||(n.group&&t.multiple?Y(e,n):K(e,n),!0===t.closeOnSelect&&(F.value=!1),!0===t.clearOnSelect&&W.value&&J())},dataAttrs:ie,innerPlaceholder:re,highlightedOriginalIndex:ee,pointerForward:function(){le.apply(void 0,arguments),B(oe)},pointerBackward:function(){ae.apply(void 0,arguments),B(oe)},pointerSet:ue}},components:{VInput:A,VTags:C,VDropdown:D},__VERSION__:"2.1.2"},Z={ref:"header",class:"vue-select-header"},q={key:0,class:"vue-input"},W={class:"icon loading"},R=o("div",null,null,-1),U=o("div",null,null,-1),H=o("div",null,null,-1),G={class:"icon loading"},Q=o("div",null,null,-1),Y=o("div",null,null,-1),K=o("div",null,null,-1),J={key:0,class:"tag-wrapper"};P.render=function(e,n,t,d,v,h){var m=V("v-input"),g=V("v-dropdown"),y=V("v-tags");return l(),a(p,null,[o("div",c({ref:"wrapper",class:["vue-select",{disabled:e.disabled}],tabindex:e.isFocusing?-1:e.tabindex,onFocus:n[8]||(n[8]=function(){return e.focus&&e.focus.apply(e,arguments)}),onBlur:n[9]||(n[9]=function(){return!e.searchable&&e.blur()})},e.dataAttrs,{onKeypress:n[10]||(n[10]=i((function(){return null!==e.highlightedOriginalIndex&&e.addOrRemoveOption(e.$event,e.optionsWithInfo[e.highlightedOriginalIndex])}),["enter"])),onKeydown:[n[11]||(n[11]=i(r((function(){return e.pointerForward&&e.pointerForward.apply(e,arguments)}),["prevent"]),["down"])),n[12]||(n[12]=i(r((function(){return e.pointerBackward&&e.pointerBackward.apply(e,arguments)}),["prevent"]),["up"]))]}),[o("div",Z,[e.multiple&&e.taggable&&0===e.modelValue.length||!1===e.searchable&&!1===e.taggable?(l(),a("div",q,[o("input",{placeholder:e.innerPlaceholder,"data-initial":e.initialValue,name:e.inputName,readonly:"",onClick:n[1]||(n[1]=function(){return e.focus&&e.focus.apply(e,arguments)})},null,8,["placeholder","data-initial","name"])])):f("v-if",!0),o("template",null,[e.searchable?(l(),a(m,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,"input-name":e.inputName,"data-initial":e.initialValue,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","input-name","data-initial","autofocus","tabindex"])):f("v-if",!0),x(o("span",W,[R,U,H],512),[[S,e.loading]]),x(o("span",{class:["icon arrow-downward",{active:e.isFocusing}],onClick:n[3]||(n[3]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:n[4]||(n[4]=r((function(){}),["prevent","stop"]))},[u(e.$slots,"icon")],34),[[S,!1===e.loading]])])],512),e.multiple&&e.taggable&&e.searchable?x((l(),a(m,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,placeholder:e.searchPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,"input-name":e.inputName,"data-initial":e.initialValue,tabindex:e.tabindex,autofocus:e.autofocus||e.taggable&&e.searchable},{append:F((function(){return[x(o("span",G,[Q,Y,K],512),[[S,e.loading]])]})),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","input-name","data-initial","tabindex","autofocus"])),[[S,e.isFocusing]]):f("v-if",!0),x(o(g,{ref:"dropdown",modelValue:e.optionsWithInfo,"onUpdate:modelValue":n[6]||(n[6]=function(n){return e.optionsWithInfo=n}),onClickItem:e.addOrRemoveOption,onMousemove:n[7]||(n[7]=function(n,t){return e.pointerSet(t.originalIndex)}),"header-height":e.headerAndInputHeight},{default:F((function(n){var t=n.option;return[u(e.$slots,"dropdown-item",{option:t.originalOption},(function(){return[o("span",null,s(t.label),1)]}))]})),_:1},8,["modelValue","onClickItem","header-height"]),[[S,e.isFocusing]])],16,["tabindex"]),e.multiple&&e.taggable?(l(),a("div",J,[o(y,{modelValue:e.optionsWithInfo,"collapse-tags":e.collapseTags,tabindex:"-1",onClick:e.focus},{default:F((function(n){var t=n.option;return[u(e.$slots,"tag",{option:t.originalOption},(function(){return[o("span",null,s(t.label),1),o("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:r((function(){return e.addOrRemoveOption(e.$event,t)}),["prevent","stop"])},null,8,["onClick"])]}))]})),_:1},8,["modelValue","collapse-tags","onClick"])])):f("v-if",!0)],64)},P.__file="src/index.vue";export default P;
