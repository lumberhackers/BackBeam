function it(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const tc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nc = /* @__PURE__ */ it(tc);
function As(e) {
  return !!e || e === "";
}
function nr(e) {
  if (x(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = G(o) ? sc(o) : nr(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (G(e))
      return e;
    if (Y(e))
      return e;
  }
}
const oc = /;(?![^(]*\))/g, rc = /:(.+)/;
function sc(e) {
  const t = {};
  return e.split(oc).forEach((n) => {
    if (n) {
      const o = n.split(rc);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function or(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (x(e))
    for (let n = 0; n < e.length; n++) {
      const o = or(e[n]);
      o && (t += o + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ic = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", cc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", lc = /* @__PURE__ */ it(ic), ac = /* @__PURE__ */ it(cc), $r = (e) => G(e) ? e : e == null ? "" : x(e) || Y(e) && (e.toString === Ms || !V(e.toString)) ? JSON.stringify(e, Ts, 2) : String(e), Ts = (e, t) => t && t.__v_isRef ? Ts(e, t.value) : ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Rs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Y(t) && !x(t) && !ks(t) ? String(t) : t, K = "development" !== "production" ? Object.freeze({}) : {}, Mt = "development" !== "production" ? Object.freeze([]) : [], ue = () => {
}, Ps = () => !1, uc = /^on[^a-z]/, hn = (e) => uc.test(e), xn = (e) => e.startsWith("onUpdate:"), re = Object.assign, rr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fc = Object.prototype.hasOwnProperty, L = (e, t) => fc.call(e, t), x = Array.isArray, ht = (e) => Kn(e) === "[object Map]", Rs = (e) => Kn(e) === "[object Set]", V = (e) => typeof e == "function", G = (e) => typeof e == "string", sr = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", ir = (e) => Y(e) && V(e.then) && V(e.catch), Ms = Object.prototype.toString, Kn = (e) => Ms.call(e), cr = (e) => Kn(e).slice(8, -1), ks = (e) => Kn(e) === "[object Object]", lr = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Sn = /* @__PURE__ */ it(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dc = /* @__PURE__ */ it("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, hc = /-(\w)/g, xt = zn((e) => e.replace(hc, (t, n) => n ? n.toUpperCase() : "")), pc = /\B([A-Z])/g, nt = zn((e) => e.replace(pc, "-$1").toLowerCase()), Jn = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ut = zn((e) => e ? `on${Jn(e)}` : ""), tn = (e, t) => !Object.is(e, t), Jt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Vn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, gc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fr;
const xs = () => Fr || (Fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Po(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class _c {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    } else
      "development" !== "production" && Po("cannot run an inactive effect scope.");
  }
  on() {
    Oe = this;
  }
  off() {
    Oe = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function mc(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function wc() {
  return Oe;
}
const nn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Vs = (e) => (e.w & ot) > 0, Bs = (e) => (e.n & ot) > 0, Ec = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ot;
}, bc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Vs(r) && !Bs(r) ? r.delete(e) : t[n++] = r, r.w &= ~ot, r.n &= ~ot;
    }
    t.length = n;
  }
}, Ro = /* @__PURE__ */ new WeakMap();
let qt = 0, ot = 1;
const Mo = 30;
let we;
const pt = Symbol("development" !== "production" ? "iterate" : ""), ko = Symbol("development" !== "production" ? "Map key iterate" : "");
class ar {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, mc(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = we, n = tt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = we, we = this, tt = !0, ot = 1 << ++qt, qt <= Mo ? Ec(this) : Lr(this), this.fn();
    } finally {
      qt <= Mo && bc(this), ot = 1 << --qt, we = this.parent, tt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    we === this ? this.deferStop = !0 : this.active && (Lr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Lr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let tt = !0;
const $s = [];
function vt() {
  $s.push(tt), tt = !1;
}
function Ct() {
  const e = $s.pop();
  tt = e === void 0 ? !0 : e;
}
function Ce(e, t, n) {
  if (tt && we) {
    let o = Ro.get(e);
    o || Ro.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = nn());
    const s = "development" !== "production" ? { effect: we, target: e, type: t, key: n } : void 0;
    xo(r, s);
  }
}
function xo(e, t) {
  let n = !1;
  qt <= Mo ? Bs(e) || (e.n |= ot, n = !Vs(e)) : n = !e.has(we), n && (e.add(we), we.deps.push(e), "development" !== "production" && we.onTrack && we.onTrack(Object.assign({ effect: we }, t)));
}
function ze(e, t, n, o, r, s) {
  const i = Ro.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && x(e))
    i.forEach((u, d) => {
      (d === "length" || d >= o) && c.push(u);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        x(e) ? lr(n) && c.push(i.get("length")) : (c.push(i.get(pt)), ht(e) && c.push(i.get(ko)));
        break;
      case "delete":
        x(e) || (c.push(i.get(pt)), ht(e) && c.push(i.get(ko)));
        break;
      case "set":
        ht(e) && c.push(i.get(pt));
        break;
    }
  const l = "development" !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && ("development" !== "production" ? Tt(c[0], l) : Tt(c[0]));
  else {
    const u = [];
    for (const d of c)
      d && u.push(...d);
    "development" !== "production" ? Tt(nn(u), l) : Tt(nn(u));
  }
}
function Tt(e, t) {
  const n = x(e) ? e : [...e];
  for (const o of n)
    o.computed && jr(o, t);
  for (const o of n)
    o.computed || jr(o, t);
}
function jr(e, t) {
  (e !== we || e.allowRecurse) && ("development" !== "production" && e.onTrigger && e.onTrigger(re({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const yc = /* @__PURE__ */ it("__proto__,__v_isRef,__isVue"), Fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(sr)
), vc = /* @__PURE__ */ Yn(), Cc = /* @__PURE__ */ Yn(!1, !0), Nc = /* @__PURE__ */ Yn(!0), Ic = /* @__PURE__ */ Yn(!0, !0), Ur = /* @__PURE__ */ Dc();
function Dc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let s = 0, i = this.length; s < i; s++)
        Ce(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      vt();
      const o = F(this)[t].apply(this, n);
      return Ct(), o;
    };
  }), e;
}
function Yn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Js : zs : t ? Ks : Ws).get(o))
      return o;
    const i = x(o);
    if (!e && i && L(Ur, r))
      return Reflect.get(Ur, r, s);
    const c = Reflect.get(o, r, s);
    return (sr(r) ? Fs.has(r) : yc(r)) || (e || Ce(o, "get", r), t) ? c : ie(c) ? i && lr(r) ? c : c.value : Y(c) ? e ? Ys(c) : Qn(c) : c;
  };
}
const Sc = /* @__PURE__ */ Ls(), Oc = /* @__PURE__ */ Ls(!0);
function Ls(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (rt(i) && ie(i) && !ie(r))
      return !1;
    if (!e && (!Bn(r) && !rt(r) && (i = F(i), r = F(r)), !x(n) && ie(i) && !ie(r)))
      return i.value = r, !0;
    const c = x(n) && lr(o) ? Number(o) < n.length : L(n, o), l = Reflect.set(n, o, r, s);
    return n === F(s) && (c ? tn(r, i) && ze(n, "set", o, r, i) : ze(n, "add", o, r)), l;
  };
}
function Ac(e, t) {
  const n = L(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && ze(e, "delete", t, void 0, o), r;
}
function Tc(e, t) {
  const n = Reflect.has(e, t);
  return (!sr(t) || !Fs.has(t)) && Ce(e, "has", t), n;
}
function Pc(e) {
  return Ce(e, "iterate", x(e) ? "length" : pt), Reflect.ownKeys(e);
}
const js = {
  get: vc,
  set: Sc,
  deleteProperty: Ac,
  has: Tc,
  ownKeys: Pc
}, Us = {
  get: Nc,
  set(e, t) {
    return "development" !== "production" && Po(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return "development" !== "production" && Po(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Rc = /* @__PURE__ */ re({}, js, {
  get: Cc,
  set: Oc
}), Mc = /* @__PURE__ */ re({}, Us, {
  get: Ic
}), ur = (e) => e, Zn = (e) => Reflect.getPrototypeOf(e);
function wn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), s = F(t);
  n || (t !== s && Ce(r, "get", t), Ce(r, "get", s));
  const { has: i } = Zn(r), c = o ? ur : n ? fr : on;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function En(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && Ce(o, "has", e), Ce(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function bn(e, t = !1) {
  return e = e.__v_raw, !t && Ce(F(e), "iterate", pt), Reflect.get(e, "size", e);
}
function Hr(e) {
  e = F(e);
  const t = F(this);
  return Zn(t).has.call(t, e) || (t.add(e), ze(t, "add", e, e)), this;
}
function Wr(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = Zn(n);
  let s = o.call(n, e);
  s ? "development" !== "production" && Hs(n, o, e) : (e = F(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? tn(t, i) && ze(n, "set", e, t, i) : ze(n, "add", e, t), this;
}
function Kr(e) {
  const t = F(this), { has: n, get: o } = Zn(t);
  let r = n.call(t, e);
  r ? "development" !== "production" && Hs(t, n, e) : (e = F(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && ze(t, "delete", e, void 0, s), i;
}
function zr() {
  const e = F(this), t = e.size !== 0, n = "development" !== "production" ? ht(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && ze(e, "clear", void 0, void 0, n), o;
}
function yn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = F(i), l = t ? ur : e ? fr : on;
    return !e && Ce(c, "iterate", pt), i.forEach((u, d) => o.call(r, l(u), l(d), s));
  };
}
function vn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = F(r), i = ht(s), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = r[e](...o), d = n ? ur : t ? fr : on;
    return !t && Ce(s, "iterate", l ? ko : pt), {
      next() {
        const { value: h, done: p } = u.next();
        return p ? { value: h, done: p } : {
          value: c ? [d(h[0]), d(h[1])] : d(h),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    if ("development" !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${Jn(e)} operation ${n}failed: target is readonly.`, F(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function kc() {
  const e = {
    get(s) {
      return wn(this, s);
    },
    get size() {
      return bn(this);
    },
    has: En,
    add: Hr,
    set: Wr,
    delete: Kr,
    clear: zr,
    forEach: yn(!1, !1)
  }, t = {
    get(s) {
      return wn(this, s, !1, !0);
    },
    get size() {
      return bn(this);
    },
    has: En,
    add: Hr,
    set: Wr,
    delete: Kr,
    clear: zr,
    forEach: yn(!1, !0)
  }, n = {
    get(s) {
      return wn(this, s, !0);
    },
    get size() {
      return bn(this, !0);
    },
    has(s) {
      return En.call(this, s, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: yn(!0, !1)
  }, o = {
    get(s) {
      return wn(this, s, !0, !0);
    },
    get size() {
      return bn(this, !0);
    },
    has(s) {
      return En.call(this, s, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: yn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = vn(s, !1, !1), n[s] = vn(s, !0, !1), t[s] = vn(s, !1, !0), o[s] = vn(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [xc, Vc, Bc, $c] = /* @__PURE__ */ kc();
function qn(e, t) {
  const n = t ? e ? $c : Bc : e ? Vc : xc;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(L(n, r) && r in o ? n : o, r, s);
}
const Fc = {
  get: /* @__PURE__ */ qn(!1, !1)
}, Lc = {
  get: /* @__PURE__ */ qn(!1, !0)
}, jc = {
  get: /* @__PURE__ */ qn(!0, !1)
}, Uc = {
  get: /* @__PURE__ */ qn(!0, !0)
};
function Hs(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = cr(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ws = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap();
function Hc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Wc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hc(cr(e));
}
function Qn(e) {
  return rt(e) ? e : Xn(e, !1, js, Fc, Ws);
}
function Kc(e) {
  return Xn(e, !1, Rc, Lc, Ks);
}
function Ys(e) {
  return Xn(e, !0, Us, jc, zs);
}
function Pt(e) {
  return Xn(e, !0, Mc, Uc, Js);
}
function Xn(e, t, n, o, r) {
  if (!Y(e))
    return "development" !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Wc(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function gt(e) {
  return rt(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Bn(e) {
  return !!(e && e.__v_isShallow);
}
function Vo(e) {
  return gt(e) || rt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Zs(e) {
  return Vn(e, "__v_skip", !0), e;
}
const on = (e) => Y(e) ? Qn(e) : e, fr = (e) => Y(e) ? Ys(e) : e;
function qs(e) {
  tt && we && (e = F(e), "development" !== "production" ? xo(e.dep || (e.dep = nn()), {
    target: e,
    type: "get",
    key: "value"
  }) : xo(e.dep || (e.dep = nn())));
}
function Qs(e, t) {
  e = F(e), e.dep && ("development" !== "production" ? Tt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Tt(e.dep));
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function Bo(e) {
  return zc(e, !1);
}
function zc(e, t) {
  return ie(e) ? e : new Jc(e, t);
}
class Jc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : on(t);
  }
  get value() {
    return qs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Bn(t) || rt(t);
    t = n ? t : F(t), tn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : on(t), Qs(this, t));
  }
}
function On(e) {
  return ie(e) ? e.value : e;
}
const Yc = {
  get: (e, t, n) => On(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Xs(e) {
  return gt(e) ? e : new Proxy(e, Yc);
}
var Gs;
class Zc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Gs] = !1, this._dirty = !0, this.effect = new ar(t, () => {
      this._dirty || (this._dirty = !0, Qs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return qs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Gs = "__v_isReadonly";
function qc(e, t, n = !1) {
  let o, r;
  const s = V(e);
  s ? (o = e, r = "development" !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const i = new Zc(o, r, s || !r, n);
  return "development" !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const _t = [];
function An(e) {
  _t.push(e);
}
function Tn() {
  _t.pop();
}
function N(e, ...t) {
  vt();
  const n = _t.length ? _t[_t.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Qc();
  if (o)
    Ke(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${io(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Xc(r)), console.warn(...s);
  }
  Ct();
}
function Qc() {
  let e = _t[_t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Xc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Gc(n));
  }), t;
}
function Gc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${io(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...el(e.props), s] : [r + s];
}
function el(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ei(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ei(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = ei(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : V(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const dr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ke(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Gn(s, t, n);
  }
  return r;
}
function Re(e, t, n, o) {
  if (V(e)) {
    const s = Ke(e, t, n, o);
    return s && ir(s) && s.catch((i) => {
      Gn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Re(e[s], t, n, o));
  return r;
}
function Gn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = "development" !== "production" ? dr[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ke(l, null, 10, [e, i, c]);
      return;
    }
  }
  tl(e, n, r, o);
}
function tl(e, t, n, o = !0) {
  if ("development" !== "production") {
    const r = dr[t];
    if (n && An(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let rn = !1, $o = !1;
const pe = [];
let $e = 0;
const kt = [];
let Be = null, Qe = 0;
const ti = /* @__PURE__ */ Promise.resolve();
let hr = null;
const nl = 100;
function ol(e) {
  const t = hr || ti;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rl(e) {
  let t = $e + 1, n = pe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    sn(pe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function eo(e) {
  (!pe.length || !pe.includes(e, rn && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? pe.push(e) : pe.splice(rl(e.id), 0, e), ni());
}
function ni() {
  !rn && !$o && ($o = !0, hr = ti.then(si));
}
function sl(e) {
  const t = pe.indexOf(e);
  t > $e && pe.splice(t, 1);
}
function oi(e) {
  x(e) ? kt.push(...e) : (!Be || !Be.includes(e, e.allowRecurse ? Qe + 1 : Qe)) && kt.push(e), ni();
}
function Jr(e, t = rn ? $e + 1 : 0) {
  for ("development" !== "production" && (e = e || /* @__PURE__ */ new Map()); t < pe.length; t++) {
    const n = pe[t];
    if (n && n.pre) {
      if ("development" !== "production" && pr(e, n))
        continue;
      pe.splice(t, 1), t--, n();
    }
  }
}
function ri(e) {
  if (kt.length) {
    const t = [...new Set(kt)];
    if (kt.length = 0, Be) {
      Be.push(...t);
      return;
    }
    for (Be = t, "development" !== "production" && (e = e || /* @__PURE__ */ new Map()), Be.sort((n, o) => sn(n) - sn(o)), Qe = 0; Qe < Be.length; Qe++)
      "development" !== "production" && pr(e, Be[Qe]) || Be[Qe]();
    Be = null, Qe = 0;
  }
}
const sn = (e) => e.id == null ? 1 / 0 : e.id, il = (e, t) => {
  const n = sn(e) - sn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function si(e) {
  $o = !1, rn = !0, "development" !== "production" && (e = e || /* @__PURE__ */ new Map()), pe.sort(il);
  const t = "development" !== "production" ? (n) => pr(e, n) : ue;
  try {
    for ($e = 0; $e < pe.length; $e++) {
      const n = pe[$e];
      if (n && n.active !== !1) {
        if ("development" !== "production" && t(n))
          continue;
        Ke(n, null, 14);
      }
    }
  } finally {
    $e = 0, pe.length = 0, ri(e), rn = !1, hr = null, (pe.length || kt.length) && si(e);
  }
}
function pr(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > nl) {
      const o = t.ownerInstance, r = o && Ri(o.type);
      return N(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let mt = !1;
const At = /* @__PURE__ */ new Set();
"development" !== "production" && (xs().__VUE_HMR_RUNTIME__ = {
  createRecord: _o(ii),
  rerender: _o(al),
  reload: _o(ul)
});
const yt = /* @__PURE__ */ new Map();
function cl(e) {
  const t = e.type.__hmrId;
  let n = yt.get(t);
  n || (ii(t, e.type), n = yt.get(t)), n.instances.add(e);
}
function ll(e) {
  yt.get(e.type.__hmrId).instances.delete(e);
}
function ii(e, t) {
  return yt.has(e) ? !1 : (yt.set(e, {
    initialDef: Xt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Xt(e) {
  return Mi(e) ? e.__vccOpts : e;
}
function al(e, t) {
  const n = yt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Xt(o.type).render = t), o.renderCache = [], mt = !0, o.update(), mt = !1;
  }));
}
function ul(e, t) {
  const n = yt.get(e);
  if (!n)
    return;
  t = Xt(t), Yr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Xt(r.type);
    At.has(s) || (s !== n.initialDef && Yr(s, t), At.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (At.add(s), r.ceReload(t.styles), At.delete(s)) : r.parent ? (eo(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  oi(() => {
    for (const r of o)
      At.delete(Xt(r.type));
  });
}
function Yr(e, t) {
  re(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function _o(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Fe, Qt = [], Fo = !1;
function pn(e, ...t) {
  Fe ? Fe.emit(e, ...t) : Fo || Qt.push({ event: e, args: t });
}
function ci(e, t) {
  var n, o;
  Fe = e, Fe ? (Fe.enabled = !0, Qt.forEach(({ event: r, args: s }) => Fe.emit(r, ...s)), Qt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ci(s, t);
  }), setTimeout(() => {
    Fe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fo = !0, Qt = []);
  }, 3e3)) : (Fo = !0, Qt = []);
}
function fl(e, t) {
  pn("app:init", e, t, {
    Fragment: De,
    Text: ro,
    Comment: Me,
    Static: Mn
  });
}
function dl(e) {
  pn("app:unmount", e);
}
const hl = /* @__PURE__ */ gr("component:added"), li = /* @__PURE__ */ gr("component:updated"), pl = /* @__PURE__ */ gr("component:removed"), gl = (e) => {
  Fe && typeof Fe.cleanupBuffer == "function" && !Fe.cleanupBuffer(e) && pl(e);
};
function gr(e) {
  return (t) => {
    pn(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const _l = /* @__PURE__ */ ai("perf:start"), ml = /* @__PURE__ */ ai("perf:end");
function ai(e) {
  return (t, n, o) => {
    pn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function wl(e, t, n) {
  pn("component:emit", e.appContext.app, e, t, n);
}
function El(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || K;
  if ("development" !== "production") {
    const { emitsOptions: d, propsOptions: [h] } = e;
    if (d)
      if (!(t in d))
        (!h || !(ut(t) in h)) && N(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ut(t)}" prop.`);
      else {
        const p = d[t];
        V(p) && (p(...n) || N(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: h, trim: p } = o[d] || K;
    p && (r = n.map((E) => E.trim())), h && (r = n.map(gc));
  }
  if ("development" !== "production" && wl(e, t, r), "development" !== "production") {
    const d = t.toLowerCase();
    d !== t && o[ut(d)] && N(`Event "${d}" is emitted in component ${io(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nt(t)}" instead of "${t}".`);
  }
  let c, l = o[c = ut(t)] || o[c = ut(xt(t))];
  !l && s && (l = o[c = ut(nt(t))]), l && Re(l, e, 6, r);
  const u = o[c + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Re(u, e, 6, r);
  }
}
function ui(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!V(e)) {
    const l = (u) => {
      const d = ui(u, t, !0);
      d && (c = !0, re(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !c ? (Y(e) && o.set(e, null), null) : (x(s) ? s.forEach((l) => i[l] = null) : re(i, s), Y(e) && o.set(e, i), i);
}
function to(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, nt(t)) || L(e, t));
}
let Te = null, no = null;
function $n(e) {
  const t = Te;
  return Te = e, no = e && e.type.__scopeId || null, t;
}
function bl(e) {
  no = e;
}
function yl() {
  no = null;
}
function vl(e, t = Te, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ss(-1);
    const s = $n(t);
    let i;
    try {
      i = e(...r);
    } finally {
      $n(s), o._d && ss(1);
    }
    return "development" !== "production" && li(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Lo = !1;
function Fn() {
  Lo = !0;
}
function mo(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: l, emit: u, render: d, renderCache: h, data: p, setupState: E, ctx: S, inheritAttrs: D } = e;
  let U, O;
  const T = $n(e);
  "development" !== "production" && (Lo = !1);
  try {
    if (n.shapeFlag & 4) {
      const B = r || o;
      U = Ae(d.call(B, B, h, s, E, p, S)), O = l;
    } else {
      const B = t;
      "development" !== "production" && l === s && Fn(), U = Ae(B.length > 1 ? B(s, "development" !== "production" ? {
        get attrs() {
          return Fn(), l;
        },
        slots: c,
        emit: u
      } : { attrs: l, slots: c, emit: u }) : B(s, null)), O = t.props ? l : Nl(l);
    }
  } catch (B) {
    Gt.length = 0, Gn(B, e, 1), U = wt(Me);
  }
  let A = U, M;
  if ("development" !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && ([A, M] = Cl(U)), O && D !== !1) {
    const B = Object.keys(O), { shapeFlag: z } = A;
    if (B.length) {
      if (z & 7)
        i && B.some(xn) && (O = Il(O, i)), A = st(A, O);
      else if ("development" !== "production" && !Lo && A.type !== Me) {
        const Q = Object.keys(l), ee = [], te = [];
        for (let ne = 0, Ee = Q.length; ne < Ee; ne++) {
          const ge = Q[ne];
          hn(ge) ? xn(ge) || ee.push(ge[2].toLowerCase() + ge.slice(3)) : te.push(ge);
        }
        te.length && N(`Extraneous non-props attributes (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), ee.length && N(`Extraneous non-emits event listeners (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ("development" !== "production" && !Zr(A) && N("Runtime directive used on component with non-element root node. The directives will not function as intended."), A = st(A), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && ("development" !== "production" && !Zr(A) && N("Component inside <Transition> renders non-element root node that cannot be animated."), A.transition = n.transition), "development" !== "production" && M ? M(A) : U = A, $n(T), U;
}
const Cl = (e) => {
  const t = e.children, n = e.dynamicChildren, o = fi(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ae(o), i];
};
function fi(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (br(o)) {
      if (o.type !== Me || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Nl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Il = (e, t) => {
  const n = {};
  for (const o in e)
    (!xn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Zr = (e) => e.shapeFlag & 7 || e.type === Me;
function Dl(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: l } = t, u = s.emitsOptions;
  if ("development" !== "production" && (r || c) && mt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? qr(o, i, u) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        if (i[p] !== o[p] && !to(u, p))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? qr(o, i, u) : !0 : !!i;
  return !1;
}
function qr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !to(n, s))
      return !0;
  }
  return !1;
}
function Sl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ol = (e) => e.__isSuspense;
function Al(e, t) {
  t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : oi(e);
}
function Tl(e, t) {
  if (!fe)
    "development" !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = fe.provides;
    const o = fe.parent && fe.parent.provides;
    o === n && (n = fe.provides = Object.create(o)), n[e] = t;
  }
}
function wo(e, t, n = !1) {
  const o = fe || Te;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(o.proxy) : t;
    "development" !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    "development" !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const Qr = {};
function Eo(e, t, n) {
  return "development" !== "production" && !V(t) && N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), di(e, t, n);
}
function di(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = K) {
  "development" !== "production" && !t && (n !== void 0 && N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (T) => {
    N("Invalid watch source: ", T, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = fe;
  let u, d = !1, h = !1;
  if (ie(e) ? (u = () => e.value, d = Bn(e)) : gt(e) ? (u = () => e, o = !0) : x(e) ? (h = !0, d = e.some((T) => gt(T) || Bn(T)), u = () => e.map((T) => {
    if (ie(T))
      return T.value;
    if (gt(T))
      return Rt(T);
    if (V(T))
      return Ke(T, l, 2);
    "development" !== "production" && c(T);
  })) : V(e) ? t ? u = () => Ke(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return p && p(), Re(e, l, 3, [E]);
  } : (u = ue, "development" !== "production" && c(e)), t && o) {
    const T = u;
    u = () => Rt(T());
  }
  let p, E = (T) => {
    p = O.onStop = () => {
      Ke(T, l, 4);
    };
  };
  if (ln)
    return E = ue, t ? n && Re(t, l, 3, [
      u(),
      h ? [] : void 0,
      E
    ]) : u(), ue;
  let S = h ? [] : Qr;
  const D = () => {
    if (!!O.active)
      if (t) {
        const T = O.run();
        (o || d || (h ? T.some((A, M) => tn(A, S[M])) : tn(T, S))) && (p && p(), Re(t, l, 3, [
          T,
          S === Qr ? void 0 : S,
          E
        ]), S = T);
      } else
        O.run();
  };
  D.allowRecurse = !!t;
  let U;
  r === "sync" ? U = D : r === "post" ? U = () => ve(D, l && l.suspense) : (D.pre = !0, l && (D.id = l.uid), U = () => eo(D));
  const O = new ar(u, U);
  return "development" !== "production" && (O.onTrack = s, O.onTrigger = i), t ? n ? D() : S = O.run() : r === "post" ? ve(O.run.bind(O), l && l.suspense) : O.run(), () => {
    O.stop(), l && l.scope && rr(l.scope.effects, O);
  };
}
function Pl(e, t, n) {
  const o = this.proxy, r = G(e) ? e.includes(".") ? hi(o, e) : () => o[e] : e.bind(o, o);
  let s;
  V(t) ? s = t : (s = t.handler, n = t);
  const i = fe;
  Bt(this);
  const c = di(r, s.bind(o), n);
  return i ? Bt(i) : Et(), c;
}
function hi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Rt(e, t) {
  if (!Y(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ie(e))
    Rt(e.value, t);
  else if (x(e))
    for (let n = 0; n < e.length; n++)
      Rt(e[n], t);
  else if (Rs(e) || ht(e))
    e.forEach((n) => {
      Rt(n, t);
    });
  else if (ks(e))
    for (const n in e)
      Rt(e[n], t);
  return e;
}
function Rl(e) {
  return V(e) ? { setup: e, name: e.name } : e;
}
const Pn = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function Ml(e, t) {
  pi(e, "a", t);
}
function kl(e, t) {
  pi(e, "da", t);
}
function pi(e, t, n = fe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (oo(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      _r(r.parent.vnode) && xl(o, t, n, r), r = r.parent;
  }
}
function xl(e, t, n, o) {
  const r = oo(t, e, o, !0);
  _i(() => {
    rr(o[t], r);
  }, n);
}
function oo(e, t, n = fe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      vt(), Bt(n);
      const c = Re(t, n, e, i);
      return Et(), Ct(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if ("development" !== "production") {
    const r = ut(dr[e].replace(/ hook$/, ""));
    N(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Je = (e) => (t, n = fe) => (!ln || e === "sp") && oo(e, (...o) => t(...o), n), Vl = Je("bm"), gi = Je("m"), Bl = Je("bu"), $l = Je("u"), Fl = Je("bum"), _i = Je("um"), Ll = Je("sp"), jl = Je("rtg"), Ul = Je("rtc");
function Hl(e, t = fe) {
  oo("ec", e, t);
}
function mi(e) {
  dc(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function lt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let l = c.dir[o];
    l && (vt(), Re(l, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ct());
  }
}
const Wl = Symbol();
function Kl(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (x(e) || G(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    "development" !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, s && s[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, l = i.length; c < l; c++) {
        const u = i[c];
        r[c] = t(e[u], u, c, s && s[c]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
const jo = (e) => e ? Ti(e) ? vr(e) || e.proxy : jo(e.parent) : null, Vt = /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => "development" !== "production" ? Pt(e.props) : e.props,
  $attrs: (e) => "development" !== "production" ? Pt(e.attrs) : e.attrs,
  $slots: (e) => "development" !== "production" ? Pt(e.slots) : e.slots,
  $refs: (e) => "development" !== "production" ? Pt(e.refs) : e.refs,
  $parent: (e) => jo(e.parent),
  $root: (e) => jo(e.root),
  $emit: (e) => e.emit,
  $options: (e) => wr(e),
  $forceUpdate: (e) => e.f || (e.f = () => eo(e.update)),
  $nextTick: (e) => e.n || (e.n = ol.bind(e.proxy)),
  $watch: (e) => Pl.bind(e)
}), mr = (e) => e === "_" || e === "$", wi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: l } = e;
    if ("development" !== "production" && t === "__isVue")
      return !0;
    if ("development" !== "production" && o !== K && o.__isScriptSetup && L(o, t))
      return o[t];
    let u;
    if (t[0] !== "$") {
      const E = i[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (o !== K && L(o, t))
          return i[t] = 1, o[t];
        if (r !== K && L(r, t))
          return i[t] = 2, r[t];
        if ((u = e.propsOptions[0]) && L(u, t))
          return i[t] = 3, s[t];
        if (n !== K && L(n, t))
          return i[t] = 4, n[t];
        Uo && (i[t] = 0);
      }
    }
    const d = Vt[t];
    let h, p;
    if (d)
      return t === "$attrs" && (Ce(e, "get", t), "development" !== "production" && Fn()), d(e);
    if ((h = c.__cssModules) && (h = h[t]))
      return h;
    if (n !== K && L(n, t))
      return i[t] = 4, n[t];
    if (p = l.config.globalProperties, L(p, t))
      return p[t];
    "development" !== "production" && Te && (!G(t) || t.indexOf("__v") !== 0) && (r !== K && mr(t[0]) && L(r, t) ? N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Te && N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== K && L(r, t) ? (r[t] = n, !0) : o !== K && L(o, t) ? (o[t] = n, !0) : L(e.props, t) ? ("development" !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? ("development" !== "production" && N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : ("development" !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== K && L(e, i) || t !== K && L(t, i) || (c = s[0]) && L(c, i) || L(o, i) || L(Vt, i) || L(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
"development" !== "production" && (wi.ownKeys = (e) => (N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function zl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Vt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Vt[n](e),
      set: ue
    });
  }), t;
}
function Jl(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function Yl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (mr(o[0])) {
        N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function Zl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Uo = !0;
function ql(e) {
  const t = wr(e), n = e.proxy, o = e.ctx;
  Uo = !1, t.beforeCreate && Xr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: l,
    inject: u,
    created: d,
    beforeMount: h,
    mounted: p,
    beforeUpdate: E,
    updated: S,
    activated: D,
    deactivated: U,
    beforeDestroy: O,
    beforeUnmount: T,
    destroyed: A,
    unmounted: M,
    render: B,
    renderTracked: z,
    renderTriggered: Q,
    errorCaptured: ee,
    serverPrefetch: te,
    expose: ne,
    inheritAttrs: Ee,
    components: ge,
    directives: be,
    filters: Mr
  } = t, Ye = "development" !== "production" ? Zl() : null;
  if ("development" !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const W in H)
        Ye("Props", W);
  }
  if (u && Ql(u, o, Ye, e.appContext.config.unwrapInjectedRef), i)
    for (const H in i) {
      const W = i[H];
      V(W) ? ("development" !== "production" ? Object.defineProperty(o, H, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[H] = W.bind(n), "development" !== "production" && Ye("Methods", H)) : "development" !== "production" && N(`Method "${H}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    "development" !== "production" && !V(r) && N("The data option must be a function. Plain object usage is no longer supported.");
    const H = r.call(n, n);
    if ("development" !== "production" && ir(H) && N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Y(H))
      "development" !== "production" && N("data() should return an object.");
    else if (e.data = Qn(H), "development" !== "production")
      for (const W in H)
        Ye("Data", W), mr(W[0]) || Object.defineProperty(o, W, {
          configurable: !0,
          enumerable: !0,
          get: () => H[W],
          set: ue
        });
  }
  if (Uo = !0, s)
    for (const H in s) {
      const W = s[H], ke = V(W) ? W.bind(n, n) : V(W.get) ? W.get.bind(n, n) : ue;
      "development" !== "production" && ke === ue && N(`Computed property "${H}" has no getter.`);
      const fo = !V(W) && V(W.set) ? W.set.bind(n) : "development" !== "production" ? () => {
        N(`Write operation failed: computed property "${H}" is readonly.`);
      } : ue, Kt = xa({
        get: ke,
        set: fo
      });
      Object.defineProperty(o, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Kt.value,
        set: (Nt) => Kt.value = Nt
      }), "development" !== "production" && Ye("Computed", H);
    }
  if (c)
    for (const H in c)
      Ei(c[H], o, n, H);
  if (l) {
    const H = V(l) ? l.call(n) : l;
    Reflect.ownKeys(H).forEach((W) => {
      Tl(W, H[W]);
    });
  }
  d && Xr(d, e, "c");
  function ye(H, W) {
    x(W) ? W.forEach((ke) => H(ke.bind(n))) : W && H(W.bind(n));
  }
  if (ye(Vl, h), ye(gi, p), ye(Bl, E), ye($l, S), ye(Ml, D), ye(kl, U), ye(Hl, ee), ye(Ul, z), ye(jl, Q), ye(Fl, T), ye(_i, M), ye(Ll, te), x(ne))
    if (ne.length) {
      const H = e.exposed || (e.exposed = {});
      ne.forEach((W) => {
        Object.defineProperty(H, W, {
          get: () => n[W],
          set: (ke) => n[W] = ke
        });
      });
    } else
      e.exposed || (e.exposed = {});
  B && e.render === ue && (e.render = B), Ee != null && (e.inheritAttrs = Ee), ge && (e.components = ge), be && (e.directives = be);
}
function Ql(e, t, n = ue, o = !1) {
  x(e) && (e = Ho(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Y(s) ? "default" in s ? i = wo(s.from || r, s.default, !0) : i = wo(s.from || r) : i = wo(s), ie(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : ("development" !== "production" && N(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, "development" !== "production" && n("Inject", r);
  }
}
function Xr(e, t, n) {
  Re(x(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ei(e, t, n, o) {
  const r = o.includes(".") ? hi(n, o) : () => n[o];
  if (G(e)) {
    const s = t[e];
    V(s) ? Eo(r, s) : "development" !== "production" && N(`Invalid watch handler specified by key "${e}"`, s);
  } else if (V(e))
    Eo(r, e.bind(n));
  else if (Y(e))
    if (x(e))
      e.forEach((s) => Ei(s, t, n, o));
    else {
      const s = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(s) ? Eo(r, s, e) : "development" !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    "development" !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function wr(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let l;
  return c ? l = c : !r.length && !n && !o ? l = t : (l = {}, r.length && r.forEach((u) => Ln(l, u, i, !0)), Ln(l, t, i)), Y(t) && s.set(t, l), l;
}
function Ln(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Ln(e, s, n, !0), r && r.forEach((i) => Ln(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      "development" !== "production" && N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Xl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Xl = {
  data: Gr,
  props: ft,
  emits: ft,
  methods: ft,
  computed: ft,
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  components: ft,
  directives: ft,
  watch: ea,
  provide: Gr,
  inject: Gl
};
function Gr(e, t) {
  return t ? e ? function() {
    return re(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t);
  } : t : e;
}
function Gl(e, t) {
  return ft(Ho(e), Ho(t));
}
function Ho(e) {
  if (x(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? re(re(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ea(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = me(e[o], t[o]);
  return n;
}
function ta(e, t, n, o = !1) {
  const r = {}, s = {};
  Vn(s, so, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  "development" !== "production" && vi(t || {}, r, e), n ? e.props = o ? r : Kc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function na(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function oa(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = F(r), [l] = e.propsOptions;
  let u = !1;
  if (!("development" !== "production" && na(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let p = d[h];
        if (to(e.emitsOptions, p))
          continue;
        const E = t[p];
        if (l)
          if (L(s, p))
            E !== s[p] && (s[p] = E, u = !0);
          else {
            const S = xt(p);
            r[S] = Wo(l, c, S, E, e, !1);
          }
        else
          E !== s[p] && (s[p] = E, u = !0);
      }
    }
  } else {
    bi(e, t, r, s) && (u = !0);
    let d;
    for (const h in c)
      (!t || !L(t, h) && ((d = nt(h)) === h || !L(t, d))) && (l ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = Wo(l, c, h, void 0, e, !0)) : delete r[h]);
    if (s !== c)
      for (const h in s)
        (!t || !L(t, h) && !0) && (delete s[h], u = !0);
  }
  u && ze(e, "set", "$attrs"), "development" !== "production" && vi(t || {}, r, e);
}
function bi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let l in t) {
      if (Sn(l))
        continue;
      const u = t[l];
      let d;
      r && L(r, d = xt(l)) ? !s || !s.includes(d) ? n[d] = u : (c || (c = {}))[d] = u : to(e.emitsOptions, l) || (!(l in o) || u !== o[l]) && (o[l] = u, i = !0);
    }
  if (s) {
    const l = F(n), u = c || K;
    for (let d = 0; d < s.length; d++) {
      const h = s[d];
      n[h] = Wo(r, l, h, u[h], e, !L(u, h));
    }
  }
  return i;
}
function Wo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = L(i, "default");
    if (c && o === void 0) {
      const l = i.default;
      if (i.type !== Function && V(l)) {
        const { propsDefaults: u } = r;
        n in u ? o = u[n] : (Bt(r), o = u[n] = l.call(null, t), Et());
      } else
        o = l;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === nt(n)) && (o = !0));
  }
  return o;
}
function yi(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let l = !1;
  if (!V(e)) {
    const d = (h) => {
      l = !0;
      const [p, E] = yi(h, t, !0);
      re(i, p), E && c.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !l)
    return Y(e) && o.set(e, Mt), Mt;
  if (x(s))
    for (let d = 0; d < s.length; d++) {
      "development" !== "production" && !G(s[d]) && N("props must be strings when using array syntax.", s[d]);
      const h = xt(s[d]);
      es(h) && (i[h] = K);
    }
  else if (s) {
    "development" !== "production" && !Y(s) && N("invalid props options", s);
    for (const d in s) {
      const h = xt(d);
      if (es(h)) {
        const p = s[d], E = i[h] = x(p) || V(p) ? { type: p } : p;
        if (E) {
          const S = ns(Boolean, E.type), D = ns(String, E.type);
          E[0] = S > -1, E[1] = D < 0 || S < D, (S > -1 || L(E, "default")) && c.push(h);
        }
      }
    }
  }
  const u = [i, c];
  return Y(e) && o.set(e, u), u;
}
function es(e) {
  return e[0] !== "$" ? !0 : ("development" !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ko(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function ts(e, t) {
  return Ko(e) === Ko(t);
}
function ns(e, t) {
  return x(t) ? t.findIndex((n) => ts(n, e)) : V(t) && ts(t, e) ? 0 : -1;
}
function vi(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && ra(s, o[s], i, !L(e, s) && !L(e, nt(s)));
  }
}
function ra(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const l = x(r) ? r : [r], u = [];
      for (let d = 0; d < l.length && !c; d++) {
        const { valid: h, expectedType: p } = ia(t, l[d]);
        u.push(p || ""), c = h;
      }
      if (!c) {
        N(ca(e, t, u));
        return;
      }
    }
    i && !i(t) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const sa = /* @__PURE__ */ it("String,Number,Boolean,Function,Symbol,BigInt");
function ia(e, t) {
  let n;
  const o = Ko(t);
  if (sa(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Y(e) : o === "Array" ? n = x(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function ca(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Jn).join(" | ")}`;
  const r = n[0], s = cr(t), i = os(t, r), c = os(t, s);
  return n.length === 1 && rs(r) && !la(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, rs(s) && (o += `with value ${c}.`), o;
}
function os(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function rs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function la(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ci = (e) => e[0] === "_" || e === "$stable", Er = (e) => x(e) ? e.map(Ae) : [Ae(e)], aa = (e, t, n) => {
  if (t._n)
    return t;
  const o = vl((...r) => ("development" !== "production" && fe && N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Er(t(...r))), n);
  return o._c = !1, o;
}, Ni = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Ci(r))
      continue;
    const s = e[r];
    if (V(s))
      t[r] = aa(r, s, o);
    else if (s != null) {
      "development" !== "production" && N(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Er(s);
      t[r] = () => i;
    }
  }
}, Ii = (e, t) => {
  "development" !== "production" && !_r(e.vnode) && N("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Er(t);
  e.slots.default = () => n;
}, ua = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Vn(t, "_", n)) : Ni(t, e.slots = {});
  } else
    e.slots = {}, t && Ii(e, t);
  Vn(e.slots, so, 1);
}, fa = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = K;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? "development" !== "production" && mt ? re(r, t) : n && c === 1 ? s = !1 : (re(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, Ni(t, r)), i = t;
  } else
    t && (Ii(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !Ci(c) && !(c in i) && delete r[c];
};
function Di() {
  return {
    app: null,
    config: {
      isNativeTag: Ps,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let da = 0;
function ha(e, t) {
  return function(o, r = null) {
    V(o) || (o = Object.assign({}, o)), r != null && !Y(r) && ("development" !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const s = Di(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const l = s.app = {
      _uid: da++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ls,
      get config() {
        return s.config;
      },
      set config(u) {
        "development" !== "production" && N("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...d) {
        return i.has(u) ? "development" !== "production" && N("Plugin has already been applied to target app.") : u && V(u.install) ? (i.add(u), u.install(l, ...d)) : V(u) ? (i.add(u), u(l, ...d)) : "development" !== "production" && N('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(u) {
        return s.mixins.includes(u) ? "development" !== "production" && N("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), l;
      },
      component(u, d) {
        return "development" !== "production" && Jo(u, s.config), d ? ("development" !== "production" && s.components[u] && N(`Component "${u}" has already been registered in target app.`), s.components[u] = d, l) : s.components[u];
      },
      directive(u, d) {
        return "development" !== "production" && mi(u), d ? ("development" !== "production" && s.directives[u] && N(`Directive "${u}" has already been registered in target app.`), s.directives[u] = d, l) : s.directives[u];
      },
      mount(u, d, h) {
        if (c)
          "development" !== "production" && N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          "development" !== "production" && u.__vue_app__ && N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const p = wt(o, r);
          return p.appContext = s, "development" !== "production" && (s.reload = () => {
            e(st(p), u, h);
          }), d && t ? t(p, u) : e(p, u, h), c = !0, l._container = u, u.__vue_app__ = l, "development" !== "production" && (l._instance = p.component, fl(l, ls)), vr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, l._container), "development" !== "production" && (l._instance = null, dl(l)), delete l._container.__vue_app__) : "development" !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return "development" !== "production" && u in s.provides && N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = d, l;
      }
    };
    return l;
  };
}
function zo(e, t, n, o, r = !1) {
  if (x(e)) {
    e.forEach((p, E) => zo(p, t && (x(t) ? t[E] : t), n, o, r));
    return;
  }
  if (Pn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? vr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: l } = e;
  if ("development" !== "production" && !c) {
    N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, d = c.refs === K ? c.refs = {} : c.refs, h = c.setupState;
  if (u != null && u !== l && (G(u) ? (d[u] = null, L(h, u) && (h[u] = null)) : ie(u) && (u.value = null)), V(l))
    Ke(l, c, 12, [i, d]);
  else {
    const p = G(l), E = ie(l);
    if (p || E) {
      const S = () => {
        if (e.f) {
          const D = p ? L(h, l) ? h[l] : d[l] : l.value;
          r ? x(D) && rr(D, s) : x(D) ? D.includes(s) || D.push(s) : p ? (d[l] = [s], L(h, l) && (h[l] = d[l])) : (l.value = [s], e.k && (d[e.k] = l.value));
        } else
          p ? (d[l] = i, L(h, l) && (h[l] = i)) : E ? (l.value = i, e.k && (d[e.k] = i)) : "development" !== "production" && N("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (S.id = -1, ve(S, n)) : S();
    } else
      "development" !== "production" && N("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Yt, Ge;
function Ue(e, t) {
  e.appContext.config.performance && jn() && Ge.mark(`vue-${t}-${e.uid}`), "development" !== "production" && _l(e, t, jn() ? Ge.now() : Date.now());
}
function He(e, t) {
  if (e.appContext.config.performance && jn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ge.mark(o), Ge.measure(`<${io(e, e.type)}> ${t}`, n, o), Ge.clearMarks(n), Ge.clearMarks(o);
  }
  "development" !== "production" && ml(e, t, jn() ? Ge.now() : Date.now());
}
function jn() {
  return Yt !== void 0 || (typeof window < "u" && window.performance ? (Yt = !0, Ge = window.performance) : Yt = !1), Yt;
}
function pa() {
  const e = [];
  if ("development" !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ve = Al;
function ga(e) {
  return _a(e);
}
function _a(e, t) {
  pa();
  const n = xs();
  n.__VUE__ = !0, "development" !== "production" && ci(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: l, setText: u, setElementText: d, parentNode: h, nextSibling: p, setScopeId: E = ue, insertStaticContent: S } = e, D = (a, f, g, w = null, m = null, v = null, I = !1, y = null, C = "development" !== "production" && mt ? !1 : !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Zt(a, f) && (w = mn(a), Ze(a, m, v, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: b, ref: R, shapeFlag: P } = f;
    switch (b) {
      case ro:
        U(a, f, g, w);
        break;
      case Me:
        O(a, f, g, w);
        break;
      case Mn:
        a == null ? T(f, g, w, I) : "development" !== "production" && A(a, f, g, I);
        break;
      case De:
        be(a, f, g, w, m, v, I, y, C);
        break;
      default:
        P & 1 ? z(a, f, g, w, m, v, I, y, C) : P & 6 ? Mr(a, f, g, w, m, v, I, y, C) : P & 64 || P & 128 ? b.process(a, f, g, w, m, v, I, y, C, It) : "development" !== "production" && N("Invalid VNode type:", b, `(${typeof b})`);
    }
    R != null && m && zo(R, a && a.ref, v, f || a, !f);
  }, U = (a, f, g, w) => {
    if (a == null)
      o(f.el = c(f.children), g, w);
    else {
      const m = f.el = a.el;
      f.children !== a.children && u(m, f.children);
    }
  }, O = (a, f, g, w) => {
    a == null ? o(f.el = l(f.children || ""), g, w) : f.el = a.el;
  }, T = (a, f, g, w) => {
    [a.el, a.anchor] = S(a.children, f, g, w, a.el, a.anchor);
  }, A = (a, f, g, w) => {
    if (f.children !== a.children) {
      const m = p(a.anchor);
      B(a), [f.el, f.anchor] = S(f.children, g, m, w);
    } else
      f.el = a.el, f.anchor = a.anchor;
  }, M = ({ el: a, anchor: f }, g, w) => {
    let m;
    for (; a && a !== f; )
      m = p(a), o(a, g, w), a = m;
    o(f, g, w);
  }, B = ({ el: a, anchor: f }) => {
    let g;
    for (; a && a !== f; )
      g = p(a), r(a), a = g;
    r(f);
  }, z = (a, f, g, w, m, v, I, y, C) => {
    I = I || f.type === "svg", a == null ? Q(f, g, w, m, v, I, y, C) : ne(a, f, m, v, I, y, C);
  }, Q = (a, f, g, w, m, v, I, y) => {
    let C, b;
    const { type: R, props: P, shapeFlag: k, transition: $, dirs: j } = a;
    if (C = a.el = i(a.type, v, P && P.is, P), k & 8 ? d(C, a.children) : k & 16 && te(a.children, C, null, w, m, v && R !== "foreignObject", I, y), j && lt(a, null, w, "created"), P) {
      for (const J in P)
        J !== "value" && !Sn(J) && s(C, J, null, P[J], v, a.children, w, m, je);
      "value" in P && s(C, "value", null, P.value), (b = P.onVnodeBeforeMount) && Ve(b, w, a);
    }
    ee(C, a, a.scopeId, I, w), "development" !== "production" && (Object.defineProperty(C, "__vnode", {
      value: a,
      enumerable: !1
    }), Object.defineProperty(C, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), j && lt(a, null, w, "beforeMount");
    const Z = (!m || m && !m.pendingBranch) && $ && !$.persisted;
    Z && $.beforeEnter(C), o(C, f, g), ((b = P && P.onVnodeMounted) || Z || j) && ve(() => {
      b && Ve(b, w, a), Z && $.enter(C), j && lt(a, null, w, "mounted");
    }, m);
  }, ee = (a, f, g, w, m) => {
    if (g && E(a, g), w)
      for (let v = 0; v < w.length; v++)
        E(a, w[v]);
    if (m) {
      let v = m.subTree;
      if ("development" !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = fi(v.children) || v), f === v) {
        const I = m.vnode;
        ee(a, I, I.scopeId, I.slotScopeIds, m.parent);
      }
    }
  }, te = (a, f, g, w, m, v, I, y, C = 0) => {
    for (let b = C; b < a.length; b++) {
      const R = a[b] = y ? Xe(a[b]) : Ae(a[b]);
      D(null, R, f, g, w, m, v, I, y);
    }
  }, ne = (a, f, g, w, m, v, I) => {
    const y = f.el = a.el;
    let { patchFlag: C, dynamicChildren: b, dirs: R } = f;
    C |= a.patchFlag & 16;
    const P = a.props || K, k = f.props || K;
    let $;
    g && at(g, !1), ($ = k.onVnodeBeforeUpdate) && Ve($, g, f, a), R && lt(f, a, g, "beforeUpdate"), g && at(g, !0), "development" !== "production" && mt && (C = 0, I = !1, b = null);
    const j = m && f.type !== "foreignObject";
    if (b ? (Ee(a.dynamicChildren, b, y, g, w, j, v), "development" !== "production" && g && g.type.__hmrId && Rn(a, f)) : I || ke(a, f, y, null, g, w, j, v, !1), C > 0) {
      if (C & 16)
        ge(y, f, P, k, g, w, m);
      else if (C & 2 && P.class !== k.class && s(y, "class", null, k.class, m), C & 4 && s(y, "style", P.style, k.style, m), C & 8) {
        const Z = f.dynamicProps;
        for (let J = 0; J < Z.length; J++) {
          const oe = Z[J], Se = P[oe], Dt = k[oe];
          (Dt !== Se || oe === "value") && s(y, oe, Se, Dt, m, a.children, g, w, je);
        }
      }
      C & 1 && a.children !== f.children && d(y, f.children);
    } else
      !I && b == null && ge(y, f, P, k, g, w, m);
    (($ = k.onVnodeUpdated) || R) && ve(() => {
      $ && Ve($, g, f, a), R && lt(f, a, g, "updated");
    }, w);
  }, Ee = (a, f, g, w, m, v, I) => {
    for (let y = 0; y < f.length; y++) {
      const C = a[y], b = f[y], R = C.el && (C.type === De || !Zt(C, b) || C.shapeFlag & 70) ? h(C.el) : g;
      D(C, b, R, null, w, m, v, I, !0);
    }
  }, ge = (a, f, g, w, m, v, I) => {
    if (g !== w) {
      if (g !== K)
        for (const y in g)
          !Sn(y) && !(y in w) && s(a, y, g[y], null, I, f.children, m, v, je);
      for (const y in w) {
        if (Sn(y))
          continue;
        const C = w[y], b = g[y];
        C !== b && y !== "value" && s(a, y, b, C, I, f.children, m, v, je);
      }
      "value" in w && s(a, "value", g.value, w.value);
    }
  }, be = (a, f, g, w, m, v, I, y, C) => {
    const b = f.el = a ? a.el : c(""), R = f.anchor = a ? a.anchor : c("");
    let { patchFlag: P, dynamicChildren: k, slotScopeIds: $ } = f;
    "development" !== "production" && (mt || P & 2048) && (P = 0, C = !1, k = null), $ && (y = y ? y.concat($) : $), a == null ? (o(b, g, w), o(R, g, w), te(f.children, g, R, m, v, I, y, C)) : P > 0 && P & 64 && k && a.dynamicChildren ? (Ee(a.dynamicChildren, k, g, m, v, I, y), "development" !== "production" && m && m.type.__hmrId ? Rn(a, f) : (f.key != null || m && f === m.subTree) && Rn(a, f, !0)) : ke(a, f, g, R, m, v, I, y, C);
  }, Mr = (a, f, g, w, m, v, I, y, C) => {
    f.slotScopeIds = y, a == null ? f.shapeFlag & 512 ? m.ctx.activate(f, g, w, I, C) : Ye(f, g, w, m, v, I, C) : ye(a, f, C);
  }, Ye = (a, f, g, w, m, v, I) => {
    const y = a.component = Sa(a, w, m);
    if ("development" !== "production" && y.type.__hmrId && cl(y), "development" !== "production" && (An(a), Ue(y, "mount")), _r(a) && (y.ctx.renderer = It), "development" !== "production" && Ue(y, "init"), Aa(y), "development" !== "production" && He(y, "init"), y.asyncDep) {
      if (m && m.registerDep(y, H), !a.el) {
        const C = y.subTree = wt(Me);
        O(null, C, f, g);
      }
      return;
    }
    H(y, a, f, g, m, v, I), "development" !== "production" && (Tn(), He(y, "mount"));
  }, ye = (a, f, g) => {
    const w = f.component = a.component;
    if (Dl(a, f, g))
      if (w.asyncDep && !w.asyncResolved) {
        "development" !== "production" && An(f), W(w, f, g), "development" !== "production" && Tn();
        return;
      } else
        w.next = f, sl(w.update), w.update();
    else
      f.el = a.el, w.vnode = f;
  }, H = (a, f, g, w, m, v, I) => {
    const y = () => {
      if (a.isMounted) {
        let { next: R, bu: P, u: k, parent: $, vnode: j } = a, Z = R, J;
        "development" !== "production" && An(R || a.vnode), at(a, !1), R ? (R.el = j.el, W(a, R, I)) : R = j, P && Jt(P), (J = R.props && R.props.onVnodeBeforeUpdate) && Ve(J, $, R, j), at(a, !0), "development" !== "production" && Ue(a, "render");
        const oe = mo(a);
        "development" !== "production" && He(a, "render");
        const Se = a.subTree;
        a.subTree = oe, "development" !== "production" && Ue(a, "patch"), D(
          Se,
          oe,
          h(Se.el),
          mn(Se),
          a,
          m,
          v
        ), "development" !== "production" && He(a, "patch"), R.el = oe.el, Z === null && Sl(a, oe.el), k && ve(k, m), (J = R.props && R.props.onVnodeUpdated) && ve(() => Ve(J, $, R, j), m), "development" !== "production" && li(a), "development" !== "production" && Tn();
      } else {
        let R;
        const { el: P, props: k } = f, { bm: $, m: j, parent: Z } = a, J = Pn(f);
        if (at(a, !1), $ && Jt($), !J && (R = k && k.onVnodeBeforeMount) && Ve(R, Z, f), at(a, !0), P && go) {
          const oe = () => {
            "development" !== "production" && Ue(a, "render"), a.subTree = mo(a), "development" !== "production" && He(a, "render"), "development" !== "production" && Ue(a, "hydrate"), go(P, a.subTree, a, m, null), "development" !== "production" && He(a, "hydrate");
          };
          J ? f.type.__asyncLoader().then(
            () => !a.isUnmounted && oe()
          ) : oe();
        } else {
          "development" !== "production" && Ue(a, "render");
          const oe = a.subTree = mo(a);
          "development" !== "production" && He(a, "render"), "development" !== "production" && Ue(a, "patch"), D(null, oe, g, w, a, m, v), "development" !== "production" && He(a, "patch"), f.el = oe.el;
        }
        if (j && ve(j, m), !J && (R = k && k.onVnodeMounted)) {
          const oe = f;
          ve(() => Ve(R, Z, oe), m);
        }
        (f.shapeFlag & 256 || Z && Pn(Z.vnode) && Z.vnode.shapeFlag & 256) && a.a && ve(a.a, m), a.isMounted = !0, "development" !== "production" && hl(a), f = g = w = null;
      }
    }, C = a.effect = new ar(
      y,
      () => eo(b),
      a.scope
    ), b = a.update = () => C.run();
    b.id = a.uid, at(a, !0), "development" !== "production" && (C.onTrack = a.rtc ? (R) => Jt(a.rtc, R) : void 0, C.onTrigger = a.rtg ? (R) => Jt(a.rtg, R) : void 0, b.ownerInstance = a), b();
  }, W = (a, f, g) => {
    f.component = a;
    const w = a.vnode.props;
    a.vnode = f, a.next = null, oa(a, f.props, w, g), fa(a, f.children, g), vt(), Jr(), Ct();
  }, ke = (a, f, g, w, m, v, I, y, C = !1) => {
    const b = a && a.children, R = a ? a.shapeFlag : 0, P = f.children, { patchFlag: k, shapeFlag: $ } = f;
    if (k > 0) {
      if (k & 128) {
        Kt(b, P, g, w, m, v, I, y, C);
        return;
      } else if (k & 256) {
        fo(b, P, g, w, m, v, I, y, C);
        return;
      }
    }
    $ & 8 ? (R & 16 && je(b, m, v), P !== b && d(g, P)) : R & 16 ? $ & 16 ? Kt(b, P, g, w, m, v, I, y, C) : je(b, m, v, !0) : (R & 8 && d(g, ""), $ & 16 && te(P, g, w, m, v, I, y, C));
  }, fo = (a, f, g, w, m, v, I, y, C) => {
    a = a || Mt, f = f || Mt;
    const b = a.length, R = f.length, P = Math.min(b, R);
    let k;
    for (k = 0; k < P; k++) {
      const $ = f[k] = C ? Xe(f[k]) : Ae(f[k]);
      D(a[k], $, g, null, m, v, I, y, C);
    }
    b > R ? je(a, m, v, !0, !1, P) : te(f, g, w, m, v, I, y, C, P);
  }, Kt = (a, f, g, w, m, v, I, y, C) => {
    let b = 0;
    const R = f.length;
    let P = a.length - 1, k = R - 1;
    for (; b <= P && b <= k; ) {
      const $ = a[b], j = f[b] = C ? Xe(f[b]) : Ae(f[b]);
      if (Zt($, j))
        D($, j, g, null, m, v, I, y, C);
      else
        break;
      b++;
    }
    for (; b <= P && b <= k; ) {
      const $ = a[P], j = f[k] = C ? Xe(f[k]) : Ae(f[k]);
      if (Zt($, j))
        D($, j, g, null, m, v, I, y, C);
      else
        break;
      P--, k--;
    }
    if (b > P) {
      if (b <= k) {
        const $ = k + 1, j = $ < R ? f[$].el : w;
        for (; b <= k; )
          D(null, f[b] = C ? Xe(f[b]) : Ae(f[b]), g, j, m, v, I, y, C), b++;
      }
    } else if (b > k)
      for (; b <= P; )
        Ze(a[b], m, v, !0), b++;
    else {
      const $ = b, j = b, Z = /* @__PURE__ */ new Map();
      for (b = j; b <= k; b++) {
        const _e = f[b] = C ? Xe(f[b]) : Ae(f[b]);
        _e.key != null && ("development" !== "production" && Z.has(_e.key) && N("Duplicate keys found during update:", JSON.stringify(_e.key), "Make sure keys are unique."), Z.set(_e.key, b));
      }
      let J, oe = 0;
      const Se = k - j + 1;
      let Dt = !1, xr = 0;
      const zt = new Array(Se);
      for (b = 0; b < Se; b++)
        zt[b] = 0;
      for (b = $; b <= P; b++) {
        const _e = a[b];
        if (oe >= Se) {
          Ze(_e, m, v, !0);
          continue;
        }
        let xe;
        if (_e.key != null)
          xe = Z.get(_e.key);
        else
          for (J = j; J <= k; J++)
            if (zt[J - j] === 0 && Zt(_e, f[J])) {
              xe = J;
              break;
            }
        xe === void 0 ? Ze(_e, m, v, !0) : (zt[xe - j] = b + 1, xe >= xr ? xr = xe : Dt = !0, D(_e, f[xe], g, null, m, v, I, y, C), oe++);
      }
      const Vr = Dt ? ma(zt) : Mt;
      for (J = Vr.length - 1, b = Se - 1; b >= 0; b--) {
        const _e = j + b, xe = f[_e], Br = _e + 1 < R ? f[_e + 1].el : w;
        zt[b] === 0 ? D(null, xe, g, Br, m, v, I, y, C) : Dt && (J < 0 || b !== Vr[J] ? Nt(xe, g, Br, 2) : J--);
      }
    }
  }, Nt = (a, f, g, w, m = null) => {
    const { el: v, type: I, transition: y, children: C, shapeFlag: b } = a;
    if (b & 6) {
      Nt(a.component.subTree, f, g, w);
      return;
    }
    if (b & 128) {
      a.suspense.move(f, g, w);
      return;
    }
    if (b & 64) {
      I.move(a, f, g, It);
      return;
    }
    if (I === De) {
      o(v, f, g);
      for (let P = 0; P < C.length; P++)
        Nt(C[P], f, g, w);
      o(a.anchor, f, g);
      return;
    }
    if (I === Mn) {
      M(a, f, g);
      return;
    }
    if (w !== 2 && b & 1 && y)
      if (w === 0)
        y.beforeEnter(v), o(v, f, g), ve(() => y.enter(v), m);
      else {
        const { leave: P, delayLeave: k, afterLeave: $ } = y, j = () => o(v, f, g), Z = () => {
          P(v, () => {
            j(), $ && $();
          });
        };
        k ? k(v, j, Z) : Z();
      }
    else
      o(v, f, g);
  }, Ze = (a, f, g, w = !1, m = !1) => {
    const { type: v, props: I, ref: y, children: C, dynamicChildren: b, shapeFlag: R, patchFlag: P, dirs: k } = a;
    if (y != null && zo(y, null, g, a, !0), R & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const $ = R & 1 && k, j = !Pn(a);
    let Z;
    if (j && (Z = I && I.onVnodeBeforeUnmount) && Ve(Z, f, a), R & 6)
      ec(a.component, g, w);
    else {
      if (R & 128) {
        a.suspense.unmount(g, w);
        return;
      }
      $ && lt(a, null, f, "beforeUnmount"), R & 64 ? a.type.remove(a, f, g, m, It, w) : b && (v !== De || P > 0 && P & 64) ? je(b, f, g, !1, !0) : (v === De && P & 384 || !m && R & 16) && je(C, f, g), w && ho(a);
    }
    (j && (Z = I && I.onVnodeUnmounted) || $) && ve(() => {
      Z && Ve(Z, f, a), $ && lt(a, null, f, "unmounted");
    }, g);
  }, ho = (a) => {
    const { type: f, el: g, anchor: w, transition: m } = a;
    if (f === De) {
      "development" !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && m && !m.persisted ? a.children.forEach((I) => {
        I.type === Me ? r(I.el) : ho(I);
      }) : Gi(g, w);
      return;
    }
    if (f === Mn) {
      B(a);
      return;
    }
    const v = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (a.shapeFlag & 1 && m && !m.persisted) {
      const { leave: I, delayLeave: y } = m, C = () => I(g, v);
      y ? y(a.el, v, C) : C();
    } else
      v();
  }, Gi = (a, f) => {
    let g;
    for (; a !== f; )
      g = p(a), r(a), a = g;
    r(f);
  }, ec = (a, f, g) => {
    "development" !== "production" && a.type.__hmrId && ll(a);
    const { bum: w, scope: m, update: v, subTree: I, um: y } = a;
    w && Jt(w), m.stop(), v && (v.active = !1, Ze(I, a, f, g)), y && ve(y, f), ve(() => {
      a.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), "development" !== "production" && gl(a);
  }, je = (a, f, g, w = !1, m = !1, v = 0) => {
    for (let I = v; I < a.length; I++)
      Ze(a[I], f, g, w, m);
  }, mn = (a) => a.shapeFlag & 6 ? mn(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : p(a.anchor || a.el), kr = (a, f, g) => {
    a == null ? f._vnode && Ze(f._vnode, null, null, !0) : D(f._vnode || null, a, f, null, null, null, g), Jr(), ri(), f._vnode = a;
  }, It = {
    p: D,
    um: Ze,
    m: Nt,
    r: ho,
    mt: Ye,
    mc: te,
    pc: ke,
    pbc: Ee,
    n: mn,
    o: e
  };
  let po, go;
  return t && ([po, go] = t(It)), {
    render: kr,
    hydrate: po,
    createApp: ha(kr, po)
  };
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Rn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (x(o) && x(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Xe(r[s]), c.el = i.el), n || Rn(i, c)), "development" !== "production" && c.type === Me && !c.el && (c.el = i.el);
    }
}
function ma(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const u = e[o];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < u ? s = c + 1 : i = c;
      u < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const wa = (e) => e.__isTeleport, De = Symbol("development" !== "production" ? "Fragment" : void 0), ro = Symbol("development" !== "production" ? "Text" : void 0), Me = Symbol("development" !== "production" ? "Comment" : void 0), Mn = Symbol("development" !== "production" ? "Static" : void 0), Gt = [];
let Pe = null;
function bo(e = !1) {
  Gt.push(Pe = e ? null : []);
}
function Ea() {
  Gt.pop(), Pe = Gt[Gt.length - 1] || null;
}
let cn = 1;
function ss(e) {
  cn += e;
}
function ba(e) {
  return e.dynamicChildren = cn > 0 ? Pe || Mt : null, Ea(), cn > 0 && Pe && Pe.push(e), e;
}
function yo(e, t, n, o, r, s) {
  return ba(de(e, t, n, o, r, s, !0));
}
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return "development" !== "production" && t.shapeFlag & 6 && At.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const ya = (...e) => Oi(...e), so = "__vInternal", Si = ({ key: e }) => e != null ? e : null, kn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? G(e) || ie(e) || V(e) ? { i: Te, r: e, k: t, f: !!n } : e : null;
function de(e, t = null, n = null, o = 0, r = null, s = e === De ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Si(t),
    ref: t && kn(t),
    scopeId: no,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return c ? (yr(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= G(n) ? 8 : 16), "development" !== "production" && l.key !== l.key && N("VNode created with invalid key (NaN). VNode type:", l.type), cn > 0 && !i && Pe && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Pe.push(l), l;
}
const wt = "development" !== "production" ? ya : Oi;
function Oi(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Wl) && ("development" !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Me), br(e)) {
    const c = st(e, t, !0);
    return n && yr(c, n), cn > 0 && !s && Pe && (c.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = c : Pe.push(c)), c.patchFlag |= -2, c;
  }
  if (Mi(e) && (e = e.__vccOpts), t) {
    t = va(t);
    let { class: c, style: l } = t;
    c && !G(c) && (t.class = or(c)), Y(l) && (Vo(l) && !x(l) && (l = re({}, l)), t.style = nr(l));
  }
  const i = G(e) ? 1 : Ol(e) ? 128 : wa(e) ? 64 : Y(e) ? 4 : V(e) ? 2 : 0;
  return "development" !== "production" && i & 4 && Vo(e) && (e = F(e), N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), de(e, t, n, o, r, i, s, !0);
}
function va(e) {
  return e ? Vo(e) || so in e ? re({}, e) : e : null;
}
function st(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Na(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Si(c),
    ref: t && t.ref ? n && r ? x(r) ? r.concat(kn(t)) : [r, kn(t)] : kn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: "development" !== "production" && s === -1 && x(i) ? i.map(Ai) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== De ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function Ai(e) {
  const t = st(e);
  return x(e.children) && (t.children = e.children.map(Ai)), t;
}
function Ca(e = " ", t = 0) {
  return wt(ro, null, e, t);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? wt(Me) : x(e) ? wt(
    De,
    null,
    e.slice()
  ) : typeof e == "object" ? Xe(e) : wt(ro, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function yr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (x(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), yr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(so in t) ? t._ctx = Te : r === 3 && Te && (Te.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    V(t) ? (t = { default: t, _ctx: Te }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ca(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Na(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = or([t.class, o.class]));
      else if (r === "style")
        t.style = nr([t.style, o.style]);
      else if (hn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(x(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ve(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const Ia = Di();
let Da = 0;
function Sa(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ia, s = {
    uid: Da++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _c(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: yi(o, r),
    emitsOptions: ui(o, r),
    emit: null,
    emitted: null,
    propsDefaults: K,
    inheritAttrs: o.inheritAttrs,
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return "development" !== "production" ? s.ctx = zl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = El.bind(null, s), e.ce && e.ce(s), s;
}
let fe = null;
const Bt = (e) => {
  fe = e, e.scope.on();
}, Et = () => {
  fe && fe.scope.off(), fe = null;
}, Oa = /* @__PURE__ */ it("slot,component");
function Jo(e, t) {
  const n = t.isNativeTag || Ps;
  (Oa(e) || n(e)) && N("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ti(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function Aa(e, t = !1) {
  ln = t;
  const { props: n, children: o } = e.vnode, r = Ti(e);
  ta(e, n, r, t), ua(e, o);
  const s = r ? Ta(e, t) : void 0;
  return ln = !1, s;
}
function Ta(e, t) {
  var n;
  const o = e.type;
  if ("development" !== "production") {
    if (o.name && Jo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Jo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        mi(s[i]);
    }
    o.compilerOptions && Pa() && N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Zs(new Proxy(e.ctx, wi)), "development" !== "production" && Jl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Ra(e) : null;
    Bt(e), vt();
    const i = Ke(r, e, 0, ["development" !== "production" ? Pt(e.props) : e.props, s]);
    if (Ct(), Et(), ir(i)) {
      if (i.then(Et, Et), t)
        return i.then((c) => {
          is(e, c, t);
        }).catch((c) => {
          Gn(c, e, 0);
        });
      if (e.asyncDep = i, "development" !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        N(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      is(e, i, t);
  } else
    Pi(e, t);
}
function is(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? ("development" !== "production" && br(t) && N("setup() should not return VNodes directly - return a render function instead."), "development" !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Xs(t), "development" !== "production" && Yl(e)) : "development" !== "production" && t !== void 0 && N(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Pi(e, n);
}
let Yo;
const Pa = () => !Yo;
function Pi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Yo && !o.render) {
      const r = o.template || wr(e).template;
      if (r) {
        "development" !== "production" && Ue(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: l } = o, u = re(re({
          isCustomElement: s,
          delimiters: c
        }, i), l);
        o.render = Yo(r, u), "development" !== "production" && He(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  Bt(e), vt(), ql(e), Ct(), Et(), "development" !== "production" && !o.render && e.render === ue && !t && (o.template ? N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : N("Component is missing template or render function."));
}
function cs(e) {
  return new Proxy(e.attrs, "development" !== "production" ? {
    get(t, n) {
      return Fn(), Ce(e, "get", "$attrs"), t[n];
    },
    set() {
      return N("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return N("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return Ce(e, "get", "$attrs"), t[n];
    }
  });
}
function Ra(e) {
  const t = (o) => {
    "development" !== "production" && e.exposed && N("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return "development" !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = cs(e));
    },
    get slots() {
      return Pt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = cs(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xs(Zs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Vt)
          return Vt[n](e);
      }
    }));
}
const Ma = /(?:^|[-_])(\w)/g, ka = (e) => e.replace(Ma, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ri(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function io(e, t, n = !1) {
  let o = Ri(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? ka(o) : n ? "App" : "Anonymous";
}
function Mi(e) {
  return V(e) && "__vccOpts" in e;
}
const xa = (e, t) => qc(e, t, ln);
Symbol("development" !== "production" ? "ssrContext" : "");
function vo(e) {
  return !!(e && e.__v_isShallow);
}
function Va() {
  if ("development" === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(h) {
      return Y(h) ? h.__isVue ? ["div", e, "VueInstance"] : ie(h) ? [
        "div",
        {},
        ["span", e, d(h)],
        "<",
        c(h.value),
        ">"
      ] : gt(h) ? [
        "div",
        {},
        ["span", e, vo(h) ? "ShallowReactive" : "Reactive"],
        "<",
        c(h),
        `>${rt(h) ? " (readonly)" : ""}`
      ] : rt(h) ? [
        "div",
        {},
        ["span", e, vo(h) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(h),
        ">"
      ] : null : null;
    },
    hasBody(h) {
      return h && h.__isVue;
    },
    body(h) {
      if (h && h.__isVue)
        return [
          "div",
          {},
          ...s(h.$)
        ];
    }
  };
  function s(h) {
    const p = [];
    h.type.props && h.props && p.push(i("props", F(h.props))), h.setupState !== K && p.push(i("setup", h.setupState)), h.data !== K && p.push(i("data", F(h.data)));
    const E = l(h, "computed");
    E && p.push(i("computed", E));
    const S = l(h, "inject");
    return S && p.push(i("injected", S)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: h }]
    ]), p;
  }
  function i(h, p) {
    return p = re({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        h
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((E) => [
          "div",
          {},
          ["span", o, E + ": "],
          c(p[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(h, p = !0) {
    return typeof h == "number" ? ["span", t, h] : typeof h == "string" ? ["span", n, JSON.stringify(h)] : typeof h == "boolean" ? ["span", o, h] : Y(h) ? ["object", { object: p ? F(h) : h }] : ["span", n, String(h)];
  }
  function l(h, p) {
    const E = h.type;
    if (V(E))
      return;
    const S = {};
    for (const D in h.ctx)
      u(E, D, p) && (S[D] = h.ctx[D]);
    return S;
  }
  function u(h, p, E) {
    const S = h[E];
    if (x(S) && S.includes(p) || Y(S) && p in S || h.extends && u(h.extends, p, E) || h.mixins && h.mixins.some((D) => u(D, p, E)))
      return !0;
  }
  function d(h) {
    return vo(h) ? "ShallowRef" : h.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ls = "3.2.41", Ba = "http://www.w3.org/2000/svg", dt = typeof document < "u" ? document : null, as = dt && /* @__PURE__ */ dt.createElement("template"), $a = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? dt.createElementNS(Ba, e) : dt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => dt.createTextNode(e),
  createComment: (e) => dt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      as.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = as.content;
      if (o) {
        const l = c.firstChild;
        for (; l.firstChild; )
          c.appendChild(l.firstChild);
        c.removeChild(l);
      }
      t.insertBefore(c, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Fa(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function La(e, t, n) {
  const o = e.style, r = G(n);
  if (n && !r) {
    for (const s in n)
      Zo(o, s, n[s]);
    if (t && !G(t))
      for (const s in t)
        n[s] == null && Zo(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const us = /\s*!important$/;
function Zo(e, t, n) {
  if (x(n))
    n.forEach((o) => Zo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ja(e, t);
    us.test(n) ? e.setProperty(nt(o), n.replace(us, ""), "important") : e[o] = n;
  }
}
const fs = ["Webkit", "Moz", "ms"], Co = {};
function ja(e, t) {
  const n = Co[t];
  if (n)
    return n;
  let o = xt(t);
  if (o !== "filter" && o in e)
    return Co[t] = o;
  o = Jn(o);
  for (let r = 0; r < fs.length; r++) {
    const s = fs[r] + o;
    if (s in e)
      return Co[t] = s;
  }
  return t;
}
const ds = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ds, t.slice(6, t.length)) : e.setAttributeNS(ds, t, n);
  else {
    const s = nc(t);
    n == null || s && !As(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Ha(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = As(n) : n == null && l === "string" ? (n = "", c = !0) : l === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    "development" !== "production" && !c && N(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  c && e.removeAttribute(t);
}
function Wa(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ka(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function za(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, l] = Ja(t);
    if (o) {
      const u = s[t] = qa(o, r);
      Wa(e, c, u, l);
    } else
      i && (Ka(e, c, i, l), s[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function Ja(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let No = 0;
const Ya = /* @__PURE__ */ Promise.resolve(), Za = () => No || (Ya.then(() => No = 0), No = Date.now());
function qa(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(Qa(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Za(), n;
}
function Qa(e, t) {
  if (x(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const ps = /^on[a-z]/, Xa = (e, t, n, o, r = !1, s, i, c, l) => {
  t === "class" ? Fa(e, o, r) : t === "style" ? La(e, n, o) : hn(t) ? xn(t) || za(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ga(e, t, o, r)) ? Ha(e, t, o, s, i, c, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ua(e, t, o, r));
};
function Ga(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ps.test(t) && V(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ps.test(t) && G(n) ? !1 : t in e;
}
const eu = /* @__PURE__ */ re({ patchProp: Xa }, $a);
let gs;
function tu() {
  return gs || (gs = ga(eu));
}
const nu = (...e) => {
  const t = tu().createApp(...e);
  "development" !== "production" && (ou(t), ru(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = su(o);
    if (!r)
      return;
    const s = t._component;
    !V(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function ou(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => lc(t) || ac(t),
    writable: !1
  });
}
function ru(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return N(o), n;
      },
      set() {
        N(o);
      }
    });
  }
}
function su(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return "development" !== "production" && !t && N(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return "development" !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function iu() {
  Va();
}
"development" !== "production" && iu();
var _s;
const cu = typeof window < "u";
cu && ((_s = window == null ? void 0 : window.navigator) == null ? void 0 : _s.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function lu(e) {
  return e;
}
function au() {
  const e = [], t = (r) => {
    const s = e.indexOf(r);
    s !== -1 && e.splice(s, 1);
  };
  return {
    on: (r) => (e.push(r), {
      off: () => t(r)
    }),
    off: t,
    trigger: (r) => {
      e.forEach((s) => s(r));
    }
  };
}
const qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qo = "__vueuse_ssr_handlers__";
qo[Qo] = qo[Qo] || {};
qo[Qo];
const St = /* @__PURE__ */ new Map();
function ki(e) {
  const t = wc();
  function n(c) {
    var l;
    const u = St.get(e) || [];
    u.push(c), St.set(e, u);
    const d = () => r(c);
    return (l = t == null ? void 0 : t.cleanups) == null || l.push(d), d;
  }
  function o(c) {
    function l(...u) {
      r(l), c(...u);
    }
    return n(l);
  }
  function r(c) {
    const l = St.get(e);
    if (!l)
      return;
    const u = l.indexOf(c);
    u > -1 && l.splice(u, 1), l.length || St.delete(e);
  }
  function s() {
    St.delete(e);
  }
  function i(c, l) {
    var u;
    (u = St.get(e)) == null || u.forEach((d) => d(c, l));
  }
  return { on: n, once: o, off: r, emit: i, reset: s };
}
var ms;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ms || (ms = {}));
var uu = Object.defineProperty, ws = Object.getOwnPropertySymbols, fu = Object.prototype.hasOwnProperty, du = Object.prototype.propertyIsEnumerable, Es = (e, t, n) => t in e ? uu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hu = (e, t) => {
  for (var n in t || (t = {}))
    fu.call(t, n) && Es(e, n, t[n]);
  if (ws)
    for (var n of ws(t))
      du.call(t, n) && Es(e, n, t[n]);
  return e;
};
const pu = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
hu({
  linear: lu
}, pu);
const gu = "JVBERi0xLjQKJcOIw4HDhMOXDQo4IDAgb2JqCjw8Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlIAovTGVuZ3RoIDEyMSAKPj4gc3RyZWFtCnicVYuxCsIwFEX3fsUZ06HxvdrktasgiJuQTdxMdYgUM+jvWxdBLtx77nB4In6M9tf1hn1JsXUnCwxh64NGOhPxqgM1M3Nq2CU2h1xeaE+aUWSN/vQo3mQiPc7unktZWrreRty7RcUtdf0aXLm2F9KxgX1qPvc2IBcKZW5kc3RyZWFtCmVuZG9iago2IDAgb2JqCjw8Ci9Hcm91cCA8PAovUyAvVHJhbnNwYXJlbmN5IC9LIHRydWUgL0kgdHJ1ZSAvQ1MgNCAwIFIgID4+ICAKL0NvbnRlbnRzIDggMCBSICAKL1Jlc291cmNlcyA8PAovRm9udCA8PAovSGVsdiA5IDAgUiAgPj4gIC9Db2xvclNwYWNlIDw8Ci9EZWZhdWx0UkdCIDQgMCBSICA+PiAgL1Byb2NTZXQgWy9QREYgL1RleHRdID4+ICAKL1R5cGUgL1BhZ2UgCi9QYXJlbnQgNyAwIFIgIAovTWVkaWFCb3ggWzAgMCA1OTUuMjM4IDg0MS44MzZdIAo+PiBlbmRvYmoKNyAwIG9iago8PAovS2lkcyBbNiAwIFJdIAovVHlwZSAvUGFnZXMgCi9Db3VudCAxIAovUGFyZW50IDIgMCBSICAKPj4gZW5kb2JqCjIgMCBvYmoKPDwKL0tpZHMgWzcgMCBSXSAKL1R5cGUgL1BhZ2VzIAovQ291bnQgMSAKPj4gZW5kb2JqCjEgMCBvYmoKPDwKL091dGxpbmVzIDMgMCBSICAKL1BhZ2VzIDIgMCBSICAKL1R5cGUgL0NhdGFsb2cgCi9QYWdlTW9kZSAvVXNlTm9uZSAKPj4gZW5kb2JqCjQgMCBvYmoKWy9JQ0NCYXNlZCA1IDAgUiBdIAplbmRvYmoKNSAwIG9iago8PAovRmlsdGVyIC9GbGF0ZURlY29kZSAKL04gMyAKL0xlbmd0aCAyNjAyIAo+PiBzdHJlYW0KeJwBHwrg9XicnZZnVFTXFsfPvXd6oc0wdBh6720A6b1Jr6IyzAwwlAGHGRDFhogKRBQRaYogQQEDRkORWBHFQlBUsBuQIKDEYBRRUXkzulbiy8t7L8n/w72/tc/e555dzloXAJJPAJeXAUsBkM4T8EO93ejRMbF07CCAAR5ggDkATFZWZmCYVzgQydfTnZ4lcgL/ptcjABK/bxr7BNPp4O9JmpXJFwAABYvYks3JYom4QMRpOYJMsX1WxNSEVDHDKDHzRQcUsbyYkz6z0Sefz+wiZnY6jy1i8Zkz2elsMfeJeFu2kCNiJEDEhdlcTo6Ib4lYK02YzhXxG3FsOoeZBQCKJLYLOKxkEZuJmMQPD3UX8RIAcKSkLzjhCxZwVgvESblnZObyuUnJAroeS59ubmfHoPtwctI4AoFxMJOVyuSz6e4Z6ZlMXi4An3P+JBlxbemiItuY29nYGFuYmH9RqP+5+Bcl7u1nehnyqWcQbeB325/5ZTQAwJgT1Wbn77aEKgC6tgAgf+93m9YBACRFfeu89kU+NPG8JAsEmfampjk5OSZcDstEXNDf9H8d/oK++J6JeLvfykP34CQyhWkCurhurIy0DCGfnpXJZHHoxn8c4n8c+OfnMArlJHL4HJ4oIlI0ZVxekqjdPDZXwM3g0bm8/9bEfxj2B32ea5EojR8BdaUJkLpGBcjPAwBFIQIkbr9oBfqtbwH4SCC+eVFqk5/n/pOg/9wVLhU/srhJn+LcQ8PpLCE/+/Oa+FoCNCAASUAFCkAVaAI9YAwsgC1wAC7AE/iBIBAOYsAKwALJIB3wQQ7IA5tAISgGO8EeUA3qQCNoBm3gGOgCJ8E5cBFcBdfBMLgPRsEEeAZmwWuwAEEQFiJDFEgBUoO0IUPIAmJATpAnFACFQjFQPJQE8SAhlAdthoqhMqgaqoeaoW+hE9A56DI0BN2FxqBp6FfoHYzAJJgKq8A6sCnMgF1hfzgcXg4nwavgNXABvAOuhBvgI3AnfA6+Cg/Do/AzeA4BCBGhIeqIMcJA3JEgJBZJRPjIeqQIqUAakDakB+lHbiKjyAzyFoVBUVB0lDHKAeWDikCxUKtQ61ElqGrUYVQnqg91EzWGmkV9RJPRymhDtD3aFx2NTkLnoAvRFegmdAf6AnoYPYF+jcFgaBhdjC3GBxODScGsxZRg9mHaMWcxQ5hxzBwWi1XAGmIdsUFYJlaALcRWYY9gz2BvYCewb3BEnBrOAueFi8XxcPm4ClwL7jTuBm4St4CXwmvj7fFBeDY+F1+Kb8T34K/hJ/ALBGmCLsGREE5IIWwiVBLaCBcIDwgviUSiBtGOGELkEjcSK4lHiZeIY8S3JBmSAcmdFEcSknaQDpHOku6SXpLJZB2yCzmWLCDvIDeTz5Mfkd9IUCRMJHwl2BIbJGokOiVuSDyXxEtqS7pKrpBcI1kheVzymuSMFF5KR8pdiim1XqpG6oTUbak5aYq0uXSQdLp0iXSL9GXpKRmsjI6MpwxbpkDmoMx5mXEKQtGkuFNYlM2URsoFygQVQ9Wl+lJTqMXUb6iD1FlZGVkr2UjZ1bI1sqdkR2kITYfmS0ujldKO0UZo7+RU5FzlOHLb5drkbsjNyyvJu8hz5Ivk2+WH5d8p0BU8FVIVdil0KTxURCkaKIYo5ijuV7ygOKNEVXJQYikVKR1TuqcMKxsohyqvVT6oPKA8p6Kq4q2SqVKlcl5lRpWm6qKaolquelp1Wo2i5qTGVStXO6P2lC5Ld6Wn0SvpffRZdWV1H3Wher36oPqChq5GhEa+RrvGQ02CJkMzUbNcs1dzVktNK1ArT6tV6542Xpuhnay9V7tfe15HVydKZ6tOl86Urryur+4a3VbdB3pkPWe9VXoNerf0MfoM/VT9ffrXDWADa4NkgxqDa4awoY0h13Cf4ZAR2sjOiGfUYHTbmGTsapxt3Go8ZkIzCTDJN+kyeW6qZRprusu03/SjmbVZmlmj2X1zGXM/83zzHvNfLQwsWBY1FrcsyZZelhssuy1fWBlacaz2W92xplgHWm+17rX+YGNrw7dps5m21bKNt621vc2gMoIZJYxLdmg7N7sNdift3trb2Avsj9n/4mDskOrQ4jC1RHcJZ0njknFHDUemY73jqBPdKd7pgNOos7oz07nB+bGLpgvbpcll0lXfNcX1iOtzNzM3vluH27y7vfs697MeiIe3R5HHoKeMZ4RntecjLw2vJK9Wr1lva++13md90D7+Prt8bvuq+LJ8m31n/Wz91vn1+ZP8w/yr/R8HGATwA3oC4UC/wN2BD5ZqL+Ut7QoCQb5Bu4MeBusGrwr+PgQTEhxSE/Ik1Dw0L7Q/jBK2Mqwl7HW4W3hp+P0IvQhhRG+kZGRcZHPkfJRHVFnUaLRp9LroqzGKMdyY7lhsbGRsU+zcMs9le5ZNxFnHFcaNLNddvnr55RWKK9JWnFopuZK58ng8Oj4qviX+PTOI2cCcS/BNqE2YZbmz9rKesV3Y5expjiOnjDOZ6JhYljiV5Ji0O2k62Tm5InmG686t5r5I8UmpS5lPDUo9lLqYFpXWno5Lj08/wZPhpfL6MlQzVmcMZRpmFmaOrrJftWfVLN+f35QFZS3P6hZQRT9TA0I94RbhWLZTdk32m5zInOOrpVfzVg/kGuRuz51c47Xm67Wotay1vXnqeZvyxta5rqtfD61PWN+7QXNDwYaJjd4bD28ibErd9EO+WX5Z/qvNUZt7ClQKNhaMb/He0looUcgvvL3VYWvdNtQ27rbB7Zbbq7Z/LGIXXSk2K64ofl/CKrnylflXlV8t7kjcMVhqU7p/J2Ynb+fILuddh8uky9aUje8O3N1ZTi8vKn+1Z+WeyxVWFXV7CXuFe0crAyq7q7Sqdla9r06uHq5xq2mvVa7dXju/j73vxn6X/W11KnXFde8OcA/cqfeu72zQaag4iDmYffBJY2Rj/9eMr5ubFJuKmz4c4h0aPRx6uK/Ztrm5RbmltBVuFbZOH4k7cv0bj2+624zb6ttp7cVHwVHh0affxn87csz/WO9xxvG277S/q+2gdBR1Qp25nbNdyV2j3THdQyf8TvT2OPR0fG/y/aGT6idrTsmeKj1NOF1wevHMmjNzZzPPzpxLOjfeu7L3/vno87f6QvoGL/hfuHTR6+L5ftf+M5ccL528bH/5xBXGla6rNlc7B6wHOn6w/qFj0Gaw85rtte7rdtd7hpYMnb7hfOPcTY+bF2/53ro6vHR4aCRi5M7tuNujd9h3pu6m3X1xL/vewv2ND9APih5KPax4pPyo4Uf9H9tHbUZPjXmMDTwOe3x/nDX+7Kesn95PFDwhP6mYVJtsnrKYOjntNX396bKnE88yny3MFP4s/XPtc73n3/3i8svAbPTsxAv+i8VfS14qvDz0yupV71zw3KPX6a8X5oveKLw5/Jbxtv9d1LvJhZz32PeVH/Q/9Hz0//hgMX1x8V/3hPP7y2IJQQplbmRzdHJlYW0KZW5kb2JqCjMgMCBvYmoKPDwKPj4gZW5kb2JqCjkgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIAovU3VidHlwZSAvVHlwZTEgCi9UeXBlIC9Gb250IAovTmFtZSAvSGVsdiAKPj4gZW5kb2JqCjEwIDAgb2JqCjw8Ci9DcmVhdGlvbkRhdGUgKEQ6MjAwODA2MTExNjU2MDMpIAovTW9kRGF0ZSAoRDoyMDA4MDYxMTE2NTYwMykgCi9Qcm9kdWNlciAoSWJleCBQREYgQ3JlYXRvciA0LjMuNi40LzUwMjUgWy5ORVQgMi4wXSkgCj4+IGVuZG9iagp4cmVmCjAgMTEKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwNjE2IDAwMDAwIG4gCjAwMDAwMDA1NTYgMDAwMDAgbiAKMDAwMDAwMzQyNCAwMDAwMCBuIAowMDAwMDAwNzA2IDAwMDAwIG4gCjAwMDAwMDA3NDEgMDAwMDAgbiAKMDAwMDAwMDIxNSAwMDAwMCBuIAowMDAwMDAwNDgwIDAwMDAwIG4gCjAwMDAwMDAwMjAgMDAwMDAgbiAKMDAwMDAwMzQ0NSAwMDAwMCBuIAowMDAwMDAzNTU5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTEgCi9JbmZvIDEwIDAgUiAgCi9Sb290IDEgMCBSIAo+PgpzdGFydHhyZWYKMzY5OAolJUVPRgo=";
class $t extends Error {
  constructor(t, n) {
    const o = new.target.prototype;
    super(`${t}: Status code '${n}'`), this.statusCode = n, this.__proto__ = o;
  }
}
class Cr extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    super(t), this.__proto__ = n;
  }
}
class an extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    super(t), this.__proto__ = n;
  }
}
class _u extends Error {
  constructor(t, n) {
    const o = new.target.prototype;
    super(t), this.transport = n, this.errorType = "UnsupportedTransportError", this.__proto__ = o;
  }
}
class mu extends Error {
  constructor(t, n) {
    const o = new.target.prototype;
    super(t), this.transport = n, this.errorType = "DisabledTransportError", this.__proto__ = o;
  }
}
class wu extends Error {
  constructor(t, n) {
    const o = new.target.prototype;
    super(t), this.transport = n, this.errorType = "FailedToStartTransportError", this.__proto__ = o;
  }
}
class Eu extends Error {
  constructor(t) {
    const n = new.target.prototype;
    super(t), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class bu extends Error {
  constructor(t, n) {
    const o = new.target.prototype;
    super(t), this.innerErrors = n, this.__proto__ = o;
  }
}
class xi {
  constructor(t, n, o) {
    this.statusCode = t, this.statusText = n, this.content = o;
  }
}
class Nr {
  get(t, n) {
    return this.send({
      ...n,
      method: "GET",
      url: t
    });
  }
  post(t, n) {
    return this.send({
      ...n,
      method: "POST",
      url: t
    });
  }
  delete(t, n) {
    return this.send({
      ...n,
      method: "DELETE",
      url: t
    });
  }
  getCookieString(t) {
    return "";
  }
}
var _;
(function(e) {
  e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
})(_ || (_ = {}));
class un {
  constructor() {
  }
  log(t, n) {
  }
}
un.instance = new un();
const yu = "6.0.10";
class ce {
  static isRequired(t, n) {
    if (t == null)
      throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(t, n) {
    if (!t || t.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(t, n, o) {
    if (!(t in n))
      throw new Error(`Unknown ${o} value: ${t}.`);
  }
}
class ae {
  static get isBrowser() {
    return typeof window == "object" && typeof window.document == "object";
  }
  static get isWebWorker() {
    return typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return typeof window == "object" && typeof window.document > "u";
  }
  static get isNode() {
    return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
  }
}
function fn(e, t) {
  let n = "";
  return Ir(e) ? (n = `Binary data of length ${e.byteLength}`, t && (n += `. Content: '${vu(e)}'`)) : typeof e == "string" && (n = `String data of length ${e.length}`, t && (n += `. Content: '${e}'`)), n;
}
function vu(e) {
  const t = new Uint8Array(e);
  let n = "";
  return t.forEach((o) => {
    n += `0x${o < 16 ? "0" : ""}${o.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function Ir(e) {
  return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || e.constructor && e.constructor.name === "ArrayBuffer");
}
async function Vi(e, t, n, o, r, s, i) {
  let c = {};
  if (r) {
    const p = await r();
    p && (c = {
      Authorization: `Bearer ${p}`
    });
  }
  const [l, u] = Ft();
  c[l] = u, e.log(_.Trace, `(${t} transport) sending data. ${fn(s, i.logMessageContent)}.`);
  const d = Ir(s) ? "arraybuffer" : "text", h = await n.post(o, {
    content: s,
    headers: { ...c, ...i.headers },
    responseType: d,
    timeout: i.timeout,
    withCredentials: i.withCredentials
  });
  e.log(_.Trace, `(${t} transport) request complete. Response status: ${h.statusCode}.`);
}
function Cu(e) {
  return e === void 0 ? new Un(_.Information) : e === null ? un.instance : e.log !== void 0 ? e : new Un(e);
}
class Nu {
  constructor(t, n) {
    this._subject = t, this._observer = n;
  }
  dispose() {
    const t = this._subject.observers.indexOf(this._observer);
    t > -1 && this._subject.observers.splice(t, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class Un {
  constructor(t) {
    this._minLevel = t, this.out = console;
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const o = `[${new Date().toISOString()}] ${_[t]}: ${n}`;
      switch (t) {
        case _.Critical:
        case _.Error:
          this.out.error(o);
          break;
        case _.Warning:
          this.out.warn(o);
          break;
        case _.Information:
          this.out.info(o);
          break;
        default:
          this.out.log(o);
          break;
      }
    }
  }
}
function Ft() {
  let e = "X-SignalR-User-Agent";
  return ae.isNode && (e = "User-Agent"), [e, Iu(yu, Du(), Ou(), Su())];
}
function Iu(e, t, n, o) {
  let r = "Microsoft SignalR/";
  const s = e.split(".");
  return r += `${s[0]}.${s[1]}`, r += ` (${e}; `, t && t !== "" ? r += `${t}; ` : r += "Unknown OS; ", r += `${n}`, o ? r += `; ${o}` : r += "; Unknown Runtime Version", r += ")", r;
}
function Du() {
  if (ae.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function Su() {
  if (ae.isNode)
    return process.versions.node;
}
function Ou() {
  return ae.isNode ? "NodeJS" : "Browser";
}
function bs(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function Au() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class Tu extends Nr {
  constructor(t) {
    if (super(), this._logger = t, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Au());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted)
      throw new an();
    if (!t.method)
      throw new Error("No method defined.");
    if (!t.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let o;
    t.abortSignal && (t.abortSignal.onabort = () => {
      n.abort(), o = new an();
    });
    let r = null;
    if (t.timeout) {
      const l = t.timeout;
      r = setTimeout(() => {
        n.abort(), this._logger.log(_.Warning, "Timeout from HTTP request."), o = new Cr();
      }, l);
    }
    let s;
    try {
      s = await this._fetchType(t.url, {
        body: t.content,
        cache: "no-cache",
        credentials: t.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          ...t.headers
        },
        method: t.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal
      });
    } catch (l) {
      throw o || (this._logger.log(_.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      r && clearTimeout(r), t.abortSignal && (t.abortSignal.onabort = null);
    }
    if (!s.ok) {
      const l = await ys(s, "text");
      throw new $t(l || s.statusText, s.status);
    }
    const c = await ys(s, t.responseType);
    return new xi(s.status, s.statusText, c);
  }
  getCookieString(t) {
    let n = "";
    return ae.isNode && this._jar && this._jar.getCookies(t, (o, r) => n = r.join("; ")), n;
  }
}
function ys(e, t) {
  let n;
  switch (t) {
    case "arraybuffer":
      n = e.arrayBuffer();
      break;
    case "text":
      n = e.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${t} is not supported.`);
    default:
      n = e.text();
      break;
  }
  return n;
}
class Pu extends Nr {
  constructor(t) {
    super(), this._logger = t;
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new an()) : t.method ? t.url ? new Promise((n, o) => {
      const r = new XMLHttpRequest();
      r.open(t.method, t.url, !0), r.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const s = t.headers;
      s && Object.keys(s).forEach((i) => {
        r.setRequestHeader(i, s[i]);
      }), t.responseType && (r.responseType = t.responseType), t.abortSignal && (t.abortSignal.onabort = () => {
        r.abort(), o(new an());
      }), t.timeout && (r.timeout = t.timeout), r.onload = () => {
        t.abortSignal && (t.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? n(new xi(r.status, r.statusText, r.response || r.responseText)) : o(new $t(r.response || r.responseText || r.statusText, r.status));
      }, r.onerror = () => {
        this._logger.log(_.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), o(new $t(r.statusText, r.status));
      }, r.ontimeout = () => {
        this._logger.log(_.Warning, "Timeout from HTTP request."), o(new Cr());
      }, r.send(t.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class Ru extends Nr {
  constructor(t) {
    if (super(), typeof fetch < "u" || ae.isNode)
      this._httpClient = new Tu(t);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Pu(t);
    else
      throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new an()) : t.method ? t.url ? this._httpClient.send(t) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(t) {
    return this._httpClient.getCookieString(t);
  }
}
class Ne {
  static write(t) {
    return `${t}${Ne.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== Ne.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(Ne.RecordSeparator);
    return n.pop(), n;
  }
}
Ne.RecordSeparatorCode = 30;
Ne.RecordSeparator = String.fromCharCode(Ne.RecordSeparatorCode);
class Mu {
  writeHandshakeRequest(t) {
    return Ne.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, o;
    if (Ir(t)) {
      const c = new Uint8Array(t), l = c.indexOf(Ne.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(c.slice(0, u))), o = c.byteLength > u ? c.slice(u).buffer : null;
    } else {
      const c = t, l = c.indexOf(Ne.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      n = c.substring(0, u), o = c.length > u ? c.substring(u) : null;
    }
    const r = Ne.parse(n), s = JSON.parse(r[0]);
    if (s.type)
      throw new Error("Expected a handshake response from the server.");
    return [o, s];
  }
}
var q;
(function(e) {
  e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
})(q || (q = {}));
class ku {
  constructor() {
    this.observers = [];
  }
  next(t) {
    for (const n of this.observers)
      n.next(t);
  }
  error(t) {
    for (const n of this.observers)
      n.error && n.error(t);
  }
  complete() {
    for (const t of this.observers)
      t.complete && t.complete();
  }
  subscribe(t) {
    return this.observers.push(t), new Nu(this, t);
  }
}
const xu = 30 * 1e3, Vu = 15 * 1e3;
var X;
(function(e) {
  e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
})(X || (X = {}));
class Dr {
  constructor(t, n, o, r) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(_.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, ce.isRequired(t, "connection"), ce.isRequired(n, "logger"), ce.isRequired(o, "protocol"), this.serverTimeoutInMilliseconds = xu, this.keepAliveIntervalInMilliseconds = Vu, this._logger = n, this._protocol = o, this.connection = t, this._reconnectPolicy = r, this._handshakeProtocol = new Mu(), this.connection.onreceive = (s) => this._processIncomingData(s), this.connection.onclose = (s) => this._connectionClosed(s), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = X.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: q.Ping });
  }
  static create(t, n, o, r) {
    return new Dr(t, n, o, r);
  }
  get state() {
    return this._connectionState;
  }
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  set baseUrl(t) {
    if (this._connectionState !== X.Disconnected && this._connectionState !== X.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!t)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = t;
  }
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== X.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = X.Connecting, this._logger.log(_.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), ae.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = X.Connected, this._connectionStarted = !0, this._logger.log(_.Debug, "HubConnection connected successfully.");
    } catch (t) {
      return this._connectionState = X.Disconnected, this._logger.log(_.Debug, `HubConnection failed to start successfully because of error '${t}'.`), Promise.reject(t);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const t = new Promise((n, o) => {
      this._handshakeResolver = n, this._handshakeRejecter = o;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      const n = {
        protocol: this._protocol.name,
        version: this._protocol.version
      };
      if (this._logger.log(_.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(_.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await t, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (n) {
      throw this._logger.log(_.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
    }
  }
  async stop() {
    const t = this._startPromise;
    this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await t;
    } catch {
    }
  }
  _stopInternal(t) {
    return this._connectionState === X.Disconnected ? (this._logger.log(_.Debug, `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === X.Disconnecting ? (this._logger.log(_.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = X.Disconnecting, this._logger.log(_.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(_.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = t || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(t)));
  }
  stream(t, ...n) {
    const [o, r] = this._replaceStreamingParams(n), s = this._createStreamInvocation(t, n, r);
    let i;
    const c = new ku();
    return c.cancelCallback = () => {
      const l = this._createCancelInvocation(s.invocationId);
      return delete this._callbacks[s.invocationId], i.then(() => this._sendWithProtocol(l));
    }, this._callbacks[s.invocationId] = (l, u) => {
      if (u) {
        c.error(u);
        return;
      } else
        l && (l.type === q.Completion ? l.error ? c.error(new Error(l.error)) : c.complete() : c.next(l.item));
    }, i = this._sendWithProtocol(s).catch((l) => {
      c.error(l), delete this._callbacks[s.invocationId];
    }), this._launchStreams(o, i), c;
  }
  _sendMessage(t) {
    return this._resetKeepAliveInterval(), this.connection.send(t);
  }
  _sendWithProtocol(t) {
    return this._sendMessage(this._protocol.writeMessage(t));
  }
  send(t, ...n) {
    const [o, r] = this._replaceStreamingParams(n), s = this._sendWithProtocol(this._createInvocation(t, n, !0, r));
    return this._launchStreams(o, s), s;
  }
  invoke(t, ...n) {
    const [o, r] = this._replaceStreamingParams(n), s = this._createInvocation(t, n, !1, r);
    return new Promise((c, l) => {
      this._callbacks[s.invocationId] = (d, h) => {
        if (h) {
          l(h);
          return;
        } else
          d && (d.type === q.Completion ? d.error ? l(new Error(d.error)) : c(d.result) : l(new Error(`Unexpected message type: ${d.type}`)));
      };
      const u = this._sendWithProtocol(s).catch((d) => {
        l(d), delete this._callbacks[s.invocationId];
      });
      this._launchStreams(o, u);
    });
  }
  on(t, n) {
    !t || !n || (t = t.toLowerCase(), this._methods[t] || (this._methods[t] = []), this._methods[t].indexOf(n) === -1 && this._methods[t].push(n));
  }
  off(t, n) {
    if (!t)
      return;
    t = t.toLowerCase();
    const o = this._methods[t];
    if (!!o)
      if (n) {
        const r = o.indexOf(n);
        r !== -1 && (o.splice(r, 1), o.length === 0 && delete this._methods[t]);
      } else
        delete this._methods[t];
  }
  onclose(t) {
    t && this._closedCallbacks.push(t);
  }
  onreconnecting(t) {
    t && this._reconnectingCallbacks.push(t);
  }
  onreconnected(t) {
    t && this._reconnectedCallbacks.push(t);
  }
  _processIncomingData(t) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (t = this._processHandshakeResponse(t), this._receivedHandshakeResponse = !0), t) {
      const n = this._protocol.parseMessages(t, this._logger);
      for (const o of n)
        switch (o.type) {
          case q.Invocation:
            this._invokeClientMethod(o);
            break;
          case q.StreamItem:
          case q.Completion: {
            const r = this._callbacks[o.invocationId];
            if (r) {
              o.type === q.Completion && delete this._callbacks[o.invocationId];
              try {
                r(o);
              } catch (s) {
                this._logger.log(_.Error, `Stream callback threw error: ${bs(s)}`);
              }
            }
            break;
          }
          case q.Ping:
            break;
          case q.Close: {
            this._logger.log(_.Information, "Close message received from server.");
            const r = o.error ? new Error("Server returned an error on close: " + o.error) : void 0;
            o.allowReconnect === !0 ? this.connection.stop(r) : this._stopPromise = this._stopInternal(r);
            break;
          }
          default:
            this._logger.log(_.Warning, `Invalid message type: ${o.type}.`);
            break;
        }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(t) {
    let n, o;
    try {
      [o, n] = this._handshakeProtocol.parseHandshakeResponse(t);
    } catch (r) {
      const s = "Error parsing handshake response: " + r;
      this._logger.log(_.Error, s);
      const i = new Error(s);
      throw this._handshakeRejecter(i), i;
    }
    if (n.error) {
      const r = "Server returned handshake error: " + n.error;
      this._logger.log(_.Error, r);
      const s = new Error(r);
      throw this._handshakeRejecter(s), s;
    } else
      this._logger.log(_.Debug, "Server handshake complete.");
    return this._handshakeResolver(), o;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let t = this._nextKeepAlive - new Date().getTime();
      t < 0 && (t = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === X.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, t);
    }
  }
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  _invokeClientMethod(t) {
    const n = this._methods[t.target.toLowerCase()];
    if (n) {
      try {
        n.forEach((o) => o.apply(this, t.arguments));
      } catch (o) {
        this._logger.log(_.Error, `A callback for the method ${t.target.toLowerCase()} threw error '${o}'.`);
      }
      if (t.invocationId) {
        const o = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(_.Error, o), this._stopPromise = this._stopInternal(new Error(o));
      }
    } else
      this._logger.log(_.Warning, `No client method with the name '${t.target}' found.`);
  }
  _connectionClosed(t) {
    this._logger.log(_.Debug, `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || t || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(t || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === X.Disconnecting ? this._completeClose(t) : this._connectionState === X.Connected && this._reconnectPolicy ? this._reconnect(t) : this._connectionState === X.Connected && this._completeClose(t);
  }
  _completeClose(t) {
    if (this._connectionStarted) {
      this._connectionState = X.Disconnected, this._connectionStarted = !1, ae.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(_.Error, `An onclose callback called with error '${t}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(t) {
    const n = Date.now();
    let o = 0, r = t !== void 0 ? t : new Error("Attempting to reconnect due to a unknown error."), s = this._getNextRetryDelay(o++, 0, r);
    if (s === null) {
      this._logger.log(_.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(t);
      return;
    }
    if (this._connectionState = X.Reconnecting, t ? this._logger.log(_.Information, `Connection reconnecting because of error '${t}'.`) : this._logger.log(_.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(_.Error, `An onreconnecting callback called with error '${t}' threw error '${i}'.`);
      }
      if (this._connectionState !== X.Reconnecting) {
        this._logger.log(_.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; s !== null; ) {
      if (this._logger.log(_.Information, `Reconnect attempt number ${o} will start in ${s} ms.`), await new Promise((i) => {
        this._reconnectDelayHandle = setTimeout(i, s);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== X.Reconnecting) {
        this._logger.log(_.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = X.Connected, this._logger.log(_.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((i) => i.apply(this, [this.connection.connectionId]));
          } catch (i) {
            this._logger.log(_.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`);
          }
        return;
      } catch (i) {
        if (this._logger.log(_.Information, `Reconnect attempt failed because of error '${i}'.`), this._connectionState !== X.Reconnecting) {
          this._logger.log(_.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === X.Disconnecting && this._completeClose();
          return;
        }
        r = i instanceof Error ? i : new Error(i.toString()), s = this._getNextRetryDelay(o++, Date.now() - n, r);
      }
    }
    this._logger.log(_.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${o} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(t, n, o) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: t,
        retryReason: o
      });
    } catch (r) {
      return this._logger.log(_.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${n}) threw error '${r}'.`), null;
    }
  }
  _cancelCallbacksWithError(t) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((o) => {
      const r = n[o];
      try {
        r(null, t);
      } catch (s) {
        this._logger.log(_.Error, `Stream 'error' callback called with '${t}' threw error: ${bs(s)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(t, n, o, r) {
    if (o)
      return r.length !== 0 ? {
        arguments: n,
        streamIds: r,
        target: t,
        type: q.Invocation
      } : {
        arguments: n,
        target: t,
        type: q.Invocation
      };
    {
      const s = this._invocationId;
      return this._invocationId++, r.length !== 0 ? {
        arguments: n,
        invocationId: s.toString(),
        streamIds: r,
        target: t,
        type: q.Invocation
      } : {
        arguments: n,
        invocationId: s.toString(),
        target: t,
        type: q.Invocation
      };
    }
  }
  _launchStreams(t, n) {
    if (t.length !== 0) {
      n || (n = Promise.resolve());
      for (const o in t)
        t[o].subscribe({
          complete: () => {
            n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(o)));
          },
          error: (r) => {
            let s;
            r instanceof Error ? s = r.message : r && r.toString ? s = r.toString() : s = "Unknown error", n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(o, s)));
          },
          next: (r) => {
            n = n.then(() => this._sendWithProtocol(this._createStreamItemMessage(o, r)));
          }
        });
    }
  }
  _replaceStreamingParams(t) {
    const n = [], o = [];
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      if (this._isObservable(s)) {
        const i = this._invocationId;
        this._invocationId++, n[i] = s, o.push(i.toString()), t.splice(r, 1);
      }
    }
    return [n, o];
  }
  _isObservable(t) {
    return t && t.subscribe && typeof t.subscribe == "function";
  }
  _createStreamInvocation(t, n, o) {
    const r = this._invocationId;
    return this._invocationId++, o.length !== 0 ? {
      arguments: n,
      invocationId: r.toString(),
      streamIds: o,
      target: t,
      type: q.StreamInvocation
    } : {
      arguments: n,
      invocationId: r.toString(),
      target: t,
      type: q.StreamInvocation
    };
  }
  _createCancelInvocation(t) {
    return {
      invocationId: t,
      type: q.CancelInvocation
    };
  }
  _createStreamItemMessage(t, n) {
    return {
      invocationId: t,
      item: n,
      type: q.StreamItem
    };
  }
  _createCompletionMessage(t, n, o) {
    return n ? {
      error: n,
      invocationId: t,
      type: q.Completion
    } : {
      invocationId: t,
      result: o,
      type: q.Completion
    };
  }
}
const Bu = [0, 2e3, 1e4, 3e4, null];
class vs {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : Bu;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class bt {
}
bt.Authorization = "Authorization";
bt.Cookie = "Cookie";
var se;
(function(e) {
  e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
})(se || (se = {}));
var he;
(function(e) {
  e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
})(he || (he = {}));
class $u {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
}
class Cs {
  constructor(t, n, o, r) {
    this._httpClient = t, this._accessTokenFactory = n, this._logger = o, this._pollAbort = new $u(), this._options = r, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(t, n) {
    if (ce.isRequired(t, "url"), ce.isRequired(n, "transferFormat"), ce.isIn(n, he, "transferFormat"), this._url = t, this._logger.log(_.Trace, "(LongPolling transport) Connecting."), n === he.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [o, r] = Ft(), s = { [o]: r, ...this._options.headers }, i = {
      abortSignal: this._pollAbort.signal,
      headers: s,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === he.Binary && (i.responseType = "arraybuffer");
    const c = await this._getAccessToken();
    this._updateHeaderToken(i, c);
    const l = `${t}&_=${Date.now()}`;
    this._logger.log(_.Trace, `(LongPolling transport) polling: ${l}.`);
    const u = await this._httpClient.get(l, i);
    u.statusCode !== 200 ? (this._logger.log(_.Error, `(LongPolling transport) Unexpected response code: ${u.statusCode}.`), this._closeError = new $t(u.statusText || "", u.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(t, n) {
    if (t.headers || (t.headers = {}), n) {
      t.headers[bt.Authorization] = `Bearer ${n}`;
      return;
    }
    t.headers[bt.Authorization] && delete t.headers[bt.Authorization];
  }
  async _poll(t, n) {
    try {
      for (; this._running; ) {
        const o = await this._getAccessToken();
        this._updateHeaderToken(n, o);
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(_.Trace, `(LongPolling transport) polling: ${r}.`);
          const s = await this._httpClient.get(r, n);
          s.statusCode === 204 ? (this._logger.log(_.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : s.statusCode !== 200 ? (this._logger.log(_.Error, `(LongPolling transport) Unexpected response code: ${s.statusCode}.`), this._closeError = new $t(s.statusText || "", s.statusCode), this._running = !1) : s.content ? (this._logger.log(_.Trace, `(LongPolling transport) data received. ${fn(s.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(s.content)) : this._logger.log(_.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (r) {
          this._running ? r instanceof Cr ? this._logger.log(_.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = r, this._running = !1) : this._logger.log(_.Trace, `(LongPolling transport) Poll errored after shutdown: ${r.message}`);
        }
      }
    } finally {
      this._logger.log(_.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(t) {
    return this._running ? Vi(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(_.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(_.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const t = {}, [n, o] = Ft();
      t[n] = o;
      const r = {
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, s = await this._getAccessToken();
      this._updateHeaderToken(r, s), await this._httpClient.delete(this._url, r), this._logger.log(_.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(_.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      this._closeError && (t += " Error: " + this._closeError), this._logger.log(_.Trace, t), this.onclose(this._closeError);
    }
  }
}
class Fu {
  constructor(t, n, o, r) {
    this._httpClient = t, this._accessTokenFactory = n, this._logger = o, this._options = r, this.onreceive = null, this.onclose = null;
  }
  async connect(t, n) {
    if (ce.isRequired(t, "url"), ce.isRequired(n, "transferFormat"), ce.isIn(n, he, "transferFormat"), this._logger.log(_.Trace, "(SSE transport) Connecting."), this._url = t, this._accessTokenFactory) {
      const o = await this._accessTokenFactory();
      o && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(o)}`);
    }
    return new Promise((o, r) => {
      let s = !1;
      if (n !== he.Text) {
        r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let i;
      if (ae.isBrowser || ae.isWebWorker)
        i = new this._options.EventSource(t, { withCredentials: this._options.withCredentials });
      else {
        const c = this._httpClient.getCookieString(t), l = {};
        l.Cookie = c;
        const [u, d] = Ft();
        l[u] = d, i = new this._options.EventSource(t, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        i.onmessage = (c) => {
          if (this.onreceive)
            try {
              this._logger.log(_.Trace, `(SSE transport) data received. ${fn(c.data, this._options.logMessageContent)}.`), this.onreceive(c.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, i.onerror = (c) => {
          s ? this._close() : r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, i.onopen = () => {
          this._logger.log(_.Information, `SSE connected to ${this._url}`), this._eventSource = i, s = !0, o();
        };
      } catch (c) {
        r(c);
        return;
      }
    });
  }
  async send(t) {
    return this._eventSource ? Vi(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(t) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(t));
  }
}
class Lu {
  constructor(t, n, o, r, s, i) {
    this._logger = o, this._accessTokenFactory = n, this._logMessageContent = r, this._webSocketConstructor = s, this._httpClient = t, this.onreceive = null, this.onclose = null, this._headers = i;
  }
  async connect(t, n) {
    if (ce.isRequired(t, "url"), ce.isRequired(n, "transferFormat"), ce.isIn(n, he, "transferFormat"), this._logger.log(_.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const o = await this._accessTokenFactory();
      o && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(o)}`);
    }
    return new Promise((o, r) => {
      t = t.replace(/^http/, "ws");
      let s;
      const i = this._httpClient.getCookieString(t);
      let c = !1;
      if (ae.isNode) {
        const l = {}, [u, d] = Ft();
        l[u] = d, i && (l[bt.Cookie] = `${i}`), s = new this._webSocketConstructor(t, void 0, {
          headers: { ...l, ...this._headers }
        });
      }
      s || (s = new this._webSocketConstructor(t)), n === he.Binary && (s.binaryType = "arraybuffer"), s.onopen = (l) => {
        this._logger.log(_.Information, `WebSocket connected to ${t}.`), this._webSocket = s, c = !0, o();
      }, s.onerror = (l) => {
        let u = null;
        typeof ErrorEvent < "u" && l instanceof ErrorEvent ? u = l.error : u = "There was an error with the transport", this._logger.log(_.Information, `(WebSockets transport) ${u}.`);
      }, s.onmessage = (l) => {
        if (this._logger.log(_.Trace, `(WebSockets transport) data received. ${fn(l.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(l.data);
          } catch (u) {
            this._close(u);
            return;
          }
      }, s.onclose = (l) => {
        if (c)
          this._close(l);
        else {
          let u = null;
          typeof ErrorEvent < "u" && l instanceof ErrorEvent ? u = l.error : u = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", r(new Error(u));
        }
      };
    });
  }
  send(t) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(_.Trace, `(WebSockets transport) sending data. ${fn(t, this._logMessageContent)}.`), this._webSocket.send(t), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(t) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(_.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(t) && (t.wasClean === !1 || t.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${t.code} (${t.reason || "no reason given"}).`)) : t instanceof Error ? this.onclose(t) : this.onclose());
  }
  _isCloseEvent(t) {
    return t && typeof t.wasClean == "boolean" && typeof t.code == "number";
  }
}
const Ns = 100;
class ju {
  constructor(t, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, ce.isRequired(t, "url"), this._logger = Cu(n.logger), this.baseUrl = this._resolveUrl(t), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let o = null, r = null;
    if (ae.isNode && typeof require < "u") {
      const s = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      o = s("ws"), r = s("eventsource");
    }
    !ae.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : ae.isNode && !n.WebSocket && o && (n.WebSocket = o), !ae.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : ae.isNode && !n.EventSource && typeof r < "u" && (n.EventSource = r), this._httpClient = n.httpClient || new Ru(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(t) {
    if (t = t || he.Binary, ce.isIn(t, he, "transferFormat"), this._logger.log(_.Debug, `Starting connection with transfer format '${he[t]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(t), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(_.Error, n), await this._stopPromise, Promise.reject(new Error(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(_.Error, n), Promise.reject(new Error(n));
    }
    this._connectionStarted = !0;
  }
  send(t) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Sr(this.transport)), this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(_.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(_.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((n) => {
      this._stopPromiseResolver = n;
    }), await this._stopInternal(t), await this._stopPromise;
  }
  async _stopInternal(t) {
    this._stopError = t;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        this._logger.log(_.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(_.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === se.WebSockets)
          this.transport = this._constructTransport(se.WebSockets), await this._startTransport(n, t);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let o = null, r = 0;
        do {
          if (o = await this._getNegotiationResponse(n), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new Error("The connection was stopped during negotiation.");
          if (o.error)
            throw new Error(o.error);
          if (o.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (o.url && (n = o.url), o.accessToken) {
            const s = o.accessToken;
            this._accessTokenFactory = () => s;
          }
          r++;
        } while (o.url && r < Ns);
        if (r === Ns && o.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, o, t);
      }
      this.transport instanceof Cs && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(_.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (o) {
      return this._logger.log(_.Error, "Failed to start the connection: " + o), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(o);
    }
  }
  async _getNegotiationResponse(t) {
    const n = {};
    if (this._accessTokenFactory) {
      const i = await this._accessTokenFactory();
      i && (n[bt.Authorization] = `Bearer ${i}`);
    }
    const [o, r] = Ft();
    n[o] = r;
    const s = this._resolveNegotiateUrl(t);
    this._logger.log(_.Debug, `Sending negotiation request: ${s}.`);
    try {
      const i = await this._httpClient.post(s, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (i.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${i.statusCode}'`));
      const c = JSON.parse(i.content);
      return (!c.negotiateVersion || c.negotiateVersion < 1) && (c.connectionToken = c.connectionId), c;
    } catch (i) {
      let c = "Failed to complete negotiation with the server: " + i;
      return i instanceof $t && i.statusCode === 404 && (c = c + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(_.Error, c), Promise.reject(new Eu(c));
    }
  }
  _createConnectUrl(t, n) {
    return n ? t + (t.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : t;
  }
  async _createTransport(t, n, o, r) {
    let s = this._createConnectUrl(t, o.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(_.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(s, r), this.connectionId = o.connectionId;
      return;
    }
    const i = [], c = o.availableTransports || [];
    let l = o;
    for (const u of c) {
      const d = this._resolveTransportOrError(u, n, r);
      if (d instanceof Error)
        i.push(`${u.transport} failed:`), i.push(d);
      else if (this._isITransport(d)) {
        if (this.transport = d, !l) {
          try {
            l = await this._getNegotiationResponse(t);
          } catch (h) {
            return Promise.reject(h);
          }
          s = this._createConnectUrl(t, l.connectionToken);
        }
        try {
          await this._startTransport(s, r), this.connectionId = l.connectionId;
          return;
        } catch (h) {
          if (this._logger.log(_.Error, `Failed to start the transport '${u.transport}': ${h}`), l = void 0, i.push(new wu(`${u.transport} failed: ${h}`, se[u.transport])), this._connectionState !== "Connecting") {
            const p = "Failed to select transport before stop() was called.";
            return this._logger.log(_.Debug, p), Promise.reject(new Error(p));
          }
        }
      }
    }
    return i.length > 0 ? Promise.reject(new bu(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(t) {
    switch (t) {
      case se.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Lu(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case se.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new Fu(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case se.LongPolling:
        return new Cs(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${t}.`);
    }
  }
  _startTransport(t, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (o) => this._stopConnection(o), this.transport.connect(t, n);
  }
  _resolveTransportOrError(t, n, o) {
    const r = se[t.transport];
    if (r == null)
      return this._logger.log(_.Debug, `Skipping transport '${t.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${t.transport}' because it is not supported by this client.`);
    if (Uu(n, r))
      if (t.transferFormats.map((i) => he[i]).indexOf(o) >= 0) {
        if (r === se.WebSockets && !this._options.WebSocket || r === se.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(_.Debug, `Skipping transport '${se[r]}' because it is not supported in your environment.'`), new _u(`'${se[r]}' is not supported in your environment.`, r);
        this._logger.log(_.Debug, `Selecting transport '${se[r]}'.`);
        try {
          return this._constructTransport(r);
        } catch (i) {
          return i;
        }
      } else
        return this._logger.log(_.Debug, `Skipping transport '${se[r]}' because it does not support the requested transfer format '${he[o]}'.`), new Error(`'${se[r]}' does not support ${he[o]}.`);
    else
      return this._logger.log(_.Debug, `Skipping transport '${se[r]}' because it was disabled by the client.`), new mu(`'${se[r]}' is disabled by the client.`, r);
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (this._logger.log(_.Debug, `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`), this.transport = void 0, t = this._stopError || t, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(_.Debug, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(_.Warning, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), t ? this._logger.log(_.Error, `Connection disconnected with error '${t}'.`) : this._logger.log(_.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(_.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(t);
      } catch (n) {
        this._logger.log(_.Error, `HttpConnection.onclose(${t}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!ae.isBrowser)
      throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return n.href = t, this._logger.log(_.Information, `Normalizing '${t}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(t) {
    const n = t.indexOf("?");
    let o = t.substring(0, n === -1 ? t.length : n);
    return o[o.length - 1] !== "/" && (o += "/"), o += "negotiate", o += n === -1 ? "" : t.substring(n), o.indexOf("negotiateVersion") === -1 && (o += n === -1 ? "?" : "&", o += "negotiateVersion=" + this._negotiateVersion), o;
  }
}
function Uu(e, t) {
  return !e || (t & e) !== 0;
}
class Sr {
  constructor(t) {
    this._transport = t, this._buffer = [], this._executing = !0, this._sendBufferedData = new Cn(), this._transportResult = new Cn(), this._sendLoopPromise = this._sendLoop();
  }
  send(t) {
    return this._bufferData(t), this._transportResult || (this._transportResult = new Cn()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(t) {
    if (this._buffer.length && typeof this._buffer[0] != typeof t)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof t}`);
    this._buffer.push(t), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new Cn();
      const t = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : Sr._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(n), t.resolve();
      } catch (o) {
        t.reject(o);
      }
    }
  }
  static _concatBuffers(t) {
    const n = t.map((s) => s.byteLength).reduce((s, i) => s + i), o = new Uint8Array(n);
    let r = 0;
    for (const s of t)
      o.set(new Uint8Array(s), r), r += s.byteLength;
    return o.buffer;
  }
}
class Cn {
  constructor() {
    this.promise = new Promise((t, n) => [this._resolver, this._rejecter] = [t, n]);
  }
  resolve() {
    this._resolver();
  }
  reject(t) {
    this._rejecter(t);
  }
}
const Hu = "json";
class Wu {
  constructor() {
    this.name = Hu, this.version = 1, this.transferFormat = he.Text;
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!t)
      return [];
    n === null && (n = un.instance);
    const o = Ne.parse(t), r = [];
    for (const s of o) {
      const i = JSON.parse(s);
      if (typeof i.type != "number")
        throw new Error("Invalid payload.");
      switch (i.type) {
        case q.Invocation:
          this._isInvocationMessage(i);
          break;
        case q.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case q.Completion:
          this._isCompletionMessage(i);
          break;
        case q.Ping:
          break;
        case q.Close:
          break;
        default:
          n.log(_.Information, "Unknown message type '" + i.type + "' ignored.");
          continue;
      }
      r.push(i);
    }
    return r;
  }
  writeMessage(t) {
    return Ne.write(JSON.stringify(t));
  }
  _isInvocationMessage(t) {
    this._assertNotEmptyString(t.target, "Invalid payload for Invocation message."), t.invocationId !== void 0 && this._assertNotEmptyString(t.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(t) {
    if (this._assertNotEmptyString(t.invocationId, "Invalid payload for StreamItem message."), t.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(t) {
    if (t.result && t.error)
      throw new Error("Invalid payload for Completion message.");
    !t.result && t.error && this._assertNotEmptyString(t.error, "Invalid payload for Completion message."), this._assertNotEmptyString(t.invocationId, "Invalid payload for Completion message.");
  }
  _assertNotEmptyString(t, n) {
    if (typeof t != "string" || t === "")
      throw new Error(n);
  }
}
const Ku = {
  trace: _.Trace,
  debug: _.Debug,
  info: _.Information,
  information: _.Information,
  warn: _.Warning,
  warning: _.Warning,
  error: _.Error,
  critical: _.Critical,
  none: _.None
};
function zu(e) {
  const t = Ku[e.toLowerCase()];
  if (typeof t < "u")
    return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Ju {
  configureLogging(t) {
    if (ce.isRequired(t, "logging"), Yu(t))
      this.logger = t;
    else if (typeof t == "string") {
      const n = zu(t);
      this.logger = new Un(n);
    } else
      this.logger = new Un(t);
    return this;
  }
  withUrl(t, n) {
    return ce.isRequired(t, "url"), ce.isNotEmpty(t, "url"), this.url = t, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  withHubProtocol(t) {
    return ce.isRequired(t, "protocol"), this.protocol = t, this;
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return t ? Array.isArray(t) ? this.reconnectPolicy = new vs(t) : this.reconnectPolicy = t : this.reconnectPolicy = new vs(), this;
  }
  build() {
    const t = this.httpConnectionOptions || {};
    if (t.logger === void 0 && (t.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new ju(this.url, t);
    return Dr.create(n, this.logger || un.instance, this.protocol || new Wu(), this.reconnectPolicy);
  }
}
function Yu(e) {
  return e.log !== void 0;
}
const We = new Ju().withUrl("/photos").build(), Zu = {
  controlSession: (e) => We.invoke("ControlSession", e),
  openSession: (e) => We.invoke("OpenSession", e),
  sendPhoto: (e) => We.invoke("SendPhoto", e),
  onReceivePhoto: (e) => {
    We.on("ReceivePhoto", e);
  }
}, qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  connection: We,
  PhotoHub: Zu
}, Symbol.toStringTag, { value: "Module" }));
let Nn;
const Qu = new Uint8Array(16);
function Xu() {
  if (!Nn && (Nn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Nn(Qu);
}
const le = [];
for (let e = 0; e < 256; ++e)
  le.push((e + 256).toString(16).slice(1));
function Gu(e, t = 0) {
  return (le[e[t + 0]] + le[e[t + 1]] + le[e[t + 2]] + le[e[t + 3]] + "-" + le[e[t + 4]] + le[e[t + 5]] + "-" + le[e[t + 6]] + le[e[t + 7]] + "-" + le[e[t + 8]] + le[e[t + 9]] + "-" + le[e[t + 10]] + le[e[t + 11]] + le[e[t + 12]] + le[e[t + 13]] + le[e[t + 14]] + le[e[t + 15]]).toLowerCase();
}
const ef = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Is = {
  randomUUID: ef
};
function tf(e, t, n) {
  if (Is.randomUUID && !t && !e)
    return Is.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Xu)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let r = 0; r < 16; ++r)
      t[n + r] = o[r];
    return t;
  }
  return Gu(o);
}
const { PhotoHub: Ot } = qu, Io = Bo(
  We.state === X.Connected
), nf = (e, t) => {
  const n = Bo(t || tf()), o = Bo([]);
  return We.state === X.Disconnected && We.start().then((r) => console.log(We.state)).then(() => {
    e === "phone" ? Ot.controlSession(n.value) : Ot.openSession(n.value);
  }).then(() => {
    Io.value = !0;
  }), Ot.onReceivePhoto((r) => {
    o.value = [...o.value, r];
  }), {
    sessionId: n,
    isConnected: Io,
    photos: o,
    controlSession: async () => {
      await Ot.controlSession(n.value);
    },
    openSession: async () => {
      await Ot.openSession(n.value);
    },
    beamPhoto: async (r) => {
      if (!Io.value)
        throw new Error("not connected!");
      await Ot.sendPhoto(r);
    }
  };
};
var gn = {}, of = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Bi = {}, Ie = {};
let Or;
const rf = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Ie.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Ie.getSymbolTotalCodewords = function(t) {
  return rf[t];
};
Ie.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
Ie.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Or = t;
};
Ie.isKanjiModeEnabled = function() {
  return typeof Or < "u";
};
Ie.toSJIS = function(t) {
  return Or(t);
};
var co = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  e.isValid = function(o) {
    return o && typeof o.bit < "u" && o.bit >= 0 && o.bit < 4;
  }, e.from = function(o, r) {
    if (e.isValid(o))
      return o;
    try {
      return t(o);
    } catch {
      return r;
    }
  };
})(co);
function $i() {
  this.buffer = [], this.length = 0;
}
$i.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (let n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var sf = $i;
function _n(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
_n.prototype.set = function(e, t, n, o) {
  const r = e * this.size + t;
  this.data[r] = n, o && (this.reservedBit[r] = !0);
};
_n.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
_n.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n;
};
_n.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var cf = _n, Fi = {};
(function(e) {
  const t = Ie.getSymbolSize;
  e.getRowColCoords = function(o) {
    if (o === 1)
      return [];
    const r = Math.floor(o / 7) + 2, s = t(o), i = s === 145 ? 26 : Math.ceil((s - 13) / (2 * r - 2)) * 2, c = [s - 7];
    for (let l = 1; l < r - 1; l++)
      c[l] = c[l - 1] - i;
    return c.push(6), c.reverse();
  }, e.getPositions = function(o) {
    const r = [], s = e.getRowColCoords(o), i = s.length;
    for (let c = 0; c < i; c++)
      for (let l = 0; l < i; l++)
        c === 0 && l === 0 || c === 0 && l === i - 1 || c === i - 1 && l === 0 || r.push([s[c], s[l]]);
    return r;
  };
})(Fi);
var Li = {};
const lf = Ie.getSymbolSize, Ds = 7;
Li.getPositions = function(t) {
  const n = lf(t);
  return [
    [0, 0],
    [n - Ds, 0],
    [0, n - Ds]
  ];
};
var ji = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(r) {
    return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
  }, e.from = function(r) {
    return e.isValid(r) ? parseInt(r, 10) : void 0;
  }, e.getPenaltyN1 = function(r) {
    const s = r.size;
    let i = 0, c = 0, l = 0, u = null, d = null;
    for (let h = 0; h < s; h++) {
      c = l = 0, u = d = null;
      for (let p = 0; p < s; p++) {
        let E = r.get(h, p);
        E === u ? c++ : (c >= 5 && (i += t.N1 + (c - 5)), u = E, c = 1), E = r.get(p, h), E === d ? l++ : (l >= 5 && (i += t.N1 + (l - 5)), d = E, l = 1);
      }
      c >= 5 && (i += t.N1 + (c - 5)), l >= 5 && (i += t.N1 + (l - 5));
    }
    return i;
  }, e.getPenaltyN2 = function(r) {
    const s = r.size;
    let i = 0;
    for (let c = 0; c < s - 1; c++)
      for (let l = 0; l < s - 1; l++) {
        const u = r.get(c, l) + r.get(c, l + 1) + r.get(c + 1, l) + r.get(c + 1, l + 1);
        (u === 4 || u === 0) && i++;
      }
    return i * t.N2;
  }, e.getPenaltyN3 = function(r) {
    const s = r.size;
    let i = 0, c = 0, l = 0;
    for (let u = 0; u < s; u++) {
      c = l = 0;
      for (let d = 0; d < s; d++)
        c = c << 1 & 2047 | r.get(u, d), d >= 10 && (c === 1488 || c === 93) && i++, l = l << 1 & 2047 | r.get(d, u), d >= 10 && (l === 1488 || l === 93) && i++;
    }
    return i * t.N3;
  }, e.getPenaltyN4 = function(r) {
    let s = 0;
    const i = r.data.length;
    for (let l = 0; l < i; l++)
      s += r.data[l];
    return Math.abs(Math.ceil(s * 100 / i / 5) - 10) * t.N4;
  };
  function n(o, r, s) {
    switch (o) {
      case e.Patterns.PATTERN000:
        return (r + s) % 2 === 0;
      case e.Patterns.PATTERN001:
        return r % 2 === 0;
      case e.Patterns.PATTERN010:
        return s % 3 === 0;
      case e.Patterns.PATTERN011:
        return (r + s) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(s / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return r * s % 2 + r * s % 3 === 0;
      case e.Patterns.PATTERN110:
        return (r * s % 2 + r * s % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (r * s % 3 + (r + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + o);
    }
  }
  e.applyMask = function(r, s) {
    const i = s.size;
    for (let c = 0; c < i; c++)
      for (let l = 0; l < i; l++)
        s.isReserved(l, c) || s.xor(l, c, n(r, l, c));
  }, e.getBestMask = function(r, s) {
    const i = Object.keys(e.Patterns).length;
    let c = 0, l = 1 / 0;
    for (let u = 0; u < i; u++) {
      s(u), e.applyMask(u, r);
      const d = e.getPenaltyN1(r) + e.getPenaltyN2(r) + e.getPenaltyN3(r) + e.getPenaltyN4(r);
      e.applyMask(u, r), d < l && (l = d, c = u);
    }
    return c;
  };
})(ji);
var lo = {};
const et = co, In = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Dn = [
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
lo.getBlocksCount = function(t, n) {
  switch (n) {
    case et.L:
      return In[(t - 1) * 4 + 0];
    case et.M:
      return In[(t - 1) * 4 + 1];
    case et.Q:
      return In[(t - 1) * 4 + 2];
    case et.H:
      return In[(t - 1) * 4 + 3];
    default:
      return;
  }
};
lo.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case et.L:
      return Dn[(t - 1) * 4 + 0];
    case et.M:
      return Dn[(t - 1) * 4 + 1];
    case et.Q:
      return Dn[(t - 1) * 4 + 2];
    case et.H:
      return Dn[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Ui = {}, ao = {};
const en = new Uint8Array(512), Hn = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++)
    en[n] = t, Hn[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    en[n] = en[n - 255];
})();
ao.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return Hn[t];
};
ao.exp = function(t) {
  return en[t];
};
ao.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : en[Hn[t] + Hn[n]];
};
(function(e) {
  const t = ao;
  e.mul = function(o, r) {
    const s = new Uint8Array(o.length + r.length - 1);
    for (let i = 0; i < o.length; i++)
      for (let c = 0; c < r.length; c++)
        s[i + c] ^= t.mul(o[i], r[c]);
    return s;
  }, e.mod = function(o, r) {
    let s = new Uint8Array(o);
    for (; s.length - r.length >= 0; ) {
      const i = s[0];
      for (let l = 0; l < r.length; l++)
        s[l] ^= t.mul(r[l], i);
      let c = 0;
      for (; c < s.length && s[c] === 0; )
        c++;
      s = s.slice(c);
    }
    return s;
  }, e.generateECPolynomial = function(o) {
    let r = new Uint8Array([1]);
    for (let s = 0; s < o; s++)
      r = e.mul(r, new Uint8Array([1, t.exp(s)]));
    return r;
  };
})(Ui);
const Hi = Ui;
function Ar(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
Ar.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Hi.generateECPolynomial(this.degree);
};
Ar.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const o = Hi.mod(n, this.genPoly), r = this.degree - o.length;
  if (r > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(o, r), s;
  }
  return o;
};
var af = Ar, Wi = {}, ct = {}, Tr = {};
Tr.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var Le = {};
const Ki = "[0-9]+", uf = "[A-Z $%*+\\-./:]+";
let dn = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
dn = dn.replace(/u/g, "\\u");
const ff = "(?:(?![A-Z0-9 $%*+\\-./:]|" + dn + `)(?:.|[\r
]))+`;
Le.KANJI = new RegExp(dn, "g");
Le.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Le.BYTE = new RegExp(ff, "g");
Le.NUMERIC = new RegExp(Ki, "g");
Le.ALPHANUMERIC = new RegExp(uf, "g");
const df = new RegExp("^" + dn + "$"), hf = new RegExp("^" + Ki + "$"), pf = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Le.testKanji = function(t) {
  return df.test(t);
};
Le.testNumeric = function(t) {
  return hf.test(t);
};
Le.testAlphanumeric = function(t) {
  return pf.test(t);
};
(function(e) {
  const t = Tr, n = Le;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(s, i) {
    if (!s.ccBits)
      throw new Error("Invalid mode: " + s);
    if (!t.isValid(i))
      throw new Error("Invalid version: " + i);
    return i >= 1 && i < 10 ? s.ccBits[0] : i < 27 ? s.ccBits[1] : s.ccBits[2];
  }, e.getBestModeForData = function(s) {
    return n.testNumeric(s) ? e.NUMERIC : n.testAlphanumeric(s) ? e.ALPHANUMERIC : n.testKanji(s) ? e.KANJI : e.BYTE;
  }, e.toString = function(s) {
    if (s && s.id)
      return s.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(s) {
    return s && s.bit && s.ccBits;
  };
  function o(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + r);
    }
  }
  e.from = function(s, i) {
    if (e.isValid(s))
      return s;
    try {
      return o(s);
    } catch {
      return i;
    }
  };
})(ct);
(function(e) {
  const t = Ie, n = lo, o = co, r = ct, s = Tr, i = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, c = t.getBCHDigit(i);
  function l(p, E, S) {
    for (let D = 1; D <= 40; D++)
      if (E <= e.getCapacity(D, S, p))
        return D;
  }
  function u(p, E) {
    return r.getCharCountIndicator(p, E) + 4;
  }
  function d(p, E) {
    let S = 0;
    return p.forEach(function(D) {
      S += u(D.mode, E) + D.getBitsLength();
    }), S;
  }
  function h(p, E) {
    for (let S = 1; S <= 40; S++)
      if (d(p, S) <= e.getCapacity(S, E, r.MIXED))
        return S;
  }
  e.from = function(E, S) {
    return s.isValid(E) ? parseInt(E, 10) : S;
  }, e.getCapacity = function(E, S, D) {
    if (!s.isValid(E))
      throw new Error("Invalid QR Code version");
    typeof D > "u" && (D = r.BYTE);
    const U = t.getSymbolTotalCodewords(E), O = n.getTotalCodewordsCount(E, S), T = (U - O) * 8;
    if (D === r.MIXED)
      return T;
    const A = T - u(D, E);
    switch (D) {
      case r.NUMERIC:
        return Math.floor(A / 10 * 3);
      case r.ALPHANUMERIC:
        return Math.floor(A / 11 * 2);
      case r.KANJI:
        return Math.floor(A / 13);
      case r.BYTE:
      default:
        return Math.floor(A / 8);
    }
  }, e.getBestVersionForData = function(E, S) {
    let D;
    const U = o.from(S, o.M);
    if (Array.isArray(E)) {
      if (E.length > 1)
        return h(E, U);
      if (E.length === 0)
        return 1;
      D = E[0];
    } else
      D = E;
    return l(D.mode, D.getLength(), U);
  }, e.getEncodedBits = function(E) {
    if (!s.isValid(E) || E < 7)
      throw new Error("Invalid QR Code version");
    let S = E << 12;
    for (; t.getBCHDigit(S) - c >= 0; )
      S ^= i << t.getBCHDigit(S) - c;
    return E << 12 | S;
  };
})(Wi);
var zi = {};
const Xo = Ie, Ji = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, gf = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, Ss = Xo.getBCHDigit(Ji);
zi.getEncodedBits = function(t, n) {
  const o = t.bit << 3 | n;
  let r = o << 10;
  for (; Xo.getBCHDigit(r) - Ss >= 0; )
    r ^= Ji << Xo.getBCHDigit(r) - Ss;
  return (o << 10 | r) ^ gf;
};
var Yi = {};
const _f = ct;
function Lt(e) {
  this.mode = _f.NUMERIC, this.data = e.toString();
}
Lt.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
Lt.prototype.getLength = function() {
  return this.data.length;
};
Lt.prototype.getBitsLength = function() {
  return Lt.getBitsLength(this.data.length);
};
Lt.prototype.write = function(t) {
  let n, o, r;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    o = this.data.substr(n, 3), r = parseInt(o, 10), t.put(r, 10);
  const s = this.data.length - n;
  s > 0 && (o = this.data.substr(n), r = parseInt(o, 10), t.put(r, s * 3 + 1));
};
var mf = Lt;
const wf = ct, Do = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function jt(e) {
  this.mode = wf.ALPHANUMERIC, this.data = e;
}
jt.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
jt.prototype.getLength = function() {
  return this.data.length;
};
jt.prototype.getBitsLength = function() {
  return jt.getBitsLength(this.data.length);
};
jt.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let o = Do.indexOf(this.data[n]) * 45;
    o += Do.indexOf(this.data[n + 1]), t.put(o, 11);
  }
  this.data.length % 2 && t.put(Do.indexOf(this.data[n]), 6);
};
var Ef = jt, bf = function(t) {
  for (var n = [], o = t.length, r = 0; r < o; r++) {
    var s = t.charCodeAt(r);
    if (s >= 55296 && s <= 56319 && o > r + 1) {
      var i = t.charCodeAt(r + 1);
      i >= 56320 && i <= 57343 && (s = (s - 55296) * 1024 + i - 56320 + 65536, r += 1);
    }
    if (s < 128) {
      n.push(s);
      continue;
    }
    if (s < 2048) {
      n.push(s >> 6 | 192), n.push(s & 63 | 128);
      continue;
    }
    if (s < 55296 || s >= 57344 && s < 65536) {
      n.push(s >> 12 | 224), n.push(s >> 6 & 63 | 128), n.push(s & 63 | 128);
      continue;
    }
    if (s >= 65536 && s <= 1114111) {
      n.push(s >> 18 | 240), n.push(s >> 12 & 63 | 128), n.push(s >> 6 & 63 | 128), n.push(s & 63 | 128);
      continue;
    }
    n.push(239, 191, 189);
  }
  return new Uint8Array(n).buffer;
};
const yf = bf, vf = ct;
function Ut(e) {
  this.mode = vf.BYTE, typeof e == "string" && (e = yf(e)), this.data = new Uint8Array(e);
}
Ut.getBitsLength = function(t) {
  return t * 8;
};
Ut.prototype.getLength = function() {
  return this.data.length;
};
Ut.prototype.getBitsLength = function() {
  return Ut.getBitsLength(this.data.length);
};
Ut.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8);
};
var Cf = Ut;
const Nf = ct, If = Ie;
function Ht(e) {
  this.mode = Nf.KANJI, this.data = e;
}
Ht.getBitsLength = function(t) {
  return t * 13;
};
Ht.prototype.getLength = function() {
  return this.data.length;
};
Ht.prototype.getBitsLength = function() {
  return Ht.getBitsLength(this.data.length);
};
Ht.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = If.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
  }
};
var Df = Ht, Zi = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, o, r) {
      var s = {}, i = {};
      i[o] = 0;
      var c = t.PriorityQueue.make();
      c.push(o, 0);
      for (var l, u, d, h, p, E, S, D, U; !c.empty(); ) {
        l = c.pop(), u = l.value, h = l.cost, p = n[u] || {};
        for (d in p)
          p.hasOwnProperty(d) && (E = p[d], S = h + E, D = i[d], U = typeof i[d] > "u", (U || D > S) && (i[d] = S, c.push(d, S), s[d] = u));
      }
      if (typeof r < "u" && typeof i[r] > "u") {
        var O = ["Could not find a path from ", o, " to ", r, "."].join("");
        throw new Error(O);
      }
      return s;
    },
    extract_shortest_path_from_predecessor_list: function(n, o) {
      for (var r = [], s = o; s; )
        r.push(s), n[s], s = n[s];
      return r.reverse(), r;
    },
    find_path: function(n, o, r) {
      var s = t.single_source_shortest_paths(n, o, r);
      return t.extract_shortest_path_from_predecessor_list(
        s,
        r
      );
    },
    PriorityQueue: {
      make: function(n) {
        var o = t.PriorityQueue, r = {}, s;
        n = n || {};
        for (s in o)
          o.hasOwnProperty(s) && (r[s] = o[s]);
        return r.queue = [], r.sorter = n.sorter || o.default_sorter, r;
      },
      default_sorter: function(n, o) {
        return n.cost - o.cost;
      },
      push: function(n, o) {
        var r = { value: n, cost: o };
        this.queue.push(r), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(Zi);
(function(e) {
  const t = ct, n = mf, o = Ef, r = Cf, s = Df, i = Le, c = Ie, l = Zi.exports;
  function u(O) {
    return unescape(encodeURIComponent(O)).length;
  }
  function d(O, T, A) {
    const M = [];
    let B;
    for (; (B = O.exec(A)) !== null; )
      M.push({
        data: B[0],
        index: B.index,
        mode: T,
        length: B[0].length
      });
    return M;
  }
  function h(O) {
    const T = d(i.NUMERIC, t.NUMERIC, O), A = d(i.ALPHANUMERIC, t.ALPHANUMERIC, O);
    let M, B;
    return c.isKanjiModeEnabled() ? (M = d(i.BYTE, t.BYTE, O), B = d(i.KANJI, t.KANJI, O)) : (M = d(i.BYTE_KANJI, t.BYTE, O), B = []), T.concat(A, M, B).sort(function(Q, ee) {
      return Q.index - ee.index;
    }).map(function(Q) {
      return {
        data: Q.data,
        mode: Q.mode,
        length: Q.length
      };
    });
  }
  function p(O, T) {
    switch (T) {
      case t.NUMERIC:
        return n.getBitsLength(O);
      case t.ALPHANUMERIC:
        return o.getBitsLength(O);
      case t.KANJI:
        return s.getBitsLength(O);
      case t.BYTE:
        return r.getBitsLength(O);
    }
  }
  function E(O) {
    return O.reduce(function(T, A) {
      const M = T.length - 1 >= 0 ? T[T.length - 1] : null;
      return M && M.mode === A.mode ? (T[T.length - 1].data += A.data, T) : (T.push(A), T);
    }, []);
  }
  function S(O) {
    const T = [];
    for (let A = 0; A < O.length; A++) {
      const M = O[A];
      switch (M.mode) {
        case t.NUMERIC:
          T.push([
            M,
            { data: M.data, mode: t.ALPHANUMERIC, length: M.length },
            { data: M.data, mode: t.BYTE, length: M.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          T.push([
            M,
            { data: M.data, mode: t.BYTE, length: M.length }
          ]);
          break;
        case t.KANJI:
          T.push([
            M,
            { data: M.data, mode: t.BYTE, length: u(M.data) }
          ]);
          break;
        case t.BYTE:
          T.push([
            { data: M.data, mode: t.BYTE, length: u(M.data) }
          ]);
      }
    }
    return T;
  }
  function D(O, T) {
    const A = {}, M = { start: {} };
    let B = ["start"];
    for (let z = 0; z < O.length; z++) {
      const Q = O[z], ee = [];
      for (let te = 0; te < Q.length; te++) {
        const ne = Q[te], Ee = "" + z + te;
        ee.push(Ee), A[Ee] = { node: ne, lastCount: 0 }, M[Ee] = {};
        for (let ge = 0; ge < B.length; ge++) {
          const be = B[ge];
          A[be] && A[be].node.mode === ne.mode ? (M[be][Ee] = p(A[be].lastCount + ne.length, ne.mode) - p(A[be].lastCount, ne.mode), A[be].lastCount += ne.length) : (A[be] && (A[be].lastCount = ne.length), M[be][Ee] = p(ne.length, ne.mode) + 4 + t.getCharCountIndicator(ne.mode, T));
        }
      }
      B = ee;
    }
    for (let z = 0; z < B.length; z++)
      M[B[z]].end = 0;
    return { map: M, table: A };
  }
  function U(O, T) {
    let A;
    const M = t.getBestModeForData(O);
    if (A = t.from(T, M), A !== t.BYTE && A.bit < M.bit)
      throw new Error('"' + O + '" cannot be encoded with mode ' + t.toString(A) + `.
 Suggested mode is: ` + t.toString(M));
    switch (A === t.KANJI && !c.isKanjiModeEnabled() && (A = t.BYTE), A) {
      case t.NUMERIC:
        return new n(O);
      case t.ALPHANUMERIC:
        return new o(O);
      case t.KANJI:
        return new s(O);
      case t.BYTE:
        return new r(O);
    }
  }
  e.fromArray = function(T) {
    return T.reduce(function(A, M) {
      return typeof M == "string" ? A.push(U(M, null)) : M.data && A.push(U(M.data, M.mode)), A;
    }, []);
  }, e.fromString = function(T, A) {
    const M = h(T, c.isKanjiModeEnabled()), B = S(M), z = D(B, A), Q = l.find_path(z.map, "start", "end"), ee = [];
    for (let te = 1; te < Q.length - 1; te++)
      ee.push(z.table[Q[te]].node);
    return e.fromArray(E(ee));
  }, e.rawSplit = function(T) {
    return e.fromArray(
      h(T, c.isKanjiModeEnabled())
    );
  };
})(Yi);
const uo = Ie, So = co, Sf = sf, Of = cf, Af = Fi, Tf = Li, Go = ji, er = lo, Pf = af, Wn = Wi, Rf = zi, Mf = ct, Oo = Yi;
function kf(e, t) {
  const n = e.size, o = Tf.getPositions(t);
  for (let r = 0; r < o.length; r++) {
    const s = o[r][0], i = o[r][1];
    for (let c = -1; c <= 7; c++)
      if (!(s + c <= -1 || n <= s + c))
        for (let l = -1; l <= 7; l++)
          i + l <= -1 || n <= i + l || (c >= 0 && c <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (c === 0 || c === 6) || c >= 2 && c <= 4 && l >= 2 && l <= 4 ? e.set(s + c, i + l, !0, !0) : e.set(s + c, i + l, !1, !0));
  }
}
function xf(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const o = n % 2 === 0;
    e.set(n, 6, o, !0), e.set(6, n, o, !0);
  }
}
function Vf(e, t) {
  const n = Af.getPositions(t);
  for (let o = 0; o < n.length; o++) {
    const r = n[o][0], s = n[o][1];
    for (let i = -2; i <= 2; i++)
      for (let c = -2; c <= 2; c++)
        i === -2 || i === 2 || c === -2 || c === 2 || i === 0 && c === 0 ? e.set(r + i, s + c, !0, !0) : e.set(r + i, s + c, !1, !0);
  }
}
function Bf(e, t) {
  const n = e.size, o = Wn.getEncodedBits(t);
  let r, s, i;
  for (let c = 0; c < 18; c++)
    r = Math.floor(c / 3), s = c % 3 + n - 8 - 3, i = (o >> c & 1) === 1, e.set(r, s, i, !0), e.set(s, r, i, !0);
}
function Ao(e, t, n) {
  const o = e.size, r = Rf.getEncodedBits(t, n);
  let s, i;
  for (s = 0; s < 15; s++)
    i = (r >> s & 1) === 1, s < 6 ? e.set(s, 8, i, !0) : s < 8 ? e.set(s + 1, 8, i, !0) : e.set(o - 15 + s, 8, i, !0), s < 8 ? e.set(8, o - s - 1, i, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, i, !0) : e.set(8, 15 - s - 1, i, !0);
  e.set(o - 8, 8, 1, !0);
}
function $f(e, t) {
  const n = e.size;
  let o = -1, r = n - 1, s = 7, i = 0;
  for (let c = n - 1; c > 0; c -= 2)
    for (c === 6 && c--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!e.isReserved(r, c - l)) {
          let u = !1;
          i < t.length && (u = (t[i] >>> s & 1) === 1), e.set(r, c - l, u), s--, s === -1 && (i++, s = 7);
        }
      if (r += o, r < 0 || n <= r) {
        r -= o, o = -o;
        break;
      }
    }
}
function Ff(e, t, n) {
  const o = new Sf();
  n.forEach(function(l) {
    o.put(l.mode.bit, 4), o.put(l.getLength(), Mf.getCharCountIndicator(l.mode, e)), l.write(o);
  });
  const r = uo.getSymbolTotalCodewords(e), s = er.getTotalCodewordsCount(e, t), i = (r - s) * 8;
  for (o.getLengthInBits() + 4 <= i && o.put(0, 4); o.getLengthInBits() % 8 !== 0; )
    o.putBit(0);
  const c = (i - o.getLengthInBits()) / 8;
  for (let l = 0; l < c; l++)
    o.put(l % 2 ? 17 : 236, 8);
  return Lf(o, e, t);
}
function Lf(e, t, n) {
  const o = uo.getSymbolTotalCodewords(t), r = er.getTotalCodewordsCount(t, n), s = o - r, i = er.getBlocksCount(t, n), c = o % i, l = i - c, u = Math.floor(o / i), d = Math.floor(s / i), h = d + 1, p = u - d, E = new Pf(p);
  let S = 0;
  const D = new Array(i), U = new Array(i);
  let O = 0;
  const T = new Uint8Array(e.buffer);
  for (let Q = 0; Q < i; Q++) {
    const ee = Q < l ? d : h;
    D[Q] = T.slice(S, S + ee), U[Q] = E.encode(D[Q]), S += ee, O = Math.max(O, ee);
  }
  const A = new Uint8Array(o);
  let M = 0, B, z;
  for (B = 0; B < O; B++)
    for (z = 0; z < i; z++)
      B < D[z].length && (A[M++] = D[z][B]);
  for (B = 0; B < p; B++)
    for (z = 0; z < i; z++)
      A[M++] = U[z][B];
  return A;
}
function jf(e, t, n, o) {
  let r;
  if (Array.isArray(e))
    r = Oo.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const d = Oo.rawSplit(e);
      u = Wn.getBestVersionForData(d, n);
    }
    r = Oo.fromString(e, u || 40);
  } else
    throw new Error("Invalid data");
  const s = Wn.getBestVersionForData(r, n);
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = s;
  else if (t < s)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`
    );
  const i = Ff(t, n, r), c = uo.getSymbolSize(t), l = new Of(c);
  return kf(l, t), xf(l), Vf(l, t), Ao(l, n, 0), t >= 7 && Bf(l, t), $f(l, i), isNaN(o) && (o = Go.getBestMask(
    l,
    Ao.bind(null, l, n)
  )), Go.applyMask(o, l), Ao(l, n, o), {
    modules: l,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: o,
    segments: r
  };
}
Bi.create = function(t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let o = So.M, r, s;
  return typeof n < "u" && (o = So.from(n.errorCorrectionLevel, So.M), r = Wn.from(n.version), s = Go.from(n.maskPattern), n.toSJISFunc && uo.setToSJISFunction(n.toSJISFunc)), jf(t, r, o, s);
};
var qi = {}, Pr = {};
(function(e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let o = n.slice().replace("#", "").split("");
    if (o.length < 3 || o.length === 5 || o.length > 8)
      throw new Error("Invalid hex color: " + n);
    (o.length === 3 || o.length === 4) && (o = Array.prototype.concat.apply([], o.map(function(s) {
      return [s, s];
    }))), o.length === 6 && o.push("F", "F");
    const r = parseInt(o.join(""), 16);
    return {
      r: r >> 24 & 255,
      g: r >> 16 & 255,
      b: r >> 8 & 255,
      a: r & 255,
      hex: "#" + o.slice(0, 6).join("")
    };
  }
  e.getOptions = function(o) {
    o || (o = {}), o.color || (o.color = {});
    const r = typeof o.margin > "u" || o.margin === null || o.margin < 0 ? 4 : o.margin, s = o.width && o.width >= 21 ? o.width : void 0, i = o.scale || 4;
    return {
      width: s,
      scale: s ? 4 : i,
      margin: r,
      color: {
        dark: t(o.color.dark || "#000000ff"),
        light: t(o.color.light || "#ffffffff")
      },
      type: o.type,
      rendererOpts: o.rendererOpts || {}
    };
  }, e.getScale = function(o, r) {
    return r.width && r.width >= o + r.margin * 2 ? r.width / (o + r.margin * 2) : r.scale;
  }, e.getImageWidth = function(o, r) {
    const s = e.getScale(o, r);
    return Math.floor((o + r.margin * 2) * s);
  }, e.qrToImageData = function(o, r, s) {
    const i = r.modules.size, c = r.modules.data, l = e.getScale(i, s), u = Math.floor((i + s.margin * 2) * l), d = s.margin * l, h = [s.color.light, s.color.dark];
    for (let p = 0; p < u; p++)
      for (let E = 0; E < u; E++) {
        let S = (p * u + E) * 4, D = s.color.light;
        if (p >= d && E >= d && p < u - d && E < u - d) {
          const U = Math.floor((p - d) / l), O = Math.floor((E - d) / l);
          D = h[c[U * i + O] ? 1 : 0];
        }
        o[S++] = D.r, o[S++] = D.g, o[S++] = D.b, o[S] = D.a;
      }
  };
})(Pr);
(function(e) {
  const t = Pr;
  function n(r, s, i) {
    r.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = i, s.width = i, s.style.height = i + "px", s.style.width = i + "px";
  }
  function o() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(s, i, c) {
    let l = c, u = i;
    typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), i || (u = o()), l = t.getOptions(l);
    const d = t.getImageWidth(s.modules.size, l), h = u.getContext("2d"), p = h.createImageData(d, d);
    return t.qrToImageData(p.data, s, l), n(h, u, d), h.putImageData(p, 0, 0), u;
  }, e.renderToDataURL = function(s, i, c) {
    let l = c;
    typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), l || (l = {});
    const u = e.render(s, i, l), d = l.type || "image/png", h = l.rendererOpts || {};
    return u.toDataURL(d, h.quality);
  };
})(qi);
var Qi = {};
const Uf = Pr;
function Os(e, t) {
  const n = e.a / 255, o = t + '="' + e.hex + '"';
  return n < 1 ? o + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : o;
}
function To(e, t, n) {
  let o = e + t;
  return typeof n < "u" && (o += " " + n), o;
}
function Hf(e, t, n) {
  let o = "", r = 0, s = !1, i = 0;
  for (let c = 0; c < e.length; c++) {
    const l = Math.floor(c % t), u = Math.floor(c / t);
    !l && !s && (s = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (o += s ? To("M", l + n, 0.5 + u + n) : To("m", r, 0), r = 0, s = !1), l + 1 < t && e[c + 1] || (o += To("h", i), i = 0)) : r++;
  }
  return o;
}
Qi.render = function(t, n, o) {
  const r = Uf.getOptions(n), s = t.modules.size, i = t.modules.data, c = s + r.margin * 2, l = r.color.light.a ? "<path " + Os(r.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "", u = "<path " + Os(r.color.dark, "stroke") + ' d="' + Hf(i, s, r.margin) + '"/>', d = 'viewBox="0 0 ' + c + " " + c + '"', h = r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "", p = '<svg xmlns="http://www.w3.org/2000/svg" ' + h + d + ' shape-rendering="crispEdges">' + l + u + `</svg>
`;
  return typeof o == "function" && o(null, p), p;
};
const Wf = of, tr = Bi, Xi = qi, Kf = Qi;
function Rr(e, t, n, o, r) {
  const s = [].slice.call(arguments, 1), i = s.length, c = typeof s[i - 1] == "function";
  if (!c && !Wf())
    throw new Error("Callback required as last argument");
  if (c) {
    if (i < 2)
      throw new Error("Too few arguments provided");
    i === 2 ? (r = n, n = t, t = o = void 0) : i === 3 && (t.getContext && typeof r > "u" ? (r = o, o = void 0) : (r = o, o = n, n = t, t = void 0));
  } else {
    if (i < 1)
      throw new Error("Too few arguments provided");
    return i === 1 ? (n = t, t = o = void 0) : i === 2 && !t.getContext && (o = n, n = t, t = void 0), new Promise(function(l, u) {
      try {
        const d = tr.create(n, o);
        l(e(d, t, o));
      } catch (d) {
        u(d);
      }
    });
  }
  try {
    const l = tr.create(n, o);
    r(null, e(l, t, o));
  } catch (l) {
    r(l);
  }
}
gn.create = tr.create;
gn.toCanvas = Rr.bind(null, Xi.render);
gn.toDataURL = Rr.bind(null, Xi.renderToDataURL);
gn.toString = Rr.bind(null, function(e, t, n) {
  return Kf.render(e, n);
});
const zf = (e) => {
  var t = document.getElementById("canvas"), n = "https://beamphoto.pagekite.me/spa/index.html#/beam-mobile/" + e;
  gn.toCanvas(t, n, function(o) {
  }), console.log(n);
}, Wt = (e) => (bl("data-v-a518ca29"), e = e(), yl(), e), Jf = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("link", {
  rel: "stylesheet",
  href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
}, null, -1)), Yf = { class: "content" }, Zf = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("canvas", { id: "canvas" }, null, -1)), qf = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("h2", null, "useBeamSession (debug)", -1)), Qf = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("th", null, "isConnected", -1)), Xf = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("th", null, "photos", -1)), Gf = ["src"], ed = /* @__PURE__ */ Wt(() => /* @__PURE__ */ de("th", null, "sessionId", -1)), td = /* @__PURE__ */ Rl({
  __name: "BeamWidget",
  setup(e) {
    const { isConnected: t, photos: n, sessionId: o, openSession: r } = nf("host"), s = ki("pdf");
    return setTimeout(() => {
      s.emit({ data: gu });
    }, 1e3), gi(() => {
      zf(o.value);
    }), Qn({ photo: "lol Im the photo", title: "" }), (i, c) => (bo(), yo(De, null, [
      Jf,
      de("div", Yf, [
        Zf,
        qf,
        de("table", null, [
          de("tr", null, [
            Qf,
            de("td", null, $r(On(t)), 1)
          ]),
          de("tr", null, [
            Xf,
            de("td", null, [
              (bo(!0), yo(De, null, Kl(On(n), (l) => (bo(), yo("img", {
                class: "thumbnail",
                src: l
              }, null, 8, Gf))), 256))
            ])
          ]),
          de("tr", null, [
            ed,
            de("td", null, $r(On(o)), 1)
          ])
        ])
      ])
    ], 64));
  }
});
const nd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, od = /* @__PURE__ */ nd(td, [["__scopeId", "data-v-a518ca29"]]), rd = "lhbeam", sd = (e) => {
  var t = nu(od);
  if (!e)
    throw new Error("Could not find node!");
  const n = e.attachShadow({ mode: "open" }), o = document.createElement("div");
  n.appendChild(o);
  var r = document.querySelector(`#${rd}`);
  r ? n.appendChild(r.cloneNode(!0)) : console.error("did not find style to yank into shadow dom"), t.mount(o);
  const s = ki("pdf"), i = au(), c = s.on((l) => {
    i.trigger(l);
  });
  return {
    unmount: () => {
      c(), t.unmount();
    },
    onPdfEmitted: i.on
  };
};
export {
  sd as mount
};
(function(){"use strict";try{if(typeof document!="undefined"){var a=document.createElement("style");a.id="lhbeam",a.appendChild(document.createTextNode("*[data-v-a518ca29]{color:#000}[data-v-a518ca29]:host{all:initial;display:block}.qr[data-v-a518ca29]{border:5px #000 solid}.thumbnail[data-v-a518ca29]{padding:5px;width:50px;height:50px}")),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
//# sourceMappingURL=mfe-beam.js.map
