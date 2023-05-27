import { styled } from 'styled-components';
const Container = styled.div`
  height: 30px;;
  background-color: teal;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const Announcement = () => {
  return (
    <Container>Announcement! on free gift cards</Container>
  )
}

export default Announcement;