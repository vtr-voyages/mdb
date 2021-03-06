import React, { useState, Component, Fragment, useEffect, useRef, useContext, PureComponent } from 'react';
import classNames from 'classnames';
import { Transition, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { Manager, Popper as Popper$1, Reference } from 'react-popper';
import { NavLink as NavLink$1, Link } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import raf from 'raf';
export { toast as MDBToast, ToastContainer as MDBToastContainer, cssTransition as MDBcssTransition, ToastContainer, cssTransition, toast } from 'react-toastify';

function _typeof(obj) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var Alert = function Alert(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var closeAlert = function closeAlert() {
    setIsOpen(false);
  };

  var handleOnExit = function handleOnExit(node) {
    node.classList.add("fade");
    props.onClose && props.onClose();
  };

  var handleOnExited = function handleOnExited(node) {
    props.onClosed && props.onClosed();
  };

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      children = props.children,
      dismiss = props.dismiss;
  var alertClasses = classNames("alert", color && "alert-".concat(color), className);
  var alertComponent;

  if (dismiss) {
    alertComponent = React.createElement(Transition, {
      "in": isOpen,
      timeout: 150,
      unmountOnExit: true,
      onExit: function onExit(node) {
        return handleOnExit(node);
      },
      onExited: function onExited(node) {
        return handleOnExited();
      }
    }, React.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children, React.createElement("button", {
      onClick: closeAlert,
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))));
  } else {
    alertComponent = React.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children);
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: "primary",
  tag: "div"
};
Alert.propTypes = {
  className: propTypes.string,
  color: propTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  onClose: propTypes.func,
  onClosed: propTypes.func,
  tag: propTypes.string
};

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;

      if (windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) && scroll < _this.getOffset(_this.elemRef.current) || windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight && scroll < _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(_this.elemRef.current) + 100 > docHeight) {
        // if the predicate is true, change state
        _this.setState({
          isVisible: true,
          revealed: true
        });
      } else {
        //  was the "revealing" fired at least once?
        if (_this.state.revealed) {
          return;
        } else {
          // if it wasn't, hide
          _this.setState({
            isVisible: false,
            revealed: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIteration", function (e) {
      if (_this.props.onAnimationIteration) {
        _this.setState({
          countIterations: _this.state.countIterations + 1
        });

        _this.props.onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationEnd && _this.props.count === _this.state.countIterations) {
        _this.props.onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    _this.state = {
      isVisible: _this.props.reveal ? false : true,
      revealed: _this.props.reveal ? false : true,
      countIterations: 0
    };
    _this.elemRef = React.createRef();
    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add EL on window if the animation is to "reveal"
      if (this.props.reveal) {
        window.addEventListener('scroll', this.updatePredicate);
        this.updatePredicate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.reveal) {
        window.removeEventListener('scroll', this.updatePredicate);
      }
    } // the function to judge whether the animation should be started

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          type = _this$props.type,
          duration = _this$props.duration,
          delay = _this$props.delay,
          count = _this$props.count,
          reveal = _this$props.reveal,
          infinite = _this$props.infinite,
          style = _this$props.style,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "type", "duration", "delay", "count", "reveal", "infinite", "style", "children"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? 'visible' : 'hidden',
        animationName: type
      };
      var hiddenStyles = {
        animationName: 'none',
        visibility: 'hidden'
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(this.state.isVisible && 'animated', // will this work?
      type && type, infinite && 'infinite', className);
      return React.createElement(Tag, _extends({
        "data-test": "animation"
      }, attributes, {
        className: classes,
        style: isVisible && revealed ? getAllStyles : hiddenStyles,
        ref: this.elemRef,
        onAnimationStart: this.handleStart,
        onAnimationIteration: this.handleIteration,
        onAnimationEnd: this.handleEnd
      }), children);
    }
  }]);

  return Animation;
}(Component);

Animation.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  type: propTypes.string,
  delay: propTypes.string,
  count: propTypes.number,
  onAnimationEnd: propTypes.func,
  onAnimationStart: propTypes.func
};
Animation.defaultProps = {
  tag: 'div',
  reveal: false,
  duration: 1,
  count: 1
};

var Badge = function Badge(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      color = props.color,
      pill = props.pill,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "color", "pill"]);

  var classes = classNames('badge', color, 'badge-' + color, pill ? 'badge-pill' : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "badge"
  }, attributes, {
    className: classes
  }), children);
};

Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};
Badge.propTypes = {
  color: propTypes.string,
  pill: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};
var returnAttributes = function returnAttributes(attributes) {
  var newAttributesObject = Object.keys(attributes).reduce(function (previousValue, currentElement) {
    if (attributes[currentElement]) previousValue[currentElement] = attributes[currentElement];
    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(" ");
  var specialColors = ["danger", "warning", "success", "info", "default", "primary", "secondary", "elegant", "stylish", "unique", "special"];
  var colorClasses = "";
  colorArray.forEach(function (color) {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += "".concat(color, " ");
      } else {
        colorClasses += "".concat(color, "-color");
      }
    } else {
      colorClasses += "".concat(color, " ");
    }
  });
  return colorClasses;
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames('breadcrumb', uppercase && 'text-uppercase', bold && 'font-up-bold', light && 'white-text', color && getColorClass(color), className);
  var children;

  if (bold) {
    children = React.Children.map(props.children, function (child) {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React.createElement("nav", {
    "data-test": "breadcrumb"
  }, React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  light: propTypes.bool,
  uppercase: propTypes.bool,
  bold: propTypes.bool
};

var Fa = function Fa(props) {
  var border = props.border,
      brand = props.brand,
      className = props.className,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      fixed = props.fixed,
      flip = props.flip,
      icon = props.icon,
      inverse = props.inverse,
      light = props.light,
      list = props.list,
      pull = props.pull,
      pulse = props.pulse,
      regular = props.regular,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      stack = props.stack,
      attributes = _objectWithoutProperties(props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

  var iconPrefix = brand || fab ? "fab" : light || fal ? "fal" : regular || far ? "far" : "fa";
  var classes = classNames(iconPrefix, list ? "fa-li" : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? "fa-fw" : false, pull ? "fa-pull-".concat(pull) : false, border ? "fa-border" : false, spin ? "fa-spin" : false, pulse ? "fa-pulse" : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? "fa-inverse" : false, stack ? "fa-".concat(stack) : false, className);
  return React.createElement("i", _extends({
    "data-test": "fa"
  }, attributes, {
    className: classes
  }));
};

Fa.propTypes = {
  icon: propTypes.string.isRequired,
  border: propTypes.bool,
  brand: propTypes.bool,
  className: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  fixed: propTypes.bool,
  flip: propTypes.string,
  inverse: propTypes.bool,
  light: propTypes.bool,
  list: propTypes.bool,
  pull: propTypes.string,
  pulse: propTypes.bool,
  regular: propTypes.bool,
  rotate: propTypes.string,
  spin: propTypes.bool,
  size: propTypes.string,
  stack: propTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: "",
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: "",
  inverse: false,
  light: false,
  list: false,
  pull: "",
  pulse: false,
  regular: false,
  rotate: "",
  spin: false,
  size: "",
  stack: ""
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".bc-icons.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item::after {\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item.active {\r\n  color: #eeeeee;\r\n}\r\n";
styleInject(css);

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      appendIcon = props.appendIcon,
      children = props.children,
      className = props.className,
      bold = props.bold,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClassName = props.iconClassName,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      attributes = _objectWithoutProperties(props, ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"]);

  var classes = classNames(active ? "active" : false, icon && "bc-icons", "breadcrumb-item", className);
  var iconClasses = classNames(appendIcon ? "mx-2" : "mr-2", iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React.createElement(Fragment, null, appendIcon && children, React.createElement(Fa, {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }

    return children;
  };

  return React.createElement("li", _extends({
    "data-test": "breadcrumb-item"
  }, attributes, {
    className: classes
  }), React.createElement(WithBold, null, React.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: propTypes.bool,
  appendIcon: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  bold: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClassName: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string
};
BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: "",
  bold: false,
  icon: "",
  iconBrand: false,
  iconClassName: "",
  iconLight: false,
  iconRegular: false,
  iconSize: ""
};

var css$1 = ".Ripple {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  opacity: 1;\r\n  transform: scale(0);\r\n}\r\n\r\n.Ripple-outline {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.Ripple.is-reppling {\r\n  animation: ripple 0.5s linear;\r\n}\r\n\r\n.Ripple-parent {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes ripple {\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3);\r\n  }\r\n}\r\n";
styleInject(css$1);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves(props) {
    var _this;

    _classCallCheck(this, Waves);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Waves).call(this, props));
    _this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.cursorPos.time !== this.props.cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: this.props.cursorPos
          }, function () {
            _this2.reppling();
          });
        } else this.reppling();
      }
    }
  }, {
    key: "reppling",
    value: function reppling() {
      // Get the element
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight; // Make a Square Ripple

      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth); // Make Ripple Position to be center

      var centerize = rippleWidthShouldBe / 2;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: this.state.cursorPos.top - buttonPos.top - centerize,
        left: this.state.cursorPos.left - buttonPos.left - centerize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        "data-test": "waves",
        className: 'Ripple ' + (this.props.outline || this.props.flat || this.props.dark ? 'Ripple-outline ' : '') + (this.state.animate ? 'is-reppling' : ''),
        style: {
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      });
    }
  }]);

  return Waves;
}(React.Component);

Waves.propTypes = {
  outline: propTypes.bool,
  flat: propTypes.bool,
  animate: propTypes.bool,
  cursorPos: propTypes.object,
  children: propTypes.node
};

var Button = function Button(props) {
  var _classNames;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    e.stopPropagation(); // Waves - Get Cursor Position

    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var active = props.active,
      block = props.block,
      circle = props.circle,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      download = props.download,
      outline = props.outline,
      size = props.size,
      rounded = props.rounded,
      gradient = props.gradient,
      floating = props.floating,
      flat = props.flat,
      role = props.role,
      type = props.type,
      social = props.social,
      action = props.action,
      Tag = props.tag,
      target = props.target,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"]);

  var classes = classNames(flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? '-outline' : '', "-").concat(color), 'btn', 'Ripple-parent', className, (_classNames = {
    active: active,
    'btn-floating': floating,
    'btn-rounded': rounded,
    'btn-circle': circle,
    'btn-block': block,
    'btn-action': action
  }, _defineProperty(_classNames, "btn-".concat(social), social), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", disabled), _classNames));

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "button",
    type: Tag === 'button' && !type ? 'button' : type,
    target: target,
    role: Tag === 'a' && !role ? 'button' : role,
    className: classes,
    ref: innerRef,
    onMouseUp: handleClick,
    onTouchStart: handleClick
  }, attributes, {
    download: download,
    disabled: disabled
  }), props.children, !disabled && React.createElement(Waves, {
    cursorPos: cursorPos,
    outline: outline,
    flat: flat
  }));
};

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};
Button.propTypes = {
  active: propTypes.bool,
  action: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  disabled: propTypes.bool,
  download: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  circle: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.string,
  social: propTypes.string,
  children: propTypes.node,
  tag: propTypes.string,
  target: propTypes.string,
  className: propTypes.string
};

var css$2 = ".btn-group-vertical>.btn,\r\n.btn-group-vertical>.btn+.btn-group,\r\n.btn-group-vertical>.btn-group+.btn,\r\n.btn-group-vertical>.btn-group+.btn-group {\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn-group-lg>.btn {\r\n  font-size: 0.9rem;\r\n  padding: 1rem 2.4rem;\r\n}\r\n\r\n.btn-group-sm>.btn {\r\n  font-size: 0.6rem;\r\n  padding: 0.5rem 1.6rem;\r\n}\r\n\r\n.btn-floating.btn.btn-sm,\r\n.btn-floating.btn.btn-lg {\r\n  padding: 0;\r\n}\r\n";
styleInject(css$2);

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      size = props.size,
      vertical = props.vertical,
      attributes = _objectWithoutProperties(props, ["className", "size", "vertical"]);

  var classes = classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return React.createElement("div", _extends({
    "data-test": "button-group"
  }, attributes, {
    className: classes
  }), props.children);
};

ButtonGroup.propTypes = {
  'aria-label': propTypes.string,
  className: propTypes.string,
  role: propTypes.string,
  size: propTypes.string,
  children: propTypes.node,
  vertical: propTypes.bool
};
ButtonGroup.defaultProps = {
  role: 'group'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      attributes = _objectWithoutProperties(props, ["className"]);

  var classes = classNames(className, "btn-toolbar");
  return React.createElement("div", _extends({
    "data-test": "button-toolbar"
  }, attributes, {
    className: classes
  }), props.children);
};

ButtonToolbar.propTypes = {
  "aria-label": propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  role: propTypes.string
};
ButtonToolbar.defaultProps = {
  role: "toolbar"
};

var Card = function Card(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      wide = props.wide,
      narrow = props.narrow,
      reverse = props.reverse,
      testimonial = props.testimonial,
      ecommerce = props.ecommerce,
      collection = props.collection,
      pricing = props.pricing,
      personal = props.personal,
      news = props.news,
      color = props.color,
      text = props.text,
      border = props.border,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

  var classes = classNames((_classNames = {
    "card-cascade": cascade,
    "card-cascade wider": wide,
    "card-cascade narrower": narrow,
    "card-cascade wider reverse": reverse,
    "testimonial-card": testimonial,
    "card-ecommerce": ecommerce,
    "collection-card": collection,
    "pricing-card": pricing,
    "card-personal": personal,
    "news-card": news
  }, _defineProperty(_classNames, "".concat(text, "-text"), text), _defineProperty(_classNames, "border-".concat(border), border), _classNames), "card", color, className);
  return React.createElement(Tag, _extends({
    "data-test": "card"
  }, attributes, {
    className: classes
  }));
};

