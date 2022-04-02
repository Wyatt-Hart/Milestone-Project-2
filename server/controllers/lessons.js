const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

//Add lesson
router.post('/', (req, res) => {
    db.Lessons.create(req.body)
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors) {
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
            }
        })
})

//Edit lesson
router.get('/:id/edit', (req, res) => {
    db.Lessons.findById(req.params.id)
        .then(lesson => res.json(lesson))
        .catch( err => {
            console.log(err)
        })
})
router.put('/:id', (req,res) => {
    db.Lessons.findByIdAndUpdate(req.params.id, req.body)
    .catch( err => {
        console.log('err', err)
    })
})

//View Lesson
router.get('/:id', (req, res) => {
    db.Lessons.findById(req.params.id)
        .catch( err => {
            console.log('err', err)
        })
})

//Delete Lesson
router.delete('/:id', (req, res) => {
    db.Lessons.findByIdAndDelete(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                message: `Cannot delete Lesson with id=${id}. Maybe Lesson was not found!`
          });} 
            else {
                res.send({
                message: "Lesson was deleted successfully!"
          });
        }
      })
        .catch( err => {
            console.log('err', err)
        })
})

// router.delete('/lessons/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/lessons')
//     }
//   })


router.get('/', (req, res) => {
    db.Lessons.find()
        .then((lessons) => {
            res.json(lessons)
        })
        .catch(err => {
            console.log(err)
        })
})



module.exports = router