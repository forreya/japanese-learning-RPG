import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

import CharacterComponent from '../design-character/character.component';
import BurgerMenu from "../BurgerMenu/BurgerMenu.component"

import { updateUserInfo } from "../../redux-store/user/userSlice";


const Bedroom = () => {
  const dispatch = useDispatch();
  const { email, character } = useSelector((state) => state.user);
  const { xp, level, wordsKnown, coins } = character.attributes;

  const fetchUserData = async () => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = await response.json();
    console.log("LOOOOK",data);
    dispatch(updateUserInfo(data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="pixelated">
    <div className="bg-bedroom2 relative bg-cover bg-center h-screen w-screen p-4 "> 
      
      <div className="w-60 h-24 flex flex-wrap relative left-[290px] overflow-hidden rounded-lg bg-white bg-opacity-80 px-4 py-2 shadow sm:p-3">
        <div className="w-1/2">
        <dt
          data-test="level"
          className="truncate text-sm font-medium text-gray-500"
        >
          Level: {level}
        </dt>
        <dt
          data-test="exp"
          className="truncate text-sm font-medium text-gray-500"
        >
          Exp: {xp}
        </dt>
        <dt
          data-test="words"
          className="truncate text-sm font-medium text-gray-500"
        >
          Words: {wordsKnown}
        </dt>
        <dt
          data-test="coin"
          className="truncate text-sm font-medium text-gray-500"
        >
          Coins: {coins}
        </dt>
        </div>
        <div className="w-1/2">
        <dd
          data-test="email"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          {email}
        </dd>
        </div>
      </div>
      <div className="relative left-[1015px] top-[-90px]">
        <BurgerMenu />
      </div> 
      <div className="ml-50 mt-100 absolute left-[695px] top-[450px]">
        {character.currentOutfit && <CharacterComponent data={character.currentOutfit}/>}
      </div>
      <div className="bookshelf cursor-pointer absolute left-[377px] top-[252px]"></div>
      <div 
        className="study-desk cursor-pointer absolute left-[942px] top-[265px]" 
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("START_GAME"))}>
      </div>
      <div className="wardrobe cursor-pointer absolute pixelated top-[485px] left-[404px]"></div>
    </div>
    </div>
    </>
  );
};

export default Bedroom;
