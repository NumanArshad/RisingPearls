/***** import primaries materials in order to build the Api code *****/
// import Google api library
var {
  google
} = require("googleapis");
// import the Google drive module in google library
var drive = google.drive("v3");
// import our private key
var key = require("./private_key.json");

// import path ° directories calls °
var path = require("path");
// import fs ° handle data in the file system °
var fs = require("fs");


/***** make the request to retrieve an authorization allowing to works
      with the Google drive web service *****/
// retrieve a JWT
var jwToken = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key, ["https://www.googleapis.com/auth/drive"],
  null
);
//console.log(key.private_key);
jwToken.authorize((authErr) => {
  if (authErr) {
    console.log("error : " + authErr);
    return;
  } else {
    console.log("Authorization accorded");
  }
});

var parents = "1ZWg0TlNX2LdRkM_6aePCIAU3R60k8CpR"
drive.files.list({

  auth: jwToken,
  //pageSize: 10,
  q: "'" + parents + "' in parents and trashed=false",
 // fields: 'files(id, name)',
}, (err, {
  data
}) => {
  if (err) return console.log('The API returned an error: ' + err);
  const files = data.files;
  if (files.length) {
    console.log('Files:'+files.length);
    files.map((file) => {
      console.log(`${file.name} ${file.filesize} (${file.id}) `);
    });
  } else {
    console.log('No files found.');
  }
});

// var folderId = "1ZWg0TlNX2LdRkM_6aePCIAU3R60k8CpR";
// var fileMetadata = {
//   'name': 'myvideo.mp4',
//   parents: [folderId]
// };
// var media = {
//   mimeType: '',
//   body: fs.createReadStream(path.join(__dirname, './Folder Access Denied_ How to delete any folder in Windows 10.mp4'))
// };

// drive.files.create({
//   auth: jwToken,
//   resource: fileMetadata,
//   media: media,
//   fields: 'id'
// }, function(err, file) {
//   if (err) {
//     // Handle error
//     console.error(err);
//   } else {
//     console.log('File Id: ', file.data.id);
//   }
// });



