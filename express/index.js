var express = require("express");
var bodyparse = require("body-parser");
var cors = require("cors");
var db = require("./dbmodules");
var api = express();
api.use(bodyparse.json())
api.use(bodyparse.urlencoded({
    extended: true
}));
api.use(cors())
api.get("/student", (request, response) => {
    db.fetchstudent(function (err, result) {
        if (err) {
            result = {
                "error": "No Records Found"

            }
            response.statusCode = 404;
        } else {

            response.statusCode = 200;
        }
        response.send(JSON.stringify(result));
        response.end();

    })
})

api.get("/student/:student_ID", (request, response) => {
    var student_ID = parseInt(request.params.student_ID);
    db.fetchstudentOne(student_ID, function (err, result) {
        if (err) {
            result = {
                "error": "No Records Found"
            }
            response.statusCode = 404;
        } else {

            response.statusCode = 200;
        }
        response.send(JSON.stringify(result));
        response.end();

    })
})



api.post("/student", (request, response) => {
    var data = request.body;
    db.insertstudent(data, function (err, result) {
        if (err) {
            result = {
                "error": "No Records Found"
            }
            response.statusCode = 404;
        } else {

            response.statusCode = 200;
        }
        response.send(JSON.stringify(result));
        response.end();

    })
})

api.put('/student/:student_ID', (request, response) => {
    var student_ID = parseInt(request.params.student_ID);
    var student_name = request.body;
    db.updatestudent(student_ID, student_name, function (err, result) {
        if (err) {
            result = {
                "error": "No Records Found"
            }
            response.statusCode = 404;
        } else {

            response.statusCode = 200;
        }
        response.send(JSON.stringify(result));
        response.end();

    })
})


api.delete("/student/:student_ID", (request, response) => {
    var student_ID = parseInt(request.params.student_ID);
    db.deletestudent(student_ID, function (err, result) {
        if (err) {
            result = {
                "error": "No Records Found"
            }
            response.statusCode = 404;
        } else {

            response.statusCode = 200;
        }
        response.send(JSON.stringify(result));
        response.end();

    })
})


api.listen(3000, console.log("waiting at 3000....."))