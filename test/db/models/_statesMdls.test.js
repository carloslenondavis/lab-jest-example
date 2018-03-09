'use strict';

import StatesCls from './../../../src/service/class/state/stateCls';

<<<<<<< HEAD
// let stateCls = new StatesCls();

// beforeEach(() => {
//     const stateCls = new StatesCls();
// });

describe('STATE MODEL', () => {
    let stateCls = new StatesCls();

=======
describe('STATE MODEL', () => {
    let stateCls = new StatesCls();

>>>>>>> 5219adc9e585c6921151f3ce69090d1cd736bdbf
    describe('model', () => {

        test('It should be defined', () => {            
            expect(stateCls).toBeDefined();            
        });
<<<<<<< HEAD

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
=======

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

    describe('displaying records', () => {        
        test('It should get a state record by "4b687a7d-d541-454d-938c-e012e82ceb62" uuid', () => {
            expect.assertions(1);           
            return stateCls.findById('4b687a7d-d541-454d-938c-e012e82ceb62').then((stateFetched) => {               
                expect(stateCls.name).toBe('INACTIVE');
            });           
>>>>>>> 5219adc9e585c6921151f3ce69090d1cd736bdbf
        })
    });
});