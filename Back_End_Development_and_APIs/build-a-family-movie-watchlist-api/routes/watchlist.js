import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorizeModification } from "../middleware/authorize.js";
import { getWatchlist, addMovie, updateMovie, deleteMovie } from "../utils/db.js";

const router = express.Router();


// get watchlist
router.get("/:userId", authenticate, (req, res) => {
  const watchlist = getWatchlist(Number(req.params.userId));
  res.status(200).json(watchlist);
});

//add movie
router.post("/:userId/movies", authenticate, authorizeModification, (req, res) =>{
    const movie = addMovie(Number(req.params.userId), req.body);
    res.status(201).json(movie)
})

//update movie
router.put("/:userId/movies/:movieId", authenticate, authorizeModification, (req,res) => {
    const movie = updateMovie(Number(req.params.userId), Number(req.params.movieId), req.body);
    res.status(200).json(movie)
})

//delete movie
router.delete("/:userId/movies/:movieId", authenticate, authorizeModification, (req,res) => {
    deleteMovie(Number(req.params.userId), Number(req.params.movieId));
    res.status(200).json({message: "movie deleted"})
})


export default router;