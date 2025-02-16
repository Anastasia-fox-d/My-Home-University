// Функция для обновления прогресса
function updateProgress(id, percent) {
  document.getElementById(id).style.width = percent + '%';
  document.querySelector(`#${id} + .progress-label`).textContent = percent + '%';
}

// Пример использования (можно удалить или изменить)
setTimeout(() => updateProgress('math-progress', 80), 2000); // Через 2 секунды изменяем прогресс
setTimeout(() => updateProgress('python-progress', 95), 3000); // Через 3 секунды изменяем прогресс
