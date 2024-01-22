export const downloadImage = (dataBase64: string, name = 'rysunek.png') => {
  const downloadLink = document.createElement('a');
  downloadLink.href = dataBase64;
  downloadLink.download = name;
  downloadLink.click();
};

export const convertImageToBlob = (dataBase64: string) => {
  const base64Content = dataBase64.split(',')[1];
  const byteCharacters = atob(base64Content);

  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  return new Blob([byteArray], { type: 'image/png' });
};
