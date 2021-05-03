import ReusableTable from "./ReusableTable";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import InfoMessage from "./InfoMessage";

const CommentList = () => {
  const isInitialized = useSelector((state) => state.comments.isInitialized);
  const commentsState = useSelector((state) => state.comments.data);
  const currentPage = useSelector((state) => state.comments.currentPage);
  const visibleComments = commentsState.slice(
    currentPage * 20,
    currentPage * 20 + 20
  );
  const tableStyles = `
    th {
      background: #fff;
      height: 2.5rem;
      text-align: left;
      padding: .5rem 1rem;
      background: #1E293B;
      color: #eee;
    }
    th:nth-of-type(4) {
      width: 1rem;
    }
    tr:nth-of-type(odd) {
      background: #fafafa;
    }
    tr:nth-of-type(even) {
      background: #fff;
    }
    tr:last-of-type {
      border-radius: 1rem;
    }
    tr:last-of-type td:first-of-type {
      border-radius: 0 0 0 1rem;
    }
    tr:last-of-type td:last-of-type {
      border-radius: 0 0 1rem 0;
    }
    td {
      height: 3.5rem;
      padding: .5rem 1rem;
    }
    td:nth-of-type(5) {
      white-space: pre;
    }
    @media (max-width: 767.98px) {
      th, td {
        font-size: .875rem;
      }
    }
  `;

  if (commentsState.length > 0)
    return (
      <ReusableTable id="commentsTable" tableStyles={tableStyles}>
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
          {visibleComments.map((comment, index) => {
            return <SingleComment commentData={comment} key={index} />;
          })}
        </tbody>
      </ReusableTable>
    );
  else if (isInitialized) return <InfoMessage status="noItems" />;
  else return null;
};

export default CommentList;
