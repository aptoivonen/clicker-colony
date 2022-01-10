import { useSelector, useDispatch } from "react-redux";
import { selectRound } from "app/roundSlice";
import { selectResources } from "app/resourcesSlice";
import { selectIdleColonists, selectCanAddColonist } from "app/colonistsSlice";
import { addColonist } from "app/actionCreators";

const InfoPanel = () => {
  const dispatch = useDispatch();

  const round = useSelector(selectRound);
  const { food, money, copper, lead, power } = useSelector(selectResources);
  const idleColonists = useSelector(selectIdleColonists);
  const canAddColonist = useSelector(selectCanAddColonist);

  return (
    <div className="flex">
      <span className="mx-1">Round {round}</span>
      <span className="mx-1">food {food}</span>
      <span className="mx-1">money {money}</span>
      <span className="mx-1">copper {copper}</span>
      <span className="mx-1">lead {lead}</span>
      <span className="mx-1">power {power}</span>
      <span className="mx-1">idle colonists {idleColonists}</span>
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-500 disabled:cursor-default cursor-pointer"
        disabled={!canAddColonist}
        onClick={() => dispatch(addColonist())}
      >
        Add Colonist
      </button>
    </div>
  );
};

export default InfoPanel;
