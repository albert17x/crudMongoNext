import TaskShow from "@/components/TaskShow"

const TaskPage = () => {
  return (
    <div className=" bg-slate-500">
        <h1 className=" mb-5 text-center text-3xl" >Listado de Tasks</h1>
        <TaskShow/>
    </div>
  )
}
export default TaskPage