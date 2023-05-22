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
exports.BallsIcon = void 0;
var utils_1 = require("./utils");
exports.BallsIcon = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16 27C21.1277 27 25.4303 24.3844 26.6074 19.4349C26.6118 19.4349 26.6162 19.4349 26.6205 19.4349L26.6296 19.4349C29.0433 19.4349 31 17.0506 31 14.5429C31 12.0352 29.0433 9.65089 26.6296 9.65089C26.1337 9.65089 25.4539 9.59613 25.0096 9.75426C23.0687 6.59954 19.8711 5 16 5C12.1289 5 8.93125 6.59954 6.99042 9.75426C6.54609 9.59613 5.8663 9.65089 5.37037 9.65089C2.95668 9.65089 1 12.0352 1 14.5429C1 17.0506 2.95668 19.0835 5.37037 19.0835C5.37778 19.0835 5.38518 19.0835 5.39258 19.0834C6.56967 24.033 10.8723 27 16 27Z", fill: "#2E3192" }),
        React.createElement("path", { d: "M23.7143 16.5C23.7143 21.1944 20.0366 25 15.5 25C10.9634 25 7.28571 21.1944 7.28571 16.5C7.28571 11.8056 10.9634 8 15.5 8C20.0366 8 23.7143 11.8056 23.7143 16.5Z", fill: "none", stroke: "white", "stroke-width": "0.5" }),
        React.createElement("path", { d: "M19.5864 16.0736C19.644 16.664 19.5814 17.2604 19.4027 17.8243C19.224 18.3882 18.9331 18.9071 18.5489 19.3476C18.1646 19.7881 17.6955 20.1405 17.1716 20.3821C16.6478 20.6236 16.0809 20.7489 15.5074 20.75C14.9339 20.7511 14.3666 20.6278 13.8419 20.3883C13.3172 20.1487 12.8469 19.7981 12.4611 19.359C12.0753 18.9199 11.7826 18.4021 11.602 17.8388C11.4213 17.2756 11.3566 16.6795 11.4121 16.0888L11.8485 16.1327C11.7989 16.6603 11.8567 17.1928 12.0181 17.6959C12.1794 18.199 12.4408 18.6616 12.7854 19.0538C13.1301 19.446 13.5502 19.7592 14.0189 19.9732C14.4876 20.1872 14.9943 20.2973 15.5066 20.2963C16.0189 20.2954 16.5253 20.1834 16.9932 19.9677C17.4611 19.7519 17.8802 19.4372 18.2234 19.0437C18.5667 18.6502 18.8265 18.1866 18.9861 17.6829C19.1457 17.1792 19.2016 16.6465 19.1502 16.1191L19.5864 16.0736Z", fill: "none", stroke: "white", "stroke-width": "0.5" }),
        React.createElement("path", { d: "M13.8571 13.95C13.8571 14.4194 13.4894 14.8 13.0357 14.8C12.5821 14.8 12.2143 14.4194 12.2143 13.95C12.2143 13.4806 12.5821 13.1 13.0357 13.1C13.4894 13.1 13.8571 13.4806 13.8571 13.95Z", fill: "none", stroke: "white", "stroke-width": "0.5" }),
        React.createElement("path", { d: "M18.7857 13.95C18.7857 14.4194 18.4179 14.8 17.9643 14.8C17.5106 14.8 17.1429 14.4194 17.1429 13.95C17.1429 13.4806 17.5106 13.1 17.9643 13.1C18.4179 13.1 18.7857 13.4806 18.7857 13.95Z", fill: "none", stroke: "white", "stroke-width": "0.5" }),
        React.createElement("path", { d: "M23.4635 18.1901C23.9685 18.2301 24.4756 18.1487 24.9452 17.9524C25.4148 17.7561 25.8342 17.45 26.1706 17.0583C26.507 16.6665 26.7513 16.1995 26.8844 15.6938C27.0176 15.1882 27.036 14.6575 26.9381 14.1433C26.8403 13.6291 26.6289 13.1452 26.3205 12.7295C26.0121 12.3138 25.6149 11.9775 25.1601 11.7469C24.7053 11.5162 24.2051 11.3975 23.6987 11.4C23.1922 11.4025 22.6931 11.5261 22.2405 11.7612L23.075 13.4819C23.2714 13.38 23.4878 13.3263 23.7075 13.3253C23.9272 13.3242 24.1441 13.3757 24.3414 13.4757C24.5387 13.5757 24.7109 13.7216 24.8447 13.9019C24.9785 14.0822 25.0702 14.2921 25.1126 14.5151C25.1551 14.7382 25.1471 14.9684 25.0893 15.1877C25.0316 15.407 24.9256 15.6096 24.7797 15.7795C24.6338 15.9495 24.4519 16.0822 24.2482 16.1674C24.0445 16.2525 23.8246 16.2878 23.6055 16.2705L23.4635 18.1901Z", fill: "none", stroke: "white", "stroke-width": "0.5" }),
        React.createElement("path", { d: "M7.5365 18.1901C7.0315 18.2301 6.5244 18.1487 6.0548 17.9524C5.58521 17.7561 5.16584 17.45 4.82944 17.0583C4.49304 16.6665 4.24873 16.1995 4.11558 15.6938C3.98243 15.1882 3.96405 14.6575 4.06187 14.1433C4.1597 13.6291 4.37108 13.1452 4.67951 12.7295C4.98795 12.3138 5.38507 11.9775 5.83988 11.7469C6.29469 11.5162 6.79486 11.3975 7.30133 11.4C7.8078 11.4025 8.30686 11.5261 8.75953 11.7612L7.92498 13.4819C7.72864 13.38 7.51217 13.3263 7.29249 13.3253C7.0728 13.3242 6.85585 13.3757 6.65858 13.4757C6.46131 13.5757 6.28905 13.7216 6.15527 13.9019C6.02149 14.0822 5.9298 14.2921 5.88737 14.5151C5.84493 14.7382 5.85291 14.9684 5.91066 15.1877C5.96841 15.407 6.07439 15.6096 6.2203 15.7795C6.36621 15.9495 6.54812 16.0822 6.7518 16.1674C6.95549 16.2525 7.17545 16.2878 7.39449 16.2705L7.5365 18.1901Z", fill: "none", stroke: "white", "stroke-width": "0.5" })));
};
