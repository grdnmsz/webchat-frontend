import styled from "styled-components";
import ReactEmoji from "react-emoji";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.currentUser ? "flex-end" : "flex-start"};
  margin: 10px;
`;

const Author = styled.div`
  font-size: 11px;
  font-style: italic;
`;

const MessageContainer = styled.div`
  background: ${(props) => (props.currentUser ? "#00b067" : "#404040")};
  border-radius: 10px;
  padding: 10px;
`;

const Text = styled.span`
  color: rgba(255, 255, 255, 0.9);
`;

const Message = (props) => {
  const { message, name } = props;
  const isCurrentUser = message.user === name;

  return (
    <>
      <Container currentUser={isCurrentUser}>
        <Author> {message.user}</Author>
      </Container>
      <Container currentUser={isCurrentUser}>
        <MessageContainer currentUser={isCurrentUser}>
          <Text>{ReactEmoji.emojify(message.text)}</Text>
        </MessageContainer>
      </Container>
    </>
  );
};

export default Message;
