(() => {
  // Only enable reveal-hidden mode when JS is actually running.
  document.documentElement.classList.add("js");

  // Staggered reveal on scroll (kept minimal and respectful of reduced-motion).
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      { root: null, threshold: 0.12 }
    );
    for (const el of revealEls) io.observe(el);
  } else {
    for (const el of revealEls) el.classList.add("is-visible");
  }

  // Mark missing local videos (keeps the page usable when MP4s are not present yet).
  const videoCards = Array.from(document.querySelectorAll(".media-card"));
  for (const card of videoCards) {
    const video = card.querySelector("video");
    if (!video) continue;

    const markMissing = () => card.classList.add("is-missing");
    const clearMissing = () => card.classList.remove("is-missing");

    // Some browsers surface the error on <source>, others on <video>.
    video.addEventListener("error", markMissing, true);
    for (const srcEl of Array.from(video.querySelectorAll("source"))) {
      srcEl.addEventListener("error", markMissing, true);
    }
    video.addEventListener("loadeddata", clearMissing, true);
    video.addEventListener("canplay", clearMissing, true);

    // Best-effort autoplay (works with muted + playsinline in modern browsers).
    if (video.muted) {
      const tryPlay = () => {
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };
      video.addEventListener("loadedmetadata", tryPlay, { once: true });
      tryPlay();
    }

    // Heuristic fallback: if nothing loads shortly after page load, show hint.
    setTimeout(() => {
      if (video.readyState === 0) markMissing();
    }, 1200);
  }
})();
