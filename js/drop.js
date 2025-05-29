

const button = document.querySelector('.nav-button')
const drop = document.querySelector('.drop')


button.addEventListener('click', function () {
  drop.classList.toggle("show")

})

window.addEventListener('click', function(event) {
  // Проверяем, что клик был не по кнопке открытия меню и не по элементам меню
  if (!event.target.closest('.nav-button') && !event.target.closest('.drop')) {
    drop.classList.remove("show")
  }
  if (event.target.closest('.drop')) {
    drop.classList.remove("show")
  }
});
