const router = require('express').Router();

let Exercise = require('../Models/exerciseSchema');

router.get('/getAllExercise' , (req, res) => {
    Exercise.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.get("/getExerciseId/:id" , (req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json("Exercise : " + exercise))
    .catch(err => res.status(400).json(`Exersice Not Found+ ${err}`))
})  


router.post('/addExercise' , (req,res) => {
    let exerciseobj = new Exercise     ({
        username : req.body.username,
        description: req.body.description,
        duration:    req.body.duration,
        date:        req.body.date,
   })
   exerciseobj.save()
    .then(() => {res.json('exercise added!');console.log("exercise Added")})
    .catch(err => res.status(400).json('Error Couldnt Find: ' + err));
})


router.post("/updateExercise/:id" , (req,res)=>{
    Exercise.findByIdAndUpdate(req.params.id)
    .then( (exercise)=>{
        exercise.username    = req.body.username;
        exercise.description = req.body.description;
        exercise.duration    = req.body.duration;
        exercise.date        = req.body.date;
        exercise.save()
        .then(()=>{ res.json(`updated Sucessfully`); console.log(`updated Sucessfully`)})
        .catch((err)=>{ res.status(400).json(`Couldnt update + ${err}`); console.log(`Couldnt update + ${err}`)})
    })
    .catch(err=>{ res.status(400).json(`Error Couldnt Find + ${err}`); console.log(`Error Couldnt Find + ${err}`)})
})


router.delete("/deleteExerciseId/:id" , (req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json("Exercise Deleted" + req.params.id))
    .catch(err => res.status(400).json(`Couldnt Delete Exersice + ${err}`))
})  

router.delete("/deleteAllExercise" , (req,res)=>{
    Exercise.deleteMany()
    .then(exercise => res.json("All Exercises Deleted"))
    .catch(err => res.status(400).json(`Couldnt Delete All Exersices + ${err}`))
}) 

module.exports = router;
