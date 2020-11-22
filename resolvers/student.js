export default{
    Query: {
        async getStudent (parent, { id }, { models },info) {
         return models.Student.findByPk(id)
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
Hobbies: {
    async student(student) {
     return student.getStudent()
   }
 }
}