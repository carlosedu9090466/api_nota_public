"use strict";const express = require('express');
const router = express.Router();
const BuscaTurmaAlunoController = require('../controllers/BuscaTurmaAlunoController');

//router.get('/turmas',BuscaTurmaAlunoController.buscarTurmaAluno)
router.get('/turmas/:id&:aluno?',BuscaTurmaAlunoController.buscaTurma);

module.exports = router;