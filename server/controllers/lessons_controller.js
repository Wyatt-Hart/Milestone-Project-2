const express = require('express')
const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')
const Lesson = require('../models/lessons')


//Index Route?
router.get('/', (req, res) => {
    res.json({message: 'Hello World'})
});

//SEED Route
router.get('/data/seed', (req, res) => {
    Lesson.insertMany([
      {
        subject: 'Client-Server Architecture',
        title: 'Client-Server Architecture',
        image: '../images/Client-Server-Model.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
      {
        subject: 'Databases',
        title: 'Databases',
        image: '../images/DB-types.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
      {
        subject: 'React & Front-End Libraries',
        title: 'React & Front-End Libraries',
        image: '../images/reactLogo.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
      {
        subject: 'Express & Server-Side Web Frameworks',
        title: 'Express & Server-Side Web Frameworks',
        image: '../images/reactLogo.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      },
      {
        subject: 'MongoDB',
        title: 'MongoDB',
        image: '../images/reactLogo.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
      }
    ])
      .then(createdLessons => {
        res.redirect('/router')
      })
  })

  router.delete('/lessons/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/lessons')
    }
  })

module.exports = router