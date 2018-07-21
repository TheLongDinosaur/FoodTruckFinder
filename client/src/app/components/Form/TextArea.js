"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = exports.TextArea = function TextArea(props) {
  return _react2.default.createElement(
    "div",
    { className: "form-group" },
    _react2.default.createElement("textarea", _extends({ className: "form-control", rows: "10" }, props))
  );
};