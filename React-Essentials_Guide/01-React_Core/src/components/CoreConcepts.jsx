import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from '../components/CoreConcept';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((val) => {
          return <CoreConcept key={val.title} {...val} />;
        })}
      </ul>
    </section>
  );
}
