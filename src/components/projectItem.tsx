
interface IProps {
    launch: {
      mission_name: string;
      launch_date_local: string;
    };
  }
  
  export default function ProjectItem({
    project: { id, name },
  }: any) {
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9 card-content">
            <h4>
               <span>{name}</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
  