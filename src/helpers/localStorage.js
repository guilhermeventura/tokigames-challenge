export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tokigames-app-state");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStateToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tokigames-app-state", serializedState);
  } catch (err) {
    // for now, just log the error;
    console.error("localstorage fetch failed", err);
  }
};
