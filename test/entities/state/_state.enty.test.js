'use strict';

import State from './../../../src/entities/state';
import mockData from './../../common/_mock.data.cmn';

describe('#ENTITY STATE', () => {
    let stateCls = new State();

    describe('Entity', () => {
        test('It should be defined', () => {            
            expect(stateCls).toBeDefined();            
        });
    });

    describe('Attributes', () => {
        test('It should has an id attribute', () => {            
            expect(stateCls.id).toBeDefined();
        });
        
        test('It should has an uuid attribute', () => {            
            expect(stateCls.uuid).toBeDefined();
        });
        
        test('It should has a name attribute', () => {
            expect(stateCls.name).toBeDefined();
        });
        
        test('It should has a createdAt attribute', () => {
            expect(stateCls.createdAt).toBeDefined();
        });
    });

    describe('Functions', () => {        
        test('The findById should get a state by using the uuid as parameter', () => {
            expect.assertions(1);           
            return stateCls.findById(mockData.state.uuid).then((stateFetched) => {
                expect(stateCls.name).toBe('INACTIVE');
            });           
        })
    });
});