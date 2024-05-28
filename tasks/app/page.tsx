import { getTasks } from '@/api/api';
import { AddNewTaskButton } from './Components/AddNewTaskButton';
import { TasksList } from './Components/TasksList';

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main {...{ className: 'max-w-4xl mx-auto mt-4' }}>
      <div {...{ className: 'text-center flex flex-col gap-4' }}>
        <h1
          {...{
            className: 'font-bold text-2xl mt-4 font-serif text-orange-400',
          }}>
          Managing tasks application
        </h1>
        <AddNewTaskButton />

        <TasksList {...{ tasks: tasks }} />
      </div>
    </main>
  );
}
