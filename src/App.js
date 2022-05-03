import "./App.css";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;

// So if user is not login, he/she cannot order
// Or we want to show some of my products to the users who are logged in
// And we have to get some data from users (eg, when they order or register ....)
// and we have to get user data and check it and send to backend and
// backend will save this data in database and when user comes back to the website
// we can show user the orders that he/she for example for a few days has
// and we do this things with forms
// There is a really good library -> formik
