import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 69
  }
  asyncFunc () {
    return Promise.resolve(39);
  }
  async componentDidMount () {
    this.setState({
      answer: await this.asyncFunc()
    })
  }

  render() {
    return (
      <h2>
        Hi SNJ! -- {this.state.answer}
      </h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
