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
// FORM PAGE START
const downloadBoxes = document.querySelectorAll(".download_box");

downloadBoxes.forEach((box) => {
  const inputId = box.getAttribute("data-input-id");
  const fileInput = document.getElementById(inputId);

  // При клике на div открываем соответствующий input
  box.addEventListener("click", () => {
    fileInput.click();
  });

  // Обработка события выбора файла
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Выбранный файл для ${inputId}:`, file.name);
    }
  });
});
