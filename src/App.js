import React from 'react';
import TaskList from './components/tasklist';
import Menu from './components/menu'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TaskList />
        {/* <Menu /> */}
      </div>
    )
  }
}

export default App;
