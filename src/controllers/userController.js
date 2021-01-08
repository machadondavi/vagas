const mongoose = require('mongoose');
const userSchema = require('../models/userSchema');
const User = mongoose.model('User');

exports.get = (req, res, next) => {
    User.find({ active: true }, 'nome email tel active').then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    let user = new User(req.body);
    user.save().then(x => {
        res.status(201).send({ message: 'Cadastro bem-sucedido!'});
    }).catch(e => {
        res.status(400).send({ message: 'Erro ao cadastrar!', data: e});
    });
};

exports.put = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: {
            nome: req.body.nome,
            email: req.body.email,
            tel: req.body.tel
        }
    }).then(x => {
        res.status(200).send({message: 'Cadastro atualizado!'});
    }).catch(e => {
        res.status(400).send({ message: 'Erro ao atualizar!', data: e})
    });
};


exports.delete = (req, res, next) => {
    User.findOneAndRemove(req.params.id).then(x => {
        res.status(200).send({ message: 'Usuário removido!'});
    }).catch( e => {
        res.send(400).send({ message: 'Erro ao excluir usuário!'})
    })
};