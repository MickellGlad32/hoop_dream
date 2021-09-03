import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Pages.css';
import React from 'react'
import { Table } from 'react-bootstrap'

function StatsPage() {
    let { id } = useParams();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=${id}`)
            .then(res => res.json())
            .then(data => {
                setStats(data.data)
            })
    }, [])
    console.log(stats)
    const info = stats.map(stat => {
        return (
            <>
                <div className="full-screen-video-container">
                    <video autoPlay loop muted>
                        <source src="/video/playerBackground.mp4" type="video/mp4" />
                    </video>
                    <div className="full-screen-video-content">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Mins</th>
                                    <th>Pts</th>
                                    <th>D.Rebs</th>
                                    <th>Assts</th>
                                    <th>Stls</th>
                                    <th>Blks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                     <td>#</td>
                                    <td>{stats.min}</td>
                                    <td>{stats.pts}</td>
                                    <td>{stats.rebs}</td>
                                    <td>{stats.ast}</td>
                                    <td>{stats.stl}</td>
                                    <td>{stats.blk}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </div>
            </>
        )
    })
    return (


        <div>
            {info}

        </div>
    )
}

export default StatsPage
