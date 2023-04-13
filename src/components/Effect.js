import React from "react";
import { useEffect, useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
const Content = () => {
  const tabs = ["posts", "comments", "albums"];
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  const [goToTop, setGoToTop] = useState(false);
  //   console.log(type);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + type)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
      // console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <Button
          type="primary"
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "blue",
                  backgroundColor: "#fff",
                  borderColor: "#808080",
                }
              : {}
          }
        >
          {tab}
        </Button>
      ))}
      

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body || post.title}</li>
        ))}
      </ul>

      {/* Go to top button */}
      {goToTop && (
        <button
          style={{
            position: "fixed",
            right: "50px",
            bottom: "30px",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

export const EffectView = () => {
  return (
    <React.Fragment>
      <Content></Content>
    </React.Fragment>
  );
};
