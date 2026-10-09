import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
export default function section() {
  return (
    <section>
      <div className="container">
        <RightSide />
        <LeftSide />
      </div>
    </section>
  );
}
