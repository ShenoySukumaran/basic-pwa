import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app-root">
        <header className="app-header">
          <h1 className="app-title">Basic PWA app</h1>
        </header>
        <nav>
          <a href="/html/">HTML</a> |
          <a href="/css/">CSS</a> |
        </nav>
        <main>
          <p className="app-intro">
            Welcome
          </p>
        </main>
        <footer>
          <p>Posted by: Hege Refsnes</p>
          <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
