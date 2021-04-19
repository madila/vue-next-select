'use strict';

var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var script$2 = {
  inheritAttrs: false,
  name: 'vue-input',
  props: {
    modelValue: {
      required: true,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    },
    disabled: {
      required: true,
      type: Boolean
    },
    inputName: {
      required: true
    },
    tabindex: {
      required: true,
      type: Number
    },
    autofocus: {
      required: true,
      type: Boolean
    }
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur', 'escape'],
  setup: function setup(props, context) {
    var inputName = props.inputName;
    console.log(inputName);

    var handleInput = function handleInput(event) {
      context.emit('input', event);
      context.emit('update:modelValue', inputName, event.target.value);
    };

    var handleChange = function handleChange(event) {
      context.emit('change', event);
      context.emit('update:modelValue', inputName, event.target.value);
    };

    var handleFocus = function handleFocus(event) {
      context.emit('focus', event);
    };

    var handleBlur = function handleBlur(event) {
      context.emit('blur', event);
    };

    var input = vue.ref(null);

    var handleEscape = function handleEscape(event) {
      input.value.blur();
      context.emit('escape', event);
    };

    vue.onMounted(function () {
      if (props.autofocus) input.value.focus();
    });
    vue.onUpdated(function () {
      if (props.autofocus) input.value.focus();
    });
    return {
      handleInput: handleInput,
      handleChange: handleChange,
      handleFocus: handleFocus,
      handleBlur: handleBlur,
      inputName: inputName,
      input: input,
      handleEscape: handleEscape
    };
  }
};

var _hoisted_1$1 = {
  "class": "vue-input"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "prepend"), vue.createVNode("input", {
    ref: "input",
    modelValue: $props.modelValue,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    name: $setup.inputName,
    onInput: _cache[1] || (_cache[1] = function () {
      return $setup.handleInput && $setup.handleInput.apply($setup, arguments);
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $setup.handleChange && $setup.handleChange.apply($setup, arguments);
    }),
    onFocus: _cache[3] || (_cache[3] = function () {
      return $setup.handleFocus && $setup.handleFocus.apply($setup, arguments);
    }),
    onBlur: _cache[4] || (_cache[4] = function () {
      return $setup.handleBlur && $setup.handleBlur.apply($setup, arguments);
    }),
    onKeyup: _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(function () {
      return $setup.handleEscape && $setup.handleEscape.apply($setup, arguments);
    }, ["exact"]), ["esc"])),
    tabindex: $props.tabindex,
    autofocus: $props.autofocus
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["modelValue", "placeholder", "disabled", "name", "tabindex", "autofocus"]), vue.renderSlot(_ctx.$slots, "append")]);
}

script$2.render = render$3;
script$2.__file = "src/components/input.vue";

