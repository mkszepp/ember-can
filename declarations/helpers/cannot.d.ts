import Helper from '@ember/component/helper';
import type Ability from '../services/abilities.ts';
interface CannotSignature {
    Args: {
        Positional: never[];
        Named: Record<string, unknown>;
    };
    Return: boolean;
}
export default class CannotHelper extends Helper<CannotSignature> {
    abilities: Ability;
    compute([abilityString, model]: CannotSignature['Args']['Positional'], properties?: CannotSignature['Args']['Named']): boolean;
}
export {};
//# sourceMappingURL=cannot.d.ts.map