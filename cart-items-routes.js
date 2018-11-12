const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send([{ id: '100', product: 'Lotion', price: '$2.00', quantity: '1'}
    ])
});

router.post("/", (req, res) => {
    if(req.body){
        res.status(201).send(req.body);
        } else {
            res.sendStatus(400);
        }
    });

router.put("/:id", (req, res) => {
        res.send(`Updated items with ${req.params.id}`);
    });

    router.delete("/:id", (req, res) => {
        res.send(`Deleted items with ${req.params.id}`);
    });
    
module.exports = router;