import PropTypes from 'prop-types';

const item = ({item, toggleLike, toggleDislike}) => {
    return (
        <div className="col-4 item-cards">
            <div className={`card medium item`}>

                <div className="card-image waves-effect waves-block waves-light">
                    <img src={item.links[0].href} alt={item.data[0].title} />
                </div>

                <div className="card-content">
                    <h4 className="item-title">{item.data[0].title}</h4>
                    <h5 className="item-date">{item.data[0].date_created.substring(0,10)}</h5>
                    <p>{item.data[0].description}</p>
                    <i className={`fas fa-thumbs-up ${item.data[0].nasa_id}`} onClick={() => toggleLike(item.data[0].nasa_id)}></i>
                    <i className={`fas fa-thumbs-down ${item.data[0].nasa_id}`} onClick={() => toggleDislike(item.data[0].nasa_id)}></i>
                </div>
            </div>
        </div>
    )
}

item.propTypes = {
    item: PropTypes.object,
    toggleLike: PropTypes.func,
    toggleDislike: PropTypes.func,
}

export default item
