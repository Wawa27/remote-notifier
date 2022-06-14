/**
 * Save options to chrome.storage.sync
 */
const saveOptions = () => {
  const websocketHost = document.getElementById('websocketHost').value;
  chrome.storage.sync.set({
    websocketHost,
  }, () => {
    // TODO: show a message that the options were saved
  });
};

/**
 * Get options from chrome.storage.sync and populate the form
 */
function restoreOptions() {
  chrome.storage.sync.get({ websocketHost }, (items) => {
    console.debug(items);
    document.getElementById('websocketHost').value = items.websocketHost;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);