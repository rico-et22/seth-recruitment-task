import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
`

const CommentCount = () => {
  const commentsState = useSelector((state) => state.comments);
  return (
    <Wrapper>
      <div>
        <strong>{commentsState.length}</strong> komentarzy
      </div>
    </Wrapper>
  )
}

export default CommentCount