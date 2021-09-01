import { useState } from 'react'
import { Image, Col } from 'react-bootstrap'
// import './SearchPage.css';



function SearchPage() {
    const [search, setSearch] = useState('');
    const [player, setPlayer] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`)
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setPlayer(data.player[0]);
            }, [])
    }
    console.log(player)
    return (

        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search for your favorite player ie.Lebron James" />
                    <button type="submit">Search</button>
                </label>
                <br />
                {/* <label>
                    <select>
                        <option>Player</option>
                        <option>Team</option>
                    </select>
                </label> */}
            </form >
            {/* <div className="full-screen-video-container">
                <video autoplay loop muted>
                    <source src="" type="video/mp4"/>
                </video>
                </div> */}
                <div className="full-screen-video-content">
                <Col xs={6} md={4}>
                    <Image src={player.strRender} roundedCircle />
                </Col>
                <h2>{player.strPlayer}</h2>
                <h3>{player.strTeam}</h3>
                <p>{player.dateBorn}</p>
                <p>{player.strBirthLocation}</p>
                <a>{player.strHeight}</a><br />
                <a>{player.strWeight}</a>

            </div>
            {/* <div>
            <h3>{player.first_name} {player.last_name}</h3>
            <a>{player.height_feet}' {player.height_inches}"</a>
            <p>{player.team.full_name}</p>
            
            </div> */}


        </>




    )
}

export default SearchPage
