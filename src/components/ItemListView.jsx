const ItemListView = ({ items, onEdit, onDelete }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <button onClick={() => onEdit(item)}>Tahrirlash</button>
                    <button onClick={() => onDelete(item.id)}>O‘chirish</button>
                </div>
            ))}
        </div>
    );
};

export default ItemListView;
