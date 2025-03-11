import db from "../config/db.js";

export default class Complain {
  static async create(name, subject, message) {
    const query = `INSERT INTO complains (name, subject, message) VALUES (?, ?, ?)`;
    const [result] = await db.query(query, [name, subject, message]);
    return result.insertId;
  }
}
