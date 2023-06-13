import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {
        id, nome, email,
      } = novoUser;
      return res.json({
        id, nome, email,
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(users);
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
      res.json(user);
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const novosDados = await user.update(req.body);
      const {
        id, nome, email,
      } = novosDados;
      res.json({
        id, nome, email,
      });
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();
      res.json({
        msg: 'Usuário deletado com sucesso',
      });
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
