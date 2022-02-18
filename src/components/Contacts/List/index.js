import { useState } from 'react'
import './index.css'


function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const filtered = contacts.filter(item => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        )
    })
    return (
        <>

            <div>
                <ul className="todo-list">
                    {
                        filtered.map((contact, key) =>
                            <li key={key}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label key={key}>{contact.job}</label>
                                    <button className="destroy"></button>
                                </div>
                            </li>
                        )}
                </ul>
            </div>
        </>
    )
}

export default List