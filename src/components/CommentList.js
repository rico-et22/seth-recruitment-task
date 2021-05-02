import ReusableTable from "./ReusableTable";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleComment from "./SingleComment";
import InfoMessage from './InfoMessage'

const Wrapper = styled.div`
  padding: 1rem;
`

const CommentList = () => {
  const isInitialized = useSelector((state) => state.comments.isInitialized);
  const commentsState = useSelector((state) => state.comments.data);
  if (commentsState.length > 0) return (
    <Wrapper>
      <ReusableTable>
        <thead>
          <tr>
            <th>ID komentarza</th>
            <th>ID artykułu</th>
            <th>Nazwa użytkownika</th>
            <th>E-mail użytkownika</th>
            <th>Treść</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {commentsState.map((comment, index) => {
            return (
              <SingleComment commentData={comment} key={index}/>
            );
          })}
        </tbody>
      </ReusableTable>
    </Wrapper>
  ); else if (isInitialized) return (
    <Wrapper>
      <InfoMessage status="noItems" />
    </Wrapper>
  ); else return null
};

export default CommentList;