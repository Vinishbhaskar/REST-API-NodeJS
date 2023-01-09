const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


router.post("/Students",async(req,res) => {
    
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }

})

// GET data of Stundets
router.get("/Students", async(req,res) =>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// GET by ID 
/*
app.get("/Students/:id", async(req, res) =>{
    try{
        const _id =  req.params.id;
        const studentData =  await Student.findById(_id);
        
        console.log(studentData);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
*/

// GET Student by Name 

router.get("/Students/:name", async(req, res) =>{
    try{
        const name =  req.params.name;
        const studentName =  await Student.findOne({name});
        
        console.log(studentName);

        if(!studentName){
            return res.status(404).send();
        }
        else{
            res.send(studentName);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

// Update student by ID  using PATCH (patch just modify the wrong data whereas PUT modify completely)

router.patch("/Students/:id", async(req, res) =>{
    try{
        const _id =  req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateStudents);
    }
    catch(e){
        res.status(404).send(e);
    }
})

// Delete Student Data
router.delete("/Students/:id", async(req, res) => {
    try{
        const deleteStudents = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudents);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router