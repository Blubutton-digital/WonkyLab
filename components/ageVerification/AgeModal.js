import { Dialog, Transition } from "@headlessui/react";
import { Fragment, use, useState } from "react";

import WonkyLogo from "@/public/Images/Wonky-Lab-Logo.png";
import Image from "next/image";

const AgeModal = ({ onConfirm, onReject }) => {
  const [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    console.log("open");
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 bg-wonky_green"
          onClose={() => {}}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/95" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-wonky_green p-6 text-left align-middle shadow-xl transition-all">
                  <Image
                    src={WonkyLogo}
                    alt="Logo for Wonky Lab"
                    width={120}
                    className="mt-[10px] bg-wonky_green rounded-md px-2 py-3 object-cover mx-auto "
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg md:text-2xl md:leading-relaxed text-center font-medium leading-6 uppercase mt-10 text-white"
                  >
                    Are You Over 18 years old?
                  </Dialog.Title>
                  <div className="mt-6">
                    <p className="text-sm text-gray-100 text-center">
                      To enter this website you must be at least 18 years old.
                      Please confirm your age to proceed. If you are under 18,
                      you will be redirected.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-row justify-between gap-3">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-wonky text-wonky_green px-4 py-2 text-sm font-medium  hover:bg-wonky/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        onConfirm();
                        closeModal();
                      }}
                    >
                      Yes, I am 18 or older
                    </button>
                    <button
                      type="button"
                      className=" w-full inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-gray-100 hover:text-gray-900 border-wonky  hover:bg-wonky focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onReject}
                    >
                      No, I am under 18
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AgeModal;
