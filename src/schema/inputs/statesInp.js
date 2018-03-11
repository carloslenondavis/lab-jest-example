import { 
    GraphQLInputObjectType,    
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'StateInput',
    description: 'the state for each task',
    fields: () => ({
        uuid: {
            type: GraphQLID,
            description: 'states uuid'
        },
        name: {
            type: GraphQLString,
            description: 'states name'
        }        
    })
});
