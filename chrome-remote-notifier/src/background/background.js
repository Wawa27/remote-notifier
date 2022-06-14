/**
 * Holds the websocket connection
 */
let ws;

/**
 * Connect to the websocket on startup
 */
chrome.storage.sync.get(['websocketHost'], ({ websocketHost }) => {
  if (typeof websocketHost === 'string') {
    connect(websocketHost);
  }
});

/**
 * Connect to the websocket whenever the host is changed
 */
chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    switch (key) {
      case 'websocketHost': {
        if (oldValue !== newValue) {
          disconnect();
          connect(newValue);
        }
      }
    }
  }
});

/**
 * Connect to the websocket.
 * @param websocketHost The host of the websocket server
 */
const connect = (websocketHost) => {
  console.debug(`Connecting to websocket : ${websocketHost}`);
  ws = new WebSocket(websocketHost);

  ws.onmessage = ({ data }) => {
    chrome.notifications.create(undefined, JSON.parse(data));
  };
};

/**
 * Disconnect from the websocket
 */
const disconnect = () => {
  ws.close();
};