var script$1 = {
  inheritAttrs: false,
  name: 'vue-tags',
  props: {
    modelValue: {
      required: true,
      type: Array,
      validator: function validator(modelValue) {
        return modelValue.every(function (option) {
          return _typeof(option.key) !== undefined && option.label !== undefined && typeof option.selected === 'boolean';
        });
      }
    },
    collapseTags: {
      type: Boolean
    }
  },
  emits: ['click'],
  setup: function setup(props, context) {
    var dataAttrs = vue.inject('dataAttrs');

    var handleClick = function handleClick(event) {
      context.emit('click', event);
    };

    return {
      dataAttrs: dataAttrs,
      handleClick: handleClick
    };
  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("ul", vue.mergeProps({
    "class": ["vue-tags", {
      collapsed: $props.collapseTags
    }],
    onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(function () {}, ["prevent"])),
    tabindex: "-1",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.handleClick && $setup.handleClick.apply($setup, arguments);
    })
  }, $setup.dataAttrs), [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.modelValue, function (option) {
    return vue.openBlock(), vue.createBlock(vue.Fragment, {
      key: option.key
    }, [!option.group ? (vue.openBlock(), vue.createBlock("li", {
      key: 0,
      "class": ["vue-tag", {
        selected: option.selected
      }]
    }, [vue.renderSlot(_ctx.$slots, "default", {
      option: option
    }, function () {
      return [vue.createVNode("span", null, vue.toDisplayString(option.label), 1
      /* TEXT */
      )];
    })], 2
    /* CLASS */
    )) : vue.createCommentVNode("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16
  /* FULL_PROPS */
  );
}

script$1.render = render$2;
script$1.__file = "src/components/tags.vue";

var script = {
  inheritAttrs: false,
  name: 'vue-dropdown',
  props: {
    modelValue: {
      required: true,
      type: Array,
      validator: function validator(modelValue) {
        return modelValue.every(function (option) {
          return _typeof(option.key) !== undefined && option.label !== undefined && typeof option.selected === 'boolean';
        });
      }
    },
    headerHeight: {
      required: true,
      type: String
    }
  },
  emits: ['click-item', 'mousemove'],
  setup: function setup(props, context) {
    var dataAttrs = vue.inject('dataAttrs');

    var handleClickItem = function handleClickItem(event, option) {
      if (option.disabled) return;
      context.emit('click-item', event, option);
    };

    var handleMousemove = function handleMousemove(event, option) {
      context.emit('mousemove', event, option);
    };

    return {
      dataAttrs: dataAttrs,
      handleClickItem: handleClickItem,
      handleMousemove: handleMousemove
    };
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("ul", vue.mergeProps({
    "class": "vue-dropdown",
    onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(function () {}, ["prevent"])),
    style: {
      top: $props.headerHeight
    }
  }, $setup.dataAttrs), [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.modelValue, function (option) {
    return vue.openBlock(), vue.createBlock(vue.Fragment, {
      key: option.key
    }, [option.visible && option.hidden === false ? (vue.openBlock(), vue.createBlock("li", {
      key: 0,
      onClick: function onClick($event) {
        return $setup.handleClickItem($event, option);
      },
      "class": ["vue-dropdown-item", {
        selected: option.selected,
        disabled: option.disabled,
        highlighted: option.highlighted,
        group: option.group
      }],
      onMousemove: function onMousemove($event) {
        return $setup.handleMousemove($event, option);
      }
    }, [vue.renderSlot(_ctx.$slots, "default", {
      option: option
    }, function () {
      return [vue.createVNode("span", null, vue.toDisplayString(option.label), 1
      /* TEXT */
      )];
    })], 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , ["onClick", "onMousemove"])) : vue.createCommentVNode("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16
  /* FULL_PROPS */
  );
}

script.render = render$1;
script.__file = "src/components/dropdown.vue";

var isSameOption = function isSameOption(option1, option2, _ref) {
  var valueBy = _ref.valueBy;
  return valueBy(option1) === valueBy(option2);
};
var hasOption = function hasOption(options, option, _ref2) {
  var valueBy = _ref2.valueBy;
  return options.some(function (_option) {
    return isSameOption(_option, option, {
      valueBy: valueBy
    });
  });
};
var getOptionByValue = function getOptionByValue(options, value, _ref3) {
  var valueBy = _ref3.valueBy;
  return options.find(function (option) {
    return valueBy(option) === value;
  });
};
var addOption = function addOption(selectedOptions, option, _ref4) {
  var max = _ref4.max,
      valueBy = _ref4.valueBy;
  if (hasOption(selectedOptions, option, {
    valueBy: valueBy
  })) return selectedOptions;
  if (selectedOptions.length >= max) return selectedOptions;
  return selectedOptions.concat(option);
};
var removeOption = function removeOption(selectedOptions, option, _ref5) {
  var min = _ref5.min,
      valueBy = _ref5.valueBy;
  if (hasOption(selectedOptions, option, {
    valueBy: valueBy
  }) === false) return selectedOptions;
  if (selectedOptions.length <= min) return selectedOptions;
  return selectedOptions.filter(function (_option) {
    return isSameOption(_option, option, {
      valueBy: valueBy
    }) === false;
  });
};

var createComputedForGetterFunction = function createComputedForGetterFunction(maybePathFunc) {
  return vue.computed(function () {
    return typeof maybePathFunc.value === 'function' ? maybePathFunc.value : typeof maybePathFunc.value === 'string' ? function (option) {
      return maybePathFunc.value.split('.').reduce(function (value, key) {
        return value[key];
      }, option);
    } : function (option) {
      return option;
    };
  });
};

var normalize = (function (props) {
  var labelBy = createComputedForGetterFunction(vue.toRef(props, 'labelBy'));
  var valueBy = createComputedForGetterFunction(vue.toRef(props, 'valueBy'));
  var disabledBy = createComputedForGetterFunction(vue.toRef(props, 'disabledBy'));
  var groupBy = createComputedForGetterFunction(vue.toRef(props, 'groupBy'));
  var initialValue = props.initialValue;
  var inputName = props.inputName;
  var min = vue.computed(function () {
    return props.multiple ? props.min : Math.min(1, props.min);
  });
  var max = vue.computed(function () {
    return props.multiple ? props.max : 1;
  });
  var options = vue.isRef(props.options) || vue.isReactive(props.options) ? vue.toRef(props, 'options') : vue.ref(props.options);
  return {
    labelBy: labelBy,
    valueBy: valueBy,
    disabledBy: disabledBy,
    groupBy: groupBy,
    min: min,
    max: max,
    options: options,
    inputName: inputName,
    initialValue: initialValue
  };
});

var useHeight = function useHeight(element, watchSource) {
  var height = vue.ref('0');

  var calcHeaderHeight = function calcHeaderHeight() {
    vue.nextTick(function () {
      if (!element.value) return;
      height.value = window.getComputedStyle(element.value).height;
    });
  };

  vue.watch(watchSource, calcHeaderHeight);
  vue.onMounted(calcHeaderHeight);
  return height;
};
var usePointer = function usePointer(options, highlightedOriginalIndex) {
  var pointerForward = function pointerForward() {
    if (isSomeSelectable.value === false) return;
    if (highlightedOriginalIndex.value === null) return;
    var tempOriginalIndex = highlightedOriginalIndex.value + 1;

    while (tempOriginalIndex !== highlightedOriginalIndex.value) {
      if (options.value.length <= tempOriginalIndex) tempOriginalIndex = 0;
      if (pointerSet(tempOriginalIndex)) break;
      ++tempOriginalIndex;
    }
  };

  var pointerBackward = function pointerBackward() {
    if (isSomeSelectable.value === false) return;
    if (highlightedOriginalIndex.value === null) return;
    var tempOriginalIndex = highlightedOriginalIndex.value - 1;

    while (tempOriginalIndex !== highlightedOriginalIndex.value) {
      if (tempOriginalIndex < 0) tempOriginalIndex = options.value.length - 1;
      if (pointerSet(tempOriginalIndex)) break;
      --tempOriginalIndex;
    }
  };

  var pointerSet = function pointerSet(originalIndex) {
    var option = options.value.find(function (option) {
      return option.originalIndex === originalIndex;
    });
    if (option === undefined) return false;
    if (isSelectable(option) === false) return false;
    highlightedOriginalIndex.value = originalIndex;
    return true;
  };

  var isSelectable = function isSelectable(option) {
    return !option.disabled && !option.hidden && option.visible;
  };

  var isSomeSelectable = vue.computed(function () {
    return options.value.some(function (option) {
      return isSelectable(option);
    });
  });
  vue.watchEffect(function () {
    if (isSomeSelectable.value === false) highlightedOriginalIndex.value = null;

    if (options.value.length <= highlightedOriginalIndex.value) {
      for (var _i = 0, _a = options.value.reverse(); _i < _a.length; _i++) {
        var option = _a[_i];
        if (pointerSet(option.originalIndex)) break;
      }
    }

    if (highlightedOriginalIndex.value === null || isSelectable(options.value[highlightedOriginalIndex.value]) === false) {
      for (var _b = 0, _c = options.value; _b < _c.length; _b++) {
        var option = _c[_b];
        if (pointerSet(option.originalIndex)) break;
      }
    }
  });
  return {
    pointerForward: pointerForward,
    pointerBackward: pointerBackward,
    pointerSet: pointerSet
  };
};

var version = "2.1.1";

var VueSelect = {
  name: 'vue-select',
  inheritAttrs: false,
  props: {
    modelValue: {
      required: true
    },
    emptyModelValue: {
      "default": null
    },
    inputName: {
      required: true
    },
    initialValue: {
      type: [Array, String]
    },
    options: {
      required: true,
      type: Array
    },
    visibleOptions: {
      type: [Array, null],
      "default": null
    },
    multiple: {
      "default": false,
      type: Boolean
    },
    min: {
      "default": 0,
      type: Number
    },
    max: {
      "default": Infinity,
      type: Number
    },
    closeOnSelect: {
      "default": false,
      type: Boolean
    },
    clearOnSelect: {
      "default": false,
      type: Boolean
    },
    hideSelected: {
      "default": false,
      type: Boolean
    },
    labelBy: {
      type: [String, Function]
    },
    valueBy: {
      type: [String, Function]
    },
    disabledBy: {
      "default": 'disabled',
      type: [String, Function]
    },
    disabled: {
      "default": false,
      type: Boolean
    },
    loading: {
      "default": false,
      type: Boolean
    },
    placeholder: {
      "default": 'Select option',
      type: String
    },
    searchPlaceholder: {
      "default": 'Type to search',
      type: String
    },
    searchable: {
      "default": false,
      type: Boolean
    },
    clearOnClose: {
      "default": false,
      type: Boolean
    },
    taggable: {
      "default": false,
      type: Boolean
    },
    collapseTags: {
      "default": false,
      type: Boolean
    },
    tabindex: {
      "default": 0,
      type: Number
    },
    autofocus: {
      "default": false,
      type: Boolean
    },
    groupBy: {
      "default": 'group',
      type: [String, Function]
    }
  },
  emits: ['update:modelValue', 'selected', 'removed', 'opened', 'closed', 'search:input', 'search:change', 'search:focus', 'search:blur'],
  setup: function setup(props, context) {
    var _normalize = normalize(props),
        labelBy = _normalize.labelBy,
        valueBy = _normalize.valueBy,
        disabledBy = _normalize.disabledBy,
        groupBy = _normalize.groupBy,
        min = _normalize.min,
        max = _normalize.max,
        options = _normalize.options,
        inputName = _normalize.inputName,
        initialValue = _normalize.initialValue;

    vue.getCurrentInstance();
    var wrapper = vue.ref();
    var dropdown = vue.ref();
    var input = vue.ref();
    var inputEl = vue.computed(function () {
      var _input$value;

      return (_input$value = input.value) === null || _input$value === void 0 ? void 0 : _input$value._.refs.input;
    });
    var isFocusing = vue.ref(false);
    vue.watch(function () {
      return isFocusing.value;
    }, function () {
      if (isFocusing.value) {
        context.emit('opened');

        if (props.searchable) {
          if (inputEl.value !== document.activeElement) {
            inputEl.value.focus();
          }

          context.emit('search:focus');
        } else {
          wrapper.value.focus();
        }
      } else {
        if (props.searchable) {
          if (inputEl.value === document.activeElement) {
            inputEl.value.blur();
          }

          if (props.clearOnClose) clearInput();
          context.emit('search:blur');
        } else {
          wrapper.value.blur();
        }

        context.emit('closed');
      }
    });

    var focus = function focus() {
      if (props.disabled) return;
      isFocusing.value = true;
    };

    var blur = function blur() {
      isFocusing.value = false;
    };

    var toggle = function toggle() {
      if (isFocusing.value) blur();else focus();
    };

    vue.watch(function () {
      return props.disabled;
    }, function () {
      return blur();
    });
    var header = vue.ref();
    var headerHeight = useHeight(header, function () {
      return props.modelValue;
    });
    var inputHeight = vue.computed(function () {
      return props.searchable && props.multiple && props.taggable ? '22px' : '0px';
    });
    var headerAndInputHeight = vue.computed(function () {
      return parseFloat(headerHeight.value) + parseFloat(inputHeight.value) + 'px';
    }); // input

    var searchingInputValue = vue.ref('');

    var handleInputForInput = function handleInputForInput(event) {
      context.emit('search:input', event);
    };

    var handleChangeForInput = function handleChangeForInput(event) {
      context.emit('search:change', event);
    };

    var handleFocusForInput = function handleFocusForInput(event) {
      focus();
    };

    var handleBlurForInput = function handleBlurForInput(event) {
      blur();
    };

    var searchRe = vue.computed(function () {
      return new RegExp(searchingInputValue.value, 'i');
    });
    var searchedOptions = vue.computed(function () {
      return searchingInputValue.value ? options.value.filter(function (option) {
        return searchRe.value.test(labelBy.value(option));
      }) : undefined;
    }); // sync model value

    var normalizedModelValue = vue.ref([]);

    var isSynchronoused = function isSynchronoused() {
      if (props.multiple) {
        if (Array.isArray(props.modelValue) === false) return false;
        if (normalizedModelValue.value.length !== props.modelValue.length) return false;
        if (Object.keys(normalizedModelValue.value).some(function (index) {
          return normalizedModelValue.value[index] !== getOptionByValue(options.value, props.modelValue[index], {
            valueBy: valueBy.value
          });
        })) return false;
      } else {
        if (normalizedModelValue.value.length === 0 && props.modelValue !== props.emptyModelValue) return false;
        if (normalizedModelValue.value.length === 1 && props.modelValue === props.emptyModelValue) return false;
        if (normalizedModelValue.value[0] !== getOptionByValue(options.value, props.modelValue, {
          valueBy: valueBy.value
        })) return false;
      }

      return true;
    };

    var syncFromModelValue = function syncFromModelValue() {
      if (isSynchronoused()) return;
      normalizedModelValue.value = [];
      var modelValue = props.multiple ? props.modelValue : props.modelValue === props.emptyModelValue ? [] : [props.modelValue];

      var _iterator = _createForOfIteratorHelper(modelValue),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          var option = getOptionByValue(options.value, value, {
            valueBy: valueBy.value
          }); // guarantee options has modelValue

          if (hasOption(options.value, option, {
            valueBy: valueBy.value
          }) === false) continue;
          normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
            max: Infinity,
            valueBy: valueBy.value
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    syncFromModelValue();
    vue.watch(function () {
      return props.modelValue;
    }, function () {
      return syncFromModelValue();
    }, {
      deep: true
    });

    var syncToModelValue = function syncToModelValue() {
      if (isSynchronoused()) return;
      var selectedValues = normalizedModelValue.value.map(function (option) {
        return valueBy.value(option);
      });

      if (props.multiple) {
        context.emit('update:modelValue', props, selectedValues);
      } else {
        if (selectedValues.length) context.emit('update:modelValue', props, selectedValues[0]);else context.emit('update:modelValue', props, props.emptyModelValue);
      }
    };

    vue.watch(function () {
      return normalizedModelValue;
    }, function () {
      return syncToModelValue();
    }, {
      deep: true
    }); // guarantee options has modelValue

    vue.watch(function () {
      return options.value;
    }, function () {
      var selectedValueSet = new Set(normalizedModelValue.value.map(function (option) {
        return valueBy.value(option);
      }));
      normalizedModelValue.value = options.value.filter(function (option) {
        return selectedValueSet.has(valueBy.value(option));
      });
    }, {
      deep: true
    });

    var addOrRemoveOption = function addOrRemoveOption(event, option) {
      if (props.disabled) return;
      if (option.group && props.multiple) addOrRemoveOptionForGroupOption(event, option);else addOrRemoveOptionForNonGroupOption(event, option);
      if (props.closeOnSelect === true) isFocusing.value = false;
      if (props.clearOnSelect === true && searchingInputValue.value) clearInput();
    };

    var addOrRemoveOptionForGroupOption = function addOrRemoveOptionForGroupOption(event, option) {
      option = option.originalOption;
      var has = option.value.every(function (value) {
        var option = getOptionByValue(options.value, value, {
          valueBy: valueBy.value
        });
        return hasOption(normalizedModelValue.value, option, {
          valueBy: valueBy.value
        });
      });

      if (has) {
        option.value.forEach(function (value) {
          var option = getOptionByValue(options.value, value, {
            valueBy: valueBy.value
          });
          normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
            min: min.value,
            valueBy: valueBy.value
          });
          context.emit('removed', inputName, option);
        });
      } else {
        option.value.forEach(function (value) {
          var option = getOptionByValue(options.value, value, {
            valueBy: valueBy.value
          });
          if (hasOption(normalizedModelValue.value, option, {
            valueBy: valueBy.value
          })) return;
          normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
            max: max.value,
            valueBy: valueBy.value
          });
          context.emit('selected', inputName, option);
        });
      }
    };

    var addOrRemoveOptionForNonGroupOption = function addOrRemoveOptionForNonGroupOption(event, option) {
      option = option.originalOption;

      if (hasOption(normalizedModelValue.value, option, {
        valueBy: valueBy.value
      })) {
        normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
          min: min.value,
          valueBy: valueBy.value
        });
        context.emit('removed', inputName, option);
      } else {
        if (!props.multiple) {
          var removingOption = normalizedModelValue.value[0];
          normalizedModelValue.value = removeOption(normalizedModelValue.value, normalizedModelValue.value[0], {
            min: 0,
            valueBy: valueBy.value
          });
          context.emit('removed', inputName, removingOption);
        }

        normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
          max: max.value,
          valueBy: valueBy.value
        });
        context.emit('selected', inputName, option);
      }
    };

    var clearInput = function clearInput() {
      // simulate clear input value
      inputEl.value.value = '';
      inputEl.value.dispatchEvent(new Event('input'));
      inputEl.value.dispatchEvent(new Event('change'));
    };

    var renderedOptions = vue.computed(function () {
      var _ref, _props$visibleOptions;

      return (_ref = (_props$visibleOptions = props.visibleOptions) !== null && _props$visibleOptions !== void 0 ? _props$visibleOptions : searchedOptions.value) !== null && _ref !== void 0 ? _ref : options.value;
    });
    var highlightedOriginalIndex = vue.ref(0);
    var optionsWithInfo = vue.computed(function () {
      var selectedValueSet = new Set(normalizedModelValue.value.map(function (option) {
        return valueBy.value(option);
      }));
      var visibleValueSet = new Set(renderedOptions.value.map(function (option) {
        return valueBy.value(option);
      }));
      var optionsWithInfo = options.value.map(function (option, index) {
        var optionWithInfo = {
          key: valueBy.value(option),
          label: labelBy.value(option),
          // selected: selectedValueSet.has(valueBy.value(option)),
          // disabled: disabledBy.value(option),
          group: groupBy.value(option),
          // visible: visibleValueSet.has(valueBy.value(option)),
          // hidden: props.hideSelected ? selectedValueSet.has(valueBy.value(option)) : false,
          highlighted: index === highlightedOriginalIndex.value,
          originalIndex: index,
          originalOption: option
        };
        optionWithInfo.selected = optionWithInfo.group ? option.value.every(function (value) {
          return selectedValueSet.has(value);
        }) : selectedValueSet.has(valueBy.value(option));
        optionWithInfo.disabled = optionWithInfo.group ? disabledBy.value(option) || option.value.every(function (value) {
          var option = getOptionByValue(options.value, value, {
            valueBy: valueBy.value
          });
          return disabledBy.value(option);
        }) : disabledBy.value(option);
        optionWithInfo.visible = optionWithInfo.group ? option.value.some(function (value) {
          return visibleValueSet.has(value);
        }) : visibleValueSet.has(valueBy.value(option));
        optionWithInfo.hidden = props.hideSelected ? optionWithInfo.group ? option.value.every(function (value) {
          return selectedValueSet.has(value);
        }) : selectedValueSet.has(valueBy.value(option)) : false;
        return optionWithInfo;
      });

      var _iterator2 = _createForOfIteratorHelper(optionsWithInfo),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var option = _step2.value;
          if (option.group === false) continue;

          if (option.disabled) {
            (function () {
              var values = new Set(option.originalOption.value);
              optionsWithInfo.filter(function (optionWithInfo) {
                return values.has(valueBy.value(optionWithInfo.originalOption));
              }).forEach(function (optionWithInfo) {
                return optionWithInfo.disabled = true;
              });
            })();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return optionsWithInfo;
    });

    var _usePointer = usePointer(optionsWithInfo, highlightedOriginalIndex),
        _pointerForward = _usePointer.pointerForward,
        _pointerBackward = _usePointer.pointerBackward,
        pointerSet = _usePointer.pointerSet;

    var pointerForward = function pointerForward() {
      _pointerForward.apply(void 0, arguments);

      vue.nextTick(updateScrollTop);
    };

    var pointerBackward = function pointerBackward() {
      _pointerBackward.apply(void 0, arguments);

      vue.nextTick(updateScrollTop);
    };

    var updateScrollTop = function updateScrollTop() {
      var _wrapper$value;

      var highlightedEl = (_wrapper$value = wrapper.value) === null || _wrapper$value === void 0 ? void 0 : _wrapper$value.querySelector('.highlighted');
      if (!highlightedEl) return;
      if (!dropdown.value) return;
      var computedStyle = getComputedStyle(highlightedEl);

      while (highlightedEl.offsetTop + parseFloat(computedStyle.height) + parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) > dropdown.value.$el.clientHeight + dropdown.value.$el.scrollTop) {
        dropdown.value.$el.scrollTop = dropdown.value.$el.scrollTop + parseFloat(computedStyle.height) + parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
      }

      while (highlightedEl.offsetTop < dropdown.value.$el.scrollTop) {
        dropdown.value.$el.scrollTop = dropdown.value.$el.scrollTop - parseFloat(computedStyle.height) - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      }
    };

    var dataAttrs = vue.computed(function () {
      return {
        'data-is-focusing': isFocusing.value,
        'data-visible-length': optionsWithInfo.value.filter(function (option) {
          return option.visible && option.hidden === false;
        }).length,
        'data-not-selected-length': options.value.length - optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length,
        'data-selected-length': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length,
        'data-addable': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length < max.value,
        'data-removable': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length > min.value,
        'data-total-length': options.value.length,
        'data-multiple': props.multiple
      };
    });
    vue.provide('dataAttrs', dataAttrs);
    var innerPlaceholder = vue.computed(function () {
      var selectedOptions = optionsWithInfo.value.filter(function (option) {
        return option.selected;
      }).filter(function (option) {
        return !option.group;
      });

      if (props.multiple) {
        if (selectedOptions.length === 0) {
          return props.placeholder;
        } else if (selectedOptions.length === 1) {
          return '1 option selected';
        } else {
          return selectedOptions.length + ' options selected';
        }
      } else {
        if (selectedOptions.length === 0) {
          return props.placeholder;
        } else {
          return selectedOptions[0].label + '';
        }
      }
    });
    return {
      isFocusing: isFocusing,
      inputName: inputName,
      initialValue: initialValue,
      wrapper: wrapper,
      dropdown: dropdown,
      input: input,
      focus: focus,
      blur: blur,
      toggle: toggle,
      header: header,
      headerAndInputHeight: headerAndInputHeight,
      searchingInputValue: searchingInputValue,
      handleInputForInput: handleInputForInput,
      handleChangeForInput: handleChangeForInput,
      handleFocusForInput: handleFocusForInput,
      handleBlurForInput: handleBlurForInput,
      optionsWithInfo: optionsWithInfo,
      addOrRemoveOption: addOrRemoveOption,
      dataAttrs: dataAttrs,
      innerPlaceholder: innerPlaceholder,
      highlightedOriginalIndex: highlightedOriginalIndex,
      pointerForward: pointerForward,
      pointerBackward: pointerBackward,
      pointerSet: pointerSet
    };
  },
  components: {
    VInput: script$2,
    VTags: script$1,
    VDropdown: script
  }
};
VueSelect.__VERSION__ = version;

var _imports_0 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==';

var _hoisted_1 = {
  ref: "header",
  "class": "vue-select-header"
};
var _hoisted_2 = {
  key: 0,
  "class": "vue-input"
};
var _hoisted_3 = {
  "class": "icon loading"
};

var _hoisted_4 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "icon loading"
};

