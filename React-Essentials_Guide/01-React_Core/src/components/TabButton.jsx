export default function TabButton({ children, isSelected, ...props }) {
  // document.querySelector('button').addEventListener('click', () => {});

  // function handleClick() {
  //   console.log('Hello');
  // }

  return (
    <li>
      <button className={isSelected && 'active'} {...props}>
        {children}
      </button>
    </li>
  );
}
