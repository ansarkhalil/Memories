import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    res.send('It totally works !!')
});

export default router;