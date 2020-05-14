<template>
  <section>
    <div>
      Store: {{ fromStore }}
      <v-btn small @click="onButton1Click">Click Me</v-btn>
    </div>
    <div>
      Store Action: {{ fromStoreAction }}
      <v-btn small @click="onButton2Click">Click Me</v-btn>
    </div>
    <div>Composable Async: {{ fromComposableWithAsync }}</div>
    <div>Composable Context: {{ fromComposableWithContext }}</div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  computed,
  useMeta,
  withContext,
  ref,
  Ref,
} from "nuxt-composition-api";
import { fetchExample } from "~/composable/useExample";
import { exampleStore } from "~/store";

export default defineComponent({
  name: "Example",
  head: {},
  setup() {
    const fromStore = computed(() => exampleStore.id);
    const fromStoreAction = computed(() => exampleStore.idFromAction);
    const fromComposableWithAsync = useAsync(() => fetchExample());
    const fromComposableWithContext: Ref<number | null> = ref(1);

    withContext(async () => {
      fromComposableWithContext.value = await fetchExample();
    });

    function onButton1Click() {
      exampleStore.setId(2);
    }

    function onButton2Click() {
      exampleStore.updateId();
    }

    useMeta({ title: `Example ${fromComposableWithContext.value}` });

    return {
      fromStore,
      fromStoreAction,
      fromComposableWithAsync,
      fromComposableWithContext,
      onButton1Click,
      onButton2Click,
    };
  },
});
</script>
