import { defineComponent, computed, ref, onBeforeUnmount, onMounted, watch, openBlock, createElementBlock, withModifiers, createElementVNode, unref, normalizeClass, toDisplayString, createCommentVNode, pushScopeId, popScopeId, nextTick, createTextVNode } from "vue";
var commonjsGlobal = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, lodash = { exports: {} };
!function(S, B) {
  !function() {
    var Wi, Ui = "Expected a function", Vi = "__lodash_hash_undefined__", Fi = "__lodash_placeholder__", Ni = 16, Hi = 32, $i = 64, qi = 128, Gi = 256, Ki = 1 / 0, Zi = 9007199254740991, Ji = NaN, Qi = 4294967295, tu = [["ary", qi], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", Ni], ["flip", 512], ["partial", Hi], ["partialRight", $i], ["rearg", Gi]], nu = "[object Arguments]", eu = "[object Array]", ru = "[object Boolean]", ou = "[object Date]", iu = "[object Error]", uu = "[object Function]", au = "[object GeneratorFunction]", cu = "[object Map]", fu = "[object Number]", lu = "[object Object]", su = "[object Promise]", hu = "[object RegExp]", pu = "[object Set]", du = "[object String]", vu = "[object Symbol]", gu = "[object WeakMap]", _u = "[object ArrayBuffer]", yu = "[object DataView]", wu = "[object Float32Array]", mu = "[object Float64Array]", xu = "[object Int8Array]", bu = "[object Int16Array]", Cu = "[object Int32Array]", Iu = "[object Uint8Array]", Lu = "[object Uint8ClampedArray]", Tu = "[object Uint16Array]", Du = "[object Uint32Array]", Ru = /\b__p \+= '';/g, Su = /\b(__p \+=) '' \+/g, Bu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Au = /&(?:amp|lt|gt|quot|#39);/g, Ou = /[&<>"']/g, ku = RegExp(Au.source), Eu = RegExp(Ou.source), ju = /<%-([\s\S]+?)%>/g, Mu = /<%([\s\S]+?)%>/g, Yu = /<%=([\s\S]+?)%>/g, zu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xu = /^\w*$/, Pu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wu = /[\\^$.*+?()[\]{}|]/g, Uu = RegExp(Wu.source), Vu = /^\s+/, e = /\s/, Fu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Nu = /\{\n\/\* \[wrapped with (.+)\] \*/, Hu = /,? & /, $u = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, qu = /[()=,{}\[\]\/\s]/, Gu = /\\(\\)?/g, Ku = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zu = /\w*$/, Ju = /^[-+]0x[0-9a-f]+$/i, Qu = /^0b[01]+$/i, ta = /^\[object .+?Constructor\]$/, na = /^0o[0-7]+$/i, ea = /^(?:0|[1-9]\d*)$/, ra = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, oa = /($^)/, ia = /['\n\r\u2028\u2029\\]/g, t = "\\ud800-\\udfff", n = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", r = "\\u2700-\\u27bf", o = "a-z\\xdf-\\xf6\\xf8-\\xff", i = "A-Z\\xc0-\\xd6\\xd8-\\xde", u = "\\ufe0e\\ufe0f", a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", c = "['\u2019]", f = "[" + t + "]", l = "[" + a + "]", s = "[" + n + "]", h = "[" + r + "]", p = "[" + o + "]", d = "[^" + t + a + "\\d+" + r + o + i + "]", v = "\\ud83c[\\udffb-\\udfff]", g = "[^" + t + "]", _ = "(?:\\ud83c[\\udde6-\\uddff]){2}", y = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "[" + i + "]", m = "\\u200d", x = "(?:" + p + "|" + d + ")", a = "(?:" + w + "|" + d + ")", r = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", o = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", i = "(?:" + s + "|" + v + ")?", d = "[" + u + "]?", i = d + i + ("(?:" + m + "(?:" + [g, _, y].join("|") + ")" + d + i + ")*"), h = "(?:" + [h, _, y].join("|") + ")" + i, f = "(?:" + [g + s + "?", s, _, y, f].join("|") + ")", ua = RegExp(c, "g"), aa = RegExp(s, "g"), b = RegExp(v + "(?=" + v + ")|" + f + i, "g"), ca = RegExp([w + "?" + p + "+" + r + "(?=" + [l, w, "$"].join("|") + ")", a + "+" + o + "(?=" + [l, w + x, "$"].join("|") + ")", w + "?" + x + "+" + r, w + "+" + o, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", h].join("|"), "g"), C = RegExp("[" + m + t + n + u + "]"), fa = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, la = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], sa = -1, ha = {};
    ha[wu] = ha[mu] = ha[xu] = ha[bu] = ha[Cu] = ha[Iu] = ha[Lu] = ha[Tu] = ha[Du] = true, ha[nu] = ha[eu] = ha[_u] = ha[ru] = ha[yu] = ha[ou] = ha[iu] = ha[uu] = ha[cu] = ha[fu] = ha[lu] = ha[hu] = ha[pu] = ha[du] = ha[gu] = false;
    var pa = {};
    pa[nu] = pa[eu] = pa[_u] = pa[yu] = pa[ru] = pa[ou] = pa[wu] = pa[mu] = pa[xu] = pa[bu] = pa[Cu] = pa[cu] = pa[fu] = pa[lu] = pa[hu] = pa[pu] = pa[du] = pa[vu] = pa[Iu] = pa[Lu] = pa[Tu] = pa[Du] = true, pa[iu] = pa[uu] = pa[gu] = false;
    var I = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, da = parseFloat, va = parseInt, n = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, u = typeof self == "object" && self && self.Object === Object && self, ga = n || u || Function("return this")(), u = B && !B.nodeType && B, L = u && S && !S.nodeType && S, _a = L && L.exports === u, T = _a && n.process, n = function() {
      try {
        var t2 = L && L.require && L.require("util").types;
        return t2 ? t2 : T && T.binding && T.binding("util");
      } catch (t3) {
      }
    }(), ya = n && n.isArrayBuffer, wa = n && n.isDate, ma = n && n.isMap, xa = n && n.isRegExp, ba = n && n.isSet, Ca = n && n.isTypedArray;
    function Ia(t2, n2, e2) {
      switch (e2.length) {
        case 0:
          return t2.call(n2);
        case 1:
          return t2.call(n2, e2[0]);
        case 2:
          return t2.call(n2, e2[0], e2[1]);
        case 3:
          return t2.call(n2, e2[0], e2[1], e2[2]);
      }
      return t2.apply(n2, e2);
    }
    function La(t2, n2, e2, r2) {
      for (var o2 = -1, i2 = t2 == null ? 0 : t2.length; ++o2 < i2; ) {
        var u2 = t2[o2];
        n2(r2, u2, e2(u2), t2);
      }
      return r2;
    }
    function Ta(t2, n2) {
      for (var e2 = -1, r2 = t2 == null ? 0 : t2.length; ++e2 < r2 && n2(t2[e2], e2, t2) !== false; )
        ;
      return t2;
    }
    function Da(t2, n2) {
      for (var e2 = t2 == null ? 0 : t2.length; e2-- && n2(t2[e2], e2, t2) !== false; )
        ;
      return t2;
    }
    function Ra(t2, n2) {
      for (var e2 = -1, r2 = t2 == null ? 0 : t2.length; ++e2 < r2; )
        if (!n2(t2[e2], e2, t2))
          return false;
      return true;
    }
    function Sa(t2, n2) {
      for (var e2 = -1, r2 = t2 == null ? 0 : t2.length, o2 = 0, i2 = []; ++e2 < r2; ) {
        var u2 = t2[e2];
        n2(u2, e2, t2) && (i2[o2++] = u2);
      }
      return i2;
    }
    function Ba(t2, n2) {
      return !!(t2 == null ? 0 : t2.length) && -1 < Xa(t2, n2, 0);
    }
    function Aa(t2, n2, e2) {
      for (var r2 = -1, o2 = t2 == null ? 0 : t2.length; ++r2 < o2; )
        if (e2(n2, t2[r2]))
          return true;
      return false;
    }
    function Oa(t2, n2) {
      for (var e2 = -1, r2 = t2 == null ? 0 : t2.length, o2 = Array(r2); ++e2 < r2; )
        o2[e2] = n2(t2[e2], e2, t2);
      return o2;
    }
    function ka(t2, n2) {
      for (var e2 = -1, r2 = n2.length, o2 = t2.length; ++e2 < r2; )
        t2[o2 + e2] = n2[e2];
      return t2;
    }
    function Ea(t2, n2, e2, r2) {
      var o2 = -1, i2 = t2 == null ? 0 : t2.length;
      for (r2 && i2 && (e2 = t2[++o2]); ++o2 < i2; )
        e2 = n2(e2, t2[o2], o2, t2);
      return e2;
    }
    function ja(t2, n2, e2, r2) {
      var o2 = t2 == null ? 0 : t2.length;
      for (r2 && o2 && (e2 = t2[--o2]); o2--; )
        e2 = n2(e2, t2[o2], o2, t2);
      return e2;
    }
    function Ma(t2, n2) {
      for (var e2 = -1, r2 = t2 == null ? 0 : t2.length; ++e2 < r2; )
        if (n2(t2[e2], e2, t2))
          return true;
      return false;
    }
    var D = Va("length");
    function Ya(t2, r2, n2) {
      var o2;
      return n2(t2, function(t3, n3, e2) {
        if (r2(t3, n3, e2))
          return o2 = n3, false;
      }), o2;
    }
    function za(t2, n2, e2, r2) {
      for (var o2 = t2.length, i2 = e2 + (r2 ? 1 : -1); r2 ? i2-- : ++i2 < o2; )
        if (n2(t2[i2], i2, t2))
          return i2;
      return -1;
    }
    function Xa(t2, n2, e2) {
      return n2 == n2 ? function(t3, n3, e3) {
        var r2 = e3 - 1, o2 = t3.length;
        for (; ++r2 < o2; )
          if (t3[r2] === n3)
            return r2;
        return -1;
      }(t2, n2, e2) : za(t2, Wa, e2);
    }
    function Pa(t2, n2, e2, r2) {
      for (var o2 = e2 - 1, i2 = t2.length; ++o2 < i2; )
        if (r2(t2[o2], n2))
          return o2;
      return -1;
    }
    function Wa(t2) {
      return t2 != t2;
    }
    function Ua(t2, n2) {
      var e2 = t2 == null ? 0 : t2.length;
      return e2 ? Na(t2, n2) / e2 : Ji;
    }
    function Va(n2) {
      return function(t2) {
        return t2 == null ? Wi : t2[n2];
      };
    }
    function R(n2) {
      return function(t2) {
        return n2 == null ? Wi : n2[t2];
      };
    }
    function Fa(t2, r2, o2, i2, n2) {
      return n2(t2, function(t3, n3, e2) {
        o2 = i2 ? (i2 = false, t3) : r2(o2, t3, n3, e2);
      }), o2;
    }
    function Na(t2, n2) {
      for (var e2, r2 = -1, o2 = t2.length; ++r2 < o2; ) {
        var i2 = n2(t2[r2]);
        i2 !== Wi && (e2 = e2 === Wi ? i2 : e2 + i2);
      }
      return e2;
    }
    function Ha(t2, n2) {
      for (var e2 = -1, r2 = Array(t2); ++e2 < t2; )
        r2[e2] = n2(e2);
      return r2;
    }
    function $a(t2) {
      return t2 && t2.slice(0, fc(t2) + 1).replace(Vu, "");
    }
    function qa(n2) {
      return function(t2) {
        return n2(t2);
      };
    }
    function Ga(n2, t2) {
      return Oa(t2, function(t3) {
        return n2[t3];
      });
    }
    function Ka(t2, n2) {
      return t2.has(n2);
    }
    function Za(t2, n2) {
      for (var e2 = -1, r2 = t2.length; ++e2 < r2 && -1 < Xa(n2, t2[e2], 0); )
        ;
      return e2;
    }
    function Ja(t2, n2) {
      for (var e2 = t2.length; e2-- && -1 < Xa(n2, t2[e2], 0); )
        ;
      return e2;
    }
    var Qa = R({ "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }), tc = R({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function nc(t2) {
      return "\\" + I[t2];
    }
    function ec(t2) {
      return C.test(t2);
    }
    function rc(t2) {
      var e2 = -1, r2 = Array(t2.size);
      return t2.forEach(function(t3, n2) {
        r2[++e2] = [n2, t3];
      }), r2;
    }
    function oc(n2, e2) {
      return function(t2) {
        return n2(e2(t2));
      };
    }
    function ic(t2, n2) {
      for (var e2 = -1, r2 = t2.length, o2 = 0, i2 = []; ++e2 < r2; ) {
        var u2 = t2[e2];
        u2 !== n2 && u2 !== Fi || (t2[e2] = Fi, i2[o2++] = e2);
      }
      return i2;
    }
    function uc(t2) {
      var n2 = -1, e2 = Array(t2.size);
      return t2.forEach(function(t3) {
        e2[++n2] = t3;
      }), e2;
    }
    function ac(t2) {
      return (ec(t2) ? function(t3) {
        var n2 = b.lastIndex = 0;
        for (; b.test(t3); )
          ++n2;
        return n2;
      } : D)(t2);
    }
    function cc(t2) {
      return ec(t2) ? t2.match(b) || [] : t2.split("");
    }
    function fc(t2) {
      for (var n2 = t2.length; n2-- && e.test(t2.charAt(n2)); )
        ;
      return n2;
    }
    var lc = R({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
    var sc = function t2(n2) {
      var C2 = (n2 = n2 == null ? ga : sc.defaults(ga.Object(), n2, sc.pick(ga, la))).Array, e2 = n2.Date, s2 = n2.Error, h2 = n2.Function, o2 = n2.Math, v2 = n2.Object, p2 = n2.RegExp, l2 = n2.String, y2 = n2.TypeError, i2 = C2.prototype, r2 = h2.prototype, d2 = v2.prototype, u2 = n2["__core-js_shared__"], a2 = r2.toString, w2 = d2.hasOwnProperty, c2 = 0, f2 = (Bi = /[^.]+$/.exec(u2 && u2.keys && u2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Bi : "", g2 = d2.toString, _2 = a2.call(v2), m2 = ga._, x2 = p2("^" + a2.call(w2).replace(Wu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), b2 = _a ? n2.Buffer : Wi, I2 = n2.Symbol, L2 = n2.Uint8Array, T2 = b2 ? b2.allocUnsafe : Wi, D2 = oc(v2.getPrototypeOf, v2), R2 = v2.create, S2 = d2.propertyIsEnumerable, B2 = i2.splice, A = I2 ? I2.isConcatSpreadable : Wi, O = I2 ? I2.iterator : Wi, k = I2 ? I2.toStringTag : Wi, E = function() {
        try {
          var t3 = Ue(v2, "defineProperty");
          return t3({}, "", {}), t3;
        } catch (t4) {
        }
      }(), j = n2.clearTimeout !== ga.clearTimeout && n2.clearTimeout, M = e2 && e2.now !== ga.Date.now && e2.now, Y = n2.setTimeout !== ga.setTimeout && n2.setTimeout, z = o2.ceil, X = o2.floor, P = v2.getOwnPropertySymbols, W = b2 ? b2.isBuffer : Wi, U = n2.isFinite, V = i2.join, F = oc(v2.keys, v2), N = o2.max, H = o2.min, $ = e2.now, q = n2.parseInt, G = o2.random, K = i2.reverse, Z = Ue(n2, "DataView"), J = Ue(n2, "Map"), Q = Ue(n2, "Promise"), tt = Ue(n2, "Set"), nt = Ue(n2, "WeakMap"), et = Ue(v2, "create"), rt = nt && new nt(), ot = {}, it = vr(Z), ut = vr(J), at = vr(Q), ct = vr(tt), ft = vr(nt), lt = I2 ? I2.prototype : Wi, st = lt ? lt.valueOf : Wi, ht = lt ? lt.toString : Wi;
      function pt(t3) {
        if (ko(t3) && !bo(t3) && !(t3 instanceof yt)) {
          if (t3 instanceof _t)
            return t3;
          if (w2.call(t3, "__wrapped__"))
            return gr(t3);
        }
        return new _t(t3);
      }
      var dt = function(t3) {
        if (!Oo(t3))
          return {};
        if (R2)
          return R2(t3);
        vt.prototype = t3;
        t3 = new vt();
        return vt.prototype = Wi, t3;
      };
      function vt() {
      }
      function gt() {
      }
      function _t(t3, n3) {
        this.__wrapped__ = t3, this.__actions__ = [], this.__chain__ = !!n3, this.__index__ = 0, this.__values__ = Wi;
      }
      function yt(t3) {
        this.__wrapped__ = t3, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Qi, this.__views__ = [];
      }
      function wt(t3) {
        var n3 = -1, e3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++n3 < e3; ) {
          var r3 = t3[n3];
          this.set(r3[0], r3[1]);
        }
      }
      function mt(t3) {
        var n3 = -1, e3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++n3 < e3; ) {
          var r3 = t3[n3];
          this.set(r3[0], r3[1]);
        }
      }
      function xt(t3) {
        var n3 = -1, e3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++n3 < e3; ) {
          var r3 = t3[n3];
          this.set(r3[0], r3[1]);
        }
      }
      function bt(t3) {
        var n3 = -1, e3 = t3 == null ? 0 : t3.length;
        for (this.__data__ = new xt(); ++n3 < e3; )
          this.add(t3[n3]);
      }
      function Ct(t3) {
        t3 = this.__data__ = new mt(t3);
        this.size = t3.size;
      }
      function It(t3, n3) {
        var e3, r3 = bo(t3), o3 = !r3 && xo(t3), i3 = !r3 && !o3 && To(t3), u3 = !r3 && !o3 && !i3 && Wo(t3), a3 = r3 || o3 || i3 || u3, c3 = a3 ? Ha(t3.length, l2) : [], f3 = c3.length;
        for (e3 in t3)
          !n3 && !w2.call(t3, e3) || a3 && (e3 == "length" || i3 && (e3 == "offset" || e3 == "parent") || u3 && (e3 == "buffer" || e3 == "byteLength" || e3 == "byteOffset") || Ge(e3, f3)) || c3.push(e3);
        return c3;
      }
      function Lt(t3) {
        var n3 = t3.length;
        return n3 ? t3[Cn(0, n3 - 1)] : Wi;
      }
      function Tt(t3, n3) {
        return sr(oe(t3), jt(n3, 0, t3.length));
      }
      function Dt(t3) {
        return sr(oe(t3));
      }
      function Rt(t3, n3, e3) {
        (e3 === Wi || yo(t3[n3], e3)) && (e3 !== Wi || n3 in t3) || kt(t3, n3, e3);
      }
      function St(t3, n3, e3) {
        var r3 = t3[n3];
        w2.call(t3, n3) && yo(r3, e3) && (e3 !== Wi || n3 in t3) || kt(t3, n3, e3);
      }
      function Bt(t3, n3) {
        for (var e3 = t3.length; e3--; )
          if (yo(t3[e3][0], n3))
            return e3;
        return -1;
      }
      function At(t3, r3, o3, i3) {
        return Pt(t3, function(t4, n3, e3) {
          r3(i3, t4, o3(t4), e3);
        }), i3;
      }
      function Ot(t3, n3) {
        return t3 && ie(n3, fi(n3), t3);
      }
      function kt(t3, n3, e3) {
        n3 == "__proto__" && E ? E(t3, n3, { configurable: true, enumerable: true, value: e3, writable: true }) : t3[n3] = e3;
      }
      function Et(t3, n3) {
        for (var e3 = -1, r3 = n3.length, o3 = C2(r3), i3 = t3 == null; ++e3 < r3; )
          o3[e3] = i3 ? Wi : oi(t3, n3[e3]);
        return o3;
      }
      function jt(t3, n3, e3) {
        return t3 == t3 && (e3 !== Wi && (t3 = t3 <= e3 ? t3 : e3), n3 !== Wi && (t3 = n3 <= t3 ? t3 : n3)), t3;
      }
      function Mt(e3, r3, o3, t3, n3, i3) {
        var u3, a3 = 1 & r3, c3 = 2 & r3, f3 = 4 & r3;
        if ((u3 = o3 ? n3 ? o3(e3, t3, n3, i3) : o3(e3) : u3) !== Wi)
          return u3;
        if (!Oo(e3))
          return e3;
        var l3, s3, h3 = bo(e3);
        if (h3) {
          if (u3 = function(t4) {
            var n4 = t4.length, e4 = new t4.constructor(n4);
            n4 && typeof t4[0] == "string" && w2.call(t4, "index") && (e4.index = t4.index, e4.input = t4.input);
            return e4;
          }(e3), !a3)
            return oe(e3, u3);
        } else {
          var p3 = Ne(e3), t3 = p3 == uu || p3 == au;
          if (To(e3))
            return Jn(e3, a3);
          if (p3 == lu || p3 == nu || t3 && !n3) {
            if (u3 = c3 || t3 ? {} : $e(e3), !a3)
              return c3 ? (t3 = l3 = e3, s3 = (s3 = u3) && ie(t3, li(t3), s3), ie(l3, Fe(l3), s3)) : (s3 = Ot(u3, l3 = e3), ie(l3, Ve(l3), s3));
          } else {
            if (!pa[p3])
              return n3 ? e3 : {};
            u3 = function(t4, n4, e4) {
              var r4 = t4.constructor;
              switch (n4) {
                case _u:
                  return Qn(t4);
                case ru:
                case ou:
                  return new r4(+t4);
                case yu:
                  return function(t5, n5) {
                    n5 = n5 ? Qn(t5.buffer) : t5.buffer;
                    return new t5.constructor(n5, t5.byteOffset, t5.byteLength);
                  }(t4, e4);
                case wu:
                case mu:
                case xu:
                case bu:
                case Cu:
                case Iu:
                case Lu:
                case Tu:
                case Du:
                  return te(t4, e4);
                case cu:
                  return new r4();
                case fu:
                case du:
                  return new r4(t4);
                case hu:
                  return function(t5) {
                    var n5 = new t5.constructor(t5.source, Zu.exec(t5));
                    return n5.lastIndex = t5.lastIndex, n5;
                  }(t4);
                case pu:
                  return new r4();
                case vu:
                  return function(t5) {
                    return st ? v2(st.call(t5)) : {};
                  }(t4);
              }
            }(e3, p3, a3);
          }
        }
        a3 = (i3 = i3 || new Ct()).get(e3);
        if (a3)
          return a3;
        i3.set(e3, u3), zo(e3) ? e3.forEach(function(t4) {
          u3.add(Mt(t4, r3, o3, t4, e3, i3));
        }) : Eo(e3) && e3.forEach(function(t4, n4) {
          u3.set(n4, Mt(t4, r3, o3, n4, e3, i3));
        });
        var d3 = h3 ? Wi : (f3 ? c3 ? je : Ee : c3 ? li : fi)(e3);
        return Ta(d3 || e3, function(t4, n4) {
          d3 && (t4 = e3[n4 = t4]), St(u3, n4, Mt(t4, r3, o3, n4, e3, i3));
        }), u3;
      }
      function Yt(t3, n3, e3) {
        var r3 = e3.length;
        if (t3 == null)
          return !r3;
        for (t3 = v2(t3); r3--; ) {
          var o3 = e3[r3], i3 = n3[o3], u3 = t3[o3];
          if (u3 === Wi && !(o3 in t3) || !i3(u3))
            return false;
        }
        return true;
      }
      function zt(t3, n3, e3) {
        if (typeof t3 != "function")
          throw new y2(Ui);
        return ar(function() {
          t3.apply(Wi, e3);
        }, n3);
      }
      function Xt(t3, n3, e3, r3) {
        var o3 = -1, i3 = Ba, u3 = true, a3 = t3.length, c3 = [], f3 = n3.length;
        if (!a3)
          return c3;
        e3 && (n3 = Oa(n3, qa(e3))), r3 ? (i3 = Aa, u3 = false) : 200 <= n3.length && (i3 = Ka, u3 = false, n3 = new bt(n3));
        t:
          for (; ++o3 < a3; ) {
            var l3 = t3[o3], s3 = e3 == null ? l3 : e3(l3), l3 = r3 || l3 !== 0 ? l3 : 0;
            if (u3 && s3 == s3) {
              for (var h3 = f3; h3--; )
                if (n3[h3] === s3)
                  continue t;
              c3.push(l3);
            } else
              i3(n3, s3, r3) || c3.push(l3);
          }
        return c3;
      }
      pt.templateSettings = { escape: ju, evaluate: Mu, interpolate: Yu, variable: "", imports: { _: pt } }, (pt.prototype = gt.prototype).constructor = pt, (_t.prototype = dt(gt.prototype)).constructor = _t, (yt.prototype = dt(gt.prototype)).constructor = yt, wt.prototype.clear = function() {
        this.__data__ = et ? et(null) : {}, this.size = 0;
      }, wt.prototype.delete = function(t3) {
        return t3 = this.has(t3) && delete this.__data__[t3], this.size -= t3 ? 1 : 0, t3;
      }, wt.prototype.get = function(t3) {
        var n3 = this.__data__;
        if (et) {
          var e3 = n3[t3];
          return e3 === Vi ? Wi : e3;
        }
        return w2.call(n3, t3) ? n3[t3] : Wi;
      }, wt.prototype.has = function(t3) {
        var n3 = this.__data__;
        return et ? n3[t3] !== Wi : w2.call(n3, t3);
      }, wt.prototype.set = function(t3, n3) {
        var e3 = this.__data__;
        return this.size += this.has(t3) ? 0 : 1, e3[t3] = et && n3 === Wi ? Vi : n3, this;
      }, mt.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, mt.prototype.delete = function(t3) {
        var n3 = this.__data__;
        return !((t3 = Bt(n3, t3)) < 0) && (t3 == n3.length - 1 ? n3.pop() : B2.call(n3, t3, 1), --this.size, true);
      }, mt.prototype.get = function(t3) {
        var n3 = this.__data__;
        return (t3 = Bt(n3, t3)) < 0 ? Wi : n3[t3][1];
      }, mt.prototype.has = function(t3) {
        return -1 < Bt(this.__data__, t3);
      }, mt.prototype.set = function(t3, n3) {
        var e3 = this.__data__, r3 = Bt(e3, t3);
        return r3 < 0 ? (++this.size, e3.push([t3, n3])) : e3[r3][1] = n3, this;
      }, xt.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new wt(), map: new (J || mt)(), string: new wt() };
      }, xt.prototype.delete = function(t3) {
        return t3 = Pe(this, t3).delete(t3), this.size -= t3 ? 1 : 0, t3;
      }, xt.prototype.get = function(t3) {
        return Pe(this, t3).get(t3);
      }, xt.prototype.has = function(t3) {
        return Pe(this, t3).has(t3);
      }, xt.prototype.set = function(t3, n3) {
        var e3 = Pe(this, t3), r3 = e3.size;
        return e3.set(t3, n3), this.size += e3.size == r3 ? 0 : 1, this;
      }, bt.prototype.add = bt.prototype.push = function(t3) {
        return this.__data__.set(t3, Vi), this;
      }, bt.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, Ct.prototype.clear = function() {
        this.__data__ = new mt(), this.size = 0;
      }, Ct.prototype.delete = function(t3) {
        var n3 = this.__data__, t3 = n3.delete(t3);
        return this.size = n3.size, t3;
      }, Ct.prototype.get = function(t3) {
        return this.__data__.get(t3);
      }, Ct.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, Ct.prototype.set = function(t3, n3) {
        var e3 = this.__data__;
        if (e3 instanceof mt) {
          var r3 = e3.__data__;
          if (!J || r3.length < 199)
            return r3.push([t3, n3]), this.size = ++e3.size, this;
          e3 = this.__data__ = new xt(r3);
        }
        return e3.set(t3, n3), this.size = e3.size, this;
      };
      var Pt = ce(qt), Wt = ce(Gt, true);
      function Ut(t3, r3) {
        var o3 = true;
        return Pt(t3, function(t4, n3, e3) {
          return o3 = !!r3(t4, n3, e3);
        }), o3;
      }
      function Vt(t3, n3, e3) {
        for (var r3 = -1, o3 = t3.length; ++r3 < o3; ) {
          var i3, u3, a3 = t3[r3], c3 = n3(a3);
          c3 != null && (i3 === Wi ? c3 == c3 && !Po(c3) : e3(c3, i3)) && (i3 = c3, u3 = a3);
        }
        return u3;
      }
      function Ft(t3, r3) {
        var o3 = [];
        return Pt(t3, function(t4, n3, e3) {
          r3(t4, n3, e3) && o3.push(t4);
        }), o3;
      }
      function Nt(t3, n3, e3, r3, o3) {
        var i3 = -1, u3 = t3.length;
        for (e3 = e3 || qe, o3 = o3 || []; ++i3 < u3; ) {
          var a3 = t3[i3];
          0 < n3 && e3(a3) ? 1 < n3 ? Nt(a3, n3 - 1, e3, r3, o3) : ka(o3, a3) : r3 || (o3[o3.length] = a3);
        }
        return o3;
      }
      var Ht = fe(), $t = fe(true);
      function qt(t3, n3) {
        return t3 && Ht(t3, n3, fi);
      }
      function Gt(t3, n3) {
        return t3 && $t(t3, n3, fi);
      }
      function Kt(n3, t3) {
        return Sa(t3, function(t4) {
          return So(n3[t4]);
        });
      }
      function Zt(t3, n3) {
        for (var e3 = 0, r3 = (n3 = qn(n3, t3)).length; t3 != null && e3 < r3; )
          t3 = t3[dr(n3[e3++])];
        return e3 && e3 == r3 ? t3 : Wi;
      }
      function Jt(t3, n3, e3) {
        n3 = n3(t3);
        return bo(t3) ? n3 : ka(n3, e3(t3));
      }
      function Qt(t3) {
        return t3 == null ? t3 === Wi ? "[object Undefined]" : "[object Null]" : k && k in v2(t3) ? function(t4) {
          var n3 = w2.call(t4, k), e3 = t4[k];
          try {
            t4[k] = Wi;
            var r3 = true;
          } catch (t5) {
          }
          var o3 = g2.call(t4);
          r3 && (n3 ? t4[k] = e3 : delete t4[k]);
          return o3;
        }(t3) : g2.call(t3);
      }
      function tn(t3, n3) {
        return n3 < t3;
      }
      function nn(t3, n3) {
        return t3 != null && w2.call(t3, n3);
      }
      function en(t3, n3) {
        return t3 != null && n3 in v2(t3);
      }
      function rn(t3, n3, e3) {
        for (var r3 = e3 ? Aa : Ba, o3 = t3[0].length, i3 = t3.length, u3 = i3, a3 = C2(i3), c3 = 1 / 0, f3 = []; u3--; ) {
          var l3 = t3[u3];
          u3 && n3 && (l3 = Oa(l3, qa(n3))), c3 = H(l3.length, c3), a3[u3] = !e3 && (n3 || 120 <= o3 && 120 <= l3.length) ? new bt(u3 && l3) : Wi;
        }
        var l3 = t3[0], s3 = -1, h3 = a3[0];
        t:
          for (; ++s3 < o3 && f3.length < c3; ) {
            var p3 = l3[s3], d3 = n3 ? n3(p3) : p3, p3 = e3 || p3 !== 0 ? p3 : 0;
            if (!(h3 ? Ka(h3, d3) : r3(f3, d3, e3))) {
              for (u3 = i3; --u3; ) {
                var v3 = a3[u3];
                if (!(v3 ? Ka(v3, d3) : r3(t3[u3], d3, e3)))
                  continue t;
              }
              h3 && h3.push(d3), f3.push(p3);
            }
          }
        return f3;
      }
      function on(t3, n3, e3) {
        n3 = (t3 = or(t3, n3 = qn(n3, t3))) == null ? t3 : t3[dr(Dr(n3))];
        return n3 == null ? Wi : Ia(n3, t3, e3);
      }
      function un(t3) {
        return ko(t3) && Qt(t3) == nu;
      }
      function an(t3, n3, e3, r3, o3) {
        return t3 === n3 || (t3 == null || n3 == null || !ko(t3) && !ko(n3) ? t3 != t3 && n3 != n3 : function(t4, n4, e4, r4, o4, i3) {
          var u3 = bo(t4), a3 = bo(n4), c3 = u3 ? eu : Ne(t4), f3 = a3 ? eu : Ne(n4), l3 = (c3 = c3 == nu ? lu : c3) == lu, a3 = (f3 = f3 == nu ? lu : f3) == lu, f3 = c3 == f3;
          if (f3 && To(t4)) {
            if (!To(n4))
              return false;
            l3 = !(u3 = true);
          }
          if (f3 && !l3)
            return i3 = i3 || new Ct(), u3 || Wo(t4) ? Oe(t4, n4, e4, r4, o4, i3) : function(t5, n5, e5, r5, o5, i4, u4) {
              switch (e5) {
                case yu:
                  if (t5.byteLength != n5.byteLength || t5.byteOffset != n5.byteOffset)
                    return false;
                  t5 = t5.buffer, n5 = n5.buffer;
                case _u:
                  return t5.byteLength == n5.byteLength && i4(new L2(t5), new L2(n5)) ? true : false;
                case ru:
                case ou:
                case fu:
                  return yo(+t5, +n5);
                case iu:
                  return t5.name == n5.name && t5.message == n5.message;
                case hu:
                case du:
                  return t5 == n5 + "";
                case cu:
                  var a4 = rc;
                case pu:
                  var c4 = 1 & r5;
                  if (a4 = a4 || uc, t5.size != n5.size && !c4)
                    return false;
                  c4 = u4.get(t5);
                  if (c4)
                    return c4 == n5;
                  r5 |= 2, u4.set(t5, n5);
                  a4 = Oe(a4(t5), a4(n5), r5, o5, i4, u4);
                  return u4.delete(t5), a4;
                case vu:
                  if (st)
                    return st.call(t5) == st.call(n5);
              }
              return false;
            }(t4, n4, c3, e4, r4, o4, i3);
          if (!(1 & e4)) {
            l3 = l3 && w2.call(t4, "__wrapped__"), a3 = a3 && w2.call(n4, "__wrapped__");
            if (l3 || a3) {
              l3 = l3 ? t4.value() : t4, a3 = a3 ? n4.value() : n4;
              return i3 = i3 || new Ct(), o4(l3, a3, e4, r4, i3);
            }
          }
          return f3 && (i3 = i3 || new Ct(), function(t5, n5, e5, r5, o5, i4) {
            var u4 = 1 & e5, a4 = Ee(t5), c4 = a4.length, f4 = Ee(n5).length;
            if (c4 != f4 && !u4)
              return false;
            var l4 = c4;
            for (; l4--; ) {
              var s3 = a4[l4];
              if (!(u4 ? s3 in n5 : w2.call(n5, s3)))
                return false;
            }
            var h3 = i4.get(t5), f4 = i4.get(n5);
            if (h3 && f4)
              return h3 == n5 && f4 == t5;
            var p3 = true;
            i4.set(t5, n5), i4.set(n5, t5);
            var d3 = u4;
            for (; ++l4 < c4; ) {
              s3 = a4[l4];
              var v3, g3 = t5[s3], _3 = n5[s3];
              if (!((v3 = r5 ? u4 ? r5(_3, g3, s3, n5, t5, i4) : r5(g3, _3, s3, t5, n5, i4) : v3) === Wi ? g3 === _3 || o5(g3, _3, e5, r5, i4) : v3)) {
                p3 = false;
                break;
              }
              d3 = d3 || s3 == "constructor";
            }
            p3 && !d3 && (h3 = t5.constructor, f4 = n5.constructor, h3 != f4 && "constructor" in t5 && "constructor" in n5 && !(typeof h3 == "function" && h3 instanceof h3 && typeof f4 == "function" && f4 instanceof f4) && (p3 = false));
            return i4.delete(t5), i4.delete(n5), p3;
          }(t4, n4, e4, r4, o4, i3));
        }(t3, n3, e3, r3, an, o3));
      }
      function cn(t3, n3, e3, r3) {
        var o3 = e3.length, i3 = o3, u3 = !r3;
        if (t3 == null)
          return !i3;
        for (t3 = v2(t3); o3--; ) {
          var a3 = e3[o3];
          if (u3 && a3[2] ? a3[1] !== t3[a3[0]] : !(a3[0] in t3))
            return false;
        }
        for (; ++o3 < i3; ) {
          var c3 = (a3 = e3[o3])[0], f3 = t3[c3], l3 = a3[1];
          if (u3 && a3[2]) {
            if (f3 === Wi && !(c3 in t3))
              return false;
          } else {
            var s3, h3 = new Ct();
            if (!((s3 = r3 ? r3(f3, l3, c3, t3, n3, h3) : s3) === Wi ? an(l3, f3, 3, r3, h3) : s3))
              return false;
          }
        }
        return true;
      }
      function fn(t3) {
        return !(!Oo(t3) || (n3 = t3, f2 && f2 in n3)) && (So(t3) ? x2 : ta).test(vr(t3));
        var n3;
      }
      function ln(t3) {
        return typeof t3 == "function" ? t3 : t3 == null ? Oi : typeof t3 == "object" ? bo(t3) ? gn(t3[0], t3[1]) : vn(t3) : Mi(t3);
      }
      function sn(t3) {
        if (!tr(t3))
          return F(t3);
        var n3, e3 = [];
        for (n3 in v2(t3))
          w2.call(t3, n3) && n3 != "constructor" && e3.push(n3);
        return e3;
      }
      function hn(t3) {
        if (!Oo(t3))
          return function(t4) {
            var n4 = [];
            if (t4 != null)
              for (var e4 in v2(t4))
                n4.push(e4);
            return n4;
          }(t3);
        var n3, e3 = tr(t3), r3 = [];
        for (n3 in t3)
          (n3 != "constructor" || !e3 && w2.call(t3, n3)) && r3.push(n3);
        return r3;
      }
      function pn(t3, n3) {
        return t3 < n3;
      }
      function dn(t3, r3) {
        var o3 = -1, i3 = Io(t3) ? C2(t3.length) : [];
        return Pt(t3, function(t4, n3, e3) {
          i3[++o3] = r3(t4, n3, e3);
        }), i3;
      }
      function vn(n3) {
        var e3 = We(n3);
        return e3.length == 1 && e3[0][2] ? er(e3[0][0], e3[0][1]) : function(t3) {
          return t3 === n3 || cn(t3, n3, e3);
        };
      }
      function gn(e3, r3) {
        return Ze(e3) && nr(r3) ? er(dr(e3), r3) : function(t3) {
          var n3 = oi(t3, e3);
          return n3 === Wi && n3 === r3 ? ii(t3, e3) : an(r3, n3, 3);
        };
      }
      function _n(v3, g3, _3, y3, w3) {
        v3 !== g3 && Ht(g3, function(t3, n3) {
          var e3, r3, o3, i3, u3, a3, c3, f3, l3, s3, h3, p3, d3;
          w3 = w3 || new Ct(), Oo(t3) ? (r3 = g3, i3 = _3, u3 = _n, a3 = y3, c3 = w3, h3 = ir(e3 = v3, o3 = n3), p3 = ir(r3, o3), (d3 = c3.get(p3)) ? Rt(e3, o3, d3) : (f3 = a3 ? a3(h3, p3, o3 + "", e3, r3, c3) : Wi, (l3 = f3 === Wi) && (s3 = bo(p3), d3 = !s3 && To(p3), r3 = !s3 && !d3 && Wo(p3), f3 = p3, s3 || d3 || r3 ? f3 = bo(h3) ? h3 : Lo(h3) ? oe(h3) : d3 ? Jn(p3, !(l3 = false)) : r3 ? te(p3, !(l3 = false)) : [] : Mo(p3) || xo(p3) ? xo(f3 = h3) ? f3 = Go(h3) : Oo(h3) && !So(h3) || (f3 = $e(p3)) : l3 = false), l3 && (c3.set(p3, f3), u3(f3, p3, i3, a3, c3), c3.delete(p3)), Rt(e3, o3, f3))) : (f3 = y3 ? y3(ir(v3, n3), t3, n3 + "", v3, g3, w3) : Wi, Rt(v3, n3, f3 = f3 === Wi ? t3 : f3));
        }, li);
      }
      function yn(t3, n3) {
        var e3 = t3.length;
        if (e3)
          return Ge(n3 += n3 < 0 ? e3 : 0, e3) ? t3[n3] : Wi;
      }
      function wn(t3, r3, e3) {
        r3 = r3.length ? Oa(r3, function(n3) {
          return bo(n3) ? function(t4) {
            return Zt(t4, n3.length === 1 ? n3[0] : n3);
          } : n3;
        }) : [Oi];
        var o3 = -1;
        return r3 = Oa(r3, qa(Xe())), function(t4, n3) {
          var e4 = t4.length;
          for (t4.sort(n3); e4--; )
            t4[e4] = t4[e4].value;
          return t4;
        }(dn(t3, function(n3, t4, e4) {
          return { criteria: Oa(r3, function(t5) {
            return t5(n3);
          }), index: ++o3, value: n3 };
        }), function(t4, n3) {
          return function(t5, n4, e4) {
            var r4 = -1, o4 = t5.criteria, i3 = n4.criteria, u3 = o4.length, a3 = e4.length;
            for (; ++r4 < u3; ) {
              var c3 = ne(o4[r4], i3[r4]);
              if (c3) {
                if (a3 <= r4)
                  return c3;
                var f3 = e4[r4];
                return c3 * (f3 == "desc" ? -1 : 1);
              }
            }
            return t5.index - n4.index;
          }(t4, n3, e3);
        });
      }
      function mn(t3, n3, e3) {
        for (var r3 = -1, o3 = n3.length, i3 = {}; ++r3 < o3; ) {
          var u3 = n3[r3], a3 = Zt(t3, u3);
          e3(a3, u3) && Rn(i3, qn(u3, t3), a3);
        }
        return i3;
      }
      function xn(t3, n3, e3, r3) {
        var o3 = r3 ? Pa : Xa, i3 = -1, u3 = n3.length, a3 = t3;
        for (t3 === n3 && (n3 = oe(n3)), e3 && (a3 = Oa(t3, qa(e3))); ++i3 < u3; )
          for (var c3 = 0, f3 = n3[i3], l3 = e3 ? e3(f3) : f3; -1 < (c3 = o3(a3, l3, c3, r3)); )
            a3 !== t3 && B2.call(a3, c3, 1), B2.call(t3, c3, 1);
        return t3;
      }
      function bn(t3, n3) {
        for (var e3 = t3 ? n3.length : 0, r3 = e3 - 1; e3--; ) {
          var o3, i3 = n3[e3];
          e3 != r3 && i3 === o3 || (Ge(o3 = i3) ? B2.call(t3, i3, 1) : Pn(t3, i3));
        }
        return t3;
      }
      function Cn(t3, n3) {
        return t3 + X(G() * (n3 - t3 + 1));
      }
      function In(t3, n3) {
        var e3 = "";
        if (!t3 || n3 < 1 || Zi < n3)
          return e3;
        for (; n3 % 2 && (e3 += t3), (n3 = X(n3 / 2)) && (t3 += t3), n3; )
          ;
        return e3;
      }
      function Ln(t3, n3) {
        return cr(rr(t3, n3, Oi), t3 + "");
      }
      function Tn(t3) {
        return Lt(yi(t3));
      }
      function Dn(t3, n3) {
        t3 = yi(t3);
        return sr(t3, jt(n3, 0, t3.length));
      }
      function Rn(t3, n3, e3, r3) {
        if (!Oo(t3))
          return t3;
        for (var o3 = -1, i3 = (n3 = qn(n3, t3)).length, u3 = i3 - 1, a3 = t3; a3 != null && ++o3 < i3; ) {
          var c3, f3 = dr(n3[o3]), l3 = e3;
          if (f3 === "__proto__" || f3 === "constructor" || f3 === "prototype")
            return t3;
          o3 != u3 && (c3 = a3[f3], (l3 = r3 ? r3(c3, f3, a3) : Wi) === Wi && (l3 = Oo(c3) ? c3 : Ge(n3[o3 + 1]) ? [] : {})), St(a3, f3, l3), a3 = a3[f3];
        }
        return t3;
      }
      var Sn = rt ? function(t3, n3) {
        return rt.set(t3, n3), t3;
      } : Oi, Bn = E ? function(t3, n3) {
        return E(t3, "toString", { configurable: true, enumerable: false, value: Ai(n3), writable: true });
      } : Oi;
      function An(t3) {
        return sr(yi(t3));
      }
      function On(t3, n3, e3) {
        var r3 = -1, o3 = t3.length;
        (e3 = o3 < e3 ? o3 : e3) < 0 && (e3 += o3), o3 = e3 < (n3 = n3 < 0 ? o3 < -n3 ? 0 : o3 + n3 : n3) ? 0 : e3 - n3 >>> 0, n3 >>>= 0;
        for (var i3 = C2(o3); ++r3 < o3; )
          i3[r3] = t3[r3 + n3];
        return i3;
      }
      function kn(t3, r3) {
        var o3;
        return Pt(t3, function(t4, n3, e3) {
          return !(o3 = r3(t4, n3, e3));
        }), !!o3;
      }
      function En(t3, n3, e3) {
        var r3 = 0, o3 = t3 == null ? r3 : t3.length;
        if (typeof n3 == "number" && n3 == n3 && o3 <= 2147483647) {
          for (; r3 < o3; ) {
            var i3 = r3 + o3 >>> 1, u3 = t3[i3];
            u3 !== null && !Po(u3) && (e3 ? u3 <= n3 : u3 < n3) ? r3 = 1 + i3 : o3 = i3;
          }
          return o3;
        }
        return jn(t3, n3, Oi, e3);
      }
      function jn(t3, n3, e3, r3) {
        var o3 = 0, i3 = t3 == null ? 0 : t3.length;
        if (i3 === 0)
          return 0;
        for (var u3 = (n3 = e3(n3)) != n3, a3 = n3 === null, c3 = Po(n3), f3 = n3 === Wi; o3 < i3; ) {
          var l3 = X((o3 + i3) / 2), s3 = e3(t3[l3]), h3 = s3 !== Wi, p3 = s3 === null, d3 = s3 == s3, v3 = Po(s3), s3 = u3 ? r3 || d3 : f3 ? d3 && (r3 || h3) : a3 ? d3 && h3 && (r3 || !p3) : c3 ? d3 && h3 && !p3 && (r3 || !v3) : !p3 && !v3 && (r3 ? s3 <= n3 : s3 < n3);
          s3 ? o3 = l3 + 1 : i3 = l3;
        }
        return H(i3, 4294967294);
      }
      function Mn(t3, n3) {
        for (var e3 = -1, r3 = t3.length, o3 = 0, i3 = []; ++e3 < r3; ) {
          var u3, a3 = t3[e3], c3 = n3 ? n3(a3) : a3;
          e3 && yo(c3, u3) || (u3 = c3, i3[o3++] = a3 === 0 ? 0 : a3);
        }
        return i3;
      }
      function Yn(t3) {
        return typeof t3 == "number" ? t3 : Po(t3) ? Ji : +t3;
      }
      function zn(t3) {
        if (typeof t3 == "string")
          return t3;
        if (bo(t3))
          return Oa(t3, zn) + "";
        if (Po(t3))
          return ht ? ht.call(t3) : "";
        var n3 = t3 + "";
        return n3 == "0" && 1 / t3 == -Ki ? "-0" : n3;
      }
      function Xn(t3, n3, e3) {
        var r3 = -1, o3 = Ba, i3 = t3.length, u3 = true, a3 = [], c3 = a3;
        if (e3)
          u3 = false, o3 = Aa;
        else if (200 <= i3) {
          var f3 = n3 ? null : Te(t3);
          if (f3)
            return uc(f3);
          u3 = false, o3 = Ka, c3 = new bt();
        } else
          c3 = n3 ? [] : a3;
        t:
          for (; ++r3 < i3; ) {
            var l3 = t3[r3], s3 = n3 ? n3(l3) : l3, l3 = e3 || l3 !== 0 ? l3 : 0;
            if (u3 && s3 == s3) {
              for (var h3 = c3.length; h3--; )
                if (c3[h3] === s3)
                  continue t;
              n3 && c3.push(s3), a3.push(l3);
            } else
              o3(c3, s3, e3) || (c3 !== a3 && c3.push(s3), a3.push(l3));
          }
        return a3;
      }
      function Pn(t3, n3) {
        return (t3 = or(t3, n3 = qn(n3, t3))) == null || delete t3[dr(Dr(n3))];
      }
      function Wn(t3, n3, e3, r3) {
        return Rn(t3, n3, e3(Zt(t3, n3)), r3);
      }
      function Un(t3, n3, e3, r3) {
        for (var o3 = t3.length, i3 = r3 ? o3 : -1; (r3 ? i3-- : ++i3 < o3) && n3(t3[i3], i3, t3); )
          ;
        return e3 ? On(t3, r3 ? 0 : i3, r3 ? i3 + 1 : o3) : On(t3, r3 ? i3 + 1 : 0, r3 ? o3 : i3);
      }
      function Vn(t3, n3) {
        var e3 = t3;
        return Ea(n3, function(t4, n4) {
          return n4.func.apply(n4.thisArg, ka([t4], n4.args));
        }, e3 = t3 instanceof yt ? t3.value() : e3);
      }
      function Fn(t3, n3, e3) {
        var r3 = t3.length;
        if (r3 < 2)
          return r3 ? Xn(t3[0]) : [];
        for (var o3 = -1, i3 = C2(r3); ++o3 < r3; )
          for (var u3 = t3[o3], a3 = -1; ++a3 < r3; )
            a3 != o3 && (i3[o3] = Xt(i3[o3] || u3, t3[a3], n3, e3));
        return Xn(Nt(i3, 1), n3, e3);
      }
      function Nn(t3, n3, e3) {
        for (var r3 = -1, o3 = t3.length, i3 = n3.length, u3 = {}; ++r3 < o3; ) {
          var a3 = r3 < i3 ? n3[r3] : Wi;
          e3(u3, t3[r3], a3);
        }
        return u3;
      }
      function Hn(t3) {
        return Lo(t3) ? t3 : [];
      }
      function $n(t3) {
        return typeof t3 == "function" ? t3 : Oi;
      }
      function qn(t3, n3) {
        return bo(t3) ? t3 : Ze(t3, n3) ? [t3] : pr(Ko(t3));
      }
      var Gn = Ln;
      function Kn(t3, n3, e3) {
        var r3 = t3.length;
        return e3 = e3 === Wi ? r3 : e3, !n3 && r3 <= e3 ? t3 : On(t3, n3, e3);
      }
      var Zn = j || function(t3) {
        return ga.clearTimeout(t3);
      };
      function Jn(t3, n3) {
        if (n3)
          return t3.slice();
        n3 = t3.length, n3 = T2 ? T2(n3) : new t3.constructor(n3);
        return t3.copy(n3), n3;
      }
      function Qn(t3) {
        var n3 = new t3.constructor(t3.byteLength);
        return new L2(n3).set(new L2(t3)), n3;
      }
      function te(t3, n3) {
        n3 = n3 ? Qn(t3.buffer) : t3.buffer;
        return new t3.constructor(n3, t3.byteOffset, t3.length);
      }
      function ne(t3, n3) {
        if (t3 !== n3) {
          var e3 = t3 !== Wi, r3 = t3 === null, o3 = t3 == t3, i3 = Po(t3), u3 = n3 !== Wi, a3 = n3 === null, c3 = n3 == n3, f3 = Po(n3);
          if (!a3 && !f3 && !i3 && n3 < t3 || i3 && u3 && c3 && !a3 && !f3 || r3 && u3 && c3 || !e3 && c3 || !o3)
            return 1;
          if (!r3 && !i3 && !f3 && t3 < n3 || f3 && e3 && o3 && !r3 && !i3 || a3 && e3 && o3 || !u3 && o3 || !c3)
            return -1;
        }
        return 0;
      }
      function ee(t3, n3, e3, r3) {
        for (var o3 = -1, i3 = t3.length, u3 = e3.length, a3 = -1, c3 = n3.length, f3 = N(i3 - u3, 0), l3 = C2(c3 + f3), s3 = !r3; ++a3 < c3; )
          l3[a3] = n3[a3];
        for (; ++o3 < u3; )
          (s3 || o3 < i3) && (l3[e3[o3]] = t3[o3]);
        for (; f3--; )
          l3[a3++] = t3[o3++];
        return l3;
      }
      function re(t3, n3, e3, r3) {
        for (var o3 = -1, i3 = t3.length, u3 = -1, a3 = e3.length, c3 = -1, f3 = n3.length, l3 = N(i3 - a3, 0), s3 = C2(l3 + f3), h3 = !r3; ++o3 < l3; )
          s3[o3] = t3[o3];
        for (var p3 = o3; ++c3 < f3; )
          s3[p3 + c3] = n3[c3];
        for (; ++u3 < a3; )
          (h3 || o3 < i3) && (s3[p3 + e3[u3]] = t3[o3++]);
        return s3;
      }
      function oe(t3, n3) {
        var e3 = -1, r3 = t3.length;
        for (n3 = n3 || C2(r3); ++e3 < r3; )
          n3[e3] = t3[e3];
        return n3;
      }
      function ie(t3, n3, e3, r3) {
        var o3 = !e3;
        e3 = e3 || {};
        for (var i3 = -1, u3 = n3.length; ++i3 < u3; ) {
          var a3 = n3[i3], c3 = r3 ? r3(e3[a3], t3[a3], a3, e3, t3) : Wi;
          (o3 ? kt : St)(e3, a3, c3 = c3 === Wi ? t3[a3] : c3);
        }
        return e3;
      }
      function ue(o3, i3) {
        return function(t3, n3) {
          var e3 = bo(t3) ? La : At, r3 = i3 ? i3() : {};
          return e3(t3, o3, Xe(n3, 2), r3);
        };
      }
      function ae(a3) {
        return Ln(function(t3, n3) {
          var e3 = -1, r3 = n3.length, o3 = 1 < r3 ? n3[r3 - 1] : Wi, i3 = 2 < r3 ? n3[2] : Wi, o3 = 3 < a3.length && typeof o3 == "function" ? (r3--, o3) : Wi;
          for (i3 && Ke(n3[0], n3[1], i3) && (o3 = r3 < 3 ? Wi : o3, r3 = 1), t3 = v2(t3); ++e3 < r3; ) {
            var u3 = n3[e3];
            u3 && a3(t3, u3, e3, o3);
          }
          return t3;
        });
      }
      function ce(i3, u3) {
        return function(t3, n3) {
          if (t3 == null)
            return t3;
          if (!Io(t3))
            return i3(t3, n3);
          for (var e3 = t3.length, r3 = u3 ? e3 : -1, o3 = v2(t3); (u3 ? r3-- : ++r3 < e3) && n3(o3[r3], r3, o3) !== false; )
            ;
          return t3;
        };
      }
      function fe(c3) {
        return function(t3, n3, e3) {
          for (var r3 = -1, o3 = v2(t3), i3 = e3(t3), u3 = i3.length; u3--; ) {
            var a3 = i3[c3 ? u3 : ++r3];
            if (n3(o3[a3], a3, o3) === false)
              break;
          }
          return t3;
        };
      }
      function le(r3) {
        return function(t3) {
          var n3 = ec(t3 = Ko(t3)) ? cc(t3) : Wi, e3 = n3 ? n3[0] : t3.charAt(0), t3 = n3 ? Kn(n3, 1).join("") : t3.slice(1);
          return e3[r3]() + t3;
        };
      }
      function se(n3) {
        return function(t3) {
          return Ea(Ri(xi(t3).replace(ua, "")), n3, "");
        };
      }
      function he(r3) {
        return function() {
          var t3 = arguments;
          switch (t3.length) {
            case 0:
              return new r3();
            case 1:
              return new r3(t3[0]);
            case 2:
              return new r3(t3[0], t3[1]);
            case 3:
              return new r3(t3[0], t3[1], t3[2]);
            case 4:
              return new r3(t3[0], t3[1], t3[2], t3[3]);
            case 5:
              return new r3(t3[0], t3[1], t3[2], t3[3], t3[4]);
            case 6:
              return new r3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
            case 7:
              return new r3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5], t3[6]);
          }
          var n3 = dt(r3.prototype), e3 = r3.apply(n3, t3);
          return Oo(e3) ? e3 : n3;
        };
      }
      function pe(i3, u3, a3) {
        var c3 = he(i3);
        return function t3() {
          for (var n3 = arguments.length, e3 = C2(n3), r3 = n3, o3 = ze(t3); r3--; )
            e3[r3] = arguments[r3];
          o3 = n3 < 3 && e3[0] !== o3 && e3[n3 - 1] !== o3 ? [] : ic(e3, o3);
          return (n3 -= o3.length) < a3 ? Ie(i3, u3, ge, t3.placeholder, Wi, e3, o3, Wi, Wi, a3 - n3) : Ia(this && this !== ga && this instanceof t3 ? c3 : i3, this, e3);
        };
      }
      function de(i3) {
        return function(t3, n3, e3) {
          var r3, o3 = v2(t3);
          Io(t3) || (r3 = Xe(n3, 3), t3 = fi(t3), n3 = function(t4) {
            return r3(o3[t4], t4, o3);
          });
          e3 = i3(t3, n3, e3);
          return -1 < e3 ? o3[r3 ? t3[e3] : e3] : Wi;
        };
      }
      function ve(c3) {
        return ke(function(o3) {
          var i3 = o3.length, t3 = i3, n3 = _t.prototype.thru;
          for (c3 && o3.reverse(); t3--; ) {
            var e3 = o3[t3];
            if (typeof e3 != "function")
              throw new y2(Ui);
            n3 && !a3 && Ye(e3) == "wrapper" && (a3 = new _t([], true));
          }
          for (t3 = a3 ? t3 : i3; ++t3 < i3; )
            var r3 = Ye(e3 = o3[t3]), u3 = r3 == "wrapper" ? Me(e3) : Wi, a3 = u3 && Je(u3[0]) && u3[1] == 424 && !u3[4].length && u3[9] == 1 ? a3[Ye(u3[0])].apply(a3, u3[3]) : e3.length == 1 && Je(e3) ? a3[r3]() : a3.thru(e3);
          return function() {
            var t4 = arguments, n4 = t4[0];
            if (a3 && t4.length == 1 && bo(n4))
              return a3.plant(n4).value();
            for (var e4 = 0, r4 = i3 ? o3[e4].apply(this, t4) : n4; ++e4 < i3; )
              r4 = o3[e4].call(this, r4);
            return r4;
          };
        });
      }
      function ge(a3, c3, f3, l3, s3, h3, p3, d3, v3, g3) {
        var _3 = c3 & qi, y3 = 1 & c3, w3 = 2 & c3, m3 = 24 & c3, x3 = 512 & c3, b3 = w3 ? Wi : he(a3);
        return function t3() {
          for (var n3, e3 = C2(u3 = arguments.length), r3 = u3; r3--; )
            e3[r3] = arguments[r3];
          if (m3 && (n3 = function(t4, n4) {
            for (var e4 = t4.length, r4 = 0; e4--; )
              t4[e4] === n4 && ++r4;
            return r4;
          }(e3, i3 = ze(t3))), l3 && (e3 = ee(e3, l3, s3, m3)), h3 && (e3 = re(e3, h3, p3, m3)), u3 -= n3, m3 && u3 < g3) {
            var o3 = ic(e3, i3);
            return Ie(a3, c3, ge, t3.placeholder, f3, e3, o3, d3, v3, g3 - u3);
          }
          var i3 = y3 ? f3 : this, o3 = w3 ? i3[a3] : a3, u3 = e3.length;
          return d3 ? e3 = function(t4, n4) {
            for (var e4 = t4.length, r4 = H(n4.length, e4), o4 = oe(t4); r4--; ) {
              var i4 = n4[r4];
              t4[r4] = Ge(i4, e4) ? o4[i4] : Wi;
            }
            return t4;
          }(e3, d3) : x3 && 1 < u3 && e3.reverse(), _3 && v3 < u3 && (e3.length = v3), (o3 = this && this !== ga && this instanceof t3 ? b3 || he(o3) : o3).apply(i3, e3);
        };
      }
      function _e(e3, u3) {
        return function(t3, n3) {
          return t3 = t3, r3 = e3, o3 = u3(n3), i3 = {}, qt(t3, function(t4, n4, e4) {
            r3(i3, o3(t4), n4, e4);
          }), i3;
          var r3, o3, i3;
        };
      }
      function ye(r3, o3) {
        return function(t3, n3) {
          var e3;
          if (t3 === Wi && n3 === Wi)
            return o3;
          if (t3 !== Wi && (e3 = t3), n3 !== Wi) {
            if (e3 === Wi)
              return n3;
            n3 = typeof t3 == "string" || typeof n3 == "string" ? (t3 = zn(t3), zn(n3)) : (t3 = Yn(t3), Yn(n3)), e3 = r3(t3, n3);
          }
          return e3;
        };
      }
      function we(r3) {
        return ke(function(t3) {
          return t3 = Oa(t3, qa(Xe())), Ln(function(n3) {
            var e3 = this;
            return r3(t3, function(t4) {
              return Ia(t4, e3, n3);
            });
          });
        });
      }
      function me(t3, n3) {
        var e3 = (n3 = n3 === Wi ? " " : zn(n3)).length;
        if (e3 < 2)
          return e3 ? In(n3, t3) : n3;
        e3 = In(n3, z(t3 / ac(n3)));
        return ec(n3) ? Kn(cc(e3), 0, t3).join("") : e3.slice(0, t3);
      }
      function xe(a3, t3, c3, f3) {
        var l3 = 1 & t3, s3 = he(a3);
        return function t4() {
          for (var n3 = -1, e3 = arguments.length, r3 = -1, o3 = f3.length, i3 = C2(o3 + e3), u3 = this && this !== ga && this instanceof t4 ? s3 : a3; ++r3 < o3; )
            i3[r3] = f3[r3];
          for (; e3--; )
            i3[r3++] = arguments[++n3];
          return Ia(u3, l3 ? c3 : this, i3);
        };
      }
      function be(r3) {
        return function(t3, n3, e3) {
          return e3 && typeof e3 != "number" && Ke(t3, n3, e3) && (n3 = e3 = Wi), t3 = No(t3), n3 === Wi ? (n3 = t3, t3 = 0) : n3 = No(n3), function(t4, n4, e4, r4) {
            for (var o3 = -1, i3 = N(z((n4 - t4) / (e4 || 1)), 0), u3 = C2(i3); i3--; )
              u3[r4 ? i3 : ++o3] = t4, t4 += e4;
            return u3;
          }(t3, n3, e3 = e3 === Wi ? t3 < n3 ? 1 : -1 : No(e3), r3);
        };
      }
      function Ce(e3) {
        return function(t3, n3) {
          return typeof t3 == "string" && typeof n3 == "string" || (t3 = qo(t3), n3 = qo(n3)), e3(t3, n3);
        };
      }
      function Ie(t3, n3, e3, r3, o3, i3, u3, a3, c3, f3) {
        var l3 = 8 & n3;
        n3 |= l3 ? Hi : $i, 4 & (n3 &= ~(l3 ? $i : Hi)) || (n3 &= -4);
        f3 = [t3, n3, o3, l3 ? i3 : Wi, l3 ? u3 : Wi, l3 ? Wi : i3, l3 ? Wi : u3, a3, c3, f3], e3 = e3.apply(Wi, f3);
        return Je(t3) && ur(e3, f3), e3.placeholder = r3, fr(e3, t3, n3);
      }
      function Le(t3) {
        var r3 = o2[t3];
        return function(t4, n3) {
          if (t4 = qo(t4), (n3 = n3 == null ? 0 : H(Ho(n3), 292)) && U(t4)) {
            var e3 = (Ko(t4) + "e").split("e");
            return +((e3 = (Ko(r3(e3[0] + "e" + (+e3[1] + n3))) + "e").split("e"))[0] + "e" + (+e3[1] - n3));
          }
          return r3(t4);
        };
      }
      var Te = tt && 1 / uc(new tt([, -0]))[1] == Ki ? function(t3) {
        return new tt(t3);
      } : ji;
      function De(i3) {
        return function(t3) {
          var n3, e3, r3, o3 = Ne(t3);
          return o3 == cu ? rc(t3) : o3 == pu ? (o3 = t3, n3 = -1, e3 = Array(o3.size), o3.forEach(function(t4) {
            e3[++n3] = [t4, t4];
          }), e3) : Oa(i3(r3 = t3), function(t4) {
            return [t4, r3[t4]];
          });
        };
      }
      function Re(t3, n3, e3, r3, o3, i3, u3, a3) {
        var c3 = 2 & n3;
        if (!c3 && typeof t3 != "function")
          throw new y2(Ui);
        var f3, l3, s3 = r3 ? r3.length : 0;
        s3 || (n3 &= -97, r3 = o3 = Wi), u3 = u3 === Wi ? u3 : N(Ho(u3), 0), a3 = a3 === Wi ? a3 : Ho(a3), s3 -= o3 ? o3.length : 0, n3 & $i && (f3 = r3, l3 = o3, r3 = o3 = Wi);
        var h3, p3, d3, v3, g3 = c3 ? Wi : Me(t3), u3 = [t3, n3, e3, r3, o3, f3, l3, i3, u3, a3];
        g3 && function(t4, n4) {
          var e4 = t4[1], r4 = n4[1], o4 = e4 | r4, i4 = o4 < 131, u4 = r4 == qi && e4 == 8 || r4 == qi && e4 == Gi && t4[7].length <= n4[8] || r4 == 384 && n4[7].length <= n4[8] && e4 == 8;
          if (!i4 && !u4)
            return;
          1 & r4 && (t4[2] = n4[2], o4 |= 1 & e4 ? 0 : 4);
          e4 = n4[3];
          {
            var a4;
            e4 && (a4 = t4[3], t4[3] = a4 ? ee(a4, e4, n4[4]) : e4, t4[4] = a4 ? ic(t4[3], Fi) : n4[4]);
          }
          (e4 = n4[5]) && (a4 = t4[5], t4[5] = a4 ? re(a4, e4, n4[6]) : e4, t4[6] = a4 ? ic(t4[5], Fi) : n4[6]);
          (e4 = n4[7]) && (t4[7] = e4);
          r4 & qi && (t4[8] = t4[8] == null ? n4[8] : H(t4[8], n4[8]));
          t4[9] == null && (t4[9] = n4[9]);
          t4[0] = n4[0], t4[1] = o4;
        }(u3, g3), t3 = u3[0], n3 = u3[1], e3 = u3[2], r3 = u3[3], o3 = u3[4], !(a3 = u3[9] = u3[9] === Wi ? c3 ? 0 : t3.length : N(u3[9] - s3, 0)) && 24 & n3 && (n3 &= -25);
        e3 = n3 && n3 != 1 ? n3 == 8 || n3 == Ni ? pe(t3, n3, a3) : n3 != Hi && n3 != 33 || o3.length ? ge.apply(Wi, u3) : xe(t3, n3, e3, r3) : (p3 = e3, d3 = 1 & n3, v3 = he(h3 = t3), function t4() {
          return (this && this !== ga && this instanceof t4 ? v3 : h3).apply(d3 ? p3 : this, arguments);
        });
        return fr((g3 ? Sn : ur)(e3, u3), t3, n3);
      }
      function Se(t3, n3, e3, r3) {
        return t3 === Wi || yo(t3, d2[e3]) && !w2.call(r3, e3) ? n3 : t3;
      }
      function Be(t3, n3, e3, r3, o3, i3) {
        return Oo(t3) && Oo(n3) && (i3.set(n3, t3), _n(t3, n3, Wi, Be, i3), i3.delete(n3)), t3;
      }
      function Ae(t3) {
        return Mo(t3) ? Wi : t3;
      }
      function Oe(t3, n3, e3, r3, o3, i3) {
        var u3 = 1 & e3, a3 = t3.length, c3 = n3.length;
        if (a3 != c3 && !(u3 && a3 < c3))
          return false;
        var f3 = i3.get(t3), c3 = i3.get(n3);
        if (f3 && c3)
          return f3 == n3 && c3 == t3;
        var l3 = -1, s3 = true, h3 = 2 & e3 ? new bt() : Wi;
        for (i3.set(t3, n3), i3.set(n3, t3); ++l3 < a3; ) {
          var p3, d3 = t3[l3], v3 = n3[l3];
          if ((p3 = r3 ? u3 ? r3(v3, d3, l3, n3, t3, i3) : r3(d3, v3, l3, t3, n3, i3) : p3) !== Wi) {
            if (p3)
              continue;
            s3 = false;
            break;
          }
          if (h3) {
            if (!Ma(n3, function(t4, n4) {
              return !Ka(h3, n4) && (d3 === t4 || o3(d3, t4, e3, r3, i3)) && h3.push(n4);
            })) {
              s3 = false;
              break;
            }
          } else if (d3 !== v3 && !o3(d3, v3, e3, r3, i3)) {
            s3 = false;
            break;
          }
        }
        return i3.delete(t3), i3.delete(n3), s3;
      }
      function ke(t3) {
        return cr(rr(t3, Wi, br), t3 + "");
      }
      function Ee(t3) {
        return Jt(t3, fi, Ve);
      }
      function je(t3) {
        return Jt(t3, li, Fe);
      }
      var Me = rt ? function(t3) {
        return rt.get(t3);
      } : ji;
      function Ye(t3) {
        for (var n3 = t3.name + "", e3 = ot[n3], r3 = w2.call(ot, n3) ? e3.length : 0; r3--; ) {
          var o3 = e3[r3], i3 = o3.func;
          if (i3 == null || i3 == t3)
            return o3.name;
        }
        return n3;
      }
      function ze(t3) {
        return (w2.call(pt, "placeholder") ? pt : t3).placeholder;
      }
      function Xe() {
        var t3 = (t3 = pt.iteratee || ki) === ki ? ln : t3;
        return arguments.length ? t3(arguments[0], arguments[1]) : t3;
      }
      function Pe(t3, n3) {
        var e3, r3 = t3.__data__;
        return ((t3 = typeof (e3 = n3)) == "string" || t3 == "number" || t3 == "symbol" || t3 == "boolean" ? e3 !== "__proto__" : e3 === null) ? r3[typeof n3 == "string" ? "string" : "hash"] : r3.map;
      }
      function We(t3) {
        for (var n3 = fi(t3), e3 = n3.length; e3--; ) {
          var r3 = n3[e3], o3 = t3[r3];
          n3[e3] = [r3, o3, nr(o3)];
        }
        return n3;
      }
      function Ue(t3, n3) {
        n3 = n3, n3 = (t3 = t3) == null ? Wi : t3[n3];
        return fn(n3) ? n3 : Wi;
      }
      var Ve = P ? function(n3) {
        return n3 == null ? [] : (n3 = v2(n3), Sa(P(n3), function(t3) {
          return S2.call(n3, t3);
        }));
      } : Yi, Fe = P ? function(t3) {
        for (var n3 = []; t3; )
          ka(n3, Ve(t3)), t3 = D2(t3);
        return n3;
      } : Yi, Ne = Qt;
      function He(t3, n3, e3) {
        for (var r3 = -1, o3 = (n3 = qn(n3, t3)).length, i3 = false; ++r3 < o3; ) {
          var u3 = dr(n3[r3]);
          if (!(i3 = t3 != null && e3(t3, u3)))
            break;
          t3 = t3[u3];
        }
        return i3 || ++r3 != o3 ? i3 : !!(o3 = t3 == null ? 0 : t3.length) && Ao(o3) && Ge(u3, o3) && (bo(t3) || xo(t3));
      }
      function $e(t3) {
        return typeof t3.constructor != "function" || tr(t3) ? {} : dt(D2(t3));
      }
      function qe(t3) {
        return bo(t3) || xo(t3) || !!(A && t3 && t3[A]);
      }
      function Ge(t3, n3) {
        var e3 = typeof t3;
        return !!(n3 = n3 == null ? Zi : n3) && (e3 == "number" || e3 != "symbol" && ea.test(t3)) && -1 < t3 && t3 % 1 == 0 && t3 < n3;
      }
      function Ke(t3, n3, e3) {
        if (Oo(e3)) {
          var r3 = typeof n3;
          return (r3 == "number" ? Io(e3) && Ge(n3, e3.length) : r3 == "string" && n3 in e3) && yo(e3[n3], t3);
        }
      }
      function Ze(t3, n3) {
        if (!bo(t3)) {
          var e3 = typeof t3;
          return e3 == "number" || e3 == "symbol" || e3 == "boolean" || t3 == null || Po(t3) || (Xu.test(t3) || !zu.test(t3) || n3 != null && t3 in v2(n3));
        }
      }
      function Je(t3) {
        var n3 = Ye(t3), e3 = pt[n3];
        if (typeof e3 == "function" && n3 in yt.prototype) {
          if (t3 === e3)
            return 1;
          e3 = Me(e3);
          return e3 && t3 === e3[0];
        }
      }
      (Z && Ne(new Z(new ArrayBuffer(1))) != yu || J && Ne(new J()) != cu || Q && Ne(Q.resolve()) != su || tt && Ne(new tt()) != pu || nt && Ne(new nt()) != gu) && (Ne = function(t3) {
        var n3 = Qt(t3), t3 = n3 == lu ? t3.constructor : Wi, t3 = t3 ? vr(t3) : "";
        if (t3)
          switch (t3) {
            case it:
              return yu;
            case ut:
              return cu;
            case at:
              return su;
            case ct:
              return pu;
            case ft:
              return gu;
          }
        return n3;
      });
      var Qe = u2 ? So : zi;
      function tr(t3) {
        var n3 = t3 && t3.constructor;
        return t3 === (typeof n3 == "function" && n3.prototype || d2);
      }
      function nr(t3) {
        return t3 == t3 && !Oo(t3);
      }
      function er(n3, e3) {
        return function(t3) {
          return t3 != null && (t3[n3] === e3 && (e3 !== Wi || n3 in v2(t3)));
        };
      }
      function rr(i3, u3, a3) {
        return u3 = N(u3 === Wi ? i3.length - 1 : u3, 0), function() {
          for (var t3 = arguments, n3 = -1, e3 = N(t3.length - u3, 0), r3 = C2(e3); ++n3 < e3; )
            r3[n3] = t3[u3 + n3];
          for (var n3 = -1, o3 = C2(u3 + 1); ++n3 < u3; )
            o3[n3] = t3[n3];
          return o3[u3] = a3(r3), Ia(i3, this, o3);
        };
      }
      function or(t3, n3) {
        return n3.length < 2 ? t3 : Zt(t3, On(n3, 0, -1));
      }
      function ir(t3, n3) {
        if ((n3 !== "constructor" || typeof t3[n3] != "function") && n3 != "__proto__")
          return t3[n3];
      }
      var ur = lr(Sn), ar = Y || function(t3, n3) {
        return ga.setTimeout(t3, n3);
      }, cr = lr(Bn);
      function fr(t3, n3, e3) {
        var r3, o3, n3 = n3 + "";
        return cr(t3, function(t4, n4) {
          var e4 = n4.length;
          if (!e4)
            return t4;
          var r4 = e4 - 1;
          return n4[r4] = (1 < e4 ? "& " : "") + n4[r4], n4 = n4.join(2 < e4 ? ", " : " "), t4.replace(Fu, "{\n/* [wrapped with " + n4 + "] */\n");
        }(n3, (r3 = (n3 = (n3 = n3).match(Nu)) ? n3[1].split(Hu) : [], o3 = e3, Ta(tu, function(t4) {
          var n4 = "_." + t4[0];
          o3 & t4[1] && !Ba(r3, n4) && r3.push(n4);
        }), r3.sort())));
      }
      function lr(e3) {
        var r3 = 0, o3 = 0;
        return function() {
          var t3 = $(), n3 = 16 - (t3 - o3);
          if (o3 = t3, 0 < n3) {
            if (800 <= ++r3)
              return arguments[0];
          } else
            r3 = 0;
          return e3.apply(Wi, arguments);
        };
      }
      function sr(t3, n3) {
        var e3 = -1, r3 = t3.length, o3 = r3 - 1;
        for (n3 = n3 === Wi ? r3 : n3; ++e3 < n3; ) {
          var i3 = Cn(e3, o3), u3 = t3[i3];
          t3[i3] = t3[e3], t3[e3] = u3;
        }
        return t3.length = n3, t3;
      }
      var hr, pr = (hr = (Xi = so(Xi = function(t3) {
        var o3 = [];
        return t3.charCodeAt(0) === 46 && o3.push(""), t3.replace(Pu, function(t4, n3, e3, r3) {
          o3.push(e3 ? r3.replace(Gu, "$1") : n3 || t4);
        }), o3;
      }, function(t3) {
        return hr.size === 500 && hr.clear(), t3;
      })).cache, Xi);
      function dr(t3) {
        if (typeof t3 == "string" || Po(t3))
          return t3;
        var n3 = t3 + "";
        return n3 == "0" && 1 / t3 == -Ki ? "-0" : n3;
      }
      function vr(t3) {
        if (t3 != null) {
          try {
            return a2.call(t3);
          } catch (t4) {
          }
          try {
            return t3 + "";
          } catch (t4) {
          }
        }
        return "";
      }
      function gr(t3) {
        if (t3 instanceof yt)
          return t3.clone();
        var n3 = new _t(t3.__wrapped__, t3.__chain__);
        return n3.__actions__ = oe(t3.__actions__), n3.__index__ = t3.__index__, n3.__values__ = t3.__values__, n3;
      }
      var _r = Ln(function(t3, n3) {
        return Lo(t3) ? Xt(t3, Nt(n3, 1, Lo, true)) : [];
      }), yr = Ln(function(t3, n3) {
        var e3 = Dr(n3);
        return Lo(e3) && (e3 = Wi), Lo(t3) ? Xt(t3, Nt(n3, 1, Lo, true), Xe(e3, 2)) : [];
      }), wr = Ln(function(t3, n3) {
        var e3 = Dr(n3);
        return Lo(e3) && (e3 = Wi), Lo(t3) ? Xt(t3, Nt(n3, 1, Lo, true), Wi, e3) : [];
      });
      function mr(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        if (!r3)
          return -1;
        e3 = e3 == null ? 0 : Ho(e3);
        return e3 < 0 && (e3 = N(r3 + e3, 0)), za(t3, Xe(n3, 3), e3);
      }
      function xr(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        if (!r3)
          return -1;
        var o3 = r3 - 1;
        return e3 !== Wi && (o3 = Ho(e3), o3 = e3 < 0 ? N(r3 + o3, 0) : H(o3, r3 - 1)), za(t3, Xe(n3, 3), o3, true);
      }
      function br(t3) {
        return (t3 == null ? 0 : t3.length) ? Nt(t3, 1) : [];
      }
      function Cr(t3) {
        return t3 && t3.length ? t3[0] : Wi;
      }
      var Ir = Ln(function(t3) {
        var n3 = Oa(t3, Hn);
        return n3.length && n3[0] === t3[0] ? rn(n3) : [];
      }), Lr = Ln(function(t3) {
        var n3 = Dr(t3), e3 = Oa(t3, Hn);
        return n3 === Dr(e3) ? n3 = Wi : e3.pop(), e3.length && e3[0] === t3[0] ? rn(e3, Xe(n3, 2)) : [];
      }), Tr = Ln(function(t3) {
        var n3 = Dr(t3), e3 = Oa(t3, Hn);
        return (n3 = typeof n3 == "function" ? n3 : Wi) && e3.pop(), e3.length && e3[0] === t3[0] ? rn(e3, Wi, n3) : [];
      });
      function Dr(t3) {
        var n3 = t3 == null ? 0 : t3.length;
        return n3 ? t3[n3 - 1] : Wi;
      }
      var Rr = Ln(Sr);
      function Sr(t3, n3) {
        return t3 && t3.length && n3 && n3.length ? xn(t3, n3) : t3;
      }
      var Br = ke(function(t3, n3) {
        var e3 = t3 == null ? 0 : t3.length, r3 = Et(t3, n3);
        return bn(t3, Oa(n3, function(t4) {
          return Ge(t4, e3) ? +t4 : t4;
        }).sort(ne)), r3;
      });
      function Ar(t3) {
        return t3 == null ? t3 : K.call(t3);
      }
      var Or = Ln(function(t3) {
        return Xn(Nt(t3, 1, Lo, true));
      }), kr = Ln(function(t3) {
        var n3 = Dr(t3);
        return Lo(n3) && (n3 = Wi), Xn(Nt(t3, 1, Lo, true), Xe(n3, 2));
      }), Er = Ln(function(t3) {
        var n3 = typeof (n3 = Dr(t3)) == "function" ? n3 : Wi;
        return Xn(Nt(t3, 1, Lo, true), Wi, n3);
      });
      function jr(n3) {
        if (!n3 || !n3.length)
          return [];
        var e3 = 0;
        return n3 = Sa(n3, function(t3) {
          return Lo(t3) && (e3 = N(t3.length, e3), 1);
        }), Ha(e3, function(t3) {
          return Oa(n3, Va(t3));
        });
      }
      function Mr(t3, n3) {
        if (!t3 || !t3.length)
          return [];
        t3 = jr(t3);
        return n3 == null ? t3 : Oa(t3, function(t4) {
          return Ia(n3, Wi, t4);
        });
      }
      var Yr = Ln(function(t3, n3) {
        return Lo(t3) ? Xt(t3, n3) : [];
      }), zr = Ln(function(t3) {
        return Fn(Sa(t3, Lo));
      }), Xr = Ln(function(t3) {
        var n3 = Dr(t3);
        return Lo(n3) && (n3 = Wi), Fn(Sa(t3, Lo), Xe(n3, 2));
      }), Pr = Ln(function(t3) {
        var n3 = typeof (n3 = Dr(t3)) == "function" ? n3 : Wi;
        return Fn(Sa(t3, Lo), Wi, n3);
      }), Wr = Ln(jr);
      var Ur = Ln(function(t3) {
        var n3 = t3.length, n3 = typeof (n3 = 1 < n3 ? t3[n3 - 1] : Wi) == "function" ? (t3.pop(), n3) : Wi;
        return Mr(t3, n3);
      });
      function Vr(t3) {
        t3 = pt(t3);
        return t3.__chain__ = true, t3;
      }
      function Fr(t3, n3) {
        return n3(t3);
      }
      var Nr = ke(function(n3) {
        function t3(t4) {
          return Et(t4, n3);
        }
        var e3 = n3.length, r3 = e3 ? n3[0] : 0, o3 = this.__wrapped__;
        return !(1 < e3 || this.__actions__.length) && o3 instanceof yt && Ge(r3) ? ((o3 = o3.slice(r3, +r3 + (e3 ? 1 : 0))).__actions__.push({ func: Fr, args: [t3], thisArg: Wi }), new _t(o3, this.__chain__).thru(function(t4) {
          return e3 && !t4.length && t4.push(Wi), t4;
        })) : this.thru(t3);
      });
      var Hr = ue(function(t3, n3, e3) {
        w2.call(t3, e3) ? ++t3[e3] : kt(t3, e3, 1);
      });
      var $r = de(mr), qr = de(xr);
      function Gr(t3, n3) {
        return (bo(t3) ? Ta : Pt)(t3, Xe(n3, 3));
      }
      function Kr(t3, n3) {
        return (bo(t3) ? Da : Wt)(t3, Xe(n3, 3));
      }
      var Zr = ue(function(t3, n3, e3) {
        w2.call(t3, e3) ? t3[e3].push(n3) : kt(t3, e3, [n3]);
      });
      var Jr = Ln(function(t3, n3, e3) {
        var r3 = -1, o3 = typeof n3 == "function", i3 = Io(t3) ? C2(t3.length) : [];
        return Pt(t3, function(t4) {
          i3[++r3] = o3 ? Ia(n3, t4, e3) : on(t4, n3, e3);
        }), i3;
      }), Qr = ue(function(t3, n3, e3) {
        kt(t3, e3, n3);
      });
      function to(t3, n3) {
        return (bo(t3) ? Oa : dn)(t3, Xe(n3, 3));
      }
      var no = ue(function(t3, n3, e3) {
        t3[e3 ? 0 : 1].push(n3);
      }, function() {
        return [[], []];
      });
      var eo = Ln(function(t3, n3) {
        if (t3 == null)
          return [];
        var e3 = n3.length;
        return 1 < e3 && Ke(t3, n3[0], n3[1]) ? n3 = [] : 2 < e3 && Ke(n3[0], n3[1], n3[2]) && (n3 = [n3[0]]), wn(t3, Nt(n3, 1), []);
      }), ro = M || function() {
        return ga.Date.now();
      };
      function oo(t3, n3, e3) {
        return n3 = e3 ? Wi : n3, n3 = t3 && n3 == null ? t3.length : n3, Re(t3, qi, Wi, Wi, Wi, Wi, n3);
      }
      function io(t3, n3) {
        var e3;
        if (typeof n3 != "function")
          throw new y2(Ui);
        return t3 = Ho(t3), function() {
          return 0 < --t3 && (e3 = n3.apply(this, arguments)), t3 <= 1 && (n3 = Wi), e3;
        };
      }
      var uo = Ln(function(t3, n3, e3) {
        var r3, o3 = 1;
        return e3.length && (r3 = ic(e3, ze(uo)), o3 |= Hi), Re(t3, o3, n3, e3, r3);
      }), ao = Ln(function(t3, n3, e3) {
        var r3, o3 = 3;
        return e3.length && (r3 = ic(e3, ze(ao)), o3 |= Hi), Re(n3, o3, t3, e3, r3);
      });
      function co(r3, e3, t3) {
        var o3, i3, u3, a3, c3, f3, l3 = 0, s3 = false, h3 = false, n3 = true;
        if (typeof r3 != "function")
          throw new y2(Ui);
        function p3(t4) {
          var n4 = o3, e4 = i3;
          return o3 = i3 = Wi, l3 = t4, a3 = r3.apply(e4, n4);
        }
        function d3(t4) {
          var n4 = t4 - f3;
          return f3 === Wi || e3 <= n4 || n4 < 0 || h3 && u3 <= t4 - l3;
        }
        function v3() {
          var t4, n4 = ro();
          if (d3(n4))
            return g3(n4);
          c3 = ar(v3, (n4 = e3 - ((t4 = n4) - f3), h3 ? H(n4, u3 - (t4 - l3)) : n4));
        }
        function g3(t4) {
          return c3 = Wi, n3 && o3 ? p3(t4) : (o3 = i3 = Wi, a3);
        }
        function _3() {
          var t4 = ro(), n4 = d3(t4);
          if (o3 = arguments, i3 = this, f3 = t4, n4) {
            if (c3 === Wi)
              return l3 = n4 = f3, c3 = ar(v3, e3), s3 ? p3(n4) : a3;
            if (h3)
              return Zn(c3), c3 = ar(v3, e3), p3(f3);
          }
          return c3 === Wi && (c3 = ar(v3, e3)), a3;
        }
        return e3 = qo(e3) || 0, Oo(t3) && (s3 = !!t3.leading, h3 = "maxWait" in t3, u3 = h3 ? N(qo(t3.maxWait) || 0, e3) : u3, n3 = "trailing" in t3 ? !!t3.trailing : n3), _3.cancel = function() {
          c3 !== Wi && Zn(c3), l3 = 0, o3 = f3 = i3 = c3 = Wi;
        }, _3.flush = function() {
          return c3 === Wi ? a3 : g3(ro());
        }, _3;
      }
      var fo = Ln(function(t3, n3) {
        return zt(t3, 1, n3);
      }), lo = Ln(function(t3, n3, e3) {
        return zt(t3, qo(n3) || 0, e3);
      });
      function so(r3, o3) {
        if (typeof r3 != "function" || o3 != null && typeof o3 != "function")
          throw new y2(Ui);
        function i3() {
          var t3 = arguments, n3 = o3 ? o3.apply(this, t3) : t3[0], e3 = i3.cache;
          return e3.has(n3) ? e3.get(n3) : (t3 = r3.apply(this, t3), i3.cache = e3.set(n3, t3) || e3, t3);
        }
        return i3.cache = new (so.Cache || xt)(), i3;
      }
      function ho(n3) {
        if (typeof n3 != "function")
          throw new y2(Ui);
        return function() {
          var t3 = arguments;
          switch (t3.length) {
            case 0:
              return !n3.call(this);
            case 1:
              return !n3.call(this, t3[0]);
            case 2:
              return !n3.call(this, t3[0], t3[1]);
            case 3:
              return !n3.call(this, t3[0], t3[1], t3[2]);
          }
          return !n3.apply(this, t3);
        };
      }
      so.Cache = xt;
      var po = Gn(function(r3, o3) {
        var i3 = (o3 = o3.length == 1 && bo(o3[0]) ? Oa(o3[0], qa(Xe())) : Oa(Nt(o3, 1), qa(Xe()))).length;
        return Ln(function(t3) {
          for (var n3 = -1, e3 = H(t3.length, i3); ++n3 < e3; )
            t3[n3] = o3[n3].call(this, t3[n3]);
          return Ia(r3, this, t3);
        });
      }), vo = Ln(function(t3, n3) {
        var e3 = ic(n3, ze(vo));
        return Re(t3, Hi, Wi, n3, e3);
      }), go = Ln(function(t3, n3) {
        var e3 = ic(n3, ze(go));
        return Re(t3, $i, Wi, n3, e3);
      }), _o = ke(function(t3, n3) {
        return Re(t3, Gi, Wi, Wi, Wi, n3);
      });
      function yo(t3, n3) {
        return t3 === n3 || t3 != t3 && n3 != n3;
      }
      var wo = Ce(tn), mo = Ce(function(t3, n3) {
        return n3 <= t3;
      }), xo = un(function() {
        return arguments;
      }()) ? un : function(t3) {
        return ko(t3) && w2.call(t3, "callee") && !S2.call(t3, "callee");
      }, bo = C2.isArray, Co = ya ? qa(ya) : function(t3) {
        return ko(t3) && Qt(t3) == _u;
      };
      function Io(t3) {
        return t3 != null && Ao(t3.length) && !So(t3);
      }
      function Lo(t3) {
        return ko(t3) && Io(t3);
      }
      var To = W || zi, Do = wa ? qa(wa) : function(t3) {
        return ko(t3) && Qt(t3) == ou;
      };
      function Ro(t3) {
        if (!ko(t3))
          return false;
        var n3 = Qt(t3);
        return n3 == iu || n3 == "[object DOMException]" || typeof t3.message == "string" && typeof t3.name == "string" && !Mo(t3);
      }
      function So(t3) {
        if (!Oo(t3))
          return false;
        t3 = Qt(t3);
        return t3 == uu || t3 == au || t3 == "[object AsyncFunction]" || t3 == "[object Proxy]";
      }
      function Bo(t3) {
        return typeof t3 == "number" && t3 == Ho(t3);
      }
      function Ao(t3) {
        return typeof t3 == "number" && -1 < t3 && t3 % 1 == 0 && t3 <= Zi;
      }
      function Oo(t3) {
        var n3 = typeof t3;
        return t3 != null && (n3 == "object" || n3 == "function");
      }
      function ko(t3) {
        return t3 != null && typeof t3 == "object";
      }
      var Eo = ma ? qa(ma) : function(t3) {
        return ko(t3) && Ne(t3) == cu;
      };
      function jo(t3) {
        return typeof t3 == "number" || ko(t3) && Qt(t3) == fu;
      }
      function Mo(t3) {
        if (!ko(t3) || Qt(t3) != lu)
          return false;
        t3 = D2(t3);
        if (t3 === null)
          return true;
        t3 = w2.call(t3, "constructor") && t3.constructor;
        return typeof t3 == "function" && t3 instanceof t3 && a2.call(t3) == _2;
      }
      var Yo = xa ? qa(xa) : function(t3) {
        return ko(t3) && Qt(t3) == hu;
      };
      var zo = ba ? qa(ba) : function(t3) {
        return ko(t3) && Ne(t3) == pu;
      };
      function Xo(t3) {
        return typeof t3 == "string" || !bo(t3) && ko(t3) && Qt(t3) == du;
      }
      function Po(t3) {
        return typeof t3 == "symbol" || ko(t3) && Qt(t3) == vu;
      }
      var Wo = Ca ? qa(Ca) : function(t3) {
        return ko(t3) && Ao(t3.length) && !!ha[Qt(t3)];
      };
      var Uo = Ce(pn), Vo = Ce(function(t3, n3) {
        return t3 <= n3;
      });
      function Fo(t3) {
        if (!t3)
          return [];
        if (Io(t3))
          return (Xo(t3) ? cc : oe)(t3);
        if (O && t3[O])
          return function(t4) {
            for (var n4, e3 = []; !(n4 = t4.next()).done; )
              e3.push(n4.value);
            return e3;
          }(t3[O]());
        var n3 = Ne(t3);
        return (n3 == cu ? rc : n3 == pu ? uc : yi)(t3);
      }
      function No(t3) {
        return t3 ? (t3 = qo(t3)) !== Ki && t3 !== -Ki ? t3 == t3 ? t3 : 0 : 17976931348623157e292 * (t3 < 0 ? -1 : 1) : t3 === 0 ? t3 : 0;
      }
      function Ho(t3) {
        var n3 = No(t3), t3 = n3 % 1;
        return n3 == n3 ? t3 ? n3 - t3 : n3 : 0;
      }
      function $o(t3) {
        return t3 ? jt(Ho(t3), 0, Qi) : 0;
      }
      function qo(t3) {
        if (typeof t3 == "number")
          return t3;
        if (Po(t3))
          return Ji;
        if (typeof (t3 = Oo(t3) ? Oo(n3 = typeof t3.valueOf == "function" ? t3.valueOf() : t3) ? n3 + "" : n3 : t3) != "string")
          return t3 === 0 ? t3 : +t3;
        t3 = $a(t3);
        var n3 = Qu.test(t3);
        return n3 || na.test(t3) ? va(t3.slice(2), n3 ? 2 : 8) : Ju.test(t3) ? Ji : +t3;
      }
      function Go(t3) {
        return ie(t3, li(t3));
      }
      function Ko(t3) {
        return t3 == null ? "" : zn(t3);
      }
      var Zo = ae(function(t3, n3) {
        if (tr(n3) || Io(n3))
          ie(n3, fi(n3), t3);
        else
          for (var e3 in n3)
            w2.call(n3, e3) && St(t3, e3, n3[e3]);
      }), Jo = ae(function(t3, n3) {
        ie(n3, li(n3), t3);
      }), Qo = ae(function(t3, n3, e3, r3) {
        ie(n3, li(n3), t3, r3);
      }), ti = ae(function(t3, n3, e3, r3) {
        ie(n3, fi(n3), t3, r3);
      }), ni = ke(Et);
      var ei = Ln(function(t3, n3) {
        t3 = v2(t3);
        var e3 = -1, r3 = n3.length, o3 = 2 < r3 ? n3[2] : Wi;
        for (o3 && Ke(n3[0], n3[1], o3) && (r3 = 1); ++e3 < r3; )
          for (var i3 = n3[e3], u3 = li(i3), a3 = -1, c3 = u3.length; ++a3 < c3; ) {
            var f3 = u3[a3], l3 = t3[f3];
            (l3 === Wi || yo(l3, d2[f3]) && !w2.call(t3, f3)) && (t3[f3] = i3[f3]);
          }
        return t3;
      }), ri = Ln(function(t3) {
        return t3.push(Wi, Be), Ia(hi, Wi, t3);
      });
      function oi(t3, n3, e3) {
        n3 = t3 == null ? Wi : Zt(t3, n3);
        return n3 === Wi ? e3 : n3;
      }
      function ii(t3, n3) {
        return t3 != null && He(t3, n3, en);
      }
      var ui = _e(function(t3, n3, e3) {
        t3[n3 = n3 != null && typeof n3.toString != "function" ? g2.call(n3) : n3] = e3;
      }, Ai(Oi)), ai = _e(function(t3, n3, e3) {
        n3 != null && typeof n3.toString != "function" && (n3 = g2.call(n3)), w2.call(t3, n3) ? t3[n3].push(e3) : t3[n3] = [e3];
      }, Xe), ci = Ln(on);
      function fi(t3) {
        return (Io(t3) ? It : sn)(t3);
      }
      function li(t3) {
        return Io(t3) ? It(t3, true) : hn(t3);
      }
      var si = ae(function(t3, n3, e3) {
        _n(t3, n3, e3);
      }), hi = ae(function(t3, n3, e3, r3) {
        _n(t3, n3, e3, r3);
      }), pi = ke(function(n3, t3) {
        var e3 = {};
        if (n3 == null)
          return e3;
        var r3 = false;
        t3 = Oa(t3, function(t4) {
          return t4 = qn(t4, n3), r3 = r3 || 1 < t4.length, t4;
        }), ie(n3, je(n3), e3), r3 && (e3 = Mt(e3, 7, Ae));
        for (var o3 = t3.length; o3--; )
          Pn(e3, t3[o3]);
        return e3;
      });
      var di = ke(function(t3, n3) {
        return t3 == null ? {} : mn(e3 = t3, n3, function(t4, n4) {
          return ii(e3, n4);
        });
        var e3;
      });
      function vi(t3, e3) {
        if (t3 == null)
          return {};
        var n3 = Oa(je(t3), function(t4) {
          return [t4];
        });
        return e3 = Xe(e3), mn(t3, n3, function(t4, n4) {
          return e3(t4, n4[0]);
        });
      }
      var gi = De(fi), _i = De(li);
      function yi(t3) {
        return t3 == null ? [] : Ga(t3, fi(t3));
      }
      var wi = se(function(t3, n3, e3) {
        return n3 = n3.toLowerCase(), t3 + (e3 ? mi(n3) : n3);
      });
      function mi(t3) {
        return Di(Ko(t3).toLowerCase());
      }
      function xi(t3) {
        return (t3 = Ko(t3)) && t3.replace(ra, Qa).replace(aa, "");
      }
      var bi = se(function(t3, n3, e3) {
        return t3 + (e3 ? "-" : "") + n3.toLowerCase();
      }), Ci = se(function(t3, n3, e3) {
        return t3 + (e3 ? " " : "") + n3.toLowerCase();
      }), Ii = le("toLowerCase");
      var Li = se(function(t3, n3, e3) {
        return t3 + (e3 ? "_" : "") + n3.toLowerCase();
      });
      var Ti = se(function(t3, n3, e3) {
        return t3 + (e3 ? " " : "") + Di(n3);
      });
      var r2 = se(function(t3, n3, e3) {
        return t3 + (e3 ? " " : "") + n3.toUpperCase();
      }), Di = le("toUpperCase");
      function Ri(t3, n3, e3) {
        return t3 = Ko(t3), (n3 = e3 ? Wi : n3) === Wi ? (e3 = t3, fa.test(e3) ? t3.match(ca) || [] : t3.match($u) || []) : t3.match(n3) || [];
      }
      var Si = Ln(function(t3, n3) {
        try {
          return Ia(t3, Wi, n3);
        } catch (t4) {
          return Ro(t4) ? t4 : new s2(t4);
        }
      }), Bi = ke(function(n3, t3) {
        return Ta(t3, function(t4) {
          t4 = dr(t4), kt(n3, t4, uo(n3[t4], n3));
        }), n3;
      });
      function Ai(t3) {
        return function() {
          return t3;
        };
      }
      b2 = ve(), e2 = ve(true);
      function Oi(t3) {
        return t3;
      }
      function ki(t3) {
        return ln(typeof t3 == "function" ? t3 : Mt(t3, 1));
      }
      n2 = Ln(function(n3, e3) {
        return function(t3) {
          return on(t3, n3, e3);
        };
      }), I2 = Ln(function(n3, e3) {
        return function(t3) {
          return on(n3, t3, e3);
        };
      });
      function Ei(r3, n3, t3) {
        var e3 = fi(n3), o3 = Kt(n3, e3);
        t3 != null || Oo(n3) && (o3.length || !e3.length) || (t3 = n3, n3 = r3, r3 = this, o3 = Kt(n3, fi(n3)));
        var i3 = !(Oo(t3) && "chain" in t3 && !t3.chain), u3 = So(r3);
        return Ta(o3, function(t4) {
          var e4 = n3[t4];
          r3[t4] = e4, u3 && (r3.prototype[t4] = function() {
            var t5 = this.__chain__;
            if (i3 || t5) {
              var n4 = r3(this.__wrapped__);
              return (n4.__actions__ = oe(this.__actions__)).push({ func: e4, args: arguments, thisArg: r3 }), n4.__chain__ = t5, n4;
            }
            return e4.apply(r3, ka([this.value()], arguments));
          });
        }), r3;
      }
      function ji() {
      }
      lt = we(Oa), j = we(Ra), Z = we(Ma);
      function Mi(t3) {
        return Ze(t3) ? Va(dr(t3)) : (n3 = t3, function(t4) {
          return Zt(t4, n3);
        });
        var n3;
      }
      Q = be(), nt = be(true);
      function Yi() {
        return [];
      }
      function zi() {
        return false;
      }
      var u2 = ye(function(t3, n3) {
        return t3 + n3;
      }, 0), Y = Le("ceil"), Bn = ye(function(t3, n3) {
        return t3 / n3;
      }, 1), Xi = Le("floor");
      var Pi, M = ye(function(t3, n3) {
        return t3 * n3;
      }, 1), Gn = Le("round"), W = ye(function(t3, n3) {
        return t3 - n3;
      }, 0);
      return pt.after = function(t3, n3) {
        if (typeof n3 != "function")
          throw new y2(Ui);
        return t3 = Ho(t3), function() {
          if (--t3 < 1)
            return n3.apply(this, arguments);
        };
      }, pt.ary = oo, pt.assign = Zo, pt.assignIn = Jo, pt.assignInWith = Qo, pt.assignWith = ti, pt.at = ni, pt.before = io, pt.bind = uo, pt.bindAll = Bi, pt.bindKey = ao, pt.castArray = function() {
        if (!arguments.length)
          return [];
        var t3 = arguments[0];
        return bo(t3) ? t3 : [t3];
      }, pt.chain = Vr, pt.chunk = function(t3, n3, e3) {
        n3 = (e3 ? Ke(t3, n3, e3) : n3 === Wi) ? 1 : N(Ho(n3), 0);
        var r3 = t3 == null ? 0 : t3.length;
        if (!r3 || n3 < 1)
          return [];
        for (var o3 = 0, i3 = 0, u3 = C2(z(r3 / n3)); o3 < r3; )
          u3[i3++] = On(t3, o3, o3 += n3);
        return u3;
      }, pt.compact = function(t3) {
        for (var n3 = -1, e3 = t3 == null ? 0 : t3.length, r3 = 0, o3 = []; ++n3 < e3; ) {
          var i3 = t3[n3];
          i3 && (o3[r3++] = i3);
        }
        return o3;
      }, pt.concat = function() {
        var t3 = arguments.length;
        if (!t3)
          return [];
        for (var n3 = C2(t3 - 1), e3 = arguments[0], r3 = t3; r3--; )
          n3[r3 - 1] = arguments[r3];
        return ka(bo(e3) ? oe(e3) : [e3], Nt(n3, 1));
      }, pt.cond = function(r3) {
        var o3 = r3 == null ? 0 : r3.length, n3 = Xe();
        return r3 = o3 ? Oa(r3, function(t3) {
          if (typeof t3[1] != "function")
            throw new y2(Ui);
          return [n3(t3[0]), t3[1]];
        }) : [], Ln(function(t3) {
          for (var n4 = -1; ++n4 < o3; ) {
            var e3 = r3[n4];
            if (Ia(e3[0], this, t3))
              return Ia(e3[1], this, t3);
          }
        });
      }, pt.conforms = function(t3) {
        return n3 = Mt(t3, 1), e3 = fi(n3), function(t4) {
          return Yt(t4, n3, e3);
        };
        var n3, e3;
      }, pt.constant = Ai, pt.countBy = Hr, pt.create = function(t3, n3) {
        return t3 = dt(t3), n3 == null ? t3 : Ot(t3, n3);
      }, pt.curry = function t3(n3, e3, r3) {
        e3 = Re(n3, 8, Wi, Wi, Wi, Wi, Wi, e3 = r3 ? Wi : e3);
        return e3.placeholder = t3.placeholder, e3;
      }, pt.curryRight = function t3(n3, e3, r3) {
        e3 = Re(n3, Ni, Wi, Wi, Wi, Wi, Wi, e3 = r3 ? Wi : e3);
        return e3.placeholder = t3.placeholder, e3;
      }, pt.debounce = co, pt.defaults = ei, pt.defaultsDeep = ri, pt.defer = fo, pt.delay = lo, pt.difference = _r, pt.differenceBy = yr, pt.differenceWith = wr, pt.drop = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        return r3 ? On(t3, (n3 = e3 || n3 === Wi ? 1 : Ho(n3)) < 0 ? 0 : n3, r3) : [];
      }, pt.dropRight = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        return r3 ? On(t3, 0, (n3 = r3 - (n3 = e3 || n3 === Wi ? 1 : Ho(n3))) < 0 ? 0 : n3) : [];
      }, pt.dropRightWhile = function(t3, n3) {
        return t3 && t3.length ? Un(t3, Xe(n3, 3), true, true) : [];
      }, pt.dropWhile = function(t3, n3) {
        return t3 && t3.length ? Un(t3, Xe(n3, 3), true) : [];
      }, pt.fill = function(t3, n3, e3, r3) {
        var o3 = t3 == null ? 0 : t3.length;
        return o3 ? (e3 && typeof e3 != "number" && Ke(t3, n3, e3) && (e3 = 0, r3 = o3), function(t4, n4, e4, r4) {
          var o4 = t4.length;
          for ((e4 = Ho(e4)) < 0 && (e4 = o4 < -e4 ? 0 : o4 + e4), (r4 = r4 === Wi || o4 < r4 ? o4 : Ho(r4)) < 0 && (r4 += o4), r4 = r4 < e4 ? 0 : $o(r4); e4 < r4; )
            t4[e4++] = n4;
          return t4;
        }(t3, n3, e3, r3)) : [];
      }, pt.filter = function(t3, n3) {
        return (bo(t3) ? Sa : Ft)(t3, Xe(n3, 3));
      }, pt.flatMap = function(t3, n3) {
        return Nt(to(t3, n3), 1);
      }, pt.flatMapDeep = function(t3, n3) {
        return Nt(to(t3, n3), Ki);
      }, pt.flatMapDepth = function(t3, n3, e3) {
        return e3 = e3 === Wi ? 1 : Ho(e3), Nt(to(t3, n3), e3);
      }, pt.flatten = br, pt.flattenDeep = function(t3) {
        return (t3 == null ? 0 : t3.length) ? Nt(t3, Ki) : [];
      }, pt.flattenDepth = function(t3, n3) {
        return (t3 == null ? 0 : t3.length) ? Nt(t3, n3 = n3 === Wi ? 1 : Ho(n3)) : [];
      }, pt.flip = function(t3) {
        return Re(t3, 512);
      }, pt.flow = b2, pt.flowRight = e2, pt.fromPairs = function(t3) {
        for (var n3 = -1, e3 = t3 == null ? 0 : t3.length, r3 = {}; ++n3 < e3; ) {
          var o3 = t3[n3];
          r3[o3[0]] = o3[1];
        }
        return r3;
      }, pt.functions = function(t3) {
        return t3 == null ? [] : Kt(t3, fi(t3));
      }, pt.functionsIn = function(t3) {
        return t3 == null ? [] : Kt(t3, li(t3));
      }, pt.groupBy = Zr, pt.initial = function(t3) {
        return (t3 == null ? 0 : t3.length) ? On(t3, 0, -1) : [];
      }, pt.intersection = Ir, pt.intersectionBy = Lr, pt.intersectionWith = Tr, pt.invert = ui, pt.invertBy = ai, pt.invokeMap = Jr, pt.iteratee = ki, pt.keyBy = Qr, pt.keys = fi, pt.keysIn = li, pt.map = to, pt.mapKeys = function(t3, r3) {
        var o3 = {};
        return r3 = Xe(r3, 3), qt(t3, function(t4, n3, e3) {
          kt(o3, r3(t4, n3, e3), t4);
        }), o3;
      }, pt.mapValues = function(t3, r3) {
        var o3 = {};
        return r3 = Xe(r3, 3), qt(t3, function(t4, n3, e3) {
          kt(o3, n3, r3(t4, n3, e3));
        }), o3;
      }, pt.matches = function(t3) {
        return vn(Mt(t3, 1));
      }, pt.matchesProperty = function(t3, n3) {
        return gn(t3, Mt(n3, 1));
      }, pt.memoize = so, pt.merge = si, pt.mergeWith = hi, pt.method = n2, pt.methodOf = I2, pt.mixin = Ei, pt.negate = ho, pt.nthArg = function(n3) {
        return n3 = Ho(n3), Ln(function(t3) {
          return yn(t3, n3);
        });
      }, pt.omit = pi, pt.omitBy = function(t3, n3) {
        return vi(t3, ho(Xe(n3)));
      }, pt.once = function(t3) {
        return io(2, t3);
      }, pt.orderBy = function(t3, n3, e3, r3) {
        return t3 == null ? [] : wn(t3, n3 = !bo(n3) ? n3 == null ? [] : [n3] : n3, e3 = !bo(e3 = r3 ? Wi : e3) ? e3 == null ? [] : [e3] : e3);
      }, pt.over = lt, pt.overArgs = po, pt.overEvery = j, pt.overSome = Z, pt.partial = vo, pt.partialRight = go, pt.partition = no, pt.pick = di, pt.pickBy = vi, pt.property = Mi, pt.propertyOf = function(n3) {
        return function(t3) {
          return n3 == null ? Wi : Zt(n3, t3);
        };
      }, pt.pull = Rr, pt.pullAll = Sr, pt.pullAllBy = function(t3, n3, e3) {
        return t3 && t3.length && n3 && n3.length ? xn(t3, n3, Xe(e3, 2)) : t3;
      }, pt.pullAllWith = function(t3, n3, e3) {
        return t3 && t3.length && n3 && n3.length ? xn(t3, n3, Wi, e3) : t3;
      }, pt.pullAt = Br, pt.range = Q, pt.rangeRight = nt, pt.rearg = _o, pt.reject = function(t3, n3) {
        return (bo(t3) ? Sa : Ft)(t3, ho(Xe(n3, 3)));
      }, pt.remove = function(t3, n3) {
        var e3 = [];
        if (!t3 || !t3.length)
          return e3;
        var r3 = -1, o3 = [], i3 = t3.length;
        for (n3 = Xe(n3, 3); ++r3 < i3; ) {
          var u3 = t3[r3];
          n3(u3, r3, t3) && (e3.push(u3), o3.push(r3));
        }
        return bn(t3, o3), e3;
      }, pt.rest = function(t3, n3) {
        if (typeof t3 != "function")
          throw new y2(Ui);
        return Ln(t3, n3 = n3 === Wi ? n3 : Ho(n3));
      }, pt.reverse = Ar, pt.sampleSize = function(t3, n3, e3) {
        return n3 = (e3 ? Ke(t3, n3, e3) : n3 === Wi) ? 1 : Ho(n3), (bo(t3) ? Tt : Dn)(t3, n3);
      }, pt.set = function(t3, n3, e3) {
        return t3 == null ? t3 : Rn(t3, n3, e3);
      }, pt.setWith = function(t3, n3, e3, r3) {
        return r3 = typeof r3 == "function" ? r3 : Wi, t3 == null ? t3 : Rn(t3, n3, e3, r3);
      }, pt.shuffle = function(t3) {
        return (bo(t3) ? Dt : An)(t3);
      }, pt.slice = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        return r3 ? (e3 = e3 && typeof e3 != "number" && Ke(t3, n3, e3) ? (n3 = 0, r3) : (n3 = n3 == null ? 0 : Ho(n3), e3 === Wi ? r3 : Ho(e3)), On(t3, n3, e3)) : [];
      }, pt.sortBy = eo, pt.sortedUniq = function(t3) {
        return t3 && t3.length ? Mn(t3) : [];
      }, pt.sortedUniqBy = function(t3, n3) {
        return t3 && t3.length ? Mn(t3, Xe(n3, 2)) : [];
      }, pt.split = function(t3, n3, e3) {
        return e3 && typeof e3 != "number" && Ke(t3, n3, e3) && (n3 = e3 = Wi), (e3 = e3 === Wi ? Qi : e3 >>> 0) ? (t3 = Ko(t3)) && (typeof n3 == "string" || n3 != null && !Yo(n3)) && !(n3 = zn(n3)) && ec(t3) ? Kn(cc(t3), 0, e3) : t3.split(n3, e3) : [];
      }, pt.spread = function(e3, r3) {
        if (typeof e3 != "function")
          throw new y2(Ui);
        return r3 = r3 == null ? 0 : N(Ho(r3), 0), Ln(function(t3) {
          var n3 = t3[r3], t3 = Kn(t3, 0, r3);
          return n3 && ka(t3, n3), Ia(e3, this, t3);
        });
      }, pt.tail = function(t3) {
        var n3 = t3 == null ? 0 : t3.length;
        return n3 ? On(t3, 1, n3) : [];
      }, pt.take = function(t3, n3, e3) {
        return t3 && t3.length ? On(t3, 0, (n3 = e3 || n3 === Wi ? 1 : Ho(n3)) < 0 ? 0 : n3) : [];
      }, pt.takeRight = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        return r3 ? On(t3, (n3 = r3 - (n3 = e3 || n3 === Wi ? 1 : Ho(n3))) < 0 ? 0 : n3, r3) : [];
      }, pt.takeRightWhile = function(t3, n3) {
        return t3 && t3.length ? Un(t3, Xe(n3, 3), false, true) : [];
      }, pt.takeWhile = function(t3, n3) {
        return t3 && t3.length ? Un(t3, Xe(n3, 3)) : [];
      }, pt.tap = function(t3, n3) {
        return n3(t3), t3;
      }, pt.throttle = function(t3, n3, e3) {
        var r3 = true, o3 = true;
        if (typeof t3 != "function")
          throw new y2(Ui);
        return Oo(e3) && (r3 = "leading" in e3 ? !!e3.leading : r3, o3 = "trailing" in e3 ? !!e3.trailing : o3), co(t3, n3, { leading: r3, maxWait: n3, trailing: o3 });
      }, pt.thru = Fr, pt.toArray = Fo, pt.toPairs = gi, pt.toPairsIn = _i, pt.toPath = function(t3) {
        return bo(t3) ? Oa(t3, dr) : Po(t3) ? [t3] : oe(pr(Ko(t3)));
      }, pt.toPlainObject = Go, pt.transform = function(t3, r3, o3) {
        var n3, e3 = bo(t3), i3 = e3 || To(t3) || Wo(t3);
        return r3 = Xe(r3, 4), o3 == null && (n3 = t3 && t3.constructor, o3 = i3 ? e3 ? new n3() : [] : Oo(t3) && So(n3) ? dt(D2(t3)) : {}), (i3 ? Ta : qt)(t3, function(t4, n4, e4) {
          return r3(o3, t4, n4, e4);
        }), o3;
      }, pt.unary = function(t3) {
        return oo(t3, 1);
      }, pt.union = Or, pt.unionBy = kr, pt.unionWith = Er, pt.uniq = function(t3) {
        return t3 && t3.length ? Xn(t3) : [];
      }, pt.uniqBy = function(t3, n3) {
        return t3 && t3.length ? Xn(t3, Xe(n3, 2)) : [];
      }, pt.uniqWith = function(t3, n3) {
        return n3 = typeof n3 == "function" ? n3 : Wi, t3 && t3.length ? Xn(t3, Wi, n3) : [];
      }, pt.unset = function(t3, n3) {
        return t3 == null || Pn(t3, n3);
      }, pt.unzip = jr, pt.unzipWith = Mr, pt.update = function(t3, n3, e3) {
        return t3 == null ? t3 : Wn(t3, n3, $n(e3));
      }, pt.updateWith = function(t3, n3, e3, r3) {
        return r3 = typeof r3 == "function" ? r3 : Wi, t3 == null ? t3 : Wn(t3, n3, $n(e3), r3);
      }, pt.values = yi, pt.valuesIn = function(t3) {
        return t3 == null ? [] : Ga(t3, li(t3));
      }, pt.without = Yr, pt.words = Ri, pt.wrap = function(t3, n3) {
        return vo($n(n3), t3);
      }, pt.xor = zr, pt.xorBy = Xr, pt.xorWith = Pr, pt.zip = Wr, pt.zipObject = function(t3, n3) {
        return Nn(t3 || [], n3 || [], St);
      }, pt.zipObjectDeep = function(t3, n3) {
        return Nn(t3 || [], n3 || [], Rn);
      }, pt.zipWith = Ur, pt.entries = gi, pt.entriesIn = _i, pt.extend = Jo, pt.extendWith = Qo, Ei(pt, pt), pt.add = u2, pt.attempt = Si, pt.camelCase = wi, pt.capitalize = mi, pt.ceil = Y, pt.clamp = function(t3, n3, e3) {
        return e3 === Wi && (e3 = n3, n3 = Wi), e3 !== Wi && (e3 = (e3 = qo(e3)) == e3 ? e3 : 0), n3 !== Wi && (n3 = (n3 = qo(n3)) == n3 ? n3 : 0), jt(qo(t3), n3, e3);
      }, pt.clone = function(t3) {
        return Mt(t3, 4);
      }, pt.cloneDeep = function(t3) {
        return Mt(t3, 5);
      }, pt.cloneDeepWith = function(t3, n3) {
        return Mt(t3, 5, n3 = typeof n3 == "function" ? n3 : Wi);
      }, pt.cloneWith = function(t3, n3) {
        return Mt(t3, 4, n3 = typeof n3 == "function" ? n3 : Wi);
      }, pt.conformsTo = function(t3, n3) {
        return n3 == null || Yt(t3, n3, fi(n3));
      }, pt.deburr = xi, pt.defaultTo = function(t3, n3) {
        return t3 == null || t3 != t3 ? n3 : t3;
      }, pt.divide = Bn, pt.endsWith = function(t3, n3, e3) {
        t3 = Ko(t3), n3 = zn(n3);
        var r3 = t3.length, r3 = e3 = e3 === Wi ? r3 : jt(Ho(e3), 0, r3);
        return 0 <= (e3 -= n3.length) && t3.slice(e3, r3) == n3;
      }, pt.eq = yo, pt.escape = function(t3) {
        return (t3 = Ko(t3)) && Eu.test(t3) ? t3.replace(Ou, tc) : t3;
      }, pt.escapeRegExp = function(t3) {
        return (t3 = Ko(t3)) && Uu.test(t3) ? t3.replace(Wu, "\\$&") : t3;
      }, pt.every = function(t3, n3, e3) {
        return (bo(t3) ? Ra : Ut)(t3, Xe(n3 = e3 && Ke(t3, n3, e3) ? Wi : n3, 3));
      }, pt.find = $r, pt.findIndex = mr, pt.findKey = function(t3, n3) {
        return Ya(t3, Xe(n3, 3), qt);
      }, pt.findLast = qr, pt.findLastIndex = xr, pt.findLastKey = function(t3, n3) {
        return Ya(t3, Xe(n3, 3), Gt);
      }, pt.floor = Xi, pt.forEach = Gr, pt.forEachRight = Kr, pt.forIn = function(t3, n3) {
        return t3 == null ? t3 : Ht(t3, Xe(n3, 3), li);
      }, pt.forInRight = function(t3, n3) {
        return t3 == null ? t3 : $t(t3, Xe(n3, 3), li);
      }, pt.forOwn = function(t3, n3) {
        return t3 && qt(t3, Xe(n3, 3));
      }, pt.forOwnRight = function(t3, n3) {
        return t3 && Gt(t3, Xe(n3, 3));
      }, pt.get = oi, pt.gt = wo, pt.gte = mo, pt.has = function(t3, n3) {
        return t3 != null && He(t3, n3, nn);
      }, pt.hasIn = ii, pt.head = Cr, pt.identity = Oi, pt.includes = function(t3, n3, e3, r3) {
        return t3 = Io(t3) ? t3 : yi(t3), e3 = e3 && !r3 ? Ho(e3) : 0, r3 = t3.length, e3 < 0 && (e3 = N(r3 + e3, 0)), Xo(t3) ? e3 <= r3 && -1 < t3.indexOf(n3, e3) : !!r3 && -1 < Xa(t3, n3, e3);
      }, pt.indexOf = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        return r3 ? (e3 = e3 == null ? 0 : Ho(e3), Xa(t3, n3, e3 = e3 < 0 ? N(r3 + e3, 0) : e3)) : -1;
      }, pt.inRange = function(t3, n3, e3) {
        return n3 = No(n3), e3 === Wi ? (e3 = n3, n3 = 0) : e3 = No(e3), (t3 = t3 = qo(t3)) >= H(n3 = n3, e3 = e3) && t3 < N(n3, e3);
      }, pt.invoke = ci, pt.isArguments = xo, pt.isArray = bo, pt.isArrayBuffer = Co, pt.isArrayLike = Io, pt.isArrayLikeObject = Lo, pt.isBoolean = function(t3) {
        return t3 === true || t3 === false || ko(t3) && Qt(t3) == ru;
      }, pt.isBuffer = To, pt.isDate = Do, pt.isElement = function(t3) {
        return ko(t3) && t3.nodeType === 1 && !Mo(t3);
      }, pt.isEmpty = function(t3) {
        if (t3 == null)
          return true;
        if (Io(t3) && (bo(t3) || typeof t3 == "string" || typeof t3.splice == "function" || To(t3) || Wo(t3) || xo(t3)))
          return !t3.length;
        var n3, e3 = Ne(t3);
        if (e3 == cu || e3 == pu)
          return !t3.size;
        if (tr(t3))
          return !sn(t3).length;
        for (n3 in t3)
          if (w2.call(t3, n3))
            return false;
        return true;
      }, pt.isEqual = function(t3, n3) {
        return an(t3, n3);
      }, pt.isEqualWith = function(t3, n3, e3) {
        var r3 = (e3 = typeof e3 == "function" ? e3 : Wi) ? e3(t3, n3) : Wi;
        return r3 === Wi ? an(t3, n3, Wi, e3) : !!r3;
      }, pt.isError = Ro, pt.isFinite = function(t3) {
        return typeof t3 == "number" && U(t3);
      }, pt.isFunction = So, pt.isInteger = Bo, pt.isLength = Ao, pt.isMap = Eo, pt.isMatch = function(t3, n3) {
        return t3 === n3 || cn(t3, n3, We(n3));
      }, pt.isMatchWith = function(t3, n3, e3) {
        return e3 = typeof e3 == "function" ? e3 : Wi, cn(t3, n3, We(n3), e3);
      }, pt.isNaN = function(t3) {
        return jo(t3) && t3 != +t3;
      }, pt.isNative = function(t3) {
        if (Qe(t3))
          throw new s2("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return fn(t3);
      }, pt.isNil = function(t3) {
        return t3 == null;
      }, pt.isNull = function(t3) {
        return t3 === null;
      }, pt.isNumber = jo, pt.isObject = Oo, pt.isObjectLike = ko, pt.isPlainObject = Mo, pt.isRegExp = Yo, pt.isSafeInteger = function(t3) {
        return Bo(t3) && -Zi <= t3 && t3 <= Zi;
      }, pt.isSet = zo, pt.isString = Xo, pt.isSymbol = Po, pt.isTypedArray = Wo, pt.isUndefined = function(t3) {
        return t3 === Wi;
      }, pt.isWeakMap = function(t3) {
        return ko(t3) && Ne(t3) == gu;
      }, pt.isWeakSet = function(t3) {
        return ko(t3) && Qt(t3) == "[object WeakSet]";
      }, pt.join = function(t3, n3) {
        return t3 == null ? "" : V.call(t3, n3);
      }, pt.kebabCase = bi, pt.last = Dr, pt.lastIndexOf = function(t3, n3, e3) {
        var r3 = t3 == null ? 0 : t3.length;
        if (!r3)
          return -1;
        var o3 = r3;
        return e3 !== Wi && (o3 = (o3 = Ho(e3)) < 0 ? N(r3 + o3, 0) : H(o3, r3 - 1)), n3 == n3 ? function(t4, n4, e4) {
          for (var r4 = e4 + 1; r4--; )
            if (t4[r4] === n4)
              return r4;
          return r4;
        }(t3, n3, o3) : za(t3, Wa, o3, true);
      }, pt.lowerCase = Ci, pt.lowerFirst = Ii, pt.lt = Uo, pt.lte = Vo, pt.max = function(t3) {
        return t3 && t3.length ? Vt(t3, Oi, tn) : Wi;
      }, pt.maxBy = function(t3, n3) {
        return t3 && t3.length ? Vt(t3, Xe(n3, 2), tn) : Wi;
      }, pt.mean = function(t3) {
        return Ua(t3, Oi);
      }, pt.meanBy = function(t3, n3) {
        return Ua(t3, Xe(n3, 2));
      }, pt.min = function(t3) {
        return t3 && t3.length ? Vt(t3, Oi, pn) : Wi;
      }, pt.minBy = function(t3, n3) {
        return t3 && t3.length ? Vt(t3, Xe(n3, 2), pn) : Wi;
      }, pt.stubArray = Yi, pt.stubFalse = zi, pt.stubObject = function() {
        return {};
      }, pt.stubString = function() {
        return "";
      }, pt.stubTrue = function() {
        return true;
      }, pt.multiply = M, pt.nth = function(t3, n3) {
        return t3 && t3.length ? yn(t3, Ho(n3)) : Wi;
      }, pt.noConflict = function() {
        return ga._ === this && (ga._ = m2), this;
      }, pt.noop = ji, pt.now = ro, pt.pad = function(t3, n3, e3) {
        t3 = Ko(t3);
        var r3 = (n3 = Ho(n3)) ? ac(t3) : 0;
        return !n3 || n3 <= r3 ? t3 : me(X(r3 = (n3 - r3) / 2), e3) + t3 + me(z(r3), e3);
      }, pt.padEnd = function(t3, n3, e3) {
        t3 = Ko(t3);
        var r3 = (n3 = Ho(n3)) ? ac(t3) : 0;
        return n3 && r3 < n3 ? t3 + me(n3 - r3, e3) : t3;
      }, pt.padStart = function(t3, n3, e3) {
        t3 = Ko(t3);
        var r3 = (n3 = Ho(n3)) ? ac(t3) : 0;
        return n3 && r3 < n3 ? me(n3 - r3, e3) + t3 : t3;
      }, pt.parseInt = function(t3, n3, e3) {
        return n3 = e3 || n3 == null ? 0 : n3 && +n3, q(Ko(t3).replace(Vu, ""), n3 || 0);
      }, pt.random = function(t3, n3, e3) {
        var r3;
        if (e3 && typeof e3 != "boolean" && Ke(t3, n3, e3) && (n3 = e3 = Wi), e3 === Wi && (typeof n3 == "boolean" ? (e3 = n3, n3 = Wi) : typeof t3 == "boolean" && (e3 = t3, t3 = Wi)), t3 === Wi && n3 === Wi ? (t3 = 0, n3 = 1) : (t3 = No(t3), n3 === Wi ? (n3 = t3, t3 = 0) : n3 = No(n3)), n3 < t3 && (r3 = t3, t3 = n3, n3 = r3), e3 || t3 % 1 || n3 % 1) {
          e3 = G();
          return H(t3 + e3 * (n3 - t3 + da("1e-" + ((e3 + "").length - 1))), n3);
        }
        return Cn(t3, n3);
      }, pt.reduce = function(t3, n3, e3) {
        var r3 = bo(t3) ? Ea : Fa, o3 = arguments.length < 3;
        return r3(t3, Xe(n3, 4), e3, o3, Pt);
      }, pt.reduceRight = function(t3, n3, e3) {
        var r3 = bo(t3) ? ja : Fa, o3 = arguments.length < 3;
        return r3(t3, Xe(n3, 4), e3, o3, Wt);
      }, pt.repeat = function(t3, n3, e3) {
        return n3 = (e3 ? Ke(t3, n3, e3) : n3 === Wi) ? 1 : Ho(n3), In(Ko(t3), n3);
      }, pt.replace = function() {
        var t3 = arguments, n3 = Ko(t3[0]);
        return t3.length < 3 ? n3 : n3.replace(t3[1], t3[2]);
      }, pt.result = function(t3, n3, e3) {
        var r3 = -1, o3 = (n3 = qn(n3, t3)).length;
        for (o3 || (o3 = 1, t3 = Wi); ++r3 < o3; ) {
          var i3 = t3 == null ? Wi : t3[dr(n3[r3])];
          i3 === Wi && (r3 = o3, i3 = e3), t3 = So(i3) ? i3.call(t3) : i3;
        }
        return t3;
      }, pt.round = Gn, pt.runInContext = t2, pt.sample = function(t3) {
        return (bo(t3) ? Lt : Tn)(t3);
      }, pt.size = function(t3) {
        if (t3 == null)
          return 0;
        if (Io(t3))
          return Xo(t3) ? ac(t3) : t3.length;
        var n3 = Ne(t3);
        return n3 == cu || n3 == pu ? t3.size : sn(t3).length;
      }, pt.snakeCase = Li, pt.some = function(t3, n3, e3) {
        return (bo(t3) ? Ma : kn)(t3, Xe(n3 = e3 && Ke(t3, n3, e3) ? Wi : n3, 3));
      }, pt.sortedIndex = function(t3, n3) {
        return En(t3, n3);
      }, pt.sortedIndexBy = function(t3, n3, e3) {
        return jn(t3, n3, Xe(e3, 2));
      }, pt.sortedIndexOf = function(t3, n3) {
        var e3 = t3 == null ? 0 : t3.length;
        if (e3) {
          var r3 = En(t3, n3);
          if (r3 < e3 && yo(t3[r3], n3))
            return r3;
        }
        return -1;
      }, pt.sortedLastIndex = function(t3, n3) {
        return En(t3, n3, true);
      }, pt.sortedLastIndexBy = function(t3, n3, e3) {
        return jn(t3, n3, Xe(e3, 2), true);
      }, pt.sortedLastIndexOf = function(t3, n3) {
        if (t3 == null ? 0 : t3.length) {
          var e3 = En(t3, n3, true) - 1;
          if (yo(t3[e3], n3))
            return e3;
        }
        return -1;
      }, pt.startCase = Ti, pt.startsWith = function(t3, n3, e3) {
        return t3 = Ko(t3), e3 = e3 == null ? 0 : jt(Ho(e3), 0, t3.length), n3 = zn(n3), t3.slice(e3, e3 + n3.length) == n3;
      }, pt.subtract = W, pt.sum = function(t3) {
        return t3 && t3.length ? Na(t3, Oi) : 0;
      }, pt.sumBy = function(t3, n3) {
        return t3 && t3.length ? Na(t3, Xe(n3, 2)) : 0;
      }, pt.template = function(u3, t3, n3) {
        var e3 = pt.templateSettings;
        n3 && Ke(u3, t3, n3) && (t3 = Wi), u3 = Ko(u3), t3 = Qo({}, t3, e3, Se);
        var a3, c3, r3 = fi(e3 = Qo({}, t3.imports, e3.imports, Se)), o3 = Ga(e3, r3), f3 = 0, e3 = t3.interpolate || oa, l3 = "__p += '", e3 = p2((t3.escape || oa).source + "|" + e3.source + "|" + (e3 === Yu ? Ku : oa).source + "|" + (t3.evaluate || oa).source + "|$", "g"), i3 = "//# sourceURL=" + (w2.call(t3, "sourceURL") ? (t3.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++sa + "]") + "\n";
        if (u3.replace(e3, function(t4, n4, e4, r4, o4, i4) {
          return e4 = e4 || r4, l3 += u3.slice(f3, i4).replace(ia, nc), n4 && (a3 = true, l3 += "' +\n__e(" + n4 + ") +\n'"), o4 && (c3 = true, l3 += "';\n" + o4 + ";\n__p += '"), e4 && (l3 += "' +\n((__t = (" + e4 + ")) == null ? '' : __t) +\n'"), f3 = i4 + t4.length, t4;
        }), l3 += "';\n", t3 = w2.call(t3, "variable") && t3.variable) {
          if (qu.test(t3))
            throw new s2("Invalid `variable` option passed into `_.template`");
        } else
          l3 = "with (obj) {\n" + l3 + "\n}\n";
        if (l3 = (c3 ? l3.replace(Ru, "") : l3).replace(Su, "$1").replace(Bu, "$1;"), l3 = "function(" + (t3 || "obj") + ") {\n" + (t3 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a3 ? ", __e = _.escape" : "") + (c3 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l3 + "return __p\n}", (t3 = Si(function() {
          return h2(r3, i3 + "return " + l3).apply(Wi, o3);
        })).source = l3, Ro(t3))
          throw t3;
        return t3;
      }, pt.times = function(t3, n3) {
        if ((t3 = Ho(t3)) < 1 || Zi < t3)
          return [];
        var e3 = Qi, r3 = H(t3, Qi);
        for (n3 = Xe(n3), t3 -= Qi, r3 = Ha(r3, n3); ++e3 < t3; )
          n3(e3);
        return r3;
      }, pt.toFinite = No, pt.toInteger = Ho, pt.toLength = $o, pt.toLower = function(t3) {
        return Ko(t3).toLowerCase();
      }, pt.toNumber = qo, pt.toSafeInteger = function(t3) {
        return t3 ? jt(Ho(t3), -Zi, Zi) : t3 === 0 ? t3 : 0;
      }, pt.toString = Ko, pt.toUpper = function(t3) {
        return Ko(t3).toUpperCase();
      }, pt.trim = function(t3, n3, e3) {
        return (t3 = Ko(t3)) && (e3 || n3 === Wi) ? $a(t3) : t3 && (n3 = zn(n3)) ? (t3 = cc(t3), n3 = cc(n3), Kn(t3, Za(t3, n3), Ja(t3, n3) + 1).join("")) : t3;
      }, pt.trimEnd = function(t3, n3, e3) {
        return (t3 = Ko(t3)) && (e3 || n3 === Wi) ? t3.slice(0, fc(t3) + 1) : t3 && (n3 = zn(n3)) ? Kn(t3 = cc(t3), 0, Ja(t3, cc(n3)) + 1).join("") : t3;
      }, pt.trimStart = function(t3, n3, e3) {
        return (t3 = Ko(t3)) && (e3 || n3 === Wi) ? t3.replace(Vu, "") : t3 && (n3 = zn(n3)) ? Kn(t3 = cc(t3), Za(t3, cc(n3))).join("") : t3;
      }, pt.truncate = function(t3, n3) {
        var e3, r3 = 30, o3 = "...";
        Oo(n3) && (e3 = "separator" in n3 ? n3.separator : e3, r3 = "length" in n3 ? Ho(n3.length) : r3, o3 = "omission" in n3 ? zn(n3.omission) : o3);
        var i3, n3 = (t3 = Ko(t3)).length;
        if ((n3 = ec(t3) ? (i3 = cc(t3)).length : n3) <= r3)
          return t3;
        if ((n3 = r3 - ac(o3)) < 1)
          return o3;
        if (r3 = i3 ? Kn(i3, 0, n3).join("") : t3.slice(0, n3), e3 === Wi)
          return r3 + o3;
        if (i3 && (n3 += r3.length - n3), Yo(e3)) {
          if (t3.slice(n3).search(e3)) {
            var u3, a3 = r3;
            for ((e3 = !e3.global ? p2(e3.source, Ko(Zu.exec(e3)) + "g") : e3).lastIndex = 0; u3 = e3.exec(a3); )
              var c3 = u3.index;
            r3 = r3.slice(0, c3 === Wi ? n3 : c3);
          }
        } else
          t3.indexOf(zn(e3), n3) == n3 || -1 < (n3 = r3.lastIndexOf(e3)) && (r3 = r3.slice(0, n3));
        return r3 + o3;
      }, pt.unescape = function(t3) {
        return (t3 = Ko(t3)) && ku.test(t3) ? t3.replace(Au, lc) : t3;
      }, pt.uniqueId = function(t3) {
        var n3 = ++c2;
        return Ko(t3) + n3;
      }, pt.upperCase = r2, pt.upperFirst = Di, pt.each = Gr, pt.eachRight = Kr, pt.first = Cr, Ei(pt, (Pi = {}, qt(pt, function(t3, n3) {
        w2.call(pt.prototype, n3) || (Pi[n3] = t3);
      }), Pi), { chain: false }), pt.VERSION = "4.17.21", Ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t3) {
        pt[t3].placeholder = pt;
      }), Ta(["drop", "take"], function(e3, r3) {
        yt.prototype[e3] = function(t3) {
          t3 = t3 === Wi ? 1 : N(Ho(t3), 0);
          var n3 = this.__filtered__ && !r3 ? new yt(this) : this.clone();
          return n3.__filtered__ ? n3.__takeCount__ = H(t3, n3.__takeCount__) : n3.__views__.push({ size: H(t3, Qi), type: e3 + (n3.__dir__ < 0 ? "Right" : "") }), n3;
        }, yt.prototype[e3 + "Right"] = function(t3) {
          return this.reverse()[e3](t3).reverse();
        };
      }), Ta(["filter", "map", "takeWhile"], function(t3, n3) {
        var e3 = n3 + 1, r3 = e3 == 1 || e3 == 3;
        yt.prototype[t3] = function(t4) {
          var n4 = this.clone();
          return n4.__iteratees__.push({ iteratee: Xe(t4, 3), type: e3 }), n4.__filtered__ = n4.__filtered__ || r3, n4;
        };
      }), Ta(["head", "last"], function(t3, n3) {
        var e3 = "take" + (n3 ? "Right" : "");
        yt.prototype[t3] = function() {
          return this[e3](1).value()[0];
        };
      }), Ta(["initial", "tail"], function(t3, n3) {
        var e3 = "drop" + (n3 ? "" : "Right");
        yt.prototype[t3] = function() {
          return this.__filtered__ ? new yt(this) : this[e3](1);
        };
      }), yt.prototype.compact = function() {
        return this.filter(Oi);
      }, yt.prototype.find = function(t3) {
        return this.filter(t3).head();
      }, yt.prototype.findLast = function(t3) {
        return this.reverse().find(t3);
      }, yt.prototype.invokeMap = Ln(function(n3, e3) {
        return typeof n3 == "function" ? new yt(this) : this.map(function(t3) {
          return on(t3, n3, e3);
        });
      }), yt.prototype.reject = function(t3) {
        return this.filter(ho(Xe(t3)));
      }, yt.prototype.slice = function(t3, n3) {
        t3 = Ho(t3);
        var e3 = this;
        return e3.__filtered__ && (0 < t3 || n3 < 0) ? new yt(e3) : (t3 < 0 ? e3 = e3.takeRight(-t3) : t3 && (e3 = e3.drop(t3)), n3 !== Wi ? (n3 = Ho(n3)) < 0 ? e3.dropRight(-n3) : e3.take(n3 - t3) : e3);
      }, yt.prototype.takeRightWhile = function(t3) {
        return this.reverse().takeWhile(t3).reverse();
      }, yt.prototype.toArray = function() {
        return this.take(Qi);
      }, qt(yt.prototype, function(f3, t3) {
        var l3 = /^(?:filter|find|map|reject)|While$/.test(t3), s3 = /^(?:head|last)$/.test(t3), h3 = pt[s3 ? "take" + (t3 == "last" ? "Right" : "") : t3], p3 = s3 || /^find/.test(t3);
        h3 && (pt.prototype[t3] = function() {
          function t4(t5) {
            return t5 = h3.apply(pt, ka([t5], e3)), s3 && u3 ? t5[0] : t5;
          }
          var n3 = this.__wrapped__, e3 = s3 ? [1] : arguments, r3 = n3 instanceof yt, o3 = e3[0], i3 = r3 || bo(n3);
          i3 && l3 && typeof o3 == "function" && o3.length != 1 && (r3 = i3 = false);
          var u3 = this.__chain__, a3 = !!this.__actions__.length, o3 = p3 && !u3, a3 = r3 && !a3;
          if (p3 || !i3)
            return o3 && a3 ? f3.apply(this, e3) : (c3 = this.thru(t4), o3 ? s3 ? c3.value()[0] : c3.value() : c3);
          var n3 = a3 ? n3 : new yt(this), c3 = f3.apply(n3, e3);
          return c3.__actions__.push({ func: Fr, args: [t4], thisArg: Wi }), new _t(c3, u3);
        });
      }), Ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(t3) {
        var e3 = i2[t3], r3 = /^(?:push|sort|unshift)$/.test(t3) ? "tap" : "thru", o3 = /^(?:pop|shift)$/.test(t3);
        pt.prototype[t3] = function() {
          var n3 = arguments;
          if (!o3 || this.__chain__)
            return this[r3](function(t5) {
              return e3.apply(bo(t5) ? t5 : [], n3);
            });
          var t4 = this.value();
          return e3.apply(bo(t4) ? t4 : [], n3);
        };
      }), qt(yt.prototype, function(t3, n3) {
        var e3, r3 = pt[n3];
        r3 && (e3 = r3.name + "", w2.call(ot, e3) || (ot[e3] = []), ot[e3].push({ name: n3, func: r3 }));
      }), ot[ge(Wi, 2).name] = [{ name: "wrapper", func: Wi }], yt.prototype.clone = function() {
        var t3 = new yt(this.__wrapped__);
        return t3.__actions__ = oe(this.__actions__), t3.__dir__ = this.__dir__, t3.__filtered__ = this.__filtered__, t3.__iteratees__ = oe(this.__iteratees__), t3.__takeCount__ = this.__takeCount__, t3.__views__ = oe(this.__views__), t3;
      }, yt.prototype.reverse = function() {
        var t3;
        return this.__filtered__ ? ((t3 = new yt(this)).__dir__ = -1, t3.__filtered__ = true) : (t3 = this.clone()).__dir__ *= -1, t3;
      }, yt.prototype.value = function() {
        var t3 = this.__wrapped__.value(), n3 = this.__dir__, e3 = bo(t3), r3 = n3 < 0, o3 = e3 ? t3.length : 0, i3 = function(t4, n4, e4) {
          var r4 = -1, o4 = e4.length;
          for (; ++r4 < o4; ) {
            var i4 = e4[r4], u4 = i4.size;
            switch (i4.type) {
              case "drop":
                t4 += u4;
                break;
              case "dropRight":
                n4 -= u4;
                break;
              case "take":
                n4 = H(n4, t4 + u4);
                break;
              case "takeRight":
                t4 = N(t4, n4 - u4);
            }
          }
          return { start: t4, end: n4 };
        }(0, o3, this.__views__), u3 = i3.start, a3 = (i3 = i3.end) - u3, c3 = r3 ? i3 : u3 - 1, f3 = this.__iteratees__, l3 = f3.length, s3 = 0, h3 = H(a3, this.__takeCount__);
        if (!e3 || !r3 && o3 == a3 && h3 == a3)
          return Vn(t3, this.__actions__);
        var p3 = [];
        t:
          for (; a3-- && s3 < h3; ) {
            for (var d3 = -1, v3 = t3[c3 += n3]; ++d3 < l3; ) {
              var g3 = f3[d3], _3 = g3.iteratee, g3 = g3.type, _3 = _3(v3);
              if (g3 == 2)
                v3 = _3;
              else if (!_3) {
                if (g3 == 1)
                  continue t;
                break t;
              }
            }
            p3[s3++] = v3;
          }
        return p3;
      }, pt.prototype.at = Nr, pt.prototype.chain = function() {
        return Vr(this);
      }, pt.prototype.commit = function() {
        return new _t(this.value(), this.__chain__);
      }, pt.prototype.next = function() {
        this.__values__ === Wi && (this.__values__ = Fo(this.value()));
        var t3 = this.__index__ >= this.__values__.length;
        return { done: t3, value: t3 ? Wi : this.__values__[this.__index__++] };
      }, pt.prototype.plant = function(t3) {
        for (var n3, e3 = this; e3 instanceof gt; ) {
          var r3 = gr(e3);
          r3.__index__ = 0, r3.__values__ = Wi, n3 ? o3.__wrapped__ = r3 : n3 = r3;
          var o3 = r3, e3 = e3.__wrapped__;
        }
        return o3.__wrapped__ = t3, n3;
      }, pt.prototype.reverse = function() {
        var t3 = this.__wrapped__;
        if (t3 instanceof yt) {
          t3 = t3;
          return (t3 = (t3 = this.__actions__.length ? new yt(this) : t3).reverse()).__actions__.push({ func: Fr, args: [Ar], thisArg: Wi }), new _t(t3, this.__chain__);
        }
        return this.thru(Ar);
      }, pt.prototype.toJSON = pt.prototype.valueOf = pt.prototype.value = function() {
        return Vn(this.__wrapped__, this.__actions__);
      }, pt.prototype.first = pt.prototype.head, O && (pt.prototype[O] = function() {
        return this;
      }), pt;
    }();
    L ? ((L.exports = sc)._ = sc, u._ = sc) : ga._ = sc;
  }.call(commonjsGlobal);
}(lodash, lodash.exports);
const CancasSafeArea = 1e5, DPI = window.devicePixelRatio || 1, DEFAULT_CONFIG = { tagConfig: { fillStyle: "rgba(242, 88, 85, 0.5)", textFillStyle: "rgba(255, 255, 255, 0.6)", hoverStrokeStyle: "#F25856", hoverLineWidth: 1, hoverLineDash: [5], highlightStrokeStyle: "yellow", highlightLineWidth: 2, highlightLineDash: [5] }, layerConfig: { fillStyle: "rgba(0, 0, 0, 0.6)" }, cropConfig: { lineDash: [], strokeStyle: "rgba(255, 255, 255, 1)", lineWidth: 2 } }, defaultWH = { width: 0, height: 0 }, defaultPoint = { x: void 0, y: void 0 };
function clearCanvas(t) {
  t.clearRect(-CancasSafeArea / 2, -CancasSafeArea / 2, CancasSafeArea, CancasSafeArea);
}
function loadImage(t) {
  let e = new Image();
  return e.src = t, new Promise((t2, n) => {
    e.complete ? t2(e) : (e.onload = function() {
      t2(e);
    }, e.onerror = function() {
      n("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25:" + e.src);
    });
  });
}
function drawImage(t, n, e, r, o, i) {
  t.drawImage(n, e, r, o, i);
}
function drawLayerBg(t, n) {
  t.fillStyle = n.layerConfig.fillStyle, t.fillRect(-CancasSafeArea / 2, -CancasSafeArea / 2, CancasSafeArea, CancasSafeArea);
}
function drawLayerImageData(t, n, e, r, o) {
  t.clearRect(n, e, r, o);
}
function drawLayerBorder(t, n, e, r, o, i) {
  t.setLineDash(i.cropConfig.lineDash), t.strokeStyle = i.cropConfig.strokeStyle, t.lineWidth = i.cropConfig.lineWidth, t.strokeRect(n, e, r, o);
}
function getElementWH(t) {
  t = t.getClientRects()[0];
  return t ? { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: t.width, height: t.height, x: t.x, y: t.y } : void 0;
}
function initCanvasWH(t, n) {
  t.canvas.width = n.width, t.canvas.height = n.height;
}
function initScale(t, n) {
  var e = t.width / n.width, n = t.height / n.height;
  return { scale: e < n ? e : n, fit: e < n ? "height" : "width" };
}
function getVariableType(t) {
  let n = Object.prototype.toString.call(t);
  return n.slice(8, n.length - 1);
}
function amendDpi(n, t = ["width", "height"]) {
  try {
    if (getVariableType(n) === "Number")
      return n * DPI;
    t.forEach((t2) => {
      n[t2] *= DPI;
    });
  } catch (t2) {
    console.error("ERROR", n, getVariableType(n), t2);
  }
  return n;
}
function amendMobileTouchEventDpi(t) {
  return Array.from(t.touches || []).map((t2) => {
    return amendDpi({ clientX: t2.clientX, clientY: t2.clientY }, ["clientX", "clientY"]);
  });
}
function drawCropRect(t, n, e, r, o, i, u) {
  u || (clearCanvas(t), drawLayerBg(t, i)), drawLayerImageData(t, n, e, r, o), drawLayerBorder(t, n, e, r, o, i);
}
function drawCropList(e, t, r, o, i, n) {
  n || (clearCanvas(e), drawLayerBg(e, o)), t.forEach((t2) => {
    let n2 = transfromBoxToRect(t2, t2.scale, r);
    i && (n2[0] += i.offsetX, n2[1] += i.offsetY), drawLayerImageData(e, ...n2), drawLayerBorder(e, ...n2, o);
  });
}
function pointIsInBoxList(e, r, n = 1, o = { x: 0, y: 0 }) {
  let i = [], u = [], t = r.map((t2) => transfromBoxSize2Visual(t2, n, o));
  return t.forEach((t2, n2) => {
    console.log(e, t2), pointIsInBox(e, t2) && (i.push(r[n2]), u.push(n2));
  }), { boxList: i, indexList: u };
}
function transfromBoxSize2Visual(t, n, e) {
  let r = lodash.exports.cloneDeep(t);
  return r.startX = r.startX * n + e.x, r.endX = r.endX * n + e.x, r.startY = r.startY * n + e.y, r.endY = r.endY * n + e.y, r;
}
function pointIsInBox(t, n) {
  return t.x >= n.startX && t.x <= n.endX && t.y >= n.startY && t.y <= n.endY;
}
function pointIsInRect(t, n) {
  let e = n[0], r = n[0] + n[2], o = n[1], i = n[1] + n[3];
  return t.x >= e && t.x <= r && t.y >= o && t.y <= i;
}
function transfromTwoPoints2Rect(t, n) {
  var e = Math.abs(n.x - t.x), r = Math.abs(n.y - t.y);
  return [Math.min(t.x, n.x), Math.min(t.y, n.y), e, r];
}
function fixBoxInfo(t) {
  let n = lodash.exports.cloneDeep(t);
  var { startX: e, startY: r, endX: o, endY: i } = n, u = Math.abs(e - o), t = Math.abs(r - i), e = Math.min(e, o), r = Math.min(r, i);
  return n.startX = e, n.startY = r, n.endX = e + u, n.endY = r + t, { info: n, position: [e, r, u, t] };
}
function getTwoBoxIntersectPart(t, n) {
  var e = fixBoxInfo(t), r = fixBoxInfo(n), t = Math.min(e.info.startY, r.info.startY), n = Math.max(e.info.endY, r.info.endY);
  let o;
  Math.abs(n - t) < e.position[3] + r.position[3] && (o = { startY: Math.max(e.info.startY, r.info.startY), endY: Math.min(e.info.endY, r.info.endY) });
  n = Math.min(e.info.startX, r.info.startX), t = Math.max(e.info.endX, r.info.endX);
  let i;
  if (Math.abs(t - n) < e.position[2] + r.position[2] && (i = { startX: Math.max(e.info.startX, r.info.startX), endX: Math.min(e.info.endX, r.info.endX) }), i !== void 0 && o !== void 0)
    return Object.assign(o, i);
}
function transfromBoxToRect(t, n = 1, e = { x: 0, y: 0 }) {
  var r = fixBoxInfo(t), { startX: o, startY: i } = r.info, t = r.position[2], r = r.position[3];
  return [o * n + e.x, i * n + e.y, t * n, r * n];
}
function isBoxValidity(t) {
  t = transfromBoxToRect(t);
  return 5 <= t[2] && 5 <= t[3];
}
function drawTagRect(t, n, e, r, o, i, u, a, c, f) {
  if (a || c) {
    var l;
    !c || a && a.type === "move" || (t.fillStyle = i.tagConfig.fillStyle, t.fillRect(n, e, r, o), u && (l = parseFloat(t.font.split(" ")[0]), t.fillStyle = i.tagConfig.textFillStyle, t.fillText(u + "", n + 4, e + o / 2 + l / 2))), f && (t.strokeStyle = i.tagConfig.highlightStrokeStyle, t.lineWidth = i.tagConfig.highlightLineWidth, t.setLineDash(i.tagConfig.highlightLineDash), t.strokeRect(n, e, r, o));
    if (a && pointIsInRect(a, [n, e, r, o])) {
      if (a.type === "click")
        return { isShow: c = !c, isCrash: true };
      a.type !== "move" || c || (t.strokeStyle = i.tagConfig.hoverStrokeStyle, t.lineWidth = i.tagConfig.hoverLineWidth, t.setLineDash(i.tagConfig.hoverLineDash), t.strokeRect(n, e, r, o));
    }
  }
}
function drawTagList(r, t, o, i, u = { offsetX: 0, offsetY: 0 }, a) {
  let c = false, f = [];
  return t.forEach((t2, n) => {
    let e = transfromBoxToRect(t2, t2.scale, o);
    e[0] += u.offsetX, e[1] += u.offsetY;
    n = drawTagRect(r, ...e, i, n + 1, a, t2.isShow, t2.showOutLine);
    n !== void 0 && (t2.isShow = n.isShow, n.isCrash && (c = true, f.push(t2)));
  }), { isReDraw: c, redrawList: f };
}
function fixMoveRectPosition(t, n, e) {
  e = fixPoint({ x: t[0], y: t[1] }, n, e);
  return t[0] = e.x, t[1] = e.y, t[2] /= n / DPI, t[3] /= n / DPI, t;
}
function moveDrawCropRect(t, n, e, r, o, i, u, a) {
  if (n.x !== void 0 && e.x !== void 0) {
    o = fixMoveRectPosition(transfromTwoPoints2Rect(n, e), r, o);
    if (5 < o[2] || 5 < o[3])
      return drawCropList(t, i, u, a), drawCropRect(t, ...o, a, true), o;
  }
}
function getVertexPositionByTwoPoints(t, n) {
  return (t.x <= n.x ? "left" : "right") + "-" + (t.y <= n.y ? "top" : "bottom");
}
function getPointByBoxAndVertexPosition(t, n) {
  n = n.split("-");
  return { x: n[0] === "left" ? t.startX : t.endX, y: n[1] === "top" ? t.startY : t.endY };
}
function moveDrawTagRect(t, n, e, r, o, i, u, a) {
  if (n.x !== void 0 && e.x !== void 0) {
    o = fixMoveRectPosition(transfromTwoPoints2Rect(n, e), r, o);
    if (5 < o[2] || 5 < o[3])
      return drawTagList(t, i, u, a), drawTagRect(t, ...o, a, i.length + 1, void 0, true), o;
  }
}
function getTwoPointsOffsetInfo(t, n, e) {
  var r = transfromTwoPoints2Rect(t, n), o = (n.x - t.x) / e * DPI, e = (n.y - t.y) / e * DPI;
  let i = false;
  return (5 < r[2] || 5 < r[3]) && (i = true), { isStartMove: i, offsetInfo: { offsetX: o, offsetY: e } };
}
function moveCanvas(t, n, e, r, o, i, u, a, c, f, l, s) {
  if (u.x !== void 0 && a.x !== void 0) {
    var h = getTwoPointsOffsetInfo(u, a, f);
    if (h.isStartMove) {
      var { offsetX: u, offsetY: a } = h.offsetInfo;
      clearCanvas(t);
      f = { x: i.x + u, y: i.y + a };
      return drawImage(t, e, f.x, f.y, r.width * o, r.height * o), drawCropList(n, c, i, s, h.offsetInfo), drawTagList(n, l, i, s, { offsetX: u, offsetY: a }), { offsetX: u, offsetY: a };
    }
  }
}
function fixPoint(t, n, e) {
  return { x: t.x / n * DPI + e.x, y: t.y / n * DPI + e.y };
}
function getTouchPoint(t, n, e, r) {
  e = fixPoint({ x: t.layerX, y: t.layerY }, n, e);
  return { x: e.x, y: e.y, type: r };
}
function moveDrawUnshowTagDashRect(n, t, i, u, a, c, f, l, e, s, h) {
  if (t === "tag" && !e) {
    let t2 = i.filter((t3) => !t3.isShow), e2 = false, r = getTouchPoint(f, u, c, "move"), o = [];
    t2.forEach((t3) => {
      var n2 = transfromBoxToRect(t3, t3.scale, a);
      pointIsInRect(r, n2) && (o.push(t3), e2 = true);
    }), e2 ? (s = true, drawTagList(n, o, a, h, void 0, r)) : s && (drawCropList(n, l, a, h), drawTagList(n, i, a, h), s = false);
  }
  return s;
}
function getCropFourBorderRect(t, n, e) {
  n = transfromBoxToRect(t, t.scale, n);
  return [{ index: e, name: "left-top", type: "vertex", positions: [n[0] - 3, n[1] - 3, 6, 6] }, { index: e, name: "right-top", type: "vertex", positions: [n[0] + n[2] - 3, n[1] - 3, 6, 6] }, { index: e, name: "left-bottom", type: "vertex", positions: [n[0] - 3, n[1] + n[3] - 3, 6, 6] }, { index: e, name: "right-bottom", type: "vertex", positions: [n[0] + n[2] - 3, n[1] + n[3] - 3, 6, 6] }, { index: e, name: "left", type: "border", positions: [n[0] - 3, n[1] + 3, 6, n[3] - 3] }, { index: e, name: "top", type: "border", positions: [n[0] + 3, n[1] - 3, n[2] - 3, 6] }, { index: e, name: "right", type: "border", positions: [n[0] + n[2] - 3, n[1] + 3, 6, n[3] - 3] }, { index: e, name: "bottom", type: "border", positions: [n[0] + 3, n[1] + n[3] - 3, n[2] - 3, 6] }];
}
function pointIsInRectList(e, t) {
  let r = false, o = [], i = [];
  return t.forEach((t2, n) => {
    pointIsInRect(e, t2) && (r = true, o.push(t2), i.push(n));
  }), { hasIn: r, coverList: o, coverIndexList: i };
}
function detectEventIsTriggerOnCropBorderOrVertex(t, n, e, r, o) {
  o = getTouchPoint(t, e, o, "move");
  let i = n.map((t2, n2) => getCropFourBorderRect(t2, r, n2)).flat(), u = pointIsInRectList(o, i.map((t2) => t2.positions));
  return { hasIn: u.hasIn, list: u.coverIndexList.map((t2) => i[t2]) };
}
function findOneBorderOrVertex(t) {
  t = t.find((t2) => t2.type === "vertex") || t[0];
  if (!t)
    throw new Error("findOneBorderOrVertex list may be empty.");
  return t;
}
function moveDetectCropBorderSetCursor(t, n, e, r, o, i, u, a) {
  e !== "crop" || a || ((u = detectEventIsTriggerOnCropBorderOrVertex(n, r, o, i, u)).hasIn ? ((u = findOneBorderOrVertex(u.list).name) !== "left-top" && u !== "right-bottom" || (t.style.cursor = "nwse-resize"), u !== "right-top" && u !== "left-bottom" || (t.style.cursor = "nesw-resize"), u !== "left" && u !== "right" || (t.style.cursor = "col-resize"), u !== "top" && u !== "bottom" || (t.style.cursor = "row-resize")) : t.style.cursor = "auto");
}
function getResizeCropInfo(t, n, e) {
  if (!e)
    return t;
  let r = lodash.exports.cloneDeep(t), o = e.name;
  var { offsetX: e, offsetY: n } = n;
  return o.includes("left") && (r.startX += e), o.includes("top") && (r.startY += n), o.includes("right") && (r.endX += e), o.includes("bottom") && (r.endY += n), r;
}
function moveResizeCrop(t, n, e, r, o, i, u, a, c, f, l) {
  if (n && n.x !== void 0 && e && e.x !== void 0) {
    e = getTwoPointsOffsetInfo(n, e, i);
    if (e.isStartMove) {
      var { offsetX: i, offsetY: e } = e.offsetInfo, o = transfromBoxToRect(getResizeCropInfo(r, { offsetX: i / o, offsetY: e / o }, c), o, u);
      return drawCropList(t, f, u, l), drawCropRect(t, ...o, l, true), drawTagList(t, a, u, l), o;
    }
  }
}
function getHypotenuseValue(t, n) {
  return Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2));
}
function getDotDistence(t, n) {
  return Math.abs(t - n);
}
function getTwoFingerTouchListDistence(t) {
  return { width: getDotDistence(t[0].clientX, t[1].clientX), height: getDotDistence(t[0].clientY, t[1].clientY) };
}
function transfromRect2Box(t, n, e = 1) {
  return fixBoxInfo({ startX: (t[0] - n.x) / e, startY: (t[1] - n.y) / e, endX: (t[0] + t[2] - n.x) / e, endY: (t[1] + t[3] - n.y) / e }).info;
}
function initBoundingArrScale(t, n) {
  return t.map((t2) => (t2.scale !== 1 && (t2.scale = n), t2));
}
var ImgMark_vue_vue_type_style_index_0_scoped_true_lang = "", _export_sfc = (t, n) => {
  const e = t.__vccOpts || t;
  for (var [r, o] of n)
    e[r] = o;
  return e;
};
const _withScopeId = (t) => (pushScopeId("data-v-fa2f984c"), t = t(), popScopeId(), t), _hoisted_1 = ["onMousedown", "onClick", "onMouseup", "onMousemove", "onMouseout", "onMousewheel", "onTouchmove", "onTouchstart", "onTouchend"], _hoisted_2 = { key: 0, class: "mode-panel" }, _hoisted_3 = { class: "status" }, _hoisted_4 = { class: "text" }, _hoisted_5 = _withScopeId(() => createElementVNode("div", { class: "tip" }, [createElementVNode("kbd", null, "Ctrl"), createTextVNode(" + "), createElementVNode("kbd", null, "B"), createElementVNode("span", { style: { "font-size": "14px", "margin-left": "10px" } }, "\u5207\u6362\u6A21\u5F0F")], -1)), _sfc_main = defineComponent({ props: { cropConfig: { default: () => DEFAULT_CONFIG.cropConfig }, layerConfig: { default: () => DEFAULT_CONFIG.layerConfig }, tagConfig: { default: () => DEFAULT_CONFIG.tagConfig }, isShowTip: { type: Boolean, default: false }, enableCropResize: { type: Boolean, default: true }, enableDrawCropOutOfImg: { type: Boolean, default: true }, enableDrawTagOutOfCrop: { type: Boolean, default: true }, enableDrawTagOutOfImg: { type: Boolean, default: true }, cropList: { default: () => Array() }, tagList: { default: () => Array() }, mode: { default: "crop" }, src: null }, emits: ["update:cropList", "cropListChange", "update:tagList", "tagListChange", "update:mode", "tagsStatusChange", "cropChange"], setup(e, { expose: t, emit: r }) {
  const a = e;
  let o = false, i = void 0, u = void 0, c = { last: { down: void 0, up: void 0 }, prev: { down: void 0, up: void 0 } }, f = 0.1, l = false;
  function n() {
    l = false, f = 0.1, Y.resizeCropHovering = void 0;
  }
  let s = false, h = null, p = null, d, v = lodash.exports.cloneDeep(defaultWH), g = lodash.exports.cloneDeep(defaultWH), _ = lodash.exports.cloneDeep(defaultPoint), y = lodash.exports.cloneDeep(defaultPoint), w = { x: 0, y: 0 }, m = 0, x = { x: 0, y: 0 }, b = { x: 0, y: 0 }, C = 1, I, L, T = 1, D, R = 1, S, B, A = [], O = [], k = computed(() => {
    var t2 = lodash.exports.cloneDeep(DEFAULT_CONFIG);
    return Object.assign(t2.cropConfig, a.cropConfig), Object.assign(t2.tagConfig, a.tagConfig), Object.assign(t2.layerConfig, a.layerConfig), t2;
  });
  let E = ref(), j = ref(), M = ref(), Y = { isScaleing: false, isDrawRecting: false, isMoving: false, resizeCropHovering: void 0, isMouseDown: () => _.x !== void 0, isMouseUpDownPoints: () => _.x !== void 0 && y.x !== void 0 }, z = { dragCreatRectInterrupt() {
    F();
  }, dragCreatOrResizeRect(t2) {
    var _a;
    p && (Y.isDrawRecting = true, t2 == "drawCrop" && (S = moveDrawCropRect(p, _, y, R, b, O, x, k.value), drawTagList(p, A, x, k.value)), t2 == "drawTag" && (drawCropList(p, O, x, k.value), B = moveDrawTagRect(p, _, y, R, b, A, x, k.value)), t2 == "resizeCrop" && (a.enableCropResize ? (t2 = O[((_a = Y.resizeCropHovering) == null ? void 0 : _a.index) || 0], Y.resizeCropHovering && t2 && (S = moveResizeCrop(p, _, y, t2, t2.scale || 1, R, x, A, Y.resizeCropHovering, O.filter((t3, n2) => {
      var _a2;
      return n2 !== ((_a2 = Y.resizeCropHovering) == null ? void 0 : _a2.index);
    }), k.value))) : z.move()));
  }, changeMode() {
    a.mode === "tag" ? r("update:mode", "crop") : r("update:mode", "tag");
  }, scale(t2, n2) {
    if (!d || !h || !p)
      throw new Error("can't find canvas ctx or img");
    Y.isScaleing = true, h.translate(b.x, b.y), p.translate(b.x, b.y), b = { x: b.x - (n2.x / (R * t2) - n2.x / R), y: b.y - (n2.y / (R * t2) - n2.y / R) }, h.scale(t2, t2), p.scale(t2, t2), h.translate(-b.x, -b.y), p.translate(-b.x, -b.y), R *= t2, p.font = "20px serif", clearCanvas(h), clearCanvas(p), drawImage(h, d, x.x, x.y, g.width * C, g.height * C), drawCropList(p, O, x, k.value), drawTagList(p, A, x, k.value), l = false, Y.isScaleing = false;
  }, move() {
    var t2;
    h && p && d && !Y.isScaleing && (Y.isMoving = true, (t2 = moveCanvas(h, p, d, g, C, x, _, y, O, R, A, k.value)) && (L = lodash.exports.cloneDeep(x), L && (L.x += t2.offsetX, L.y += t2.offsetY)));
  }, hoverRect(t2) {
    p && (l = moveDrawUnshowTagDashRect(p, a.mode, A, R, x, b, t2, O, Y.isScaleing, l, k.value), a.enableCropResize && moveDetectCropBorderSetCursor(E.value, t2, a.mode, O, R, x, b, Y.isScaleing));
  } }, X = { onKeyUpCtrlB() {
    z.changeMode();
  }, onKeyUpSpace() {
    Y.isMoving || Y.resizeCropHovering || z.dragCreatRectInterrupt(), nextTick().then(() => {
      o = false;
    });
  }, onKeyDownSpace() {
    E.value.style.cursor = "crosshair", Y.isMouseDown() || (o = true);
  }, onMouseOverMove(t2) {
    Y.isMouseDown() ? this.onHoldMouseLeftBtnMove(t2) : z.hoverRect(t2);
  }, onSpaceMove() {
    a.mode === "crop" ? z.dragCreatOrResizeRect("drawCrop") : z.dragCreatOrResizeRect("drawTag");
  }, onHoldMouseLeftBtnMove(t2) {
    y = { x: t2.layerX, y: t2.layerY }, o ? this.onSpaceMove() : (a.mode === "tag" && z.move(), a.mode === "crop" && (Y.resizeCropHovering ? z.dragCreatOrResizeRect("resizeCrop") : z.move()));
  }, onDoubleClick(t2) {
    a.mode === "crop" && function(r2) {
      if (r2.length !== 0) {
        let e2 = [];
        if (r2.length !== 0) {
          let t3 = q();
          t3.forEach((n2) => {
            r2.find((t4) => t4.startX === n2.startX && t4.endX === n2.endX && t4.startY === n2.startY && t4.endY === n2.endY) || e2.push(n2);
          });
        }
        O = initBoundingArrScale(e2, C), nextTick(() => {
          if (!p)
            throw new Error("ctx2  can't find on removeItem.");
          drawCropList(p, O, x, k.value), drawTagList(p, A, x, k.value), N();
        });
      }
    }(pointIsInBoxList(t2, O, C, x).boxList);
  }, onCick(t2) {
    var n2;
    a.mode === "tag" && p && (drawCropList(p, O, x, k.value), { isReDraw: n2, redrawList: t2 } = drawTagList(p, A, x, k.value, void 0, t2), n2 && (drawCropList(p, O, x, k.value), drawTagList(p, A, x, k.value), H(), r("tagsStatusChange", $(t2))));
  }, onWheel(t2, n2) {
    z.scale(t2, n2);
  }, init() {
    !async function() {
      n(), s = false, h = null, p = null, d = void 0, v = lodash.exports.cloneDeep(defaultWH), g = lodash.exports.cloneDeep(defaultWH), _ = lodash.exports.cloneDeep(defaultPoint), y = lodash.exports.cloneDeep(defaultPoint), x = { x: 0, y: 0 }, b = { x: 0, y: 0 }, C = 1, I = void 0, L = void 0, T = 1, D = void 0, R = 1, S = void 0, B = void 0, A = [], O = [], await nextTick(), function() {
        if (1 < a.cropList.length) {
          let n2 = { startX: 1 / 0, startY: 1 / 0, endX: -1 / 0, endY: -1 / 0 };
          a.cropList.forEach((t3) => {
            t3 = fixBoxInfo(t3);
            t3.info.startX < n2.startX && (n2.startX = t3.info.startX), t3.info.startY < n2.startY && (n2.startY = t3.info.startY), t3.info.endX > n2.endX && (n2.endX = t3.info.endX), t3.info.endY > n2.endY && (n2.endY = t3.info.endY);
          }), I = n2;
        }
        a.cropList.length == 1 && (I = a.cropList[0]);
      }(), A = a.tagList, O = a.cropList;
      var t2 = E.value.getBoundingClientRect();
      return D = { top: t2.top, right: t2.right, bottom: t2.bottom, left: t2.left, width: t2.width, height: t2.height, x: t2.x, y: t2.y }, document.addEventListener("keydown", P), document.addEventListener("keyup", W), h = j.value.getContext("2d"), p = M.value.getContext("2d"), h && p ? (v = amendDpi(getElementWH(h.canvas)), v ? (initCanvasWH(h, v), initCanvasWH(p, v), loadImage(a.src).then((t3) => {
        if (!v || !h || !p)
          return Promise.reject("canvasWH or canvas var not has valid values.");
        d = t3, g = { width: d.width, height: d.height };
        var n2, e2, r2 = initScale(v, d);
        return C = T = r2.scale, I ? (n2 = transfromBoxToRect(I, T, x), e2 = (v.width - 0.05 * v.width) / n2[2], t3 = (v.height - 0.05 * v.height) / n2[3], (t3 = n2[2] >= n2[3] ? e2 : t3) == e2 ? (x.x = 0.05 * v.width / 2 / t3, x.y = (v.height / t3 - n2[3]) / 2) : (x.x = (v.width / t3 - n2[2]) / 2, x.y = 0.05 * v.height / 2 / t3), V({ deltaY: 1, clientX: 0, clientY: 0, preventDefault() {
        }, __zoom: t3 }, true)) : (r2.fit === "width" ? x.x = (v.width - g.width * C) / 2 : x.y = (v.height - g.height * C) / 2, I = { startX: 0, startY: 0, endX: 0 + g.width, endY: 0 + g.height }), drawImage(h, d, x.x, x.y, d.width * C, d.height * C), O = initBoundingArrScale(O, C), drawCropList(p, O, x, k.value), A = initBoundingArrScale(A, C), drawTagList(p, A, x, k.value), true;
      })) : Promise.reject("Error: can't get canvas height and width.")) : Promise.reject("Error: can't find canvas element.");
    }().then(() => {
      s = true;
    });
  }, resize() {
    requestAnimationFrame(() => {
      console.log("resized"), async function() {
        s = false, v = lodash.exports.cloneDeep(defaultWH), _ = lodash.exports.cloneDeep(defaultPoint), y = lodash.exports.cloneDeep(defaultPoint), D = void 0, await nextTick();
        var t2 = E.value.getBoundingClientRect();
        if (D = { top: t2.top, right: t2.right, bottom: t2.bottom, left: t2.left, width: t2.width, height: t2.height, x: t2.x, y: t2.y }, h && p && d) {
          if (v = amendDpi(getElementWH(h.canvas)), !v)
            return Promise.reject("Error: can't get canvas height and width.");
          initCanvasWH(h, v), initCanvasWH(p, v), h.scale(R, R), p.scale(R, R), h.translate(-b.x, -b.y), p.translate(-b.x, -b.y), drawImage(h, d, x.x, x.y, d.width * C, d.height * C), O = initBoundingArrScale(O, C), drawCropList(p, O, x, k.value), A = initBoundingArrScale(A, C), drawTagList(p, A, x, k.value), s = true;
        } else
          console.error("ctx or ctx2 or img can't find on resize.");
      }();
    });
  } };
  function P(t2) {
    t2.code === "Space" && (t2.preventDefault(), X.onKeyDownSpace());
  }
  function W(t2) {
    t2.code === "KeyB" && t2.ctrlKey && X.onKeyUpCtrlB(), t2.code === "Space" && X.onKeyUpSpace();
  }
  function U() {
    X.resize();
  }
  function V(t2, n2) {
    let e2 = t2;
    if (!D)
      throw new Error("can't find  containerInfo.");
    var r2, o2;
    (s || e2.__zoom) && (e2.preventDefault(), Y.isDrawRecting || Y.isMoving || (r2 = n2 ? 0 : (e2.clientX - D.left) * DPI, o2 = n2 ? 0 : (e2.clientY - D.top) * DPI, t2 = e2.deltaY < 0 ? 1 : -1, t2 = n2 ? e2.__zoom : Math.exp(t2 * f), R * t2 < 0.2 || X.onWheel(t2, { x: r2, y: o2 })));
  }
  function F() {
    if (s) {
      var t2, n2;
      if (Y.isMoving = false, L && (x = lodash.exports.cloneDeep(L)), L = void 0, Y.isMouseUpDownPoints())
        if (a.mode === "crop") {
          if (S) {
            let t3 = transfromRect2Box(S, x, C);
            Y.resizeCropHovering ? O[Y.resizeCropHovering.index] = t3 : (t3.scale = 1, O.push(t3)), N(), S = void 0;
          }
        } else
          B && (t2 = getVertexPositionByTwoPoints(_, y), n2 = transfromRect2Box(B, x), Object.assign(n2, { scale: 1, isShow: true, __newAdd: true, __vertexPosition: t2 }), A.push(n2), H(), B = void 0);
      Y.resizeCropHovering = void 0, Y.isDrawRecting = false, _ = lodash.exports.cloneDeep(defaultPoint), y = lodash.exports.cloneDeep(defaultPoint), E.value.style.cursor = "auto";
    }
  }
  function N() {
    nextTick().then(() => {
      var t2 = q();
      r("update:cropList", t2), r("cropListChange", t2);
    });
  }
  function H() {
    let t2 = $();
    nextTick().then(() => {
      r("update:tagList", t2), r("tagListChange", t2);
    });
  }
  function $(t2, n2, r2, o2) {
    let e2 = t2 || A, i2 = n2 || O, u2 = [];
    return e2.forEach((t3) => {
      let n3 = lodash.exports.cloneDeep(t3);
      var e3 = t3.scale === 1 ? r2 || C : 1;
      Object.assign(n3, { startX: t3.startX / e3, startY: t3.startY / e3, endX: t3.endX / e3, endY: t3.endY / e3 }), n3.scale === 1 && delete n3.scale, !a.enableDrawTagOutOfCrop && n3.__newAdd && n3.__vertexPosition ? pointIsInBoxList(getPointByBoxAndVertexPosition(n3, n3.__vertexPosition), i2) : (delete n3.__newAdd, a.enableDrawTagOutOfCrop && !a.enableDrawTagOutOfImg && (e3 = { startX: 0, startY: 0, endX: (e3 = o2 || g).width, endY: e3.height }, (e3 = getTwoBoxIntersectPart(n3, e3)) && isBoxValidity(e3) ? Object.assign(n3, e3) : n3.__isValidity = false), u2.push(n3));
    }), u2.filter((t3) => t3.__isValidity !== false);
  }
  function q() {
    let t2 = O.map((t3) => {
      let n2 = { startX: t3.startX, startY: t3.startY, endX: t3.endX, endY: t3.endY, _del: false };
      return a.enableDrawCropOutOfImg || (t3 = { startX: 0, startY: 0, endX: (t3 = g).width, endY: t3.height }, (t3 = getTwoBoxIntersectPart(n2, t3)) && isBoxValidity(t3) ? n2 = t3 : n2._del = true), n2;
    });
    return t2.filter((t3) => !t3._del);
  }
  function G(t2) {
    var n2;
    s && h && p && (n2 = new Date().getTime(), i = n2, c.prev.down ? c.last.down = n2 : c.prev.down = n2, t2 = t2, _ = { x: t2.layerX, y: t2.layerY }, a.mode !== "crop" || o || (t2 = detectEventIsTriggerOnCropBorderOrVertex(t2, O, R, x, b)).hasIn && (Y.resizeCropHovering = findOneBorderOrVertex(t2.list)));
  }
  function K(t2) {
    s && (t2 = t2, u = new Date().getTime(), X.onMouseOverMove(t2));
  }
  function Z() {
    var t2;
    s && (t2 = new Date().getTime(), c.prev.up ? c.last.up = t2 : c.prev.up = t2, F());
  }
  function J() {
    s && (E.value.style.cursor = "auto", F());
  }
  function Q(t2) {
    var n2;
    s && (n2 = getTouchPoint(t2, R, b, "click"), t2 = u && i ? u - i : 0, i = void 0, u = void 0, 100 < t2 || (X.onCick(n2), c.prev.up && c.prev.down && c.last.up && c.last.down && (c.last.up - c.prev.down < 360 && X.onDoubleClick(n2), c.prev.down = c.last.down, c.prev.up = c.last.up, c.last.down = void 0, c.last.up = void 0)));
  }
  function tt(t2) {
    i = new Date().getTime();
    var n2, e2, r2, o2 = amendMobileTouchEventDpi(t2);
    t2.touches.length === 1 && G({ layerX: o2[0].clientX, layerY: o2[0].clientY }), t2.touches.length == 2 && ({ width: n2, height: e2 } = getTwoFingerTouchListDistence(o2), r2 = getHypotenuseValue(n2, e2), console.log("TouchStart", t2.touches, n2, e2, r2), w = { x: (o2[0].clientX + o2[1].clientX) / 2, y: (o2[0].clientY + o2[1].clientY) / 2 });
  }
  async function nt(t2) {
    u = new Date().getTime();
    var n2 = amendMobileTouchEventDpi(t2);
    t2.touches.length === 1 && K({ layerX: n2[0].clientX, layerY: n2[0].clientY }), t2.touches.length == 2 && ({ width: t2, height: n2 } = getTwoFingerTouchListDistence(n2), n2 = -((t2 = getHypotenuseValue(t2, n2)) - m), m = t2, await nextTick(), V({ onTouchMove: true, deltaY: n2, preventDefault() {
      console.log("none");
    }, clientX: w.x, clientY: w.y }));
  }
  function et(t2) {
    Z();
  }
  return onBeforeUnmount(() => {
    window.removeEventListener("resize", U), document.removeEventListener("keydown", P), document.removeEventListener("keyup", W), n();
  }), onMounted(() => {
    X.init(), window.addEventListener("resize", U);
  }), watch(() => a.mode, (t2) => {
    t2 === "tag" && (E.value.style.cursor = "auto");
  }), watch(() => a.src, (t2) => {
    t2 && X.init();
  }), watch(() => a.tagList, (t2) => {
    p && (drawCropList(p, O, x, k.value), A = initBoundingArrScale(t2, C), drawTagList(p, A, x, k.value));
  }, { deep: true }), watch(() => a.cropList, (t2) => {
    O = initBoundingArrScale(t2, C), p && (drawCropList(p, O, x, k.value), drawTagList(p, A, x, k.value));
  }), t({ removeTagItems: function(e2) {
    let r2 = [];
    if (e2.length !== 0) {
      let t2 = $();
      t2.forEach((n2) => {
        e2.find((t3) => t3.startX === n2.startX && t3.endX === n2.endX && t3.startY === n2.startY && t3.endY === n2.endY) || r2.push(n2);
      });
    }
    A = initBoundingArrScale(r2, C), nextTick(() => {
      if (!p)
        throw new Error("ctx2  can't find on removeItem.");
      drawCropList(p, O, x, k.value), drawTagList(p, A, x, k.value), H();
    });
  }, getTagListGroupByCropIndex: function() {
    let t2 = $(), e2 = q();
    return t2.forEach((t3) => {
      var n2 = pointIsInBoxList({ x: t3.startX, y: t3.startY }, e2);
      t3.__groupIndex = n2.indexList[0];
    }), console.log(t2, e2), lodash.exports.groupBy(t2, "__groupIndex");
  } }), (t2, n2) => (openBlock(), createElementBlock("div", { class: "comp-ocr-img", ref_key: "containerRef", ref: E, onMousedown: withModifiers(G, ["stop"]), onClick: withModifiers(Q, ["stop"]), onMouseup: withModifiers(Z, ["stop"]), onMousemove: withModifiers(K, ["stop"]), onMouseout: withModifiers(J, ["stop"]), onMousewheel: withModifiers(V, ["stop"]), onTouchmove: withModifiers(nt, ["stop", "prevent"]), onTouchstart: withModifiers(tt, ["stop"]), onTouchend: withModifiers(et, ["stop"]) }, [createElementVNode("canvas", { class: "canvas", ref_key: "canvasRef", ref: j }, null, 512), createElementVNode("canvas", { class: "canvas2", ref_key: "canvas2Ref", ref: M }, null, 512), unref(a).isShowTip ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createElementVNode("div", { class: normalizeClass(["circle", { crop: e.mode === "crop", tag: e.mode === "tag" }]) }, null, 2), createElementVNode("div", _hoisted_4, toDisplayString(e.mode === "crop" ? "\u88C1\u526A\u6A21\u5F0F" : "\u6807\u8BB0\u9519\u8BEF\u884C"), 1)]), _hoisted_5])) : createCommentVNode("", true)], 40, _hoisted_1));
} });
var ImgMark = _export_sfc(_sfc_main, [["__scopeId", "data-v-fa2f984c"]]);
export { ImgMark };
