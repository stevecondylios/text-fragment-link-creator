(() => {
  // Get selected text
  const selection = window.getSelection();
  
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    alert('No text selected! Please select some text first.');
    return;
  }
  
  // Get the selected text
  const selectedText = selection.toString().trim();
  
  if (!selectedText) {
    alert('Selected text is empty! Please select some text.');
    return;
  }
  
  // Create text fragment based on length
  // Format: #:~:text=[prefix-,]textStart[,textEnd][,-suffix]
  let textFragmentPart;
  
  if (selectedText.length <= 200) {
    // For text under 200 chars, use the whole text
    textFragmentPart = encodeURIComponent(selectedText);
  } else {
    // For longer text, use start and end approach (each up to 100 chars)
    const textStart = selectedText.substring(0, 100);
    const textEnd = selectedText.substring(selectedText.length - 100);
    
    textFragmentPart = `${encodeURIComponent(textStart)},${encodeURIComponent(textEnd)}`;
  }
  
  // Create the URL with the text fragment
  let url = new URL(window.location.href);
  url.hash = '';  // Remove any existing hash/fragment
  const textFragmentUrl = `${url.toString()}#:~:text=${textFragmentPart}`;
  
  // Copy to clipboard
  navigator.clipboard.writeText(textFragmentUrl)
    .then(() => {
      // Create and show notification
      const notification = document.createElement('div');
      notification.textContent = 'Text fragment link copied to clipboard!';
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-family: system-ui, sans-serif;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      `;
      
      document.body.appendChild(notification);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
      }, 3000);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
      alert('Failed to copy link to clipboard.');
    });
})();