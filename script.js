document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".sticky", {
    scrollTrigger: {
      trigger: ".sticky",
      start: "top top",
      end: () =>
        "+=" +
        (window.innerHeight +
          document.querySelector(".website-content").offsetHeight * 0.55),
      scrub: 1,
      pin: true,
    },
    y: -250,
    scale: 0.5,
    rotation: -15,
    ease: "power3.out",
    borderRadius: 100,
    // opacity: 0,
  });
  // image rotation animation
  for (let i = 1; i <= 6; i++) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#img${i}`,
        start: "top 120%",
        end: "bottom -50%",
        scrub: true,
        markers: true,
      },
    });

    tl.from(`#img${i}`, {
      opacity: 0,
      scale: 0.1,
      x: -300,
      rotate: 45,
    });

    tl.to(`#img${i}`, {
      opacity: 0,
      scale: 0.1,
      rotate: -45,
      x: -300,
      y: -100,
    });
  }

  // text rotation animation
  for (let i = 1; i <= 6; i++) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#imgPara${i}`,
        start: "top 120%",
        end: "bottom -50%",
        scrub: true,
        markers: true,
      },
    });

    // Add 'from' animation to the timeline
    tl.from(`#imgPara${i}`, {
      opacity: 0,
      scale: 0.1,
      x: 300,
      rotate: -45,
    });

    // Add 'to' animation to the timeline
    tl.to(`#imgPara${i}`, {
      opacity: 0,
      scale: 0.1,
      rotate: 45,
      x: 300,
      y: -100,
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const colors = ["#030637", "#3C0753", "#720455", "#720455"];
//   const speed = 4;
//   const horizontalPressure = 4;
//   const verticalPressure = 5;
//   const waveFrequencyX = 2;
//   const waveFrequencyY = 3;
//   const waveAmplitude = 5;
//   const shadows = 0;
//   const highlights = 2;
//   const colorBrightness = 1;
//   const colorSaturation = 7;
//   const wireframe = false;
//   const colorBlending = 6;
//   const backgroundColor = "#003FFF";
//   const backgroundAlpha = 1;
//   const resolution = 1;

//   // Apply animation properties to CSS dynamically
//   const animatedGradient = document.querySelector(".animated-gradient");
//   const animationDuration = 10 / (speed / 4); // Adjust duration based on speed

//   animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${colors.join(
//     ", "
//   )})`;
//   animatedGradient.style.backgroundSize = `${horizontalPressure * 100}% ${
//     verticalPressure * 100
//   }%`;
//   animatedGradient.style.animationDuration = `${animationDuration}s`;

//   // Adjust color properties
//   const adjustColors = (colors, saturation, brightness) => {
//     return colors.map((color) => {
//       let hsl = hexToHSL(color);
//       hsl.s *= saturation;
//       hsl.l *= brightness;
//       return hslToHex(hsl);
//     });
//   };

//   const hexToHSL = (H) => {
//     let r = 0,
//       g = 0,
//       b = 0;
//     if (H.length == 4) {
//       r = "0x" + H[1] + H[1];
//       g = "0x" + H[2] + H[2];
//       b = "0x" + H[3] + H[3];
//     } else if (H.length == 7) {
//       r = "0x" + H[1] + H[2];
//       g = "0x" + H[3] + H[4];
//       b = "0x" + H[5] + H[6];
//     }
//     r /= 255;
//     g /= 255;
//     b /= 255;
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;

//     if (delta == 0) h = 0;
//     else if (cmax == r) h = ((g - b) / delta) % 6;
//     else if (cmax == g) h = (b - r) / delta + 2;
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);
//     if (h < 0) h += 360;
//     l = (cmax + cmin) / 2;
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     return { h, s, l };
//   };

//   const hslToHex = ({ h, s, l }) => {
//     s /= 100;
//     l /= 100;
//     let c = (1 - Math.abs(2 * l - 1)) * s,
//       x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
//       m = l - c / 2,
//       r = 0,
//       g = 0,
//       b = 0;
//     if (0 <= h && h < 60) {
//       r = c;
//       g = x;
//       b = 0;
//     } else if (60 <= h && h < 120) {
//       r = x;
//       g = c;
//       b = 0;
//     } else if (120 <= h && h < 180) {
//       r = 0;
//       g = c;
//       b = x;
//     } else if (180 <= h && h < 240) {
//       r = 0;
//       g = x;
//       b = c;
//     } else if (240 <= h && h < 300) {
//       r = x;
//       g = 0;
//       b = c;
//     } else if (300 <= h && h < 360) {
//       r = c;
//       g = 0;
//       b = x;
//     }
//     r = Math.round((r + m) * 255)
//       .toString(16)
//       .padStart(2, "0");
//     g = Math.round((g + m) * 255)
//       .toString(16)
//       .padStart(2, "0");
//     b = Math.round((b + m) * 255)
//       .toString(16)
//       .padStart(2, "0");
//     return `#${r}${g}${b}`;
//   };

//   const adjustedColors = adjustColors(colors, colorSaturation, colorBrightness);
//   animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${adjustedColors.join(
//     ", "
//   )})`;
// });

gsap.fromTo(
  ".website-content",
  {
    x: 300,
    scale: 0.3,
    rotation: 40,
    borderRadius: 200,
  },
  {
    scrollTrigger: {
      trigger: ".website-content",
      start: "top 300%",
      end: "top 80%",
      scrub: 1,
      // markers: true,
    },
    x: 0,
    scale: 1,
    rotation: 0,
    borderRadius: 0,
    ease: "power3.out",
  }
);

const wrapper = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emojiFace = document.querySelector(".emoji-face");

const moveEvent = (e) => {
  const wrapperRect = wrapper.getBoundingClientRect();

  const pxToVW = (widthInPX) => (widthInPX * 100) / window.innerWidth;

  const relX = pxToVW(e.clientX - (wrapperRect.left + wrapperRect.width / 2));
  const relY = pxToVW(e.clientY - (wrapperRect.top + wrapperRect.height / 2));

  const emojiMaxDisplacement = 2;
  const emojiFaceMaxDisplacement = 3;

  const emojiDisplacementX =
    (relX / pxToVW(wrapperRect.width)) * emojiMaxDisplacement;
  const emojiDisplacementY =
    (relY / pxToVW(wrapperRect.height)) * emojiMaxDisplacement;

  const emojiFaceDisplacementX =
    (relX / pxToVW(wrapperRect.width)) * emojiFaceMaxDisplacement;
  const emojiFaceDisplacementY =
    (relY / pxToVW(wrapperRect.height)) * emojiFaceMaxDisplacement;

  gsap.to(emoji, {
    x: `${emojiDisplacementX}vw`,
    y: `${emojiDisplacementY}vw`,
    ease: "power3.out",
    duration: 0.35,
  });

  gsap.to(emojiFace, {
    x: `${emojiFaceDisplacementX}vw`,
    y: `${emojiFaceDisplacementY}vw`,
    ease: "power3.out",
    duration: 0.35,
  });
  // const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
  // const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

  // const emojiMaxDisplacement = 50;
  // const emojiFaceMaxDisplacement = 75;

  // const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
  // const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

  // const emojiFaceDisplacementX =
  //   (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
  // const emojiFaceDisplacementY =
  //   (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

  // gsap.to(emoji, {
  //   x: emojiDisplacementX,
  //   y: emojiDisplacementY,
  //   ease: "power3.out",
  //   duration: 0.35,
  // });

  // gsap.to(emojiFace, {
  //   x: emojiFaceDisplacementX,
  //   y: emojiFaceDisplacementY,
  //   ease: "power3.out",
  //   duration: 0.35,
  // });
};

const leaveEvent = (e) => {
  gsap.to([emoji, emojiFace], {
    x: 0,
    y: 0,
    ease: "power3.out",
    duration: 1,
  });
};

wrapper.addEventListener("mousemove", moveEvent);
wrapper.addEventListener("mouseleave", leaveEvent);

document.addEventListener("DOMContentLoaded", function () {
  const colors = ["#FF5373", "#FFC858", "#17E7FF", "#6D3BFF"];
  const speed = 4;
  const horizontalPressure = 4;
  const verticalPressure = 5;
  const waveFrequencyX = 2;
  const waveFrequencyY = 3;
  const waveAmplitude = 5;
  const shadows = 0;
  const highlights = 2;
  const colorBrightness = 1;
  const colorSaturation = 7;
  const wireframe = false;
  const colorBlending = 6;
  const backgroundColor = "#003FFF";
  const backgroundAlpha = 1;
  const resolution = 1;

  // Apply animation properties to CSS dynamically
  const animatedGradient = document.querySelector(".animated-text");
  const animationDuration = 10 / (speed / 4); // Adjust duration based on speed

  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${colors.join(
    ", "
  )})`;
  animatedGradient.style.backgroundSize = `${horizontalPressure * 100}% ${
    verticalPressure * 100
  }%`;
  animatedGradient.style.animationDuration = `${animationDuration}s`;

  // Adjust color properties
  const adjustColors = (colors, saturation, brightness) => {
    return colors.map((color) => {
      let hsl = hexToHSL(color);
      hsl.s *= saturation;
      hsl.l *= brightness;
      return hslToHex(hsl);
    });
  };

  const hexToHSL = (H) => {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
  };

  const hslToHex = ({ h, s, l }) => {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  };

  const adjustedColors = adjustColors(colors, colorSaturation, colorBrightness);
  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${adjustedColors.join(
    ", "
  )})`;
});

