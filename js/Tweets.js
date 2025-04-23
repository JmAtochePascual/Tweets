class Tweets {

  constructor() {
    this.tweets = JSON.parse(localStorage.getItem('tweets')) || [];
  };

  addTweet(tweet) {
    this.tweets = [...this.tweets, tweet];
  };

  removeTweet(id) {
    this.tweets = this.tweets.filter(tweet => tweet.id !== id);
  };
};

export default Tweets;