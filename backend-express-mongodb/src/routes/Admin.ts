import { Router } from "express";
import { getTweets, getTweet, postTweet, updateTweet, deleteTweet } from "../controllers/Admin";

const router = Router();

router.get('/tweets', getTweets);
router.get('/tweets/:tweetId', getTweet);
router.post('/tweets', postTweet);
router.put('/tweets/:tweetId', updateTweet);
router.delete('/tweets/:tweetId', deleteTweet);

export default router;