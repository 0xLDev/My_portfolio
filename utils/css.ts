export const getCssVariable = (variableName: string) => {
  if (process.browser) {
    const getStyle =
      "getComputedStyle" in window ? window.getComputedStyle : null;

    return (
      (getStyle && getStyle(document.body)?.getPropertyValue(variableName)) ||
      null
    );
  }

  return null;
};
