import styled from "styled-components";

const StyleSection = styled.section`
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 6%;

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const StyleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 5px;

  &::placeholder {
    font-size: 20px;
  }
`;

const StyleComplete = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: red;
`;

const Input = ({ count, handler, list }) => {
  return (
    <StyleSection>
      <StyleInput placeholder={`GUESS ${count} OF 8`} onChange={handler} />
    </StyleSection>
  );
};

export default Input;
