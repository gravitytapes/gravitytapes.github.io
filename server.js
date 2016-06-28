var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res){
	res.sendFile('index.html', {root: './'})
})

// ***** NODEMAILER *****

app.post('/api/send', function(req, res){
	console.log(req.body)
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			
		} 
	});

	var mailOptions = {
	    from: 'Gravity Tapes Site 👥 <gravitytapes@gmail.com>', 
	    to: 'gravitytapes@gmail.com', 
	    subject: 'Message from Gravity Tapes site', 
	    text: 'You have a new email submitted through the GT website. Here are the deets, you damn dirty apes! From: ' + req.body.name + 'Email: ' + req.body.address + 'Subject: ' + req.body.subject + 'Message: ' + req.body.message,
	    html: '<p>You have a new email submitted through the GT website. Here are the deets, you damn dirty apes!</p><ul><li>From: ' + req.body.name + '</li><li>Email: ' + req.body.address + '</li><li>Subject: ' + req.body.subject + '</li><li>Message: ' + req.body.message + '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(err, info){
	    if(err){
	        console.log(err);
	        res.send(err)
	    } else {
	    	console.log('Message Sent: ' + info.response)
	    	res.send(info)
	    }
	});
});

var port = 3000
app.listen(port, function(){
	console.log("Running on port:", port)
})


