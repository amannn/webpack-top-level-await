!(function () {
  "use strict";
  var r = {
      568: function (r, o) {
        r.exports = (async () => ((o.Z = await Promise.resolve(1)), o))();
      },
      138: function (r, o, e) {
        r.exports = (async () => {
          var r = e(568);
          (r = await Promise.resolve(r)), console.log(r.Z);
        })();
      },
    },
    o = {};
  !(function e(t) {
    if (o[t]) return o[t].exports;
    var s = (o[t] = { exports: {} });
    return r[t](s, s.exports, e), s.exports;
  })(138);
})();
