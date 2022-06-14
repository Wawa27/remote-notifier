# Remote notifier

This project contains an API for sending notifications to remote devices and a Chrome extension to receive and display
the notifications (along with a future Safari extension).

## Installation

### API:

    - Setup your environment variables in the `.env` file (ports, tokens).
    - Install the dependencies with `npm install`.
    - Start the server with `npm start`.

### Chrome extension:

    - Import the chrome-remote-notifier in your Chrome browser.
    - Right-click on the extension and click `Options`.
    - Enter your API hostname and port in the "websocket host" field.

## Usage

Send a POST request to the `/notify` endpoint with the following parameters:

    { 
        iconUrl: "https://example.com/icon.png",
        title: "Title example",
        message: "Message example",
        type: "basic";
    }

See the [Chrome notification api documentation](https://developer.chrome.com/docs/extensions/reference/notifications/)
for more information.

**Don't forget to set the `API-KEY` header to one of the tokens in the `.env` file you created earlier.**