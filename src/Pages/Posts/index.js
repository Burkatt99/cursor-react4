import React from "react";
import Post from "../../Components/post";
import "../../Components/post/main.css";
import author from "../../assets/images/author-min.jpg";
import imagePost from "../../assets/images/po.png";
import imageDog from "../../assets/images/dog.png";
import books from "../../assets/images/books-min.jpg";
import hobby from "../../assets/images/pazzle-min.jpg";
import "./style.css";

function Posts() {
  const PHOTHO_AUTHOR = author;
  const POST_IMAGE = imagePost;
  return (
    <div className="postBlock">
      <Post
        name="Bura Tetiana"
        photo={PHOTHO_AUTHOR}
        nickname="@burkatt99"
        content="I dream so much about this little miracle &#128525;&#128525;&#128525; This sweet puppy deserves your likes!"
        image={imageDog}
        date={"15 april"}
      />
      <Post
        name="Bura Tetiana"
        photo={PHOTHO_AUTHOR}
        nickname="@burkatt99"
        content="I love reading detectives. And what do you choose? Is adventure, fantasy, horror, or maybe something romantic?"
        image={books}
        date={"3 april"}
      />
      <Post
        name="Bura Tetiana"
        photo={PHOTHO_AUTHOR}
        nickname="@burkatt99"
        content="During quarantine, everyone opens new hobbies. I started to make the second picture, and you??"
        image={hobby}
        date={"26 march"}
      />
      <Post
        name="Bura Tetiana"
        photo={PHOTHO_AUTHOR}
        nickname="@burkatt99"
        content="I found new cool courses from Cursor. I hope that by the end of my studies I will become a real programmer!"
        image={POST_IMAGE}
        date={"12 march"}
      />
    </div>
  );
}

export default Posts;
