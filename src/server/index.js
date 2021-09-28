var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')
const axios = require('axios')



const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'))

console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'));
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})



// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!')
})


app.post('/clouds',(req,res)=>{
    const formText = req.body.formText
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
    const API_KEY= process.env.API_KEY;
    const requestURL = `${baseURL}key=${API_KEY}&url=${formText}&lang=en`
    // console.log(requestURL)
    axios.get(requestURL)
    .then((response) =>{
        // console.log(response.data)
        res.send(response.data)
    })

})