import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Contacts from './components/Contacts'
import Form from './components/Contacts/Form'


function App() {
  // Todo input İşlemleri
  const initial = { todo: '' };
  const [form, setForm] = useState([initial]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }
  
    setForm(initial);
    console.log(form);
  }

  return (
    <>
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
              <input className="new-todo" placeholder="What needs to be done?" value={form.todo} onChange={onChangeInput} name="todo" autoComplete="off" />
            </form>
          </header>

          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label className="toggle-all">
              Mark all as complete
            </label>
            <ul className="todo-list">
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Learn React</label>
                  <button className="destroy"></button>
                </div>
              </li>

            </ul>
          </section>


          <footer className="footer">


            <span className="todo-count">
              <strong>2</strong>
              items left
            </span>

            <ul className="filters">
              <li>
                <a className="selected">All</a>
              </li>
              <li>
                <a>Active</a>
              </li>
              <li>
                <a>Completed</a>
              </li>
            </ul>


            <button className="clear-completed">
              Clear completed
            </button>
          </footer>
        </section>

        <footer className="info">
          <p>Click to edit a todo</p>
          <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    </>
  );

}
export default App;
