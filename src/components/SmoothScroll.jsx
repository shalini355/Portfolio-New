export default function SmoothScroll({ children }) {
  // react-lenis ^0.0.47 is incompatible with React 19 and causes Invalid Hook Call crashes.
  // Using native smooth scrolling instead.
  return (
    <div className="smooth-scroll-wrapper" style={{ scrollBehavior: 'smooth' }}>
      {children}
    </div>
  );
}
