exports.getPeserta = async (req, res) => {
  try {
    const query = `SELECT *
                   FROM peserta`
    const data = await db.query(query, (err, result) => {
      if (err) {
        console.log('Insert data error')
        res.status(500)
      }
      res.send(result.rows)
    })
  } catch (error) {
    console.log(error.message)
  }
}
