const router = require('express').Router()
const Comment = require('../models/commentModel')

router.get('/comment', async (req, res) => {
    try {
        const comments = await Comment.find()
        if (comments.length <= 0){
            return res.status(404).json({message: "Belum ada feedback disini"})
        }
        res.status(200).json({
            data: comments,
            totalData: comments.length
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post("/comment", async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ message: "Request belum lengkap" });
    }
    const duplicate = await Comment.findOne({ name: name });

    if (duplicate) {
      return res.status(409).json({ message: "Nama sudah digunakan" });
    }
    const newComment = await Comment.create({
      name,
      comment,
      dateCreated: Date.now(),
    });
    res.status(200).json(newComment);
  } catch (error) {
    console.error("Error in route:", error);
    res.status(500).json({ message: error.message });
  }
});


router.delete('/comment/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedComment = await Comment.findByIdAndDelete(id)

        if (!deletedComment) return res.status(404).send({message: "Book not found"})

        return res.status(200).send(deletedComment)

    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router