import React, {useState, useEffect} from 'react'
import Tweet from './Tweet'

interface ITweet {
  id: number,
  title: string,
  body: string
}

function App() {
  const [tweets, setTweets] = useState<Array<ITweet>>([])

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts")
    const posts = await response.json();
    console.log(posts);
    setTweets(posts);
  }

  return(
    <div>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} title={tweet.title} body={tweet.body}></Tweet>
      ))}
    </div>
  );
}

export default App;
