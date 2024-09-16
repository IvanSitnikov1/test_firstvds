import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

import {instanceFormData} from '../api';


export const UploadForm = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleUploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
        formData.append('descriptions', description);
        formData.append('src', image);

    try {
      await instanceFormData.post('/images/', formData);
      alert('Изображение успешно добавлено!');
      window.location.reload()
    } catch (error) {
      Object.keys(error.response.data).forEach(function(key) {
        alert(`${key}: ${error.response.data[key]}`);
      });
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{minWidth: "80%"}}>
        <h2 className="text-center">Галерея фотографий</h2>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Дайте краткое описание к фото"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Выберите изображение</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        </Form>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="mt-2" onClick={handleUploadImage}>Сохранить</Button>
        </div>
      </div>
    </div>
  )
}