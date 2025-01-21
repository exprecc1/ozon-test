# Описание
Этот проект представляет собой прототип блока Progress, выполненного в рамках тестового задания в Ozon Банк,предназначенного для отображения прогресса выполнения процессов в мобильных веб-приложениях.

## Особенности
Состояния блока:

Normal: Базовое состояние, в котором можно управлять размером дуги, отражающей прогресс. Начало дуги соответствует 12 часам, конец дуги движется по часовой стрелке при увеличении значения.

Animated: Состояние, при котором блок или его элементы начинают вращаться по часовой стрелке.

Hidden: Состояние, при котором блок скрывается со страницы.

## Управление:

Value: Текстовый ввод числа от 0 до 100 для управления прогрессом.

Animate: Логический переключатель для включения/выключения анимации.

Hide: Логический переключатель для скрытия/отображения блока.

Адаптация под ориентацию экрана: Приложение адаптируется под вертикальную и горизонтальную ориентацию экрана.

## Установка и запуск:
1. Склонируйте репозиторий:
   git clone https://github.com/exprecc1/ozon-test.git

2. Перейдите в директорию проекта:
   cd ozon-test

3. Откройте файл index.html
   
## Использование
Управление прогрессом: Введите значение от 0 до 100 в поле "Value" для изменения прогресса.

Анимация: Включите переключатель "Animate" для запуска анимации вращения.

Скрытие блока: Включите переключатель "Hide" для скрытия блока.

## Структура проекта
index.html: Основной HTML-файл.

style.css: Файл стилей.

script.js: Файл скриптов для управления состоянием блока.

## Деплой
Проект развернут на GitHub Pages. Вы можете посмотреть его в действии по ссылке: 
https://exprecc1.github.io/ozon-test/
