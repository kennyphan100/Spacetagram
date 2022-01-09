import { useState } from "react";
import Items from './Items';

const Mainpage = () => {

    const [items, setItems] = useState([]);
    const [nbOfitems, setnbOfItems] = useState(null);
    const [search, setSearch] = useState('');

    const [startYear, setStartYear] = useState(1);
    const [endYear, setEndYear] = useState(2022);

    const fetchItems = async(e) => {
        e.preventDefault();

        const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}&year_start=${startYear}&year_end=${endYear}`);
        const results = await response.json(); 

        let result = results.collection.items;

        result.sort((a ,b) => (a.data[0].date_created.substring(0,10) > b.data[0].date_created.substring(0,10)) ? 1 : -1)

        setItems([]);
        setItems(result);
        setnbOfItems(result.length);
    }

    const toggleLike = (nasa_id) => {
        const item = document.getElementsByClassName(nasa_id);
        const is_liked = item[0].classList.contains('liked')
        const is_unliked = item[1].classList.contains('unliked');

        if (is_liked) {
            item[0].classList.remove("liked");

        } else {
            item[0].classList.add("liked");
        }
        
        if (is_unliked) {
            item[1].classList.remove('unliked');
        }
    }

    const toggleDislike = (nasa_id) => {
        const item = document.getElementsByClassName(nasa_id);
        const is_unliked = item[1].classList.contains('unliked');
        const is_liked = item[0].classList.contains('liked');

        if (is_unliked) {
            item[1].classList.remove("unliked");

        } else {
            item[1].classList.add("unliked");
        }

        if (is_liked) {
            item[0].classList.remove('liked');
        }
    }

    return (
        <>
            <header>
                <h1 id="page-title">Welcome to Spacetagram!</h1>
                <h3 id="page-description">Here you can search for NASA images.</h3>

                <form onSubmit={fetchItems} className="input"> 
                    <input required id="input" type="text" placeholder='Search for... (e.g. "Earth")' className="searchbar" onChange={e => setSearch(e.target.value)}/>
                    <button type="submit" className="searchbutton"><i className="fas fa-search"></i></button> <br />
                    <input type="number" min="1" id="startyear" className="year" placeholder="Start Year (e.g. 2000)" onChange={e => setStartYear(e.target.value)}/>
                    <input type="number" min="1" id="endyear" className="year" placeholder="End Year (e.g. 2022)" onChange={e => setEndYear(e.target.value)}/>
                </form>

                {typeof nbOfitems == 'number' ? <h3>{nbOfitems} items found</h3> : ""}
            </header>
            
            <section>
                <div className="row">
                    {items.length > 0 ? <Items items={items} toggleLike={toggleLike} toggleDislike={toggleDislike}/> : ""}
                </div>
            </section>
        </>
    )
}

export default Mainpage
