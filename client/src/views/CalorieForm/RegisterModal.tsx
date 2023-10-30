import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import deliver from "../../images/deliver.png";

type Props = {
  registerControl: boolean;
  setRegisterControl: any;
  // Add the type annotation for isOpen
};

const RegisterModal = (props: Props) => {
  let { registerControl, setRegisterControl } = props;
  return (
    <div>
      {/* <Modal isOpen={registerControl}> */}
      <Modal isOpen={registerControl} className="register-modal">
        <ModalHeader>
          <i
            className="fa fa-times"
            onClick={() => {
              setRegisterControl(false);
            }}
          ></i>
        </ModalHeader>
        <div className="content-div">
        <p>Eat Healthy Everyday</p>
        <img src={deliver} alt="" />

        <form className="save-plan-modal-form">
          <input type="email" placeholder="Email address" />
          <button className="sec-button">Download</button>
        
        </form>
        <hr></hr>or<hr></hr>
        <p> Register to Track your meals and meet your goals</p>
        </div>
        <div className="subdiv">
          <input type="checkbox" />
        Subscribe to our news letter
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
