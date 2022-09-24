module.exports = (component) => {
  return {
    index: true,
    content: `export { default } from "./${component}"`,
    extension: `.ts`,
  };
};
