import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './Pages.css';
import { Table, Navbar, Container,Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setStats } from '../redux/actions/stats';
import { Link } from 'react-router-dom';




function StatsPage() {
    const dispatch = useDispatch()
    let { id } = useParams();
    const stats = useSelector(state => state.stats);


    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setStats(data.data))
            })
    }, [dispatch, id])
    console.log(stats)
    const info = stats.map(stat => {
        return (
            <>

                <div className="full-screen-video-container">
                    <video autoPlay loop muted>
                        <source src="/video/playerBackground.mp4" type="video/mp4" />
                    </video>
                    <div className="full-screen-video-content">
                        <Table responsive="sm" variant="light">
                            <thead>
                                <tr>
                                    <th>Season</th>
                                    <th>Games Played</th>
                                    <th>Mins</th>
                                    <th>Pts</th>
                                    <th>O.Rebs</th>
                                    <th>D.Rebs</th>
                                    <th>Rebs</th>
                                    <th>Ast</th>
                                    <th>Stls</th>
                                    <th>Blks</th>
                                </tr>
                            </thead>
                            {/* {rows.map((row) => {
                                        return ( */}
                            <tbody>
                                <tr>
                                    <td>{stat.season}</td>
                                    <td>{stat.games_played}</td>
                                    <td>{stat.min}</td>
                                    <td>{stat.pts}</td>
                                    <td>{stat.oreb}</td>
                                    <td>{stat.dreb}</td>
                                    <td>{stat.reb}</td>
                                    <td>{stat.ast}</td>
                                    <td>{stat.stl}</td>
                                    <td>{stat.blk}</td>
                                </tr>

                            </tbody>

                            {/* )
                                    })} */}
                        </Table>

                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <Navbar >
            <Container>
                    <Navbar.Brand to="/" as={Link}>Hoop Dream</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link to="/" as={Link}>Home</Nav.Link> */}
                        <Nav.Link to="/search" as={Link}>Search</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                {info}

            </div>
        </>




    )
}

export default StatsPage
