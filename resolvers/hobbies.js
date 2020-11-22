export default{
Query:{    async getHobbies (parent, { id }, { models },info) {
        return models.Hobbies.findByPk(id)
      }
    },
    Mutation: {
        async createHobbies (parent, { StudentId, title }, { models }) {
            return models.Hobbies.create({ StudentId, title })
             }
            },
            Student: {
                async hobbies(hobbies) {
                 return hobbies.getHobbies()
              }
            },
    }
