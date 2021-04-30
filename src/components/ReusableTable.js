import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  min-height: 15rem;
  background: #f6f6f6;
  border: 2px solid #bfbfbf;
  border-radius: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #fff;
    height: 2.5rem;
    text-align: left;
    padding: .5rem 1rem;
  }
  th:first-of-type {
    border-radius: 1rem 0 0 0;
  }
  th:last-of-type {
    border-radius: 0 1rem 0 0;
  }
  th:nth-of-type(4) {
    min-width: 15rem;
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
`;

const ReusableTable = (props) => {
  return (
    <TableWrapper>
      <Table>{props.children}</Table>
    </TableWrapper>
  );
};

export default ReusableTable;
