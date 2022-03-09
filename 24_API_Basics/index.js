const get = document.querySelector('[get]');
console.log(get)
const post = document.querySelector('[post]');

get.addEventListener('click', () => {
    fetch('http://localhost:8080/feed/posts')
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))
});

post.addEventListener('click', () => {
    fetch('http://localhost:8080/feed/post', {
        method: 'POST',
        body: JSON.stringify({
            title: 'A code post test',
            content:'Testing a post'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))
})