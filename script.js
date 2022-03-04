const tl1 = gsap.timeline();
tl1.from(".bg-image", {
  opacity: 0,
});
tl1.to(".image", {
  delay: 0.5,
  y: 0,
  duration: 0.8,
});
tl1.from(".logo , .menu-open", {
  duration: 1,
  y: -100,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
});
tl1.to(
  ".container h1",
  {
    opacity: 1,
    letterSpacing: "-25px",
    duration: 1.2,
  },
  "-=.7"
);
tl1.to(".bg-image", {
  overflow: "visible",
});
const tl = gsap.timeline({
  paused: "true",
});

tl.to(".menu-container", {
  duration: 1,
  x: 0,
});
tl.from(
  ".menu-close",
  {
    opacity: 0,
    rotate: "180deg",
  },
  "-=.2"
);
tl.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);
tl.from(
  ".menu-item-number",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.5"
);
tl.from(
  ".menu-item-name",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.3"
);
tl.from(
  ".menu-item-sub",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.1"
);
tl.from(
  ".menu-item-icon",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1"
);
function menuOpen() {
  tl.play();
}
function menuClose() {
  tl.reverse();
}
