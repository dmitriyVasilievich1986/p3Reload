const urlParams = new URLSearchParams(window.location.search);

export const mainCharName: string =
  urlParams.get("mainCharName") || "Protagonist";
