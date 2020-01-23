function goRel(knownRel) {
  let link = document.querySelector("link[rel=" + knownRel + "][href]");
  if (!link) return;
  let href = link.getAttribute('href');
  if (href.length > 0) {
    document.location = href;
  }
}

document.addEventListener("keyup", (e) => {
  if (e.altKey && e.key == '[' && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
    goRel('prev');
  } else if (e.altKey && e.key == ']' && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
    goRel('next');
  }
});
