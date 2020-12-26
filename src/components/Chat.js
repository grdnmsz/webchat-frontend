import { useLocation } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

import Navbar from "./Nav/Navbar";
import RoomList from "./RoomList";

const Chat = () => {
  const {
    state: { userName },
  } = useLocation();
  return (
    <>
      <Navbar title="Rooms" LeftButton={""} Icon={AiOutlineMessage} />
      Gelegram
      <RoomList userName={userName} />
      {/*<Chatroom userName={"Gordon"} room={"General"} /> */}
    </>
  );
};

export default Chat;
