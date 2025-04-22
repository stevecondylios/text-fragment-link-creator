# Text Fragment Link Creator

A Chrome extension that creates a link to the current page with a text fragment that highlights the selected text.

## Features

- Creates a URL with a text fragment that points to the selected text
- Can be activated via:
  - Extension button in toolbar
  - Keyboard shortcut: Alt+Shift+T
- Copies the link to your clipboard
- Displays a notification when the link is copied

## Installation

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore/)
2. Search for "Refresh Site Cookies"
3. Click "Add to Chrome"

### Manual Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will now appear in your browser toolbar

## Usage

1. Select text on any web page
2. Click the extension button in the toolbar or press Alt + Shift + T (Opt + Shift + T on macOS)
3. A link with a text fragment will be copied to your clipboard
4. Paste the link anywhere you want to share it

## Text Fragment Compatibility

Text fragments are supported in Chrome 80+ and other Chromium-based browsers.
When shared, they will highlight the selected text when the recipient opens the link.

## Privacy & Permissions

This extension requires minimal permissions:
- `activeTab`: To access the currently active tab
- `scripting`: To run the content script that creates the text fragment

It does not collect any data or send information to any servers.

## License

MIT
