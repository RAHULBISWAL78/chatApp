import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>;
    return (
        <ChatEngine
        height='100vh'
        userName='Rahul78'
        userSecret='1234'
        projectID='e54a3d31-aa0a-4261-aa08-46081afa9599'
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        />
    );
}
export default App;