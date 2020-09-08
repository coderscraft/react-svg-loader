"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _core = _interopRequireDefault(require("@svgr/core"));

var _jsdom = require("jsdom");

var _loaderUtils = require("loader-utils");

var _core2 = require("@babel/core");

var _presetReact = _interopRequireDefault(require("@babel/preset-react"));

var _presetEnv = _interopRequireDefault(require("@babel/preset-env"));

var _pluginTransformReactConstantElements = _interopRequireDefault(require("@babel/plugin-transform-react-constant-elements"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n     export const ", " = (", ") => ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconEl = {};

var buildDict = function buildDict(mapping) {
  var dict = {};
  mapping.forEach(function (item) {
    dict[item.id] = item.name;
  });
  return dict;
};

var babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [(0, _core2.createConfigItem)(_presetReact["default"], {
    type: 'preset'
  }), (0, _core2.createConfigItem)([_presetEnv["default"], {
    modules: false
  }], {
    type: 'preset'
  })],
  plugins: [(0, _core2.createConfigItem)(_pluginTransformReactConstantElements["default"])]
};

function template1(_ref, opts, _ref2) {
  var template = _ref.template;
  var componentName = _ref2.componentName,
      props = _ref2.props,
      jsx = _ref2.jsx;
  return template.ast(_templateObject(), componentName, props, jsx);
}

function svgLoader(_x) {
  return _svgLoader.apply(this, arguments);
}

function _svgLoader() {
  _svgLoader = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(source) {
    var options, dict, dom, doc, icons, reducer, promises, response, finalCode, _yield$transformAsync, code;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = (0, _loaderUtils.getOptions)(this);
            dict = buildDict(options.mapping);
            console.log('dict - ', dict);
            dom = new _jsdom.JSDOM(source, {
              contentType: 'text/xml'
            });
            doc = dom.window.document;
            doc.querySelectorAll('g').forEach(function (el) {
              if (dict[el.getAttribute('id')]) {
                iconEl[dict[el.getAttribute('id')]] = el;
              }
            });
            console.log('iconEl - ', iconEl);
            icons = Object.keys(iconEl);

            reducer = function reducer(accumulator, currentValue) {
              return "".concat(accumulator, " ").concat(currentValue);
            };

            promises = icons.map(function (icon) {
              return buildSvg(icon, doc);
            });
            _context.next = 12;
            return Promise.all(promises);

          case 12:
            response = _context.sent;
            finalCode = response.reduce(reducer, 'import React from "react";');
            console.log('finalCode - ', finalCode);
            _context.next = 17;
            return (0, _core2.transformAsync)(finalCode, babelOptions);

          case 17:
            _yield$transformAsync = _context.sent;
            code = _yield$transformAsync.code;
            return _context.abrupt("return", code);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _svgLoader.apply(this, arguments);
}

function buildSvg(_x2, _x3) {
  return _buildSvg.apply(this, arguments);
}

function _buildSvg() {
  _buildSvg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(icon, doc) {
    var el, svg, svgCode, jsCode;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            el = iconEl[icon];
            svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 18 18');
            svg.appendChild(el);
            svgCode = svg.outerHTML.toString();
            _context2.next = 7;
            return (0, _core["default"])(svgCode, {
              template: template1
            }, {
              componentName: icon
            });

          case 7:
            jsCode = _context2.sent;
            return _context2.abrupt("return", jsCode);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _buildSvg.apply(this, arguments);
}

var _default = svgLoader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkZXIudHMiXSwibmFtZXMiOlsiaWNvbkVsIiwiYnVpbGREaWN0IiwibWFwcGluZyIsImRpY3QiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwibmFtZSIsImJhYmVsT3B0aW9ucyIsImJhYmVscmMiLCJjb25maWdGaWxlIiwicHJlc2V0cyIsInByZXNldFJlYWN0IiwidHlwZSIsInByZXNldEVudiIsIm1vZHVsZXMiLCJwbHVnaW5zIiwicGx1Z2luVHJhbnNmb3JtUmVhY3RDb25zdGFudEVsZW1lbnRzIiwidGVtcGxhdGUxIiwib3B0cyIsInRlbXBsYXRlIiwiY29tcG9uZW50TmFtZSIsInByb3BzIiwianN4IiwiYXN0Iiwic3ZnTG9hZGVyIiwic291cmNlIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJkb20iLCJKU0RPTSIsImNvbnRlbnRUeXBlIiwiZG9jIiwid2luZG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJpY29ucyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2VyIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJwcm9taXNlcyIsIm1hcCIsImljb24iLCJidWlsZFN2ZyIsIlByb21pc2UiLCJhbGwiLCJyZXNwb25zZSIsImZpbmFsQ29kZSIsInJlZHVjZSIsImNvZGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN2Z0NvZGUiLCJvdXRlckhUTUwiLCJ0b1N0cmluZyIsImpzQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQTBDLEdBQUcsRUFBbkQ7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFrQjtBQUNsQyxNQUFNQyxJQUErQixHQUFHLEVBQXhD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ekIsQ0FoQnBCO0FBaUJFZCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCdUIsU0FBNUI7QUFqQkY7QUFBQSxtQkFrQnlCLDJCQUFlQSxTQUFmLEVBQTBCNUMsWUFBMUIsQ0FsQnpCOztBQUFBO0FBQUE7QUFrQlU4QyxZQUFBQSxJQWxCVix5QkFrQlVBLElBbEJWO0FBQUEsNkNBbUJTQSxJQW5CVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBc0JlTixROzs7Ozs0RkFBZixrQkFBd0JELElBQXhCLEVBQXNDZCxHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUksWUFBQUEsRUFEUixHQUNhckMsTUFBTSxDQUFDK0MsSUFBRCxDQURuQjtBQUVRUSxZQUFBQSxHQUZSLEdBRWN0QixHQUFHLENBQUN1QixlQUFKLENBQW9CLDRCQUFwQixFQUFpRCxLQUFqRCxDQUZkO0FBR0VELFlBQUFBLEdBQUcsQ0FBQ0UsWUFBSixDQUFpQixTQUFqQixFQUE0QixXQUE1QjtBQUNBRixZQUFBQSxHQUFHLENBQUNHLFdBQUosQ0FBZ0JyQixFQUFoQjtBQUNNc0IsWUFBQUEsT0FMUixHQUtrQkosR0FBRyxDQUFDSyxTQUFKLENBQWNDLFFBQWQsRUFMbEI7QUFBQTtBQUFBLG1CQU11QixzQkFBS0YsT0FBTCxFQUFjO0FBQUV2QyxjQUFBQSxRQUFRLEVBQUVGO0FBQVosYUFBZCxFQUF1QztBQUFFRyxjQUFBQSxhQUFhLEVBQUUwQjtBQUFqQixhQUF2QyxDQU52Qjs7QUFBQTtBQU1RZSxZQUFBQSxNQU5SO0FBQUEsOENBT1NBLE1BUFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztlQVVlckMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdmdyIGZyb20gJ0BzdmdyL2NvcmUnXG5pbXBvcnQgeyBKU0RPTSB9IGZyb20gJ2pzZG9tJ1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJ2xvYWRlci11dGlscydcbmltcG9ydCB7IHRyYW5zZm9ybUFzeW5jLCBjcmVhdGVDb25maWdJdGVtIH0gZnJvbSAnQGJhYmVsL2NvcmUnXG5pbXBvcnQgcHJlc2V0UmVhY3QgZnJvbSAnQGJhYmVsL3ByZXNldC1yZWFjdCdcbmltcG9ydCBwcmVzZXRFbnYgZnJvbSAnQGJhYmVsL3ByZXNldC1lbnYnXG5pbXBvcnQgcGx1Z2luVHJhbnNmb3JtUmVhY3RDb25zdGFudEVsZW1lbnRzIGZyb20gJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWNvbnN0YW50LWVsZW1lbnRzJ1xuXG5jb25zdCBpY29uRWwgOiB7IFsga2V5OiBzdHJpbmcgXSA6IFNWR0dFbGVtZW50IH0gPSB7fVxuXG5jb25zdCBidWlsZERpY3QgPSAobWFwcGluZzogYW55KSA9PiB7XG4gIGNvbnN0IGRpY3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICBtYXBwaW5nLmZvckVhY2goKGl0ZW06IHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nIH0pID0+IHsgZGljdFtpdGVtLmlkXSA9IGl0ZW0ubmFtZX0pXG4gIHJldHVybiBkaWN0XG59XG5cbmNvbnN0IGJhYmVsT3B0aW9ucyA9IHtcbiAgYmFiZWxyYzogZmFsc2UsXG4gIGNvbmZpZ0ZpbGU6IGZhbHNlLFxuICBwcmVzZXRzOiBbXG4gICAgY3JlYXRlQ29uZmlnSXRlbShwcmVzZXRSZWFjdCwgeyB0eXBlOiAncHJlc2V0JyB9KSxcbiAgICBjcmVhdGVDb25maWdJdGVtKFtwcmVzZXRFbnYsIHsgbW9kdWxlczogZmFsc2UgfV0sIHsgdHlwZTogJ3ByZXNldCcgfSksXG4gIF0sXG4gIHBsdWdpbnM6IFtjcmVhdGVDb25maWdJdGVtKHBsdWdpblRyYW5zZm9ybVJlYWN0Q29uc3RhbnRFbGVtZW50cyldLFxufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZTEoXG4gIHsgdGVtcGxhdGUgfTogeyB0ZW1wbGF0ZTogYW55IH0sXG4gIG9wdHM6IHN0cmluZyxcbiAgeyBjb21wb25lbnROYW1lLCBwcm9wcywganN4IH06IHtjb21wb25lbnROYW1lOiBzdHJpbmcsIHByb3BzOnN0cmluZywganN4OiBzdHJpbmcgfVxuKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5hc3RgXG4gICAgIGV4cG9ydCBjb25zdCAke2NvbXBvbmVudE5hbWV9ID0gKCR7cHJvcHN9KSA9PiAke2pzeH1cbiAgICBgXG59XG4gIFxuYXN5bmMgZnVuY3Rpb24gc3ZnTG9hZGVyKHNvdXJjZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnModGhpcylcbiAgY29uc3QgZGljdCA9IGJ1aWxkRGljdChvcHRpb25zLm1hcHBpbmcpXG4gIGNvbnNvbGUubG9nKCdkaWN0IC0gJywgZGljdClcbiAgY29uc3QgZG9tID0gbmV3IEpTRE9NKHNvdXJjZSwge2NvbnRlbnRUeXBlOiAndGV4dC94bWwnfSlcbiAgY29uc3QgZG9jID0gZG9tLndpbmRvdy5kb2N1bWVudFxuICBkb2MucXVlcnlTZWxlY3RvckFsbCgnZycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGRpY3RbZWwuZ2V0QXR0cmlidXRlKCdpZCcpXSkge1xuICAgICAgaWNvbkVsW2RpY3RbZWwuZ2V0QXR0cmlidXRlKCdpZCcpXV0gPSBlbFxuICAgIH1cbiAgfSlcbiAgY29uc29sZS5sb2coJ2ljb25FbCAtICcsIGljb25FbClcbiAgY29uc3QgaWNvbnMgPSBPYmplY3Qua2V5cyhpY29uRWwpXG4gIGNvbnN0IHJlZHVjZXIgPSAoYWNjdW11bGF0b3I6IHN0cmluZywgY3VycmVudFZhbHVlOiBzdHJpbmcpID0+IGAke2FjY3VtdWxhdG9yfSAke2N1cnJlbnRWYWx1ZX1gXG4gIGNvbnN0IHByb21pc2VzID0gaWNvbnMubWFwKGljb24gPT4gYnVpbGRTdmcoaWNvbiwgZG9jKSlcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgY29uc3QgZmluYWxDb2RlID0gcmVzcG9uc2UucmVkdWNlKHJlZHVjZXIsICdpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7JylcbiAgY29uc29sZS5sb2coJ2ZpbmFsQ29kZSAtICcsIGZpbmFsQ29kZSlcbiAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB0cmFuc2Zvcm1Bc3luYyhmaW5hbENvZGUsIGJhYmVsT3B0aW9ucylcbiAgcmV0dXJuIGNvZGVcbn1cblxuYXN5bmMgZnVuY3Rpb24gYnVpbGRTdmcoaWNvbjogc3RyaW5nLCBkb2M6IERvY3VtZW50KSB7XG4gIGNvbnN0IGVsID0gaWNvbkVsW2ljb25dXG4gIGNvbnN0IHN2ZyA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMTggMTgnKVxuICBzdmcuYXBwZW5kQ2hpbGQoZWwpXG4gIGNvbnN0IHN2Z0NvZGUgPSBzdmcub3V0ZXJIVE1MLnRvU3RyaW5nKClcbiAgY29uc3QganNDb2RlID0gYXdhaXQgc3ZncihzdmdDb2RlLCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZTEgfSwgeyBjb21wb25lbnROYW1lOiBpY29uIH0pXG4gIHJldHVybiBqc0NvZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3ZnTG9hZGVyIl19