Card.propTypes = {
  border: propTypes.string,
  cascade: propTypes.bool,
  className: propTypes.string,
  color: propTypes.string,
  collection: propTypes.bool,
  ecommerce: propTypes.bool,
  narrow: propTypes.bool,
  news: propTypes.bool,
  pricing: propTypes.bool,
  personal: propTypes.bool,
  reverse: propTypes.bool,
  tag: propTypes.string,
  testimonial: propTypes.bool,
  text: propTypes.string,
  wide: propTypes.bool
};
Card.defaultProps = {
  tag: "div"
};

var CardBody = function CardBody(props) {
  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade"]);

  var classes = classNames('card-body', cascade && 'card-body-cascade', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-body"
  }, attributes, {
    className: classes
  }));
};

CardBody.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  cascade: propTypes.bool
};
CardBody.defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      small = props.small,
      muted = props.muted,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent", "small", "muted"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, 'text-muted', muted), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-footer', color, className);
  var component = React.createElement(Tag, _extends({
    "data-test": "card-footer"
  }, attributes, {
    className: classes
  }));

  if (small) {
    component = React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React.createElement("small", null, " ", props.children, " "));
  }

  return component;
};

CardFooter.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool,
  small: propTypes.bool,
  muted: propTypes.bool
};
CardFooter.defaultProps = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      Tag = props.tag,
      deck = props.deck,
      column = props.column,
      attributes = _objectWithoutProperties(props, ["className", "tag", "deck", "column"]);

  var classes = classNames(deck ? 'card-deck' : column ? 'card-columns' : 'card-group', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-group"
  }, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  deck: propTypes.bool,
  column: propTypes.bool
};
CardGroup.defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-header', className, color);
  return React.createElement(Tag, _extends({
    "data-test": "card-header"
  }, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool
};
CardHeader.defaultProps = {
  tag: 'div'
};

var Mask = function Mask(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      pattern = props.pattern,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "overlay", "pattern", "tag"]);

  var classes = classNames('mask', pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
  return React.createElement(Tag, _extends({
    "data-test": "mask"
  }, attributes, {
    className: classes
  }), children);
};

Mask.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  overlay: propTypes.string,
  pattern: propTypes.oneOfType([propTypes.string, propTypes.number]),
  tag: propTypes.string
};
Mask.defaultProps = {
  className: '',
  overlay: '',
  pattern: '',
  tag: 'div'
};

var View = function View(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var cascade = props.cascade,
      children = props.children,
      className = props.className,
      hover = props.hover,
      rounded = props.rounded,
      src = props.src,
      Tag = props.tag,
      waves = props.waves,
      zoom = props.zoom,
      fixed = props.fixed,
      attributes = _objectWithoutProperties(props, ["cascade", "children", "className", "hover", "rounded", "src", "tag", "waves", "zoom", "fixed"]);

  var classes = classNames("view", rounded && "rounded", zoom && "zoom", hover && "overlay", cascade && "view-cascade", waves ? "Ripple-parent" : false, className);
  var viewStyle = src ? {
    backgroundImage: "url(\"".concat(src, "\")"),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    backgroundAttachment: fixed ? "fixed" : null
  } : {};
  return React.createElement(Tag, _extends({
    "data-test": "view"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick,
    style: viewStyle
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

View.defaultProps = {
  cascade: false,
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
  waves: false,
  zoom: false
};
View.propTypes = {
  cascade: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  hover: propTypes.bool,
  rounded: propTypes.bool,
  src: propTypes.string,
  tag: propTypes.string,
  waves: propTypes.bool,
  zoom: propTypes.bool
};

var CardImage = function CardImage(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      overlay = props.overlay,
      top = props.top,
      waves = props.waves,
      hover = props.hover,
      cascade = props.cascade,
      tag = props.tag,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["className", "overlay", "top", "waves", "hover", "cascade", "tag", "zoom"]);

  var classes = classNames(top && 'card-img-top', className);
  var Tag = tag;
  var innerContent = React.createElement(Tag, _extends({
    "data-test": "card-image"
  }, attributes, {
    className: classes
  }), props.children);

  if (props.src) {
    return React.createElement(View, {
      zoom: zoom,
      hover: hover,
      cascade: cascade
    }, React.createElement("div", {
      className: "Ripple-parent",
      onMouseDown: handleClick,
      style: {
        touchAction: 'unset'
      }
    }, innerContent, React.createElement(Mask, {
      overlay: overlay
    }), waves && React.createElement(Waves, {
      cursorPos: cursorPos
    })));
  } else {
    return React.createElement("div", null, innerContent);
  }
};

CardImage.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  zoom: propTypes.bool,
  waves: propTypes.bool,
  className: propTypes.string,
  cascade: propTypes.bool,
  hover: propTypes.bool,
  overlay: propTypes.string,
  top: propTypes.bool,
  src: propTypes.string,
  children: propTypes.node
};
CardImage.defaultProps = {
  tag: 'img',
  overlay: 'white-slight',
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText = function CardText(props) {
  var className = props.className,
      Tag = props.tag,
      textNode = props.children,
      muted = props.muted,
      small = props.small,
      attributes = _objectWithoutProperties(props, ["className", "tag", "children", "muted", "small"]);

  var classes = classNames('card-text', muted && 'text-muted', className);
  var children = small ? React.createElement("small", null, textNode) : textNode;
  return React.createElement(Tag, _extends({
    "data-test": "card-text"
  }, attributes, {
    className: classes
  }), children);
};

CardText.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  muted: propTypes.bool,
  small: propTypes.bool
};
CardText.defaultProps = {
  tag: 'p'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      Tag = props.tag,
      sub = props.sub,
      attributes = _objectWithoutProperties(props, ["className", "tag", "sub"]);

  var classes = classNames(sub ? 'card-subtitle' : 'card-title', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-title"
  }, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  sub: propTypes.bool,
  className: propTypes.string
};
CardTitle.defaultProps = {
  tag: 'h4',
  sub: false
};

var Control = function Control(props) {
  var direction = props.direction,
      className = props.className,
      onClick = props.onClick,
      Tag = props.tag,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      testimonial = props.testimonial,
      multiItem = props.multiItem;
  var text;

  if (direction === 'prev') {
    text = 'Previous';
  } else if (direction === 'next') {
    text = 'Next';
  }

  var classes = classNames('carousel-control-' + direction, className);
  var caretClasses = classNames('carousel-control-' + direction + '-icon');

  if (testimonial) {
    var arrow = direction === 'prev' ? 'left' : 'right';
    classes = classNames('carousel-control-' + direction, arrow, 'carousel-control', className);
    caretClasses = classNames('icon-' + direction);
  }

  if (multiItem) {
    classes = classNames('btn-floating');
  }

  return React.createElement(Tag, {
    "data-test": "carousel-control",
    className: classes,
    "data-slide": direction,
    onClick: onClick
  }, iconLeft ? React.createElement(Fa, {
    icon: "chevron-left"
  }) : iconRight ? React.createElement(Fa, {
    icon: "chevron-right"
  }) : React.createElement("div", null, React.createElement("span", {
    className: caretClasses,
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "sr-only"
  }, text)));
};

Control.propTypes = {
  onClick: propTypes.any,
  direction: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  iconLeft: propTypes.bool,
  iconRight: propTypes.bool,
  testimonial: propTypes.bool,
  multiItem: propTypes.bool
};
Control.defaultProps = {
  tag: 'a'
};

var CarouselIndicator = function CarouselIndicator(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      img = props.img,
      alt = props.alt,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "img", "alt"]);

  var classes = classNames(active && 'active', className);
  return React.createElement("li", _extends({
    "data-test": "carousel-indicator"
  }, attributes, {
    className: classes
  }), img && React.createElement("img", {
    src: img,
    alt: alt,
    className: "img-fluid"
  }), children);
};

CarouselIndicator.propTypes = {
  active: propTypes.bool.isRequired,
  alt: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  img: propTypes.string
};
CarouselIndicator.defaultProps = {
  alt: 'Carousel thumbnail',
  className: '',
  img: ''
};

var CarouselIndicators = function CarouselIndicators(props) {
  var children = props.children,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames("carousel-indicators", className);
  return React.createElement("ol", _extends({
    "data-test": "carousel-indicators"
  }, attributes, {
    className: classes
  }), children);
};

CarouselIndicators.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
CarouselIndicators.defaultProps = {
  className: ""
};

