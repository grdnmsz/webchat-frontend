import styled from "styled-components";
import Avatar from "react-avatar";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? props.theme.activeRoom : "none")};
  padding: 15px 15px 15px 15px;
`;

const InfoRoom = styled.div`
  margin-left: 15px;
  margin-bottom: 5px;
`;

const RoomTitle = styled.h4`
  margin: 5px 0px 3px 0px;
`;

const Room = ({ roomName, isActive, onRoomClicked }) => {
  return (
    <Container
      onClick={() => {
        onRoomClicked(roomName);
      }}
      isActive={isActive}
    >
      <Avatar name={roomName} round={true} size="50" textSizeRatio={3} />
      <InfoRoom>
        <RoomTitle>{roomName}</RoomTitle>
        <span style={{ color: "#9c9c9c" }}>no messages yet…</span>
      </InfoRoom>
    </Container>
  );
};

export default Room;
