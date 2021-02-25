import React from 'react'
import { Container, Comment } from './styles'
import { FcLike, FcBookmark, FcShare } from 'react-icons/fc';

interface PropsCard {
  flags: string;
}

const BarComments: React.FC<PropsCard> = ({
  flags = ["1", "2", "3"],
}) => {
  return (
    <Container>
      <Comment>
        <div>
          <FcLike size={24} />
          <span> {flags[0]} </span>
        </div>

        <div>
          <FcShare size={24} />
          <span> {flags[1]} </span>
        </div>

        <div>
          <FcBookmark size={24} />
          <span>{flags[2]} </span>
        </div>

      </Comment>
    </Container>
  );
};

export default BarComments;
