import express from 'express'
import cors from 'cors'
const app = express()
const port = 8000
app.use(cors())
app.use(express.json())


import mongoose from 'mongoose';
const { Schema } = mongoose;

const menuSchema = new Schema({
  title: String, 
  image: String,
  desc: String,
 price:Number
});
const Deserts = mongoose.model('Desert', menuSchema);
app.get('/', async (req, res) => {
  try {
    const deserts=await Deserts.find({})
    res.json(deserts)
  } catch (error) {
    res.status(500).json(error)
  }
})
app.get('/', async (req, res) => {
    try {
      const deserts=await Deserts.find({})
      res.json(deserts)
    } catch (error) {
      res.status(500).json(error)
    }
  })

  app.get('/:id', async (req, res) => {
    try {
        const {id}=req.params
      const desert=await Deserts.findById(id)
      res.json(desert)
    } catch (error) {
      res.status(500).json(error)
    }
  })

  app.post('/', async (req, res) => {
    try {
      const deserts=new Deserts({...req.body})
      await deserts.save()
      res.status(200).json("created")
    } catch (error) {
      res.status(500).json(error)
    }
  })
  app.delete('/:id', async (req, res) => {
    try {
        const {id}=req.params
      const desert=await Deserts.findByIdAndDelete(id)
      res.status(200).json("deleted")
    } catch (error) {
      res.status(500).json(error)
    }
  })
  mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})