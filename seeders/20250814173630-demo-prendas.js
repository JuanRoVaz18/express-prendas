'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Prendas', [
      {
        nombrePrenda: 'Zapatillas Running Pro',
        url: 'https://i.pinimg.com/736x/76/55/b3/7655b3ffbed4c0336b6dff799098c7b7.jpg',
        valor: 89.95,
        usuario: 'RunPro',
        categoria: 'deportivo',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Traje Pantalón Premium + Kittten Heels, conjunto',
        url: 'https://i.pinimg.com/736x/f1/9f/33/f19f3377cceb3ccf0d94b03336d5b35b.jpg',
        valor: 145.99,
        usuario: 'EleganceByLaura',
        categoria: 'elegante',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Conjunto Minimalista Primavera: Rockstar Girlfriend',
        url: 'https://i.pinimg.com/736x/5f/9b/4c/5f9b4c3f43a2e2449c0923ff1ec8d976.jpg',
        valor: 65.50,
        usuario: 'UrbanChic',
        categoria: 'casual',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Top Deportivo Transpirable',
        url: 'https://i.pinimg.com/736x/34/43/3a/34433a59b6cf88f5b97acf1a710a167b.jpg',
        valor: 32.75,
        usuario: 'ActiveGirl',
        categoria: 'deportivo',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Conjunto de Lino Verano',
        url: 'https://i.pinimg.com/736x/eb/c8/8e/ebc88e59d45ed06562da7375e825beef.jpg',
        valor: 120.00,
        usuario: 'ClassicGentleman',
        categoria: 'elegante',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Chaqueta Oversize, Bold Color',
        url: 'https://i.pinimg.com/736x/36/90/79/36907936da685417935ed9f9359b0d1d.jpg',
        valor: 45.20,
        usuario: 'StreetTrends',
        categoria: 'casual',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Workwear Elegante, Boss Lady Style',
        url: 'https://i.pinimg.com/736x/13/ff/26/13ff26b58450bf5b4501b9bcac59f179.jpg',
        valor: 89.99,
        usuario: 'LuxuryWardrobe',
        categoria: 'elegante',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Conjunto Primaveral',
        url: 'https://i.pinimg.com/736x/28/94/3c/28943c77385ed54bdd714b30213a46bc.jpg',
        valor: 38.90,
        usuario: 'DailyOutfits',
        categoria: 'casual',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Running Style',
        url: 'https://i.pinimg.com/736x/e3/64/19/e364193d39d2be6275d0149e96013aaf.jpg',
        valor: 75.50,
        usuario: 'OutdoorLife',
        categoria: 'deportivo',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Abrigo de Invierno',
        url: 'https://i.pinimg.com/736x/a7/0d/91/a70d91dce97fc28277ac7d3655445463.jpg',
        valor: 39.99,
        usuario: 'MinimalMan',
        categoria: 'casual',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombrePrenda: 'Reloj Clásico',
        url: 'https://i.pinimg.com/736x/a2/4b/c7/a24bc7ddc5f948640de28044fa7645eb.jpg',
        valor: 299.99,
        usuario: 'WatchCollector',
        categoria: 'elegante',
        usuarioId: 1,  // Asumiendo que el primer usuario tiene ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Prendas', null, {});
  },
};
