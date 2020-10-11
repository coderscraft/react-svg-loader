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

var _schemaUtils = require("schema-utils");

var _pluginTransformReactConstantElements = _interopRequireDefault(require("@babel/plugin-transform-react-constant-elements"));

var _schema = _interopRequireDefault(require("./static/schema.json"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n     export const ", " = (", ") => ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconEl = {};
var configuration = {
  name: 'SVG Icon Loader'
};

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
    var options, mapping, defaultSetting, dict, dom, doc, icons, reducer, promises, response, finalCode, _yield$transformAsync, code;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = (0, _loaderUtils.getOptions)(this);
            (0, _schemaUtils.validate)(_schema["default"], options, configuration);
            mapping = options.mapping, defaultSetting = options.defaultSetting;
            dict = buildDict(mapping);
            dom = new _jsdom.JSDOM(source, {
              contentType: 'text/xml'
            });
            doc = dom.window.document;
            doc.querySelectorAll('g').forEach(function (el) {
              var result = el.outerHTML.toString();
              var elId = el.getAttribute('id');

              if (elId) {
                if (dict[elId]) {
                  if (defaultSetting) {
                    var parseIcon = defaultSetting.parseIcon;

                    if (parseIcon) {
                      result = parseIcon(el.outerHTML.toString());
                    }
                  }

                  iconEl[dict[elId]] = result;
                }
              }
            });
            icons = Object.keys(iconEl);

            reducer = function reducer(accumulator, currentValue) {
              return "".concat(accumulator, " ").concat(currentValue);
            };

            promises = icons.map(function (icon) {
              return buildSvg(icon, doc, defaultSetting);
            });
            _context.next = 12;
            return Promise.all(promises);

          case 12:
            response = _context.sent;
            finalCode = response.reduce(reducer, 'import React from "react";');
            _context.next = 16;
            return (0, _core2.transformAsync)(finalCode, babelOptions);

          case 16:
            _yield$transformAsync = _context.sent;
            code = _yield$transformAsync.code;
            return _context.abrupt("return", code);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _svgLoader.apply(this, arguments);
}

function buildSvg(_x2, _x3, _x4) {
  return _buildSvg.apply(this, arguments);
}

function _buildSvg() {
  _buildSvg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(icon, doc, defaultSetting) {
    var svgAttributes, el, svg, svgCode, jsCode;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            svgAttributes = defaultSetting.svgAttributes;
            el = iconEl[icon];
            svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');

            if (svgAttributes && svgAttributes.length > 0) {
              svgAttributes.forEach(function (attr) {
                return svg.setAttribute(attr.key, attr.value);
              });
            }

            svg.innerHTML = el;
            svgCode = svg.outerHTML.toString();
            _context2.next = 8;
            return (0, _core["default"])(svgCode, {
              template: template1
            }, {
              componentName: icon
            });

          case 8:
            jsCode = _context2.sent;
            return _context2.abrupt("return", jsCode);

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkZXIudHMiXSwibmFtZXMiOlsiaWNvbkVsIiwiY29uZmlndXJhdGlvbiIsIm5hbWUiLCJidWlsZERpY3QiLCJtYXBwaW5nIiwiZGljdCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJiYWJlbE9wdGlvbnMiLCJiYWJlbHJjIiwiY29uZmlnRmlsZSIsInByZXNldHMiLCJwcmVzZXRSZWFjdCIsInR5cGUiLCJwcmVzZXRFbnYiLCJtb2R1bGVzIiwicGx1Z2lucyIsInBsdWdpblRyYW5zZm9ybVJlYWN0Q29uc3RhbnRFbGVtZW50cyIsInRlbXBsYXRlMSIsIm9wdHMiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudE5hbWUiLCJwcm9wcyIsImpzeCIsImFzdCIsInN2Z0xvYWRlciIsInNvdXJjZSIsIm9wdGlvbnMiLCJzY2hlbWEiLCJkZWZhdWx0U2V0dGluZyIsImRvbSIsIkpTRE9NIiwiY29udGVudFR5cGUiLCJkb2MiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsInJlc3VsdCIsIm91dGVySFRNTCIsInRvU3RyaW5nIiwiZWxJZCIsImdldEF0dHJpYnV0ZSIsInBhcnNlSWNvbiIsImljb25zIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZXIiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsInByb21pc2VzIiwibWFwIiwiaWNvbiIsImJ1aWxkU3ZnIiwiUHJvbWlzZSIsImFsbCIsInJlc3BvbnNlIiwiZmluYWxDb2RlIiwicmVkdWNlIiwiY29kZSIsInN2Z0F0dHJpYnV0ZXMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJsZW5ndGgiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJzdmdDb2RlIiwianNDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7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LE1BQWQsR0FBdUIsQ0FBNUMsRUFBK0M7QUFDN0NILGNBQUFBLGFBQWEsQ0FBQ3ZELE9BQWQsQ0FBc0IsVUFBQTJELElBQUk7QUFBQSx1QkFBSUgsR0FBRyxDQUFDSSxZQUFKLENBQWlCRCxJQUFJLENBQUNFLEdBQXRCLEVBQTJCRixJQUFJLENBQUNHLEtBQWhDLENBQUo7QUFBQSxlQUExQjtBQUNEOztBQUNETixZQUFBQSxHQUFHLENBQUNPLFNBQUosR0FBZ0IvQixFQUFoQjtBQUNNZ0MsWUFBQUEsT0FSUixHQVFrQlIsR0FBRyxDQUFDdEIsU0FBSixDQUFjQyxRQUFkLEVBUmxCO0FBQUE7QUFBQSxtQkFTdUIsc0JBQUs2QixPQUFMLEVBQWM7QUFBRWpELGNBQUFBLFFBQVEsRUFBRUY7QUFBWixhQUFkLEVBQXVDO0FBQUVHLGNBQUFBLGFBQWEsRUFBRStCO0FBQWpCLGFBQXZDLENBVHZCOztBQUFBO0FBU1FrQixZQUFBQSxNQVRSO0FBQUEsOENBVVNBLE1BVlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztlQWFlN0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdmdyIGZyb20gJ0BzdmdyL2NvcmUnXG5pbXBvcnQgeyBKU0RPTSB9IGZyb20gJ2pzZG9tJ1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJ2xvYWRlci11dGlscydcbmltcG9ydCB7IHRyYW5zZm9ybUFzeW5jLCBjcmVhdGVDb25maWdJdGVtIH0gZnJvbSAnQGJhYmVsL2NvcmUnXG5pbXBvcnQgcHJlc2V0UmVhY3QgZnJvbSAnQGJhYmVsL3ByZXNldC1yZWFjdCdcbmltcG9ydCBwcmVzZXRFbnYgZnJvbSAnQGJhYmVsL3ByZXNldC1lbnYnXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJ3NjaGVtYS11dGlscydcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJzY2hlbWEtdXRpbHMvZGVjbGFyYXRpb25zL3ZhbGlkYXRlXCI7XG5pbXBvcnQgcGx1Z2luVHJhbnNmb3JtUmVhY3RDb25zdGFudEVsZW1lbnRzIGZyb20gJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWNvbnN0YW50LWVsZW1lbnRzJ1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc3RhdGljL3NjaGVtYS5qc29uJ1xuXG5jb25zdCBpY29uRWwgOiB7IFsga2V5OiBzdHJpbmcgXSA6IHN0cmluZyB9ID0ge31cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7IG5hbWU6ICdTVkcgSWNvbiBMb2FkZXInIH1cblxuY29uc3QgYnVpbGREaWN0ID0gKG1hcHBpbmc6IGFueSkgPT4ge1xuICBjb25zdCBkaWN0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge31cbiAgbWFwcGluZy5mb3JFYWNoKChpdGVtOiB7IGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9KSA9PiB7IGRpY3RbaXRlbS5pZF0gPSBpdGVtLm5hbWV9KVxuICByZXR1cm4gZGljdFxufVxuXG5jb25zdCBiYWJlbE9wdGlvbnMgPSB7XG4gIGJhYmVscmM6IGZhbHNlLFxuICBjb25maWdGaWxlOiBmYWxzZSxcbiAgcHJlc2V0czogW1xuICAgIGNyZWF0ZUNvbmZpZ0l0ZW0ocHJlc2V0UmVhY3QsIHsgdHlwZTogJ3ByZXNldCcgfSksXG4gICAgY3JlYXRlQ29uZmlnSXRlbShbcHJlc2V0RW52LCB7IG1vZHVsZXM6IGZhbHNlIH1dLCB7IHR5cGU6ICdwcmVzZXQnIH0pLFxuICBdLFxuICBwbHVnaW5zOiBbY3JlYXRlQ29uZmlnSXRlbShwbHVnaW5UcmFuc2Zvcm1SZWFjdENvbnN0YW50RWxlbWVudHMpXSxcbn1cblxuZnVuY3Rpb24gdGVtcGxhdGUxKFxuICB7IHRlbXBsYXRlIH06IHsgdGVtcGxhdGU6IGFueSB9LFxuICBvcHRzOiBzdHJpbmcsXG4gIHsgY29tcG9uZW50TmFtZSwgcHJvcHMsIGpzeCB9OiB7Y29tcG9uZW50TmFtZTogc3RyaW5nLCBwcm9wczpzdHJpbmcsIGpzeDogc3RyaW5nIH1cbikge1xuICByZXR1cm4gdGVtcGxhdGUuYXN0YFxuICAgICBleHBvcnQgY29uc3QgJHtjb21wb25lbnROYW1lfSA9ICgke3Byb3BzfSkgPT4gJHtqc3h9XG4gICAgYFxufVxuICBcbmFzeW5jIGZ1bmN0aW9uIHN2Z0xvYWRlcihzb3VyY2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBnZXRPcHRpb25zKHRoaXMpXG4gIHZhbGlkYXRlKHNjaGVtYSBhcyBTY2hlbWEsIG9wdGlvbnMsIGNvbmZpZ3VyYXRpb24pO1xuICBjb25zdCB7IG1hcHBpbmcsIGRlZmF1bHRTZXR0aW5nIH0gPSBvcHRpb25zO1xuICBjb25zdCBkaWN0ID0gYnVpbGREaWN0KG1hcHBpbmcpXG4gIGNvbnN0IGRvbSA9IG5ldyBKU0RPTShzb3VyY2UsIHtjb250ZW50VHlwZTogJ3RleHQveG1sJ30pXG4gIGNvbnN0IGRvYyA9IGRvbS53aW5kb3cuZG9jdW1lbnRcbiAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2cnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBlbC5vdXRlckhUTUwudG9TdHJpbmcoKVxuICAgIGNvbnN0IGVsSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICBpZiAoZWxJZCkge1xuICAgICAgaWYgKGRpY3RbZWxJZF0pIHtcbiAgICAgICAgaWYgKGRlZmF1bHRTZXR0aW5nKSB7XG4gICAgICAgICAgY29uc3QgeyBwYXJzZUljb24gfSA9IGRlZmF1bHRTZXR0aW5nXG4gICAgICAgICAgaWYgKHBhcnNlSWNvbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VJY29uKGVsLm91dGVySFRNTC50b1N0cmluZygpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpY29uRWxbZGljdFtlbElkXV0gPSByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGNvbnN0IGljb25zID0gT2JqZWN0LmtleXMoaWNvbkVsKVxuICBjb25zdCByZWR1Y2VyID0gKGFjY3VtdWxhdG9yOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKSA9PiBgJHthY2N1bXVsYXRvcn0gJHtjdXJyZW50VmFsdWV9YFxuICBjb25zdCBwcm9taXNlcyA9IGljb25zLm1hcChpY29uID0+IGJ1aWxkU3ZnKGljb24sIGRvYywgZGVmYXVsdFNldHRpbmcpKVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICBjb25zdCBmaW5hbENvZGUgPSByZXNwb25zZS5yZWR1Y2UocmVkdWNlciwgJ2ltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjsnKVxuICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHRyYW5zZm9ybUFzeW5jKGZpbmFsQ29kZSwgYmFiZWxPcHRpb25zKVxuICByZXR1cm4gY29kZVxufVxuXG5hc3luYyBmdW5jdGlvbiBidWlsZFN2ZyhpY29uOiBzdHJpbmcsIGRvYzogRG9jdW1lbnQsIGRlZmF1bHRTZXR0aW5nOiBTZXR0aW5nKSB7XG4gIGNvbnN0IHsgc3ZnQXR0cmlidXRlcyB9ID0gZGVmYXVsdFNldHRpbmdcbiAgY29uc3QgZWwgPSBpY29uRWxbaWNvbl1cbiAgY29uc3Qgc3ZnID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICBpZiAoc3ZnQXR0cmlidXRlcyAmJiBzdmdBdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICBzdmdBdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiBzdmcuc2V0QXR0cmlidXRlKGF0dHIua2V5LCBhdHRyLnZhbHVlKSlcbiAgfVxuICBzdmcuaW5uZXJIVE1MID0gZWw7XG4gIGNvbnN0IHN2Z0NvZGUgPSBzdmcub3V0ZXJIVE1MLnRvU3RyaW5nKClcbiAgY29uc3QganNDb2RlID0gYXdhaXQgc3ZncihzdmdDb2RlLCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZTEgfSwgeyBjb21wb25lbnROYW1lOiBpY29uIH0pXG4gIHJldHVybiBqc0NvZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3ZnTG9hZGVyIl19