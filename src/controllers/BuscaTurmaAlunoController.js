const con = require('../database/database');

class BuscaTurmaAlunoController {
   
    buscaTurma(req, res){
        try{
            const {id} = req.params;
            const {aluno} = req.params;
            
            if(!id || id == null || id === undefined){
                return res.status(400).json({
                    errors: ['faltou o ID da turma'],
                  }); 
            }

            const results = sqlQuery(con,id,aluno);

            function sqlQuery(con,id,aluno){
                return new Promise((resolve, reject) => {
                   
                    con.query("SELECT h.codigo,h.descricao,CASE t.turno WHEN 'N' THEN g.ch_noite ELSE g.ch END AS ch,g.reprova, n.* FROM nota_aluno n INNER JOIN habilitacao h ON h.codigo = n.id_disciplina INNER JOIN turma t ON t.id = n.id_turma INNER JOIN grade_curricular g ON g.id_serie = t.id_grade AND g.id_disciplina = n.id_disciplina AND g.id_modalidade = t.modalidade AND g.ano = t.ano AND g.inep = t.inep WHERE n.id_turma = ? and n.id_aluno = ? Order by h.impressao",[id,aluno], function(error, results, fields){
                        if(error) {
                            console.log(error)
                            reject(error)
                        }
                        //con.end();
                        resolve(results)
                    })
                })
            }
           
            results.then(resultado => {
                //const result = notaCalculosController.calculoMedias(resultado)
                //console.log(result) 
                return res.json(resultado)

            }, erro => {
                return res.status(400).json({
                    errors: e.errors.map((erro) => erro.message),
                  });
            })
         
        }catch (e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
              });
        }
    }
    
}

module.exports = new BuscaTurmaAlunoController()