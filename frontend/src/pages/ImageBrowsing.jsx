import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import {instanceJson} from '../api';


export const ImageBrowsing = () => {
  const {id} = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await instanceJson.get(`/images/${id}`);
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [id]);

  return (
    <>
      <h2 className='text-center'>Просмотр изображения</h2>
      {image && (
        <div className="container my-5">
          <Card>
            <Card.Img variant="top" src={image.src} />
            <Card.Body>
              <Card.Text>
                {image.descriptions}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  )
}