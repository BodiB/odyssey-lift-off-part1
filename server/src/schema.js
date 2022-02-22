const { gql } = require('apollo-server');

const typeDefs = gql`
type Query{
    tracksForHome:[Track!]!
    track(id: ID!): Track
}
"""
Module: Single unit of teaching, multiple modules compose a Track.
"""
type Module{
    id: ID!
    title: String!
    length: Int
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
    description: String
    numberOfViews: Int
    modules: [Module!]!
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