// #6d3bff, #17e7ff, #ffc858, #ff5373

document.addEventListener("DOMContentLoaded", function () {
  const colors = ["#6d3bff", "#17e7ff", "#ffc858", "#ff5373"];
  const speed = 4;
  const horizontalPressure = 4;
  const verticalPressure = 5;
  const waveFrequencyX = 2;
  const waveFrequencyY = 3;
  const waveAmplitude = 5;
  const shadows = 0;
  const highlights = 2;
  const colorBrightness = 1;
  const colorSaturation = 7;
  const wireframe = false;
  const colorBlending = 6;
  const backgroundColor = "#003FFF";
  const backgroundAlpha = 1;
  const resolution = 1;

  // Apply animation properties to CSS dynamically
  const animatedGradient = document.querySelector(".animated-text2");
  const animationDuration = 10 / (speed / 4); // Adjust duration based on speed

  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${colors.join(
    ", "
  )})`;
  animatedGradient.style.backgroundSize = `${horizontalPressure * 100}% ${
    verticalPressure * 100
  }%`;
  animatedGradient.style.animationDuration = `${animationDuration}s`;

  // Adjust color properties
  const adjustColors = (colors, saturation, brightness) => {
    return colors.map((color) => {
      let hsl = hexToHSL(color);
      hsl.s *= saturation;
      hsl.l *= brightness;
      return hslToHex(hsl);
    });
  };

  const hexToHSL = (H) => {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
  };

  const hslToHex = ({ h, s, l }) => {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  };

  const adjustedColors = adjustColors(colors, colorSaturation, colorBrightness);
  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${adjustedColors.join(
    ", "
  )})`;
});

