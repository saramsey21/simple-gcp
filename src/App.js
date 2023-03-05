import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">Welcome To My Chat Bot!</div>
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/39964328-4541-4d9a-bd25-286beeb183f5">
      </iframe>
      <div className="Description">
        <div className="content">To begin using this chatbot, start with a simple greeting (like hello)</div>
        <div className="content">After answering a few questions, you can ask questions about The University of Cincinnati</div>
        <div className="content">Try asking 'do they have a football team?' or 'what is in state tuition?' </div>
      </div>    
    </div>
  );
}

export default App;
