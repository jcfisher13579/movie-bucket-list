const Users = require('./Users');
const Movie = require('./Movie');
const Review = require ('./Review');

Movie.hasOne(Review, {
    foreignKey: 'movie_rank'
});

Review.belongsTo(Movie, {
    foreignKey: 'movie_rank'
});


module.exports = { Users, Movie, Review};
