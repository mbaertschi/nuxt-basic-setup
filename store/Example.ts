import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { delay } from "~/utils/helpers";
// import { $axios } from "~/utils/axios-acessor";

@Module({
  name: "Example",
  namespaced: true,
  stateFactory: true,
})
export default class Example extends VuexModule {
  public id: number | null = 1;
  public idFromAction: number | null = 1;

  @Mutation
  setId(id: number | null) {
    this.id = id;
  }

  @Mutation
  setIdFromAction(id: number | null) {
    this.idFromAction = id;
  }

  @Action
  async updateId() {
    await delay();
    // const id = await $axios.$get("/api/example/id");
    this.setIdFromAction(2);
  }
}
