const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const Marks = require('../models/studentsmarks');

router.get('/', async(req, res)=>{
  try {
    const students = await Marks.find()
    res.json(students)
  } catch (e) {
    res.send('Error! = ' + e)
  }
})

router.get('/:id', async(req,res)=>{
  try {
    const student = await Marks.findById(req.params.id)
    res.json(student)
  } catch (e) {
    res.send('Error while fetching! ' + e)
  }
})

router.post('/', async(req,res)=>{
  const student = new Marks({
    name: req.body.name,
    cnslmarks: req.body.cnslmarks,
    wadlmarks: req.body.wadlmarks,
    cclmarks: req.body.cclmarks,
    dsbdalmarks: req.body.dsbdalmarks
  })
  try {
    const status = await student.save()
    res.json(status)
  } catch (e) {
    res.send("Error! " + e)
  }
})

router.patch('/:id', async(req,res)=>{
  try {
    const student = await Marks.findById(req.params.id)
    student.cnslmarks = req.body.cnslmarks
    const resp = await student.save()
    res.json(resp)
  } catch (e) {
    res.send("Error! " + e)
  }
})

module.exports = router
