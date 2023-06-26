import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>OIE</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque deleniti ullam.
        Tenetur vel voluptates iste magnam suscipit doloribus dolorum a harum? Tenetur fuga vel ad
        nam placeat inventore aspernatur?
      </Paragraph>
    </Container>
  );
}
