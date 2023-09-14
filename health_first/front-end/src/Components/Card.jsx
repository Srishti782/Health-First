import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";
import "./Card.css";

function BootCard(props) {
  return (
    <motion.div  whileHover={{ scale: 1.1 }}>
      <Card >
        <Card.Img variant="top" src={props.img} className='card-img' />
        <Card.Body>
          <Card.Title><h4>{props.title}</h4></Card.Title>
          <Card.Text>
            {props.content.slice(0,100)}
          </Card.Text>
          <Button variant="primary"><Link style = {{color:'white',textDecoration:"none"}} to = "/contact">Explore</Link></Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default BootCard;