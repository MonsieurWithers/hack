let selectedNodes = [];
let countdownTimer;
let countdownValue = 60; 
let hundredths = 0; 
let correctPatterns = [
  [6, 9, 3, 1, 4],
  [2, 4, 6, 7, 8],
  [5, 9, 7, 4, 1],
];

let patternChocolat = [[1, 3, 5, 7, 9]];

let attempts = 0;
let successaudio = new Audio('success.mp3');
let chocolat = new Audio('chocolat.m4a');

function showFirstPopup() {
  document.getElementById("identification-btn").style.display = "none"; 
  document.getElementById("popup-1").style.display = "block";
  let codeText = "Attempting to breach security...\n";
  let formattedText = codeText;
  
  
  setInterval(() => {
    formattedText += "ERROR: Unauthorized Access Detected...\n";
    formattedText = formattedText.replace(/ERROR/g, '<span class="error-text">ERROR</span>');
    formattedText = formattedText.replace(/BREACH DETECTED/g, '<span class="breach-detected-text">BREACH DETECTED</span>');
    document.getElementById("scrolling-code").innerHTML = formattedText;
  }, 1000);
  
  setTimeout(showSecondPopup, 5000); 
}

function showSecondPopup() {
  document.getElementById("popup-1").style.display = "none";
  document.getElementById("popup-2").style.display = "block";
}

function selectNode(nodeId) {
  const node = document.getElementById("node-" + nodeId);
  if (node.classList.contains("selected")) {
    node.classList.remove("selected");
    selectedNodes = selectedNodes.filter((n) => n !== nodeId);
  } else {
    node.classList.add("selected");
    selectedNodes.push(nodeId);
  }
}

function validatePattern() {
  if (selectedNodes.length !== 5) {
    showErrorPopup();
    return;
  }

  if (correctPatterns.some(pattern => pattern.every(node => selectedNodes.includes(node)))) {
    attempts++; 
    
    if (attempts < 3) {
      successaudio.play();
      alert(`Pattern accepted! ${3 - attempts} more to go.`);
      document.getElementById("popup-2").style.display = "none";
      selectedNodes = []; 
      showSecondPopup(); 
    } else {
      alert("All patterns accepted! Access Granted.");
      window.location.href = "main.html"; 
    }
  } else if (patternChocolat.some(pattern => pattern.every(node => selectedNodes.includes(node)))) {
    chocolat.play();
    alert('Chocolat');
    showErrorPopup();
  } else {
    showErrorPopup();
  }
}

function showErrorPopup() {
  document.getElementById("popup-2").style.display = "none";
  document.getElementById("error-popup").style.display = "block";
  document.getElementById("error-popup").classList.add('glitch'); 
  startCountdown();
}

function startCountdown() {
  countdownValue = 60; 
  hundredths = 0; 
  updateCountdown();
  
  countdownTimer = setInterval(() => {
    hundredths++; 
    if (hundredths >= 100) {
      hundredths = 0;
      countdownValue--; 
    }
    updateCountdown();
    if (countdownValue <= 0 && hundredths === 0) {
      clearInterval(countdownTimer);
      document.getElementById("error-popup").style.display = "none";
      document.getElementById("popup-2").style.display = "block";
    }
  }, 10); 
}

function updateCountdown() {
  const minutes = Math.floor(countdownValue / 60);
  const seconds = countdownValue % 60;
  document.getElementById("countdown").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${hundredths < 10 ? '0' : ''}${hundredths}`;
}
