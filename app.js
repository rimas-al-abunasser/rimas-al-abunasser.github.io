/* Athar · أثر — scroll-driven journey. Each stop leaves a trace; the traces assemble into the logo. */
(function () {
  "use strict";
  var C = window.CONTENT, GRID = window.GRID;
  var root = document.documentElement;
  var NS = "http://www.w3.org/2000/svg";
  var clamp = function (v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a || 0, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
  var seg = function (p, a, b) { return clamp((p - a) / (b - a)); };
  function rng(seed) { return function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }
  function el(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
  function mix(c1, c2, t) {
    var a = parseInt(c1.slice(1), 16), b = parseInt(c2.slice(1), 16);
    var r = Math.round(lerp(a >> 16, b >> 16, t)), g = Math.round(lerp((a >> 8) & 255, (b >> 8) & 255, t)), bl = Math.round(lerp(a & 255, b & 255, t));
    return "rgb(" + r + "," + g + "," + bl + ")";
  }

  var panels = [].slice.call(document.querySelectorAll(".panel"));
  var track = document.querySelector(".track");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastP = {};

  /* ---------- Language ---------- */
  var lang = "en";
  try { lang = localStorage.getItem("rimas-lang") || ""; } catch (e) {}
  try { var q = new URLSearchParams(location.search).get("lang"); if (q === "ar" || q === "en") lang = q; } catch (e) {}
  if (lang !== "ar" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";

  function applyLang(l) {
    lang = l; var T = C[l];
    root.lang = l; root.dir = l === "ar" ? "rtl" : "ltr";
    document.title = T.docTitle;
    document.querySelectorAll("[data-t]").forEach(function (n) { var v = T[n.getAttribute("data-t")]; if (v != null) n.textContent = v; });
    document.querySelectorAll("[data-h]").forEach(function (n) { var v = T[n.getAttribute("data-h")]; if (v != null) n.innerHTML = v; });
    var lb = document.querySelector(".lang");
    lb.textContent = l === "ar" ? "EN" : "ع";
    lb.setAttribute("aria-label", l === "ar" ? "Switch to English" : "التبديل إلى العربية");
    try { localStorage.setItem("rimas-lang", l); } catch (e) {}
    if (window.ScrollTrigger && !document.body.classList.contains("static")) ScrollTrigger.refresh();
  }

  /* ---------- Contact ---------- */
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + C.contact.email; });
  document.querySelectorAll("[data-linkedin]").forEach(function (a) { a.href = C.contact.linkedin; });
  document.querySelectorAll("[data-mailtext]").forEach(function (p) { p.textContent = C.contact.email; });

  /* ---------- Scenes ---------- */
  function host(panel, p) {
    var t = ease(seg(p, 0, 0.6));
    var o = seg(p, 0.02, 0.2).toFixed(2);
    panel.querySelectorAll(".host").forEach(function (h, i) { h.style.translate = (lerp(-38 - i * 8, 0, t)) + "vw 0"; h.style.opacity = o; });
  }

  var SCENES = {
    intro: function () {},

    sun: function (panel, p) {
      var a = Math.PI * (1 - lerp(0.05, 0.62, p));
      var sx = 200 + 160 * Math.cos(a), sy = 250 - 160 * Math.sin(a);
      var sun = panel.querySelector(".sun"); sun.setAttribute("cx", sx); sun.setAttribute("cy", sy);
      var th = Math.atan2(sy - 230, sx - 150) * 180 / Math.PI + 90;
      panel.querySelector(".tracker").setAttribute("transform", "translate(0 -56) rotate(" + th.toFixed(1) + ")");
      var grow = ease(seg(p, 0.15, 0.6));
      var stem = panel.querySelector(".stem"); stem.style.strokeDasharray = "1"; stem.style.strokeDashoffset = String(1 - grow);
      var b = ease(seg(p, 0.5, 0.95));
      panel.querySelector(".bloom").setAttribute("transform", "translate(0 -92) scale(" + b.toFixed(3) + ") rotate(" + lerp(-60, 0, b).toFixed(1) + ")");
    },

    board: (function () {
      var cards = null, R = rng(11);
      var finalCols = [2, 2, 2, 2, 1, 1, 1, 0, 0];
      return function (panel, p) {
        var g = panel.querySelector(".cards");
        if (!cards) {
          cards = []; var rowCount = [0, 0, 0];
          finalCols.forEach(function (c, i) {
            var grp = el("g", {}, g);
            var rect = el("rect", { x: -44, y: -14, width: 88, height: 28, rx: 6, fill: "#E0DDD5" }, grp);
            el("rect", { x: -34, y: -3, width: 30 + (i * 13) % 34, height: 6, rx: 3, fill: "#A9B1C2" }, grp);
            var bar = el("rect", { x: -44, y: -14, width: 6, height: 28, rx: 3, fill: "#0B3478", opacity: 0 }, grp);
            cards.push({ g: grp, bar: bar, rect: rect, sx: 30 + R() * 340, sy: 60 + R() * 210, sr: (R() - 0.5) * 70, tx: [70, 200, 330][c], ty: 76 + rowCount[c]++ * 40, d: i * 0.045, done: c === 2 });
          });
        }
        cards.forEach(function (k) {
          var t = ease(seg(p, 0.05 + k.d, 0.55 + k.d));
          k.g.setAttribute("transform", "translate(" + lerp(k.sx, k.tx, t).toFixed(1) + " " + lerp(k.sy, k.ty, t).toFixed(1) + ") rotate(" + lerp(k.sr, 0, t).toFixed(1) + ")");
          if (k.done) k.bar.setAttribute("opacity", seg(p, 0.75, 0.95).toFixed(2));
        });
      };
    })(),

    rewaa: (function () {
      var built = false, sprouts = [], drops = [];
      return function (panel, p) {
        if (!built) {
          built = true;
          var sg = panel.querySelector(".sprouts"), dg = panel.querySelector(".drops");
          for (var i = 0; i < 12; i++) {
            var x = 118 + i * 22, h = 20 + ((i * 7) % 5) * 6;
            var s = el("g", { transform: "translate(" + x + " 260)" }, sg);
            el("path", { d: "M0 0 V-" + h + " M0 -" + (h * 0.55) + " q9 -3 13 -13 M0 -" + (h * 0.8) + " q-9 -2 -12 -11" }, s);
            sprouts.push({ g: s, d: i * 0.025 });
          }
          for (var j = 0; j < 7; j++) drops.push({ e: el("rect", { width: 6, height: 12, rx: 3, x: 130 + j * 36 }, dg), o: (j * 0.37) % 1 });
        }
        var green = ease(seg(p, 0.35, 0.95));
        panel.querySelector(".soil").setAttribute("fill", mix("#6B675F", "#2C6A3B", green));
        panel.querySelector(".waves").setAttribute("opacity", (0.25 + 0.75 * Math.abs(Math.sin(p * 9))).toFixed(2));
        var rain = seg(p, 0.1, 0.25) * (1 - seg(p, 0.9, 1) * 0.6);
        drops.forEach(function (d) { var y = 70 + ((p * 4 + d.o) % 1) * 180; d.e.setAttribute("y", y.toFixed(1)); d.e.setAttribute("opacity", rain.toFixed(2)); });
        sprouts.forEach(function (s) { var t = ease(seg(p, 0.35 + s.d, 0.75 + s.d)); s.g.setAttribute("transform", s.g.getAttribute("transform").split(" scale")[0] + " scale(" + t.toFixed(3) + ")"); });
      };
    })(),

    people: (function () {
      var dots = null, R = rng(7);
      return function (panel, p) {
        var g = panel.querySelector(".dots");
        if (!dots) {
          dots = [];
          for (var i = 0; i < 69; i++) {
            var c = el("circle", { r: 7, fill: i % 9 === 4 ? "#E3241B" : "#E0DDD5" }, g);
            dots.push({ e: c, sx: R() * 400, sy: R() * 300, tx: 57 + (i % 12) * 26, ty: 70 + Math.floor(i / 12) * 32, d: R() * 0.3 });
          }
        }
        dots.forEach(function (d) {
          var t = ease(seg(p, d.d, d.d + 0.55));
          d.e.setAttribute("cx", lerp(d.sx, d.tx, t).toFixed(1)); d.e.setAttribute("cy", lerp(d.sy, d.ty, t).toFixed(1));
          d.e.setAttribute("opacity", (0.35 + 0.65 * t).toFixed(2));
        });
        var n = ease(seg(p, 0.05, 0.8));
        panel.querySelectorAll("[data-count]").forEach(function (b) { b.textContent = Math.round(+b.getAttribute("data-count") * n); });
      };
    })(),

    burhan: (function () {
      var bars = null, R = rng(5), W = [140, 116, 140, 96, 130, 84, 140];
      return function (panel, p) {
        var g = panel.querySelector(".rules");
        if (!bars) {
          bars = W.map(function (w, i) {
            return { e: el("rect", { x: 0, y: 0, width: w, height: 9, rx: 4.5 }, g), w: w, sx: R() * 330, sy: 20 + R() * 260, sr: (R() - 0.5) * 120, tx: 130, ty: 66 + i * 18, d: i * 0.04 };
          });
        }
        bars.forEach(function (b) {
          var t = ease(seg(p, 0.05 + b.d, 0.6 + b.d));
          b.e.setAttribute("transform", "translate(" + lerp(b.sx, b.tx, t).toFixed(1) + " " + lerp(b.sy, b.ty, t).toFixed(1) + ") rotate(" + lerp(b.sr, 0, t).toFixed(1) + ")");
          b.e.setAttribute("fill", mix("#A9B1C2", "#0B3478", t));
        });
        panel.querySelector(".doc").setAttribute("opacity", (0.12 + 0.88 * ease(seg(p, 0.2, 0.6))).toFixed(2));
        var s = ease(seg(p, 0.55, 0.85));
        panel.querySelector(".srcs").setAttribute("opacity", s.toFixed(2));
        panel.querySelector(".srcs").setAttribute("transform", "translate(" + lerp(30, 0, s).toFixed(1) + " 0)");
        var sh = ease(seg(p, 0.7, 1));
        panel.querySelector(".shield").setAttribute("transform", "translate(200 216) scale(" + sh.toFixed(3) + ")");
      };
    })(),

    road: (function () {
      var boxes = null, prio = null;
      var B = [["D40", 278, 238, 66, 30, 0.12], ["D00", 108, 208, 60, 32, 0.26], ["D10", 246, 144, 26, 58, 0.40], ["D20", 170, 80, 46, 24, 0.54]];
      return function (panel, p) {
        if (!boxes) {
          var g = panel.querySelector(".boxes"), pg = panel.querySelector(".prio");
          boxes = B.map(function (b) {
            var grp = el("g", {}, g);
            el("rect", { x: b[1], y: b[2], width: b[3], height: b[4], rx: 3, fill: "none", stroke: "#F4C430", "stroke-width": 2.5 }, grp);
            el("rect", { x: b[1], y: b[2] - 18, width: 34, height: 16, rx: 3, fill: "#F4C430" }, grp);
            var t = el("text", { x: b[1] + 17, y: b[2] - 6, "text-anchor": "middle", fill: "#21314E" }, grp); t.textContent = b[0];
            return { g: grp, at: b[5] };
          });
          prio = ["P1 · D40", "P2 · D00", "P3 · D10"].map(function (txt, i) {
            var grp = el("g", { transform: "translate(0 " + (40 + i * 26) + ")" }, pg);
            el("rect", { width: 74, height: 20, rx: 5, fill: i === 0 ? "#8C12AE" : "#2E3F60" }, grp);
            var t = el("text", { x: 37, y: 14, "text-anchor": "middle", fill: "#E0DDD5" }, grp); t.textContent = txt;
            return grp;
          });
        }
        boxes.forEach(function (b) { var t = ease(seg(p, b.at, b.at + 0.14)); b.g.setAttribute("opacity", t.toFixed(2)); });
        prio.forEach(function (g, i) { var t = ease(seg(p, 0.7 + i * 0.08, 0.86 + i * 0.08)); g.setAttribute("opacity", t.toFixed(2)); g.setAttribute("transform", "translate(" + lerp(-30, 0, t).toFixed(1) + " " + (40 + i * 26) + ")"); });
      };
    })(),

    finale: (function () {
      var parts = null, canvas, ctx, size = 0, R = rng(3);
      function setup(panel) {
        canvas = panel.querySelector(".parts"); ctx = canvas.getContext("2d");
        parts = GRID.cells.map(function (c) {
          return { tx: c[0], ty: c[1], sx: -1.6 + R() * 1.4, sy: R() * 1.4 - 0.2, d: R() * 0.35 };
        });
      }
      function resize() {
        var dpr = Math.min(2, window.devicePixelRatio || 1); var w = canvas.clientWidth;
        if (!w) return; size = w; canvas.width = w * dpr; canvas.height = w * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      return function (panel, p) {
        if (!parts) { setup(panel); window.addEventListener("resize", function () { resize(); SCENES.finale(panel, lastP.finale || 0); }); }
        if (!size || size !== canvas.clientWidth) resize();
        if (!size) return;
        var reveal = ease(seg(p, 0.78, 0.97));
        panel.querySelector(".logo-final").style.opacity = reveal.toFixed(3);
        ctx.clearRect(0, 0, size, size);
        var cs = size / GRID.n * 0.84;
        ctx.fillStyle = "rgba(224,221,213," + (1 - reveal).toFixed(3) + ")";
        parts.forEach(function (q) {
          var t = ease(seg(p, q.d, q.d + 0.5));
          var x = lerp(q.sx, q.tx, t) * size, y = lerp(q.sy, q.ty, t) * size;
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(x - cs / 2, y - cs / 2, cs, cs, cs * 0.18); else ctx.rect(x - cs / 2, y - cs / 2, cs, cs);
          ctx.fill();
        });
      };
    })()
  };

  function render(panel, p) {
    var name = panel.getAttribute("data-scene"); lastP[name] = p;
    host(panel, p);
    SCENES[name](panel, p);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- Details dialog ---------- */
  var dlg = document.getElementById("more");
  function openMore(id) {
    var D = C[lang].details[id]; if (!D) return;
    dlg.querySelector("h3").textContent = D.title;
    dlg.querySelector(".m-list").innerHTML = D.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
    dlg.querySelector(".m-tags").innerHTML = D.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  }
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- Journey ---------- */
  var H = null;
  function dist() { return track.scrollWidth - window.innerWidth; }
  function currentIndex() {
    if (!H) return 0;
    var st = H.scrollTrigger; var prog = clamp((window.scrollY - st.start) / (st.end - st.start));
    return Math.round(prog * (panels.length - 1));
  }
  function goTo(i) {
    i = clamp(i, 0, panels.length - 1);
    if (!H) { panels[i].scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); return; }
    var st = H.scrollTrigger;
    var y = st.start + (panels[i].offsetLeft / dist()) * (st.end - st.start);
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  var steps = [].slice.call(document.querySelectorAll(".steps li"));
  function markSteps(prog) {
    var idx = Math.round(prog * (panels.length - 1));
    steps.forEach(function (s, i) { s.classList.toggle("on", idx >= i + 1); });
  }

  function startStatic() {
    document.body.classList.add("static");
    panels.forEach(function (p) { render(p, 1); });
    steps.forEach(function (s) { s.classList.add("on"); });
  }

  function startMotion() {
    gsap.registerPlugin(ScrollTrigger);
    H = gsap.to(track, {
      x: function () { return -dist(); }, ease: "none",
      scrollTrigger: { trigger: ".journey", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: function (s) { markSteps(s.progress); } }
    });
    panels.forEach(function (panel, i) {
      if (i === 0) return;
      var last = i === panels.length - 1;
      ScrollTrigger.create({
        trigger: panel, containerAnimation: H,
        start: "left 78%", end: last ? "left left" : "center 52%",
        onUpdate: function (s) { render(panel, s.progress); },
        onRefresh: function (s) { render(panel, s.progress); }
      });
      render(panel, 0);
    });
  }

  /* ---------- Controls ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act],[data-more]"); if (!t) return;
    var act = t.getAttribute("data-act");
    if (t.hasAttribute("data-more")) { openMore(t.getAttribute("data-more")); return; }
    if (act === "lang") applyLang(lang === "ar" ? "en" : "ar");
    else if (act === "home") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else if (act === "close-more") dlg.close();
  });
  document.addEventListener("keydown", function (e) {
    if (dlg.open) return;
    var a = document.activeElement, onCtl = a && a !== document.body && /^(BUTTON|A|INPUT)$/.test(a.tagName);
    if ((e.key === "Enter" && !onCtl) || e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); goTo(currentIndex() + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goTo(currentIndex() - 1); }
  });

  /* ---------- Boot ---------- */
  applyLang(lang);
  if (reduce || !window.gsap || !window.ScrollTrigger) startStatic(); else startMotion();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (H) ScrollTrigger.refresh(); });
})();
