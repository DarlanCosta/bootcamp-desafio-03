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
          name: "Janaina Rosa de Araujo Costa",
          email: "janainarosadearaujo@gmail.com",
          idade: 27,
          peso: 70,
          altura: 1.77,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Alice Araujo Costa",
          email: "alicecosta@gmail.com",
          idade: 21,
          peso: 12,
          altura: 0.5,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    );
  },

  down: () => {}
};
