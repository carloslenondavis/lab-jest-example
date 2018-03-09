'use strict';
import Models from './../../db/models';

export default class State {
    constructor() {
        this.id = 0;
        this.uuid = "";
        this.name = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    async findById(_uuid) {
        try {                      
            let stateFetched = await Models.States.findById(_uuid);           
            this.id = stateFetched.id;
            this.uuid = stateFetched.uuid;
            this.name = stateFetched.name;
            this.createdAt = stateFetched.createdAt;
            this.updatedAt = stateFetched.updatedAt;
            return stateFetched;
        } catch (error) {            
            console.error(error);
        }
    }
}