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
exports.BlockIcon = void 0;
var utils_1 = require("./utils");
exports.BlockIcon = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "54", height: "54", viewBox: "0 0 54 54", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.2471 14.86L17.6625 19.8623L36.7758 2.20739C37.2536 1.76602 38.2093 2.06021 38.2093 2.79583V12.8004C38.2093 12.9475 38.05 13.2417 37.8907 13.3888L17.9811 31.7793C17.6625 32.0736 17.0254 32.0736 16.7069 31.7793L5.23892 20.8922C4.92036 20.5979 4.92036 20.0094 5.23892 19.7151L10.8136 14.86C11.4507 14.5658 11.9286 14.5658 12.2471 14.86ZM5.87606 20.4507L17.5033 31.1909L37.4129 12.8004V2.94301L18.2997 20.5979C17.9811 20.8922 17.344 20.8922 17.0255 20.5979L11.4508 15.4486C9.06161 17.5083 6.51317 19.7151 5.87606 20.4507Z" }),
        React.createElement("path", { d: "M41.1059 38.9373L46.7251 33.1735C47.0916 32.7976 47.0916 32.171 46.7251 31.7951L41.3502 26.2819C40.9837 25.906 40.3729 25.906 40.0064 26.2819L34.3871 32.0458L28.89 26.4072C28.5235 26.0313 27.9127 26.0313 27.5462 26.4072L21.9269 31.5446C21.5605 31.9205 21.4383 32.6722 21.9269 33.0482L27.3019 38.8121C27.3019 38.8121 27.3019 38.9374 27.3019 39.0627L22.1713 44.3253C21.8048 44.7012 21.8048 45.3277 22.1713 45.7036L27.5462 51.2168C27.9127 51.5927 28.5235 51.5927 28.89 51.2168L33.532 46.4554C33.8985 46.0795 34.5093 46.0795 34.8757 46.4554L40.0064 51.7181C40.3729 52.094 40.9837 52.094 41.3502 51.7181L46.603 46.3301C46.9695 45.9542 46.9695 45.3277 46.603 44.9518L41.1059 38.9373ZM46.3587 45.5783L40.9837 51.0916C40.9837 51.0916 40.8616 51.0916 40.7394 51.0916L35.1201 45.3277C34.7536 44.9518 34.1428 44.9518 33.7763 45.3277L28.5235 50.7157C28.5235 50.7157 28.4014 50.7157 28.2792 50.7157L22.7821 44.9518L28.4013 39.3132C28.6457 39.0626 28.6457 38.812 28.4013 38.5614L22.5377 32.6723C22.5377 32.547 22.5377 32.5469 22.5377 32.4216L28.2792 26.9084C28.2792 26.9084 28.4014 26.9084 28.5235 26.9084L33.8985 32.4216C34.265 32.7975 34.8758 32.7975 35.2423 32.4216L40.8615 26.6578L46.603 32.547L40.9837 38.3108C40.6172 38.6867 40.6172 39.3133 40.9837 39.6892L46.4808 45.3277C46.4808 45.453 46.4808 45.453 46.3587 45.5783Z" })));
};
