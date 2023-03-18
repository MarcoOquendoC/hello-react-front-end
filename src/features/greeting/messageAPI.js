// A mock function to mimic making an async request for data
const fetchRandomGreeting = async () => {
  const response = await fetch('http://localhost:3000/greetings/random');
  const data = await response.json();

  return data;
};

export default fetchRandomGreeting;
