import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
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
      const user = await User.findByPk(req.params.id);
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
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const novosDados = await user.update(req.body);
      res.json(novosDados);
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();
      res.json(user);
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
