const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  //uuid prefix add kiya 
  // Extract link and get file from storage send download stream
  const file = await File.findOne({ uuid: req.params.uuid }); // if uuid is equal to hamari uuid(jo params mein likhi hai) toh file humein dedo
  // Link expired
  if (!file) {
    return res.render("download", { error: "Link has been expired." });
  }
  const response = await file.save();
  const filePath = `${__dirname}/../${file.path}`; // toh router wale folder se bahar nikla, aur updloads mein gaya, (file ki respective path)
  res.download(filePath); //it was that easy express se download krna
});

module.exports = router;
