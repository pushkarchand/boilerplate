
interface IProps {
    launch: {
      mission_name: string;
      launch_date_local: string;
    };
  }
  
  export default function ProjectItem({
    launch: { mission_name, launch_date_local },
  }: IProps) {
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9 card-content">
            <h4>
              Mission: <span>{mission_name}</span>
            </h4>
            <p>Date: {launch_date_local}</p>
          </div>
        </div>
      </div>
    );
  }
  