module.exports = {
  getAllPosts: async (req, res) => {
      const {id} = req.params
      const db = req.app.get('db')

      const posts = await db.get_posts([id])
      if(posts[0] && search) {
          
      }
  }  
}