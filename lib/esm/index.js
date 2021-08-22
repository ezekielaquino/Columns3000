var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from '@emotion/styled';
import React from 'react';
var BREAKPOINT = '720px';
export var Columns = function (_a) {
    var _b = _a.columns, columns = _b === void 0 ? 12 : _b, _c = _a.justify, justify = _c === void 0 ? 'flex-start' : _c, _d = _a.gutter, gutter = _d === void 0 ? '16px' : _d, _e = _a.breakpoint, breakpoint = _e === void 0 ? BREAKPOINT : _e, children = _a.children, rest = __rest(_a, ["columns", "justify", "gutter", "breakpoint", "children"]);
    return (React.createElement(WrapColumns, __assign({ columns: columns, justify: justify, gutter: gutter, breakpoint: breakpoint }, rest), React.Children.map(children, function (child) {
        return React.cloneElement(child, { breakpoint: breakpoint });
    })));
};
export var Column = function (_a) {
    var span = _a.span, grow = _a.grow, _b = _a.breakpoint, breakpoint = _b === void 0 ? BREAKPOINT : _b, children = _a.children, rest = __rest(_a, ["span", "grow", "breakpoint", "children"]);
    return (React.createElement(WrapColumn, __assign({ span: span, grow: grow, breakpoint: breakpoint }, rest), children));
};
var WrapColumns = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --colCount: ", ";\n  --gutter: ", ";\n  --breakpoint: ", ";\n  margin: calc(", " / -2);\n\n  @media (min-width: ", ") {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    box-sizing: border-box;\n    justify-content: ", ";\n  }\n"], ["\n  --colCount: ", ";\n  --gutter: ", ";\n  --breakpoint: ", ";\n  margin: calc(", " / -2);\n\n  @media (min-width: ", ") {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    box-sizing: border-box;\n    justify-content: ", ";\n  }\n"])), function (props) { return props.columns; }, function (props) { return props.gutter; }, function (props) { return props.breakpoint; }, function (props) { return props.gutter; }, function (props) { return props.breakpoint; }, function (props) { return props.justify; });
var WrapColumn = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: ", ";\n  box-sizing: border-box;\n  margin: calc(var(--gutter) / 2);\n\n  @media (min-width: ", ") {\n    --width: ", ";\n    flex: 0 0 var(--width);\n  }\n\n  @media (max-width: ", ") {\n    --width: 100%;\n  }\n"], ["\n  max-width: ", ";\n  box-sizing: border-box;\n  margin: calc(var(--gutter) / 2);\n\n  @media (min-width: ", ") {\n    --width: ", ";\n    flex: 0 0 var(--width);\n  }\n\n  @media (max-width: ", ") {\n    --width: 100%;\n  }\n"])), function (props) { return (props.grow ? 'unset' : 'var(--width)'); }, function (props) { return props.breakpoint; }, function (props) {
    return "calc((100% / (var(--colCount) / " + props.span + ")) - var(--gutter))";
}, function (props) { return props.breakpoint; });
var templateObject_1, templateObject_2;
