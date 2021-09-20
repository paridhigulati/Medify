import React from 'react'
import {Avatar, Channel, useChatContext} from 'stream-chat-react';
const TeamChannelPreview = ( {channel, type}) => {
   
   const{channel: activeChannel, client} = useChatContext();
   const ChannelPreview = () => (
       <p className = "channel-preview__item">
           # {channel?.data?.name || channel?.data?.id}
        
       </p>
   );

   const DirectPreview = () => {
       const members =  Object.values(channel.state.members).filter(({user}) => user.id != client.userID); 
   
   return (
       <div className = "channel-preview__item single">
           <Avatar 
                  image = {member[0]?.user?.image}
                  name = {member[0]?.user?.fullName}
                  size = {24}
                  />
                  <p>{member[0]?.user?.fullName}</p>
       </div>
   )
}
   return (
        <div className = {
            channel?.id === activeChannel?.id
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrappper'
        }
        onClick = {() => {
            console.log(channel);
        }}  
        >  
        {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
             
        </div>
    );
}

export default TeamChannelPreview
