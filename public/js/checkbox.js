if (document.getElementById("watched").checked === true) {
    const submitNew = await fetch('/movie/:movie_rank',{
        method: 'POST', 
        body: JSON.stringify({reviewText}),
        headers: {'Content type': 'application/json'}
    })
}; 