import React, {PropTypes} from 'react';
import Header from './common/Header';
/*
  We need a component to load on every page and wrap up all the compoonents that we create.
  Thus, we make App.js
    react-router will be passing child copmonents as props onto App
*/
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.proptypes = {
  children: PropTypes.object.isRequired
};

export default App;
