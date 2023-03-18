let chat =
[
   {"id":1,"message":"hello"}, 
   {"id":2,"message":"hai"}
];


for(var i=0; i<chat.length; i++)
{
    object = chat[i];
    console.log(object.id+" : "+object.message);
}
