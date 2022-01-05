import { useSelector } from "react-redux";

const InfoPanel = () => {
  const round = useSelector((state) => state.round);
  const { food, money, copper, lead, power } = useSelector(
    (state) => state.resources
  );
  const idleColonists = useSelector((state) => state.colonists.idle);

  return (
    <div className="flex">
      <span className="mx-1">Round {round}</span>
      <span className="mx-1">food {food}</span>
      <span className="mx-1">money {money}</span>
      <span className="mx-1">copper {copper}</span>
      <span className="mx-1">lead {lead}</span>
      <span className="mx-1">power {power}</span>
      <span className="mx-1">idleColonists {idleColonists}</span>
    </div>
  );
};

export default InfoPanel;
