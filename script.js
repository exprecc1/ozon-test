document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('.preloader');
  const controlsContainer = document.querySelector('.controls-container');
  const valueInput = document.getElementById('valueInput');
  const animateToggle = document.getElementById('animateToggle');
  const hideToggle = document.getElementById('hideToggle');
  const progressBarContainer = document.querySelector('.progress-bar-container');
  const circle = document.querySelector('circle');
  const errorMessage = document.getElementById('errorMessage');

  // Имитация загрузки
  setTimeout(() => {
    preloader.style.display = 'none';
    controlsContainer.classList.remove('hidden');
  }, 1000);

  // Управление прогресс-баром
  valueInput.addEventListener('input', function () {
    const maxLength = 3;
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength);
    }

    const value = parseInt(this.value, 10);

    // Проверка на корректный ввод
    if (isNaN(value) || value < 0) {
      errorMessage.textContent = 'Введите корректное число (от 0 до 100)';
      errorMessage.style.display = 'block';
      return;
    }

    // Проверка на максимальное значение
    if (value > 100) {
      errorMessage.textContent = 'Значение не должно превышать 100!';
      errorMessage.style.display = 'block';
      this.value = 100;
      return;
    }

    // Проверка на минимальное значение
    if (value < 0) {
      errorMessage.textContent = 'Значение не должно быть меньше 0!';
      errorMessage.style.display = 'block';
      this.value = 0;
      return;
    }

    errorMessage.style.display = 'none';

    const offset = 471 - (471 * value) / 100;
    circle.style.strokeDashoffset = offset;
  });

  // Переключатели
  animateToggle.addEventListener('change', function () {
    progressBarContainer.classList.toggle('animated', this.checked);
  });

  hideToggle.addEventListener('change', function () {
    progressBarContainer.classList.toggle('hidden', this.checked);
  });
});
