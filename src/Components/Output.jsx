function Output({ data, onDelete }) {
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.date}</td>
                        <td>{entry.km}</td>
                        <td>
                            <p className="delete" onClick={() => onDelete(index)}>✘</p>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Output;