var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readdir('./files', { withFileTypes: true }, function (err, files) {
    res.render('index', { files });
  });
});

router.post('/rename/:oldfile', function (req, res, next) {
  fs.rename(`./files/${req.params.oldfile}`,`./files/${req.body.renamedata}`,function(err){
    res.redirect("/");
  })
});

router.get('/createfile', function (req, res, next) {
  fs.writeFile(`./files/${req.query.filedata}`, "", function (err) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.get('/createfolder', function (req, res, next) {
  fs.mkdir(`./files/${req.query.folderdata}`, function (err) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.get('/file/:filename', function (req, res, next) {
  fs.readdir("./files", { withFileTypes: true }, function (err, files) {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function (err, data) {
      res.render("fileshow", { files, data, filename: req.params.filename })
    })
  });
});

router.get('/deletefile/:filename', function (req, res, next) {
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    res.redirect("back");
  });
});


router.get('/deletefolder/:filename', function (req, res, next) {
  fs.rmdir(`./files/${req.params.filename}`, function (err) {
    res.redirect("back");
  });
});




module.exports = router;
