function debounce<T extends (...args: Parameters<T>) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export { debounce };
