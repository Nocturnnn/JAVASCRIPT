import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import * as Styled from './styled';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Styled.Title>Alunos</Styled.Title>
      <Styled.AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <Styled.ProfilePicture>
              {get(aluno, 'Uploads[0].url', '') ? (
                <img crossOrigin="" src={aluno.Uploads[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </Styled.ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaTrash size={16} />
            </Link>
          </div>
        ))}
      </Styled.AlunoContainer>
    </Container>
  );
}
