import React from "react";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../Utils/emoji";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
