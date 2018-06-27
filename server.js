var express=require('express');

var app=express();

app.get('/api/customers',function(req,res){
  var customers=[
    {id:1,name:'unique'},
    {id:2,name:'ryan'},
    {id:3, name:'brady'}
  ];
  res.json(customers);

})

app.listen('5000',function(req,res){
  console.log('listening to port 5000');
})
