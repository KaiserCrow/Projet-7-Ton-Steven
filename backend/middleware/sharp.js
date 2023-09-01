const sharp = require("sharp");
const path = require("path");

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const outputImagePath = path.join(
    __dirname,
    "..",
    "images",
    "resized_" + req.file.filename
  );

  sharp(req.file.path)
    .resize(800, 800, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .toFile(outputImagePath, (err, info) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erreur lors du traitement de l'image." });
      }
      next();
    });
};
