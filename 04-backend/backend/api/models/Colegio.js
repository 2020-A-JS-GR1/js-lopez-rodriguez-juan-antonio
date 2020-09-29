/**
 * Colegio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',    //nombre conexion
  tableName: 'colegio',   // nombre tabla

  attributes: {

    nombre_colegio:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    direccion_colegio:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    aforo_colegio:{
      type: 'number',
      required: true,
    },
    bachillerato_unificado_colegio:{
      type: 'string',
      isIn: ['si', 'no'],
      required: true,
    },
    licencia_colegio:{
      type: 'string',
      isIn: ['si', 'no'],
      required: true,
    },

  },

};

