const express = require('express');
const router = express.Router();
const { Usuario, Prenda } = require('../models');

// Rutas para `Usuarios`

// Obtener todos los usuarios
router.get('/usuarios/get/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
});

// Obtener un usuario por ID
router.get('/usuarios/get/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
});

// Crear un nuevo usuario
router.post('/usuarios/post', async (req, res) => {
  const { nombre, email, edad } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ nombre, email, edad });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
});

// Actualizar un usuario
router.put('/usuarios/put/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.edad = edad;
    await usuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
});

// Eliminar un usuario
router.delete('/usuarios/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
});

// Rutas para `Prendas`

// Obtener todas las prendas
router.get('/prendas/get/', async (req, res) => {
  try {
    const prendas = await Prenda.findAll({
      include: [Usuario]  // Incluimos la relación con Usuario
    });
    res.status(200).json(prendas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener prendas', error });
  }
});

// Obtener una prenda por ID
router.get('/prendas/get/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prenda = await Prenda.findByPk(id, {
      include: [Usuario]  // Incluimos la relación con Usuario
    });
    if (!prenda) {
      return res.status(404).json({ message: 'Prenda no encontrada' });
    }
    res.status(200).json(prenda);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la prenda', error });
  }
});

// Crear una nueva prenda
router.post('/prendas/post', async (req, res) => {
  const { nombrePrenda, url, valor, usuario, categoria, usuarioId } = req.body;
  try {
    const nuevaPrenda = await Prenda.create({ nombrePrenda, url, valor, usuario, categoria, usuarioId });
    res.status(201).json(nuevaPrenda);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la prenda', error });
  }
});

// Actualizar una prenda
router.put('/prendas/put/:id', async (req, res) => {
  const { id } = req.params;
  const { nombrePrenda, url, valor, usuario, categoria, usuarioId } = req.body;
  try {
    const prenda = await Prenda.findByPk(id);
    if (!prenda) {
      return res.status(404).json({ message: 'Prenda no encontrada' });
    }
    prenda.nombrePrenda = nombrePrenda;
    prenda.url = url;
    prenda.valor = valor;
    prenda.usuario = usuario;
    prenda.categoria = categoria;
    prenda.usuarioId = usuarioId;
    await prenda.save();
    res.status(200).json(prenda);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la prenda', error });
  }
});

// Eliminar una prenda por ID
router.delete('/prendas/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prenda = await Prenda.findByPk(id);
    if (!prenda) {
      return res.status(404).json({ message: 'Prenda no encontrada' });
    }
    await prenda.destroy();
    res.status(200).json({ message: 'Prenda eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la prenda', error });
  }
});

module.exports = router;