var css$3 = ".carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block !important;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\r\n}\r\n\r\n.carousel-fade .carousel-item.active {\r\n  position: relative;\r\n  z-index: 1;\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-multi-item .carousel-item {\r\n  display: inline-block !important;\r\n}\r\n\r\n.carousel .carousel-slide-item {\r\n  transition: left 0.5s;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\r\n  z-index: 2;\r\n}\r\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "clearCycleIntervalHandler", function () {
      return clearInterval(_this.cycleInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeAvailableHandler", function () {
      return _this.setState({
        swipeAvailable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartInterval", function () {
      if (_this.props.interval !== false) {
        _this.clearCycleIntervalHandler();

        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      var nextIndex = _this.state.activeItem + 1;
      var nextItem = nextIndex > _this.state.length ? 1 : nextIndex;

      _this.goToIndex(nextItem);
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      var prevIndex = _this.state.activeItem - 1;
      var prevItem = prevIndex < 1 ? _this.state.length : prevIndex;

      _this.goToIndex(prevItem);
    });

    _defineProperty(_assertThisInitialized(_this), "goToIndex", function (item) {
      _this.setState(_objectSpread({}, _this.state, {
        activeItem: item
      }));

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      if (_this.props.mobileGesture !== false) {
        _this.setState({
          initialX: e.touches[0].clientX,
          initialY: e.touches[0].clientY
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      _this.setState({
        swipeAvailable: false
      });

      var _this$state = _this.state,
          initialX = _this$state.initialX,
          initialY = _this$state.initialY;

      if (initialX === null || initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          _this.next();
        } else {
          _this.prev();
        }
      }

      _this.setState({
        initialX: null,
        initialY: null
      });
    });

    _this.state = {
      activeItem: _this.props.activeItem,
      length: _this.props.length,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    };
    _this.carouselRef = React.createRef();
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.interval === false) {
        return;
      }

      this.cycleInterval = setInterval(this.next, this.props.interval); // get images src atr

      if (this.props.thumbnails) {
        var CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item img');
        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });
        this.setState(_objectSpread({}, this.state, {
          srcArray: srcArray
        }));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.interval === false) {
        return;
      }

      this.clearCycleIntervalHandler();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItem: this.state.activeItem,
        length: this.state.length,
        slide: this.props.slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeItem = _this$props.activeItem,
          children = _this$props.children,
          className = _this$props.className,
          mobileGesture = _this$props.mobileGesture,
          multiItem = _this$props.multiItem,
          slide = _this$props.slide,
          thumbnails = _this$props.thumbnails,
          interval = _this$props.interval,
          testimonial = _this$props.testimonial,
          Tag = _this$props.tag,
          length = _this$props.length,
          showControls = _this$props.showControls,
          showIndicators = _this$props.showIndicators,
          onHoverStop = _this$props.onHoverStop,
          attributes = _objectWithoutProperties(_this$props, ["activeItem", "children", "className", "mobileGesture", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators", "onHoverStop"]);

      var swipeAvailable = this.state.swipeAvailable;
      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(React.createElement(CarouselIndicator, {
          img: thumbnails ? _this2.state.srcArray[i - 1] : null,
          key: i,
          active: _this2.state.activeItem === i,
          onClick: function onClick() {
            return _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= this.state.length; i++) {
        _loop(i);
      }

      var isMultiItem = multiItem ? true : false;
      var isTestimonial = testimonial ? true : false;
      return React.createElement(Tag, _extends({
        "data-test": "carousel",
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel,
        onTouchStart: this.startTouch,
        onTouchMove: swipeAvailable ? this.moveTouch : null,
        onTouchEnd: this.swipeAvailableHandler,
        onMouseEnter: onHoverStop ? this.clearCycleIntervalHandler : false,
        onMouseLeave: onHoverStop ? this.restartInterval : false
      }), showControls && multiItem && React.createElement("div", {
        className: "controls-top"
      }, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React.createElement(React.Fragment, null, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "next",
        role: "button",
        onClick: this.next
      })), showIndicators && React.createElement(CarouselIndicators, null, CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(Component);

Carousel.propTypes = {
  activeItem: propTypes.number,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  mobileGesture: propTypes.bool,
  multiItem: propTypes.bool,
  interval: propTypes.oneOfType([propTypes.number, propTypes.bool]),
  thumbnails: propTypes.bool,
  testimonial: propTypes.bool,
  showControls: propTypes.bool,
  showIndicators: propTypes.bool,
  slide: propTypes.bool,
  length: propTypes.number,
  onHoverStop: propTypes.bool
};
Carousel.defaultProps = {
  mobileGesture: true,
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true,
  onHoverStop: true
};
Carousel.childContextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var CarouselCaption = function CarouselCaption(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('carousel-caption', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-caption"
  }, attributes, {
    className: classes
  }), children);
};

CarouselCaption.propTypes = {
  active: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselCaption.defaultProps = {
  tag: 'div'
};

var CarouselInner = function CarouselInner(props) {
  var active = props.active,
      children = props.children,
      childrenCount = props.childrenCount,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "childrenCount", "className", "tag"]);

  var classes = classNames('carousel-inner', active ? 'active' : '', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-inner"
  }, attributes, {
    className: classes
  }), children);
};

CarouselInner.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  active: propTypes.bool,
  children: propTypes.node
};
CarouselInner.defaultProps = {
  tag: 'div'
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "moveForward", function () {
      _this.style = {
        position: 'absolute',
        left: '100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "moveBackwards", function () {
      _this.style = {
        position: 'absolute',
        left: '-100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "makeVisible", function () {
      _this.style = {
        left: '0'
      };
    });

    return _this;
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      itemId = parseInt(itemId, 10);
      var classes = classNames('carousel-item', {
        'active carousel-slide-item': this.context.slide,
        active: !this.context.slide && itemId === this.context.activeItem
      }, className);
      var slideIndex = this.context.activeItem - itemId;

      if (this.context.slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      } else {
        this.makeVisible();
      }

      return React.createElement(Tag, _extends({
        "data-test": "carousel-item"
      }, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(Component);

CarouselItem.propTypes = {
  active: propTypes.bool,
  itemId: propTypes.any,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselItem.defaultProps = {
  tag: 'div'
};
CarouselItem.contextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var MDBCloseIcon = function MDBCloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      props = _objectWithoutProperties(_ref, ["onClick", "className", "ariaLabel"]);

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e);
  };

  var btnClasses = className ? ['close'].concat(_toConsumableArray(className.split(' '))) : ['close'];
  return React.createElement("button", _extends({
    "data-test": "close-button",
    type: "button"
  }, props, {
    className: btnClasses.join(' '),
    onClick: onClickHandler,
    "aria-label": ariaLabel
  }), React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
MDBCloseIcon.defaultProps = {
  ariaLabel: 'Close'
};
MDBCloseIcon.propTypes = {
  className: propTypes.string,
  ariaLabel: propTypes.string,
  onClick: propTypes.func
};

var Col = function Col(props) {
  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      size = props.size,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

  var classes = classNames(size && "col-" + size, xs && "col-xs-" + xs, sm && "col-sm-" + sm, md && "col-md-" + md, lg && "col-lg-" + lg, xl && "col-xl-" + xl, !size && !xs && !sm && !md && !lg && !xl ? "col" : "", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({
    "data-test": "col"
  }, attributes, {
    className: classes
  }));
};

Col.propTypes = {
  size: propTypes.string,
  xs: propTypes.string,
  sm: propTypes.string,
  md: propTypes.string,
  lg: propTypes.string,
  xl: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTransitionTag", function (collapse, callback, delayType) {
      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: collapse,
          height: null
        }, callback());
      }, _this.getDelay(delayType));
    });

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.setTransitionTag(SHOWN, _this.props.onOpened, 'show');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollapse", function () {
      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });

      _this.setTransitionTag(HIDDEN, _this.props.onClosed, 'hide');
    });

    _this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var collapse = prevState.collapse;
      var willOpen = typeof this.props.isOpen !== 'boolean' ? this.props.isOpen === prevState.id : this.props.isOpen;

      if (willOpen && this.state.collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (_typeof(delay) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navbar = _this$props.navbar,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          delay = _this$props.delay,
          onOpened = _this$props.onOpened,
          onClosed = _this$props.onClosed,
          attributes = _objectWithoutProperties(_this$props, ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"]);

      var _this$state = this.state,
          collapse = _this$state.collapse,
          height = _this$state.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = 'collapsing';
          break;

        case SHOWN:
          collapseClass = 'collapse show';
          break;

        case HIDE:
          collapseClass = 'collapsing';
          break;

        case HIDDEN:
          collapseClass = 'collapse';
          break;

        default:
          // HIDDEN
          collapseClass = 'collapse';
      }

      var classes = classNames(collapseClass, navbar ? 'navbar-collapse' : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement("div", _extends({
        "data-test": "collapse"
      }, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(Component);

Collapse.propTypes = {
  isOpen: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  id: propTypes.string,
  className: propTypes.node,
  children: propTypes.node,
  navbar: propTypes.bool,
  delay: propTypes.oneOfType([propTypes.shape({
    show: propTypes.number,
    hide: propTypes.number
  }), propTypes.number]),
  onOpened: propTypes.func,
  onClosed: propTypes.func
};
Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container = function Container(props) {
  var fluid = props.fluid,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["fluid", "className", "tag"]);

  var classes = classNames(fluid ? 'container-fluid' : 'container', className);
  return React.createElement(Tag, _extends({
    "data-test": "container"
  }, attributes, {
    className: classes
  }));
};

Container.propTypes = {
  fluid: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Container.defaultProps = {
  tag: 'div',
  fluid: false
};

var ControlledSelectInput = React.forwardRef(function (_ref, inputRef) {
  var value = _ref.value,
      required = _ref.required;
  return React.createElement("input", {
    "data-test": "controlled-select-input",
    type: "text",
    ref: inputRef,
    required: required,
    value: value,
    onChange: function onChange() {},
    onTouchStart: function onTouchStart(e) {
      e.stopPropagation();
      e.target.setAttribute('readonly', 'true');
    },
    className: "select-dropdown",
    onFocus: function onFocus(e) {
      e.target.style.caretColor = 'transparent';
    }
  });
});
ControlledSelectInput.propTypes = {
  required: propTypes.bool,
  value: propTypes.string
};
ControlledSelectInput.defaultProps = {
  required: false
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation();

      if (_this.props.type !== 'checkbox' && _this.props.type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onChange && _this.props.onChange(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      event.stopPropagation();

      if (_this.props.type !== 'checkbox' && _this.props.type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onInput && _this.props.onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          background = _this$props.background,
          children = _this$props.children,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          disabled = _this$props.disabled,
          error = _this$props.error,
          filled = _this$props.filled,
          gap = _this$props.gap,
          getValue = _this$props.getValue,
          group = _this$props.group,
          hint = _this$props.hint,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          onIconClick = _this$props.onIconClick,
          onIconMouseEnter = _this$props.onIconMouseEnter,
          onIconMouseLeave = _this$props.onIconMouseLeave,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          id = _this$props.id,
          inputRef = _this$props.inputRef,
          noTag = _this$props.noTag,
          outline = _this$props.outline,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          labelId = _this$props.labelId,
          size = _this$props.size,
          success = _this$props.success,
          Tag = _this$props.tag,
          type = _this$props.type,
          validate = _this$props.validate,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          attributes = _objectWithoutProperties(_this$props, ["background", "children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "onIconClick", "onIconMouseEnter", "onIconMouseLeave", "iconRegular", "iconSize", "id", "inputRef", "noTag", "outline", "label", "labelClass", "labelId", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var isNotEmpty = (!!this.state.innerValue || !!hint || this.state.isFocused || this.state.innerValue === 0) && type !== 'checkbox' && type !== 'radio';
      var TagInput = '';
      var formControlClass = '';

      if (type === 'textarea') {
        formControlClass = outline ? 'form-control' : 'md-textarea form-control';
        TagInput = 'textarea';
      } else {
        formControlClass = 'form-control';
        TagInput = 'input';
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? 'validate' : false, filled ? 'filled-in' : false, gap ? 'with-gap' : false, type === 'checkbox' ? gap ? false : 'form-check-input' : false, type === 'radio' ? 'form-check-input' : false, className);
      var containerClassFix = classNames(type === 'checkbox' || type === 'radio' ? typeof label === 'boolean' && label ? 'd-flex' : 'form-check' : 'md-form', group ? 'form-group' : false, size ? "form-".concat(size) : false, outline && 'md-outline', background && 'md-bg', containerClass);
      var iconClassFix = classNames(isNotEmpty && this.state.isFocused ? 'active' : false, iconClass, 'prefix');
      var labelClassFix = classNames(isNotEmpty ? 'active' : false, disabled ? 'disabled' : false, type === 'checkbox' ? 'form-check-label' : false, type === 'radio' ? 'form-check-label' : false, labelClass);

      var renderFunction = function renderFunction() {
        return React.createElement(React.Fragment, null, icon && React.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix,
          onClick: onIconClick ? onIconClick : _this2.setFocus,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave
        }), React.createElement(TagInput, _extends({
          "data-test": "input"
        }, attributes, {
          className: classes,
          id: id,
          placeholder: hint,
          ref: _this2.inputElementRef,
          value: _this2.state.innerValue,
          onBlur: _this2.onBlur,
          onChange: _this2.onChange,
          onInput: _this2.onInput,
          onFocus: _this2.onFocus
        })), label && React.createElement("label", {
          className: labelClassFix,
          htmlFor: id,
          "data-error": error,
          "data-success": success,
          id: labelId,
          onClick: _this2.setFocus
        }, label), children);
      };

      return noTag ? renderFunction() : React.createElement(Tag, {
        className: containerClassFix
      }, renderFunction());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  containerClass: propTypes.string,
  disabled: propTypes.bool,
  error: propTypes.string,
  filled: propTypes.bool,
  gap: propTypes.bool,
  getValue: propTypes.func,
  group: propTypes.bool,
  hint: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  onIconClick: propTypes.func,
  onIconMouseEnter: propTypes.func,
  onIconMouseLeave: propTypes.func,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  id: propTypes.string,
  inputRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object, propTypes.bool]),
  labelClass: propTypes.string,
  labelId: propTypes.string,
  noTag: propTypes.bool,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onInput: propTypes.func,
  outline: propTypes.bool,
  size: propTypes.string,
  success: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  validate: propTypes.bool,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  valueDefault: propTypes.oneOfType([propTypes.number, propTypes.string])
};
Input.defaultProps = {
  className: '',
  containerClass: '',
  disabled: false,
  error: '',
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: '',
  iconBrand: false,
  iconClass: '',
  iconLight: false,
  onIconMouseEnter: function onIconMouseEnter() {},
  onIconMouseLeave: function onIconMouseLeave() {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  noTag: false,
  outline: false,
  label: '',
  labelClass: '',
  labelId: '',
  size: '',
  success: '',
  tag: 'div',
  type: 'text',
  validate: false,
  valueDefault: ''
};

var css$5 = ".fadeElement {\r\n  -webkit-transition: 0.5s;\r\n  -moz-transition: 0.5s;\r\n  -o-transition: 0.5s;\r\n  transition: 0.5s;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  opacity: 0;\r\n  transform-origin:top;\r\n  transform:scaleY(0.7);\r\n  visibility: hidden;\r\n  pointer-events: none;\r\n}\r\n.fadeElement.fadeIn {\r\n  transform:scaleY(1);\r\n  opacity: 1;\r\n  visibility: visible;\r\n  pointer-events: auto;\r\n}\r\n";
styleInject(css$5);

// FREE START
// import DataTableSelect from '../DataTableSelect';
// FREE-END

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return ReactDOM.findDOMNode(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "addEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var keyCode = e.which,
          type = e.type,
          target = e.target;
      var tab = keyCodes.tab;
      var MOUSE_RIGHT_CLICK = keyCode === 3;
      var TAB = keyCode === tab;
      var KEYUP = type === 'keyup';
      if (MOUSE_RIGHT_CLICK || KEYUP && !TAB) return;

      var container = _this.getContainer();

      if (container.contains(target) && container !== target && (!KEYUP || TAB)) {
        return;
      }

      _this.toggle();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e, items) {
      var up = keyCodes.up,
          down = keyCodes.down;
      var keyCode = e.which,
          target = e.target;
      var UP = keyCode === up;
      var DOWN = keyCode === down;

      var index = _toConsumableArray(items).findIndex(function (item) {
        return item === target;
      });

      if (UP && index > 0) {
        index -= 1;
      }

      if (DOWN && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var isOpen = _this.state.isOpen;
      var disabled = _this.props.disabled;
      var keyCode = e.which,
          target = e.target;
      var esc = keyCodes.esc,
          up = keyCodes.up,
          down = keyCodes.down,
          space = keyCodes.space;
      var SPACE = keyCode === space;
      var ESC = keyCode === esc;

      if (![esc, up, down, space].includes(keyCode) || /button/i.test(target.tagName) && SPACE || /input|textarea/i.test(target.tagName)) {
        return;
      }

      e.preventDefault();
      if (disabled) return;

      var container = _this.getContainer();

      if (SPACE && isOpen && container !== target) {
        target.click();
      }

      if (ESC || !isOpen) {
        _this.toggle();

        var btn = container.children[0];
        btn.focus();
        return;
      }

      var items = container.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled)");
      items.length && _this.handleFocus(e, items);
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.state.isOpen,
        dropup: this.props.dropup,
        dropright: this.props.dropright,
        dropleft: this.props.dropleft,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      this.state.isOpen ? this.addEvents() : this.removeEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled']),
          className = _omit.className,
          children = _omit.children,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          dropright = _omit.dropright,
          dropleft = _omit.dropleft;

      var classes = classNames((_classNames = {
        'btn-group': group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", this.state.isOpen), _defineProperty(_classNames, "dropup", dropup), _defineProperty(_classNames, "dropright", dropright), _defineProperty(_classNames, "dropleft", dropleft), _classNames), className);
      return React.createElement(Manager, null, React.createElement("div", {
        "data-test": "dropdown",
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  disabled: propTypes.bool,
  dropup: propTypes.bool,
  dropright: propTypes.bool,
  dropleft: propTypes.bool,
  group: propTypes.bool,
  size: propTypes.string,
  tag: propTypes.string,
  toggle: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  dropright: false,
  dropleft: false,
  tag: 'div'
};
Dropdown.childContextTypes = {
  toggle: propTypes.func.isRequired,
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          header = _this$props.header,
          divider = _this$props.divider,
          onClick = _this$props.onClick,
          toggle = _this$props.toggle;

      if (disabled || header || divider) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }

      if (toggle) {
        _this.context.toggle(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          header = _this$props2.header,
          divider = _this$props2.divider;

      if (disabled || header || divider) {
        return '-1';
      }

      return '0';
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          href = _omit.href,
          active = _omit.active,
          disabled = _omit.disabled,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "href", "active", "disabled"]);

      var classes = classNames({
        'active': active,
        'disabled': disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }, className);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (href) {
          Tag = 'a';
        }
      }

      var type = Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined;
      return React.createElement(Tag, _extends({
        "data-test": "dropdown-item",
        type: type
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = {
  children: propTypes.node,
  active: propTypes.bool,
  disabled: propTypes.bool,
  divider: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  header: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  toggle: propTypes.bool
};
DropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};
DropdownItem.contextTypes = {
  toggle: propTypes.func
};

var css$6 = ".dropup .dropdown-menu {\r\n  top: auto !important;\r\n  bottom: 100% !important;\r\n  transform: translate3d(5px, 5px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  left: 0 !important;\r\n  right: auto !important;\r\n}\r\n";
styleInject(css$6);

var DropdownMenuProComponent = function DropdownMenuProComponent(_ref) {
  var isOpen = _ref.isOpen,
      Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React.createElement(CSSTransition, {
    "in": isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, React.createElement(Tag, _extends({
    tabIndex: tabIndex,
    role: role
  }, attributes, {
    "aria-hidden": aria,
    key: d_key
  }), children));
};

DropdownMenuProComponent.propTypes = {
  aria: propTypes.bool.isRequired,
  attributes: propTypes.object.isRequired,
  d_key: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  tabIndex: propTypes.string.isRequired,
  tag: propTypes.any.isRequired,
  isOpen: propTypes.bool.isRequired,
  children: propTypes.node.isRequired
};

/*
// PRO-END
import DropdownMenuComponent from './DropdownMenuComponent';
// PRO-START
*/
// FREE-END
// PRO-END

var noFlipModifier = {
  flip: {
    enabled: false
  }
};

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this = this;

      var _this$props = this.props,
          basic = _this$props.basic,
          className = _this$props.className,
          right = _this$props.right,
          children = _this$props.children,
          tag = _this$props.tag,
          flip = _this$props.flip,
          color = _this$props.color,
          attrs = _objectWithoutProperties(_this$props, ["basic", "className", "right", "children", "tag", "flip", "color"]);

      var classes = classNames((_classNames = {
        'dropdown-menu-right': right
      }, _defineProperty(_classNames, "dropdown-".concat(color), color), _defineProperty(_classNames, "show", this.context.isOpen), _defineProperty(_classNames, "basic", basic), _classNames), 'dropdown-menu', className);
      var Tag = tag;

      if (this.context.isOpen) {
        var position1 = this.context.dropup ? 'top' : this.context.dropright ? 'right' : this.context.dropleft ? 'left' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
        attrs.modifiers = !flip ? noFlipModifier : undefined;
      }

      return React.createElement(Popper$1, {
        modifires: attrs.modifiers,
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement,
        "data-test": "dropdown-menu"
      }, function (_ref) {
        var placement = _ref.placement,
            ref = _ref.ref,
            style = _ref.style;
        return React.createElement(Tag, {
          ref: ref,
          style: style,
          "data-placement": placement,
          className: classes
        }, React.createElement(DropdownMenuProComponent, {
          isOpen: _this.context.isOpen,
          tag: Tag,
          tabIndex: "-1",
          role: "menu",
          attributes: attrs,
          aria: !_this.context.isOpen,
          d_key: "dropDownMenu",
          color: color
        }, children));
      });
    }
  }]);

  return DropdownMenu;
}(Component);

DropdownMenu.propTypes = {
  children: propTypes.node.isRequired,
  basic: propTypes.bool,
  className: propTypes.string,
  flip: propTypes.bool,
  right: propTypes.bool,
  tag: propTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: false,
  right: false,
  tag: 'div',
  color: false
};
DropdownMenu.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired,
  color: propTypes.oneOfType([propTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), propTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          nav = _this$props.nav,
          tag = _this$props.tag,
          onClick = _this$props.onClick;

      if (disabled) {
        e.preventDefault();
        return;
      }

      if (nav && !tag) {
        e.preventDefault();
      }

      if (onClick) {
        onClick(e);
      }

      _this.context.toggle(e);
    });

    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          color = _this$props2.color,
          caret = _this$props2.caret,
          nav = _this$props2.nav,
          tag = _this$props2.tag,
          props = _objectWithoutProperties(_this$props2, ["className", "color", "caret", "nav", "tag"]);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = classNames({
        'dropdown-toggle': caret,
        'nav-link': nav
      }, className);
      var children = props.children || React.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag = tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      }

      return React.createElement(Reference, {
        "data-test": "dropdown-toggle"
      }, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          ref: ref
        }), children) : React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  caret: propTypes.bool,
  color: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  'aria-haspopup': propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  nav: propTypes.bool
};
DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  color: 'secondary'
};
DropdownToggle.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  toggle: propTypes.func.isRequired
};

var Footer = function Footer(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "children", "className", "tag"]);

  var classes = classNames("page-footer", color && color, className);
  return React.createElement(Tag, _extends({
    "data-test": "footer"
  }, attributes, {
    className: classes
  }), children);
};

Footer.propTypes = {
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
Footer.defaultProps = {
  tag: "footer"
};

var FormInline = function FormInline(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      waves = props.waves,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "waves", "children"]);

  var classes = classNames('form-inline', props.waves && 'Ripple-parent', className);
  return React.createElement("form", _extends({
    "data-test": "form-inline"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), props.children, props.waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

FormInline.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  waves: propTypes.bool
};

var css$7 = ".hamburger-button__checkbox {\r\n  display: none;\r\n}\r\n\r\n.hamburger-button__button {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  top: -5px;\r\n}\r\n\r\nlabel.hamburger-button__button {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#nav-icon1 {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: relative;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  -moz-transition: .5s ease-in-out;\r\n  -o-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n  background-color: #fff;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  -moz-transition: .25s ease-in-out;\r\n  -o-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n  top: 16px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n  top: 27px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(135deg);\r\n  -moz-transform: rotate(135deg);\r\n  -o-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(-135deg);\r\n  -moz-transform: rotate(-135deg);\r\n  -o-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n";
styleInject(css$7);

var HamburgerToggler = function HamburgerToggler(props) {
  var id = props.id,
      color = props.color,
      className = props.className,
      isOpen = props.isOpen,
      onClick = props.onClick;
  var classes = classNames('hamburger-button__button', className);
  return React.createElement(React.Fragment, null, React.createElement("input", {
    "data-test": "hamburger-toggler",
    type: "checkbox",
    defaultChecked: isOpen || false,
    onChange: onClick,
    className: "hamburger-button__checkbox",
    id: id
  }), React.createElement("label", {
    id: "nav-icon1",
    className: classes,
    htmlFor: id
  }, React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  })));
};

