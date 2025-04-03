// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// THEME
const themes = document.querySelectorAll(".theme");
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

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    authDiv.style.display = "none";
    openThemeModal(themeCard);
  });
});

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
      themes.classList.remove("active");
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

// NOTIFICATIONS POPUP HANDLING
const notificationsPopup = document.querySelector('.notifications-popup');
const backBtn = document.querySelector('.back-btn');

if (backBtn) {
  backBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    notificationsPopup.style.display = 'none';
    changeActiveItem();
    menuItems[0].classList.add('active');
  });
}

// Close notifications when clicking outside
document.addEventListener('click', (e) => {
  if (notificationsPopup && 
      notificationsPopup.style.display === 'block' && 
      !notificationsPopup.contains(e.target) && 
      !e.target.closest('#notifications')) {
    notificationsPopup.style.display = 'none';
    changeActiveItem();
    menuItems[0].classList.add('active');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
});

closeMenuBtn.addEventListener('click', closeMenu);
themes.forEach((theme) => {
  theme.addEventListener('click', closeMenu);
});
mobileOverlay.addEventListener('click', closeMenu);

function closeMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
}

// Reorder bottom navigation items for mobile
window.addEventListener('resize', adjustBottomNav);
window.addEventListener('DOMContentLoaded', adjustBottomNav);

function adjustBottomNav() {
  const bottomNav = document.querySelector('.left .sidebar');

  if (bottomNav) {
    // First, remove any existing inserted button so you don't duplicate
    const existingBtn = bottomNav.querySelector('.create-button');
    if (existingBtn) {
      existingBtn.remove();
    }

    // Only insert if window width <= 500
    if (window.innerWidth <= 500) {
      // Create the div element
      const createBtn = document.createElement('div');
      createBtn.classList.add('btn', 'btn-primary', 'create-button');

      // Set the inner HTML
      createBtn.innerHTML = `
        <i class="uil uil-plus"></i>
        <label for="create-post">Create Post</label>
      `;

      // Insert at the desired position (before the 3rd item if at least 3 items)
      const items = bottomNav.children;
      if (items.length >= 3) {
        bottomNav.insertBefore(createBtn, items[2]);
      } else {
        // If less than 3 items, just append at the end
        bottomNav.appendChild(createBtn);
      }
    }
  }
}

// Call it on load
window.addEventListener('load', adjustBottomNav);
// Call it on window resize
window.addEventListener('resize', adjustBottomNav);

// MESSAGES POPUP HANDLING
const messagesPopup = document.querySelector('.messages-popup');
const messagesContainer = document.querySelector('.messages-container');

if (messages && messagesContainer) {
  // Clear existing popup content
  messagesPopup.innerHTML = '';

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'messages-overlay';
  messagesPopup.appendChild(overlay);

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'messages-content';
  messagesPopup.appendChild(contentWrapper);

  // Create header with back button
  const header = document.createElement('div');
  header.className = 'popup-header';
  header.innerHTML = `
    <i class="uil uil-arrow-left back-btn"></i>
    <h3>Messages</h3>
  `;
  contentWrapper.appendChild(header);

  // Add back button event listener
  const backBtn = header.querySelector('.back-btn');
  backBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    changeActiveItem();
    menuItems[0].classList.add('active');
    messagesPopup.classList.remove('active');
  });

  // Create container for messages content
  const container = document.createElement('div');
  container.className = 'messages-container';
  contentWrapper.appendChild(container);

  // Clone and append the search bar
  const searchBar = messages.querySelector('.search-bar').cloneNode(true);
  container.appendChild(searchBar);

  // Clone and append the category section
  const messageCategory = messages.querySelector('.category').cloneNode(true);
  container.appendChild(messageCategory);

  // Clone and append all messages
  const messagesList = messages.querySelectorAll('.message');
  messagesList.forEach(msg => {
    container.appendChild(msg.cloneNode(true));
  });

  // Handle message search in popup
  const popupSearch = container.querySelector('#message-search');
  if (popupSearch) {
    popupSearch.addEventListener('keyup', () => {
      const val = popupSearch.value.toLowerCase();
      const messages = container.querySelectorAll('.message');
      messages.forEach((chat) => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.includes(val)) {
          chat.style.display = 'flex';
        } else {
          chat.style.display = 'none';
        }
      });
    });
  }
}

