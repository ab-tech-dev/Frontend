// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// THEME
const theme = document.querySelector("#theme");
const themeCard = document.querySelector("#themeCard");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// MESSAGES
const messages = document.querySelector(".messages");
const messagesNotification = document.querySelector("#messages-notifications");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// FORM
const authDiv = document.querySelector(".authenticate-acct");
const authForm = document.querySelector(".auth");
const loginForm = document.querySelector(".loginDiv");
const registerForm = document.querySelector(".registerDiv");
const authBtn = document.querySelector(".auth-btn");
const loginSwitchBtn = document.querySelector(".loginSwitch");
const registerSwitchBtn = document.querySelector(".registerSwitch");
const userTypeInput = document.querySelector("#user-type");
const userSelect = document.querySelector(".user-select");
const realtorSelect = document.querySelector(".realtor-select");

// Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// MESSAGES
if (messagesNotification) {
  messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display =
      "none";
    setTimeout(() => {
      messages.style.boxShadow = "none";
    }, 2000);
  });
}

// Search chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.includes(val)) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

if (messageSearch) {
  messageSearch.addEventListener("keyup", searchMessage);
}

// DISPLAY THEME CUSTOMIZATION
const openThemeModal = (el) => {
  themeModal.style.display = "grid";
  el.style.display = "grid";
};

if (theme) {
  theme.addEventListener("click", () => {
    authDiv.style.display = "none";
    openThemeModal(themeCard);
  });
}
if (authBtn) {
  authBtn.addEventListener("click", () => {
    themeCard.style.display = "none";
    openThemeModal(authDiv);
  });
}
if (registerSwitchBtn) {
  registerSwitchBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    openThemeModal(registerForm);
  });
}
if (loginSwitchBtn) {
  loginSwitchBtn.addEventListener("click", () => {
    registerForm.style.display = "none";
    openThemeModal(loginForm);
  });
}

if (userSelect) {
  userSelect.addEventListener("click", () => {
    realtorSelect.classList.remove("active");
    userSelect.classList.add("active");
    userTypeInput.value = "user";
  });
}
if (realtorSelect) {
  realtorSelect.addEventListener("click", () => {
    userSelect.classList.remove("active");
    realtorSelect.classList.add("active");
    userTypeInput.value = "realtor";
  });
}

// CLOSE THEME MODAL WHEN CLICKING OUTSIDE
if (themeModal) {
  themeModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("customize-theme")) {
      themeModal.style.display = "none";
      theme.classList.remove("active");
      menuItems[0].classList.add("active");
    }
  });
}

// remove active class spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// FONTS
fontSizes.forEach((sizes) => {
  sizes.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    sizes.classList.toggle("active");

    if (sizes.classList.contains("font-size1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (sizes.classList.contains("font-size2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (sizes.classList.contains("font-size3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (sizes.classList.contains("font-size4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-0.5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (sizes.classList.contains("font-size5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-8.2rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    // change font size of the root html
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// remove active class spans or font size selectors
const removeColorSelector = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    removeColorSelector();
    let primaryHue;
    color.classList.toggle("active");

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

// Background 1 (Default)
Bg1.addEventListener("click", () => {
  lightColorLightness = "95%";
  whiteColorLightness = "100%";
  darkColorLightness = "17%";

  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");

  changeBg();
});

// Background 2 (Darker Theme)
Bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";

  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");

  changeBg();
});

// Background 3 (Dark Mode)
Bg3.addEventListener("click", () => {
  lightColorLightness = "0%";
  whiteColorLightness = "10%";
  darkColorLightness = "95%";

  Bg3.classList.add("active");
  Bg2.classList.remove("active");
  Bg1.classList.remove("active");

  changeBg();
});
