export default`
type Student {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    Hobbies: [Hobbies!]
    StatusCode:StatusCode
 }
 type StudentNotFoundError{
     message:String!
     StatusCode:StatusCode
 }
 type StatusCode {
     status_code:Int!
 }
 type Hobbies {
    id: Int
    title: String
    student: Student
    }

union StudentResult = Student | StudentNotFoundError
 type Query {
    getStudent(id: Int!): StudentResult
    getAllStudents: [Student!]!
        }
        type Mutation {
            createStudent(firstName: String!,lastName: String!, email: String!): Student!
        }
`