import { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext.jsx';

const AddWorkout = () => {
  const {dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout={ title, load, reps };
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    });

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      alert('Workout added successfully!');
      console.log('New workout added successfully.', workout);
      dispatch({ type: 'ADD_WORKOUT', payload: workout });

    }
    else {
      console.error('Failed to add workout');
      const errorData = await response.json();
      alert('Error: ' + errorData.error);
      setError(errorData.error);
    }
  }

  
  return (
    <div className="min-h-screen flex items-start justify-center py-5">
      <div className="max-w-md w-full p-8 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <Dumbbell className="w-8 h-8 mr-3 text-blue-600" />
          Log New Workout
        </h2>
        <form  className="space-y-6" onSubmit={handleSubmit}>

          {/* Exercise Name */}
          <div>
            <label htmlFor="exerciseName" className="block text-sm font-medium text-gray-700">Exercise Name</label>
            <input
              type="text"
              id="exerciseTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g., Bench Press, Squats"
              // REMOVED: border border-gray-300
              className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Load (Weight) */}
          <div>
            <label htmlFor="load" className="block text-sm font-medium text-gray-700">Load (kg)</label>
            <input
              type="number"
              id="load"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              required
              min="0"
              step="0.1"
              placeholder="Weight lifted in kilograms"
              // REMOVED: border border-gray-300
              className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Reps */}
          <div>
            <label htmlFor="reps" className="block text-sm font-medium text-gray-700">Reps</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
              min="1"
              placeholder="Number of repetitions performed"
              // REMOVED: border border-gray-300
              className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
          >
            Add Workout
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddWorkout