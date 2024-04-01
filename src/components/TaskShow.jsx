import connectDB from "@/lib/dbConnect";
import { TaskModel } from "@/models/Tasks";

export async function loadTasks() {
    await connectDB();
    const tasks = await TaskModel.find();
    return tasks;
}

const TaskShow = async () => {
    const tasks = await loadTasks();
    return (
        <div className=" p-4 grid grid-cols-3 gap-2 container mx-auto">
            {tasks.map(vmtask => (
                <div key={vmtask._id} className=" p-6 bg-yellow-500">
                    <h3>{vmtask.task}</h3>
                    <p>{vmtask.descripcion}</p>
                </div>
            ))}
        </div>
    )
}
export default TaskShow