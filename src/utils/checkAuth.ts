import { Path } from "@/router";
import { useRouter } from "vue-router";
import { getUserToken } from "./localStorage";

export default () => {
  const router = useRouter();
  // Placeholder
  if (getUserToken()) {
    // If not authenticated, send user to authentication screen
    return router.push(Path.Main);
  } else {
    return router.push(Path.Authentication);
  }
};
