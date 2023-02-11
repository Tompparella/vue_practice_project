import { Path } from "@/router";
import { useRouter } from "vue-router";

export default () => {
  console.log("Moro");
  const router = useRouter();
  if (false) {
    // Placeholder
    return router.push(Path.Main);
  } else {
    return router.push(Path.Authentication);
  }
};
