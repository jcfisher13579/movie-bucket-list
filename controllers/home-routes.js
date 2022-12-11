const router = require('express').Router();
const { Movie, Review } = require('../model');

// GET all movies for homepage
router.get('/', async (req, res) => {
  try {
    // const dbMovieData = await Movie.findAll({
    //   include: [
    //     {
    //       model: Review,
    //       attributes: ['body' ],
    //     },
    //   ],
    // });

    const movies = dbMovieData.map((Movie) =>
      Movie.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Movie
router.get('/Movie/:movie_rank', async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.movie_rank, {
      include: [
        {
          model: Review,
          attributes: [
            'body',
          ],
        },
      ],
    });

    const Movie = dbMovieData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'Movie' template
    res.render('Movie', { Movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Review
router.get('/Review/:movie_rank', async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.movie_rank);

    const Review = dbReviewData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('Review', { Review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST one Review
router.post('/Review/:movie_rank', async (req, res) =>{
  try{
    const newReview = '';
  }catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
