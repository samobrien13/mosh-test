import heroleft from "./assets/dr-ossman-and-dr-ateka.png";
import heroRight from "./assets/dr-ossman-and-dr-ateka-2.png";
import CheckIcon from "./assets/check-icon.svg";
import { Accordion, Button } from "./components";

function App() {
  return (
    <>
      <div className="bg-green-50 px-4 py-10 sm:p-8 lg:py-16 lg:px-32 justify-center lg:flex lg:flex-row lg:space-x-4 lg:items-center mb-10">
        <header className="text-center lg:text-left space-y-2 lg:flex-1">
          <h1>Get back on track</h1>
          <p className="text-sm sm:text-lg">
            Treatment plan in 24 hours.
            <br />
            Treat anxiety, depression & more
          </p>
        </header>
        <div className="sm:flex sm:flex-row sm:space-x-6 lg:flex-col lg:space-x-0 lg:space-y-8 lg:w-3/5">
          <div className="mt-6 sm:flex-1 lg:flex lg:flex-row lg:space-x-4">
            <img
              src={heroleft}
              className="w-full object-cover lg:w-5/12 rounded-2xl"
            />
            <div>
              <Accordion
                title="Free Online Doctor Consultation"
                className="my-4 lg:mt-0"
              >
                <ol className="space-y-2">
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    Personalised treatment options
                  </li>
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    Video consults and easy check-ins
                  </li>
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    Medication, prescribed and delivered
                  </li>
                </ol>
              </Accordion>
              <Button onClick={() => {}}>Get Started</Button>
            </div>
          </div>
          <div className="mt-6 sm:flex-1 lg:flex lg:flex-row lg:space-x-4">
            <img
              src={heroRight}
              className="w-full object-cover lg:w-5/12 rounded-2xl"
            />
            <div>
              <Accordion
                title="One-on-one therapy sessions"
                className="my-4 lg:mt-0"
              >
                <ol className="space-y-2">
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    <p>Personalised treatment options</p>
                  </li>
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    Video consults and easy check-ins
                  </li>
                  <li className="flex items-center">
                    <img className="mr-4" src={CheckIcon} />
                    Medication, prescribed and delivered
                  </li>
                </ol>
              </Accordion>
              <Button onClick={() => {}}>Book Therapist</Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full">
        <p className="p-3 bg-green-100 font-semibold text-center">
          If you're in crisis or experiencing suicidal thoughts call 000 or
          Lifeline 13 11 14
        </p>
      </footer>
    </>
  );
}

export default App;
