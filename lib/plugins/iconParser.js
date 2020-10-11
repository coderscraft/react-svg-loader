"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIcon = void 0;

var convert = require('xml-js');

var parseIcon = function parseIcon(element) {
  if (element) {
    var result1 = convert.xml2js(element, {
      compact: true
    });
    delete result1["g"]['_attributes']['transform'];
    return convert.js2xml(result1, {
      compact: true
    });
  }

  return element;
};

exports.parseIcon = parseIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW5zL2ljb25QYXJzZXIudHMiXSwibmFtZXMiOlsiY29udmVydCIsInJlcXVpcmUiLCJwYXJzZUljb24iLCJlbGVtZW50IiwicmVzdWx0MSIsInhtbDJqcyIsImNvbXBhY3QiLCJqczJ4bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXJCOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBcUI7QUFDNUMsTUFBS0EsT0FBTCxFQUFlO0FBQ2IsUUFBSUMsT0FBTyxHQUFHSixPQUFPLENBQUNLLE1BQVIsQ0FBZUYsT0FBZixFQUF3QjtBQUFDRyxNQUFBQSxPQUFPLEVBQUU7QUFBVixLQUF4QixDQUFkO0FBQ0EsV0FBT0YsT0FBTyxDQUFDLEdBQUQsQ0FBUCxDQUFhLGFBQWIsRUFBNEIsV0FBNUIsQ0FBUDtBQUNBLFdBQU9KLE9BQU8sQ0FBQ08sTUFBUixDQUFlSCxPQUFmLEVBQXdCO0FBQUNFLE1BQUFBLE9BQU8sRUFBRTtBQUFWLEtBQXhCLENBQVA7QUFDRDs7QUFDRCxTQUFPSCxPQUFQO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb252ZXJ0ID0gcmVxdWlyZSgneG1sLWpzJyk7XG5cbmV4cG9ydCBjb25zdCBwYXJzZUljb24gPSAoZWxlbWVudDogU3RyaW5nKSA9PiB7XG4gIGlmICggZWxlbWVudCApIHtcbiAgICB2YXIgcmVzdWx0MSA9IGNvbnZlcnQueG1sMmpzKGVsZW1lbnQsIHtjb21wYWN0OiB0cnVlfSk7XG4gICAgZGVsZXRlIHJlc3VsdDFbXCJnXCJdWydfYXR0cmlidXRlcyddWyd0cmFuc2Zvcm0nXVxuICAgIHJldHVybiBjb252ZXJ0LmpzMnhtbChyZXN1bHQxLCB7Y29tcGFjdDogdHJ1ZX0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50XG59Il19