const express = require('express');
const math = require('mathjs');


const app = express();

app.use(express.json());




app.get('/mean/:nums', function(req, res, next){
    try {
    let nums = req.params.nums;
    for (let num in nums){
        if (typeof num !== 'number'){
            throw new Error("Not a number", 404)
        }
    }
    let mean;
    mean = math.mean(nums);
    return res.json({operation: "mean", value: mean});
    } catch (err) {
        return next(err);
    }

});

app.get('/median/:nums', function(req, res, next){
    try {
    let nums = req.params.nums;
    for (let num in nums){
        if (typeof num !== 'number'){
            throw new Error("Not a number", 404)
        }
    }
    let median;
    median = math.median(nums);
    return res.json({operation: "median", value: median});
    } catch (err){
        return next(err);
    }
});

app.get('/mode/:nums', function(req, res, next){
    try {
    let nums = req.params.nums;
    for (let num in nums){
        if (typeof num !== 'number'){
            throw new Error("Not a number", 404)
        }
    }
    let mode;
    mode = math.mode(nums);
    return res.json({operation: "mode", value: mode})
    } catch(err) {
        return next(err);
    }
})



app.use(function(err, req, res, next){
    let status = err.status || 404;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function(){
    console.log('App on port 3000');
});