import { useState } from 'react';

import HelpArea from './HelpArea';
//Important code
//skip commit for actions
function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
