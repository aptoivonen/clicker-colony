import { useSelector } from "react-redux";
import {
  selectRound,
  selectResources,
  selectIdleColonists,
  selectAllColonists,
} from "app/selectors";

const InfoPanel = () => {
  const round = useSelector(selectRound);
  const { food, money, copper, lead, power } = useSelector(selectResources);
  const idleColonists = useSelector(selectIdleColonists);
  const allColonists = useSelector(selectAllColonists);

  return (
    <div className="flex">
      <span className="mx-1">Round {round}</span>
      <span className="mx-1">food {food}</span>
      <span className="mx-1">money {money}</span>
      <span className="mx-1">copper {copper}</span>
      <span className="mx-1">lead {lead}</span>
      <span className="mx-1">power {power}</span>
      <span className="mx-1">
        Colonists {idleColonists} / {allColonists}
      </span>
    </div>
  );
};

export default InfoPanel;
