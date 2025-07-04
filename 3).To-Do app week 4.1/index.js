const express = require("express")
const app = express()

let todos = {
    1: {
        todos:[]
    },
    2:{

    todos:[]
    }
}
// store the data in a file, foundationn for databases
// add user logic
app.post('/',function (req, res) {
    // create a random id for the todo
    // extract the todo title from the body
    todos.push({
            title,
            id
    })
})

app.delete('/',function(req,res){
    todos.delete({
        // extract the todo id
        // remove the todo from here
    })
})

app.get('/',function(req,res){
       res.json({
        todos
    })
})

app.listen(3000);  // which port 