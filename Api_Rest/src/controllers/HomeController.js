import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Das Dores',
      email: 'Dolores@gmail.com',
      idade: 80,
      peso: 66,
      altura: 1.63,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
