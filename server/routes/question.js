import express from 'express'

const app = express.Router()

const question = {
    _id:1,
    title: 'Como reutilizo un component en android',
    description: 'Miren esta es mi pregunta',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
        firstName: 'Francisco',
        lastName: 'Campos',
        email: 'hey@francampos.me',
        password: '1234567'
    }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/',(req,res) => res.status(200).json(questions))

// /api/question/:id
app.get('/:id', (req,res)=> res.status(200).json(question))
export default app