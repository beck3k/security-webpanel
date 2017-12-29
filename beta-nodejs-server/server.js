var expressjs = require("express");
var app = expressjs();
var router = expressjs.Router();
var view_path = __dirname + "/views/";

//Logger
router.use(function(req,res,next){
	console.log("/" + req.method);
	next();
});

router.get("/", function(req,res){
	res.sendFile(view_path + "dash.html");
});

app.use("/", router);

app.listen(4567, function(){
	console.log("Server Started!");
});
