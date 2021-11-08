const Router = require('express')

const paths = require('../config/paths')
const strings = require('../config/strings')

const router = Router()

router.get(paths.test_network, (req, res) => {
    res.json({
        'Shiba': 'Invest'
    })
    res.end()
})

module.exports = router