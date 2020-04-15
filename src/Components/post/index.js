import React, { useState } from "react";
import like from "./images/like.png";
import comment from "./images/comment.png";
import repost from "./images/repost.png";
import save from "./images/save.png";
import "./main.css";

function Post(props) {
  const [countLike, setCountLike] = useState(254);
  const [countComment, setCountComment] = useState(73);
  const [countRepost, setCountRepost] = useState(36);
  const [countSave, setCountSave] = useState(18);
  const { photo, name, nickname, date, content, image } = props;
  return (
    <div class="post">
      <div class="mainInfAutor">
        <div id="photo">
          <img alt="author_photo" src={photo} />
        </div>
        <div class="author">
          <span id="name">{name}</span>
          <span id="nickname">☑ {nickname} • </span>
          <span id="data">{date}</span>
          <br />
          <span id="msg">{content} </span>
        </div>
      </div>
      <div class="imgPost">
        <img src={image} alt="post" />
      </div>
      <div class="icons">
        <img
          id="like"
          alt="like"
          src={like}
          onClick={() => setCountLike(countLike + 1)}
        />
        <span>{countLike}</span>
        <img
          id="comment"
          alt="comment"
          src={comment}
          onClick={() => setCountComment(countComment + 1)}
        />
        <span>{countComment}</span>
        <img
          id="repost"
          alt="repost"
          src={repost}
          onClick={() => setCountRepost(countRepost + 1)}
        />
        <span>{countRepost}</span>
        <img
          id="save"
          alt="save"
          src={save}
          onClick={() => setCountSave(countSave + 1)}
        />
        <span>{countSave}</span>
      </div>
    </div>
  );
}

export default Post;
