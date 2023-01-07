

const coursesModel = require("../models/course") 

// get all courses
// private

const getCourses = async (req,res) => {

    try{
        const courses =await coursesModel.find({user_id: req.user.id});
        res.status(200).json(courses);
    
    }catch(err){
        res.json(err)
    }
    
    
    };

     const getCourse = async (req,res) => {

     const courseId = req.params.courseId
    
        try{
            const c =await coursesModel.findById(courseId);
            res.json(c);
        
        }catch(err){
            res.json(err);
        }
        
        
        };


        const createCourse = async (req,res) => {

            const {title, content,active} = req.body
        
            try{
                const course =await coursesModel.create({
                title,
                content,
                active,
                user_id:req.user.id

                });
                res.json(course);
            
            }catch(err){
                res.json(err);
            }
            
            
            };

        const deleteCourse = async(req,res) =>{

            const id = req.params.courseId;
            res.status(200).json({
                message: "done"
            })
        
        try{
        
            const course =await coursesModel.remove({_id:id});
            res.json(course)
        
        }catch(err){
            res.json(err)
        }
        
        };


        const updateCourses =async(req,res) =>{

            const id = req.params.courseId;
            res.status(200).json({
                message: "done"
            })
        
        try{
        
            const course =await coursesModel.remove({_id:id});
            res.json(course)
        
        }catch(err){
            res.json(err)
        }
        
        }

module.exports = {getCourses, getCourse,createCourse, deleteCourse, updateCourses};
