export default function ChatWidget() {
  const subject = encodeURIComponent("Question from the Wood River Baptist Church website");
  const body = encodeURIComponent(
    "Hello Pastor Jon,\n\nI have a question from the church website.\n\nMy name:\nMy question:\n\nYou may reply to me at:\n"
  );

  return (
    <a
      className="wbc-email-chat-button"
      href={`mailto:pastor@woodriverbc.org?subject=${subject}&body=${body}`}
      aria-label="Ask Pastor Jon a question by email"
    >
      <img src="/woodriver/juneau-family.jpg" alt="Ask Pastor Jon" />
      <span>Ask Pastor Jon</span>
    </a>
  );
}
