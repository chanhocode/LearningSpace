const Grid = tui.Grid;

// 기본 예제

const data = [
  { id: 1, name: 'Kong', age: 30, country: 'USA' },
  { id: 2, name: 'Siru', age: 25, country: 'UK' },
  { id: 3, name: 'Cheeze', age: 28, country: 'Canada' },
];

const columns = [
  { header: 'ID', name: 'id' },
  { header: 'Name', name: 'name' },
  { header: 'Age', name: 'age' },
  { header: 'Country', name: 'country' },
];

const grid = new Grid({
  el: document.getElementById('grid'),
  data: data,
  columns: columns,
});

const columns1 = [
  {
    header: 'col1',
    name: 'col1',
  },
  {
    header: 'col2',
    name: 'col2',
  },
  {
    header: 'col3',
    name: 'col3',
  },
];
