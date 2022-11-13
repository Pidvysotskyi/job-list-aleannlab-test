import JobListItem from "../components/JobListItem/JobListItem";

type JobListProps = {
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

const JobList = (props: JobListProps) => {
  return (
    <ul>
      {props.jobsArray.map(job => {
        return (
          <JobListItem
            jobDetails={job}
            key={job.id}
          />
        );
      })}
    </ul>
  );
};

export default JobList;
