import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mycarousal() {
  return (
    <div>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
            />
             <Carousel.Caption>
             <form>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             </form>
            </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
            />
             <Carousel.Caption>
             <form>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             </form>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Mycarousal