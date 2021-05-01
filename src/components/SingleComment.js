const singleComment = (props) => {
  const {postId, id, name, email, body} = props.commentData
  return (
    <tr>
      <td>{postId}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{body}</td>
    </tr>
  );
}

export default singleComment