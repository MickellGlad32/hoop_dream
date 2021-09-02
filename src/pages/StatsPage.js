import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Pages.css';
import React from 'react'
import {Table} from 'react-bootstrap'

function StatsPage() {
    let { id } = useParams();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStats(data.data)
            })
    }, [])
    console.log(stats)
    const info = stats.map(stat => {
        return (
            <>
                    <div className="full-screen-video-container">
                        <video autoPlay loop muted>
                            <source src="/video/Tunnel.mp4" type="video/mp4" />
                        </video>
                <div className="full-screen-video-content">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
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
