import styled from "styled-components";

const Container = styled.div`
  height: 31px;
  background-color: #0099ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Aaunuhos kinnuhos ramaunuhos, harek saman ma 10% chhut..!! </Container>;
};

export default Announcement;
