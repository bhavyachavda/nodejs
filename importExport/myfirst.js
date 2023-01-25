// var http = require('http');
// var dt = require('./myfirstmodule');

const { writeFile, appendFile } = require("fs");

// http.createServer(function(req,res)
// {
//     res.write("Current date and time is " + dt.myDateTime());
//     res.end("Hello bhavya");
// }).listen(8080);

// var buf = Buffer.from('bhavya');
// var buf1 = Buffer.from('abc');
// console.log(buf1);
// console.log(buf);

// var fs = require('fs');

// fs.readFile('demofile.txt','utf-8',function(err,data)
// {
//     if(err) throw err;
//     console.log(data);
// });

// var http = require('http');
// http.createServer(function(req,res){
//     // res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write("Hello bhavya");
//     res.end();
// }).listen(8080);

// var os = require('os');
// console.log("Platform: "+ os.platform());
// console.log("Architecture: " + os.arch());

// var util = require('util');
// var txt = 'congrulate %s on his %dth birthday!';
// var result = util.format(txt, 'Aman', 22);
// console.log(result);

// var http = require('http');
// var url = require('url');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     var q = url.parse(req.url,true);
//     res.write(q.href);
//     res.write("Hello");
//     res.end();
// }).listen(8080);


// Read Files

// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res)
// {
//     fs.readFile('demofile1.html',function(err,data)
//     {
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);


// Create Files
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt','Hello content! this is create file',function(err)
// {
//     if(err) throw err;
//     console.log('Saved!');
// });

//open file
// var fs = require('fs');
// fs.open('mynewfile2.txt','w', function(err,file)
// {
//     if (err) throw err;
//     console.log('Saved!');
// });

//Write file
// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello Content this is write file',function(err)
// {
//     if(err) throw err;
//     console.log('Saved!');
// });

// Update Files
// appendFile
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt',' This my text',function(err)
// {
//     if(err) throw err;
//     console.log('Updated!');
// });


// writeFile
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// Delete Files
// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function(err)
// {
//     if(err) throw err;
//     console.log('File deleted');
// });

// Rename Files
// var fs = require('fs');

// fs.rename('mynewfile1.txt','myrenamedfile.txt', function(err)
// {
//     if (err) throw err;
//     console.log('File Renamed');
// });