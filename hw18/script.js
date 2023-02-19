// дістати посилання на контейнер, куди прикріплюватимемо
const container = document.createElement('div');
const postsRequest = new XMLHttpRequest();
postsRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')
postsRequest.responseType = 'json'

postsRequest.send()

const hideComments = (div) => {
    let comments = div.lastElementChild
    comments.remove()
}
const showComments = (comments, div) => {

    const divComment = document.createElement('div')

    comments.forEach((obj) => {
        let {body: comment} = obj
        const p = document.createElement('p')
        p.innerText = comment

        divComment.append(p)
    })

    div.append(divComment)
}

const getPostComments = (id, event) => {

    const xhrComments = new XMLHttpRequest()

    xhrComments.open('GET', `'https://jsonplaceholder.typicode.com${id}/commments'`)

    xhrComments.responseType = 'json'

    xhrComments.send()

    const button = event.target
    const parent = event.target.parentNode;

    xhrComments.onload = () => {

        let result = xhrComments.response

        if(button.innerText === 'Show comments'){
            button.innerText = 'Hide comments'
            showComments(result, parent)

        }else if(button.innerText === 'Hide comments'){
            button.innerText = 'Show comments'
            hideComments(parent)
        }

    }
}

const renderPost = (postsList, container) => {
    const posts = postsList.map((post) => {
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postText = document.createElement('p');
        const button = document.createElement('button');

        postTitle.innerText = post.title
        postText.innerText = post.body
        button.innerText = 'Show comments'
        postContainer.classList.add('post-container')
        button.classList.add('button')

        postContainer.append(postTitle, postText, button)

        let postsId = post.id

        button.addEventListener('click', (event) => {
            getPostComments(postsId, event)
        })
    })

    container.append(...posts)

}

postsRequest.onload = () => {
    const {response} = postsRequest
    renderPost(response, container)
}