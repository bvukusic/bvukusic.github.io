import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="name">
        <p> Borna Vukušić </p>{" "}
      </div>{" "}
      <div className="title">
        <p> full-stack developer </p>{" "}
      </div>{" "}
      <div className="body">
        <p>
          I 'm a 26 year-old Croatian full-stack developer with a recent focus
          on front - end work.After graduating from {" "}
          <a
            className="App-link"
            href="https://www.fesb.unist.hr/"
            target="_blank"
            rel="noreferrer"
          >
            FESB
          </a>{" "}, I worked in
          companies like{" "}
          <a
            className="App-link"
            href="https://venio.hr/"
            target="_blank"
            rel="noreferrer"
          >
            Venio Indicium{" "}
          </a>{" "}
          and{" "}
          <a
            className="App-link"
            href="https://agilno.com/"
            target="_blank"
            rel="noreferrer"
          >
            Agilno{" "}
          </a>{" "}
          in Split, and{" "}
          <a
            className="App-link"
            href="https://www.sedamit.hr/"
            target="_blank"
            rel="noreferrer"
          >
            Sedam IT{" "}
          </a>{" "}
          in Zagreb.{" "}
        </p>{" "}
      </div>{" "}
      <div className="work">
        <p>
          I am available for freelance work regarding React and React Native
          projects.{" "}
        </p>{" "}
      </div>{" "}
      <div className="contact">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          .email{" "}
        </a>{" "}
        <a
          href="https://reactjs.org"
          target="_blank"
          className="effect-underline"
          rel="noreferrer"
        >
          .linkedin{" "}
        </a>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          .github{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
