const express = require('express');
const router = express.Router();
const Article=require("../models/article")



router.get('/', async (req, res, )=> {
try {
const articles = await Article.find({}, null, {sort: {'_id': -
1}}).populate("scategorieID").exec();
res.status(200).json(articles);
} catch (error) {
res.status(404).json({ message: error.message });
}
});

// créer un nouvel article
router.post('/', async (req, res) => {
const nouvarticle = new Article(req.body)
try {
const response =await nouvarticle.save();
const articles = await
Article.findById(response._id).populate("scategorieID").exec();
res.status(200).json(articles);
} catch (error) {
res.status(404).json({ message: error.message });
}

});


module.exports=router;