export default`
type Student {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    hobbies: [Hobbies!]!
 }
 type Hobbies {
    id: Int!
    title: String!
    student: Student!
    }
 type Query {
    getStudent(id: Int!): Student
    getAllStudents: [Student!]!
        }
        type Mutation {
            createStudent(firstName: String!,lastName: String!, email: String!): Student!
        }
`