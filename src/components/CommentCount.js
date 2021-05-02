import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ActionButton from "./ActionButton";

const Wrapper = styled.div`
  padding: 1rem .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentCount = () => {
  const commentsState = useSelector((state) => state.comments.data);
  const isInitialized = useSelector((state) => state.comments.isInitialized);
  const dispatch = useDispatch()
  if (isInitialized) return (
    <Wrapper>
      {commentsState.length > 0 && (
        <div>
          <strong>{commentsState.length}</strong> komentarzy
        </div>
      )}
      <ActionButton className="green" onClick={() => dispatch({ type: "newCommentForm/show"})}>Dodaj nowy</ActionButton>
    </Wrapper>
  );
  else return null
}

export default CommentCount