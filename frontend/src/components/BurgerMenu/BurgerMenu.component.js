import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { clearPersistedData } from "../../redux-store/store";
import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { resetStore } from "../../redux-store/utils/reset";
import { useSelector } from "react-redux";
import { toggleOn, toggleOff } from "../../redux-store/music/musicSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.musicPlayer);

  const logout = () => {
    clearPersistedData();
    resetStore(dispatch);
    window.localStorage.removeItem("token");
    dispatch(setCurrentScene("START_MENU"));
  };

  const handleMusicToggle = () => {
    if (toggle === true) {
      dispatch(toggleOff());
    } else {
      dispatch(toggleOn());
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          data-test="options"
          className="bg-menuBtn w-[100px] h-[100px] justify-center gap-x-1.5 text-sm font-semibold text-gray-900 shadow-sm transform"
        ></Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  <a
                    data-test="musicToggle"
                    onClick={handleMusicToggle}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "cursor-pointer pixel-font hover:bg-gray-200 block px-4 py-2 text-sm"
                    )}
                  >
                    Toggle Music
                  </a>
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  <a
                    data-test="logout"
                    onClick={logout}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "cursor-pointer pixel-font hover:bg-gray-200 block px-4 py-2 text-sm"
                    )}
                  >
                    Logout
                  </a>
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default BurgerMenu;
