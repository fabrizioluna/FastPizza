export const changeFilename = (req, file, callback) => {
  callback(null, `IMG-${Date.now()}${file.originalname}`);
};
