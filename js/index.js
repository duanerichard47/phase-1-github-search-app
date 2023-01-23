const gitCont = document.querySelector('#gitub-container')
const gitSearch = document.querySelector('#search')
const gitSubmit = document.querySelector('submit')
const users = document.querySelector('#user-list')
const repos = document.querySelector('#repos-list')
const gitForm = document.querySelector('#github-form')

fetch("https://api.github.com/search/users?q=octocat")
.then(response => response.json())
.then(response => allUsers(response))




function allUsers (userdata){
    gitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const selectedUser = userdata.filter(gitForm.value)// const userdataO = userdata.keys()
    displaySelectedUser(userdata)
    })                       //end of event listner
}                           //end of allUsers function


function displaySelectedUser(userdata){
    const username = document.createElement('div')
    username.textContent = userdata.name
    users.appendChild(username)

    const userUrl = document.createElement('a')
    userUrl.href = userdata.htm_url
    users.appendChild(userUrl)

    const userAvatar = document.createElement('a')
    userAvatar.href = userdata.owner.avatar_url // might not show
    users.appendChild(userAvatar)

    username.addEventListener('click', (event) => findRepo(event))
}

function findRepo(event)
{
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => repos.forEach(repo=> outPutRepo(repo)))
}

function outPutRepo(repo)
{
const reposit = document.createElement('a')
reposit.href = repo.repos_url
repos.appendChild(reposit)
}

/*
input pasted into fetch URL
to search 

have to search for user by sumitting value in search Box need submit event listener for search box

results will display various info about uer username, avator, link to their profile
const users = document.querySelector('#user-list')

click on user from results will request info about user rpositories. 
need another event listener one for click
const repos = document.querySelector('#repos-list')


user seacth endpoing `https://api.github.com/search/users?q=${octocat}`
`https://api.github.com/users/${octocat}/repos`

*/