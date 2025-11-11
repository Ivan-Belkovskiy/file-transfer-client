export const encodeFilename = (name) => btoa(encodeURI(name));
export const decodeFilename = (name) => decodeURI(atob(name));