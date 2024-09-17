import Resolver from 'ember-resolver';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class EmberCanResolver extends Resolver {
  pluralizedTypes = {
    ...this.pluralizedTypes,
    ability: 'abilities',
  };
}

export function initialize() {}
export default { initialize };
