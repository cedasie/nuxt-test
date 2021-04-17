export default ({ app }) => {
  // Get localized path for homepage
  const localePath = app.i18n.localePath("index");
  // Get path to switch current route to French
  const switchLocalePath = app.i18n.switchLocalePath("en");
};
