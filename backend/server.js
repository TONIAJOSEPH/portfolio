const express = require("express");
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose=require("mongoose")
const { Schema } = mongoose;


app.use(cors())
app.use(express.json())
app.use(bodyparser.json())

const url= "mongodb+srv://toniajoseph2013:RUEDvb3DkE4bizsh@cluster0.iudix.mongodb.net/users"

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String, 
  },
  message: {
    type: String,  
  },
});

const User = mongoose.model("User", userSchema);


app.post("/api/senddata", async(req, res) => {
    console.log(req.body)
    const user=new User(req.body)
    const result = await user.save(); // Save to MongoDB
    console.log('User saved:', result);
    res.send("hello world");
})

const port = 5000;

app.listen(port, () => {
    console.log(`server listening at port : ${port}`);
})