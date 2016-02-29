define(["exports", "./fable-core.js"], function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var $M1 = _interopRequireWildcard(_fableCore);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  exports.default = function (App) {
    var Point = App.Point = function () {
      function _class($arg0, $arg1) {
        _classCallCheck(this, _class);

        this.X = $arg0;
        this.Y = $arg1;
      }

      return _class;
    }();

    var x = App.x = new Point(100, 200);
    x.X === 10 ? $M1.String.fsFormat("X=100")(function (x) {
      console.log(x);
    }) : function () {
      var clo1;
      return clo1 = $M1.String.fsFormat("%A")(function (x) {
        console.log(x);
      }), function (arg10) {
        clo1(arg10);
      };
    }()(x);
    return App;
  }({});
});
//# sourceMappingURL=app.js.map