import Models from './../../../src/db/models';

beforeAll(() => {
    Models.sequelize.sync();
});

describe('STATE MODEL', () => {
    describe('model', () => {
        test('It should be defined', () => {
            expect(Models.States).toBeDefined();            
        });

        test('It should has an id attribute', () => {
            expect(Models.States.attributes.id).toBeDefined();
        });
        
        test('It should has an uuid attribute', () => {
            expect(Models.States.attributes.uuid).toBeDefined();
        });
        
        test('It should has a name attribute', () => {
            expect(Models.States.attributes.name).toBeDefined();
        });
    });

    describe('displaying records', () => {
        test('It should get the INACTIVE state', () => {            
            Models.States.findById('4b687a7d-d541-454d-938c-e012e82ceb62').then((stateFetched) => {               
                expect(stateFetched.name).toBe('INACTIVE');
            });
        })
    });
});