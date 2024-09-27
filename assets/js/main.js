// Navbar Languages active links start
const languages = document.querySelectorAll(".language_item .item");

languages.forEach((link) => {
  link.addEventListener("click", (e) => {
    languages.forEach((l) => {
      l.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// Navbar Languages active links end
// ================================================================================

// Navbar language dropdown mobile version start
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownButton = document.querySelector(".dropdown-toggle");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // Убираем класс "active" у всех элементов
    dropdownItems.forEach((i) => i.classList.remove("active"));

    // Добавляем класс "active" на выбранный элемент
    this.classList.add("active");

    // Меняем текст кнопки на текст выбранного элемента
    dropdownButton.textContent = this.textContent;
  });
});
// Navbar language dropdown mobile version end

// ================================================================================
