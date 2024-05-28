'use client';

import { CiSquarePlus } from 'react-icons/ci';
import { Modal } from './Modal';
import { FormEventHandler, useState } from 'react';
import { Checkbox } from './Checkbox';
import { postTasks } from '@/api/api';
import { useRouter } from 'next/navigation';
import { getHighestId } from '@/helpers/getHighestId';

export const AddNewTaskButton = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [taskValue, setTaskValue] = useState<string>('');
  const router = useRouter();

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    const id = (await getHighestId()) + 1;
    e.preventDefault();
    setTaskValue('');
    await postTasks({
      id: String(id),
      name: taskValue,
      completed: done,
    });
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        {...{
          className: 'btn btn-accent w-full my-3',
          onClick: () => setModalOpen(true),
        }}>
        Add new task <CiSquarePlus {...{ className: ' size-5' }} />
      </button>
      <Modal {...{ modalOpen: modalOpen, setModalOpen: setModalOpen }}>
        <form {...{ onSubmit: handleSubmitNewTask }}>
          <h2 {...{ className: 'text-stone-950 text-lg font-bold' }}>
            Please add new task
          </h2>
          <h3 {...{ className: 'text-sm' }}>
            If task is done, please click on checkbox
          </h3>
          <div {...{ className: 'modal-action' }}>
            <input
              {...{
                type: 'text',
                value: taskValue,
                className: 'input-bordered input w-full',
                placeholder: 'Add new task',
                onChange: (e) => setTaskValue(e.target.value),
              }}
            />
            <Checkbox
              {...{
                completed: done,
                disabled: false,
                onClick: () => setDone(true),
              }}
            />
            <button {...{ className: 'btn btn-success', type: 'submit' }}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
