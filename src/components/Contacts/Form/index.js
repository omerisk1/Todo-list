import { useState } from 'react'
import './index.css'


function Form({ addContact, contacts }) {
    const initial = { job: '' };
    const [form, setForm] = useState(initial);
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.job === "") {
            return false;
        }
        addContact([...contacts, form]);
        setForm(initial);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <header className="header">
                    <h1>todos</h1>

                    <input className="new-todo" placeholder="What needs to be done?" value={form.job} onChange={onChangeInput} name="job" autoComplete="off" />

                </header>
            </form>
        </>

    )
}

export default Form