// import logo from "./logo192.svg";
import "./App.css";
import UserList from "./sections/user/userList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Intellect Dialog</p>
        <a
          className="App-link"
          href="https://intellectdialog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About us
        </a>
      </header>
      <div className="info">
        <h1>Дописать компонент таблица</h1>
        <hr />
        <ol>
          <li>
            <ul>
              <h3>Добавить адаптивное отображение в виде карточки</h3>
            </ul>
          </li>
          <li>
            <ul>
              <h3>Добавить возможность удаления строки</h3>
            </ul>
          </li>
          <li>
            <ul>
              <h3>Добавить возможность добавления строки</h3>
            </ul>
          </li>
          <li>
            <ul>
              <h3>Добавить возможность редактирования строки</h3>
            </ul>
          </li>
          <li>
            <ul>
              <h3>Добавить возможность сохранять в localStorage</h3>
            </ul>
          </li>
          <li>
            <ul>
              <h3>
                Использовать{" "}
                <a
                  target="_blank"
                  href="https://react-redux.js.org/"
                  rel="noreferrer"
                >
                  react-redux
                </a>
              </h3>
            </ul>
          </li>
        </ol>
        <hr />
      </div>

      <UserList />
    </div>
  );
}

export default App;
