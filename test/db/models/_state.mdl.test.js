'use strict';

import models from './../../../src/db/models';

describe('DB/MODEL STATE', () => {

    describe('Model', () => {
        test('It should be defined', () => {
            expect(models.States).toBeDefined();
        });
    });

    describe('Attributes', () => {
        test('It should has an id attribute', () => {            
            expect(models.States.attributes.id).toBeDefined();
        });
        
        test('It should has an uuid attribute', () => {            
            expect(models.States.attributes.uuid).toBeDefined();
        });
        
        test('It should has a name attribute', () => {
            expect(models.States.attributes.name).toBeDefined();
        });
        
        test('It should has a createdAt attribute', () => {
            expect(models.States.attributes.createdAt).toBeDefined();
        });
    });

    describe('Static Method', () => {        
        test('The findById should get a state by using the uuid as parameter', () => {
            expect.assertions(1);
            return models.States.findById('FD277342-9DB5-423C-999D-867082263FB2').then((stateFetched) => {               
                expect(stateFetched.name).toBe('INACTIVE');
            });
        })
    });
});