HamburgerToggler.propTypes = {
  id: propTypes.string,
  color: propTypes.string,
  className: propTypes.string
};


var InputGroup = function InputGroup(_ref) {
  var append = _ref.append,
      appendClassName = _ref.appendClassName,
      ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      containerId = _ref.containerId,
      hint = _ref.hint,
      id = _ref.id,
      inputs = _ref.inputs,
      inputTag = _ref.inputTag,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      material = _ref.material,
      prepend = _ref.prepend,
      prependClassName = _ref.prependClassName,
      size = _ref.size,
      Tag = _ref.tag,
      textClassName = _ref.textClassName,
      type = _ref.type,
      value = _ref.value,
      valueDefault = _ref.valueDefault,
      getValue = _ref.getValue,
      onChange = _ref.onChange,
      attributes = _objectWithoutProperties(_ref, ["append", "appendClassName", "ariaLabel", "children", "className", "containerClassName", "containerId", "hint", "id", "inputs", "inputTag", "label", "labelClassName", "material", "prepend", "prependClassName", "size", "tag", "textClassName", "type", "value", "valueDefault", "getValue", "onChange"]);

  var containerClassNames = classNames('input-group', material && 'md-form', size && "input-group-".concat(size), containerClassName);
  var inputClassNames = classNames(className);
  var prependClassNames = classNames('input-group-prepend', prependClassName);
  var appendClassNames = classNames('input-group-append', appendClassName);
  var textClassNames = classNames('input-group-text', material && 'md-addon', textClassName);

  var handleChange = function handleChange(event) {
    event.persist();
    onChange && onChange(event);
    getValue && getValue(event.target.value);
  };

  return React.createElement(React.Fragment, null, label && React.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), React.createElement(Tag, _extends({
    "data-test": "input-group"
  }, attributes, {
    className: containerClassNames,
    id: containerId
  }), prepend && React.createElement("div", {
    className: prependClassNames
  }, typeof prepend === 'string' ? React.createElement("span", {
    className: textClassNames
  }, prepend) : prepend), inputs || React.createElement(Input, {
    noTag: true,
    type: type,
    className: inputClassNames,
    id: id,
    value: value,
    valueDefault: valueDefault,
    hint: hint,
    "aria-label": ariaLabel,
    onChange: handleChange
  }), append && React.createElement("div", {
    className: appendClassNames
  }, typeof append === 'string' ? React.createElement("span", {
    className: textClassNames
  }, append) : append), children));
};

InputGroup.propTypes = {
  append: propTypes.oneOfType([propTypes.node, propTypes.string]),
  appendClassNames: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  containerClassName: propTypes.string,
  containerId: propTypes.string,
  hint: propTypes.string,
  id: propTypes.string,
  inputs: propTypes.node,
  label: propTypes.string,
  labelClassName: propTypes.string,
  material: propTypes.bool,
  prepend: propTypes.any,
  prependClassName: propTypes.string,
  size: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  textClassName: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  valueDefault: propTypes.string,
  getValue: propTypes.func,
  onChange: propTypes.func
};
InputGroup.defaultProps = {
  tag: 'div',
  type: 'text'
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames("list-group", className);
  return React.createElement(Tag, _extends({
    "data-test": "list-group"
  }, attributes, {
    className: classes
  }), children);
};

ListGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
ListGroup.defaultProps = {
  tag: "ul"
};

var ListGroupItem = function ListGroupItem(props) {
  var _classNames;

  var active = props.active,
      children = props.children,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      hover = props.hover,
      success = props.success,
      info = props.info,
      warning = props.warning,
      danger = props.danger,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

  var classes = classNames('list-group-item', className, (_classNames = {
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), ' color'), _defineProperty(_classNames, 'list-group-item-action', hover), _classNames));

  if (attributes.href && Tag === 'li') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "list-group-item"
  }, attributes, {
    className: classes
  }), children);
};

ListGroupItem.propTypes = {
  active: propTypes.bool,
  disabled: propTypes.bool,
  hover: propTypes.bool,
  success: propTypes.bool,
  info: propTypes.bool,
  warning: propTypes.bool,
  danger: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
ListGroupItem.defaultProps = {
  tag: 'li'
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_this), "modalContent", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.body.classList.add('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.body.classList.remove('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEntered", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.add('show');
      _this.props.autoFocus && node.focus();

      if (type === 'modal') {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExit", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.remove('show');

      if (type === 'modal') {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop || e.target.closest('[role="dialog"]') && !e.target.classList.contains('modal')) return;

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      if (_this.props.keyboard && e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          backdrop = _this$props.backdrop,
          backdropClassName = _this$props.backdropClassName,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          size = _this$props.size,
          side = _this$props.side,
          fullHeight = _this$props.fullHeight,
          frame = _this$props.frame,
          centered = _this$props.centered,
          position = _this$props.position,
          cascading = _this$props.cascading,
          modalStyle = _this$props.modalStyle,
          wrapClassName = _this$props.wrapClassName,
          animation = _this$props.animation,
          fade = _this$props.fade,
          tabIndex = _this$props.tabIndex,
          role = _this$props.role,
          id = _this$props.id,
          inline = _this$props.inline;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames((_classNames = {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered
      }, _defineProperty(_classNames, "modal-".concat(size), size), _defineProperty(_classNames, "modal-".concat(position), position), _defineProperty(_classNames, "modal-notify white-text modal-".concat(modalStyle), modalStyle), _classNames), 'modal-dialog', className);
      var wrapperClasses = classNames(_defineProperty({
        modal: !inline,
        fade: fade,
        top: fade && !animation && !position
      }, "".concat(animation), fade && animation), fade && position && position.split('-')[1], wrapClassName);
      var backdropClasses = classNames('modal-backdrop', fade ? 'fade' : 'show', backdropClassName);
      var contentClasses = classNames('modal-content', contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: 'block'
        },
        id: id,
        tabIndex: tabIndex,
        role: role,
        'aria-hidden': 'true'
      });
      return React.createElement(Fragment, null, backdrop && React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('backdrop', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('backdrop', node);
        },
        onExited: this.handleOnExited
      }, React.createElement("div", {
        className: backdropClasses
      })), React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onMouseDown: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('modal', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('modal', node);
        }
      }, React.createElement("div", _extends({
        "data-test": "modal",
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  fade: true,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050
};
Modal.propTypes = {
  animation: propTypes.string,
  backdrop: propTypes.bool,
  backdropClassName: propTypes.string,
  cascading: propTypes.bool,
  centered: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  contentClassName: propTypes.string,
  fade: propTypes.bool,
  frame: propTypes.bool,
  fullHeight: propTypes.bool,
  hiddenModal: propTypes.func,
  hideModal: propTypes.func,
  id: propTypes.string,
  keyboard: propTypes.bool,
  modalClassName: propTypes.string,
  modalStyle: propTypes.string,
  position: propTypes.string,
  role: propTypes.string,
  size: propTypes.string,
  side: propTypes.bool,
  showModal: propTypes.func,
  tabIndex: propTypes.string,
  wrapClassName: propTypes.string
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames('modal-body', className);
  return React.createElement("div", _extends({
    "data-test": "modal-body"
  }, attributes, {
    className: classes
  }), children);
};

ModalBody.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      children = props.children,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      attributes = _objectWithoutProperties(props, ["className", "children", "center", "start", "end", "around", "between"]);

  var classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });
  return React.createElement("div", _extends({
    "data-test": "modal-footer"
  }, attributes, {
    className: classes
  }), children);
};

