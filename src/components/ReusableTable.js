import { useEffect } from "react";
import styled, {css} from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  min-height: 15rem;
  background: #f6f6f6;
  border: 2px solid #A1A1AA;
  border-radius: 1rem;
  overflow-x: auto;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  ${(props) =>
    props.tableStyles &&
    css`${props.tableStyles}`
  }
`;

const ReusableTable = (props) => {
  const {id, tableStyles} = props;
  useEffect(() => {
    const tableFixHead = (e) => {
      const sT = window.scrollY
      const tableOffset = document.getElementById(id).offsetTop
      document.querySelectorAll(`#${id} thead th`).forEach(th => {
        if (window.scrollY > tableOffset) th.style.transform = `translate3d(0, ${sT - tableOffset}px, 0)`
        else th.style.transform = `translateY(0px)`
      })
    }
    window.addEventListener("scroll", tableFixHead)
  }, [id])
  return (
    <TableWrapper className="tableFixHead">
      <Table id={id} tableStyles={tableStyles}>{props.children}</Table>
    </TableWrapper>
  );
};

export default ReusableTable;
