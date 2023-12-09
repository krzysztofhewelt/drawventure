export const downloadImage = (dataBase64: string, name = 'rysunek.png') => {
  const downloadLink = document.createElement('a');
  downloadLink.href = dataBase64;
  downloadLink.download = name;
  downloadLink.click();
};
