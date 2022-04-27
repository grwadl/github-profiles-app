const { Router } = require('express');
const router = Router();
const Searched = require('../models/Searched');

router.post('/add', async (req, res) => {
    try {
        const { userId, searchedLogin } = req.body;
        const isUsed = await Searched.findOne({ owner: searchedLogin });
        if (isUsed)
        {
            await Searched.findOneAndUpdate({ owner: searchedLogin }, { date: new Date() });
            return res.status(200).json({ message: 'search updated' });
            }
        const search = new Searched({ author: userId, owner: searchedLogin, date: new Date() });
        await search.save();
        return res.status(200).json({ message: 'search added' });
    }
    catch (e) {
        console.log(e);
    }
});
router.get('/gain', async (req, res) => {
    try {
        const { userId } = req.query;
        const searches = await Searched.find({ author: userId }).sort({date:1});
        return res.json(searches);
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = router;