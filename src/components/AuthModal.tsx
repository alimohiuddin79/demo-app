/* eslint-disable */
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FaUserAlt, FaUnlock, FaEye } from "react-icons/fa";

const AuthModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState("login");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={onOpen}>
        login
      </div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"md"}>
        <ModalOverlay />
        <ModalContent p={"2"} bg={"#faebd7"} borderRadius={"xl"}>
          <ModalHeader
            className="
            w-full
            flex
            justify-end
            rounded-tl-lg
            rounded-tr-lg
            px-3
            py-2
            bg-primary-1
          "
          >
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody p={"0"}>
            {isLogin === "login" ? (
              <div
                className="
                flex
                flex-col
                py-8
                px-6
                w-full
                text-center
              "
              >
                <div
                  className="
                  text-xl
                  text-primary-1
                  font-medium
                  mb-8
                "
                >
                  Login
                </div>
                <div
                  className="
                  flex
                  items-center
                  gap-4
                  px-3
                  py-1
                  text-base
                  text-primary-1
                  bg-white
                  rounded-md
                  w-full
                  border
                  border-gray-200
                  mb-6
                "
                >
                  <div className="text-xl">
                    <FaUserAlt />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your E-mail"
                    className="
                    placeholder:text-primary-1
                    outline-none
                    w-full
                  "
                  />
                </div>
                <div
                  className="
                  flex
                  items-center
                  gap-4
                  px-3
                  py-1
                  text-base
                  text-primary-1
                  bg-white
                  rounded-md
                  w-full
                  border
                  border-gray-200
                  mb-2
                "
                >
                  <div className="text-xl">
                    <FaUnlock />
                  </div>
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="
                    placeholder:text-primary-1
                    outline-none
                    w-full
                  "
                  />
                  <div
                    className="text-xl cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <FaEye />
                  </div>
                </div>
                <div
                  className="
                  mb-6
                  text-sm
                  font-medium
                  text-primary-1
                  text-end
                  cursor-pointer
                "
                >
                  Forgot Password ?
                </div>
                <button
                  className="
                  rounded-2xl
                  bg-primary-1
                  w-full
                  p-2
                  text-xl
                  text-white
                  mb-6
                "
                >
                  Login
                </button>
                <div
                  className="
                  text-base
                  font-medium
                  text-primary-1
                "
                >
                  Don't have account yet ?{" "}
                  <span
                    className="text-green-600 cursor-pointer"
                    onClick={() => setIsLogin("sign-up")}
                  >
                    Sign Up
                  </span>
                </div>
              </div>
            ) : (
              <div
                className="
                  flex
                  flex-col
                  py-8
                  px-6
                  w-full
                  text-center
                "
                >
                  <div
                    className="
                      text-xl
                      text-primary-1
                      font-medium
                      mb-6
                    "
                  >
                    Sign Up
                  </div>
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      px-3
                      py-1
                      text-base
                      text-primary-1
                      bg-white
                      rounded-md
                      w-full
                      border
                      border-gray-200
                      mb-4
                    "
                  >
                    <input
                      type="text"
                      placeholder="Name"
                      className="
                      placeholder:text-primary-1
                      outline-none
                      w-full
                  "
                    />
                  </div>
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      px-3
                      py-1
                      text-base
                      text-primary-1
                      bg-white
                      rounded-md
                      w-full
                      border
                      border-gray-200
                      mb-4
                "
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      className="
                      placeholder:text-primary-1
                      outline-none
                      w-full
                    "
                    />
                  </div>
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      px-3
                      py-1
                      text-base
                      text-primary-1
                      bg-white
                      rounded-md
                      w-full
                      border
                      border-gray-200
                      mb-4
                "
                  >
                    <div
                      className="flex items-center gap-2"
                    >
                      <img 
                        src="/india-flag.png"
                        className="
                          w-8
                          h-4
                        "
                      />
                      <div>+91</div>
                    </div>
                    <input
                      type="number"
                      placeholder="Phone number"
                      className="
                      placeholder:text-primary-1
                      outline-none
                      w-full
                    "
                    />
                  </div>
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      mb-4
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        px-3
                        py-1
                        text-base
                        text-primary-1
                        bg-white
                        rounded-md
                        w-full
                        border
                        border-gray-200
                        flex-1
                      "
                    >
                      <input
                        type="number"
                        placeholder="OTP"
                        className="
                        placeholder:text-primary-1
                        outline-none
                          w-full
                        "
                      />
                    </div>
                    <div
                      className="
                        text-white
                        rounded-md
                        p-1
                        bg-primary-1
                        whitespace-nowrap
                        flex-1
                        cursor-pointer
                      "
                    >
                      Verify OTP
                    </div>
                    <div
                      className="
                        text-white
                        rounded-md
                        p-1
                        bg-primary-1
                        whitespace-nowrap
                        flex-1
                        cursor-pointer
                      "
                    >
                      Resend OTP
                    </div>
                  </div>
                  <div
                  className="
                  flex
                  items-center
                  gap-4
                  px-3
                  py-1
                  text-base
                  text-primary-1
                  bg-white
                  rounded-md
                  w-full
                  border
                  border-gray-200
                  mb-4
                "
                >
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter Password"
                    className="
                    placeholder:text-primary-1
                    outline-none
                    w-full
                  "
                  />
                  <div
                    className="text-xl cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <FaEye />
                  </div>
                  </div>
                  <div
                  className="
                  flex
                  items-center
                  gap-4
                  px-3
                  py-1
                  text-base
                  text-primary-1
                  bg-white
                  rounded-md
                  w-full
                  border
                  border-gray-200
                  mb-4
                "
                >
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="
                    placeholder:text-primary-1
                    outline-none
                    w-full
                  "
                  />
                  <div
                    className="text-xl cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <FaEye />
                  </div>
                  </div>
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-4
                    "
                  >
                    <input
                      type="checkbox"
                    />
                    <div className="text-sm text-primary-1">Accept Terms and Conditions*</div>
                  </div>
                  <button
                    className="
                      rounded-2xl
                      bg-primary-1
                      w-full
                      p-2
                      text-xl
                      text-white
                      mb-6
                    "
                  >
                    Sign Up
                  </button>
                  <div
                    className="
                    text-base
                    font-medium
                    text-primary-1
                  "
                >
                  Already have an account ?{" "}
                  <span
                    className="text-green-600 cursor-pointer"
                    onClick={() => setIsLogin("login")}
                  >
                    Login
                  </span>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
