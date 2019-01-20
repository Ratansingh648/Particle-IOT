'use strict';

module.exports = (sequelize, DataTypes) => {
  var iot = sequelize.define('iot', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
      },
    last_app: {
        type: DataTypes.STRING,
        allowNull: true
      },
    last_ip_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_heard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
    connected: {
        type: DataTypes.STRING,
        allowNull: true
      },
    platform_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cellular: {
      type: DataTypes.STRING,
      allowNull: true
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pinned_build_target: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_build_target: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'iot',
    createdAt: false,
    updatedAt: false
  });
  iot.associate = function(models) {
    // associations can be defined here
  };
  return iot;
};