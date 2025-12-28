import QuizLogo from "./quiz-logo.svg"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={QuizLogo} alt="Quizlogo" />
      <h1>Quiz Application</h1>
    </header>
  );
}

export default Header;
