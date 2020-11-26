import student from "../schema/student"

export default{
    Query: {
        async getStudent (parent, { id }, { models },info) {
          // validation 
          const studentRecord = await models.Student.findOne({
            // raw:true,
            where:{id:id},
            include:[{
              model:models.Hobbies,
              as:'Hobbies'
            }]
            })
            if(studentRecord){
              console.log(studentRecord)
              let plain =JSON.parse(JSON.stringify(studentRecord));
              plain.StatusCode={
                status_code:200
              }
         return {
           __typename:"Student",
           ...plain,
         };
        }
        return {
          __typename:"StudentNotFoundError",
          message:"Server Error Could not find Studnet",
          StatusCode:{
            status_code:404
          }
        }
       },
        async getAllStudents (root, args, { models }){
         return models.Student.findAll()
       },
},
Mutation: {

    async createStudent (root, { firstName, lastName,email }, { models }) {
      return models.Student.create({
       firstName,
       lastName,
       email
    })
  },
},
}