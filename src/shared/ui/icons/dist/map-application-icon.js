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
exports.MapApplicationIcon = void 0;
var utils_1 = require("./utils");
exports.MapApplicationIcon = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "54", height: "54", viewBox: "0 0 54 54", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M37.324 38.4611C37.1365 38.4611 36.9489 38.2825 36.7614 38.1038L26.8201 17.7284C25.1319 14.3325 25.5071 10.4004 27.5704 7.18324C29.6337 3.96608 33.01 2.17873 36.7614 2C37.1365 2 37.6991 2 38.0743 2C41.8256 2.17873 45.2019 4.14481 47.2652 7.18324C49.3285 10.4004 49.5161 14.3325 48.0155 17.7284L38.0743 38.1038C37.8867 38.4612 37.6992 38.4611 37.324 38.4611ZM37.324 2.89365C37.1365 2.89365 36.9489 2.89365 36.7614 2.89365C33.3851 3.07239 30.1964 4.85982 28.5082 7.71952C26.6325 10.5792 26.445 14.3326 27.9456 17.371L37.5116 36.8525L47.0777 17.371C48.5782 14.3326 48.3906 10.5792 46.5149 7.71952C44.6392 4.85982 41.6381 3.07239 38.2619 2.89365C37.6992 2.89365 37.5116 2.89365 37.324 2.89365Z" }),
        React.createElement("path", { d: "M37.324 18.8007C33.7602 18.8007 30.9466 16.12 30.9466 12.7241C30.9466 9.32818 33.7602 6.64718 37.324 6.64718C40.8878 6.64718 43.7013 9.32818 43.7013 12.7241C43.7013 16.12 40.8878 18.8007 37.324 18.8007ZM37.324 7.71952C34.3229 7.71952 32.0721 10.0431 32.0721 12.7241C32.0721 15.5838 34.5105 17.7284 37.324 17.7284C40.3251 17.7284 42.5759 15.405 42.5759 12.7241C42.7635 10.0431 40.3251 7.71952 37.324 7.71952Z" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19.9423 22.5094L7.75027 14.6452C7.5627 14.4665 7.37515 14.4665 7.18758 14.6452C7.00001 14.6452 7 14.824 7 15.1815V43.5996C7 43.7784 7.00001 43.9571 7.18758 43.9571L19.7547 52H20.1299L32.3219 44.1358L44.5139 52H44.8891H45.0766C45.2642 52 45.2642 51.8213 45.2642 51.4638V23.0456C44.8891 22.8668 44.8891 22.6881 44.7015 22.6881L43.9512 24.1459V50.5702L32.5095 43.2421L32.4061 27.4131L31.3841 25.235V43.0635L19.9423 50.3914V23.2244L27.8941 18.1315L27.6327 17.5408L19.9423 22.5094ZM18.8169 23.4031L7.37513 16.0751V43.2421L18.8169 50.5702V23.4031Z" })));
};
