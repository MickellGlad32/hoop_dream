import { useState } from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'
import './Pages.css';





function SearchPage() {
    const [search, setSearch] = useState('');
    const [player, setPlayer] = useState([]);
    const [playerID, setPlayerID] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then((data) => {
                setPlayer(data.player[0]);
            }, [])

        fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`)
            .then(res => res.json())
            .then(playerData => {
                console.log('Player Detail', playerData.data)
                setPlayerID(playerData.data[0].id)
            })
    }

    console.log(playerID)


    return (





        <>
            <div className="full-screen-video-container">
                <video autoPlay loop muted>
                    <source src="/video/Thunderstorm.mp4" type="video/mp4" />
                </video>
                <div className="full-screen-video-content">
                    <form onSubmit={handleSubmit} className="search-form">
                        <label>
                            <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search for your favorite player ie.Lebron James" />
                            <button type="submit">Search</button>
                        </label>
                    </form>
                    <br />
                    <Container >
                        <Row>
                            <Col xs={6} md={8}>
                                <Image src={player.strRender} fluid />
                            </Col>
                            <Col xs={6} md={6}>
                                <h2>{player.strPlayer}</h2>
                                <h3>{player.strTeam}</h3>
                                <p>{player.dateBorn}</p>
                                <p>{player.strBirthLocation}</p>
                                <p>{player.strHeight}</p><p>{player.strWeight}</p>
                                <a href={`/stats/${playerID}`}>Player Stats</a>
                            </Col>

                        </Row>
                    </Container>
                    <form />
                </div>
            </div>
        </>







    )
}

export default SearchPage


{/* <form onSubmit={handleSubmit}>
                <label>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search for your favorite player ie.Lebron James" />
                    <button type="submit">Search</button>
                </label>
                <br /> */}
{/* <label>
                    <select>
                        <option>Player</option>
                        <option>Team</option>
                    </select>
                </label> */}
