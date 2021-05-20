import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoLine from './components/InfoLine';
import InputCommand from './components/InputCommand';
import PersonalInfo from './components/PersonalInfo';
import InvalidCommand from './components/InvalidCommand';
import Skills from './components/Skills';
import Connect from './components/Connect';
import './App.css';

const KEY_COMMANDS = [
  'jad --info',
  'jad --stack',
  'jad --connect',
  'jad --clear',
];

function App() {
  const commandsEndRef = React.useRef(null);
  const [commands, setCommands] = React.useState([]);

  React.useEffect(() => {
    scrollToBottom()
  }, [commands]);

  function handleKeyCommand(e) {
    if (e.key === 'Enter') {
      if (KEY_COMMANDS.includes(e.target.value)) {
        if (e.target.value === 'jad --clear') {
          setCommands([]);
        } else {
          setCommands([
            ...commands,
            { id: uuidv4(), value: e.target.value }
          ]);
        }
      } else {
        setCommands([
          ...commands,
          { id: uuidv4(), value: e.target.value, type: 'invalidCommand' }
        ]);
      }

      e.target.value = '';
    }
  }

  function scrollToBottom() {
    commandsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <InfoLine />
      <InfoLine basic={true} />
      {
        commands.length > 0 && commands.map(command => (
          <div key={command.id}>
            <p>
              {command.value}
            </p>
            { command.value === 'jad --info' && <PersonalInfo /> }
            { command.value === 'jad --stack' && <Skills /> }
            { command.value === 'jad --connect' && <Connect /> }
            { command.type === 'invalidCommand' && <InvalidCommand /> }
            <InfoLine basic={true} />
          </div>
        ))
      }
      <InputCommand handleKeyCommand={handleKeyCommand} />
      <div ref={commandsEndRef} />
    </div>
  );
}

export default App;
