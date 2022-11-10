import { useState, useEffect } from 'react';
import GetGenres from '../Functions/GetGenres';
import RandomColor from '../Functions/RandomColor';
import CreationForm from './CreationForm';

const Workshop = () => {
    return (
        <div>
            <section className="chat">
                <h3 className="chat__title">Global Chat</h3>
            </section>
            <section className="creation">
                <h3 className="creation__title">Create a lobby</h3>
                <p className="creation__description">Create a name, add some genres, and start listening to music</p>
                <CreationForm />
            </section>
            <section className="account">
                <h4 className="hide-visually">Login</h4>
                <a href="/login" className="account__link">
                    <svg className="link__icon" width="32" height="32" viewBox="0 0 24 24"><path d="M9.325 16.275q-.275-.325-.275-.738q0-.412.275-.687l1.85-1.85H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h7.175l-1.85-1.85q-.3-.3-.3-.712q0-.413.3-.713q.275-.3.688-.3q.412 0 .687.275l3.6 3.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.3.3-.7.275q-.4-.025-.675-.3ZM13 21q-.425 0-.712-.288Q12 20.425 12 20t.288-.712Q12.575 19 13 19h6V5h-6q-.425 0-.712-.288Q12 4.425 12 4t.288-.713Q12.575 3 13 3h6q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/></svg>
                    Log-in
                </a>
            </section>
        </div>
    );
}

export default Workshop;