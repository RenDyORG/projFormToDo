import { useState } from "react";

function Input({ addText }) {
    const [datState, setDate] = useState('');
    const [km, setKm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!datState || !km) return;
        addText(datState, km);
        setDate('');
        setKm('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <p>Дата (ДД.ММ.ГГ)</p>
                    <input type="text" value={datState} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="input-form">
                    <p>Пройдено км</p>
                    <input type="text" value={km} onChange={(e) => setKm(e.target.value)} />
                </div>
                <button>OK</button>
            </form>
        </div>
    );
}

export default Input;