import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import ExampleModule from "~/store/Example";

/* eslint-disable import/no-mutable-exports */
let exampleStore: ExampleModule;
/* eslint-enable import/no-mutable-exports */

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(ExampleModule, store);
}

export { initialiseStores, exampleStore };
