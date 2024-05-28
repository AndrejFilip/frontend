'use client';

import { Task } from '@/types/tasks';
import React, { FormEventHandler, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Checkbox } from './Checkbox';
import { Modal } from './Modal';
import { deleteTask, putTask } from '@/api/api';
import { useRouter } from 'next/navigation';

interface TaskProps {
  task: Task;
}

export const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const [modalEditOpen, setModalEditOpen] = useState<boolean>(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);
  const [taskValue, setTaskValue] = useState<string>(task.name);
  const router = useRouter();

  const handleSubmitEditedTask: FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    await putTask({
      id: task.id,
      completed: task.completed,
      name: taskValue,
    });

    setModalEditOpen(false);
    router.refresh();
  };

  const handleSubmitDeleteTask = async (taskId: string) => {
    await deleteTask(taskId);

    setModalDeleteOpen(false);
    router.refresh();
  };

  return (
    <tr>
      <th>{task.id}</th>
      <td>{task.name}</td>
      <th>
        {' '}
        <Checkbox {...{ completed: task.completed }} />
      </th>
      <td {...{ className: ' flex gap-3' }}>
        <CiEdit
          {...{
            cursor: 'pointer',
            size: 25,
            className: 'text-blue-800',
            onClick: () => setModalEditOpen(true),
          }}
        />
        <Modal
          {...{ modalOpen: modalEditOpen, setModalOpen: setModalEditOpen }}>
          <form {...{ onSubmit: handleSubmitEditedTask }}>
            <h2
              {...{
                className: 'text-stone-950 text-lg font-bold text-center',
              }}>
              Please edit name of task
            </h2>
            <h3 {...{ className: 'text-sm text-center' }}>
              Completed state cannot be edited
            </h3>
            <div {...{ className: 'modal-action' }}>
              <input
                {...{
                  type: 'text',
                  value: taskValue,
                  className: 'input-bordered input w-full',
                  onChange: (e) => setTaskValue(e.target.value),
                }}
              />
              <Checkbox
                {...{
                  completed: task.completed,
                  disabled: true,
                }}
              />
              <button {...{ className: 'btn btn-success', type: 'submit' }}>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <MdDelete
          {...{
            cursor: 'pointer',
            size: 25,
            className: 'text-red-500',
            onClick: () => setModalDeleteOpen(true),
          }}
        />

        <Modal
          {...{
            modalOpen: modalDeleteOpen,
            setModalOpen: setModalDeleteOpen,
          }}>
          <h3 {...{ className: 'text-lg text-center font-bold' }}>
            Are you sure?
          </h3>
          <h3 {...{ className: 'text-sm text-center ' }}>
            This operation will delete tasks!
          </h3>
          <div {...{ className: 'flex justify-center mt-4' }}>
            <button
              {...{
                className: 'btn btn-error',
                onClick: () => handleSubmitDeleteTask(task.id),
              }}>
              Delete task
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};
