const handleReviewSubmit = async (event) => {
    event.preventDefault();

    const reviewBody = document.getElementById("mreview");
    const reviewText = reviewBody.textContent;

    if (reviewText){
        const submit = await fetch('/movie/:movie_rank',{
            method: 'POST',
            body: JSON.stringify({reviewText}),
            headers: {'Content-Type': 'application/json'}
        });

        if(submit.ok) {
            document.location.replace('/');
        } else {
        alert(submit.statusText);
        }

    }
};

document
    .querySelector(".review-form")
    .addEventListener("submit", handleReviewSubmit);