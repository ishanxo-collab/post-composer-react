import { useState } from "react";
import "./App.css";

function App() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platform === "Twitter" ? 280 : 3000;

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    setPost("");
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const isExceeded = post.length > limit;

  return (
    <div className="container">
      <div className="composer">
        <h1>Post Composer</h1>

        <label htmlFor="platform">Select Platform</label>
        <select
          id="platform"
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label htmlFor="post">Write Your Post</label>
        <textarea
          id="post"
          value={post}
          onChange={handlePostChange}
          placeholder={`Write your ${platform} post...`}
        />

        <div className="count">
          Characters: {post.length} / {limit}
        </div>

        {isExceeded && (
          <p className="error">
            Your post exceeds the {limit} character limit for {platform}.
          </p>
        )}

        {!isExceeded && post.length > 0 && (
          <p className="success">
            Your post is within the character limit.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;