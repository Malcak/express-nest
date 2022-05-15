import { Response, Request } from "express";
import mongoose from "mongoose";
import Twitter from '../models/Twitter';

export const getTweets = (req: Request, res: Response): void => {
  Twitter.find((err: any, data: any) => {
    console.log(data);
    res.json(data);
    if (err) console.error(err);
  });
}

export const getTweet = async (req:Request, res: Response): Promise<any> => {
  const tweetId = req.params.tweetId;
  console.log('Tweet ID', tweetId);

  if (!mongoose.Types.ObjectId.isValid(tweetId)) return false;

  await Twitter.findById(tweetId).exec();

  Twitter.findById(tweetId, (err: any, tweet: any) => {
    console.log(tweet);
    res.json(tweet);
    if (err) console.error(err);
  });
}

export const postTweet = async (req: Request, res: Response) => {
  const { tweet, img } = req.body;
  const twitter = new Twitter({ tweet, img });
  const newTweet = await twitter.save();
  const message = `Tweet ${newTweet._id} Created`;
  console.log(message);
  res.status(201).json({ msg: message });
}

export const updateTweet = (req: Request, res: Response) => {
  const tweetId = req.params.tweetId;
  const { tweet, img } = req.body;

  Twitter.findByIdAndUpdate(tweetId, { tweet, img }).then(() => {
    const message = `Tweet ${tweetId} Updated`;
    console.log(message);
    res.json({msg: message});
  });
}

export const deleteTweet = (req: Request, res: Response) => {
  const tweetId = req.params.tweetId;

  Twitter.findByIdAndRemove(tweetId, () => {
    const message = `Tweet ${tweetId} Removed`;
    console.log(message);
    res.json({msg: message});
  });
}

