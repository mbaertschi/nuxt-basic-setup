import { useContext } from "nuxt-composition-api";
import { delay } from "~/utils/helpers";

export async function fetchExample() {
  const context = useContext();

  try {
    // return context.$axios.$get("/api/example")
    await delay();
    return 2;
  } catch (error) {
    context.error(error);
    return 0;
  }
}
