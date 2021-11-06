import { reducerWithInitialState} from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

// 初期値の設定
const init:Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: ""
};

//初期値をreducerWithInitialState関数に渡す
// 第一引数（アクション）profileActions.setProfile
// 第二引数（コールバック関数）新しい state を return 
const profileReducer = reducerWithInitialState(init).case(
  profileActions.setProfile,
  (state,payload) =>({
    ...state,
    ...payload
  })
);

export default profileReducer;
