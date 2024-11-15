const express =require ('express');
const router = express.Router
const model =require('../model/todomodel')
router.use(express.json())
router.use(express.urlencoded())


router.get('/',async (req,res)=>{
    try {
        const data=await model.find();
    res.status(200).send(data);

    } catch (error) {
        res.status(404).send('Data not found');
    }
   
})


router.post('/add',async(req,res)=>{
    try {
        var item=req.body;    
        const data1=new model(item);
        const saveddata=await data1.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
})



router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await model.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful')
    } catch (error) {
        res.status(404).send('Update unsuccessful')
    }
})


router.delete('/remove/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await model.findByIdAndDelete(id,req.body);
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete unsuccessful')
    }
})

module.exports=router;