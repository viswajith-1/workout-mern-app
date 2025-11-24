import AddWorkout from "../components/AddWorkout";
import ViewWorkout from "../components/ViewWorkout";

const Workouts = () => {
  return (
    <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Workouts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6">
                <AddWorkout />
            </div>
            <div className="bg-white p-6">
                <ViewWorkout />
            </div>
        </div>
    </div>
  );
}

export default Workouts;