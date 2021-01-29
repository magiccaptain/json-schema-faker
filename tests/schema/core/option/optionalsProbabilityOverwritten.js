module.exports = {
  register(jsf) {
    return jsf.option({
      useDefaultValue: true,
      fixedProbabilities: true,
      alwaysFakeOptionals: true,
      optionalsProbability: 0.0,
    });
  },
};
