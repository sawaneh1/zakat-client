import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen }: any) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          Donate for the sake of Allah
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">
                          "If you disclose your charities, that is well, but if
                          you hide them and give them to the poor, that is
                          better for you, and it will atone for some of your
                          misdeeds, and Allah is well aware of what you do"
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 py-6 sm:px-6">
                      <div className="mb-4">
                        <label
                          htmlFor="price"
                          className="block  text-sm font-medium leading-6 text-gray-900"
                        >
                          Amount
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                            aria-describedby="price-currency"
                          />
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span
                              className="text-gray-500 sm:text-sm"
                              id="price-currency"
                            >
                              GMD
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="request"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Request
                        </label>
                        <div className="relative mt-2">
                          <input
                            type="text"
                            name="request"
                            id="request"
                            className="peer block w-full border-0 bg-gray-50 py-1.5 pb-16 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Where do you suggest the money should go"
                          />
                          <div
                            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
