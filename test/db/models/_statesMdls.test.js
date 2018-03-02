import models from './../../../src/db/models';

let state = {
    uui: 'fd277342-9db5-423c-999d-867082263fb2',
    name: 'DONE'
};

beforeAll(() => {
    models.sequelize.sync();
});

describe('#stateModel using sequelize', () => {
    test('model state should be defined', () => {
        expect(models.States).toBeDefined();
    });

    test('should add a new state', () => {

    })
});