var _hoisted_8 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/vue.createVNode("div", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_tags = vue.resolveComponent("v-tags");

  var _component_v_input = vue.resolveComponent("v-input");

  var _component_v_dropdown = vue.resolveComponent("v-dropdown");

  return vue.openBlock(), vue.createBlock("div", vue.mergeProps({
    ref: "wrapper",
    "class": ["vue-select", {
      disabled: _ctx.disabled
    }],
    tabindex: _ctx.isFocusing ? -1 : _ctx.tabindex,
    onFocus: _cache[10] || (_cache[10] = function () {
      return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
    }),
    onBlur: _cache[11] || (_cache[11] = function () {
      return _ctx.searchable ? false : _ctx.blur();
    })
  }, _ctx.dataAttrs, {
    onKeypress: _cache[12] || (_cache[12] = vue.withKeys(function () {
      return _ctx.highlightedOriginalIndex !== null && _ctx.addOrRemoveOption(_ctx.$event, _ctx.optionsWithInfo[_ctx.highlightedOriginalIndex]);
    }, ["enter"])),
    onKeydown: [_cache[13] || (_cache[13] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerForward && _ctx.pointerForward.apply(_ctx, arguments);
    }, ["prevent"]), ["down"])), _cache[14] || (_cache[14] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerBackward && _ctx.pointerBackward.apply(_ctx, arguments);
    }, ["prevent"]), ["up"]))]
  }), [vue.createVNode("div", _hoisted_1, [_ctx.multiple && _ctx.taggable && _ctx.modelValue.length === 0 || _ctx.searchable === false && _ctx.taggable === false ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [vue.createVNode("input", {
    placeholder: _ctx.innerPlaceholder,
    initial: _ctx.modelValue,
    name: _ctx.inputName,
    readonly: "",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
    })
  }, null, 8
  /* PROPS */
  , ["placeholder", "initial", "name"])])) : vue.createCommentVNode("v-if", true), _ctx.multiple && _ctx.taggable ? (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 1
  }, [vue.createVNode(_component_v_tags, {
    modelValue: _ctx.optionsWithInfo,
    "collapse-tags": _ctx.collapseTags,
    tabindex: "-1",
    onClick: _ctx.focus
  }, {
    "default": vue.withCtx(function (_ref) {
      var option = _ref.option;
      return [vue.renderSlot(_ctx.$slots, "tag", {
        option: option.originalOption
      }, function () {
        return [vue.createVNode("span", null, vue.toDisplayString(option.label), 1
        /* TEXT */
        ), vue.createVNode("img", {
          src: _imports_0,
          alt: "delete tag",
          "class": "icon delete",
          onClick: vue.withModifiers(function () {
            return _ctx.addOrRemoveOption(_ctx.$event, option);
          }, ["prevent", "stop"])
        }, null, 8
        /* PROPS */
        , ["onClick"])];
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "collapse-tags", "onClick"]), vue.createVNode("span", {
    "class": ["icon arrow-downward", {
      active: _ctx.isFocusing
    }],
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.toggle && _ctx.toggle.apply(_ctx, arguments);
    }),
    onMousedown: _cache[3] || (_cache[3] = vue.withModifiers(function () {}, ["prevent", "stop"]))
  }, [vue.renderSlot(_ctx.$slots, "icon")], 34
  /* CLASS, HYDRATE_EVENTS */
  )], 64
  /* STABLE_FRAGMENT */
  )) : (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 2
  }, [_ctx.searchable ? (vue.openBlock(), vue.createBlock(_component_v_input, {
    key: 0,
    ref: "input",
    modelValue: _ctx.searchingInputValue,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.searchingInputValue = $event;
    }),
    disabled: _ctx.disabled,
    placeholder: _ctx.isFocusing ? _ctx.searchPlaceholder : _ctx.innerPlaceholder,
    onInput: _ctx.handleInputForInput,
    onChange: _ctx.handleChangeForInput,
    onFocus: _ctx.handleFocusForInput,
    onBlur: _ctx.handleBlurForInput,
    onEscape: _ctx.blur,
    "input-name": _ctx.inputName,
    autofocus: _ctx.autofocus || _ctx.taggable && _ctx.searchable,
    tabindex: _ctx.tabindex
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "onInput", "onChange", "onFocus", "onBlur", "onEscape", "input-name", "autofocus", "tabindex"])) : vue.createCommentVNode("v-if", true), vue.withDirectives(vue.createVNode("span", _hoisted_3, [_hoisted_4, _hoisted_5, _hoisted_6], 512
  /* NEED_PATCH */
  ), [[vue.vShow, _ctx.loading]]), vue.withDirectives(vue.createVNode("span", {
    "class": ["icon arrow-downward", {
      active: _ctx.isFocusing
    }],
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.toggle && _ctx.toggle.apply(_ctx, arguments);
    }),
    onMousedown: _cache[6] || (_cache[6] = vue.withModifiers(function () {}, ["prevent", "stop"]))
  }, [vue.renderSlot(_ctx.$slots, "icon")], 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue.vShow, _ctx.loading === false]])], 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), _ctx.multiple && _ctx.taggable && _ctx.searchable ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_v_input, {
    key: 0,
    ref: "input",
    modelValue: _ctx.searchingInputValue,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.searchingInputValue = $event;
    }),
    disabled: _ctx.disabled,
    placeholder: _ctx.searchPlaceholder,
    onInput: _ctx.handleInputForInput,
    onChange: _ctx.handleChangeForInput,
    onFocus: _ctx.handleFocusForInput,
    onBlur: _ctx.handleBlurForInput,
    onEscape: _ctx.blur,
    "input-name": _ctx.inputName,
    tabindex: _ctx.tabindex,
    autofocus: _ctx.autofocus || _ctx.taggable && _ctx.searchable
  }, {
    append: vue.withCtx(function () {
      return [vue.withDirectives(vue.createVNode("span", _hoisted_7, [_hoisted_8, _hoisted_9, _hoisted_10], 512
      /* NEED_PATCH */
      ), [[vue.vShow, _ctx.loading]])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "onInput", "onChange", "onFocus", "onBlur", "onEscape", "input-name", "tabindex", "autofocus"])), [[vue.vShow, _ctx.isFocusing]]) : vue.createCommentVNode("v-if", true), vue.withDirectives(vue.createVNode(_component_v_dropdown, {
    ref: "dropdown",
    modelValue: _ctx.optionsWithInfo,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.optionsWithInfo = $event;
    }),
    onClickItem: _ctx.addOrRemoveOption,
    onMousemove: _cache[9] || (_cache[9] = function (ev, option) {
      return _ctx.pointerSet(option.originalIndex);
    }),
    "header-height": _ctx.headerAndInputHeight
  }, {
    "default": vue.withCtx(function (_ref2) {
      var option = _ref2.option;
      return [vue.renderSlot(_ctx.$slots, "dropdown-item", {
        option: option.originalOption
      }, function () {
        return [vue.createVNode("span", null, vue.toDisplayString(option.label), 1
        /* TEXT */
        )];
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "onClickItem", "header-height"]), [[vue.vShow, _ctx.isFocusing]])], 16
  /* FULL_PROPS */
  , ["tabindex"]);
}

VueSelect.render = render;
VueSelect.__file = "src/index.vue";

module.exports = VueSelect;
