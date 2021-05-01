import ReusableTable from "./ReusableTable";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleComment from "./SingleComment";

const Wrapper = styled.div`
  padding: 1rem;
`

const CommentList = () => {
  const commentsState = useSelector((state) => state.comments);
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
  ); else return null;
};

export default CommentList;