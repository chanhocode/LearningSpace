export default function TabButton({ children, onSelect, isSelected }) {
  // document.querySelector('button').addEventListener('click', () => {});

  // function handleClick() {
  //   console.log('Hello');
  // }

  return (
    <li>
      <button className={isSelected && 'active'} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
