!(function () {
  "use strict";
  var r = {
      568: function (r, e) {
        r.exports = (async () => {
          let r = await Promise.resolve(1);
          for (; r < (await Promise.resolve(5)); )
            r += await Promise.resolve(1);
          return (e.Z = r), e;
        })();
      },
      138: function (r, e, o) {
        r.exports = (async () => {
          var r = o(568);
          (r = await Promise.resolve(r)), console.log(r.Z);
        })();
      },
    },
    e = {};
  !(function o(t) {
    if (e[t]) return e[t].exports;
    var s = (e[t] = { exports: {} });
    return r[t](s, s.exports, o), s.exports;
  })(138);
})();
