const useNotification = () => {
  if (!window.Notification) {
    return;
  }

  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      return Notification.requestPermission();
    } else {
      console.log("click");
      new Notification("Are you hearing?");
    }
  };

  return fireNoti;
};

export default useNotification;
