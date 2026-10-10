import express from "express";
import cors from "cors";
import { parse } from "@babel/parser";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get(["/api", "/api/:date"], (req, res) => {
  const date = req.params.date;

  let parsedDate;
  if(date){
    if(!Number.isNaN(Number(date))){
    parsedDate = new Date(Number(date));
    }else{
      parsedDate = new Date(date);
    }
  }else{
    parsedDate = new Date();
  }


  if (Number.isNaN(parsedDate.getTime())) {
    res.json({ error: "Invalid Date" });
    return;
  }
  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  });
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
