const model = document.querySelector(".model");
const btnShowmodel = document.querySelectorAll(".show-model");
const btnclosemodel = document.querySelector(".close-model");
const overlay = document.querySelector(".overlay")

function openModel() {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModel() {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnShowmodel.length; i++)
    btnShowmodel[i].addEventListener('click', openModel);


btnclosemodel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !model.classList.contains('hidden'))
        closeModel();
})