// ----------------------------------->

document.addEventListener("DOMContentLoaded", () => {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");

  page3.style.top = `calc(${page1.offsetHeight}px + ${page2.offsetHeight}px - 1px)`;
  page4.style.body = `calc(${page1.offsetHeight}px + ${
    page2.offsetHeight
  }px +  ${page3.offsetHeight / 2}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const colors = ["#FF5373", "#FFC858", "#17E7FF", "#6D3BFF"];
  const speed = 4;
  const horizontalPressure = 4;
  const verticalPressure = 5;
  const waveFrequencyX = 2;
  const waveFrequencyY = 3;
  const waveAmplitude = 5;
  const shadows = 0;
  const highlights = 2;
  const colorBrightness = 1;
  const colorSaturation = 7;
  const wireframe = false;
  const colorBlending = 6;
  const backgroundColor = "#003FFF";
  const backgroundAlpha = 1;
  const resolution = 1;

  // Apply animation properties to CSS dynamically
  const animatedGradient = document.querySelector(".animated-text3");
  const animationDuration = 10 / (speed / 4); // Adjust duration based on speed

  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${colors.join(
    ", "
  )})`;
  animatedGradient.style.backgroundSize = `${horizontalPressure * 100}% ${
    verticalPressure * 100
  }%`;
  animatedGradient.style.animationDuration = `${animationDuration}s`;

  // Adjust color properties
  const adjustColors = (colors, saturation, brightness) => {
    return colors.map((color) => {
      let hsl = hexToHSL(color);
      hsl.s *= saturation;
      hsl.l *= brightness;
      return hslToHex(hsl);
    });
  };

  const hexToHSL = (H) => {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
  };

  const hslToHex = ({ h, s, l }) => {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  };

  const adjustedColors = adjustColors(colors, colorSaturation, colorBrightness);
  animatedGradient.style.backgroundImage = `linear-gradient(135deg, ${adjustedColors.join(
    ", "
  )})`;
});

gsap.to(".page3 .image img", {
  scale: 0.53,
  x: -240,
  y: 420,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3 .image img",
    // markers: true,
    start: "top 20%",
    end: "50% -15%",
    scrub: true,
  },
});

gsap.from("#img123", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#img123",
    markers: true,
    start: "top 40%",
    end: "top 0%",
    scrub: true,
  },
});
