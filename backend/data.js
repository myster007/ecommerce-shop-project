import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Mateusz',
      email: 'mateuszwozniak96@interia.pl',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Jakub',
      email: 'jakub@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      
      name: 'Cube 1',
      category: 'Cube',
      image: '/images/1.jpg',
      price: 60,
      countInStock: 10,
      brand: ' DYMC',
      description: 'high quality and zero waste'

    },
    {
      
      name: 'Cube 2',
      category: 'Cube',
      image: '/images/1.jpg',
      price: 50,
      countInStock: 10,
      brand: ' DYMC',
      description: 'high quality & design'

    },
    {
      
      name: 'Cube 3',
      category: 'Cube',
      image: '/images/1.jpg',
      price: 70,
      countInStock: 10,
      brand: ' DYMC',
      description: 'new pattern '

    },
  ]
}
export default data