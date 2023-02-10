import { Path } from "@/router";
import { useRouter } from "vue-router";

export default () => {
  console.log("Moro");
  const router = useRouter();
  if (false) {
    // If not authenticated, send user to authentication screen
    return router.push(Path.Main);
  } else {
    return router.push(Path.Authentication);
  }
};
