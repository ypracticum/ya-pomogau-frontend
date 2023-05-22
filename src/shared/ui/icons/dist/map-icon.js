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
exports.MapIcon = void 0;
var utils_1 = require("./utils");
exports.MapIcon = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "54", height: "54", viewBox: "0 0 54 54", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M36.0282 18.2149C36.0282 15.1504 33.6565 12.4945 30.4942 12.4945C27.5295 12.4945 24.96 14.9461 24.96 18.2149C24.96 21.2795 27.3318 23.9353 30.4942 23.9353C33.6565 23.9353 36.0282 21.4838 36.0282 18.2149ZM26.1458 18.2149C26.1458 15.7633 28.1224 13.7203 30.4942 13.7203C32.866 13.7203 34.8423 15.7633 34.8423 18.2149C34.8423 20.6665 32.866 22.7096 30.4942 22.7096C28.1224 22.7096 26.1458 20.6665 26.1458 18.2149Z" }),
        React.createElement("path", { d: "M50.8518 44.9785L39.9812 29.043C39.7835 28.8387 39.7836 28.8388 39.586 28.8388H36.8189L39.586 22.7097C40.9695 19.4409 40.7718 15.7635 38.9929 12.9033C37.2141 10.0431 34.447 8.2043 31.087 8C30.6917 8 30.2965 8 29.9012 8C26.5412 8.2043 23.7741 10.0431 21.9953 12.9033C20.2165 15.9678 20.019 19.6452 21.4025 22.7097L24.1694 28.8388H21.0071C20.8094 28.8388 20.6119 28.8387 20.6119 29.043L9.14824 44.9785C8.95059 45.1828 8.95059 45.3872 9.14824 45.5915C9.14824 45.7958 9.34598 46 9.74127 46H50.259C50.4566 46 50.6541 45.7958 50.8518 45.5915C51.0494 45.3872 51.0494 45.1828 50.8518 44.9785ZM23.1811 13.5162C24.7623 10.8602 27.3317 9.43006 30.0988 9.22576C30.2964 9.22576 30.4942 9.22576 30.4942 9.22576C30.6919 9.22576 30.8894 9.22576 30.8894 9.22576C33.8541 9.43006 36.2259 10.8602 37.8071 13.5162C39.3883 16.1721 39.586 19.4409 38.4001 22.3011L30.4942 39.871L22.5883 22.3011C21.4025 19.4409 21.6 16.1721 23.1811 13.5162ZM10.9271 44.7742L21.4025 30.0645H24.7624L29.9012 41.5055C29.9012 41.7098 30.0989 41.914 30.4942 41.914C30.8895 41.914 30.8894 41.7098 31.087 41.5055L36.2261 30.0645H39.3884L49.4683 44.7742H10.9271Z" })));
};
