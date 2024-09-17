import Resolver from 'ember-resolver';

class EmberCanResolver extends Resolver {
  pluralizedTypes = {
    ...this.pluralizedTypes,
    ability: 'abilities',
  }
}

export function initialize() {}
export default { initialize };
