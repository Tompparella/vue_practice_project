import { Environment } from "./environment";
import { Path } from "../api/path";

export default (imageUrl?: string) => {
  return imageUrl
    ? `${Environment.API_URL}${Path.InstitutionImage}/${imageUrl}`
    : "";
};
