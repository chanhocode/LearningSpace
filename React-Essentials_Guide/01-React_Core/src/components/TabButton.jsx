export default function TabButton({ children, onSelect }) {
  // document.querySelector('button').addEventListener('click', () => {});

  // function handleClick() {
  //   console.log('Hello');
  // }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
