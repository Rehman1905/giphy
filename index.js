let a = true
document.querySelector('#add').addEventListener('click', function (e) {
    e.preventDefault()
    const input = document.querySelector('#input')
    const divBtn = document.querySelector('#divBtn')
    if (input.value != '') {
        const btn = document.createElement('button')
        const clear = document.createElement('button')
        clear.id = 'clear'
        clear.textContent='X'
        btn.classList.add('btn')
        divBtn.append(btn)
        btn.textContent = input.value
        btn.append(clear)
        clear.style.display = 'none'
        btn.addEventListener('mouseover', function () {
            btn.style.height = '45px'
            clear.style.display = 'block'
            console.log('asd')
        })
        btn.addEventListener('mouseout', function () {
            clear.style.display = 'none'
            console.log('bsd')
        })
        if (a) {
            btn.addEventListener('click', function () {
                div3.innerHTML = ''
                e.preventDefault()
                add = btn.textContent
                console.log(add)
                melumatGel()
            })
        }
        clear.addEventListener('click', function (e) {
            e.preventDefault()
            divBtn.removeChild(btn)

            a = false

        })
    }
    input.value = ''
})
let button = document.querySelectorAll('.btn')
const div3 = document.querySelector('#div3')
console.log(button)
button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log('basdin')
        div3.innerHTML = ''
        e.preventDefault()
        add = button.textContent
        console.log(add)
        melumatGel()
    })
})
function melumatGel() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZlyCZcncxPHx415I0GHt6WNVi5V4ESAy&q=${add}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips

    `)
        .then(function (result) {
            return result.json()
        }).then(function (result) {

            if (a) {
                for (let i = 0; i < 25; i++) {
                    const p = document.createElement('p');
                    const img = document.createElement('img');
                    const imgContainer = document.createElement('div');

                    p.innerHTML = `Rating:${result.data[i].rating}`;
                    img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`
                    img.addEventListener('click',function(e){
                        e.preventDefault()
                        if(img.src==`https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`){
                            img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy.gif`
                            console.log('alma')
                        }else{
                            img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`
                        }
                    })
                    imgContainer.classList.add('img-container');
                    imgContainer.append(p, img);
                    div3.append(imgContainer);
                    
                }

            }
            a = true

            console.log(result)
        })
}
