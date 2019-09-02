var autoresModel = require('../models/autoresModel.js');

/**
 * autoresController.js
 *
 * @description :: Server-side logic for managing autoress.
 */
module.exports = {

    /**
     * autoresController.list()
     */
    list: function (req, res) {
        autoresModel.find(function (err, autoress) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting autores.',
                    error: err
                });
            }
            return res.json(autoress);
        });
    },

    /**
     * autoresController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        autoresModel.findOne({_id: id}, function (err, autores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting autores.',
                    error: err
                });
            }
            if (!autores) {
                return res.status(404).json({
                    message: 'No such autores'
                });
            }
            return res.json(autores);
        });
    },

    /**
     * autoresController.create()
     */
    create: function (req, res) {
        var autores = new autoresModel({
			nombre : req.body.nombre,
			libros : req.body.libros

        });

        autores.save(function (err, autores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating autores',
                    error: err
                });
            }
            return res.status(201).json(autores);
        });
    },

    /**
     * autoresController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        autoresModel.findOne({_id: id}, function (err, autores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting autores',
                    error: err
                });
            }
            if (!autores) {
                return res.status(404).json({
                    message: 'No such autores'
                });
            }

            autores.nombre = req.body.nombre ? req.body.nombre : autores.nombre;
			autores.libros = req.body.libros ? req.body.libros : autores.libros;
			
            autores.save(function (err, autores) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating autores.',
                        error: err
                    });
                }

                return res.json(autores);
            });
        });
    },

    /**
     * autoresController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        autoresModel.findByIdAndRemove(id, function (err, autores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the autores.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
