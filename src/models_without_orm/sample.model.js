const db = require('./database');
const SQL = require('sql-template-strings');

exports.findAll = async () => {
  const data = await db.query('select * from tb_usr_mbr');
  return data;
};

exports.findOne = async (title) => {
  let query = SQL`
        SELECT 
          TITLE
        FROM SAMPLE 
        WHERE TITLE=${title}
        ORDER BY TITLE DESC`;

  const data = await db.query(query);
  return data[0];
};

// exports.deleteComment = async (boardId, commentId) => {
//   let conn = await db.getConnection()
//   try {
//       await conn.beginTransaction()

//       // let del = await conn.query(BoardQuery.deleteComment, [commentId])
//       // if (del[0].affectedRows == 1) {
//       //     let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//       // }
//       await conn.commit()

//       return del[0]
//   } catch (err) {
//       conn.rollback()
//       console.log(err)
//       throw Error(err)
//   } finally {
//       conn.release()
//   }
// }
