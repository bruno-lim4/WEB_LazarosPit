import express from 'express';

const router = express.Router();

const route = router.get('/', (req, res) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

export default router;
