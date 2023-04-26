const config = require('./config')[process.env.NODE_ENV]; 
const express = require('express');
const http = require('http');

const app = express();
const port = config.PORT;
// const router = express.Router();
const cors = require('cors');

let corsOptions = {
    origin: '*', 
    Credential: true,
}

app.use(cors(corsOptions));

// body parser
app.use(express.json());
app.use(express.urlencoded({extended : true }));

// const todoRouter = require('./api/todo');
// app.use('/api',todoRouter);

const autoRoute = require('./autoRoute');
autoRoute('/api', app)

const webServer = http.createServer(app);
webServer.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})