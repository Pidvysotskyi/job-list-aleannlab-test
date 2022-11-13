import { useParams } from "react-router-dom";

type DetailedJobProps = {
  jobsArray: {
    address: string;
    id: string;
    name: string;
    benefits: Array<string>;
    createdAt: string;
    description: string;
    email: string;
    employment_type: Array<string>;
    location: { lat: number; long: number };
    phone: string;
    pictures: Array<string>;
    salary: string;
    title: string;
    updatedAt: string;
  }[];
};

const DetailedJob = (props: DetailedJobProps) => {
  const { jobId } = useParams();

  const job = props.jobsArray.find(option => option.id === jobId);

  return (
    <div>
      <h1>Some details</h1>
      <p>{job?.address}</p>
      <p>{job?.benefits}</p>
      <p>{job?.createdAt}</p>
      <p>{job?.description}</p>
      <p>{job?.email}</p>
      <p>{job?.employment_type}</p>
      <p>{job?.location.lat}</p>
      <p>{job?.location.long}</p>
    </div>
  );
};

export default DetailedJob;
