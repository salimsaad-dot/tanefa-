// Tanefa Beauty Salon · North Legon
// Booking goes to their WhatsApp as a ready-to-send message. Hours aren't known,
// so guests pick Morning / Afternoon / Evening and the salon replies with a time.
const WHATSAPP_NUMBER = "233242705420"; // first number on their sign (024 270 5420)

// Photos fade in once downloaded (no pop-in on slow mobile data). Already-cached ones show at once.
document.querySelectorAll(".fade-img").forEach((img) => {
  const show = () => img.classList.add("loaded");
  if (img.complete) {
    img.style.transition = "none";
    show();
    requestAnimationFrame(() => requestAnimationFrame(() => (img.style.transition = "")));
  } else {
    img.addEventListener("load", show, { once: true });
    img.addEventListener("error", show, { once: true });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  /* ---------- Header + mobile menu ---------- */
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const setMenu = (open) => {
    body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  burger.addEventListener("click", () => setMenu(!body.classList.contains("menu-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- Booking form → WhatsApp ---------- */
  const form = document.getElementById("bookForm");
  const err = document.getElementById("formErr");
  const note = document.getElementById("formNote");
  const date = document.getElementById("date");
  const service = document.getElementById("service");
  const nameIn = document.getElementById("name"); // (the form's own .name property is a string, not this field)
  const today = new Date().toISOString().slice(0, 10); // Ghana = UTC all year
  date.min = today;

  // "Book for her / him / a child" links preselect the service and who it's for
  document.querySelectorAll("[data-service]").forEach((a) =>
    a.addEventListener("click", () => {
      service.value = a.dataset.service;
      service.classList.remove("invalid");
      const who = form.querySelector(`input[name=who][value="${a.dataset.who}"]`);
      if (who) who.checked = true;
    })
  );
  form.querySelectorAll("input, select").forEach((el) => el.addEventListener("input", () => el.classList.remove("invalid")));

  const nice = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.textContent = ""; note.textContent = "";
    const name = nameIn.value.trim();
    const missing = [];
    if (!service.value) missing.push(service);
    if (!date.value || date.value < today) missing.push(date);
    if (!name) missing.push(nameIn);
    if (missing.length) {
      missing.forEach((el) => el.classList.add("invalid"));
      err.textContent = date.value && date.value < today ? "Please pick today or a later day." : "Please fill in the highlighted fields.";
      missing[0].focus();
      return;
    }
    const lines = [
      "Hello Tanefa! I'd like to book:",
      `*Service:* ${service.value}`,
      `*For:* ${form.who.value}`,
      `*Day:* ${nice(date.value)}`,
      `*Time:* ${form.when.value}`,
      `*Name:* ${name}`,
    ];
    const extra = document.getElementById("note").value.trim();
    if (extra) lines.push(`*Note:* ${extra}`);
    lines.push("", "Please let me know a time that works. Thank you!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    note.textContent = "WhatsApp has opened with your message. Tap Send and we'll reply with a time.";
  });

  /* ---------- Reveal (below the first screen only) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});
