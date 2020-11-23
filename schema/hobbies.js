export default `
type Hobbies {
    id: Int!
    title: String!
    Student: Student!
    }
    type Student {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        Hobbies: [Hobbies!]!
     }
type Query {
    getHobbies(id: Int!): Hobbies
        }

type Mutation {
    createHobbies( StudentId: Int!, title: String!): Hobbies!
}
`