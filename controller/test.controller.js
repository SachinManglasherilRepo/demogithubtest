greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'});
};


jenkin_greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Jenkin Server'});
};

test = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to test Sachin Server'});
};
module.exports = {
    greetings,
    jenkin_greetings,
    test
}