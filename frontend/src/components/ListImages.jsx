import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {instanceJson} from '../api';
import {ImageCard} from './ImageCard';


export const ListImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await instanceJson.get('/images/');
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2 className='text-center'>Список изображений</h2>
      <Container>
        <Row >
          {images.map((image) => (
            <Col md={3} className="mb-4">
              <Link to={`/${image.id}`}>
                <ImageCard image={image} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}