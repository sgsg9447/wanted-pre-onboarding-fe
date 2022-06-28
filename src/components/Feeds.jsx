import React from 'react';
import styled from 'styled-components';
import FeedMake from './FeedMake';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    async function init() {
      const { data } = await axios.get('/data/feeds.json');
      setFeeds(data.feeds);
    }
    init();
  }, []);

  const onChange = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );

  function addComment(id) {
    if (!comment) return;

    const temp = feeds;
    const { name } = JSON.parse(localStorage.getItem('user'));

    temp[id - 1].comments.push({ name, comment });

    setFeeds([...temp]);
    setComment('');
  }

  const onClick = useCallback(
    (id) => {
      addComment(id);
    },
    [feeds, comment]
  );

  const onEnter = useCallback(
    (e) => {
      console.log(e);
      if (e.key === 'Enter') addComment(id);
    },
    [feeds, comment]
  );

  return (
    <Wrap>
      {feeds &&
        feeds.map((feed) => {
          return (
            <FeedMake
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

const Wrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;
