import Helper from '@ember/component/helper';
import * as s from '@ember/service';
import { g, i } from 'decorator-transforms/runtime';

const service = s.service ?? s.inject;
class CannotHelper extends Helper {
  static {
    g(this.prototype, "abilities", [service]);
  }
  #abilities = (i(this, "abilities"), void 0);
  compute([abilityString, model], properties = {}) {
    return this.abilities.cannot(abilityString ?? '', model, properties);
  }
}

export { CannotHelper as default };
//# sourceMappingURL=cannot.js.map
