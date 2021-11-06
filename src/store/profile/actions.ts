import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";

const actionCreator = actionCreatorFactory();

const profileActions = {
  
  // ActionCreatorsによってActionを生成する（オブジェクトを返すだけの関数）
  // 返すオブジェクトは<Partial<Profile>> Profileという型の部分集合で、Profileの項目のうち必要なものだけを渡す
  // setProfileという action のpayload（reducer に渡す値）の型をこれで定義する
  setProfile:actionCreator<Partial<Profile>>("SET_PROFILE")
};

export default profileActions;