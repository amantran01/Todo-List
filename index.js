// const TextNode = document.createElement("li");
// TextNode.textContent = "chandan";
// const TodoList = document.querySelector(".todo-list");
// // TodoList.append(TextNode);
// TodoList.prepend(TextNode);
// const todo = document.querySelector(".todo-list li");
// todo.remove();
// const todo = document.querySelector("li");
// const TodoList = document.querySelector(".todo-list");
// const TextNode = document.createElement("li");
// TextNode.textContent = "chandan";
// TodoList.before(TextNode);
// const n = document.querySelector(".signup");
// todo.textContent += "chandan";
// n.remove();

////>>>>>>>Another method
// const todo = document.querySelector(".todo-list");
// todo.insertAdjacentHTML("afterbegin", "<li>HEY i love</li>"


// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "Chandan kumar"
// const li2 = li.cloneNode(true)
// ul.appendChild(li)
// ul.prepend(li2)




// const li2 = document.querySelector(".Todo1")
// const li = document.createElement("li");
// li.textContent = "Chandan kumar"
// // ul.insertBefore(li, li2);
// // ul.replaceChild(li, li2)
// ul.removeChild(li)

// diamension >>>>>>
// const sec = document.querySelector(".todo-section");
// const info = sec.getBoundingClientRect();
// console.log(info);
// const btn = document.querySelector(". btn-headline")
// btn.addEventListener("click", function () {
//     console.log("I love someone very much")
// })
const formInput = document.querySelector(".form-todo input[type = 'text']")
const todo = document.querySelector(".todo-list");
const form = document.querySelector(".form-todo")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // todo.insertAdjacentHTML("beforeend", "<li>${form.value}</li>")
    console.log(formInput.value)
    const input = formInput.value;
    const Newli = document.createElement("li");
    const newLiInnerHtml = `
        <span>${input}</span>
        <div class="todo-button">
            <button class="todobutton Done">Done</button>
            <button class="todobutton remove">Remove</button>
        </div>
        `
    Newli.innerHTML = newLiInnerHtml;
    if (formInput) {
        todo.append(Newli);

    }
    console.log(Newli)
    formInput.value = ""
})

todo.addEventListener("click", (e) => {
    if (e.target.classList.contains("Done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan)
        liSpan.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("remove")) {
        const liSpan = e.target.parentNode.parentNode;
        liSpan.remove();

    }
})

const signup = document.querySelector(".signup")
// const Username = document.querySelector(".signform input[type = 'text']")
// var name = [];

signup.addEventListener("submit", (e) => {
    e.preventDefault();
    signup.remove();
}, true)
