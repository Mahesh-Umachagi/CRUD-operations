var MongoClient = require('mongodb').MongoClient;
var mdbo,dbo;
var url = "mongodb://localhost:27017";
MongoClient.connect(url,(err,db)=>{
    if(err){
        throw err;
    }
    mdbo=db;
    dbo=db.db("Student_Project_Management")

})

function closeConnection(){
    mdbo.close();
}
function fetchstudent(afterfetch){
    dbo.collection("student").find({}).toArray((err,result)=>{
        afterfetch(err,result);
    })
}

function fetchstudentOne(ID,afterfetch){
    dbo.collection("student").find({student_ID:ID}).toArray((err,result)=>{
        afterfetch(err,result);
    })
}

function insertstudent(data,afterfetch){
        dbo.collection("student").insertOne(data,(err,result)=>{
            afterfetch(err,result);
        })
    }
  
    function updatestudent(nm,student_name,afterfetch){
        
        dbo.collection("student").updateOne({student_ID:nm},{$set:student_name},(err,result)=>{
            afterfetch(err,result);
        })

    }

    function deletestudent(ID,afterfetch){
        dbo.collection("student").deleteOne({student_ID:ID},function(err,result){
            afterfetch(err,result);
        })
    }

exports.fetchstudent=fetchstudent;
exports.fetchstudentOne=fetchstudentOne;
exports.insertstudent=insertstudent;
exports.updatestudent=updatestudent;
exports.deletestudent=deletestudent;
exports.closeConnection=closeConnection;
