import { List, Trash2, Edit } from "lucide-react";
import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";

const ViewWorkout = () => {
  // const [workouts, setWorkouts] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext();


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      if (response.ok) {
        // setWorkouts(data);
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    fetchWorkouts();
  }, []);

  return (
    // Outer container for full-screen centering
    <div className="min-h-screen flex items-start justify-center py-12 bg-white px-4 md:px-0">
      {/* Main content container */}
      <div className="max-w-xl w-full">
        {/* Main Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <List className="w-8 h-8 mr-3 text-blue-600" />
          Workout History
        </h2>

        {/* List Headings - ORDERED: DATE, EXERCISE, LOAD, REPS */}
        <div className="flex justify-between items-center text-sm font-semibold text-gray-500 mb-2 px-1 border-b border-gray-300 pb-2">
          <p className="w-2/12 text-center">DATE</p>
          <p className="w-5/12">EXERCISE</p>
          <p className="w-2/12 text-center">LOAD</p>
          <p className="w-2/12 text-center">REPS</p>
          {/* Empty space for Action Buttons column */}
          <div className="w-1/12"></div>
        </div>

        {/* Workout List */}
        <div className="space-y-3">
          {workouts &&
            workouts.map((workout) => (
              // Individual workout item
              <div
                key={workout.id}
                className="py-3 flex justify-between items-center px-1"
              >
                {/* Date - NOW FIRST COLUMN */}
                <p className="w-2/12 text-center text-sm font-medium text-gray-700">
                  {new Date(workout.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                {/* Exercise Title */}
                <p className="w-5/12 text-lg font-medium text-gray-800">
                  {workout.title}
                </p>

                {/* Load */}
                <p className="w-2/12 text-center text-base font-semibold text-gray-700">
                  {workout.load} kg
                </p>

                {/* Reps */}
                <p className="w-2/12 text-center text-base font-semibold text-gray-700">
                  {workout.reps}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2 shrink-0 w-1/12 justify-end">
                  <button
                    onClick={() => alert(`Editing workout ID: ${workout.id}`)}
                    className="p-1 text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                    aria-label="Edit Workout"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => alert(`Deleting workout ID: ${workout.id}`)}
                    className="p-1 text-red-500 hover:bg-gray-100 rounded-full transition duration-150"
                    aria-label="Delete Workout"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ViewWorkout;