ModalFooter.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      closeAriaLabel = props.closeAriaLabel,
      titleClass = props.titleClass,
      attributes = _objectWithoutProperties(props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

  var classes = classNames('modal-header', className);
  var titleClasses = classNames('modal-title', titleClass);

  if (toggle) {
    closeButton = React.createElement("button", {
      type: "button",
      onClick: toggle,
      className: "close",
      "aria-label": closeAriaLabel
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, String.fromCharCode(215)));
  }

  return React.createElement("div", _extends({
    "data-test": "modal-header"
  }, attributes, {
    className: classes
  }), React.createElement(Tag, {
    className: titleClasses
  }, children), closeButton);
};

ModalHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  toggle: propTypes.func,
  className: propTypes.string,
  children: propTypes.node,
  closeAriaLabel: propTypes.string
};
ModalHeader.defaultProps = {
  tag: 'h4',
  closeAriaLabel: 'Close'
};

var Nav = function Nav(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      tabs = props.tabs,
      color = props.color,
      classicTabs = props.classicTabs,
      pills = props.pills,
      header = props.header,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

  var classes = classNames('nav', tabs && 'md-tabs', pills && 'md-pills', header && 'nav-pills card-header-pills', color && !tabs && !classicTabs && !pills ? color : false, pills && color ? 'pills-' + color : false, (tabs || classicTabs) && color ? 'tabs-' + color : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "nav"
  }, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.string,
  classicTabs: propTypes.bool,
  pills: propTypes.bool,
  tabs: propTypes.bool,
  header: propTypes.bool
};
Nav.defaultProps = {
  tag: 'ul',
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCollapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;

      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          expand = _this$props.expand,
          light = _this$props.light,
          dark = _this$props.dark,
          sticky = _this$props.sticky,
          fixed = _this$props.fixed,
          scrolling = _this$props.scrolling,
          color = _this$props.color,
          className = _this$props.className,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset,
          Tag = _this$props.tag,
          _double = _this$props["double"],
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var classes = classNames((_classNames = {
        'navbar-light': light,
        'navbar-dark': dark
      }, _defineProperty(_classNames, "sticky-".concat(sticky), sticky), _defineProperty(_classNames, "fixed-".concat(fixed), fixed), _defineProperty(_classNames, 'scrolling-navbar', scrolling || scrollingNavbarOffset), _defineProperty(_classNames, 'double-nav', _double), _defineProperty(_classNames, 'top-nav-collapse', this.state.isCollapsed), _defineProperty(_classNames, "".concat(color), color && transparent ? this.state.isCollapsed : color), _classNames), 'navbar', getExpandClass(expand), className);
      return React.createElement(Tag, _extends({
        "data-test": "navbar"
      }, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  light: propTypes.bool,
  dark: propTypes.bool,
  "double": propTypes.bool,
  fixed: propTypes.string,
  sticky: propTypes.string,
  scrolling: propTypes.bool,
  scrollingNavbarOffset: propTypes.number,
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  expand: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  transparent: propTypes.bool
};
Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames('navbar-brand', className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React.createElement(NavLink$1, _extends({
        "data-test": "navbar-brand",
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React.createElement("div", _extends({
        "data-test": "navbar-brand"
      }, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: propTypes.string,
  href: propTypes.string
};

var NavbarNav = function NavbarNav(props) {
  var children = props.children,
      className = props.className,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "right", "left", "tag"]);

  var classes = classNames('navbar-nav', right ? 'ml-auto' : left ? 'mr-auto' : 'justify-content-around w-100', className);
  return React.createElement(Tag, _extends({
    "data-test": "navbar-nav"
  }, attributes, {
    className: classes
  }), children);
};

NavbarNav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool
};
NavbarNav.defaultProps = {
  tag: 'ul'
};

var NavbarToggler = function NavbarToggler(props) {
  var right = props.right,
      left = props.left,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      image = props.image,
      attributes = _objectWithoutProperties(props, ["right", "left", "children", "className", "tag", "image"]);

  var classes = classNames({
    "navbar-toggler-right": right,
    "navbar-toggler-left": left
  }, "navbar-toggler", className);
  return React.createElement(Tag, _extends({
    "data-test": "navbar-toggler"
  }, attributes, {
    className: classes
  }), children ? children : image ? React.createElement("span", {
    className: "navbar-toggler-icon",
    style: {
      backgroundImage: "url(\"".concat(image, "\")")
    }
  }) : React.createElement("span", {
    className: "navbar-toggler-icon"
  }));
};

NavbarToggler.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool,
  image: propTypes.string
};
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      text = props.text,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "active", "text", "tag"]);

  var classes = classNames('nav-item', active && 'active', text && 'navbar-text', className);
  return React.createElement(Tag, _extends({
    "data-test": "nav-item"
  }, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  active: propTypes.bool
};
NavItem.defaultProps = {
  tag: 'li'
};

var NavLink = function NavLink(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      link = props.link,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to", "link"]);

  var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
  var rednerLink;

  if (link) {
    rednerLink = React.createElement(Link, _extends({
      "data-test": "nav-link",
      className: classes,
      onMouseUp: handleClick,
      onTouchStart: handleClick,
      to: to
    }, attributes), children, props.disabled ? false : React.createElement(Waves, {
      cursorPos: cursorPos
    }));
  } else {
    rednerLink = React.createElement(NavLink$1, _extends({
      "data-test": "nav-link",
      className: classes,
      onMouseUp: handleClick,
      onTouchStart: handleClick,
      to: to
    }, attributes), children, props.disabled ? false : React.createElement(Waves, {
      cursorPos: cursorPos
    }));
  }

  return rednerLink;
};

NavLink.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  to: propTypes.string,
  active: propTypes.bool,
  link: propTypes.bool
};
NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  link: false
};

var Popper = function Popper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      clickable = _ref.clickable,
      domElement = _ref.domElement,
      modifiers = _ref.modifiers,
      id = _ref.id,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange,
      placement = _ref.placement,
      popover = _ref.popover,
      style = _ref.style,
      tag = _ref.tag;

  var _useState = useState(isVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    setVisible(isVisible);
  }, [isVisible]);
  useEffect(function () {
    onChange && onChange(visible);
  }, [onChange, visible]);
  useEffect(function () {
    window.addEventListener('click', handleClick);
    return function () {
      return window.removeEventListener('click', handleClick);
    };
  });

  function handleClick(e) {
    var element = document.elementsFromPoint(e.clientX, e.clientY).find(function (el) {
      return el.dataset.popper === id;
    });
    if (element) return;
    setVisible(false);
  }

  var Wrapper = children[0];
  var Content = children[1];
  var Tag = tag;
  var tooltipClasses = classNames("fade", popover ? "popover bs-popover-".concat(placement, " popover-enter-done") : "tooltip bs-tooltip-".concat(placement), visible ? "show" : "", className ? className : "");
  var contentClasses = classNames(!popover && "tooltip-inner");
  return React.createElement(Manager, {
    "data-test": "popper"
  }, React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return !domElement ? React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      innerRef: ref,
      "data-popper": id
    })) : React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      ref: ref,
      "data-popper": id
    }));
  }), visible && Content.props.children && React.createElement(Tag, {
    style: style
  }, React.createElement(Popper$1, {
    modifiers: modifiers,
    eventsEnabled: true,
    positionFixed: false,
    placement: placement
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style,
        arrowProps = _ref3.arrowProps;
    return React.createElement(Tag, {
      ref: ref,
      style: style,
      "data-placement": placement,
      className: tooltipClasses,
      "data-popper": id
    }, React.createElement(Content.type, _extends({}, Content.props, {
      className: contentClasses
    }), Content.props.children), React.createElement("span", {
      ref: arrowProps.ref,
      style: arrowProps.style,
      "data-placement": placement,
      className: "arrow"
    }));
  })));
};

Popper.propTypes = {
  children: propTypes.node,
  clickable: propTypes.bool,
  domElement: propTypes.bool,
  modifiers: propTypes.object,
  id: propTypes.string,
  isVisible: propTypes.bool,
  placement: propTypes.string,
  popover: propTypes.bool,
  style: propTypes.objectOf(propTypes.string),
  tag: propTypes.string
};
Popper.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: {
    display: 'inline-block'
  },
  tag: 'div'
};

var PopoverBody = function PopoverBody(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-body', className);
  return React.createElement(Tag, _extends({
    "data-test": "popover-body"
  }, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverBody.defaultProps = {
  tag: 'div'
};

var PopoverHeader = function PopoverHeader(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-header', className);
  return React.createElement(Tag, _extends({
    "data-test": "popover-header"
  }, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverHeader.defaultProps = {
  className: '',
  tag: 'h3'
};

var Progress = function Progress(_ref) {
  var animated = _ref.animated,
      barClassName = _ref.barClassName,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      material = _ref.material,
      max = _ref.max,
      min = _ref.min,
      preloader = _ref.preloader,
      striped = _ref.striped,
      wrapperStyle = _ref.wrapperStyle,
      value = _ref.value,
      attributes = _objectWithoutProperties(_ref, ["animated", "barClassName", "children", "className", "color", "height", "material", "max", "min", "preloader", "striped", "wrapperStyle", "value"]);

  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames('progress', material && 'md-progress', preloader && (color ? color + '-color' : 'primary-color') + '-dark', className);
  var progressBarClasses = classNames(preloader ? 'indeterminate' : 'progress-bar', barClassName ? barClassName : null, animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null);
  var computedHeight = height ? height : children && '1rem';

  var computedWrapperStyle = _objectSpread({}, wrapperStyle, {
    height: computedHeight
  });

  return React.createElement("div", _extends({
    "data-test": "progress"
  }, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React.createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};

Progress.propTypes = {
  animated: propTypes.bool,
  barClassName: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  height: propTypes.string,
  material: propTypes.bool,
  max: propTypes.number,
  min: propTypes.number,
  preloader: propTypes.bool,
  striped: propTypes.bool,
  wrapperStyle: propTypes.object,
  value: propTypes.number
};
Progress.defaultProps = {
  animated: false,
  barClassName: '',
  className: '',
  color: 'indigo',
  height: '',
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};

var Row = function Row(props) {
  var className = props.className,
      Tag = props.tag,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "center", "start", "end", "around", "between", "top", "bottom", "middle"]);

  var classes = classNames("row", end && "justify-content-end", start && "justify-content-start", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({
    "data-test": "row"
  }, attributes, {
    className: classes
  }));
};

Row.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  end: propTypes.bool,
  start: propTypes.bool,
  center: propTypes.bool,
  between: propTypes.bool,
  around: propTypes.bool
};
Row.defaultProps = {
  tag: "div"
};

var propTypes$1 = {
  activeItem: propTypes.any,
  tabId: propTypes.any,
  className: propTypes.string
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItem: _this.props.activeItem
    });

    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItemId: this.state.activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes$1));
      var classes = classNames('tab-content', className);
      return React.createElement("div", _extends({
        "data-test": "tabContent"
      }, attributes, {
        className: classes
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return prevState.activeItem !== nextProps.activeItem ? {
        activeItem: nextProps.activeItem
      } : null;
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.childContextTypes = {
  activeItemId: propTypes.any
};
TabContent.propTypes = propTypes$1;

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPane).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabId = _this$props.tabId,
          attributes = _objectWithoutProperties(_this$props, ["className", "tabId"]);

      var classes = classNames('tab-pane', {
        active: tabId === this.context.activeItemId
      }, className);
      return React.createElement("div", _extends({
        "data-test": "tab-pane"
      }, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React.Component);

TabPane.contextTypes = {
  activeItemId: propTypes.any
};
TabPane.propTypes = {
  tabId: propTypes.any,
  className: propTypes.string
};

var Avatar = function Avatar(props) {
  var className = props.className,
      Tag = props.tag,
      round = props.round,
      circle = props.circle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "round", "circle"]);

  var classes = classNames('avatar', round && 'rounded', circle && 'rounded-circle', className);
  return React.createElement(Tag, _extends({
    "data-test": "avatar"
  }, attributes, {
    className: classes
  }));
};

Avatar.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  round: propTypes.bool,
  circle: propTypes.bool
};
Avatar.defaultProps = {
  tag: 'div',
  round: false,
  circle: false
};

var ButtonFixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          topSection = _this$props.topSection,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "topSection"]);

      var buttonFixedClasses = classNames('fixed-action-btn active');
      var classes = classNames(floating ? 'btn-floating' : 'btn', flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "".concat(color), size ? "btn-".concat(size) : false, rounded ? 'btn-rounded' : false, block ? 'btn-block' : false, 'Ripple-parent', className, {
        active: active,
        disabled: this.props.disabled
      });
      return React.createElement("div", _extends({
        "data-test": "button-fixed",
        className: buttonFixedClasses,
        ref: innerRef,
        style: {
          bottom: '45px',
          right: '24px'
        }
      }, attributes), React.createElement("a", {
        href: this.props.topSection ? this.props.topSection : '#',
        className: classes,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }, icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })), React.createElement("ul", {
        className: "list-unstyled"
      }, this.props.children));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed.defaultProps = {
  color: 'default'
};
ButtonFixed.propTypes = {
  active: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  topSection: propTypes.string
};

