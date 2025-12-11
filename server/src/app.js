let express = require('express');
let bodyParser = require('body-parser');

const app = express();

// ใช้ body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mock database ในหน่วยความจำ
let users = [];
let nextId = 1;

// status
app.get('/status', (req, res) => {
    res.send('Hello Node.js Server!');
});

// hello
app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person);
    res.send('say hello with ' + req.params.person);
});

// get user by id
app.get('/user/:userId', function (req, res) {
    const id = parseInt(req.params.userId);
    const user = users.find(u => u.id === id);

    if (!user) return res.send('ไม่พบผู้ใช้งาน ID: ' + id);

    res.send(user);
});

// get all users
app.get('/users', function (req, res) {
    res.send(users);
});

// create user
app.post('/user', function (req, res) {
    let newUser = {
        id: nextId++,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    };

    users.push(newUser);
    res.send('สร้างผู้ใช้งาน: ' + JSON.stringify(newUser));
});

// edit user
app.put('/user/:userId', function (req, res) {
    const id = parseInt(req.params.userId);
    let user = users.find(u => u.id === id);

    if (!user) return res.send('ไม่พบผู้ใช้งาน ID: ' + id);

    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.email = req.body.email;

    res.send('แก้ไขผู้ใช้งาน: ' + JSON.stringify(user));
});

// delete user
app.delete('/user/:userId', function (req, res) {
    const id = parseInt(req.params.userId);

    users = users.filter(u => u.id !== id);

    res.send('ลบผู้ใช้งาน ID: ' + id);
});

let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
