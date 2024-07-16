export function hexToRgb(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

export function hexToRgba(hex, alpha = 1) {
  hex = hex.replace("#", "");

  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    throw new Error("Alpha(% de opacidad) debe ser un número entre 0 y 1");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return rgba;
}
