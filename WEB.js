

const menu = document.querySelector('.menu');
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const styles = document.querySelector('.styles');


openMenuButton.addEventListener('click', () => {
  menu.classList.add('opened');
  openMenuButton.style.display = 'none'; 
  closeMenuButton.style.display = 'flex'; 
  styles.style.display = 'flex'; 
});


closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('opened');
  closeMenuButton.style.display = 'none'; 
  openMenuButton.style.display = 'flex'; 
  styles.style.display = 'none'; 
});

window.addEventListener("load", function () {
  const isLightMode = localStorage.getItem("lightMode");
  const isDarkMode = localStorage.getItem("darkMode");
  const isMysteriousMode = localStorage.getItem("mysteriousMode");
  const isCuteMode = localStorage.getItem("cuteMode");

  if (isLightMode === "enabled") {
    document.body.classList.add("light-mode");
  } else if (isDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
  } else if (isMysteriousMode === "enabled") {
    document.body.classList.add("mysterious-mode");
  } else if (isCuteMode === "enabled") {
    document.body.classList.add("cute-mode");
  }

  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", function () {
    showSaveConfirmation();
  });
});

var lightButton = document.getElementById("theme1");
lightButton.onclick = function () {
  document.body.classList.remove("root");
  document.body.classList.remove("mysterious-mode");
  document.body.classList.remove("dark-mode");
  document.body.classList.toggle("light-mode");
  
};

var darkButton = document.getElementById("theme2");
darkButton.onclick = function () {
  document.body.classList.remove("root");
  document.body.classList.remove("mysterious-mode");
  document.body.classList.remove("light-mode");
  document.body.classList.toggle("dark-mode");
};

var mysteriousButton = document.getElementById("theme5");
  mysteriousButton.onclick = function () {
  document.body.classList.remove("root");
  document.body.classList.remove("light-mode");
  document.body.classList.remove("dark-mode");
  document.body.classList.toggle("mysterious-mode");
};

var cuteButton = document.getElementById("theme6");
  cuteButton.onclick = function () {
  document.body.classList.remove("root");
  document.body.classList.remove("light-mode");
  document.body.classList.remove("dark-mode");
  document.body.classList.remove("mysterious-mode");
  document.body.classList.toggle("cute-mode");
};

function showSaveConfirmation() {
  if (confirm("Do you want to apply your theme selection?")) {
    alert("Settings saved!");
    const isLightMode = document.body.classList.contains("light-mode") ? "enabled" : "disabled";
    localStorage.setItem("lightMode", isLightMode);
    const isDarkMode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
    localStorage.setItem("darkMode", isDarkMode);
    const isMysteriousMode = document.body.classList.contains("mysterious-mode") ? "enabled" : "disabled";
    localStorage.setItem("mysteriousMode", isMysteriousMode);
    const isCuteMode = document.body.classList.contains("cute-mode") ? "enabled" : "disabled";
    localStorage.setItem("cuteMode", isCuteMode);

  } else {
    alert("Settings not saved.");
  }
};


 





