import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Person ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    })
}

export async function selectPersons(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Person')
        .then(persons=>  res.json(persons))
    });
}

export async function insertPerson(req, res){
    const person = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [person.nome, person.idade]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updatePerson(req, res){
    const person = req.body;
    openDb().then(db=>{
        db.run('UPDATE Person SET nome=?, idade=? WHERE id=?', [person.nome, person.idade, person.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deletePerson(req, res){
    const id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Person WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}