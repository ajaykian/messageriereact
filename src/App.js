import React, { Component }  from 'react';
import MessageList           from './components/MessageList';
import firebase              from 'firebase';
import Header                from './components/Header';
import MessageBox            from './components/MessageBox';
// import ChannelList           from './components/ChannelList';



class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyBy6FcfGV86CqHFvcwe03AF8v6UfRrK2Z8",
    authDomain: "my-message-app-ajay.firebaseapp.com",
    databaseURL: "https://my-message-app-ajay.firebaseio.com",
    projectId: "my-message-app-ajay",
    storageBucket: "my-message-app-ajay.appspot.com",
    messagingSenderId: "277068967180"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="container">
       <Header title="Simple Firebase App" />
       <div className="columns">
         <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
       </div> 
       <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
       </div>
      </div>
    )
  }
}

export default App;