var ButtonFixed$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.props.onClick && _this.props.onClick();
    });

    _this.state = {
      cursorPos: {},
      buttonStyle: {
        transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)',
        opacity: '0'
      }
    };
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          buttonStyle = _this$props.buttonStyle,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "buttonStyle"]);

      var classes = classNames(size && "btn-".concat(size), 'btn-floating', color ? color : false, 'Ripple-parent', className);
      return React.createElement("li", {
        "data-test": "button-fixed-item"
      }, React.createElement("a", _extends({}, attributes, {
        style: this.props.buttonStyle,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        className: classes
      }), icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed$1.defaultProps = {
  color: 'default'
};
ButtonFixed$1.propTypes = {
  active: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.oneOf(['lg', 'sm']),
  children: propTypes.node,
  className: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  buttonStyle: propTypes.object
};

var CardUp = function CardUp(props) {
  var className = props.className,
      Tag = props.tag,
      color = props.color,
      gradient = props.gradient,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "gradient"]);

  var classes = classNames('card-up', color && color + '-color', gradient && gradient + '-gradient', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-up"
  }, attributes, {
    className: classes
  }));
};

CardUp.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
CardUp.defaultProps = {
  tag: 'div'
};

var CollapseHeader = function CollapseHeader(props) {
  var className = props.className,
      tagClassName = props.tagClassName,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tagClassName", "children", "tag"]);

  var classes = classNames('card-header', className);
  var tagClasses = classNames('mb-0', tagClassName);
  return React.createElement("div", _extends({
    "data-test": "collapse-header"
  }, attributes, {
    className: classes,
    style: {
      cursor: 'pointer'
    }
  }), React.createElement(Tag, {
    className: tagClasses
  }, children));
};

CollapseHeader.defaultProps = {
  tag: 'h5'
};
CollapseHeader.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tagClassName: propTypes.string,
  tag: propTypes.string
};

var css$b = ".thumb {\r\n  transition: top .2s, height .2s, width .2s, margin-left .2s;\r\n}\r\n\r\ninput[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/* thumb */\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background-color: #4285f4;\r\n  transform-origin: 50% 50%;\r\n  margin: -5px 0 0 0;\r\n  transition: 0.3s; }\r\n  input[type=range]:focus::-webkit-slider-runnable-track {\r\n    background: #ccc; }\r\n  input[type=range]::-moz-range-track {\r\n    /*required for proper track sizing in FF*/\r\n    height: 3px;\r\n    background: #c2c0c2;\r\n    border: none; }\r\n  input[type=range]::-moz-range-thumb {\r\n    border: none;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 50%;\r\n    background: #4285f4;\r\n    margin-top: -5px; }\r\n  input[type=range]:-moz-focusring {\r\n    /*hide the outline behind the border*/\r\n    outline: 1px solid #ffffff;\r\n    outline-offset: -1px; }\r\n  input[type=range]:focus::-moz-range-track {\r\n    background: #c2c0c2; }\r\n  input[type=range]::-ms-track {\r\n    height: 3px;\r\n    background: transparent;\r\n    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\r\n    border-color: transparent;\r\n    /*leave room for the larger thumb to overflow with a transparent border */\r\n    border-width: 6px 0;\r\n    color: transparent;\r\n    /*remove default tick marks*/ }\r\n  input[type=range]::-ms-fill-lower {\r\n    background: #c2c0c2; }\r\n  input[type=range]::-ms-fill-upper {\r\n    background: #c2c0c2; }\r\n  input[type=range]::-ms-thumb {\r\n    border: none;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 50%;\r\n    background: #4285f4; }\r\n  input[type=range]:focus::-ms-fill-lower {\r\n    background: #c2c0c2; }\r\n  input[type=range]:focus::-ms-fill-upper {\r\n    background: #c2c0c2; }";
styleInject(css$b);

var InputRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputRange, _React$Component);

  function InputRange(props) {
    var _this;

    _classCallCheck(this, InputRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRange).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var input = _this.inputRef.current;
      var inputWidth = input.offsetWidth;
      var oneStep = inputWidth / (_this.props.max - _this.props.min);

      _this.setState({
        value: _this.props.value,
        leftPosition: oneStep * _this.props.value - oneStep * _this.props.min,
        oneStep: oneStep
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rangeChange", function (e) {
      var newValue = e.target.value;

      _this.setState({
        value: newValue,
        leftPosition: _this.state.oneStep * newValue - _this.state.oneStep * _this.props.min
      });

      _this.props.getValue && _this.props.getValue(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "rangeFocus", function () {
      _this.setState({
        thumbActive: true,
        thumbHeight: "30px",
        thumbWidth: "30px",
        thumbTop: "-20px",
        thumbMarginLeft: "-15px"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rangeMouseLeave", function () {
      var input = _this.inputRef.current;
      input.blur();

      _this.setState({
        thumbActive: false,
        thumbHeight: 0,
        thumbWidth: 0,
        thumbTop: "10px",
        thumbMarginLeft: "-6px"
      });
    });

    _this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: "10px",
      thumbMarginLeft: "-6px",
      input: "input",
      oneStep: ""
    };
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(InputRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          formClassName = _this$props.formClassName,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          Tag = _this$props.tag;
      var inputClass = classNames(className);
      var formClass = classNames("range-field", formClassName);
      var thumbClass = classNames("thumb", this.state.thumbActive ? "active" : false);
      return React.createElement(Tag, {
        className: formClass
      }, React.createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        step: step,
        value: this.state.value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseLeave: this.rangeMouseLeave
      }), React.createElement("span", {
        className: thumbClass,
        style: {
          left: this.state.leftPosition,
          height: this.state.thumbHeight,
          width: this.state.thumbWidth,
          top: this.state.thumbTop,
          marginLeft: this.state.thumbMarginLeft
        }
      }, React.createElement("span", {
        className: "value"
      }, this.state.value)));
    }
  }]);

  return InputRange;
}(React.Component);

InputRange.propTypes = {
  className: propTypes.string,
  min: propTypes.number,
  max: propTypes.number,
  value: propTypes.number,
  getValue: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  step: propTypes.number,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false,
  tag: "div"
};

var InputSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputSwitch, _React$Component);

  function InputSwitch(props) {
    var _this;

    _classCallCheck(this, InputSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSwitch).call(this, props));
    _this.state = {
      value: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.checked
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.checked !== this.state.value) {
        this.setState({
          value: this.props.checked
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: !this.state.value
      });
      this.props.getValue && this.props.getValue(event.target.checked);
      this.props.onChange && this.props.onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          getValue = _this$props.getValue,
          labelLeft = _this$props.labelLeft,
          labelRight = _this$props.labelRight,
          onChange = _this$props.onChange,
          attributes = _objectWithoutProperties(_this$props, ["className", "checked", "disabled", "getValue", "labelLeft", "labelRight", "onChange"]);

      var classes = classNames("switch", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), React.createElement("label", null, labelLeft, React.createElement("input", {
        disabled: this.props.disabled,
        value: this.state.value,
        checked: this.state.value,
        onChange: this.handleChange,
        type: "checkbox"
      }), React.createElement("span", {
        className: "lever"
      }), labelRight));
    }
  }]);

  return InputSwitch;
}(React.Component);

InputSwitch.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  checked: propTypes.bool,
  getValue: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  labelLeft: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  labelRight: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  onChange: propTypes.func
};
InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: "Off",
  labelRight: "On"
};

var css$d = "\r\n/*\r\n * Container style\r\n */\r\n .ps {\r\n  overflow: hidden !important;\r\n  overflow-anchor: none;\r\n  -ms-overflow-style: none;\r\n  touch-action: auto;\r\n  -ms-touch-action: auto;\r\n}\r\n\r\n/*\r\n * Scrollbar rail styles\r\n */\r\n.ps__rail-x {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  height: 15px;\r\n  /* there must be 'bottom' or 'top' for ps__rail-x */\r\n  bottom: 0px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-y {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  width: 15px;\r\n  /* there must be 'right' or 'left' for ps__rail-y */\r\n  right: 0;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps--active-x > .ps__rail-x,\r\n.ps--active-y > .ps__rail-y {\r\n  display: block;\r\n  background-color: transparent;\r\n}\r\n\r\n.ps:hover > .ps__rail-x,\r\n.ps:hover > .ps__rail-y,\r\n.ps--focus > .ps__rail-x,\r\n.ps--focus > .ps__rail-y,\r\n.ps--scrolling-x > .ps__rail-x,\r\n.ps--scrolling-y > .ps__rail-y {\r\n  opacity: 0.6;\r\n}\r\n\r\n.ps__rail-x:hover,\r\n.ps__rail-y:hover,\r\n.ps__rail-x:focus,\r\n.ps__rail-y:focus {\r\n  background-color: #eee;\r\n  opacity: 0.9;\r\n}\r\n\r\n/*\r\n * Scrollbar thumb styles\r\n */\r\n.ps__thumb-x {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, height .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\r\n  height: 6px;\r\n  /* there must be 'bottom' for ps__thumb-x */\r\n  bottom: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__thumb-y {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, width .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\r\n  width: 6px;\r\n  /* there must be 'right' for ps__thumb-y */\r\n  right: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-x:hover > .ps__thumb-x,\r\n.ps__rail-x:focus > .ps__thumb-x {\r\n  background-color: #999;\r\n  height: 11px;\r\n}\r\n\r\n.ps__rail-y:hover > .ps__thumb-y,\r\n.ps__rail-y:focus > .ps__thumb-y {\r\n  background-color: #999;\r\n  width: 11px;\r\n}\r\n\r\n/* MS supports */\r\n@supports (-ms-overflow-style: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n\r\n.scrollbar-container {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n";
styleInject(css$d);

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this._container = ref;

      _this.props.containerRef(ref);
    });

    _this._handlerByEvent = new Map();
    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._ps = new PerfectScrollbar(this._container, this.props.option); // hook up events

      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this2.props[handlerNameByEvent[key]];

        if (callback) {
          var handler = function handler() {
            return callback(_this2._container);
          };

          _this2._handlerByEvent.set(key, handler);

          _this2._container.addEventListener(key, handler, false);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._ps.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (value, key) {
        _this3._container.removeEventListener(key, value, false);
      });

      this._handlerByEvent.clear();

      this._ps.destroy();

      this._ps = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement("div", {
        className: "scrollbar-container ".concat(className),
        ref: this.handleRef
      }, children);
    }
  }]);

  return ScrollBar;
}(Component);

ScrollBar.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined
};
ScrollBar.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  option: propTypes.object,
  containerRef: propTypes.func,
  onScrollY: propTypes.func,
  onScrollX: propTypes.func,
  onScrollUp: propTypes.func,
  onScrollDown: propTypes.func,
  onScrollLeft: propTypes.func,
  onScrollRight: propTypes.func,
  onYReachStart: propTypes.func,
  onYReachEnd: propTypes.func,
  onXReachStart: propTypes.func,
  onXReachEnd: propTypes.func
};

var ScrollBox = function ScrollBox(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames("scroll-box", className);
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

ScrollBox.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ScrollSpyList = function ScrollSpyList(props) {
  var className = props.className,
      children = props.children,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["className", "children", "color"]);

  var classes = classNames("nav md-tabs horizontal-spy", color ? color : false, className);
  return React.createElement("ul", _extends({}, attributes, {
    role: "navigation",
    className: classes
  }), children);
};

ScrollSpyList.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.string
};

var ScrollSpyListItem = function ScrollSpyListItem(props) {
  var className = props.className,
      children = props.children,
      active = props.active,
      attributes = _objectWithoutProperties(props, ["className", "children", "active"]);

  var classes = classNames("nav-link ", active ? "active" : false, className);
  return React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", _extends({}, attributes, {
    className: classes,
    role: "tab"
  }), children));
};

ScrollSpyListItem.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  active: propTypes.bool
};

var ScrollSpyText = function ScrollSpyText(props) {
  var className = props.className,
      children = props.children,
      scrollSpyRef = props.scrollSpyRef,
      attributes = _objectWithoutProperties(props, ["className", "children", "scrollSpyRef"]);

  var classes = classNames("scrollspy-example z-depth-1", className);
  return React.createElement("div", _extends({}, attributes, {
    ref: props.scrollSpyRef,
    className: classes
  }), children);
};

ScrollSpyText.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  scrollSpyRef: propTypes.oneOfType([propTypes.func, propTypes.object])
};

