import variable from "./../Variables/platform";

export default (variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: "#000"
  };

  return iconTheme;
};
