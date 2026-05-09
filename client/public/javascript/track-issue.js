


function animateImpactScore(){

  const el = document.getElementById('impact-score');

  let start = 0;

  const end = 87;

  const timer = setInterval(()=>{

    start++;

    el.textContent = start;

    if(start >= end){
      clearInterval(timer);
    }

  },18);

}

animateImpactScore();

function fetchIssue(){

  const id = document.getElementById('track-id').value;

  if(!id.trim()){

    alert('Please enter a complaint ID');

    return;

  }

  alert(
    'Backend API integration will fetch live issue data here.'
  );

}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', toggleTheme);


