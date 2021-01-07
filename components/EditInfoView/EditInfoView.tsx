import { ArrowBackIos } from '@material-ui/icons';
import ChangeInfoForm from '../ChangeInfoForm';
import { motion } from 'framer-motion';

interface IEditInfoViewProps {
  toggleEditMode(): void;
}

export default function EditInfoView(props: IEditInfoViewProps) {
  const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0}
  }
  return (
    <motion.div animate="visible" initial="hidden" variants={variants} className="p-4">
      <div className="w-full md:w-1/2 mx-auto">
        <div>
          <button
            className="text-blue-500 hover:text-blue-300 focus:outline-none flex items-center"
            onClick={() => props.toggleEditMode()}
          >
            <ArrowBackIos style={{fontSize: 15}} /> <span className="text-md">Back</span>
          </button>
        </div>
        <div className="border-solid border rounded-md border-gray-300 mt-2 mx-auto p-6">
          <div>
            <h1 className="dark:text-white text-xl">Change Info</h1>
            <p className="dark:text-white text-sm">
              Changes will be reflected to every services
            </p>
          </div>
          <ChangeInfoForm />
        </div>
      </div>
    </motion.div>
  );
}
