const express= require('express');
const  cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

    app.use(cors());
    app.use(express.json())

app.get('/', (req,res) => {
    res.send('woow! it is working , leaning node amd express hello from second server. it s amaaizing ')
})

const  users =[
    {id: 0,name: 'rakib', email: 'hddos@gmail.com'},
    {id: 1,name: 'sakib', email: 'hi@gmail.com'},
    {id: 2,name: 'jamil', email: 'fafa@gmail.com'},
    {id: 3,name: 'dude', email: 'hel@gmail.com'},
    {id: 4,name: 'dude', email: 'he@gmail.com'},
    {id: 5,name: 'noor', email: 'hd@gmail.com'},
    {id: 6,name: 'sasd', email: 'hellos'},
    {id: 7,name: 'ramij', email: 'he00@gmail.com'},
]


app.get('/users', (req,res) =>{
    const search =req.query.search;
    // console.log(req.query.search)
    if(search){
        const searchResult = users.filter( user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user= users[id];
    res.send(user);
})


// app.METHOED
app.post('/users', (req, res) => {
    const newUser= req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('post hitted', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

    app.get('/fruits', (req,res)=>{
        res.send(['mango', 'banana'])
    })

app.get('/dhaka/shahbag/zia', (req,res)=> {
    res.send('he lives in dhaka')
})

app.listen(port, () => {
    console.log('lisenting to port 5000')
})