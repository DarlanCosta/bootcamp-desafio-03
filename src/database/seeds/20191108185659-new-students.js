'use strict';

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "students",
      [
        {
          name: "Darlan de Melo Costa",
          email: "darlandsv@gmail.com",
          idade: 32,
          peso: 82,
          altura: 1.77,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Janaina Rosa de Araujo",
          email: "darlandsv@gmail.com",
          idade: 32,
          peso: 82,
          altura: 1.77,
          created_at: new Date(),
          updated_at: new Date()        },
        {
          name: "Darlan de Melo Costa",
          email: "darlandsv@gmail.com",
          idade: 32,
          peso: 82,
          altura: 1.77,
          created_at: new Date(),
          updated_at: new Date()        }
      ]
    );
  },

  down: () => {}
};
