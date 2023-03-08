import { login, type LoginData } from "@/api";
import { Path } from "@/router";
import { useDisplayStore } from "@/stores/displayStore";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";

export const useLoginMutation = () => {
  const displayStore = useDisplayStore();
  const router = useRouter();
  const mutation = useMutation((data: LoginData) => login(data), {
    onMutate: () => {
      console.log("Mutating");
      displayStore.setLoading(true);
    },
    onSettled: () => {
      displayStore.setLoading(false);
    },
    onSuccess: (data) => {
      console.debug(data);
      alert("Authentication successfull!");
      router.push(Path.Main);
    },
    onError: (e) => {
      // Display error in display box
    },
  });
  return mutation;
};
