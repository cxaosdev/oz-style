import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor || "black"};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      list-style: none;
      font-weight: ${(props) => props.fontWeight || 400};
      font-size: ${(props) => props.fontSize || "13px"};
    }
  }
`;

export default function Header({ bgColor, fontWeight, fontSize }) {
  return (
    <HeaderContainer
      bgColor={bgColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
