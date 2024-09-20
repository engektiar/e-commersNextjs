import Image from 'next/image';

import Carousel from 'react-bootstrap/Carousel';

const Promotionproducts = () => {
 
    return (
      <div className="container py-5">
        <div className="row"> 
        <Carousel>
      <Carousel.Item>
      <Image
      src="../../../public/images/Banner/banneriamge.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src="../../../public/images/Banner/banneriamge.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </div>
  
      </div>
    );
  };
  
  export default Promotionproducts;