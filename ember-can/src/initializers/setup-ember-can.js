import Resolver from 'ember-resolver';

// eslint-disable-next-line no-unused-vars
class EmberCanResolver extends Resolver {
  pluralizedTypes = {
    ...this.pluralizedTypes,
    ability: 'abilities',
  };
}

export function initialize() {}
export default { initialize };
