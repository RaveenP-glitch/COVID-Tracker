import React, { useState, useEffect } from 'react';
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

function App() {

  const [ Latest,setLatest ] = useState({});
 


                

  useEffect( () =>{
    axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical")
    .then(res => {
      console.log(res.data.data.local_new_cases);
      setLatest(res.data);
     
      
    })
    .catch(err => {
      console.log(err);
    })
    

  },[]);

  useEffect(()=>{
    console.log("Latest: "+Latest.data);
  },[]);




  return (

    <div className="App">


      <Container>
        <Row className='title-row'>
          <Col md="8"> <p className='title-text'>C<span><img src={"logo.png"} alt="COVID-19" width={'54rem'} /></span>VID-19 Tracker</p></Col>
          <Col md="2"> <p> <img className='img2' src={"https://www.hpb.health.gov.lk/assets/img/logo.png"} alt="HPB" width={'314rem'} /></p></Col>
        </Row>
      </Container>
      <br/>

      {/* <div className='title'>
        <p className='title-text'>C<span><img src={"logo.png"} alt="COVID-19" width={'54rem'} /></span>VID-19 Tracker</p>

        <p> <img className='img2' src={"https://www.hpb.health.gov.lk/assets/img/logo.png"} alt="HPB" width={'314rem'} /></p>

      </div> */}

<CardGroup>
     
        <Row className='card-container-1'>
        <Col md="2">
        <Card border="primary" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(255,0,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Local New Cases</Card.Header>
          <FaAmbulance style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(255,0,0,0.5)'}}>
             {Latest.data.local_new_cases}
              </Card.Title>
            <Card.Text className="c-text">
          
              Last updated: 12/02/2022
            </Card.Text>
          
           
          </Card.Body>
        </Card>
        </Col>

        <Col md="2">
        <Card border="secondary" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(0,0,255,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Local Total Cases</Card.Header>
          <FaHospitalAlt style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(0,0,255,0.5)'}}>
            <CountUp
              start = {0}
              end ={13}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md="2">
        <Card border="success" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(80,155,250,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Local Deaths</Card.Header>
          <FaBookDead style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(80,155,250,0.5)'}}>
            <CountUp
              start = {0}
              end ={14}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
             Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>



        <Col md="2">
        <Card border="danger" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(30,225,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Local Recovered</Card.Header>
          <FaRunning style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(30,225,0,0.5)'}}>
            <CountUp
              start = {0}
              end ={14}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
    
      </CardGroup>

      <Container>
      <Row className='card-container-2'>
      <Col md="2">
        <Card border="warning" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(255,0,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Global New Cases</Card.Header>
          <FaAmbulance style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(255,0,0,0.5)'}}>
            <CountUp
              start = {0}
              end ={34}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>


        <Col md="2">
        <Card border="info" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(0,0,255,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Global Total Cases</Card.Header>
          <FaHospitalAlt style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(0,0,255,0.5)'}}>
            <CountUp
              start = {0}
              end ={35}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>


        <Col md="2">
        <Card border="dark" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(80,155,250,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Global Deaths</Card.Header>
          <FaBookDead style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(80,155,250,0.5)'}}>
            <CountUp
              start = {0}
              end ={45}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>



        <Col md="2">
        <Card border="light" style={{ width: '18rem', height: '20rem', borderRadius: '17px', borderBottom: '10px solid rgba(30,225,0,0.5)', background: 'rgba(255, 255, 255, .7)', backdropFilter: 'blur(10px)' }}>
          <Card.Header className="c-header">Global Recovered</Card.Header>
          <FaRunning style={{marginTop: '3rem', fontSize: '3.7rem'}} />
          <Card.Body>
            <Card.Title className="c-title" style={{color:'rgba(30,225,0,0.5)'}}>
            <CountUp
              start = {0}
              redraw={true}
              end ={23}
              duration={2.5}
              separator=","
              />
            </Card.Title>
            <Card.Text className="c-text">
            Last updated: 12/02/2022
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        </Row>
      </Container>


      <div>
        <p></p>
        <br />
        <br />

      </div>




    </div>
  );
}

export default App;
