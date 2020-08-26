import React from 'react';
import Javier from './Javier.png';
import Github from './Github-Logo.png'
import Twitter from './Twitter-Logo.png'
import LinkedIn from './LinkedIn-Logo.png'
import MailIcon from './Mail.png';
import ResumeIcon from './Resume.png';
import Resume from './JavierNazarioFelicianoResume2020.pdf'
import './App.css';

class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
        <div>
        <h1>Javier Nazario Feliciano</h1>
        <img src={Javier} className="App-logo" alt="logo" />
        </div>
        <div>
        <h2>Undergraduate Computer Science</h2>
        <p>
          Sorry, it's still under construction.
        </p>
        <p>
          I still want to thank you for visiting and looking at my page.
        </p>
        </div>
        <div>
          <a href='https://github.com/Javier1019'>
            <img src={Github} className="Link-logo" alt="Github Logo" />
          </a>
          <a href='https://twitter.com/JavierNazario27'>
            <img src={Twitter} className="Link-logo" alt="Twitter Logo" />
          </a>
          <a href='https://www.linkedin.com/in/javier-andr%C3%A9-nazario-feliciano-255655111/'>
            <img src={LinkedIn} className="Link-logo" alt="Linked In Logo" />
          </a>
          <a href='mailto:nazario_114260@students.pupr.edu'>
            <img src={MailIcon} className="Link-logo" alt="Mail to Icon" />
          </a>
          <DownloadLink src={Resume}>
          <img src={ResumeIcon} className="Link-logo" alt="Resume Download Button" />
          </DownloadLink>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
