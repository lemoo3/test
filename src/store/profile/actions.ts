import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";
import { Career } from "../../domain/entity/career";
import { College } from "../../domain/entity/college";

const actionCreator = actionCreatorFactory();

const profileActions = {
  
  // ActionCreatorsによってActionを生成する（オブジェクトを返すだけの関数）
  // 返すオブジェクトは<Partial<Profile>> Profileという型の部分集合で、Profileの項目のうち必要なものだけを渡す
  // setProfileという action のpayload（reducer に渡す値）の型をこれで定義する
  setProfile:actionCreator<Partial<Profile>>("SET_PROFILE"),
  setAddress: actionCreator<Partial<Address>>("SET_ADDRESS"),
  setCareer: actionCreator<{ career: Partial<Career>; index:number}>("SET_CAREER"),

  deleteCareer: actionCreator<number>("DELETE_CAREER"),
  addCareer: actionCreator<{}>("ADD_CAREER"),

  setCollege: actionCreator<Partial<College>>("SET_COLLEGE")
};

export default profileActions;