import React from 'react'

type MessageProps = {
  text: String;
}

function Message(props: MessageProps) {


  return (
    <div>
      {props.text}
    </div>
  )
}

export default Message
