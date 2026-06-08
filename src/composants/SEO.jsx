export default function SEO({ l12n, langue }) {
  document.title = l12n.meta.titre[langue];

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", l12n.meta.description[langue]);

  document.querySelector("noscript").innerHTML = l12n.meta.noscript[langue];

  document.documentElement.lang = langue;
}
