//creating the server
const express = require("express");
const cors = require("cors");
var http = require("http");
var fs = require("fs");

//create express application
const app = express();
app.use(cors());
app.use(express.json());

//create get route
// app.get('/message', (req,res)=>{
//     res.json({message: "Hello from bhavya"});
// });

// app.get("/", (req, res) => {
//     const ans = readFile();
//     console.log(ans);
//     res.json(ans);
//     // res.json({message: "Hello from bhavya"});
// });

// app.get("/readFile", (req, res) => {
//     const ans = readFile();
//     console.log(ans);
//     res.json(ans);
// });

// app.get("/appendFile", (req, res) => {
//     const ans = appendFile();
//     console.log(ans);
//     res.json(ans);
// });

// app.get("/writeFile", (req, res) => {
//     const ans = writeFile();
//     console.log(ans);
//     res.json(ans);
// });

// app.get("/deleteFile", (req, res) => {
//     const ans = deleteFile();
//     console.log(ans);
//     res.json(ans);
// });

app.get("/createfolder", async (req, res) => {
  const path = "" + req.query.foldername;
  try {
    if (!fs.existsSync(path)) {
      const ans = fs.mkdirSync(path);
      res.status(200).send({ message: "ok folder created succesfully", ans });
    } else {
      res.status(400).send("folder alredy exist");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("folder alredy exist");
  }
});

app.get("/createfile", async (req, res) => {
  const path = "trying/" + req.query.filename;
  try {
    if (!fs.existsSync(path)) {
      const ans = fs.createWriteStream(path);
      res.status(200).send({ message: "ok file created succesfully", ans });
    } else {
      res.status(400).send("file alredy exist");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("file alredy exist");
  }
});

app.get("/writeData", (req, res) => {
  const path = "trying/abc.txt";
  const data = req.query.writedata;
  // console.log(data)
  try {
    const ans = fs.writeFileSync(path, data);
    res.status(200).send({ message: "data is inserted", ans });
  } catch (err) {
    console.log(err);
    res.status(400).send("there is a problem");
  }
});

app.get("/appenddata", async (req, res) => {
  const path = "trying/abc.txt";
  const data = req.query.appenddata;
  console.log(data);
  try {
    if (!fs.existsSync(path)) {
      console.log("file is not exist");
    } else {
      const ans = await fs.appendFileSync(path, data);
      res.status(200).send({ message: "data is append", ans });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("there is a problem");
  }
});

app.get("/readFile", async (req, res) => {
  const path = "trying/abc.txt";
  try {
    const ans = await fs.readFileSync(path, { encoding: "utf-8", flag: "r" });
    res.status(200).send({ message: "ok file read succesfully", ans });
  } catch (error) {
    console.log(err);
    res.status(400).send("file is not exist");
  }
});

app.get("/deleteFile", async (req, res) => {
  const path = "trying/abc.txt";
  try {
    const ans = await fs.unlink(path, (err) => {
      console.log(err);
    });
    res.status(200).send({ message: "file is deleted", ans });
  } catch (error) {
    console.log(err);
    res.status(400).send("there is problem");
  }
});

app.get("/display", async (req, res) => {
  const path = req.query.filename;

  try {
    fs.readdir(path, (err, file) => {
      if (err) {
        res.send(err);
      }
      res.send(file);
    });
  } catch (er) {
    console.log(er);
  }
});

//start server
app.listen(7001, () => {
  console.log(`server is running on port 7001.`);
});

// function readfile
// function readFile() {
//     try {
//         const data = fs.readFileSync("demo.txt", "utf-8");
//         console.log(data);
//         return data;
//     }
//     catch (error) {
//         console.log(err);
//     }
// }

// function appendFile
// function appendFile() {
//     try {
//         const data = fs.appendFileSync("demo.txt", " Hello  this is append File", function (err) {
//             console.log("saved!");
//             return data;
//         });
//     }
//     catch (error) {
//         console.log(err);
//     }
// }

// function writeFile
// function writeFile() {
//     try {
//         const data = fs.writeFile("demo.txt", " Hello  this is write File", function (err) {
//             console.log("saved!");
//             return data;
//         });
//     }
//     catch (error) {
//         console.log(err);
//     }
// }

// function deleteFile
// function deleteFile() {
//     try {
//         const data = fs.unlink("demo.txt", function (err) {
//             console.log("File deleted!");
//             return data;
//         });
//     }
//     catch (error) {
//         console.log(err);
//     }
// }
