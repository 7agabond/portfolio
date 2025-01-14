export const DOMSelector = string => {
  return document.querySelector(string);
};

export const envVars = import.meta.env;

export const scrollMarginTopChecker = () => {
  const $header = DOMSelector(".header-container");

  ["resize", "click", "touchend", "load"].forEach((elm) => {
    window.addEventListener(elm, () => {
      // Control the "scroll-margin-top" style value when the header change their height
      const { height } = getComputedStyle($header);
      const [firstSheet] = document.styleSheets;

      firstSheet.insertRule(
        `section[id] { scroll-margin-top: ${height} }`,
        firstSheet.cssRules.length
      );
    });
  });
};

export const darkMode = () => {
  // Dark mode
  let darkModeValue = localStorage.getItem("theme");
  const systemInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (systemInDarkMode && !darkModeValue) {
    darkModeValue = "dark";
  }

  if (!darkModeValue) {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
  }

  if (darkModeValue) {
    document.documentElement.setAttribute("theme", darkModeValue);
    localStorage.setItem("theme", darkModeValue);
  }
};

export const headerHeightChecker = () => {
  const $header = DOMSelector(".header-container");
  const $main = DOMSelector("main");

  const resizeObserver = new ResizeObserver((items) => {
    const [firstElement] = items;
    const { contentRect: { height } } = firstElement;

    $main.style.paddingTop = `${height / 2}px`;
  });

  resizeObserver.observe($header);
};
