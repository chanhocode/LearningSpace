const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '조찬호',
    value: '',
    result: '',
  };

  onSubminForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: 'Ok',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: 'No',
        value: '',
      });
      this.input.focus();
    }
  };
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  input;
  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h1>끝말잇기</h1>
        <div>단어: {this.state.word}</div>
        <form onSubmit={this.onSubminForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
