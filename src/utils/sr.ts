import ScrollReveal from "scrollreveal";

/**
 * @param {any} ref Reference to the html element
 * @param {number} delay Delay to start animation.
 * @param {number} viewFactor Specifies what portion of an element must be within the viewport for it to be considered visible.
 */
const sr = (ref: any, delay = 100, viewFactor = 0.2) =>
  ScrollReveal().reveal(ref, {
    origin: "bottom",
    distance: "20px",
    duration: 400,
    opacity: 0,
    delay,
    mobile: true,
    reset: false,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    useDelay: "always",
    viewFactor,
  });

export default sr;
