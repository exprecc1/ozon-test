class ProgressBar {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.render();
    this.init();
  }

  render() {
    this.container.innerHTML = `
      <div class="app-container">
        <!-- Прелоадер -->
        <div class="preloader">
          <div class="loader"></div>
        </div>

        <!-- Прогресс-бар -->
        <div class="progress-bar-container hidden">
          <div class="progress-bar">
            <div class="progress-bar-fill">
              <div class="progress-bar-fill-inner"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <circle cx="80" cy="80" r="75" stroke-linecap="butt" stroke="#1b15e9" />
            </svg>
          </div>
        </div>

        <div class="controls-container hidden">
          <div class="control-group">
            <div class="custom-input">
              <input type="number" class="valueInput" min="0" max="100" value="0" />
            </div>
            <label>Value</label>
          </div>
          <div class="error-message" style="display: none; color: red; margin-top: 10px"></div>
          <div class="control-group">
            <label class="switch">
              <input type="checkbox" class="animateToggle" />
              <span class="slider round"></span>
            </label>
            <span>Animate</span>
          </div>
          <div class="control-group">
            <label class="switch">
              <input type="checkbox" class="hideToggle" />
              <span class="slider round"></span>
            </label>
            <span>Hide</span>
          </div>
        </div>
      </div>
    `;

    this.preloader = this.container.querySelector('.preloader');
    this.controlsContainer = this.container.querySelector('.controls-container');
    this.valueInput = this.container.querySelector('.valueInput');
    this.animateToggle = this.container.querySelector('.animateToggle');
    this.hideToggle = this.container.querySelector('.hideToggle');
    this.progressBarContainer = this.container.querySelector('.progress-bar-container');
    this.circle = this.container.querySelector('circle');
    this.errorMessage = this.container.querySelector('.error-message');
  }

  init() {
    this.simulateLoading();
    this.setupEventListeners();
  }

  simulateLoading() {
    setTimeout(() => {
      this.preloader.style.display = 'none';
      this.controlsContainer.classList.remove('hidden');
      this.progressBarContainer.classList.remove('hidden');
    }, 1000);
  }

  setupEventListeners() {
    this.valueInput.addEventListener('input', () => this.handleInputChange());

    this.animateToggle.addEventListener('change', () => this.toggleAnimation());
    this.hideToggle.addEventListener('change', () => this.toggleVisibility());
  }

  handleInputChange() {
    const maxLength = 3;
    if (this.valueInput.value.length > maxLength) {
      this.valueInput.value = this.valueInput.value.slice(0, maxLength);
    }

    const value = parseInt(this.valueInput.value, 10);

    if (isNaN(value) || value < 0) {
      this.showError('Введите корректное число (от 0 до 100)');
      return;
    }

    if (value > 100) {
      this.showError('Значение не должно превышать 100!');
      this.valueInput.value = 100;
      return;
    }

    if (value < 0) {
      this.showError('Значение не должно быть меньше 0!');
      this.valueInput.value = 0;
      return;
    }

    this.errorMessage.style.display = 'none';
    this.updateProgressBar(value);
  }

  incrementValue() {
    let value = parseInt(this.valueInput.value, 10);
    value = Math.min(value + 1, 100);
    this.valueInput.value = value;
    this.updateProgressBar(value);
  }

  decrementValue() {
    let value = parseInt(this.valueInput.value, 10);
    value = Math.max(value - 1, 0);
    this.valueInput.value = value;
    this.updateProgressBar(value);
  }

  updateProgressBar(value) {
    const offset = 471 - (471 * value) / 100;
    this.circle.style.strokeDashoffset = offset;
  }

  toggleAnimation() {
    this.progressBarContainer.classList.toggle('animated', this.animateToggle.checked);
  }

  toggleVisibility() {
    this.progressBarContainer.classList.toggle('hidden', this.hideToggle.checked);
  }

  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.style.display = 'block';
  }
}

// Создаем экземпляр ProgressBar
const progressBar = new ProgressBar('app-container');
