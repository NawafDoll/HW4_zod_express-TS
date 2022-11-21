import e from "express";
import express, { Express, Request, Response } from "express";
import validate from '../middelwire/validate'


import {
    parkSchema,
    parkSchemaType,
  } from '../zodSchema/zod_schema';
  
  const router = express.Router();
  
  let parks: parkSchemaType[] = [];
  
  router.get('/', (req, res, next) => {
    return res.json(parks);
  });
  
  router.post('/', validate(parkSchema), (req, res, next) => {
    const newPark = req.body as  parkSchemaType;
  
    parks.push(newPark);
    return res.status(201).json({ message: 'Employee Added !' });
  });

  router.delete('/:id',(req:Request,res:Response)=>{
    const { id } = req.params;
    
   const newPark= parks.filter((employee:any)=>{
    return employee.id !== id ;
   });
   parks =newPark;
   return res.json({
    message:"employee Deleted"
   })
});


router.put("/:id",(req:Request,res:Response)=>{
    const updatePark = req.body as  parkSchemaType;
    const { id } = req.params;
   const newPark = parks.filter((employee:any)=>{
    return employee.id !== id ;
   })
   
   newPark.push(updatePark )
   parks =  newPark;
   return res.json({
    message:"Todo Update"
   })
})

  
  export default router