window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {

    case "ArrowLeft":
      // Do something for "left arrow" key press.
      window.location = previousPageUrl;
      break;

    case "ArrowRight":
      // Do something for "right arrow" key press.
      window.location = nextPageUrl;
      break;

    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);