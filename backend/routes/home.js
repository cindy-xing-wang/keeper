const router = require('express').Router();

router.route('/').get((req,res)=>{

});

router.route('/').post((req,res) => {
    const title= req.body.title;
    const content= req.body.content;
    console.log(req.body.title);
});
module.exports = router;