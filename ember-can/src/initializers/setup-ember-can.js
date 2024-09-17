import Resolver from 'ember-resolver';

export default class AppResolver extends Resolver {
  pluralizedTypes = {
    ...this.pluralizedTypes,
    ability: 'abilities',
  }
}

export function initialize() {}
export default { initialize };
