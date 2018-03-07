import Models from './../../../src/db/models';
import Sequelize from 'sequelize';

const stateMock = {    
    name: "IN PROGRESS"
};

beforeAll(() => {
    Models.sequelize.sync();
});

describe('state model', () => {
    describe('model', () => {
        test('It should be defined', () => {
            expect(Models.States).toBeDefined();
        });

        test('It should has a uuid attribute', () => {

        });
    });

    describe('add', () => {
        describe('types for state to send', () => {
            describe('uuid', () => {
                test('It should be defined', () => {
                    expect(stateMock.uuid).toBeDefined();  
                });
                test('uuid should be a UUID type', () => {                
                    expect(stateMock.uuid).toBe(Sequelize.UUID);
                });
            })
        });
        
        test('It should add a new state and return its', () => {
            expect(stateMock).toBeDefined();
            Models.States.create(stateMock).then((stateCreated) => {
                expect(stateCreated.name).toEqual(stateMock.name);
            });
        })
    });
});