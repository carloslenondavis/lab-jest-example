'use strict';
import Models from './../../../db/models';

export default class StateCls {
    constructor() {
        this.id = 0;
        this.uuid = "";
        this.name = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    findById(_uuid) {
        try {
            return Models.States.findById(_uuid).then((stateFetched) => {
                this.id = stateFetched.id;
                this.uuid = stateFetched.uuid;
                this.name = stateFetched.name;
                this.createdAt = stateFetched.createdAt;
                this.updatedAt = stateFetched.updatedAt;
            }, (error) => {
                console.error(error);                
            });
        } catch (error) {            
            console.error(error);
        }
    }
}