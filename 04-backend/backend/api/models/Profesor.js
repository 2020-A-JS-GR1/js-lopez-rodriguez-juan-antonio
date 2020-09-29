/**
 * Profesor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',    //nombre conexion
  tableName: 'profesor',   // nombre tabla

  attributes: {

    cedula_profesor:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      columnName: 'cedula_profesor',
      unique: true, // Por defecto es false
      minLength: 9,
      maxLength: 25
    },
    nombre_profesor:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    apellido_profesor:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    birthdate_profesor:{
      type: 'string',
      minLength: 9,
      required: true,
    },
    estado_civil_profesor:{
      type: 'string',
      isIn: ['casado', 'soltero','divorciado','union libre'],
      required: true,
    },
    doctorado_profesor:{
      type: 'string',
      isIn: ['si', 'no'],
      required: true,
    },



  },

};

