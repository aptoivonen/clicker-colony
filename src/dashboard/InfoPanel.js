import { useSelector, useDispatch } from "react-redux";
import { selectRound } from "app/roundSlice";
import { selectResources } from "app/resourcesSlice";
import { selectIdleColonists } from "app/colonistsSlice";
import { addColonistThunk } from "app/colonistsSlice";

const InfoPanel2 = () => {
  const dispatch = useDispatch();

  const round = useSelector(selectRound);
  const { food, money, copper, lead, power } = useSelector(selectResources);
  const idleColonists = useSelector(selectIdleColonists);

  return (
    <div className="flex">
      <span className="mx-1">Round {round}</span>
      <span className="mx-1">food {food}</span>
      <span className="mx-1">money {money}</span>
      <span className="mx-1">copper {copper}</span>
      <span className="mx-1">lead {lead}</span>
      <span className="mx-1">power {power}</span>
      <span className="mx-1">idle colonists {idleColonists}</span>
      <button onClick={() => dispatch(addColonistThunk())}>Add Colonist</button>
    </div>
  );
};

export default InfoPanel2;
