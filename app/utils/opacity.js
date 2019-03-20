export default function opacity(color, value) {
  return `${color}${Number(Math.floor(value * 255))
    .toString(16)
    .padStart(2, "0")}`;
}
