var config = {
  local: {
      server : {
          ip : 'localhost',
          port : 3001
      },
      database : {
          host : 'localhost',
          port : 5432,
          database : 'postgres',
          username: 'postgres',
          password: 'Ryanstark@19634',
          dialect: 'postgres',
          operatorsAliases: {
              $and: "Op.and",
              $or: "Op.or",
              $eq: "Op.eq",
              $gt: "Op.gt",
              $lt: "Op.lt",
              $lte: "Op.lte",
              $like: "Op.like"}
          ,freezeTableName: true
      }
  }
}

module.exports = (mode) => {return config[process.argv[2]];}
