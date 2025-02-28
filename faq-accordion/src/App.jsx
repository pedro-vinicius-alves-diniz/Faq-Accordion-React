import Question from "./components/Question";

import "./App.css";

function App() {
  return (
    <main>
      <div className="banner"></div>

      <div className="faqs-container">
        <div className="faqs-content">
            <header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                fill="none"
                viewBox="0 0 40 41"
              >
                <path
                  fill="#AD28EB"
                  d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
                />
              </svg>
              <h1>FAQs</h1>
            </header>
            <div className="questions-container">
              <Question
                question="What is Frontend Mentor, and how will it help me?"
                answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building."
              />
              <Question
                question="Is Frontend Mentor free?"
                answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels."
              />
              <Question
                question="What is Frontend Mentor, and how will it help me?"
                answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!
        "
              />
              <Question
                question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
                answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members."
              />
            </div>
          </div>
      </div>
    </main>
  );
}

export default App;
