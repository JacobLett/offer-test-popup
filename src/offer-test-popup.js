class OfferTestPopup {
    constructor(options) {
      // Default settings
      this.settings = {
        modalDisplayDelay: 7000,  // Delay before showing modal (in milliseconds)
        cookieName: 'offerTestPopupShown',  // Cookie name for tracking
        cookieExpirationDays: 7,  // Expiration time in days
        intervalMinutes: 30,  // Interval for rotating quotes (in minutes)
        quotes: [],  // Default empty array for quotes
        ...options, // Allow overriding options
      };
  
      this.init();
    }
  
init() {
  this.checkCookie();
  this.showModalAfterDelay();
  this.closeModal(); // Add this line to activate the close button functionality
}
  
    // Check if the cookie is set to avoid showing the modal again
    checkCookie() {
      const cookie = document.cookie.split('; ').find(row => row.startsWith(this.settings.cookieName));
      this.cookieExists = cookie ? true : false;
    }
  
    // Set cookie to prevent popup from showing again within the defined period
    setCookie() {
      const date = new Date();
      date.setTime(date.getTime() + (this.settings.cookieExpirationDays * 24 * 60 * 60 * 1000));
      document.cookie = `${this.settings.cookieName}=true; expires=${date.toUTCString()}; path=/`;
    }
  
    // Show the modal with a random quote
    showPopup() {
      if (!this.cookieExists) {
        this.setCookie();
  
        // Randomly pick a quote and its URL
        const quoteData = this.settings.quotes[Math.floor(Math.random() * this.settings.quotes.length)];
  
        
        // Create the modal HTML with the quote text as a clickable link
        const modalHTML = `
          <div class="offer-test-popup__overlay">
            <div class="offer-test-popup__modal">
              <span class="offer-test-popup__close">&times;</span>
              <a href="${quoteData.url}" class="offer-test-popup__quote-link" target="_blank">
              <div class="offer-test-popup__quote">
                  <p class="offer-test-popup__message">${quoteData.text}</p>
                <span class="offer-test-popup__button">${quoteData.cta}</span>
              </div>
              </a>
            </div>
          </div>
        `;
        
        // Append modal HTML to the body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.querySelector('.offer-test-popup__overlay').style.display = 'flex';
      }
    }
  
    // Show the modal after a delay
    showModalAfterDelay() {
      setTimeout(() => {
        this.showPopup();
      }, this.settings.modalDisplayDelay);
    }
  
    // Close the modal when the close button is clicked
    closeModal() {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('offer-test-popup__close') || e.target.classList.contains('offer-test-popup__overlay')) {
          const modal = document.querySelector('.offer-test-popup__overlay');
          if (modal) {
            modal.style.display = 'none';
            modal.remove();
          }
        }
      });
    }
  
    // Rotate quotes at the defined interval
    rotateQuotes() {
      let index = 0;
      setInterval(() => {
        const quoteData = this.settings.quotes[index];
        const messageElement = document.querySelector('.offer-test-popup__message');
        const linkElement = document.querySelector('.offer-test-popup__quote-link');
  
        if (messageElement && linkElement) {
          messageElement.textContent = quoteData.text;
          linkElement.href = quoteData.url;
        }
        
        index = (index + 1) % this.settings.quotes.length;
      }, this.settings.intervalMinutes * 60 * 1000);
    }
  }
  
  // Initialize the plugin globally
  window.OfferTestPopup = OfferTestPopup;
  
