let chat =
[
   {"id":1,"message":"hello"}, 
   {"id":2,"message":"hai"},
   {"id":3,"message":"hey"}
];


for(let key in chat)
{
   let obj= chat[key];
    console.log(obj.id+" : "+obj.message);
}
