import models from './../../../src/db/models';
import states from './../../../src/db/models/states';
import sequelize from 'sequelize';

let newState = {
    uui: 'fd277342-9db5-423c-999d-867082263fb2',
    name: 'INACTIVE'
};

beforeAll(() => {
    models.sequelize.sync();
});

describe('state model', () => {
    test('model state should be defined', () => {
        expect(states).toBeDefined();
    });

    describe('add', () => {        
        test('It should add a new state and return its', () => {
            expect(newState).toBeDefined();
            models.States.create(newState).then((newState) => {
                expect(newState.uuid).toEqual(newState.name);
            });

            // models.sequelize.sync({
            //     force: true,
            //     logging: console.log
            // }).then(() => {
            //     return states.create(newState);
            // });
        })
    });    
});