import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((val) => {
              return <CoreConcept key={val.title} {...val} />;
            })}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          <div id='tab-content'>
            {selectedTopic ? (
              <>
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic]?.code}</code>
                </pre>
              </>
            ) : (
              <p>Please select a topic.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
