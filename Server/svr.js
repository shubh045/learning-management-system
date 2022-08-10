const express = require("express") 
const app = express() 
const bodyParser = require("body-parser") 
const PORT = 3500 
app.use(express.json())
app.use(bodyParser.json()) 
const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
const Holiday= require("./models/holiday") 


const dbUrl="mongodb+srv://Admin:VIPZb498zKAImRYQ@cluster0.zvzw94r.mongodb.net/test";
const param={
  useNewUrlParser: true,
}
mongoose.connect(dbUrl, param)
  .then(() => {
    console.info("connectd to DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })


function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/holiday", async (req, res, next) => {
  try {
    const holi = await Holiday.find()
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to get list of holidays" })
  }
})

app.get("/holiday/:id", async (req, res, next) => {
  try {
    const holi = await Holiday.findById(req.params.id)
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to get list of holidays" })
  }
})

app.post("/holiday", async (req, res, next) => {
  try {
    const {
      date,
      event
    }=req.body;
    const holi=new Holiday({
      date,
      event
    });
    
    await holi.save();
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to create new holiday" })
  }
})

app.put("/holiday/:id", async (req, res, next) => {
  try {
    const holi = await Holiday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to update" })
  }
})
app.delete("/holiday/:id", async (req, res, next) => {
  try {
    await Holiday.findByIdAndRemove(req.params.id)
    return success(res, "Holiday deleted!")
  } catch (err) {
    next({ status: 400, message: "failed to delete" })
  }
})


