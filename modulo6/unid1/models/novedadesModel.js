var pool = require('./bd');

async function getNovedades() {
    try  {
        var query = "SELECT * FROM listanovedades ORDER BY ID DESC";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getNovedades}