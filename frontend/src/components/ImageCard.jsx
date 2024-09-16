import Card from 'react-bootstrap/Card';


export const ImageCard = ({image}) => {
  const {src, descriptions} = image

  return (
    <Card>
    <Card.Img variant="top" src={src} />
    <Card.Body>
      <Card.Text>
        {descriptions.slice(0, 50)}
        {descriptions.length > 50 && '...'}
      </Card.Text>
    </Card.Body>
    </Card>
  )
}