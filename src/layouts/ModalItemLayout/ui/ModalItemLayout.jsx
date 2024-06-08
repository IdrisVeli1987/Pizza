import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";

const ModalItemLayout = (props) => {
  const { params, price,  options } = props;
  return (
      <div className={cls.body}>
        <img className={cls.img} src={params.img} alt="" />

        <div className={cls.content}>
          <h3 className={cls.title}>{params.title}</h3>

          {options && options}

          <div className={cls.footer}>
            <span className={cls.price}>Cəmi: { price} AZN</span>

            <Button border className={cls.button}>
              Əlavə et
            </Button>
          </div>
        </div>
      </div>
  );
};

export { ModalItemLayout };
