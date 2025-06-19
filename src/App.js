import { useState } from "react";
import Input from "./Components/Input";
import Output from "./Components/Output";
import './App.css';

function App() {
    const [data, setData] = useState([]);

    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    const addTo = (newDate, newKm) => {
        const kmNum = parseFloat(newKm);
        if (isNaN(kmNum)) return;

        setData(prevData => {
            const existingIndex = prevData.findIndex(entry => entry.date === newDate);

            if (existingIndex !== -1) {
                const updated = prevData.map((item, index) =>
                    index === existingIndex
                        ? { ...item, km: (parseFloat(item.km) + kmNum).toFixed(1) } // Создаём новый объект!
                        : item
                );
                return updated.sort((a, b) => parseDate(b.date) - parseDate(a.date));
            } else {
                const newEntry = { date: newDate, km: kmNum.toFixed(1) };
                return [...prevData, newEntry].sort((a, b) => parseDate(b.date) - parseDate(a.date));
            }
        });
    };

    const deleteTo = (index) => {
        const updated = data.filter((_, i) => i !== index);
        setData(updated);
    };

    return (
        <div className="App">
            <Input addText={addTo} />
            <Output data={data} onDelete={deleteTo} />
        </div>
    );
}

export default App;