// Update messages notification click handler
if (messagesNotification) {
  messagesNotification.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 500) {
      messagesPopup.classList.add('active');
      document.querySelector('#messages-notifications .notification-count').style.display = 'none';
    }
  });
}

// Close messages popup when clicking outside
document.addEventListener('click', (e) => {
  if (messagesPopup?.classList.contains('active')) {
    const isClickInsideContent = e.target.closest('.messages-content');
    const isClickOnMessageIcon = e.target.closest('#messages-notifications');

    if (!isClickInsideContent && !isClickOnMessageIcon) {
      messagesPopup.classList.remove('active');
    }
  }
});

// Prevent clicks inside the popup from closing it
messagesPopup?.addEventListener('click', (e) => {
  if (e.target.classList.contains('messages-overlay')) {
    messagesPopup.classList.remove('active');
  }
});

// Ensure only the login button opens the login page
const loginButton = document.querySelector('.auth-btn .btn-primary');
const profilePhoto = document.querySelector('.auth-btn .profile-photo');

if (loginButton) {
  loginButton.addEventListener('click', () => {
    themeCard.style.display = 'none';
    openThemeModal(authDiv);
  });
}

// Prevent profile photo from triggering the login page
if (profilePhoto) {
  profilePhoto.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
  });
}

// ENHANCED STORIES FUNCTIONALITY
const storiesContainer = document.querySelector('.stories');
const stories = document.querySelectorAll('.story');
const storyDuration = 5000;

// Create story viewer with multiple progress bars
const storyViewer = document.createElement('div');
storyViewer.className = 'story-viewer';
storyViewer.innerHTML = `
  <div class="story-viewer-overlay"></div>
  <div class="story-viewer-content">
    <div class="story-progress-container"></div>
    <div class="story-image"></div>
    <div class="story-info">
      <div class="story-header">
        <div class="profile-photo"></div>
        <div class="story-meta">
          <p class="name"></p>
          <span class="time"></span>
        </div>
      </div>
      <div class="story-footer">
        <span class="views"><i class="uil uil-eye"></i> <span class="count">0</span></span>
      </div>
    </div>
    <button class="story-close"><i class="uil uil-times"></i></button>
    <button class="story-nav story-prev"><i class="uil uil-angle-left-b"></i></button>
    <button class="story-nav story-next"><i class="uil uil-angle-right-b"></i></button>
  </div>
`;
document.body.appendChild(storyViewer);

let currentStoryIndex = 0;
let progressInterval;
let isPaused = false;
let startX = 0;
let currentTouch = 0;

// Show story with progress bars
function showStory(index) {
  const story = stories[index];
  const background = getComputedStyle(story).backgroundImage;
  const profilePhoto = story.querySelector('.profile-photo img').src;
  const name = story.querySelector('.name').textContent;
  
  // Update story content
  storyViewer.querySelector('.story-image').style.backgroundImage = background;
  storyViewer.querySelector('.profile-photo').innerHTML = `<img src="${profilePhoto}" alt="">`;
  storyViewer.querySelector('.name').textContent = name;
  storyViewer.querySelector('.time').textContent = '1h ago';
  storyViewer.querySelector('.count').textContent = Math.floor(Math.random() * 1000);

  // Create/reset progress bars
  const progressContainer = storyViewer.querySelector('.story-progress-container');
  progressContainer.innerHTML = '';
  stories.forEach((_, i) => {
    const progressBar = document.createElement('div');
    progressBar.className = `story-progress ${i < index ? 'completed' : ''}`;
    progressContainer.appendChild(progressBar);
  });

  // Start progress animation
  clearInterval(progressInterval);
  const currentProgress = progressContainer.children[index];
  currentProgress.style.width = '0%';
  
  if (!isPaused) {
    progressInterval = setInterval(() => {
      const currentWidth = parseFloat(currentProgress.style.width || '0');
      if (currentWidth >= 100) {
        nextStory();
      } else {
        currentProgress.style.width = `${currentWidth + (100 / (storyDuration / 100))}%`;
      }
    }, 100);
  }
}

