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
    res.send('add')
)

app.listen(port, () => 
    console.log(`App server started on port: ${port}`)
)