var css$e = ".popover-enter {\r\n  opacity: 0.01;\r\n  transform: scale(0.9) translateY(50%);\r\n}\r\n\r\n.popover-enter-active {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  transition: scale 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.popover-enter-done {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n}\r\n\r\n.popover-exit {\r\n  opacity: 1;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.popover-exit-active {\r\n  opacity: 0;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n/* slide from side */\r\n\r\n.side-slide-enter, .side-slide-appear {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.side-slide-enter-active, .side-slide-appear-active {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n\r\n.side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-enter, .right-side-slide-appear {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n}\r\n\r\n.right-side-slide-enter-active, .right-side-slide-appear-active {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.right-side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n}\r\n\r\n.right-side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.side-nav[data-animate=\"false\"]{\r\n  transform: translateX(0%);\r\n}\r\n\r\n\r\n.side-nav.wide {\r\n    transition-property: all;\r\n    transition-duration: 300ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n\r\n.side-nav.wide.slim {\r\n    width: 3.75rem;\r\n    transition-property: all;\r\n    transition-duration: 300ms;\r\n    transition-timing-function: ease-out;\r\n    right: 3.75rem;\r\n}\r\n\r\n.right-aligned.side-nav.wide.slim {\r\n    right: 0;\r\n}\r\n\r\n\r\n";
styleInject(css$e);

var defaultValue = {
  slim: false
};
var SideNavContext = React.createContext(defaultValue);

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      _this.initialX = e.touches[0].clientX;
      _this.initialY = e.touches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      if (_this.initialX === null) {
        return;
      }

      if (_this.initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = _this.initialX - currentX;
      var diffY = _this.initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          !_this.props.right && _this.handleOverlayClick();
        } else {
          _this.props.right && _this.handleOverlayClick();
        }
      }

      _this.initialX = null;
      _this.initialY = null;
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      if (!_this.props.hidden && _this.props.responsive) {
        _this.setState({
          isOpen: window.innerWidth > _this.props.breakWidth
        });

        if (window.innerWidth > _this.props.breakWidth) {
          _this.setState({
            isOpen: true,
            isFixed: _this.state.initiallyFixed
          });
        } else {
          _this.setState({
            isOpen: false,
            isFixed: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSlim", function (e) {
      return function () {
        _this.setState({
          slim: !_this.state.slim
        });

        var sidenav = ReactDOM.findDOMNode(_this.sideNavRef.current);
        sidenav.classList.toggle("slim");
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClick", function () {
      if (_this.state.isFixed) return;

      _this.setState({
        isOpen: false
      });

      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (!_this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      }

      e.stopPropagation();
    });

    function isOpen() {
      if (props.fixed) {
        if (window.innerWidth <= props.breakWidth) {
          return props.responsive ? false : true;
        }

        return true;
      } else {
        if (props.triggerOpening) {
          if (window.innerWidth > props.breakWidth) {
            return true;
          }

          return false;
        }

        return false;
      }
    }

    _this.sideNavRef = React.createRef();
    _this.initialX = null;
    _this.initialY = null;
    _this.state = {
      initiallyFixed: props.fixed,
      isFixed: !isOpen() ? false : props.fixed,
      isOpen: isOpen(),
      cursorPos: {},
      slim: _this.props.slim,
      slimInitial: _this.props.slim
    };
    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.triggerOpening && !this.props.responsive) {
        throw new Error('Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true');
      }

      this.sideNavRef.current.addEventListener("touchstart", this.startTouch);
      this.sideNavRef.current.addEventListener("touchmove", this.moveTouch);
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.triggerOpening !== this.props.triggerOpening) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
      this.sideNavRef.current.removeEventListener("touchstart", this.startTouch);
      this.sideNavRef.current.removeEventListener("touchmove", this.moveTouch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bg = _this$props.bg,
          breakWidth = _this$props.breakWidth,
          children = _this$props.children,
          className = _this$props.className,
          hidden = _this$props.hidden,
          href = _this$props.href,
          logo = _this$props.logo,
          mask = _this$props.mask,
          onOverlayClick = _this$props.onOverlayClick,
          right = _this$props.right,
          triggerOpening = _this$props.triggerOpening,
          showOverlay = _this$props.showOverlay,
          fixed = _this$props.fixed,
          responsive = _this$props.responsive,
          slim = _this$props.slim,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["bg", "breakWidth", "children", "className", "hidden", "href", "logo", "mask", "onOverlayClick", "right", "triggerOpening", "showOverlay", "fixed", "responsive", "slim", "tag"]);

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isFixed = _this$state.isFixed;
      var classes = classNames("side-nav", "wide", right && "right-aligned", this.state.slimInitial && "slim", className);
      var overlay = React.createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = React.createElement(Tag, _extends({}, attributes, {
        ref: this.sideNavRef,
        className: classes,
        "data-animate": isFixed ? false : undefined,
        style: bg ? {
          backgroundImage: "url(".concat(bg)
        } : undefined
      }), React.createElement(ScrollBar, {
        option: {
          suppressScrollX: true
        }
      }, React.createElement("ul", {
        className: "list-unstyled"
      }, logo && React.createElement("li", null, React.createElement("div", {
        className: "logo-wrapper"
      }, React.createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, React.createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })))), children)), mask && React.createElement("div", {
        className: "sidenav-bg ".concat(mask)
      }));
      return React.createElement(SideNavContext.Provider, {
        value: {
          slimInitial: this.state.slimInitial,
          slim: this.state.slim,
          toggleSlim: this.toggleSlim,
          right: this.props.right
        }
      }, isFixed ? sidenav : React.createElement(CSSTransition, {
        appear: !this.state.isFixed,
        timeout: {
          enter: 300,
          exit: 300
        },
        classNames: right ? "right-side-slide" : "side-slide",
        "in": isOpen
      }, sidenav), isFixed ? false : showOverlay && isOpen && overlay);
    }
  }]);

  return SideNav;
}(React.Component);

SideNav.propTypes = {
  bg: propTypes.string,
  breakWidth: propTypes.number,
  children: propTypes.node,
  className: propTypes.string,
  hidden: propTypes.bool,
  href: propTypes.string,
  logo: propTypes.string,
  mask: propTypes.string,
  onOverlayClick: propTypes.func,
  right: propTypes.bool,
  triggerOpening: propTypes.bool,
  tag: propTypes.string,
  fixed: propTypes.bool,
  showOverlay: propTypes.bool,
  responsive: propTypes.bool,
  slim: propTypes.bool
};
SideNav.defaultProps = {
  bg: "",
  breakWidth: 1400,
  className: "",
  hidden: false,
  href: "#",
  logo: "",
  mask: "",
  onOverlayClick: function onOverlayClick() {},
  right: false,
  triggerOpening: false,
  tag: "div",
  fixed: false,
  responsive: true,
  showOverlay: true,
  slim: false
};

var SideNavCat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavCat, _React$Component);

  function SideNavCat(props) {
    var _this;

    _classCallCheck(this, SideNavCat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavCat).call(this, props));
    _this.state = {
      cursorPos: {},
      isOpenID: ""
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNavCat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpenID: this.props.isOpen ? this.props.id : ""
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, id) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(id);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          className = _this$props.className,
          name = _this$props.name,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          isOpen = _this$props.isOpen,
          isOpenID = _this$props.isOpenID,
          id = _this$props.id,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "className", "name", "icon", "iconBrand", "iconLight", "iconRegular", "iconSize", "onClick", "disabled", "isOpen", "isOpenID", "id"]);

      var classes = classNames("collapsible-header", "Ripple-parent", "arrow-r", isOpen && "active", disabled && "disabled", className);
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var iconClass = ['mr-2'];
        slim && iconClass.push('v-slim-icon');
        return React.createElement(Tag, null, React.createElement("a", _extends({
          className: classes,
          onClick: function onClick(e) {
            return _this2.handleClick(e, id);
          }
        }, attributes), icon && React.createElement(Fa, {
          icon: icon,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          size: iconSize,
          className: iconClass.join(" ")
        }), name, React.createElement(Fa, {
          icon: "angle-down",
          className: "rotate-icon"
        }), React.createElement(Waves, {
          cursorPos: _this2.state.cursorPos
        })), React.createElement(Collapse, {
          id: id,
          isOpen: _this2.state.isOpenID
        }, React.createElement("div", {
          className: "collapsible-body",
          style: {
            display: "block"
          }
        }, React.createElement("ul", null, children))));
      });
    }
  }]);

  return SideNavCat;
}(React.Component);

_defineProperty(SideNavCat, "displayName", "SideNavCat");

SideNavCat.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  id: propTypes.string,
  isOpen: propTypes.bool,
  isOpenID: propTypes.string,
  name: propTypes.string,
  onClick: propTypes.func,
  tag: propTypes.string
};
SideNavCat.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  iconBrand: false,
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  id: "",
  isOpen: false,
  isOpenID: "",
  name: "",
  onClick: function onClick() {},
  tag: "li"
};

var SideNavItem = function SideNavItem(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      // Waves - Get Cursor Position
      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos); // do the passed in callback:

      if (props.onClick) {
        props.onClick(e);
      }

      e.stopPropagation();
    }
  };

  var Tag = props.tag,
      children = props.children,
      href = props.href,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "children", "href", "className", "innerRef"]);

  var classes = classNames("Ripple-parent", className);
  return React.createElement(Tag, _extends({
    className: classes,
    ref: innerRef,
    onClick: handleClick
  }, attributes), React.createElement("a", {
    className: classes,
    href: href
  }, children, React.createElement(Waves, {
    cursorPos: cursorPos
  })));
};

SideNavItem.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  tag: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
SideNavItem.defaultProps = {
  tag: "li"
};

var SideNavLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavLink, _React$Component);

  function SideNavLink(props) {
    var _this;

    _classCallCheck(this, SideNavLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavLink).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNavLink, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          to = _this$props.to,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          topLevel = _this$props.topLevel,
          shortcut = _this$props.shortcut,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "to", "className", "innerRef", "topLevel", "shortcut"]);

      var classes = classNames('Ripple-parent', topLevel && 'collapsible-header', className);
      var sideNavLink = React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var shortcut;

        function calculateShortcut() {
          if (typeof children === 'string') {
            var wordsArray = children.toString().split(' ');

            if (wordsArray.length === 1) {
              return wordsArray[0].substr(0, 2).toUpperCase();
            }

            if (wordsArray.length >= 2) {
              var firstLetter = wordsArray[0].substr(0, 1);
              var secondLetter = wordsArray[1].substr(0, 1);
              return firstLetter.concat(secondLetter).toUpperCase();
            }
          }

          return children;
        }

        if (slim) {
          shortcut = _this2.props.shortcut || calculateShortcut();
        }

        return React.createElement(NavLink$1, _extends({
          className: classes,
          ref: innerRef,
          onClick: _this2.handleClick,
          to: to
        }, attributes), slim ? React.createElement(React.Fragment, null, React.createElement("span", {
          className: "sv-slim"
        }, shortcut), React.createElement("span", {
          className: "sv-normal"
        }, children)) : React.createElement("span", {
          className: "sv-normal"
        }, children), React.createElement(Waves, {
          cursorPos: _this2.state.cursorPos
        }));
      });
      return topLevel ? React.createElement("li", null, " ", sideNavLink) : sideNavLink;
    }
  }]);

  return SideNavLink;
}(React.Component);

SideNavLink.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  tag: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  topLevel: propTypes.bool,
  shortcut: propTypes.string
};
SideNavLink.defaultProps = {
  to: '#',
  topLevel: false
};

var SideNavNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavNav, _React$Component);

  function SideNavNav(props) {
    var _this;

    _classCallCheck(this, SideNavNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (number) {
      return function () {
        var state = '';

        if (_this.state.accordion !== number) {
          state = number;
        } else {
          state = null;
        }

        _this.setState({
          accordion: state
        });
      };
    });

    _this.state = {
      accordion: null
    };
    return _this;
  }

  _createClass(SideNavNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          toggleNavLabel = _this$props.toggleNavLabel,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["tag", "toggleNavLabel", "children", "className"]);

      var accordion = this.state.accordion;
      var classes = classNames('collapsible', 'collapsible-accordion', className);
      var modified = React.Children.map(this.props.children, function (child, i) {
        if (child.type.displayName === 'SideNavCat') {
          return React.cloneElement(child, {
            onClick: _this2.onClick(i),
            isOpen: accordion === i
          });
        } else {
          return child;
        }
      });
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim,
            slimInitial = _ref.slimInitial,
            toggleSlim = _ref.toggleSlim,
            right = _ref.right;
        var iconClass = ['mr-2', 'sv-slim-icon', 'fas', 'icon-rotate'];
        right & slim && iconClass.push('fa-angle-double-left');
        right & !slim && iconClass.push('fa-angle-double-right');
        !right & !slim && iconClass.push('fa-angle-double-left');
        !right & slim && iconClass.push('fa-angle-double-right');
        return React.createElement(React.Fragment, null, React.createElement("li", null, React.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), modified, slimInitial && React.createElement("li", {
          onClick: toggleSlim()
        }, React.createElement("a", {
          className: "waves-effect"
        }, React.createElement("i", {
          className: iconClass.join(' ')
        }), _this2.props.toggleNavLabel)))));
      });
    }
  }]);

  return SideNavNav;
}(React.Component);

SideNavNav.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  toggleNavLabel: propTypes.string,
  className: propTypes.string
};
SideNavNav.defaultProps = {
  tag: 'ul',
  toggleNavLabel: 'Minimize menu'
};

