
const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}))

// app.get('/', function (req, res) {
// res.send('<h1>トップページ!!</h1>')
// })

// app.get('/about', function (req, res) {
//     res.send('aboutページ')
//     });

app.post("/api/v1/quiz", function(req, res){
    const answer =  req.body.answer;
    if(answer === "2") {
        // res.send("<h1>正解</h1>")
        res.redirect("/correct.html");
    }else{
        // res.send("<h1>不正解だお")
        res.redirect("/wrong.html");
    }
    res.send(answer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Iam runnnign")
});
