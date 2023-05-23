import React, { Fragment, useRef, useState } from "react";
import Tiny from "../public/Images/Beers/Tiny.png";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Card = ({ info }) => {
  const { name, percent, brewery, vegan, gluten } = info;
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div className="w-full flex-1 snap-start duration-75 ">
      {/* Image */}
      <div className=" relative h-[290px]">
        <Image src={Tiny} fill alt="Image of beer" className="object-cover" />
      </div>
      {/* bottom */}
      <div className=" flex flex-col items-start">
        <div className=" flex flex-row justify-between w-full mt-3">
          <p>{name}</p>
          <p>{percent}%</p>
        </div>
        <div className=" flex flex-row justify-between w-full mt-2">
          <p className="text-[#6C6C6C]">{brewery}</p>
          {gluten && (
            <span className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center">
              <p className="mx-auto">GF</p>
            </span>
          )}
          {vegan && (
            <span className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center">
              <p className="mx-auto">VE</p>
            </span>
          )}
        </div>
        <p className="text-wonky cursor-pointer" onClick={() => setOpen(true)}>
          Allergy Info
        </p>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InformationCircleIcon
                          className="h-6 w-6 text-yellow-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Allergy Information
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            This here is where you will list all the information
                            about Allergies. Or if you want to put here all the
                            info regarding Gluten free / Vegans ales.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Card;
