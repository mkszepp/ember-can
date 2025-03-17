export { default as Ability } from './ability.js';

function extendResolver(resolver) {
  return class EmberCanResolver extends resolver {
    pluralizedTypes = {
      ...super.pluralizedTypes,
      ability: 'abilities'
    };
  };
}

export { extendResolver };
//# sourceMappingURL=index.js.map
