import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const EmotionalDialog = ({
  dialogTriggerStyles,
  dialogIcon,
  dialogTriggerText,
  dialogTriggerTextStyles,
}) => {
  return (
    <Dialog>
      <DialogTrigger className={dialogTriggerStyles}>
        {dialogIcon && <div className='w-6 h-6 mr-2'>{dialogIcon}</div>}
        <p className={dialogTriggerTextStyles}>{dialogTriggerText}</p>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EmotionalDialog;
