import Room from "./Room";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const rooms = ["General", "Movies & Shows", "Music"];

const RoomList = ({ userName }) => {
  const [activeRoom, setActiveRoom] = useState('General'); // default selected room
  const history = useHistory();
  
  const onRoomClicked = (roomName) => {
    if (activeRoom !== roomName) {
      setActiveRoom(roomName);
      history.push({
        pathname: "/chatroom",
        state: { userName: userName, room: roomName },
      });
    }
  };

  return (
    <div>
      {rooms.map((roomName) => (
        <Room
          key={roomName}
          roomName={roomName}
          onRoomClicked={onRoomClicked}
          isActive={activeRoom === roomName}
        />
      ))}
    </div>
  );
};

export default RoomList;