var Spinner = function Spinner(props) {
  var theChosenColorSpinner = function theChosenColorSpinner(spinnerClasses) {
    if (props.multicolor) {
      var theSpinnerItself = React.createElement("div", null, React.createElement("div", {
        className: "spinner-layer spinner-blue"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-red"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-yellow"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-green"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))));
      return theSpinnerItself;
    } else {
      var _theSpinnerItself = React.createElement("div", {
        className: spinnerClasses
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      })));

      return _theSpinnerItself;
    }
  };

  var className = props.className,
      big = props.big,
      small = props.small,
      red = props.red,
      green = props.green,
      yellow = props.yellow;
  var wrapperClasses = classNames("preloader-wrapper", "active", big ? "big" : false, small ? "small" : false, className);
  var spinnerClasses = classNames("spinner-layer", red ? "spinner-red-only" : false, green ? "spinner-green-only" : false, yellow ? "spinner-yellow-only" : "spinner-blue-only", className);

  if (props.crazy) {
    return React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, theChosenColorSpinner(spinnerClasses)))));
  } else {
    return React.createElement("div", {
      className: wrapperClasses
    }, theChosenColorSpinner(spinnerClasses));
  }
};

Spinner.propTypes = {
  className: propTypes.string,
  big: propTypes.bool,
  small: propTypes.bool,
  crazy: propTypes.bool,
  red: propTypes.bool,
  green: propTypes.bool,
  yellow: propTypes.bool,
  multicolor: propTypes.bool
};
Spinner.defaultProps = {
  tag: "div"
};

var Step = function Step(props) {
  var Tag = props.tag,
      form = props.form,
      icon = props.icon,
      stepName = props.stepName,
      vertical = props.vertical;
  var iconClass = classNames("fa fa-" + icon, "Ripple-parent");
  var stepClass = classNames(form ? "steps-step" : icon && vertical ? "steps-step-3" : icon && !vertical ? "steps-step-2" : null, props.className);
  var step;

  if (form) {
    step = React.createElement(Tag, {
      className: stepClass
    }, props.children);
  } else if (icon && !vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popper, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-2 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else if (icon && vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popper, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-3 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else {
    step = React.createElement("li", {
      className: stepClass
    }, props.children);
  }

  return step;
};

Step.defaultProps = {
  tag: "div",
  form: false,
  vertical: false
};

var css$f = "/* Stepper Form */\r\n\r\n/* Stepper v.2 (Form) */\r\n.steps-form {\r\n  display: table;\r\n  width: 100%;\r\n  position: relative; }\r\n.steps-form .steps-row {\r\n  display: table-row; }\r\n.steps-form .steps-row:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: \" \";\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #ccc; }\r\n.steps-form .steps-row .steps-step {\r\n  display: table-cell;\r\n  text-align: center;\r\n  position: relative; }\r\n.steps-form .steps-row .steps-step p {\r\n  margin-top: 0.5rem; }\r\n.steps-form .steps-row .steps-step button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important; }\r\n.steps-form .steps-row .steps-step .btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n  margin-top: 0; }\r\n\r\n/* Stepper v.3 (Icons) */\r\n.steps-form-2 {\r\n  display: table;\r\n  width: 100%;\r\n  position: relative; }\r\n.steps-form-2 .steps-row-2 {\r\n  display: table-row; }\r\n.steps-form-2 .steps-row-2:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: \" \";\r\n  width: 99%;\r\n  height: 2px;\r\n  background-color: #7283a7; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 {\r\n  display: table-cell;\r\n  text-align: center;\r\n  position: relative; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 p {\r\n  margin-top: 0.5rem; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {\r\n  width: 70px;\r\n  height: 70px;\r\n  border: 2px solid #59698D;\r\n  background-color: white !important;\r\n  color: #59698D !important;\r\n  border-radius: 50%;\r\n  padding: 22px 18px 15px 18px;\r\n  margin-top: -22px; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {\r\n  border: 2px solid #4285F4;\r\n  color: #4285F4 !important;\r\n  background-color: white !important; }\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa {\r\n  font-size: 1.7rem; }\r\n .steps-row-2:first-child .btn {\r\n  margin-left: 0\r\n}\r\n.steps-row-2:last-child .btn {\r\n  margin-right: 0\r\n}\r\n\r\n\r\n/* Stepper v.4 (Icon-vertical) */\r\n\r\n.steps-form-3 {\r\n  width: 2px;\r\nheight: 470px;\r\n  position: relative; }\r\n.steps-form-3 .steps-row-3 {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column; }\r\n.steps-form-3 .steps-row-3:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 2px;\r\n  height: 100%;\r\n  background-color: #7283a7; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 {\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  text-align: center;\r\n  position: relative; }\r\n.steps-form-3 .steps-row-3 .steps-step-3.no-height {\r\n  height: 50px; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 p {\r\nmargin-top: 0.5rem; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 {\r\n  width: 60px;\r\n  height: 60px;\r\n  border: 2px solid #59698D;\r\n  background-color: white !important;\r\n  color: #59698D !important;\r\n  border-radius: 50%;\r\n  padding: 18px 18px 15px 15px;\r\n  margin-top: -22px; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3:hover {\r\n  border: 2px solid #4285F4;\r\n  color: #4285F4 !important;\r\n  background-color: white !important; }\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fa {\r\n  font-size: 1.7rem; }\r\n";
styleInject(css$f);

var Stepper = function Stepper(props) {
  var vertical = props.vertical,
      form = props.form,
      icon = props.icon;
  var stepperClass = classNames(form ? "steps-form" : icon && vertical ? "steps-form-3" : icon && !vertical ? "steps-form-2" : "stepper", vertical && !icon ? "stepper-vertical" : form || icon ? null : "stepper-horizontal", props.className);
  var wrapperFix = classNames(form ? "steps-row" : icon && vertical ? "steps-row-3 d-flex justify-content-between" : icon && !vertical ? "steps-row-2 d-flex justify-content-between" : null); // wrapper shim in case props.form

  var stepper;

  if (form || icon) {
    stepper = React.createElement("div", {
      className: stepperClass
    }, React.createElement("div", {
      className: wrapperFix
    }, props.children));
  } else {
    stepper = React.createElement("ul", {
      className: stepperClass
    }, props.children);
  }

  return stepper;
};

Stepper.propTypes = {
  vertical: propTypes.bool,
  form: propTypes.bool,
  icon: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};
Stepper.defaultProps = {
  form: false
};



var Container$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "events", ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"]);

    _defineProperty(_assertThisInitialized(_this), "subscribers", []);

    _defineProperty(_assertThisInitialized(_this), "subscribe", function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    });

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notifySubscribers", function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;
        raf(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getParent", function () {
      return _this.node;
    });

    return _this;
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(PureComponent);

_defineProperty(Container$1, "childContextTypes", {
  subscribe: propTypes.func,
  unsubscribe: propTypes.func,
  getParent: propTypes.func
});

var css$g = ".react-bootstrap-table {\r\n  padding-top: 65px;\r\n}\r\n\r\n.react-bootstrap-table .caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid\\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n\r\n.react-bootstrap-table .dropup .caret {\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-bottom: 4px dashed;\r\n  border-bottom: 4px solid\\9;\r\n}\r\n\r\n.react-bootstrap-table-pagination .pagination {\r\n  float: right;\r\n}\r\n\r\n.react-bootstrap-table-pagination .pagination .page-item.active .page-link {\r\n  background-color: #09c;\r\n}\r\n\r\n.react-bootstrap-table-pagination .select-wrapper {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 15px;\r\n}\r\n\r\n.react-bootstrap-table-pagination .dropdown-item {\r\n  padding: 0;\r\n}\r\n\r\n.react-bootstrap-table-pagination-total {\r\n  display: block;\r\n}\r\n\r\n.react-bootstrap-table .md-form {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 200px;\r\n}\r\n\r\n.react-bootstrap-table-pagination > * {\r\n  position: inherit;\r\n}\r\n\r\n.react-bs-table-sizePerPage-dropdown {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}";
styleInject(css$g);

var Testimonial = function Testimonial(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("testimonial", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Testimonial.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Testimonial.defaultProps = {
  tag: "div"
};

export { 
   Alert,
   Animation,
   Avatar,
   Badge,
   Breadcrumb,
   BreadcrumbItem,
   Button,
   ButtonFixed,
   ButtonFixed$1 as ButtonFixedItem,
   ButtonGroup,
   ButtonToolbar,
   Card,
   CardBody,
   CardFooter,
   CardGroup,
   CardHeader,
   CardImage,
   CardText,
   CardTitle,
   CardUp,
   Carousel,
   CarouselCaption,
   Control as CarouselControl,
   CarouselIndicator,
   CarouselIndicators,
   CarouselInner,
   CarouselItem,
   MDBCloseIcon as CloseIcon,
   Col,
   Collapse,
   CollapseHeader,
   Container,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownToggle,
   Fa,
   Footer,
   FormInline,
   HamburgerToggler,
   Input,
   InputGroup,
   InputRange,
   InputSwitch,
   ListGroup,
   ListGroupItem,
   Alert as MDBAlert,
   Animation as MDBAnimation,
   Avatar as MDBAvatar,
   Badge as MDBBadge,
   Breadcrumb as MDBBreadcrumb,
   BreadcrumbItem as MDBBreadcrumbItem,
   Button as MDBBtn,
   ButtonFixed as MDBBtnFixed,
   ButtonFixed$1 as MDBBtnFixedItem,
   ButtonGroup as MDBBtnGroup,
   ButtonToolbar as MDBBtnToolbar,
   Card as MDBCard,
   CardBody as MDBCardBody,
   CardFooter as MDBCardFooter,
   CardGroup as MDBCardGroup,
   CardHeader as MDBCardHeader,
   CardImage as MDBCardImage,
   CardText as MDBCardText,
   CardTitle as MDBCardTitle,
   CardUp as MDBCardUp,
   Carousel as MDBCarousel,
   CarouselCaption as MDBCarouselCaption,
   CarouselIndicator as MDBCarouselIndicator,
   CarouselIndicators as MDBCarouselIndicators,
   CarouselInner as MDBCarouselInner,
   CarouselItem as MDBCarouselItem,
   MDBCloseIcon,
   Col as MDBCol,
   Collapse as MDBCollapse,
   CollapseHeader as MDBCollapseHeader,
   Container as MDBContainer,
   Control as MDBControl,
   Dropdown as MDBDropdown,
   DropdownItem as MDBDropdownItem,
   DropdownMenu as MDBDropdownMenu,
   DropdownToggle as MDBDropdownToggle,
   Footer as MDBFooter,
   FormInline as MDBFormInline,
   HamburgerToggler as MDBHamburgerToggler,
   Fa as MDBIcon,
   Input as MDBInput,
   InputGroup as MDBInputGroup,
   ListGroup as MDBListGroup,
   ListGroupItem as MDBListGroupItem,
   Mask as MDBMask,
   Modal as MDBModal,
   ModalBody as MDBModalBody,
   ModalFooter as MDBModalFooter,
   ModalHeader as MDBModalHeader,
   Nav as MDBNav,
   NavItem as MDBNavItem,
   NavLink as MDBNavLink,
   Navbar as MDBNavbar,
   NavbarBrand as MDBNavbarBrand,
   NavbarNav as MDBNavbarNav,
   NavbarToggler as MDBNavbarToggler,
   Popper as MDBPopover,
   PopoverBody as MDBPopoverBody,
   PopoverHeader as MDBPopoverHeader,
   Popper as MDBPopper,
   Progress as MDBProgress,
   InputRange as MDBRangeInput,
   Row as MDBRow,
   ScrollBar as MDBScrollbar,
   ScrollBox as MDBScrollspyBox,
   ScrollSpyList as MDBScrollspyList,
   ScrollSpyListItem as MDBScrollspyListItem,
   ScrollSpyText as MDBScrollspyText,
   SideNav as MDBSideNav,
   SideNavCat as MDBSideNavCat,
   SideNavItem as MDBSideNavItem,
   SideNavLink as MDBSideNavLink,
   SideNavNav as MDBSideNavNav,
   Spinner as MDBSpinner,
   Step as MDBStep,
   Stepper as MDBStepper,
   Container$1 as MDBStickyContent,
   InputSwitch as MDBSwitch,
   TabContent as MDBTabContent,
   TabPane as MDBTabPane,
   Testimonial as MDBTestimonial,
   Popper as MDBTooltip, 
   View as MDBView, 
   Waves as MDBWaves, 
   Mask, 
   Modal, 
   ModalBody, 
   ModalFooter, 
   ModalHeader, 
   Nav, 
   NavItem, 
   NavLink, 
   Navbar, 
   NavbarBrand, 
   NavbarNav, 
   NavbarToggler, 
   ScrollBar as PerfectScrollbar, 
   Popper as Popover, 
   PopoverBody, 
   PopoverHeader, 
   Popper, 
   Progress, 
   Row, 
   ScrollBox as ScrollSpyBox, 
   ScrollSpyList, 
   ScrollSpyListItem, 
   ScrollSpyText, 
   SideNav, 
   SideNavCat, 
   SideNavItem, 
   SideNavLink, 
   SideNavNav, 
   Spinner, 
   Step, 
   Stepper, 
   Container$1 as StickyContainer, 
   TabContent, 
   TabPane, 
   Testimonial, 
   Popper as Tooltip,
   View,
   Waves };
