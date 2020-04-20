import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 99
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
