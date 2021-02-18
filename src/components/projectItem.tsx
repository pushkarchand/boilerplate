import './projectItem.scss';
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
      <div className="projectItem">
        <div className="projectItem__aviator">
           
        </div>
        <div className="projectItem__title">
           {name}
           </div>
      </div>
    );
  }
  