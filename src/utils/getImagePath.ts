import { Environment } from "./environment";
import { Path } from "../api/path";

export const getInstitutionImagePath = (url?: string) => {
  return url ? `${Environment.API_URL}${Path.InstitutionImage}/${url}` : "";
};

export const getTagImagePath = (url?: string) => {
  return url ? `${Environment.API_URL}${Path.TagImage}/${url}` : "";
};

export const getContentImagePath = (url?: string) => {
  return url ? `${Environment.API_URL}${Path.ContentImage}/${url}` : "";
};

export const getContentClipPath = (url?: string) => {
  return url ? `${Environment.API_URL}${Path.ContentClip}/${url}` : "";
};
