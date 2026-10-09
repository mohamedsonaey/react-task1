export default function leftSide() {
  return (
    <div className="leftSide">
      <div className="leftContent">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <div className="boxLeft">
          <h6>Name</h6>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div className="boxLeft">
          <h6>Email Address</h6>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="boxLeft">
          <h6>Phone Number</h6>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
      <div className="button">
        <button>Next Step</button>
      </div>
    </div>
  );
}
