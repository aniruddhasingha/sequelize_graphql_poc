export default{
Query:{    async getHobbies (parent, { id }, { models },info) {
        return models.Hobbies.findOne({where:{id:id},
          include:[{
            model:models.Student,
            as:'Student'
          }]
        })
      }
    },
    Mutation: {
        async createHobbies (parent, { StudentId, title }, { models }) {
            return models.Hobbies.create({ StudentId, title })
             }
            }
    }
