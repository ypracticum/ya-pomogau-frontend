"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.KeyIcon = void 0;
var utils_1 = require("./utils");
exports.KeyIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 32 32", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { filter: "url(#filter0_d_2923_8737)" },
            React.createElement("circle", { cx: "12", cy: "12", r: "11", fill: "#2E3192" })),
        React.createElement("path", { d: "M17.0436 6L15.877 7.16667M15.877 7.16667L17.627 8.91667L15.5853 10.9583L13.8353 9.20833M15.877 7.16667L13.8353 9.20833M11.4378 11.6058C11.739 11.903 11.9784 12.2569 12.1423 12.647C12.3062 13.0371 12.3913 13.4557 12.3927 13.8789C12.3941 14.302 12.3118 14.7212 12.1506 15.1124C11.9893 15.5036 11.7522 15.8591 11.453 16.1583C11.1538 16.4575 10.7984 16.6945 10.4072 16.8558C10.016 17.0171 9.59678 17.0993 9.17365 17.0979C8.75052 17.0965 8.33185 17.0114 7.94175 16.8475C7.55164 16.6836 7.19781 16.4442 6.90062 16.143C6.31619 15.5379 5.99281 14.7275 6.00012 13.8863C6.00743 13.045 6.34485 12.2403 6.9397 11.6455C7.53455 11.0506 8.33924 10.7132 9.18045 10.7059C10.0217 10.6986 10.8327 11.0214 11.4378 11.6058ZM11.4378 11.6058L13.8353 9.20833", fill: "none", stroke: "white", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
