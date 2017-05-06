export default (env) => {
  return [
    require(`./webpack/browser.${env}`),
    require(`./webpack/server.${env}`),
  ];
}
