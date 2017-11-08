exports.userPos = (req, res) => {
  console.log(req.body);
  res.json(req.body)
};

exports.getPosts = async(req, res) => {
  const posts = await Post.find().sort({$natural:-1});
  console.log(posts)
  res.json(posts)
};
