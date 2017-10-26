var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');


module.exports = {

    // login: function (req, res) {
	// 	//console.log("in login", req.body)
    //     Poll.findOne({name: req.body.name}, (err, user) => {
	// 		//console.log(user)
	// 		if(err){
    //             //console.log("err")
	// 			return res.status(401).json(err)
	// 		}
	// 		else if(user){
    //             //console.log("find")
	// 			//req.session.user = user
	// 			res.json(user)
	// 		}
	// 		else{
	// 			console.log("save")
	// 			//console.log(req.body.username)
	// 			let user = new Poll(req.body);
	// 			user.save(function (err, aNote) {
    //             if(err) {
    //                 res.json (err);
    //                console.log("NOT saved")
    //                 return;
    //             }
    //                console.log("saved")
    //             res.json(aNote);
    //         })
			
	// 		}
	// 	})
    // },
    
    createQuestion:function (req, res) {
		console.log("in login", req.body)
        var job = new Poll(req.body);
        job.save(function (err, aNote) {
            if(err) {
                res.json (err);
                return;
            }
            res.json(aNote);
        });
    },


    showQuestions: function(req, res) {
        Poll.find({}, function(err, items) {
            if(err) {
                console.log("didn't get item data");
                // res.send('did not work');
            } else {
                console.log("got item data");
               // console.log("this is the user seesion",req.session);
                res.json(items);
            }
        })
    },


    delete: function(req, res) {
        //console.log("ID", req.params.id);
        Poll.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log('something went wrong deleting a item');
                console.log(err.errors);
                // res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a item!');
                res.json(true);
            }
        })
    },

    showOne: function(req, res) {
        //console.log("item id-----"+"ObjectId('"+req.params.id+"')")
       
            Poll.findOne({_id:req.params.id}, function(err, item) {
            if(err) {
                console.log("didn't get item data");
                // res.send('can not show item');
            } else {
                console.log("got item data", item);
                res.json(item);
            }
        })
    },
	
	
}
