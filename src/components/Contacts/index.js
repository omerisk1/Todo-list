import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import './index.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            job: 'Spor Yap'

        }


    ]);
    useEffect(() => {

        console.log(contacts.length);

    }, [contacts])
  
        
    return (
        <>
            <section className="todoapp">
                <Form addContact={setContacts} contacts={contacts} />
                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label>
                        Mark all as complete
                    </label>
                    <List contacts={contacts} />
                </section>

                <footer className="footer">
                    <span className="todo-count">
                        <strong>{contacts.length} </strong>
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
                    <button className="clear-completed" >
                        Clear completed
                    </button>
                </footer>
            </section>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">0M3R</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>






        </>
    )
}

export default Contacts