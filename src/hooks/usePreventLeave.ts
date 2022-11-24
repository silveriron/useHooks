const usePreventLeave = () => {
  const listener = (e: Event) => {
    e.preventDefault();

    //You need to find an alternative function.
    //Because this function will disappear.
    e.returnValue = false;
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return [enablePrevent, disablePrevent];
};

export default usePreventLeave;
