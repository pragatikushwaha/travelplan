import React, { useState } from 'react';
import GoogleMap from '../components/GoogleMap';
import Weather from '../components/Weather';

const TravelPlanner = () => {
  const [formData, setFormData] = useState({
    weather: '',
    eatingHabits: '',
    reason: '',
    budget: '',
    travelDates: '',
    activities: '',
    accommodation: '',
  });

  const [itinerary, setItinerary] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate itinerary based on formData
    const generatedItinerary = {
      destination: 'Paris',
      activities: ['Eiffel Tower visit', 'Seine River cruise'],
      restaurants: ['Le Jules Verne', 'L’Ambroisie'],
      weather: 'Sunny',
      accommodation: '5-star hotel',
      travelDates: formData.travelDates,
    };
    setItinerary(generatedItinerary);
  };

  return (
    <div className="p-6">
      <div className="hero bg-cover bg-center h-64 mb-6" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x500)' }}>
        <div className="text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl font-bold">Book Your Travel</h1>
          <p className="text-lg">Plan your perfect trip with ease</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Preferred Weather</label>
          <input
            type="text"
            name="weather"
            value={formData.weather}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Eating Habits</label>
          <input
            type="text"
            name="eatingHabits"
            value={formData.eatingHabits}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Reason for Vacation</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Travel Dates</label>
          <input
            type="text"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Preferred Activities</label>
          <input
            type="text"
            name="activities"
            value={formData.activities}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Accommodation Type</label>
          <input
            type="text"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Generate Itinerary
        </button>
      </form>

      {itinerary && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Your Itinerary</h2>
          <p>Destination: {itinerary.destination}</p>
          <p>Weather: {itinerary.weather}</p>
          <p>Accommodation: {itinerary.accommodation}</p>
          <p>Travel Dates: {itinerary.travelDates}</p>
          <h3 className="text-xl font-bold mt-4">Activities:</h3>
          <ul>
            {itinerary.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-4">Restaurants:</h3>
          <ul>
            {itinerary.restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Map</h2>
        <GoogleMap center={{ lat: 48.8566, lng: 2.3522 }} zoom={12} />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Weather</h2>
        <Weather apiKey={process.env.NEXT_PUBLIC_WEATHER_API_KEY} location="Paris" />
      </div>
    </div>
  );
};

export default TravelPlanner;
