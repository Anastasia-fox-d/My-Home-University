function updateProgress(id, percent) {const element = document.getElementById(id);
if (element) {element.style.width = percent + '%';
const label = document.querySelector(`#${id} + .progress-label`);
if (label) {label.textContent = percent + '%';}
}
}
setTimeout(() => updateProgress('math-progress', 80), 2000);
setTimeout(() => updateProgress('python-progress', 95), 3000);
setTimeout(() => updateProgress('english-progress', 65), 4000);
