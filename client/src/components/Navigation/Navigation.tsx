import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { paths } from "../../paths";

const navigation = [
  { name: "path a", href: paths.PATH_A },
  { name: "path b", href: paths.PATH_B },
  { name: "path c", href: paths.PATH_C },
  { name: "Sign in", href: paths.SIGN_IN },
];

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-slate-100">
      <div className="px-2 h-16">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex flex-1 items-center justify-start sm:items-stretch ">
            <a href={paths.HOME}>
              <div className="flex flex-shrink-0 items-center">
                <img alt="booking" src="vite.svg" className="h-8 w-auto" />
                <span className="hidden sm:block ml-3 text-lg font-bold text-gray-700">
                  booKing
                </span>
              </div>
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="inset-y-0 left-0 flex items-center sm:hidden space-x-4">
              {/* Mobile menu buttons*/}
              <a
                href={paths.SIGN_UP}
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <UserCircleIcon className="block h-6 w-6"></UserCircleIcon>
              </a>
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((path) => (
                  <a
                    key={path.name}
                    href={path.href}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {path.name}
                  </a>
                ))}
                <a href={paths.SIGN_UP}>
                  <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Sign up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden flex justify-end">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((path) => (
            <DisclosureButton
              key={path.name}
              as="a"
              href={path.href}
              className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {path.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
