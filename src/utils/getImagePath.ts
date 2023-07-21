import { Environment } from "./environment";
import { Path } from "../api/path";

export const getInstitutionImagePath = (imageUrl?: string) => {
  return imageUrl
    ? `${Environment.API_URL}${Path.InstitutionImage}/${imageUrl}`
    : "";
};

export const getTagImagePath = (imageUrl?: string) => {
  return imageUrl ? `${Environment.API_URL}${Path.TagImage}/${imageUrl}` : "";
};
