import { AdminHeader } from "../../../../components/AdminPanel/AdminHeader/AdminHeader";
import { CustomSelect } from "../../../../components/AdminPanel/Filters/CustomSelect/CustomSelect";
import { DateSelect } from "../../../../components/AdminPanel/Filters/DateSelect/DateSelect";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import styles from "./AddProject.module.css";

const MockedOptions = [
  "Тунельний політ",
  "Банджі джампінг",
  "Стрибки з парашутом",
  "Стежка у хмарах",
];

const MockedOptions2 = ["0-18", "18-60"];

export const AddProject = () => {
  return (
    <div className={styles.wrapper}>
      <AdminHeader isAdd={false} title="Додати проєкт" />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <AdminInput
            variant="admin"
            placeholder="Заголовок"
            className={styles.inputMargin}
          />
          <AdminInput
            variant="admin"
            placeholder="Додайте посилання"
            className={styles.inputMargin}
          />
          <AdminInput
            variant="textarea"
            placeholder="Опис"
            className={styles.inputMargin}
          />
          <DateSelect placeholder={"Дата публікації"} />
        </div>
        <div className={styles.rightBlock}>
          <DateSelect placeholder={"Період"} />
          <CustomSelect options={MockedOptions} />
          <CustomSelect
            options={MockedOptions2}
            placeholder="Вікові обмеження"
            selectPrompt="Оберіть вік"
          />
        </div>
      </div>
    </div>
  );
};
