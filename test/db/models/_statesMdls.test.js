'use strict';

import StatesCls from './../../../src/service/class/state/stateCls';

// let stateCls = new StatesCls();

// beforeEach(() => {
//     const stateCls = new StatesCls();
// });

describe('STATE MODEL', () => {
    let stateCls = new StatesCls();

    describe('model', () => {

        test('It should be defined', () => {            
            expect(stateCls).toBeDefined();            
        });

        test('It should has an id attribute', () => {            
            expect(stateCls.id).toBeDefined();
        });
        
        test('It should has an uuid attribute', () => {            
            expect(stateCls.uuid).toBeDefined();
        });
        
        test('It should has a name attribute', () => {
            expect(stateCls.name).toBeDefined();
        });
    });

    describe('displaying records', () => {        
        test('It should get a state record by "4b687a7d-d541-454d-938c-e012e82ceb62" uuid', () => {            
            // Models.States.findById('4b687a7d-d541-454d-938c-e012e82ceb62').then((stateFetched) => {               
            //     expect(stateFetched.name).toBe('INACTIVE');
            // });

            stateCls.fetchStatesById('4b687a7d-d541-454d-938c-e012e82ceb62').then((stateFetched) => {
                expect(stateFetched.name).toBe('INACTIVE');
            });
        })
    });
});