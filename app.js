const express = require('express')
const BodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3000

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => 
    res.json({
        status: 'success',
        data: {
            recipe: ['recipe1', 'recipe2']
        }
    })
)

app.post('/add-recipe', (req, res) => 
    res.send(req.body)
)

app.get('/recipe/:recipe_id', (req, res) => 
    res.json({
        status: 'success',
        message: `You requested for recipe ${req.params.recipe_id}`
    })
)

app.put('/recipe/:recipe_id', (req, res) => 
    res.json({
        status: 'success',
        message: `You updated recipe ${req.params.recipe_id}`
    })
)

app.delete('/recipe/:recipe_id', (req, res) => 
    res.json({
        status: 'success',
        message: `You deleted recipe ${req.params.recipe_id}`
    })
)

app.listen(port, () => 
    console.log(`App server started on port: ${port}`)
)