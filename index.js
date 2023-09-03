console.log("Hello world");

const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 3000;
//db
let notes=["hii"];
app.get("/", function (req, res) {
  res.json(notes);
});
app.post("/", function (req, res) {
    let note=req.body;
    console.log(note);
    notes.push(note);
  res.json({status:"success!"});
});
//api to delete a note from above array notes
app.post('/delete',function(req,res){
    let id=req.body.id;
    let note=notes.find((note)=>{
        return note.id===id;
    })
    if(note===undefined){
        return res.json({
            status:"no note found with this id"
        })
    }
    notes=notes.filter((note)=>{
        if(note.id!==id) return true;
        else return false;
    })
    return res.json({
        status:"deleted successfully"
    })
})


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

