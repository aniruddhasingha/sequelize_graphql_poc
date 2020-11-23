import student from "../schema/student"

export default{
    Query: {
        async getStudent (parent, { id }, { models },info) {
         return models.Student.findOne({where:{id:id},
        include:[{
          model:models.Hobbies,
          where:{StudentId:id},
          as:'Hobbies'
        }]
        })
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