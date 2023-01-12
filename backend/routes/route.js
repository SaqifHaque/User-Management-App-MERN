import express from "express";

const router = express.Router();

router.post('/add', (data) => {
    console.log('hello');
})

export default router;