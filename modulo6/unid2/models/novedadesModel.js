var pool = require('./bd');

async function getNovedades() {
    try  {
        var query = "SELECT * FROM listanovedades";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function insertNovedad(obj) {
    try {
        var query = "insert into listanovedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad }