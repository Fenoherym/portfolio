import './ScrollTopButton.css'

export default function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
