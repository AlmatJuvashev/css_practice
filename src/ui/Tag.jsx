function Tag({ className, children }) {
  return (
    <span className={`inline-block py-1 px-2 text-xs uppercase ${className}`}>
      {children}
    </span>
  );
}

export default Tag;
