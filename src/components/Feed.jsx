import React from 'react';
import styled from 'styled-components';
import useFeeds from '../customhook/useFeeds';
import { BsCircleFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { BiPaperPlane } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';

const Wrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;

const ContentWrap = styled.div`
  margin: 15px 0;
  background-color: white;
  .header {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    svg {
      font-size: 30px;
      color: #a5a5a5;
    }
    > * {
      &:nth-of-type(2) {
        margin-left: 10px;
      }
      &:last-of-type {
        margin-left: auto;
      }
    }
  }
  .imgWrap {
    max-width: 420px;
    height: 420px;
    text-align: center;
    background-color: #dbdbdb;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .subHeader {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 22px;
    svg {
      margin-right: 5px;
    }
    > * {
      &:last-of-type {
        margin-left: auto;
      }
    }
  }
  .like {
    margin: 15px 5px;
    font-size: 13px;
    font-weight: bold;
  }
  .comment {
    margin: 30px 5px;
    font-size: 13px;
    font-weight: bold;
    p {
      margin: 5px 0;
    }
  }
  .commentInput {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-top: 1px solid #dbdbdb;
    input {
      width: 320px;
      margin-left: 10px;
      &::placeholder {
        font-weight: bold;
      }
    }
    > * {
      &:last-of-type {
        margin-left: auto;
        button {
          background-color: white;
          font-size: 15px;
          font-weight: bold;
          color: #4ec2f8;
        }
      }
    }
  }
`;

function FeedItem({ feed, comment, onChange, onClick, onEnter }) {
  const { id, name, img, comments } = feed;

  return (
    <ContentWrap>
      <div>
        <ul className="header">
          <li>
            <BsCircleFill />
          </li>
          <li>{name}</li>
          <li>
            <BiDotsHorizontalRounded />
          </li>
        </ul>
        <div className="imgWrap">
          <img src={img} alt="image" loading="lazy" />
        </div>
        <ul className="subHeader">
          <li>
            <IoMdHeartEmpty />
          </li>
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <BiPaperPlane />
          </li>
          <li>
            <BsBookmark />
          </li>
        </ul>
        <div className="like">좋아요 0개</div>
        <div className="comment">
          {comments &&
            comments.map((data, index) => {
              return (
                <p key={index}>
                  {data.name}&nbsp;&nbsp;{data.comment}
                </p>
              );
            })}
        </div>
        <ul className="commentInput">
          <li>
            <BsEmojiSmile />
          </li>
          <li>
            <input
              name="comment"
              placeholder="댓글달기..."
              onChange={onChange}
              value={comment}
            ></input>
          </li>
          <li tabIndex="1" onKeyDown={onEnter}>
            <button onClick={() => onClick(id)}>게시</button>
          </li>
        </ul>
      </div>
    </ContentWrap>
  );
}

function Feeds() {
  const { feeds, comment, onChange, onClick, onEnter } = useFeeds();

  return (
    <Wrap>
      {feeds &&
        feeds.map((feed) => {
          return (
            <FeedItem
              feed={feed}
              comment={comment}
              onChange={onChange}
              onClick={onClick}
              onEnter={onEnter}
              key={feed.id}
            />
          );
        })}
    </Wrap>
  );
}

export default Feeds;
