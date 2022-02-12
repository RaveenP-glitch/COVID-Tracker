import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAmbulance } from 'react-icons/fa';
import { FaHospitalAlt } from 'react-icons/fa';
import { FaBookDead } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
import axios from 'axios';
import CountUp from 'react-countup';
import { fetchData } from '../src/Api';

class App extends React.Component {

    state = {
        loading: false,
        stats: {}

    }


    async componentDidMount() {
        const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ stats: data.data });
        this.setState({ loading: true });

    }




    render() {
        if (!this.state.loading) {
            <p>Loading...</p>
        }
        return (

            <div>

                <Container>
                    <Row className='title-row'>
                        {/* <img className='img2' src={"https://www.hpb.health.gov.lk/assets/img/logo.png"} alt="HPB" width={'314rem'} /> */}
                        <Col md="12"> <p className='title-text'>C<span><img src={"logo.png"} alt="COVID-19" width={'54rem'} /></span>VID-19 Tracker</p></Col>
                       
                    </Row>
                </Container>


                {/* <div className='title'>
                 <p className='title-text'>C<span><img src={"logo.png"} alt="COVID-19" width={'54rem'} /></span>VID-19 Tracker</p>

               <p> <img className='img2' src={"https://www.hpb.health.gov.lk/assets/img/logo.png"} alt="HPB" width={'314rem'} /></p>

              </div> */}


                <Container>
                    <Row className='card-container-1'>
                        <Col md="2">
                            <Card border="primary" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(255,0,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Local New Cases</Card.Header>
                                <FaAmbulance style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(255,0,0,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.local_new_cases}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">

                                      
                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="2">
                            <Card border="secondary" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(0,0,255,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Local Total Cases</Card.Header>
                                <FaHospitalAlt style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(0,0,255,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.local_total_cases}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                      
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="2">
                            <Card border="success" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(80,155,250,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Local Deaths</Card.Header>
                                <FaBookDead style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(80,155,250,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.local_deaths}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                       
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>



                        <Col md="2">
                            <Card border="danger" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(30,225,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Local Recovered</Card.Header>
                                <FaRunning style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(30,225,0,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.local_recovered}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                      
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row className='card-container-2'>
                        <Col md="2">
                            <Card border="warning" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(255,0,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Global New Cases</Card.Header>
                                <FaAmbulance style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(255,0,0,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.global_new_cases}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                      
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md="2">
                            <Card border="info" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(0,0,255,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Global Total Cases</Card.Header>
                                <FaHospitalAlt style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(0,0,255,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.global_total_cases}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                       
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md="2">
                            <Card border="dark" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(80,155,250,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Global Deaths</Card.Header>
                                <FaBookDead style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(80,155,250,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            end={this.state.stats.global_deaths}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                      
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                     

                        <Col md="2" >
                            <Card border="light" style={{ width: '15rem', height: '16rem', borderRadius: '17px', borderBottom: '10px solid rgba(30,225,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
                                <Card.Header className="c-header">Global Recovered</Card.Header>
                                <FaRunning style={{ marginTop: '2rem', fontSize: '3.4rem' }} />
                                <Card.Body>
                                    <Card.Title className="c-title" style={{ color: 'rgba(30,225,0,0.5)' }}>
                                        <CountUp
                                            start={0}
                                            redraw={true}
                                            end={this.state.stats.global_recovered}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Card.Title>
                                    <Card.Text className="c-text">
                                       
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                
              
              <div className='flex-box-1'> 
                    <br/>
                  <h3 className='footer-text'>Last updated: {this.state.stats.update_date_time}</h3>
                  <img className='img2' src={"https://www.hpb.health.gov.lk/assets/img/logo.png"} alt="HPB" width={'314rem'} />
              </div>
               
            </div>

        )
    }
}

export default App