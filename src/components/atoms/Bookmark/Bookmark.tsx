import React from 'react';
import { BookmarkBackground } from './StyledComponents';
import { BookmarkIcon } from '../../../icons/Icons'; 

interface Props {
  size: "small"|"medium"
}

const Bookmark: React.FC<Props> = ({size}) => {
  return (
    <BookmarkBackground small={size === "small"} medium={size === "medium"}>
      <BookmarkIcon />
    </BookmarkBackground>
  );
};

export default Bookmark;
