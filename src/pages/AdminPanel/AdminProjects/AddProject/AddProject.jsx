import { AdminHeader } from "../../../../components/AdminPanel/AdminHeader/AdminHeader";
import { CustomSelect } from "../../../../components/AdminPanel/Filters/CustomSelect/CustomSelect";
import { DateSelect } from "../../../../components/AdminPanel/Filters/DateSelect/DateSelect";
import ImageInput from "../../../../components/AdminPanel/ImageInput/ImageInput";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./AddProject.module.css";

const MockedOptions = [
  "Тунельний політ",
  "Банджі джампінг",
  "Стрибки з парашутом",
  "Стежка у хмарах",
];

const MockedOptions2 = ["0-18", "18-60"];

export const AddProject = () => {
  const handleImageChange = (blob) => {
    // TODO: write some logic to send blob data on server
  };
  return (
    <div className={styles.wrapper}>
      <AdminHeader isAdd={false} title="Додати проєкт" />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <AdminInput variant="admin" placeholder="Заголовок" />
          <AdminInput variant="admin" placeholder="Додайте посилання" />
          <AdminInput variant="textarea" placeholder="Опис" />
          <div className={styles.tooltipContainer}>
            <DateSelect placeholder={"Дата публікації"} />
            <Tooltip />
          </div>
          <div className={styles.buttonWrapper}>
            <AdminButton variant="secondary" children={"Скасувати"} />
            <AdminButton variant="primary" children={"Зберегти"} />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <DateSelect placeholder={"Період"} />
          <CustomSelect options={MockedOptions} />
          <CustomSelect
            options={MockedOptions2}
            placeholder="Вікові обмеження"
            selectPrompt="Оберіть вік"
          />
          <ImageInput
            variant="project"
            onChange={handleImageChange}
            src={null}
            error={null}
          />
        </div>
      </div>
    </div>
  );
};
