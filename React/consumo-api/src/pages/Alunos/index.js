import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import * as Styled from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
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
