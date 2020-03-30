module.exports = {
  getAllPosts: async (req, res) => {
    const { id } = req.params;
    const { search, userPosts } = req.query;
    const db = req.app.get("db");

    const posts = await db.get_posts();
    if (userPosts === "true" && search) {
      const searchedPosts = posts.filter(post => {
        return post.title.includes(search);
      });
      res.status(200).send(searchedPosts);
    } else if (userPosts === "false" && !search) {
      const notAuthor = [];
      posts.map(post => {
        if (post.user_id !== 6) {
          notAuthor.push(post);
        }
      });
      res.status(200).send(notAuthor);
    } else if (userPosts === "false" && search) {
      const searchedPosts = posts.filter(post => {
        return post.title.includes(search);
      });

      const notAuthor = [];
      posts.map(post => {
        if (post.user_id !== 6) {
          notAuthor.push(post);
        }
      });
      res.status(200).send(notAuthor && searchedPosts);
    } else if (userPosts === "true" && !search) {
      res.status(200).send(posts);
    }
  },

  getOnePost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    const onePost = await db.get_post([id]);
    if (onePost[0]) {
      res.status(200).send(onePost);
    }
  },

  createPost: (req, res) => {
    const { id } = req.params;
    const { title, content, img } = req.body;
    const db = req.app.get("db");
    // console.log(req.body)
    db.add_post([id, title, content, img])
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
