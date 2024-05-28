export const Checkbox = ({
  completed,
  disabled,
  onClick,
}: {
  completed: boolean;
  disabled?: boolean;
  onClick?(): boolean | void;
}) => {
  return (
    <div {...{ className: 'form-control' }}>
      <label {...{ className: 'label cursor-pointer' }}>
        <input
          {...{
            type: 'checkbox',
            checked: completed,
            className: 'checkbox checkbox-primary',
            disabled: disabled,
            onClick: onClick,
          }}
        />
      </label>
    </div>
  );
};
