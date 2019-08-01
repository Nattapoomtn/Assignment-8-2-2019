var appRouter = function (app) {
    app.post("/api/firstfactorial/", function(req, res) {
      var num = req.body.input;
      var aws = [];
      var fac = 1
      aws.push({"input":num})
      for(i = 2; i <= num; i++)
         fac *= i;
      aws.push({"output":fac})
      res.status(200).send(aws);
    });
    app.post("/api/ristreverse/", function(req,res){
      var word = req.body.input;
      var aws = [];
      var o = '';
      aws.push({"input":word})
      for(var i = word.length -1 ; i >=0 ; i--)
        o += word[i];
      aws.push({"output":o})
      res.status(200).send(aws);
    })
    app.post("/api/alphabetsoup/", function(req,res){
        var word = req.body.input;
        var aws = [];
        aws.push({"input":word})
        var sortWord = word.split('').sort().join('');
        aws.push({"output":sortWord})
        res.status(200).send(aws);
      })
    app.post("/api/palindrome/", function(req,res){
        var word = req.body.input;
        var aws = [];
        aws.push({"input":word})
        if(word == word.split('').reverse().join('')){
            var sortWord = "true"
        }else var sortWord = "false"
        aws.push({"output":sortWord})
        res.status(200).send(aws);
      })
  }
  
  module.exports = appRouter;