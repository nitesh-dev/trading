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

export function formatTimestampToExpiryTime(timestamp: number) {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  // const formattedHours = hours % 12 || 12;

  // Create the formatted time string
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}


export function formatMinutesToTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = minutes % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}