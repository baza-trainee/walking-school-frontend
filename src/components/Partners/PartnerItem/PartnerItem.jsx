/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "../Partner.module.css";

const PartnerItem = (props) => {
  return (
    <div className={style["link-wrapper"]}>
      <a href="#" target="_blank">
        <img src={props.img} alt="logotype" className={style.image} />
      </a>
    </div>
  );
};

export default PartnerItem;
