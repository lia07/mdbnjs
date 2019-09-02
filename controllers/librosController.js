var librosModel = require('../models/librosModel.js');

/**
 * librosController.js
 *
 * @description :: Server-side logic for managing libross.
 */
module.exports = {

    /**
     * librosController.list()
     */
    list: function (req, res) {
        librosModel.find(function (err, libross) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting libros.',
                    error: err
                });
            }
            return res.json(libross);
        });
    },

    /**
     * librosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        librosModel.findOne({_id: id}, function (err, libros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting libros.',
                    error: err
                });
            }
            if (!libros) {
                return res.status(404).json({
                    message: 'No such libros'
                });
            }
            return res.json(libros);
        });
    },

    /**
     * librosController.create()
     */
    create: function (req, res) {
        var libros = new librosModel({
			nombre : req.body.nombre,
			autores : req.body.autores

        });

        libros.save(function (err, libros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating libros',
                    error: err
                });
            }
            return res.status(201).json(libros);
        });
    },

    /**
     * librosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        librosModel.findOne({_id: id}, function (err, libros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting libros',
                    error: err
                });
            }
            if (!libros) {
                return res.status(404).json({
                    message: 'No such libros'
                });
            }

            libros.nombre = req.body.nombre ? req.body.nombre : libros.nombre;
			libros.autores = req.body.autores ? req.body.autores : libros.autores;
			
            libros.save(function (err, libros) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating libros.',
                        error: err
                    });
                }

                return res.json(libros);
            });
        });
    },

    /**
     * librosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        librosModel.findByIdAndRemove(id, function (err, libros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the libros.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
