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

    fetchStatesById(_uuid) {
        try {
            Models.States.findById(_uuid);
        } catch (error) {
            throw new Error(error);
        }
    }
}