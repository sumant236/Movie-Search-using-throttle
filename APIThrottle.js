window.addEventListener('load', ()=>{
    const input = document.getElementById('input');
    input.addEventListener('keyup', throttler())
})

function loadThrottle() {
    var value = document.getElementById('input').value;
    fetch(`http://www.omdbapi.com/?apikey=5be517b5&s=${value}`)
    .then(resolve => resolve.json())
    .then(resolve => 
        {console.log(resolve);
            showMovieList(resolve.Search, value)})
    .catch(err => console.log(err));
}
function throttler() {
    let last = 0;
    return function() {
        let temp = new Date()
        const now = temp.getTime();
        console.log(last, now);
        if((now - last) > 200){
            last = now;
            console.log(last)
            loadThrottle()
        }
    }
}
function showMovieList(data, value){
    console.log(data);
    const input = document.getElementById('search-bar')
    let div = document.getElementById('container');
    div.innerHTML = null;
    for(let movie in data){
        if(data!== undefined){
            const a = document.createElement('a');
            a.textContent = `${data[movie].Title}`
            a.href = '#'
            const br = document.createElement('br')
            // console.log(data)
            div.append(a, br);
            // div.style.border = '1px Solid black'
            div.style.background = 'white'
            div.style.color = 'black'
        }    
        else{
            let div = document.getElementById('container');
            div.style.border = '1px solid black';
        }
    }
    input.append(div);
}