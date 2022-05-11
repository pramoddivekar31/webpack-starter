const express = require('express')
const router = express.Router()

router.route('/getbooks').get((req, res) =>{
    res.json({msg: 'Books data from get API'})
})

module.exports = router