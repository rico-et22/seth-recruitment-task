import styled from "styled-components";

const Button = styled.button`
  background: #d8d8d8;
  border: 2px solid #bfbfbf;
  border-radius: 0.125rem;
  font-family: inherit;
  color: inherit;
  &:active {
    background: #eee;
  }
  &:disabled {
    opacity: .5;
  }
  &.green {
    background: #4ADE80;
    padding: .5rem 1rem;
    border-color: #86EFAC;
    font-size: 1rem;
    border-radius: .25rem;
    &:active {
      background: #BBF7D0;
    }
  }
  &.comment-tr:not(:last-of-type) {
    margin-bottom: .5rem;
  }
`;

const ActionButton = (props) => {
  const { children, onClick, disabled, className } = props;

  return (
    <Button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </Button>
  );
};

export default ActionButton;
