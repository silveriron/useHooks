const useConfirm = (
  message: string,
  onConfirm: () => void,
  onReject: () => void
) => {
  const confirmHandler = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };
  return confirmHandler;
};

export default useConfirm;
