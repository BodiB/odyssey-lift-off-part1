const { gql } = require('apollo-server');

const typeDefs = gql`
type Query{
    tracksForHome:[Track!]!
}

"""
Track: Group of Modules that teaches about a specific topic.
"""
type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}
"""
Author: The author of a Track or a Module
"""
type Author{
    id: ID!
    name: String!
    photo: String
}

`;

module.exports = typeDefs;