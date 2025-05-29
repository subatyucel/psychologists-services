const beautifyFirebaseError = (error) => {
  const formatted = error.replace(/.*\/(.*)/, "$1").replace(/-/g, " ");
  return (
    formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase() + "!"
  );
};

export default beautifyFirebaseError;
