import "./done.css";

export const Done = () => {
  return (
    <div className="D">
      <div className="D1">
        <h2>Need Something done?</h2>
      </div>
      <div className="Ds">
        <div className="D2">
          <div className="D3">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg?image-optimizer=force&width=256"
              alt=""
            />
            <h3>Choose Freelancer</h3>
          </div>
          <div className="D3-span">
            <span>
              It’s free and easy to post a job. Simply fill in a title,
              description and budget and competitive bids come within minutes.
            </span>
          </div>
        </div>

        <div className="D2">
          <div className="D3">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/work.svg?image-optimizer=force&width=256"
              alt=""
            />
            <h3>Post a job</h3>
          </div>
          <div className="D3-span">
            <span>
              No job is too big or too small. We've got freelancers for jobs of
              any size or budget, across 1800+ skills. No job is too complex. We
              can get it done!
            </span>
          </div>
        </div>

        <div className="D2">
          <div className="D3">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/about-me.svg?image-optimizer=force&width=256"
              alt=""
            />
            <h3>Pay safely</h3>
          </div>
          <div className="D3-span">
            <span>
              Our talented team of recruiters can help you find the best
              freelancer for the job and our technical co-pilots can even manage
              the project for you.
            </span>
          </div>
        </div>

        <div className="D2">
          <div className="D3">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/pay-safely.svg?image-optimizer=force&width=256"
              alt=""
            />
            <h3>We’re here to help</h3>
          </div>
          <div className="D3-span">
            <span>
              Only pay for work when it has been completed and you're 100%
              satisfied with the quality using our milestone payment system.
            </span>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};
