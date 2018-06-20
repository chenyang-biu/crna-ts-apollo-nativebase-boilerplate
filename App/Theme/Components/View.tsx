import variable from "./../Variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    }
  };

  return viewTheme;
};
