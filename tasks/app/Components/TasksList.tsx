'use client';

import { Tasks } from '@/types/tasks';
import { Task } from './Task';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

interface TasksListProps {
  tasks: Tasks[];
}

export const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchBar {...{ search, setSearch }} />
      <div {...{ className: 'overflow-x-auto' }}>
        <table {...{ className: 'table w-full' }}>
          {/* head */}
          <thead {...{ className: 'bg-base-500' }}>
            <tr>
              <th>Number</th>
              <th>Task name</th>
              <th>Done?</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((item) => {
                return item.name.toLocaleLowerCase().includes(search);
              })
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
