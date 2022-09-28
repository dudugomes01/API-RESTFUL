const router = require('express').Router()

router.get('/clientes', (req,res)=>{
    res.send({
        Ok:123
    })
})
module.exports = router