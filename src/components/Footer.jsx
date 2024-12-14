import github from "./../assets/github-logo.svg";

export function Footer() {
  return (
    <footer>
      <a href="https://github.com/vladcheck" target="blank">
        <img src={github} alt="Click to access author's GitHub page" />
      </a>
    </footer>
  );
}
