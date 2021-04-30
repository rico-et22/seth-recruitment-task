import ReusableTable from "./ReusableTable";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
            <th>ID artykułu</th>
            <th>ID komentarza</th>
            <th>Nazwa użytkownika</th>
            <th>E-mail użytkownika</th>
            <th>Treść</th>
          </tr>
        </thead>
        <tbody>
          {commentsState.map((comment, index) => {
            return (
              <tr key={index}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </ReusableTable>
    </Wrapper>
  ); else return null;
};

export default CommentList;