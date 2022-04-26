export const getSize = (siz) => {
  if (siz >> 30 > 1) {
    let temp = Math.round((siz / Math.pow(2, 30)) * 100) / 100;
    return [temp, "Gb"];
  } else if (siz >> 20 > 0) {
    let temp = Math.round((siz / Math.pow(2, 20)) * 100) / 100;
    return [temp, "Mb"];
  } else if (siz >> 10 > 0) {
    let temp = Math.round((siz / Math.pow(2, 10)) * 100) / 100;
    return [temp, "Kb"];
  } else {
    return [siz, "Bytes"];
  }
};

export const copyText = async (text) => {
  await navigator.clipboard.writeText(text);
};
