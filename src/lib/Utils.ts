import ausImg from "../assets/flags/australia.png";
import canImg from "../assets/flags/canada.png";
import japImg from "../assets/flags/japan.png";
import swiImg from "../assets/flags/switzerland.png";

export function getFlagImg(name: string) {
  if (name == "aus") return ausImg;
  if (name == "can") return canImg;
  if (name == "jap") return japImg;
  if (name == "swi") return swiImg;
  return null;
}
