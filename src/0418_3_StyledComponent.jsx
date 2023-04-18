import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  /* 최대 너비가 1024px 일 때, 768px로 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #000;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #000;
      }
    `};
    & + button {
      margin-left: 2rem;
    }
`;

const StyledComponent = () => {
  return (
    <Box color="orangered">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만..</Button>
    </Box>
  );
};

export default StyledComponent;
