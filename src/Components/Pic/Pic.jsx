import "./pic.css";
export const Pic = () => {
  return (
    <div className="Pic">
      <div className="pic1">
        <img
          src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&width=1930"
          alt=""
        />
      </div>
      <div className="picsub">
        <h2>Freelancer Api</h2>
        <h3>50 million professionals on demand</h3>
        <p>
          Why hire people when you can simply integrate our talented cloud
          workforce instead?
        </p>

        <button>View Documentation</button>
      </div>
      <div className="pic2">
        <img
          src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/enterprise-upsell-v3.jpg?image-optimizer=force&width=1930"
          alt=""
        />
      </div>
    </div>
  );
};
