import React from 'react'
import { ChatState } from '../context/chatProvider'
import { Box } from "@chakra-ui/react";
import SingleChat from './SingleChat';

const ChatBox = ({fetchAgain,setfetchAgain}) => {

  const {SelectedChat}=ChatState()
  return (
    <Box display={{ base: SelectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      padding="3"
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      marginLeft="5px"> 
      <SingleChat fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
       </Box>
  )
}

export default ChatBox