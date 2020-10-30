!(function () {
  "use strict";
  var r = {
      14: function (r, e, n) {
        r.exports = (async () => {
          function r(r, e, n, t, o, u, i) {
            try {
              var a = r[u](i),
                c = a.value;
            } catch (r) {
              return void n(r);
            }
            a.done ? e(c) : Promise.resolve(c).then(t, o);
          }
          function t(e) {
            return function () {
              var n = this,
                t = arguments;
              return new Promise(function (o, u) {
                var i = e.apply(n, t);
                function a(e) {
                  r(i, o, u, a, c, "next", e);
                }
                function c(e) {
                  r(i, o, u, a, c, "throw", e);
                }
                a(void 0);
              });
            };
          }
          n.d(e, {
            R: function () {
              return u;
            },
          });
          var o = await Promise.resolve(1);
          function u() {
            return i.apply(this, arguments);
          }
          function i() {
            return (i = t(
              regeneratorRuntime.mark(function r() {
                var e, n;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = function () {
                            return (n = t(
                              regeneratorRuntime.mark(function r() {
                                return regeneratorRuntime.wrap(function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (r.next = 2), Promise.resolve(2);
                                      case 2:
                                        return r.abrupt("return", r.sent);
                                      case 3:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                              })
                            )).apply(this, arguments);
                          }),
                          (e = function () {
                            return n.apply(this, arguments);
                          }),
                          (r.next = 4),
                          e()
                        );
                      case 4:
                        return r.abrupt("return", r.sent);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )).apply(this, arguments);
          }
          return (e.Z = o), e;
        })();
      },
      579: function (r, e, n) {
        r.exports = (async () => {
          var r = n(14);
          (r = await Promise.resolve(r)),
            console.log(r.Z),
            console.log(await (0, r.R)());
        })();
      },
    },
    e = {};
  function n(t) {
    if (e[t]) return e[t].exports;
    var o = (e[t] = { exports: {} });
    return r[t](o, o.exports, n), o.exports;
  }
  (n.d = function (r, e) {
    for (var t in e)
      n.o(e, t) &&
        !n.o(r, t) &&
        Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
  }),
    (n.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    n(579);
})();
