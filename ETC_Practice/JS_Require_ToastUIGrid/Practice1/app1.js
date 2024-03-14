const Grid = tui.Grid;

class CustomTextEditor {
  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);

    this.el = el;
  }

  get Element() {
    return this.el;
  }

  getVlaue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}

const grid1 = new Grid({
  el: document.getElementById('grid1'),
  scrollX: false,
  scrollY: false,
  columns: columns1,
  header: {
    height: 100,
    complexColumns: [
      {
        header: 'col + col2',
        name: 'parent1',
        childNames: ['col1', 'col2'],
      },
      {
        header: 'col1 + col2 + col3',
        name: 'parent2',
        childNames: ['col1', 'col2', 'col3'],
      },
    ],
  },
});
