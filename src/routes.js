import { Router } from "express";
import { createTable, insertPerson, updatePerson, selectPersons, deletePerson } from './controller/PersonController.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Server running on port 3000 🚀"
    })
})

router.get('/persons', selectPersons);
router.post('/person', insertPerson);
router.put('/person', updatePerson);
router.delete('/person', deletePerson);

export default router;