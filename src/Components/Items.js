import Item from './Item';

const Items = ({items, toggleLike, toggleDislike}) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.data[0].nasa_id} item={item} toggleLike={toggleLike} toggleDislike={toggleDislike} />
            ))}
        </>
    )
}

export default Items
