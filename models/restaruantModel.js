const db = require('./conn')

class RestaruantList {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    static async getAll() {
        try {
            const response = await db.any('SELECT * FROM restaruant;');
            return response;
        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
    static async getById(id) {
        try {
            const response = await db.any(`SELECT * FROM restaruant WHERE id = ${id}`);
            return response;
        }
        catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }

}

module.exports = RestaruantList;