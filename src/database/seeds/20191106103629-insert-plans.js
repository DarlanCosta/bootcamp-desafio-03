'use strict';

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "plans",
      [
        {
          title: "Start: Plano de 1 mês por R$129",
          duration: 1,
          price: 129,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Gold: Plano de 3 mês por R$109/mês",
          duration: 3,
          price: 109,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Diamond: Plano de 6 meses por R$89/mês",
          duration: 6,
          price: 89,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    );
  },

  down: () => {}
};
