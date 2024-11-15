# offer-test-popup
Displays a popup of random problem statements to do market research on what problems and challenges and audience is facing.


<script src="src/offer-test-popup.js"></script>
<link rel="stylesheet" type="text/css" href="src/offer-test-popup.css" />

<script>
  // Initialize the plugin with quotes and custom options
  new OfferTestPopup({
    quotes: [
      {
        text: 'The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt',
        url: 'https://example.com/offer?utm_source=modal&utm_medium=popup&utm_campaign=test1',
        cta: 'Click Here If You Agree'
      },
      {
        text: 'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
        url: 'https://example.com/offer?utm_source=modal&utm_medium=popup&utm_campaign=test2',
        cta: 'Click Here If You Agree'
      },
      {
        text: 'The best way to predict the future is to create it. - Peter Drucker',
        url: 'https://example.com/offer?utm_source=modal&utm_medium=popup&utm_campaign=test3',
        cta: 'Click Here If You Agree'
      },
      {
        text: 'It always seems impossible until it’s done. - Nelson Mandela',
        url: 'https://example.com/offer?utm_source=modal&utm_medium=popup&utm_campaign=test4',
        cta: 'Click Here If You Agree'
      },
      {
        text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson',
        url: 'https://example.com/offer?utm_source=modal&utm_medium=popup&utm_campaign=test5',
        cta: 'Click Here If You Agree'
      },
      // ... add all your 30 quotes here
    ],
    intervalMinutes: 30, // Rotate quotes every 30 minutes
    modalDisplayDelay: 0, // 7000 Show the modal 7 seconds after page load
  });
</script>
