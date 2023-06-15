//import { PrettyChatWindow } from 'react-chat-engine-pretty'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '206ac1ff-7944-42c7-8158-f025cfcebb25', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>
            {/* <PrettyChatWindow {...chatProps} style={{height:'100%'}}/> */}
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
        </div>
    )
}

export default ChatsPage