function nextStory() {
  if (currentStoryIndex < stories.length - 1) {
    currentStoryIndex++;
    showStory(currentStoryIndex);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (currentStoryIndex > 0) {
    currentStoryIndex--;
    showStory(currentStoryIndex);
  }
}

function closeStory() {
  storyViewer.classList.remove('active');
  clearInterval(progressInterval);
  isPaused = false;
}

// Touch/mouse events
storyViewer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isPaused = true;
  clearInterval(progressInterval);
});

storyViewer.addEventListener('touchmove', (e) => {
  currentTouch = e.touches[0].clientX - startX;
});

storyViewer.addEventListener('touchend', () => {
  isPaused = false;
  if (Math.abs(currentTouch) > 50) {
    if (currentTouch > 0) {
      prevStory();
    } else {
      nextStory();
    }
  } else {
    showStory(currentStoryIndex);
  }
  currentTouch = 0;
});

// Mouse events for pause/resume
storyViewer.addEventListener('mousedown', () => {
  isPaused = true;
  clearInterval(progressInterval);
});

storyViewer.addEventListener('mouseup', () => {
  isPaused = false;
  showStory(currentStoryIndex);
});

// Event listeners
stories.forEach((story, index) => {
  story.addEventListener('click', () => {
    currentStoryIndex = index;
    storyViewer.classList.add('active');
    showStory(index);
  });
});

storyViewer.querySelector('.story-close').addEventListener('click', closeStory);
storyViewer.querySelector('.story-viewer-overlay').addEventListener('click', closeStory);

storyViewer.querySelector('.story-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  prevStory();
});

storyViewer.querySelector('.story-next').addEventListener('click', (e) => {
  e.stopPropagation();
  nextStory();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!storyViewer.classList.contains('active')) return;
  
  switch(e.key) {
    case 'ArrowLeft':
      prevStory();
      break;
    case 'ArrowRight':
      nextStory();
      break;
    case 'Escape':
      closeStory();
      break;
  }
});

// NAVBAR SCROLL HANDLING
let lastScroll = window.scrollY;
let scrollThreshold = 100; // Minimum scroll before showing/hiding
let isNavVisible = true;
const navbar = document.querySelector('nav');

// Throttle function to limit scroll event firing
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Handle scroll events
const handleScroll = throttle(() => {
  const currentScroll = window.scrollY;
  const scrollDelta = currentScroll - lastScroll;
  
  if (currentScroll <= 0) {
    // At top of page
    navbar.classList.remove('nav-hidden', 'nav-condensed');
    isNavVisible = true;
  } else if (scrollDelta > 0 && isNavVisible && currentScroll > scrollThreshold) {
    // Scrolling down & past threshold
    navbar.classList.add('nav-hidden');
    navbar.classList.remove('nav-condensed');
    isNavVisible = false;
  } else if (scrollDelta < 0 && !isNavVisible) {
    // Scrolling up
    navbar.classList.remove('nav-hidden');
    navbar.classList.add('nav-condensed');
    isNavVisible = true;
  }
  
  lastScroll = currentScroll;
}, 100); // Throttle to 100ms

window.addEventListener('scroll', handleScroll);

// MODERN ENHANCEMENTS
// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top hidden';
backToTopBtn.innerHTML = '<i class="uil uil-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Toast Notifications
const createToast = (message, type = 'info') => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="uil uil-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }, 100);
};

// Share Post Functionality
const sharePost = async (url) => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Check out this post',
        url: url
      });
    } else {
      await navigator.clipboard.writeText(url);
      createToast('Link copied to clipboard!', 'success');
    }
  } catch (err) {
    createToast('Failed to share post', 'error');
  }
};

// Add share functionality to all share buttons
document.querySelectorAll('.interaction-buttons .uil-share-alt').forEach(btn => {
  btn.parentElement.addEventListener('click', () => {
    sharePost(window.location.href);
  });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Loading skeletons
const showLoadingState = () => {
  const feeds = document.querySelector('.feeds');
  const skeletonHTML = `
    <div class="feed skeleton">
      <div class="head">
        <div class="user">
          <div class="profile-photo skeleton-image"></div>
          <div class="info">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
      </div>
      <div class="photo skeleton-image"></div>
    </div>
  `.repeat(3);
  
  feeds.insertAdjacentHTML('beforeend', skeletonHTML);
};

// Remove skeletons when content loads
const removeSkeletons = () => {
  document.querySelectorAll('.skeleton').forEach(skeleton => skeleton.remove());
};
