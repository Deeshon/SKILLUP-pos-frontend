import { Form, Input, Modal, Switch } from "antd";
import FormItem from "antd/es/form/FormItem";
import { TypeCustomModalProps } from "../types";

const CustomModal = ({ isOpen, onCloseModal, title, formItems }: TypeCustomModalProps) => {
  return (
    <Modal title={title} open={isOpen} onCancel={onCloseModal}>
      <div>
        <Form layout="vertical">
          {formItems.map((item) => {
            return (
              <FormItem label={item.name}>
                {item.type === "input" && <Input />}
                {item.type === "switch" && <Switch />}
              </FormItem>
            );
          })}
        </Form>
      </div>
    </Modal>
  );
};

export default CustomModal;
